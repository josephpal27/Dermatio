import playIcon from "../assets/images/icons/play-button.png";
import careImage1 from "../assets/images/choose-care/1.avif";
import careImage2 from "../assets/images/choose-care/2.avif";
import careImage3 from "../assets/images/choose-care/3.avif";

let chooseCareData = [
    {
        id: 1,
        image: careImage1,
        title: "Repairaderm",
        desc: "Daily hydration and itch relief lotion and oil.",
    },
    {
        id: 2,
        image: careImage2,
        title: "Cleansaderm",
        desc: "Ultra-gentle cleansing bodywash and shampoo.",
    },
    {
        id: 3,
        image: careImage3,
        title: "Target Care",
        desc: "For flare-ups and sensitive areas.",
    },
]

const ChooseCare = () => {
    return (
        <>
            <section className="
                px-[7%]
                py-[3rem] sm:py-[3rem] lg:py-[2.4rem] xl:py-[2.7rem] 2xl:py-[3rem]
            ">
                <h6 className="
                    text-[1.4rem] sm:text-[1rem] lg:text-[3.2rem] xl:text-[3.6rem] 2xl:text-[4rem]
                    leading-[1]
                ">
                    Choose Your Care
                </h6>
                <p className="
                    text-[1.3rem] sm:text-[1.3rem] lg:text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.3rem]
                    text-[#363636]
                    mt-[1rem]
                ">
                    Personalised eczema care for <br /> every skin need
                </p>

                {/* Row */}
                <div className="
                    mt-[3rem] sm:mt-[3rem] lg:mt-[2.6rem] xl:mt-[2.8rem] 2xl:mt-[3rem]
                    flex justify-between flex-wrap
                ">
                    {/* Video */}
                    <div className="
                        w-[48%]
                        rounded-[40px] sm:rounded-[30px] lg:rounded-[30px] xl:rounded-[35px] 2xl:rounded-[40px]
                        bg-[#eeeeee] flex justify-center items-center
                    ">
                        <img src={playIcon} alt="Play Icon" loading="lazy" className="
                            w-[70px] sm:w-[70px] lg:w-[60px] xl:w-[65px] 2xl:w-[70px]
                        " />
                    </div>
                    {/* Images */}
                    <div className="
                        w-[46%]
                        py-[2rem] sm:py-[2rem] lg:py-[1.5rem] xl:py-[1.8rem] 2xl:py-[2rem]
                        flex justify-between
                    ">
                        {
                            chooseCareData.map((item, index) => {
                                return(
                                    <div key={index} className="
                                        w-[31%]
                                        rounded-[40px] sm:rounded-[30px] lg:rounded-[30px] xl:rounded-[35px] 2xl:rounded-[40px]
                                        overflow-hidden bg-[#eeeeee]
                                    ">
                                        <img src={item.image} alt={item.title} loading="lazy" className="w-full aspect-[1/1]" />
                                        <div className="
                                            p-[1rem] sm:p-[1rem] lg:p-[0.8rem] xl:p-[0.9rem] 2xl:p-[1rem]
                                        ">
                                            <span className="
                                                text-[1.1rem] sm:text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                                                block text-center text-[#000]
                                            ">
                                                {item.title}
                                            </span>
                                            <p className="
                                                text-[0.8rem] sm:text-[0.8rem] lg:text-[0.6rem] xl:text-[0.7rem] 2xl:text-[0.8rem]
                                                text-[#363636] text-center leading-[1.3] mt-[0.3rem]
                                            ">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </section>
        </>
    )
}

export default ChooseCare
