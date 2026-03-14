import careImage from '../../assets/images/care.avif';

const CareMeetsScience = () => {
    return (
        <>
            <section className="
                pt-[1rem] sm:pt-[2rem] lg:pt-[2.2rem] xl:pt-[2.7rem] 2xl:pt-[3rem]
            ">
                <div className="
                    flex justify-between flex-wrap flex-col-reverse sm:flex-row
                    pl-[1rem] sm:pl-[5%] lg:pl-[7%]
                ">
                    {/* Content */}
                    <div className="
                        w-[100%] sm:w-[55%]
                    ">
                        <h2 className="
                            text-[1.8rem] sm:text-[1rem] lg:text-[3.2rem] xl:text-[3.6rem] 2xl:text-[4rem]
                            leading-[1]
                            mt-[1.8rem] sm:mt-[1rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                        " data-aos="fade-up" data-aos-once="true">
                            Where Care <br /> Meets Science
                        </h2>
                        <p className="
                            text-[1.1rem] sm:text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                            mt-[1rem] sm:mt-[1.5rem] lg:mt-[1.3rem] xl:mt-[1.4rem] 2xl:mt-[1.5rem]
                            mb-[0.8rem] sm:mb-[0.9rem] lg:mb-[0.7rem] xl:mb-[0.8rem] 2xl:mb-[0.9rem]
                            text-[#363636]
                        " data-aos="fade" data-aos-once="true" >
                            Our founder, a pharmaceutical and nutraceutical expert, watched his young son struggle with eczema, relentless itching, broken skin, sleepless nights, and constant restrictions.
                        </p>
                        <p className="
                            text-[1.1rem] sm:text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                            mb-[0.8rem] sm:mb-[0.9rem] lg:mb-[0.7rem] xl:mb-[0.8rem] 2xl:mb-[0.9rem]
                            text-[#363636]
                        " data-aos="fade" data-aos-once="true" >
                            After trying countless creams that were either too harsh, too
                            expensive, or incomplete for long-term care, he realized what was missing in India: a brand that truly understood eczema as a journey, with flare-ups, calm phases, and the emotional weight families carry.
                        </p>
                        <p className="
                            text-[1.1rem] sm:text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                            text-[#363636]
                        " data-aos="fade" data-aos-once="true" >
                            So he decided to change the story. Not just for his son, but for every child and parent living with eczema.
                        </p>
                    </div>
                    {/* Image */}
                    <div className="
                        w-[100%] sm:w-[40%]
                    ">
                        <img src={careImage} alt="Care Meets Science" loading="lazy" className="w-full" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default CareMeetsScience;
