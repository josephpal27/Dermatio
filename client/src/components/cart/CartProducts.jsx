import CartProductCard from "./CartProductCard";
import CartSummary from './CartSummary';
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartProducts = () => {

    const { cart } = useCart();

    return (    
        <>
            <section className="
                px-[1rem] sm:px-[5%] lg:px-[7%]
                pt-[1rem] sm:pt-[1.5rem] lg:pt-[1.4rem] xl:pt-[1.7rem] 2xl:pt-[2rem]
                pb-[2rem] sm:pb-[4rem] lg:pb-[4rem] xl:pb-[4.5rem] 2xl:pb-[5rem]
            ">
                <div className="
                    flex justify-between flex-wrap
                ">
                    {/* Cart Products List */}
                    <div className={`
                        ${cart.length === 0 ? "w-full" : "w-[100%] sm:w-[67%]"}
                    `}>
                        {cart.length === 0 ? (
                            <div className="
                                text-center flex flex-col items-center justify-center
                                h-[72vh]
                            ">
                                <span className="
                                    text-[1.75rem] sm:text-[1.5rem] lg:text-[1.45rem] xl:text-[1.65rem] 2xl:text-[1.8rem]
                                    font-[600] text-[#131313] font-[OrdinaryBoys]
                                ">
                                    Your Cart is Empty 🛒
                                </span>

                                <p className="
                                    text-[#565656] 
                                    text-[0.95rem] sm:text-[1.2rem] lg:text-[1rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                                    mt-[0.3rem] sm:mt-[0.5rem] lg:mt-[0.4rem] xl:mt-[0.45rem] 2xl:mt-[0.5rem]
                                ">
                                    Looks like you haven’t added anything yet.
                                </p>

                                <Link
                                    to="/products"
                                    className="
                                        inline-block bg-[#becb0c] hover:bg-[#aeba05] text-white rounded-full transition
                                        mt-[1.5rem] sm:mt-[1.5rem] lg:mt-[1.3rem] xl:mt-[1.4rem] 2xl:mt-[1.5rem]
                                        px-[1.4rem] sm:px-[1.2rem] lg:px-[1.3rem] xl:px-[1.4rem] 2xl:px-[1.5rem]
                                        py-[0.65rem] sm:py-[0.5rem] lg:py-[0.5rem] xl:py-[0.55rem] 2xl:py-[0.6rem]
                                        text-[1.1rem] sm:text-[1.1rem] lg:text-[0.85rem] xl:text-[1rem] 2xl:text-[1.1rem]
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
                            w-[100%] sm:w-[29%] 
                            py-[2rem] sm:py-[1.5rem] lg:py-[1.6rem] xl:py-[1.8rem] 2xl:py-[2rem]
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