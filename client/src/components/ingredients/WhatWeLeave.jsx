
const WhatWeLeave = () => {
    return (
        <>
            <section className="
                px-[1rem] sm:px-[5%] lg:px-[7%] bg-[#f6f1eb]
                py-[3rem]
                flex justify-between items-center flex-wrap
                mb-[1rem]
            ">
                <div className="w-[46%]">
                    <h5 className="
                        text-[1.8rem] sm:text-[1rem] lg:text-[3.2rem] xl:text-[3.6rem] 2xl:text-[4rem] leading-[1]
                    ">
                        What We Leave Out Matters Too
                    </h5>
                    <p className="
                        text-[1.1rem] sm:text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                        mt-[1rem] sm:mt-[1.5rem] lg:mt-[1.8rem] xl:mt-[1.9rem] 2xl:mt-[2rem]
                        text-[#363636]
                    ">
                        Just as important as what goes into our formulas is what we choose to leave out. Our products are thoughtfully formulated to be gentle, safe, and suitable for sensitive, eczema-prone skin. To irritants. To unnecessary additives. Just skin-first care you can trust.
                    </p>
                </div>
                <div className="w-[48%]">
                    <img
                        src="/images/ingredients/what-we-leave.png"
                        alt="What We Leave"
                        loading="lazy"
                        className="
                            w-full
                            rounded-[15px] sm:rounded-[20px] lg:rounded-[18px] xl:rounded-[22px] 2xl:rounded-[25px]
                        "
                    />
                </div>
            </section>
        </>
    )
}

export default WhatWeLeave
