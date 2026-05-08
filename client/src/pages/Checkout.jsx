import { useLocation, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { useCart } from "../context/CartContext";
import emailjs from "@emailjs/browser";

import CheckoutForm from "../components/checkout/CheckoutForm";
import CheckoutProducts from "../components/checkout/CheckoutProducts";
import CheckoutSummary from "../components/checkout/CheckoutSummary";

const RAZORPAY_KEY_ID = import.meta.env.VITE_RAZORPAY_KEY_ID
const BRAND_NAME = import.meta.env.VITE_BRAND_NAME
const OWNER_EMAIL = import.meta.env.VITE_OWNER_EMAIL
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_OWNER_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_OWNER_TEMPLATE_ID
const EMAILJS_CUSTOMER_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CUSTOMER_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const Checkout = () => {

    const location = useLocation()
    const navigate = useNavigate()
    const { clearCart } = useCart()

    const singleProduct = location.state?.product || location.state?.singleProduct
    const cartItems = location.state?.cart

    const rawProducts = singleProduct
        ? [singleProduct]
        : cartItems || []

    const products = rawProducts.map(p => ({
        ...p,
        selectedSize: p.selectedSize || { size: p.size, price: p.price },
        selectedImage: p.selectedImage || p.image?.[p.size] || ""
    }))

    const [quantities, setQuantities] = useState(
        () => products.map(p => p.quantity || 1)
    )

    const [shippingData, setShippingData] = useState({
        firstName: "",
        lastName: "",
        address: "",
        area: "",
        landmark: "",
        city: "",
        state: "",
        pincode: "",
        phone: "",
        email: "",
        addressType: "Home"
    })

    const inputRefs = {
        firstName: useRef(null),
        lastName: useRef(null),
        address: useRef(null),
        area: useRef(null),
        city: useRef(null),
        state: useRef(null),
        pincode: useRef(null),
        phone: useRef(null),
        email: useRef(null),
    }

    if (products.length === 0) {
        return (
            <div className="h-[50dvh] flex justify-center items-center text-2xl font-semibold">
                No Product Found
            </div>
        )
    }

    const totalAmount = products.reduce((acc, product, index) => {
        return acc + product.selectedSize.price * quantities[index]
    }, 0)


    // Email Send Function
    const sendMail = async (paymentId) => {

        const productLines = products.map((p, i) =>
            `${p.name} (${p.type} - ${p.selectedSize.size}) x ${quantities[i]} @ ₹${p.selectedSize.price.toLocaleString("en-IN")} each`
        ).join("\n")

        const address = `${shippingData.firstName} ${shippingData.lastName}, ${shippingData.address}, ${shippingData.area}${shippingData.landmark ? ", " + shippingData.landmark : ""}, ${shippingData.city}, ${shippingData.state} - ${shippingData.pincode}`

        const templateParams = {
            payment_id: paymentId,
            customer_name: shippingData.firstName,
            customer_email: shippingData.email,
            products: productLines,
            total: `₹${totalAmount.toLocaleString("en-IN")}`,
            address: address,
            phone: shippingData.phone,
            address_type: shippingData.addressType,
            brand_name: BRAND_NAME,
            owner_email: OWNER_EMAIL,
        }

        // Mail to Owner
        await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_OWNER_TEMPLATE_ID,
            templateParams,
            EMAILJS_PUBLIC_KEY
        )

        // Mail to Customer
        await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_CUSTOMER_TEMPLATE_ID,
            templateParams,
            EMAILJS_PUBLIC_KEY
        )
    }


    // Checkout Function
    const handleCheckout = () => {

        const {
            firstName,
            lastName,
            address,
            area,
            city,
            state,
            pincode,
            phone,
            email,
        } = shippingData

        const requiredFields = [
            { key: "firstName", value: firstName },
            { key: "lastName", value: lastName },
            { key: "address", value: address },
            { key: "area", value: area },
            { key: "city", value: city },
            { key: "state", value: state },
            { key: "pincode", value: pincode },
            { key: "phone", value: phone },
            { key: "email", value: email },
        ]

        const emptyField = requiredFields.find(
            field => !field.value.trim()
        )

        if (emptyField) {
            inputRefs[emptyField.key]?.current?.focus()
            return
        }

        const options = {
            key: RAZORPAY_KEY_ID,
            amount: totalAmount * 100,
            currency: "INR",
            name: BRAND_NAME,
            description: "Order Payment",
            handler: async (response) => {
                const paymentId = response.razorpay_payment_id

                try {
                    await sendMail(paymentId)
                } catch (err) {
                    console.error("Mail error:", err)
                }

                if (cartItems) clearCart()

                navigate("/success", {
                    state: {
                        paymentId,
                        products,
                        quantities,
                        totalAmount,
                        shippingData
                    }
                })
            },
            prefill: {
                name: `${firstName} ${lastName}`,
                email: email,
                contact: phone
            },
            theme: {
                color: "#becb0c"
            },
            modal: {
                ondismiss: () => {
                    console.log("Payment dismissed by user")
                }
            }
        }

        const rzp = new window.Razorpay(options)
        rzp.open()
    }

    return (
        <>
            <section className="
                flex justify-between flex-wrap
                px-[1rem] sm:px-[5%] lg:px-[7%]
                py-[1.5rem] sm:py-[3rem] lg:py-[3.2rem] xl:py-[3.6rem] 2xl:py-[4rem]
            ">
                {/* Left */}
                <div className="
                    w-full sm:w-[52%]
                ">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="
                                mb-[1.1rem] sm:mb-[1rem] lg:mb-[0.9rem] xl:mb-[1rem] 2xl:mb-[1.1rem]
                                pb-[1.1rem] sm:pb-[1rem] lg:pb-[0.9rem] xl:pb-[1rem] 2xl:pb-[1.1rem]
                                border-b-[1px] border-[#d0d0d0] last:border-none
                            "
                        >
                            <CheckoutProducts
                                product={product}
                                quantity={quantities[index]}
                                setQuantity={(updater) => {
                                    setQuantities(prev => {
                                        const updated = [...prev]
                                        updated[index] = typeof updater === "function"
                                            ? updater(prev[index])
                                            : updater
                                        return updated
                                    })
                                }}
                            />
                        </div>
                    ))}

                    <h1 className="
                        text-[1.5rem] sm:text-[1.5rem] lg:text-[1.45rem] xl:text-[1.65rem] 2xl:text-[1.8rem]
                        mt-[1.5rem] sm:mt-[1.5rem] lg:mt-[1.6rem] xl:mt-[1.8rem] 2xl:mt-[2rem]
                        select-none
                    ">
                        Enter Shipping Details
                    </h1>

                    <CheckoutForm
                        shippingData={shippingData}
                        setShippingData={setShippingData}
                        inputRefs={inputRefs}
                    />
                </div>

                {/* Right */}
                <div className="
                    w-full sm:w-[43%] mt-[2rem] sm:mt-0 pb-[2rem] sm:pb-0
                ">
                    <CheckoutSummary
                        products={products}
                        quantities={quantities}
                        handleCheckout={handleCheckout}
                    />
                </div>
            </section>
        </>
    )
}

export default Checkout
