const compoundsList = [
    {
        title: "Polygodial",
        desc: "Anti-inflammatory, antimicrobial, and soothing",
    },
    {
        title: "Anthocyanins",
        desc: "Antioxidants that protect against free radicals",
    },
    {
        title: "Rutin",
        desc: "Anti-inflammatory; strengthens capillaries (3× more than blueberries)",
    },
    {
        title: "Magnesium",
        desc: "Supports cell regeneration and energy",
    },
    {
        title: "Zinc",
        desc: "Helps reduce acne and calm irritation",
    },
]
const ActiveCompounds = () => {
    return (
        <>
            <section className="
                px-[1rem] sm:px-[5%] lg:px-[7%]
                py-[1rem]
            ">
                <h5 className="
                    text-[1.8rem] sm:text-[1rem] lg:text-[3.2rem] xl:text-[3.6rem] 2xl:text-[4rem] leading-[1]
                ">
                    Active Compounds in the Berry
                </h5>
                <div className="mt-[3rem]">
                    {compoundsList.map((item, index) => {
                        return(
                            <p key={index} className="
                                text-[1.1rem] sm:text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                                mb-[0.5rem] sm:mb-[0.5rem] lg:mb-[0.3rem] xl:mb-[0.4rem] 2xl:mb-[0.5rem]
                                text-[#363636]
                            ">
                                <b>{item.title}</b> - {item.desc}
                            </p>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default ActiveCompounds
