import { useLocation, Link } from "react-router-dom"

const Success = () => {

    const location = useLocation()

    const {
        paymentId,
        products,
        quantities,
        totalAmount,
        shippingData
    } = location.state || {}

    if (!paymentId) {
        return (
            <div className="h-[50dvh] flex justify-center items-center text-2xl font-semibold">
                No Order Found
            </div>
        )
    }

    const fullAddress = `${shippingData.address}, ${shippingData.area}${shippingData.landmark ? ", " + shippingData.landmark : ""}, ${shippingData.city}, ${shippingData.state} - ${shippingData.pincode}`

    return (
        <>
            <section className="
                px-[1rem] sm:px-[5%] lg:px-[7%]
                py-[2rem] sm:py-[3rem] lg:py-[3.2rem] xl:py-[3.6rem] 2xl:py-[4rem]
                min-h-[80dvh]
                flex justify-center items-start
            ">
                <div className="w-full max-w-[680px]">

                    {/* Header */}
                    <div className="text-center mb-[2rem] sm:mb-[2.5rem]">
                        <div className="
                            w-[5rem] h-[5rem] sm:w-[5.5rem] sm:h-[5.5rem]
                            bg-[#becb0c] rounded-full
                            flex justify-center items-center
                            mx-auto mb-[1.2rem]
                        ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-[2.5rem] h-[2.5rem] sm:w-[2.8rem] sm:h-[2.8rem]"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="white"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                        </div>
                        <h1 className="
                            text-[1.8rem] sm:text-[2rem] lg:text-[1.9rem] xl:text-[2.1rem] 2xl:text-[2.3rem]
                            font-[600] text-[#131313]
                        ">
                            Payment Successful!
                        </h1>
                        <p className="
                            text-[#565656] mt-[0.4rem]
                            text-[0.95rem] sm:text-[1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.05rem]
                        ">
                            Thank you, {shippingData.firstName}! Your order has been placed successfully.
                        </p>
                    </div>

                    {/* Payment ID */}
                    <div className="
                        bg-[#eee7dd]
                        rounded-[12px] sm:rounded-[14px]
                        p-[1rem] sm:p-[1.2rem]
                        mb-[1rem]
                        flex justify-between items-center gap-[1rem]
                    ">
                        <span className="
                            text-[0.85rem] sm:text-[0.9rem] text-[#565656] shrink-0 font-[500]
                        ">
                            Payment ID
                        </span>
                        <span className="
                            text-[0.8rem] sm:text-[0.85rem] font-[600] text-[#131313] break-all text-right
                        ">
                            {paymentId}
                        </span>
                    </div>

                    {/* Order Items */}
                    <div className="
                        bg-[#eee7dd]
                        rounded-[12px] sm:rounded-[14px]
                        p-[1rem] sm:p-[1.2rem]
                        mb-[1rem]
                    ">
                        <span className="
                            block font-[600] text-[#131313]
                            text-[1rem] sm:text-[1.05rem] lg:text-[0.95rem] xl:text-[1rem] 2xl:text-[1.05rem]
                            mb-[0.8rem] pb-[0.8rem] border-b-[1px] border-[#c8c0b5]
                        ">
                            Order Items
                        </span>
                        <div className="flex flex-col gap-[0.7rem] sm:gap-[0.8rem]">
                            {products.map((product, index) => (
                                <div
                                    key={index}
                                    className="flex justify-between items-center gap-[1rem]"
                                >
                                    <div className="flex items-center gap-[0.8rem] sm:gap-[1rem]">
                                        <div className="
                                            w-[3rem] h-[3rem] sm:w-[3.5rem] sm:h-[3.5rem]
                                            bg-white rounded-[8px]
                                            flex justify-center items-center
                                            shrink-0
                                            shadow-[-1.5px_1.5px_2px_rgba(0,0,0,0.15)]
                                        ">
                                            <img
                                                src={product.selectedImage}
                                                alt={product.name}
                                                className="w-full rounded-[8px]"
                                            />
                                        </div>
                                        <div>
                                            <span className="
                                                block text-[#131313] font-[500]
                                                text-[0.9rem] sm:text-[0.95rem] lg:text-[0.85rem] xl:text-[0.9rem] 2xl:text-[0.95rem]
                                            ">
                                                {product.name}
                                            </span>
                                            <span className="
                                                block text-[#565656] mt-[0.1rem]
                                                text-[0.8rem] sm:text-[0.85rem] lg:text-[0.75rem] xl:text-[0.8rem] 2xl:text-[0.85rem]
                                            ">
                                                {product.type} - {product.selectedSize.size} × {quantities[index]}
                                            </span>
                                        </div>
                                    </div>
                                    <span className="
                                        font-[600] text-[#131313] shrink-0
                                        text-[0.95rem] sm:text-[1rem] lg:text-[0.9rem] xl:text-[0.95rem] 2xl:text-[1rem]
                                    ">
                                        ₹ {(product.selectedSize.price * quantities[index]).toLocaleString("en-IN")}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Total */}
                        <div className="
                            mt-[0.8rem] pt-[0.8rem] border-t-[2px] border-dashed border-[#b2a99a]
                            flex justify-between items-center font-[600]
                            text-[1.1rem] sm:text-[1.15rem] lg:text-[1.05rem] xl:text-[1.1rem] 2xl:text-[1.15rem]
                        ">
                            <span>Total Paid</span>
                            <span>
                                ₹ {totalAmount.toLocaleString("en-IN", {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                })}
                            </span>
                        </div>
                    </div>

                    {/* Shipping Address */}
                    <div className="
                        bg-[#eee7dd]
                        rounded-[12px] sm:rounded-[14px]
                        p-[1rem] sm:p-[1.2rem]
                        mb-[1.5rem] sm:mb-[2rem]
                    ">
                        <span className="
                            block font-[600] text-[#131313]
                            text-[1rem] sm:text-[1.05rem] lg:text-[0.95rem] xl:text-[1rem] 2xl:text-[1.05rem]
                            mb-[0.6rem] pb-[0.8rem] border-b-[1px] border-[#c8c0b5]
                        ">
                            Shipping To
                        </span>
                        <p className="
                            text-[#565656] leading-[1.8]
                            text-[0.9rem] sm:text-[0.95rem] lg:text-[0.85rem] xl:text-[0.9rem] 2xl:text-[0.95rem]
                        ">
                            {shippingData.firstName} {shippingData.lastName}<br />
                            {fullAddress}<br />
                            Phone: {shippingData.phone}<br />
                            <span className="
                                inline-block mt-[0.3rem]
                                bg-[#becb0c] text-white text-[0.75rem] font-[600]
                                px-[0.6rem] py-[0.1rem] rounded-full
                            ">
                                {shippingData.addressType}
                            </span>
                        </p>
                    </div>

                    {/* CTA */}
                    <Link
                        to="/products"
                        className="
                            block bg-[#becb0c] hover:bg-[#aeba05] text-white text-center
                            transition rounded-full select-none
                            py-[0.65rem] sm:py-[0.7rem] lg:py-[0.55rem] xl:py-[0.6rem] 2xl:py-[0.7rem]
                            text-[1rem] sm:text-[1.05rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.05rem]
                            font-[OrdinaryBoys] tracking-[2.5px] font-bold
                        "
                    >
                        CONTINUE SHOPPING
                    </Link>
                </div>
            </section>
        </>
    )
}

export default Success