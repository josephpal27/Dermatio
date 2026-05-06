import { useLocation } from "react-router-dom"
import { useRef, useState } from "react"

import CheckoutForm from "../components/checkout/CheckoutForm"
import CheckoutProducts from "../components/checkout/CheckoutProducts"
import CheckoutSummary from "../components/checkout/CheckoutSummary"

const Checkout = () => {

    const location = useLocation()

    const product = location.state?.product

    const [quantity, setQuantity] = useState(1)

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

    if (!product) {
        return (
            <div className="h-[50dvh] flex justify-center items-center text-2xl font-bold">
                No Product Found
            </div>
        )
    }

    // Shipping Data
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

        console.log("PRODUCT :", product)
        console.log("QUANTITY :", quantity)
        console.log("SHIPPING :", shippingData)

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
                    <CheckoutProducts
                        product={product}
                        quantity={quantity}
                        setQuantity={setQuantity}
                    />

                    <h1 className="
                        text-[1.8rem]
                        mt-[2.5rem]
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
                        product={product}
                        quantity={quantity}
                        handleCheckout={handleCheckout}
                    />
                </div>
            </section>
        </>
    )
}

export default Checkout
