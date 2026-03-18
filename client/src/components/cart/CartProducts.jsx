import CartProductCard from "./CartProductCard";
import CartSummary from './CartSummary';

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
                        w-[67%]
                    ">
                        <CartProductCard /> 
                        <CartProductCard />
                    </div>
                    {/* Cart Summary */}
                    <div className="
                        w-[29%]
                        py-[2rem]
                    ">
                        <CartSummary />
                    </div>
                </div>
            </section>
        </>
    )
}

export default CartProducts