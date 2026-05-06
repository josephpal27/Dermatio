import { useLocation } from "react-router-dom"
import { useState } from "react"

import CheckoutForm from "../components/checkout/CheckoutForm"
import CheckoutProducts from "../components/checkout/CheckoutProducts"
import CheckoutSummary from "../components/checkout/CheckoutSummary"

const Checkout = () => {

    const location = useLocation()

    const product = location.state?.product

    const [quantity, setQuantity] = useState(1)

    if (!product) {
        return (
            <div className="py-[5rem] text-center">
                No Product Found
            </div>
        )
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
                    <CheckoutForm />
                </div>

                {/* Right */}
                <div className="
                    w-[43%]
                ">
                    <CheckoutSummary
                        product={product}
                        quantity={quantity}
                    />
                </div>
            </section>
        </>
    )
}

export default Checkout
