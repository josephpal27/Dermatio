
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
                px-[7%]
                py-[1rem]
            ">
                <h5 className="
                    text-[4rem]
                    leading-[1]
                    text-center
                ">
                    We're Here For <br /> Every Stage of Eczema  Journey
                </h5>

                <div className="
                    flex
                    justify-between
                    flex-wrap
                    mt-[3rem]
                ">
                    {
                        stageOfEczemaJourneyData.map((item, index) => {
                            return (
                                <div key={index} className={`
                                    w-[48%]
                                    p-[2rem]
                                    flex
                                    justify-between
                                    items-center
                                    rounded-[45px]
                                    mb-[2rem]
                                    transition-bg
                                    duration-300
                                    ${index === 0 ? "bg-[#f0ede9]" : ""}
                                    hover:bg-[#f0ede9]
                                `}>
                                    {/*Left */}
                                    <div className="
                                        w-[15%]
                                    ">
                                        <span className="
                                            text-[4rem]
                                        ">
                                            0{item.id}
                                        </span>
                                    </div>
                                    {/* Right */}
                                    <div className="
                                        w-[80%]
                                    ">
                                        <span className="
                                            text-[2.5rem]
                                        " style={{ fontFamily: `"OrdinaryBoys", sans-serif` }}>
                                            {item.title}
                                        </span>
                                        <p className="
                                            text-[#363636]
                                            text-[1rem]
                                            mt-[1rem]
                                        ">
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
