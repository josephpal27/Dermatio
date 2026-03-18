import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartSummary = () => {

    const { cart, getTotal } = useCart();
    const navigate = useNavigate();

    return (
        <>
            <div className="
                bg-[#eee7dd]
                rounded-[15px] sm:rounded-[12px] lg:rounded-[11px] xl:rounded-[13px] 2xl:rounded-[15px]
                p-[1.5rem] sm:p-[1.2rem] lg:p-[1.2rem] xl:p-[1.35rem] 2xl:p-[1.5rem]
            ">
                <span className="
                    text-[1.3rem] sm:text-[1.2rem] lg:text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.3rem]
                    font-[600]
                    pb-[0.5rem] sm:pb-[0.5rem] lg:pb-[0.3rem] xl:pb-[0.4rem] 2xl:pb-[0.5rem]
                    block border-b-[#b2b2b2] border-[1px]
                ">
                    Your Order
                </span>
                <div className="
                    py-[0.8rem] sm:py-[0.8rem] lg:py-[0.6rem] xl:py-[0.7rem] 2xl:py-[0.8rem]
                    border-b-[#949494] border-[2px] border-dashed flex justify-between items-center
                    text-[1.1rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                ">
                    <span>
                        Subtotal ({cart.length} items)
                    </span>
                    <span className="font-[600]">
                        ₹ {getTotal().toLocaleString("en-IN")}
                    </span>
                </div>
                <span className="
                    text-[1.3rem] sm:text-[1.2rem] lg:text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.3rem]
                    font-[600] block
                    mt-[1.2rem] sm:mt-[1.2rem] lg:mt-[1rem] xl:mt-[1.1rem] 2xl:mt-[1.2rem]
                ">
                    Taxes
                </span>
                <div className="
                    flex justify-between items-center
                    py-[0.2rem]
                    mt-[0.5rem] sm:mt-[0.5rem] lg:mt-[0.35rem] xl:mt-[0.4rem] 2xl:mt-[0.5rem]
                    text-[1.1rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                ">
                    <span>
                        CGST
                    </span>
                    <span>
                        ₹ 0
                    </span>
                </div>
                <div className="
                    flex justify-between items-center
                    py-[0.2rem]
                    text-[1.1rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                ">
                    <span>
                        SGST
                    </span>
                    <span>
                        ₹ 0
                    </span>
                </div>
                <div className="
                    flex justify-between items-center
                    py-[0.2rem]
                    text-[1.1rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                ">
                    <span>
                        IGST
                    </span>
                    <span>
                        ₹ 0
                    </span>
                </div>
                <div className="
                    mt-[0.8rem] sm:mt-[0.8rem] lg:mt-[0.6rem] xl:mt-[0.7rem] 2xl:mt-[0.8rem]
                    border-t-[#949494] border-[2px] border-dashed flex justify-between items-center font-[600]
                    pt-[1rem] sm:pt-[1rem] lg:pt-[0.8rem] xl:pt-[0.9rem] 2xl:pt-[1rem]
                    text-[1.5rem] sm:text-[1.2rem] lg:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.5rem]
                ">
                    <span>
                        Total
                    </span>
                    <span>
                        ₹ {getTotal().toLocaleString("en-IN")}
                    </span>
                </div>
                <Link 
                    to="/checkout" 
                    onClick={() => navigate("/checkout", { state: { cart } })}
                    className="
                        mt-[1.5rem] sm:mt-[1.2rem] lg:mt-[1.3rem] xl:mt-[1.4rem] 2xl:mt-[1.5rem]
                        block bg-[#becb0c] hover:bg-[#aeba05] text-[#fff] text-center transition rounded-full select-none
                        py-[0.7rem] sm:py-[0.7rem] lg:py-[0.5rem] xl:py-[0.6rem] 2xl:py-[0.7rem]
                        text-[1.1rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                        font-[OrdinaryBoys] tracking-[2.5px] font-bold
                ">
                    CHECKOUT ALL
                </Link>
            </div>
        </>
    )
}

export default CartSummary
