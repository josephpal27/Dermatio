
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
                py-[2rem]
            ">
                <h5 className="

                ">
                    We're Here For <br /> Every Stage of Eczema  Journey
                </h5>

                <div className="

                ">
                    {
                        stageOfEczemaJourneyData.map((item, index) => {
                            return (
                                <div key={index} className="

                                ">
                                    {/*Left */}
                                    <div>
                                        <span>
                                            0{item.id}
                                        </span>
                                    </div>
                                    {/* Right */}
                                    <div>
                                        <span>
                                            {item.title}
                                        </span>
                                        <p>
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
