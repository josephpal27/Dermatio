import { useLocation } from "react-router-dom";
import { useRef, useState } from "react";

import CheckoutForm from "../components/checkout/CheckoutForm";
import CheckoutProducts from "../components/checkout/CheckoutProducts";
import CheckoutSummary from "../components/checkout/CheckoutSummary";

const Checkout = () => {

    const location = useLocation()

    const singleProduct = location.state?.product || location.state?.singleProduct
    const cartItems = location.state?.cart

    const rawProducts = singleProduct
        ? [singleProduct]
        : cartItems || []

    // Normalize: cart items have flat size/price, Buy Now has selectedSize
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
    }

    if (products.length === 0) {
        return (
            <div className="h-[50dvh] flex justify-center items-center text-2xl font-bold">
                No Product Found
            </div>
        )
    }

    const handleCheckout = () => {

        const {
            firstName,
            lastName,
            address,
            area,
            city,
            state,
            pincode,
            phone
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
        ]

        const emptyField = requiredFields.find(
            field => !field.value.trim()
        )

        if (emptyField) {
            inputRefs[emptyField.key]?.current?.focus()
            return
        }

        console.log("PRODUCTS:", products)
        console.log("QUANTITIES:", quantities)
        console.log("SHIPPING:", shippingData)

        // Razorpay Logic Here Later
        alert("Proceeding to payment")
    }

    return (
        <>
            <section className="
                flex justify-between flex-wrap
                px-[1rem] sm:px-[5%] lg:px-[7%]
                py-[4rem]
            ">
                {/* Left */}
                <div className="
                    w-[52%]
                ">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="mb-[1.1rem] pb-[1.1rem] border-b-[1px] border-[#d0d0d0] last:border-none"
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
                        text-[1.8rem]
                        mt-[2rem]
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
                    w-[43%]
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
