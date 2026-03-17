import CartProductCard from "./CartProductCard";

const CartProducts = () => {
    return (
        <>
            <section className="
                px-[7%]
                pt-[2rem]
                pb-[5rem]
            ">
                <div className="
                    flex justify-between flex-wrap
                ">
                    {/* Cart Products List */}
                    <div className="
                        w-[70%]
                    ">
                        <CartProductCard />
                        <CartProductCard />
                    </div>
                    {/* Cart Summary */}
                    <div className="
                        w-[28%]
                    ">

                    </div>
                </div>
            </section>
        </>
    )
}

export default CartProducts