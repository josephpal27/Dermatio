
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
                        rounded-b-[45px] sm:rounded-b-[40px] lg:rounded-b-[35px] xl:rounded-b-[40px] 2xl:rounded-b-[45px]
                        h-[93vh]
                "/>
                {/* Layer */}
                <div className="
                    absolute
                    top-0 left-0 w-full h-full text-[#fff]
                    flex flex-col justify-end
                    px-[1rem] sm:px-[5%] lg:px-[7%]
                    pb-[8rem] sm:pb-[6rem] lg:pb-[6rem] xl:pb-[7rem] 2xl:pb-[8rem]
                ">
                    <span className="
                        text-[1.1rem] sm:text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                    ">
                        — Born in a home, not a boardroom
                    </span>
                    <h1 className="
                        text-[1.4rem] sm:text-[1rem] lg:text-[3.2rem] xl:text-[3.6rem] 2xl:text-[4rem]
                        mt-[1rem] sm:mt-[1rem] lg:mt-[0.6rem] xl:mt-[0.8rem] 2xl:mt-[1rem]
                        leading-[1]
                    ">
                        Science Built From <br /> a Father's Love
                    </h1>
                    <p className="
                        w-[40%]
                        text-[1.1rem] sm:text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                        mt-[1rem] sm:mt-[1rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                    ">
                        Dermatio began when a pharmaceutical expert watched his young son struggle with eczema and
                        decided to change the story for every child and parent living with it.
                    </p>
                </div>
            </section>
        </>
    )
}

export default AboutBanner;
