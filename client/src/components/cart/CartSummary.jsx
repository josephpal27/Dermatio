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
                rounded-[15px]
                p-[1.5rem]
            ">
                <span className="
                    text-[1.3rem] 
                    font-[600]
                    pb-[0.5rem]
                    block border-b-[#b2b2b2] border-[1px]
                ">
                    Your Order
                </span>
                <div className="
                    py-[0.8rem]
                    border-b-[#949494] border-[2px] border-dashed flex justify-between items-center
                    text-[1.1rem]
                ">
                    <span>
                        Subtotal ({cart.length} items)
                    </span>
                    <span className="font-[600]">
                        ₹ {getTotal()}
                    </span>
                </div>
                <span className="
                    text-[1.3rem] 
                    font-[600] block
                    mt-[1.2rem]
                ">
                    Taxes
                </span>
                <div className="
                    flex justify-between items-center
                    py-[0.2rem]
                    mt-[0.5rem]
                    text-[1.1rem]
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
                    text-[1.1rem]
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
                    text-[1.1rem]
                ">
                    <span>
                        IGST
                    </span>
                    <span>
                        ₹ 0
                    </span>
                </div>
                <div className="
                    mt-[0.8rem]
                    border-t-[#949494] border-[2px] border-dashed flex justify-between items-center
                    pt-[1rem]
                    text-[1.5rem]
                ">
                    <span>
                        Total
                    </span>
                    <span>
                        ₹ {getTotal()}
                    </span>
                </div>
                <Link 
                    to="/checkout" 
                    onClick={() => navigate("/checkout", { state: { cart } })}
                    className="
                        mt-[1.5rem]
                        block bg-[#becb0c] hover:bg-[#aeba05] text-[#fff] text-center transition rounded-full
                        py-[0.7rem] 
                        text-[1.1rem]
                ">
                    CHECKOUT ALL
                </Link>
            </div>
        </>
    )
}

export default CartSummary
