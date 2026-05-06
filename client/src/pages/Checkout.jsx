import CheckoutForm from "../components/checkout/CheckoutForm"
import CheckoutProducts from "../components/checkout/CheckoutProducts"
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
                    <CheckoutProducts />

                    <h1 className="
                        text-[1.8rem]
                        mt-[2.5rem]
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
