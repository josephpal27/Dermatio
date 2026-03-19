import { FaMinus, FaPlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const CartProductCard = ({ item }) => {

    const { removeFromCart, updateQuantity } = useCart();

    return (
        <>
            <div className="
                flex justify-between
                border-b-[1px] border-[#bcbcbc]
                py-[1.5rem] sm:py-[1.5rem] lg:py-[1.6rem] xl:py-[1.8rem] 2xl:py-[2rem]
            ">
                {/* Image */}
                <div className="
                    w-[28%] sm:w-[19%]
                    bg-[#eee7dd] select-none
                    py-[1rem] sm:py-[1.2rem] lg:py-[1.15rem] xl:py-[1.35rem] 2xl:py-[1.5rem]
                    rounded-[15px] sm:rounded-[12px] lg:rounded-[11px] xl:rounded-[13px] 2xl:rounded-[15px]
                    shadow-[-2.4px_2.4px_3.2px_rgba(0,0,0,0.25)]
                    flex justify-center items-center
                ">
                    <img src={item.image} alt={item.name} loading="lazy" className="w-full" />
                </div>
                {/* Content */}
                <div className="
                    w-[68%] sm:w-[78%]
                ">
                    <div className="flex justify-between">
                        <span className="
                            w-[80%] block text-[#131313]
                            text-[1.2rem] sm:text-[1.2rem] lg:text-[1.1rem] xl:text-[1.25rem] 2xl:text-[1.4rem]
                            truncate sm:whitespace-normal
                        ">
                            {item.name}
                        </span>

                        <span className="
                            w-[15%] text-end font-[600]
                            text-[1.4rem] sm:text-[1.2rem] lg:text-[1.1rem] xl:text-[1.25rem] 2xl:text-[1.4rem]
                            hidden sm:block
                        ">
                            ₹ {(item.price * item.quantity).toLocaleString("en-IN")}
                        </span>
                    </div>
                    <span className="
                        text-[0.9rem] sm:text-[1rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                        text-[#565656]
                    ">
                        {item.type} - {item.size}
                    </span>

                    <div className="flex items-center justify-between mt-[0.3rem] sm:mt-0">
                    <span className="
                        font-[600] block sm:hidden
                        text-[1.25rem]
                    ">
                        ₹ {(item.price * item.quantity).toLocaleString("en-IN")}
                    </span>

                    {/* Quantity Selector */}
                    <div className="
                        mt-[0] sm:mt-[0.8rem] lg:mt-[0.6rem] xl:mt-[0.7rem] 2xl:mt-[0.8rem]
                        w-max 
                        shadow-[rgba(0,0,0,0.09)_0_0_0_1px,theme(colors.gray.400)_0_0_0_1px_inset]
                        flex items-center
                        gap-[1rem] sm:gap-[1.1rem] lg:gap-[1.1rem] xl:gap-[1.2rem] 2xl:gap-[1.3rem]
                        px-[0.8rem] sm:px-[1rem] lg:px-[0.8rem] xl:px-[0.9rem] 2xl:px-[1rem]
                        py-[0.25rem] sm:py-[0.3rem] lg:py-[0.23rem] xl:py-[0.28rem] 2xl:py-[0.3rem]
                        rounded-full
                    ">
                        <button onClick={() => updateQuantity(item.id, item.size, "dec")}>
                            <FaMinus className="
                                text-[0.9rem] sm:text-[0.8rem] lg:text-[0.7rem] xl:text-[0.8rem] 2xl:text-[0.9rem]
                            " />
                        </button>
                        <span className="
                            text-[1rem] sm:text-[1rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem] select-none
                        ">
                            {item.quantity}
                        </span>
                        <button onClick={() => updateQuantity(item.id, item.size, "inc")}>
                            <FaPlus className="
                                text-[0.9rem] sm:text-[0.8rem] lg:text-[0.7rem] xl:text-[0.8rem] 2xl:text-[0.9rem]
                            " />
                        </button>
                    </div>
                    </div>

                    {/* Buy Now & Remove Btn */}
                    <div className="
                        mt-[0.8rem] sm:mt-[1rem] lg:mt-[0.9rem] xl:mt-[1rem] 2xl:mt-[1.1rem]
                        flex justify-between items-center
                    ">
                        {/* Buy Now */}
                        <Link
                            to="/checkout"
                            state={{ singleProduct: item }}
                            className="
                                bg-[#005aed] hover:bg-[#004ecb] text-[#fff] transition select-none
                                px-[0.9rem] sm:px-[1.1rem] lg:px-[0.9rem] xl:px-[1rem] 2xl:px-[1.1rem]
                                py-[0.25rem] sm:py-[0.3rem] lg:py-[0.23rem] xl:py-[0.28rem] 2xl:py-[0.3rem]
                                rounded-[7px] sm:rounded-[10px] lg:rounded-[6px] xl:rounded-[8px] 2xl:rounded-[10px]
                                text-[0.95rem] sm:text-[1rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem]
                        ">
                            Buy Now
                        </Link>
                        {/* Remove */}
                        <MdDelete className="
                            text-[1.4rem] sm:text-[1.2rem] lg:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.5rem]
                            text-[#131313] hover:text-[#b00101] transition cursor-pointer
                        " onClick={() => removeFromCart(item.id, item.size)} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartProductCard