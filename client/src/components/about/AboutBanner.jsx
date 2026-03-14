
const AboutBanner = () => {
    return (
        <>
            <section className="
                relative
            ">
                <img
                    src="/images/banners/about-banner.avif"
                    alt="About Banner"
                    loading="eager"
                    className="
                        w-full object-cover
                        rounded-b-[15px] sm:rounded-b-[20px] lg:rounded-b-[35px] xl:rounded-b-[40px] 2xl:rounded-b-[45px]
                        h-[auto] sm:h-[50vh] lg:h-[93vh]
                "/>
                {/* Layer */}
                <div className="
                    relative sm:absolute
                    top-0 left-0 w-full h-full text-[#363636] sm:text-[#fff]
                    flex flex-col justify-end
                    px-[1rem] sm:px-[5%] lg:px-[7%]
                    pb-[1rem] sm:pb-[3rem] lg:pb-[6rem] xl:pb-[7rem] 2xl:pb-[8rem]
                ">
                    <span className="
                        text-[0.9rem] sm:text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                        mt-[1rem] sm:mt-0
                    " data-aos="fade" data-aos-once="true" >
                        — Born in a home, not a boardroom
                    </span>
                    <h1 className="
                        text-[1.8rem] sm:text-[1rem] lg:text-[3.2rem] xl:text-[3.6rem] 2xl:text-[4rem]
                        mt-[0.5rem] sm:mt-[1rem] lg:mt-[0.6rem] xl:mt-[0.8rem] 2xl:mt-[1rem]
                        leading-[1]
                    " data-aos="fade-up" data-aos-once="true">
                        Science Built From <br /> a Father's Love
                    </h1>
                    <p className="
                        w-[100%] sm:w-[40%]
                        text-[1.1rem] sm:text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                        mt-[1.2rem] sm:mt-[1rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                    " data-aos="fade" data-aos-once="true">
                        Dermatio began when a pharmaceutical expert watched his young son struggle with eczema and
                        decided to change the story for every child and parent living with it.
                    </p>
                </div>
            </section>
        </>
    )
}

export default AboutBanner;
