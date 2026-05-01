
const TazmanScience = () => {
    return (
        <>
            <section className="
                pr-[1rem] sm:pr-[5%] lg:pr-[7%]
                py-[4rem] sm:py-[2rem] lg:py-[3.4rem] xl:py-[3.7rem] 2xl:py-[4rem]
                flex justify-between items-center flex-wrap
            ">
                <div className="w-[45%]">
                    <img
                        src="/images/tazman/tazman-science.avif"
                        alt="Tazman Science"
                        loading="lazy"
                        className="
                            w-full
                            rounded-r-[15px] sm:rounded-r-[20px] lg:rounded-r-[30px] xl:rounded-r-[35px] 2xl:rounded-r-[40px]
                        "
                    />
                </div>
                <div className="w-[48%]">
                    <h4 className="
                        text-[1.8rem] sm:text-[1rem] lg:text-[3.2rem] xl:text-[3.6rem] 2xl:text-[4rem] leading-[1]
                    " data-aos="fade-up">
                        The Science: <br /> How It Works
                    </h4>
                    <p className="
                        text-[1.1rem] sm:text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                        mt-[1rem] sm:mt-[1rem] lg:mt-[1.8rem] xl:mt-[1.9rem] 2xl:mt-[2rem]
                        text-[#363636]
                    " data-aos="fade" data-aos-once="true">
                        TRPV1 (Transient Receptor Potential Vanilloid 1) is a channel found in skin keratinocytes and sensory neurons. In sensitive and inflamed skin, TRPV1 becomes overactive triggering pro-inflammatory cytokine release, burning sensations, and itching. The more it is activated, the more inflamed the skin becomes,
                        creating a vicious cycle. <br /> <br />
                        <b className="block mb-[1rem]">
                            Tazman Pepper™ breaks this cycle through a three-step mechanism:
                        </b>
                        Inhibits TRPV1 channel activation Reduces the release of inflammatory mediators (IL-1α and PGE₂)
                        Relieves the skin - calming redness, itching, and burnings
                    </p>
                </div>
            </section>
        </>
    )
}

export default TazmanScience
