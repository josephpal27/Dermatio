import ourStory1 from '../assets/images/our-story-1.avif';
import ourStory2 from '../assets/images/our-story-2.avif';

const OurStory = () => {
    return (
        <>
            <section className="
                py-[4rem] sm:py-[3rem] lg:py-[3.2rem] xl:py-[3.7rem] 2xl:py-[4rem]
                px-[7%]
                relative overflow-hidden
            ">
                <h3 className="
                    text-[1.4rem] sm:text-[1rem] lg:text-[3.2rem] xl:text-[3.6rem] 2xl:text-[4rem]
                    leading-[1]
                ">
                    Our Story
                </h3>
                {/* Row */}
                <div className="
                    flex justify-between flex-wrap
                    mt-[3rem]
                ">
                    {/* Left Image */}
                    <div className="
                        w-[24%]
                    ">
                        <img src={ourStory1} alt="Our Story 1" loading="lazy" className="
                            w-full
                            rounded-[35px]
                        " />
                    </div>
                    {/* Content */}
                    <div className="
                        w-[44%]
                    ">
                        <p className="
                            text-[1.1rem] sm:text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                            mb-[0.9rem] sm:mb-[0.9rem] lg:mb-[0.7rem] xl:mb-[0.8rem] 2xl:mb-[0.9rem]
                            text-[#363636]
                        ">
                            Dermatio was born as a 360° solution for eczema care. One that cares for skin before, during, and after flare-ups. We combine
                            clinically backed ingredients, gentle
                            steroid-free formulations, and child-specific care protocols to build a brand that's
                            effective, safe, affordable, and above all,
                            empathetic.
                        </p>
                        <p className="
                            text-[1.1rem] sm:text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                            text-[#363636]
                        ">
                            With over 20 years in the pharmaceutical and nutraceutical industry, our founder had the science, the manufacturing expertise, and the network. But this time, he had something more, a father's determination
                        </p>
                    </div>
                    {/* Right Image */}
                    <div className="
                        w-[24%]
                    ">
                        <img src={ourStory2} alt="Our Story 2" loading="lazy" className="
                            w-full z-1 relative
                            rounded-[35px]
                        " />
                    </div>
                </div>
                <p className="
                    text-[1.7rem]
                    mt-[2rem]
                    text-[#363636]
                ">
                    Because we understand: eczema doesn't just affect skin — it affects lives.
                </p>
                <span className="
                    text-[8rem]
                    font-[400] text-[#e4e2dd] absolute top-[3rem] right-0 z-0
                " style={{fontFamily: `"OrdinaryBoys", sans-serif`}}>
                    Story
                </span>
            </section>
        </>
    )
}

export default OurStory;
