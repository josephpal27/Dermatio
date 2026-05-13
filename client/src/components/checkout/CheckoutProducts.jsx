import { useState } from "react"
import { FaMinus, FaPlus } from "react-icons/fa6";

const CheckoutProducts = ({ product, quantity, setQuantity }) => {

    const increaseQty = () => {
        if (quantity < 10) {
            setQuantity(prev => prev + 1)
        }
    }

    const decreaseQty = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1)
        }
    }

    return (
        <div className="
            flex justify-between
        ">
            {/* Image */}
            <div className="
                w-[25%] sm:w-[15%]
                bg-[#eee7dd] select-none
                rounded-[12px] sm:rounded-[9px] lg:rounded-[8px] xl:rounded-[10px] 2xl:rounded-[12px]
                shadow-[-2.4px_2.4px_3.2px_rgba(0,0,0,0.25)]
                flex justify-center items-center
            ">
                <img
                    src={product.selectedImage}
                    alt={product.name}
                    loading="lazy"
                    className="w-full"
                />
            </div>

            {/* Content */}
            <div className="
                w-[70%] sm:w-[82%]
                flex justify-between flex-col sm:flex-row
            ">
                <div className="
                    w-full sm:w-[75%]
                ">
                    <span className="
                        block text-[#131313]
                        text-[1.1rem] sm:text-[1.4rem] lg:text-[1rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                        truncate sm:whitespace-normal
                    ">
                        {product.name}
                    </span>
                    <span className="
                        block text-[#565656] mt-[0] sm:mt-[0.2rem]
                        text-[0.85rem] sm:text-[1.1rem] lg:text-[0.7rem] xl:text-[0.8rem] 2xl:text-[0.9rem]
                    ">
                        {product.type} - {product.selectedSize.size}
                    </span>
                    <span className="
                        block font-[600] mt-[0.2rem] sm:mt-[0.5rem]
                        text-[1.1rem] sm:text-[1.4rem] lg:text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.3rem]
                    ">
                        ₹ {(product.selectedSize.price * quantity).toLocaleString("en-IN")}
                    </span>
                </div>
                {/* Quantity Selector */}
                <div>
                    <div className="
                        mt-[0.5rem] sm:mt-[0.8rem] lg:mt-[0.6rem] xl:mt-[0.7rem] 2xl:mt-[0.8rem]
                        w-max 
                        shadow-[rgba(0,0,0,0.09)_0_0_0_1px,theme(colors.gray.400)_0_0_0_1px_inset]
                        flex items-center
                        gap-[1rem] sm:gap-[1.1rem] lg:gap-[1.1rem] xl:gap-[1.2rem] 2xl:gap-[1.3rem]
                        px-[0.8rem] sm:px-[1rem] lg:px-[0.8rem] xl:px-[0.9rem] 2xl:px-[1rem]
                        py-[0.1rem] sm:py-[0.3rem] lg:py-[0.23rem] xl:py-[0.28rem] 2xl:py-[0.3rem]
                        rounded-full
                    ">
                        <button
                            onClick={decreaseQty}
                            disabled={quantity === 1}
                        >
                            <FaMinus className="
                                text-[0.9rem] sm:text-[1rem] lg:text-[0.7rem] xl:text-[0.8rem] 2xl:text-[0.9rem]
                            " />
                        </button>
                        <span className="
                            text-[1rem] sm:text-[1.2rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem] select-none
                        ">
                            {quantity}
                        </span>
                        <button
                            onClick={increaseQty}
                            disabled={quantity === 10}
                        >
                            <FaPlus className="
                                text-[0.9rem] sm:text-[1rem] lg:text-[0.7rem] xl:text-[0.8rem] 2xl:text-[0.9rem]
                            " />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutProducts
