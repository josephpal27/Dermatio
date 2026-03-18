import CartProductCard from "./CartProductCard";
import CartSummary from './CartSummary';
import { useCart } from "../../context/CartContext";

const CartProducts = () => {

    const { cart } = useCart();

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
                        {
                            cart.map((item, index) => (
                                <CartProductCard key={index} item={item} />
                            ))
                        }
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