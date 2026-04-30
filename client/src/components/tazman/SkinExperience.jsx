const skinExpData = [
    {
        id: 1,
        title: "Immediate Relief",
        desc: "Instant soothing of itching and burning the moment it is applied",
    },
    {
        id: 2,
        title: "Calmer, Less Red Skin",
        desc: "Visibly reduced redness and the appearance of inflamed skin",
    },
    {
        id: 3,
        title: "Protected from Flare Triggers",
        desc: "Disrupts the inflammation cycle that drives eczema and atopic flares",
    },
    {
        id: 4,
        title: "Long-lasting Comfort",
        desc: "Addresses the root sensor of skin discomfort for sustained relief beyond application",
    },
]

const SkinExperience = () => {
    return (
        <>
            <section className="
                px-[1rem] sm:px-[5%] lg:px-[7%]
                pt-[4rem] sm:pt-[3rem] lg:pt-[3.4rem] xl:pt-[3.7rem] 2xl:pt-[4rem]
                pb-[2.5rem] sm:pb-[2rem] lg:pb-[1.9rem] xl:pb-[2.2rem] 2xl:pb-[2.5rem]
            ">
                <h6 className="
                    text-[1.8rem] sm:text-[1rem] lg:text-[3.2rem] xl:text-[3.6rem] 2xl:text-[4rem] leading-[1]
                ">
                    What Your <br /> Skin Experiences
                </h6>
                <div className="
                    flex justify-between flex-wrap
                    mt-[3rem] sm:mt-[2rem] lg:mt-[2.6rem] xl:mt-[2.8rem] 2xl:mt-[3rem]
                ">
                    {skinExpData.map((item) => {
                        return (
                            <div key={item.id} className="
                                w-[48%]
                                p-[2.5rem] sm:p-[2rem] lg:p-[2.1rem] xl:p-[2.3rem] 2xl:p-[2.5rem]
                                bg-[#f6f1ea] rounded-[15px] shadow-md
                                mb-[3rem] sm:mb-[2rem] lg:mb-[2.4rem] xl:mb-[2.8rem] 2xl:mb-[3rem]
                                hover:scale-[1.02] transition duration-300 hover:shadow-lg
                            ">
                                <span className="
                                    text-[2rem] sm:text-[1.5rem] lg:text-[1.8rem] xl:text-[1.9rem] 2xl:text-[2rem]
                                    block text-[#000]
                                " style={{ fontFamily: `"OrdinaryBoys", sans-serif` }}>
                                    {item.title}
                                </span>
                                <p className="
                                    text-[1.1rem] sm:text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                                    mt-[0.5rem] sm:mt-[0.5rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                                    text-[#363636] w-[80%]
                                ">
                                    {item.desc}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default SkinExperience
