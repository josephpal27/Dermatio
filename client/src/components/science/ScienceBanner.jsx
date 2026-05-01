
const ScienceBanner = () => {
    return (
        <>
            <section className="
                relative
            ">
                <img
                    src="/images/banners/science-banner.avif"
                    alt="Science Banner"
                    loading="eager"
                    className="
                        w-full object-cover
                        rounded-b-[15px] sm:rounded-b-[20px] lg:rounded-b-[35px] xl:rounded-b-[40px] 2xl:rounded-b-[45px]
                        h-[auto] sm:h-[50vh] lg:h-[93vh]
                "/>
                {/* Layer */}
                <div className="
                    relative sm:absolute
                    top-0 left-0 w-full h-full text-[#242424]
                    flex flex-col justify-center items-end
                    px-[1rem] sm:px-[5%] lg:px-[7%]
                ">
                    <div className="w-full sm:w-[40%]">
                        <h1 className="
                            text-[2.3rem] sm:text-[5rem] lg:text-[4.8rem] xl:text-[5.4rem] 2xl:text-[6rem]
                            mt-[1rem] sm:mt-[1rem] lg:mt-[0.6rem] xl:mt-[0.8rem] 2xl:mt-[1rem]
                            leading-[1]
                        " data-aos="fade-up">
                            The <br /> Science
                        </h1>
                        <p className="
                            text-[1.1rem] sm:text-[1.2rem] lg:text-[1.2rem] xl:text-[1.3rem] 2xl:text-[1.4rem]
                            mt-[1rem] sm:mt-[1rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                        " data-aos="fade">
                            Understanding <br className="hidden sm:block" /> the eczema journey
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ScienceBanner
