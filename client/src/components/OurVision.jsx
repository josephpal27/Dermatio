import vision1 from '../assets/images/our-vision/1.png';

const OurVision = () => {
    return (
        <>
            <section className="
                px-[7%]
                py-[4rem]
                flex justify-between items-end flex-wrap relative overflow-hidden
            ">
                {/* Image */}
                <div className="
                    w-[40%]
                ">
                    <div>
                        <img src={vision1} alt="Our Vision 1" loading="lazy" className="
                            rounded-[50px] shadow-[0px_3px_8px_rgba(0,0,0,0.24)]
                        " />
                    </div>
                    <div className="
                        flex justify-between items-center mt-[1.2rem]
                    ">
                        <img src={vision1} alt="Our Vision 2" loading="lazy" className="
                            w-[48.5%] shadow-[0px_3px_8px_rgba(0,0,0,0.24)]
                            rounded-[40px]
                        " />
                        <img src={vision1} alt="Our Vision 3" loading="lazy" className="
                            w-[48.5%] shadow-[0px_3px_8px_rgba(0,0,0,0.24)]
                            rounded-[40px]
                        " />
                    </div>
                </div>
                {/* Content */}
                <div className="
                    w-[53%]
                ">
                    <h5 className="
                        text-[1.4rem] sm:text-[1rem] lg:text-[3.2rem] xl:text-[3.6rem] 2xl:text-[4rem]
                        leading-[1]
                    ">
                        Our Vision
                    </h5>
                    <p className="
                        text-[1.1rem] sm:text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                        mt-[1.5rem] sm:mt-[1.2rem] lg:mt-[1.3rem] xl:mt-[1.4rem] 2xl:mt-[1.5rem]
                        text-[#363636]
                    ">
                        To become India's first and most trusted eczema-focused brand offering science-led, affordable, and complete care that supports both skin and soul.
                    </p>
                    <p className="
                        text-[1.1rem] sm:text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                        mt-[0.9rem] sm:mt-[0.9rem] lg:mt-[0.7rem] xl:mt-[0.8rem] 2xl:mt-[0.9rem]
                        text-[#363636]
                    ">
                        We imagine a future where no child misses playtime, feels the need to hide their skin, or dreads their daily routine. A future where no parent feels helpless watching their child struggle.
                    </p>
                    <p className="
                        text-[1.1rem] sm:text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                        mt-[0.9rem] sm:mt-[0.9rem] lg:mt-[0.7rem] xl:mt-[0.8rem] 2xl:mt-[0.9rem]
                        text-[#363636]
                    ">
                        We remember our own carefree childhoods, sunny afternoons, scraped knees, unfiltered joy. At Dermatio, we’re working every day to give that same Freedom and comfort back to children with eczema.
                    </p>
                </div>
                {/* Pink Background */}
                <div className="
                    w-full h-[87%] absolute bg-[#fbf4ea]
                    top-[13%] left-0 -z-10 rounded-tl-[220px] rounded-tr-[550px]
                "></div>
            </section>
        </>
    )
}

export default OurVision;
