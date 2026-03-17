import { FaMinus, FaPlus } from "react-icons/fa6";

const CartProducts = () => {
    return (
        <>
            <section className="
                px-[7%]
                py-[4rem]
            ">
                {/* Cart Products List */}
                <div className="
                    flex justify-between
                ">
                    {/* Image */}
                    <div className="
                        w-[15%]
                        bg-[#eee7dd]
                        py-[2rem]
                        rounded-[15px]
                        shadow-[-2.4px_2.4px_3.2px_rgba(0,0,0,0.25)]
                    ">
                        <img src="/images/products/1.avif" alt="" loading="lazy" className="w-full" />
                    </div>
                    {/* Content */}
                    <div className="
                        w-[82%]
                    ">
                        <div className="flex justify-between">
                                <span className="
                                    w-[80%] block text-[#131313]
                                    text-[1.5rem]
                                ">
                                    Advance Dermal Therapy
                                </span>
    
                                <span className="
                                    w-[15%] block text-end font-[600]
                                    text-[1.5rem]
                                ">
                                    ₹ 799
                                </span>
                        </div>
                        <span className="
                            text-[1.3rem]
                            text-[#565656]
                        ">
                            LOTION
                        </span>
                        <div>
                            {/* Quantity Selector */}
                            <div>
                                <button>
                                    <FaMinus />
                                </button>
                                <span>
                                    1
                                </span>
                                <button>
                                    <FaPlus />
                                </button>
                            </div>
                            {/* Buy Now */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CartProducts