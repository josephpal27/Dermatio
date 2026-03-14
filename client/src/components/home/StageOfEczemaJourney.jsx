
let stageOfEczemaJourneyData = [
    {
        id: 1,
        title: "Trigger Prevention",
        desc: "Strengthens skin's natural barrier before flares begin. Daily protection against environmental stressors.",
    },
    {
        id: 2,
        title: "Flare-Up Relief",
        desc: "Fast-acting formulas to calm inflammation, reduce redness, and stop the itch-scratch cycle in its tracks.",
    },
    {
        id: 3,
        title: "Recovery Support",
        desc: "Repair microtears, restore barrier function, and replenish moisture as skin heals.",
    },
    {
        id: 4,
        title: "Maintenance Care",
        desc: "Long-term barrier support to reduce recurrence and keep skin resilient between flares.",
    },
]

const StageOfEczemaJourney = () => {
    return (
        <>
            <section className="
                px-[1rem] sm:px-[5%] lg:px-[7%]
                py-[0.3rem] sm:py-[0.5rem]
                overflow-hidden
            ">
                <h5 className="
                    text-[1.8rem] sm:text-[1rem] lg:text-[3.2rem] xl:text-[3.6rem] 2xl:text-[4rem]
                    leading-[1] text-center
                " data-aos="fade-up">
                    We're Here For <br className="hidden sm:block" /> Every <br className="sm:hidden" /> Stage of Eczema  Journey
                </h5>

                <div className="
                    flex justify-between flex-wrap
                    mt-[1.8rem] sm:mt-[3rem] lg:mt-[2.6rem] xl:mt-[2.8rem] 2xl:mt-[3rem]
                ">
                    {
                        stageOfEczemaJourneyData.map((item, index) => {
                            return (
                                <div key={index} className={`
                                    w-[100%] sm:w-[48%]
                                    p-[1rem] sm:p-[2rem] lg:p-[1.6rem] xl:p-[1.8rem] 2xl:p-[2rem]
                                    flex justify-between items-center
                                    rounded-[35px] sm:rounded-[40px] lg:rounded-[35px] xl:rounded-[40px] 2xl:rounded-[45px]
                                    mb-[1.2rem] sm:mb-[2rem] lg:mb-[1.6rem] xl:mb-[1.8rem] 2xl:mb-[2rem]
                                    transition-bg duration-300
                                    ${index === 0 ? "bg-[#f0ede9]" : ""} hover:bg-[#f0ede9]
                                `}>
                                    {/*Left */}
                                    <div className="
                                        w-[15%]
                                    ">
                                        <span className="
                                            text-[1.8rem] sm:text-[1rem] lg:text-[3.2rem] xl:text-[3.6rem] 2xl:text-[4rem]
                                            block
                                        " data-aos="zoom-in">
                                            0{item.id}
                                        </span>
                                    </div>
                                    {/* Right */}
                                    <div className="
                                        w-[80%]
                                    ">
                                        <span className="
                                            text-[1.7rem] sm:text-[2.5rem] lg:text-[1.9rem] xl:text-[2.2rem] 2xl:text-[2.5rem]
                                            block
                                        " style={{ fontFamily: `"OrdinaryBoys", sans-serif` }} data-aos="fade-right" data-aos-once="true">
                                            {item.title}
                                        </span>
                                        <p className="
                                            text-[#363636]
                                            text-[1rem] sm:text-[1rem] lg:text-[0.8rem] xl:text-[0.95rem] 2xl:text-[1rem]
                                            mt-[0.5rem] sm:mt-[1rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                                        " data-aos="fade">
                                            {item.desc}
                                        </p>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default StageOfEczemaJourney
