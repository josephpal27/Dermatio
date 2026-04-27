import CheckoutForm from "../components/checkout/CheckoutForm"
import CheckoutSummary from "../components/checkout/CheckoutSummary"

const Checkout = () => {

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
                    <h1 className="
                        text-[2rem]
                    ">
                        Enter Shipping Details
                    </h1>
                    <CheckoutForm />
                </div>

                {/* Right */}
                <div className="
                    w-[43%]
                ">
                    <CheckoutSummary />
                </div>
            </section>
        </>
    )
}

export default Checkout
