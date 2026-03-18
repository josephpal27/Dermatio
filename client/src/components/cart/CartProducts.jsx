import CartProductCard from "./CartProductCard";
import CartSummary from './CartSummary';
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

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
                    <div className={`
                        ${cart.length === 0 ? "w-full" : "w-[67%]"}
                    `}>
                        {cart.length === 0 ? (
                            <div className="
                                text-center flex flex-col items-center justify-center
                                h-[72vh]
                            ">
                                <span className="
                                    text-[1.7rem] 
                                    font-[600] text-[#131313] font-[OrdinaryBoys]
                                ">
                                    Your Cart is Empty 🛒
                                </span>

                                <p className="
                                    text-[#565656] 
                                    text-[1.2rem]
                                    mt-[0.5rem]
                                ">
                                    Looks like you haven’t added anything yet.
                                </p>

                                <Link
                                    to="/products"
                                    className="
                                        inline-block bg-[#becb0c] hover:bg-[#aeba05] text-white rounded-full transition
                                        mt-[1.5rem]
                                        px-[1.5rem] 
                                        py-[0.6rem] 
                                        text-[1.1rem]
                                    "
                                >
                                    Continue Shopping
                                </Link>
                            </div>
                        ) : (
                            cart.map((item, index) => (
                                <CartProductCard key={index} item={item} />
                            ))
                        )}
                    </div>
                    {/* Cart Summary */}
                    {cart.length > 0 && (
                        <div className="
                            w-[29%] 
                            py-[2rem]
                        ">
                            <CartSummary />
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}

export default CartProducts