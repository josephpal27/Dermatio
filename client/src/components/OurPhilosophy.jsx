import coloredLogo from '../assets/images/logo/colored-logo.avif';
import drop1 from '../assets/images/icons/water-drop-1.avif';
import drop2 from '../assets/images/icons/water-drop-2.avif';

const ourPhilosophyData = {
    leftItems: [
        {
            title: "Listening to what parents go through",
            description: "Every parental worry becomes our design brief. We build solutions from real experiences.",
        },
        {
            title: "Designing with science",
            description: "Clinically backed formulations grounded in dermatological research and decades of expertise.",
        },
    ],

    rightItems: [
        {
            title: "Understanding what kids feel",
            description: "Children shouldn't have to hide their skin. We formulate so they can play, explore, and be free.",
        },
        {
            title: "Formulating with love",
            description: "Every product carries the care of a parent who refused to settle for less than perfect.",
        },
    ],
};

const OurPhilosophy = () => {
    return (
        <>
            <section className="
                py-[4rem]
                px-[7%]
                bg-[#ebe3d8]
            ">
                <div className="
                    flex flex-col justify-center items-center
                ">
                    <h4 className="
                        text-[1.4rem] sm:text-[1rem] lg:text-[3.2rem] xl:text-[3.6rem] 2xl:text-[4rem]
                        leading-[1]
                    ">
                        Our Philosophy
                    </h4>
                    <p className="
                        text-[1.1rem] sm:text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                        mt-[1.5rem] sm:mt-[1.2rem] lg:mt-[1.3rem] xl:mt-[1.4rem] 2xl:mt-[1.5rem]
                        w-[35%] 
                        text-[#363636] text-center
                    ">
                        We believe that every child deserves the freedom to feel comfortable in their own skin.
                    </p>
                </div>

                {/* Row */}
                <div className="
                    flex justify-between items-center flex-wrap
                    mt-[4rem]
                ">
                    {/* Left */}
                    <div className="
                        w-[30%]
                        flex flex-col
                        gap-[4rem]
                    ">
                        {ourPhilosophyData.leftItems.map((item, index) => (
                            <div key={index}>
                                <span className="
                                    text-[1.4rem]
                                    font-bold
                                ">
                                    {item.title}
                                </span>
                                <p className="
                                    text-[1.1rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                                    mt-[0.5rem] sm:mt-[0.5rem] lg:mt-[0.3rem] xl:mt-[0.4rem] 2xl:mt-[0.5rem]
                                    text-[#363636]
                                ">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Center */}
                    <div className="
                        w-[40%]
                        flex flex-col items-center
                    ">
                        <img src={drop1} alt="Water Drop 1" loading="lazy" className="
                            w-[10%]
                            ml-[-40%]
                        " />
                        <img src={coloredLogo} alt="Dermatio" loading="lazy" className="
                            w-[65%]
                            mt-[1.5rem]
                        " />
                        <img src={drop2} alt="Water Drop 2" loading="lazy" className="
                            w-[25%]
                            ml-[4rem]
                        " />
                    </div>

                    {/* Right */}
                    <div className="
                        w-[30%]
                        flex flex-col
                        gap-[4rem]
                        text-right
                    ">
                        {ourPhilosophyData.rightItems.map((item, index) => (
                            <div key={index}>
                                <span className="
                                    text-[1.4rem]
                                    font-bold
                                ">
                                    {item.title}
                                </span>
                                <p className="
                                    text-[1.1rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                                    mt-[0.5rem] sm:mt-[0.5rem] lg:mt-[0.3rem] xl:mt-[0.4rem] 2xl:mt-[0.5rem]
                                    text-[#363636]
                                ">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <p className="
                    text-[1.2rem]
                    mt-[3.5rem]
                    text-[#363636] mx-auto text-center font-bold
                    w-[50%]
                ">
                    We’re not here just to offer products. We’re here to redefine eczema care in a way that is holistic, mindful, and truly supportive.
                </p>

            </section>
        </>
    )
}

export default OurPhilosophy;