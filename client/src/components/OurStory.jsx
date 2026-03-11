import ourStory1 from '../assets/images/our-story-1.avif';
import ourStory2 from '../assets/images/our-story-2.avif';

const OurStory = () => {
    return (
        <>
            <section className="
                py-[2.5rem] sm:py-[3rem] lg:py-[3.2rem] xl:py-[3.7rem] 2xl:py-[4rem]
                px-[1rem] sm:px-[5%] lg:px-[7%]
                relative overflow-hidden
            ">
                <h3 className="
                    text-[1.8rem] sm:text-[1rem] lg:text-[3.2rem] xl:text-[3.6rem] 2xl:text-[4rem]
                    leading-[1]
                " data-aos="fade-up">
                    Our Story
                </h3>
                {/* Row */}
                <div className="
                    flex justify-between flex-wrap
                    mt-[1.8rem] sm:mt-[3rem] lg:mt-[2.6rem] xl:mt-[2.8rem] 2xl:mt-[3rem]
                ">
                    {/* Left Image */}
                    <div className="
                        w-[100%] sm:w-[24%]
                    ">
                        <img src={ourStory1} alt="Our Story 1" loading="lazy" className="
                            w-full z-1 relative shadow-[0px_3px_8px_rgba(0,0,0,0.24)]
                            rounded-[35px] sm:rounded-[30px] lg:rounded-[25px] xl:rounded-[30px] 2xl:rounded-[35px]
                        " data-aos="fade"/>
                    </div>
                    {/* Content */}
                    <div className="
                        w-[100%] sm:w-[44%]
                        mt-[1.5rem] sm:mt-0
                    ">
                        <p className="
                            text-[1.1rem] sm:text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                            mb-[0.8rem] sm:mb-[0.9rem] lg:mb-[0.7rem] xl:mb-[0.8rem] 2xl:mb-[0.9rem]
                            text-[#363636]
                        " data-aos="fade">
                            Dermatio was born as a 360° solution for eczema care. One that cares for skin before, during, and after flare-ups. We combine clinically backed ingredients, gentle steroid-free formulations, and child-specific care protocols to build a brand that's effective, safe, affordable, and above all,
                            empathetic.
                        </p>
                        <p className="
                            text-[1.1rem] sm:text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                            text-[#363636]
                        " data-aos="fade">
                            With over 20 years in the pharmaceutical and nutraceutical industry, our founder had the science, the manufacturing expertise, and the network. But this time, he had something more, a father's determination
                        </p>
                    </div>
                    {/* Right Image */}
                    <div className="
                        w-[100%] sm:w-[24%]
                        mt-[1.5rem] sm:mt-0
                    ">
                        <img src={ourStory2} alt="Our Story 2" loading="lazy" className="
                            w-full z-1 relative shadow-[0px_3px_8px_rgba(0,0,0,0.24)]
                            rounded-[35px] sm:rounded-[30px] lg:rounded-[25px] xl:rounded-[30px] 2xl:rounded-[35px]
                        " data-aos="fade"/>
                    </div>
                </div>
                <p className="
                    text-[1.3rem] sm:text-[1.7rem] lg:text-[1.4rem] xl:text-[1.55rem] 2xl:text-[1.7rem]
                    mt-[1.5rem] sm:mt-[2rem] lg:mt-[1.6rem] xl:mt-[1.8rem] 2xl:mt-[2rem]
                    text-[#363636]
                " data-aos="fade">
                    Because we understand: eczema doesn't just affect skin — it affects lives.
                </p>
                <span className="
                    text-[4rem] sm:text-[7rem] lg:text-[7.6rem] xl:text-[7.8rem] 2xl:text-[8rem]
                    font-[400] text-[#e4e2dd] absolute right-0 z-0
                    top-[2.5rem] sm:top-[3rem] lg:top-[2.2rem] xl:top-[2.6rem] 2xl:top-[3rem]
                " style={{fontFamily: `"OrdinaryBoys", sans-serif`}} data-aos="fade-left">
                    Story
                </span>
            </section>
        </>
    )
}

export default OurStory;
