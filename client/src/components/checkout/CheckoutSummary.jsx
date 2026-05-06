
const CheckoutSummary = ({ product, quantity, handleCheckout }) => {

    const subtotal = product.selectedSize.price * quantity

    // const cgst = subtotal * 0.09
    // const sgst = subtotal * 0.09
    // const igst = 0

    // const total = subtotal + cgst + sgst + igst
    const total = subtotal

    return (
        <>
            <div className="
                bg-[#eee7dd]
                rounded-[15px] sm:rounded-[12px] lg:rounded-[11px] xl:rounded-[13px] 2xl:rounded-[15px]
                p-[1.2rem] sm:p-[1.5rem] lg:p-[1.8rem] xl:p-[1.9rem] 2xl:p-[2rem]
            ">
                <span className="
                    text-[1.2rem] sm:text-[1.2rem] lg:text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.3rem]
                    font-[600]
                    pb-[0.8rem] sm:pb-[0.8rem] lg:pb-[0.8rem] xl:pb-[0.9rem] 2xl:pb-[1rem]
                    block border-b-[#b2b2b2] border-[1px]
                ">
                    Order Summary
                </span>
                <div className="
                    py-[0.9rem] sm:py-[0.8rem] lg:py-[0.8rem] xl:py-[0.9rem] 2xl:py-[1rem]
                    border-b-[#949494] border-[2px] border-dashed flex justify-between items-center
                    text-[1.1rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                ">
                    <span>
                        Subtotal ({quantity} item)
                    </span>
                    <span className="font-[600]">
                        ₹ {subtotal.toLocaleString("en-IN")}
                    </span>
                </div>
                <span className="
                    text-[1.2rem] sm:text-[1.2rem] lg:text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.3rem]
                    font-[600] block
                    mt-[1.1rem] sm:mt-[1.2rem] lg:mt-[1rem] xl:mt-[1.1rem] 2xl:mt-[1.2rem]
                ">
                    Taxes
                </span>
                <div className="
                    flex justify-between items-center
                    py-[0.2rem]
                    mt-[0.4rem] sm:mt-[0.5rem] lg:mt-[0.35rem] xl:mt-[0.4rem] 2xl:mt-[0.5rem]
                    text-[1rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
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
                    text-[1rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
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
                    text-[1rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                ">
                    <span>
                        IGST
                    </span>
                    <span>
                        ₹ 0
                    </span>
                </div>
                <div className="
                    mt-[0.7rem] sm:mt-[0.8rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                    border-t-[#949494] border-[2px] border-dashed flex justify-between items-center font-[600]
                    pt-[1rem] sm:pt-[1rem] lg:pt-[0.8rem] xl:pt-[0.9rem] 2xl:pt-[1rem]
                    text-[1.3rem] sm:text-[1.2rem] lg:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.5rem]
                ">
                    <span>
                        Total
                    </span>
                    <span>
                        ₹ {total.toLocaleString("en-IN", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        })}
                    </span>
                </div>
                <button
                    onClick={handleCheckout}
                    className="
                        mt-[1.2rem] sm:mt-[1.2rem] lg:mt-[1.3rem] xl:mt-[1.4rem] 2xl:mt-[1.5rem]
                        bg-[#becb0c] hover:bg-[#aeba05] text-[#fff] text-center transition rounded-full select-none
                        py-[0.6rem] sm:py-[0.7rem] lg:py-[0.5rem] xl:py-[0.6rem] 2xl:py-[0.7rem]
                        text-[1.2rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                        font-[OrdinaryBoys] tracking-[2.5px] font-bold w-full
                ">
                    PROCEED TO CHECKOUT
                </button>
            </div>
        </>
    )
}

export default CheckoutSummary
