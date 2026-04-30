import { RiArrowRightWideLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";

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

const compoundChart = [
    {
        id: 1,
        head: "Reduces Itching",
        chartImage: "/images/tazman/chart-1.png",
        title: "79%",
        desc: "Up to 79% reduction in itching within 5 minutes",
    },
    {
        id: 2,
        head: "Reduction of BurNing Sensations",
        chartImage: "/images/tazman/chart-1.png",
        title: "58%",
        desc: "Up to 58% reduction in burning within 5 minutes",
    },
    {
        id: 3,
        head: "Skin Redness Reduction",
        chartImage: "/images/tazman/chart-2.png",
        title: "",
        desc: "Up to 30% reduction in redness in 30 minutes. Up to 35% reduction after 24 hours",
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

                {/* List */}
                <div className="mt-[2.5rem]">
                    {compoundsList.map((item, index) => {
                        return (
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

                {/* Chart */}
                <div className="mt-[3rem]">
                    {compoundChart.map((item) => {

                        const isThird = item.id === 3;

                        return (
                            <div key={item.id} className="
                                flex justify-between flex-wrap bg-[#ebe8e2]
                                p-[2.5rem]
                                rounded-3xl last:mb-0
                                mb-[2rem]
                            ">

                                <div className="w-[50%]">
                                    <img src={item.chartImage} alt={item.title} loading="lazy" className="w-full rounded-2xl" />
                                </div>

                                <div className="w-[7%] flex justify-center items-center">
                                    <RiArrowRightWideLine className="
                                        text-[7rem] 
                                        text-[#e6b89d] scale-[1.5]
                                    " />
                                </div>

                                <div className="w-[35%] flex flex-col items-center justify-center">

                                    {/* For 1st and 2nd box */}
                                    {!isThird && (
                                        <div className="
                                            flex items-center gap-[2rem]
                                        ">
                                            <span className="
                                                text-[4rem]
                                                font-[800] 
                                            ">
                                                {item.title}
                                            </span>
                                            <div className="
                                                aspect-square bg-[#379df1] rounded-2xl
                                                p-[0.5rem]
                                                mt-[-0.6rem]
                                            ">
                                                <IoIosArrowDown className="text-[2.8rem] text-white" />
                                            </div>
                                        </div>
                                    )}

                                    {/* For 3rd box */}
                                    {isThird && (
                                        <div className="flex justify-center mb-[1.5rem]">
                                            <img
                                                src="/images/tazman/redness.png"
                                                alt="redness"
                                                className="w-[80%] rounded-xl"
                                            />
                                        </div>
                                    )}

                                    <p className="
                                        text-[1.6rem]
                                        text-center
                                        mt-[1rem]
                                    ">
                                        {item.desc}
                                    </p>
                                </div>

                            </div>
                        )
                    })}
                </div>

            </section>
        </>
    )
}

export default ActiveCompounds
