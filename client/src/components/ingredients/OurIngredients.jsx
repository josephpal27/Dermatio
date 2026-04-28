
const OurIngredients = () => {
    return (
        <>
            <section className="
                px-[1rem] sm:px-[5%] lg:px-[7%] bg-[#fbf4ea]
                py-[3rem]
                mt-[2.5rem]
                rounded-[15px] sm:rounded-[20px] lg:rounded-[35px] xl:rounded-[40px] 2xl:rounded-[45px]
            ">
                {/* Top */}
                <div className="flex justify-between flex-wrap">
                    <div className="
                        w-[50%] 
                        flex flex-col justify-center
                        pr-[5rem]
                    ">
                        <h2 className="
                            text-[1.8rem] sm:text-[1rem] lg:text-[3.2rem] xl:text-[3.6rem] 2xl:text-[4rem] leading-[1]
                        ">
                            Our Ingredients
                        </h2>
                        <span className="
                            text-[1.1rem] sm:text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                            mt-[1rem] sm:mt-[1.5rem] lg:mt-[1.3rem] xl:mt-[1.4rem] 2xl:mt-[1.5rem]
                            text-[#363636] block font-[700]
                        ">
                            Where science meets skin understanding
                        </span>
                        <p className="
                            text-[1.1rem] sm:text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                            mt-[1rem] sm:mt-[1.5rem] lg:mt-[1.8rem] xl:mt-[1.9rem] 2xl:mt-[2rem]
                            text-[#363636]
                        ">
                            At Dermatio, every ingredient is chosen with
                            intention. We combine clinically-backed actives with skin-soothing botanicals to create formulas that don’t just treat but also support, protect,
                            and restore. Rooted in dermatological science and guided by sensitivity, our ingredients work in harmony with your skin, never against it.
                        </p>
                    </div>
                    <div className="w-[50%]">
                        <img
                            src="/images/ingredients/ingredient.png"
                            alt="Ingredients"
                            loading="lazy"
                            className="
                                w-full
                                rounded-[15px] sm:rounded-[20px] lg:rounded-[18px] xl:rounded-[22px] 2xl:rounded-[25px]
                            "
                        />
                    </div>
                </div>

                {/* Bottom */}
                <div className="flex justify-between flex-wrap">
                    <div className="w-[50%]">
                        <img
                            src="/images/ingredients/commitment.png"
                            alt="Commitment"
                            loading="lazy"
                            className="
                                w-full
                                rounded-[15px] sm:rounded-[20px] lg:rounded-[18px] xl:rounded-[22px] 2xl:rounded-[25px]
                            "
                        />
                    </div>
                    <div className="
                        w-[50%] 
                        flex flex-col justify-center
                        pl-[5rem]
                    ">
                        <h3 className="
                            text-[1.8rem] sm:text-[1rem] lg:text-[3.2rem] xl:text-[3.6rem] 2xl:text-[4rem] leading-[1]
                        ">
                            Our Commitment
                        </h3>
                        <span className="
                            text-[1.1rem] sm:text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                            mt-[1rem] sm:mt-[1.5rem] lg:mt-[1.3rem] xl:mt-[1.4rem] 2xl:mt-[1.5rem]
                            text-[#363636] block font-[700]
                        ">
                            Thoughtful. Transparent. Skin-first.
                        </span>
                        <p className="
                            text-[1.1rem] sm:text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                            mt-[1rem] sm:mt-[1.5rem] lg:mt-[1.8rem] xl:mt-[1.9rem] 2xl:mt-[2rem]
                            text-[#363636]
                        ">
                            We believe skincare should be as safe as it is
                            effective. That’s why every ingredient we use is carefully evaluated for its efficacy, safety, and compatibility with sensitive skin. No harsh additives. No unnecessary fillers. Just purposeful formulations designed to respect your skin barrier and deliver results you can trust, every single day.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurIngredients
