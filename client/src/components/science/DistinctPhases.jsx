const distinctData = [
    {
        id: 1,
        title: "Acute Flare",
        desc: "Sudden immune activation releases IL-4, IL-13, and IL-31. The skin  barrier breaks down, causing intense itch, redness, swelling, and weeping within hours.",
    },
    {
        id: 2,
        title: "Subacute Transition",
        desc: "Inflammation settles but persists. Early skin thickening begins, with ongoing itch. Scratching triggers a self-sustaining itch-scratch cycle.",
    },
    {
        id: 3,
        title: "Chronic Eczema",
        desc: "Long-term inflammation leads to thick, leathery skin. Itch sensitivity increases, barrier function weakens, and moisture loss becomes constant.",
    },
]

const DistinctPhases = () => {
    return (
        <>
            <section className="
                px-[1rem] sm:px-[5%] lg:px-[7%]
                py-[2rem] sm:py-[3rem] lg:py-[4.3rem] xl:py-[4.7rem] 2xl:py-[5rem]
                flex justify-end relative flex-wrap
            ">
                {/* Box */}
                <div className="
                    w-full sm:w-[60%] h-max sm:h-[85dvh] bg-[#e4e0d5]
                    rounded-[15px] sm:rounded-[20px] lg:rounded-[35px] xl:rounded-[40px] 2xl:rounded-[45px]
                    p-[1rem] sm:p-[2rem] lg:p-[2.5rem] xl:p-[2.8rem] 2xl:p-[3rem]
                ">
                    <h3 className="
                        text-[1.8rem] sm:text-[1rem] lg:text-[3.2rem] xl:text-[3.6rem] 2xl:text-[4rem] leading-[1]
                    " data-aos="fade-up">
                        Three distinct phases, oneshared root
                    </h3>
                    <p className="
                        text-[1.1rem] sm:text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                        mt-[1.5rem] sm:mt-[0.5rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                        text-[#363636]
                    " data-aos="fade" data-aos-once="true">
                        Eczema (a topic dermatitis) progresses through recognisable phases, each with its own biochemical signature. The phase determines what is happening in the skin, and what kind of
                        support the skin needs most.
                    </p>
                </div>

                {/* Row */}
                <div className="
                    pr-[0] sm:pr-[8%] lg:pr-[10%]
                    pl-[0] sm:pl-[20%] lg:pl-[30%]
                    relative sm:absolute bottom-[0] sm:bottom-[2rem] lg:bottom-[2.6rem] xl:bottom-[2.8rem] 2xl:bottom-[3rem] left-0
                    flex justify-between flex-wrap
                    mt-[1.5rem] sm:mt-0
                ">
                    {distinctData.map((item) => {
                        return(
                            <div key={item.id} className="
                                w-full sm:w-[31.7%] bg-[#fbf4ea] overflow-hidden mb-[1.2rem] sm:mb-0
                                p-[1.3rem] sm:p-[1.2rem] lg:p-[1.1rem] xl:p-[1.2rem] 2xl:p-[1.3rem]
                                rounded-2xl shadow-md hover:shadow-lg shadow-[#a6a6a6] hover:shadow-[#b5b4b4]
                                hover:translate-y-[-5px] transition duration-300
                            ">
                                <span className="
                                    block text-[1.7rem] sm:text-[1.5rem] lg:text-[1.6rem] xl:text-[1.7rem] 2xl:text-[1.8rem]
                                " data-aos="zoom-out" data-aos-once="true">
                                    0{item.id}
                                </span>
                                <span className="
                                    block text-[1.6rem] sm:text-[1.2rem] lg:text-[1.4rem] xl:text-[1.5rem] 2xl:text-[1.6rem]
                                    mt-[0.1rem]
                                " style={{ fontFamily: `"OrdinaryBoys", sans-serif` }} data-aos="fade-right" data-aos-once="true">
                                    {item.title}
                                </span>
                                <p className="
                                    text-[1.1rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                                    mt-[0.7rem] sm:mt-[0.5rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                                    text-[#363636]
                                " data-aos="fade" data-aos-once="true">
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

export default DistinctPhases
