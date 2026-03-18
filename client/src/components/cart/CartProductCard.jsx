import { FaMinus, FaPlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const CartProductCard = () => {
    return (
        <>
            <div className="
                flex justify-between
                border-b-[1px] border-[#bcbcbc]
                py-[2rem]
            ">
                {/* Image */}
                <div className="
                    w-[19%]
                    bg-[#eee7dd]
                    py-[1.5rem]
                    rounded-[15px]
                    shadow-[-2.4px_2.4px_3.2px_rgba(0,0,0,0.25)]
                ">
                    <img src="/images/products/1.avif" alt="" loading="lazy" className="w-full" />
                </div>
                {/* Content */}
                <div className="
                    w-[78%]
                ">
                    <div className="flex justify-between">
                        <span className="
                            w-[80%] block text-[#131313]
                            text-[1.4rem]
                        ">
                            Advance Dermal Therapy
                        </span>

                        <span className="
                            w-[15%] block text-end font-[600]
                            text-[1.4rem]
                        ">
                            ₹ 799
                        </span>
                    </div>
                    <span className="
                        text-[1.2rem]
                        text-[#565656]
                    ">
                        LOTION
                    </span>

                    {/* Quantity Selector */}
                    <div className="
                        mt-[0.8rem]
                        w-max 
                        shadow-[rgba(0,0,0,0.09)_0_0_0_1px,theme(colors.gray.400)_0_0_0_1px_inset]
                        flex items-center
                        gap-[1.3rem]
                        px-[1rem]
                        py-[0.3rem]
                        rounded-full
                    ">
                        <button>
                            <FaMinus className="
                                text-[0.9rem]
                            " />
                        </button>
                        <span className="
                            text-[1rem]
                        ">
                            1
                        </span>
                        <button>
                            <FaPlus className="
                                text-[0.9rem]
                            " />
                        </button>
                    </div>

                    {/* Buy Now & Remove Btn */}
                    <div className="
                        mt-[1.1rem]
                        flex justify-between items-center
                    ">
                        {/* Buy Now */}
                        <Link to="/checkout" className="
                            bg-[#005aed] hover:bg-[#004ecb] text-[#fff] transition
                            px-[1.1rem]
                            py-[0.3rem]
                            rounded-[10px]
                            text-[1rem]
                        ">
                            Buy Now
                        </Link>
                        {/* Remove */}
                        <MdDelete className="
                            text-[1.5rem]
                            text-[#131313] hover:text-[#b00101] transition cursor-pointer
                        " />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartProductCard