
const TazmanBenefits = () => {
    return (
        <>
            <section className="
                px-[1rem] sm:px-[5%] lg:px-[7%]
                pt-[3rem] sm:pt-[2.5rem] lg:pt-[2rem] xl:pt-[2.5rem] 2xl:pt-[3rem]
                pb-[3rem] sm:pb-[3.5rem] lg:pb-[4.4rem] xl:pb-[4.7rem] 2xl:pb-[5rem]
                flex justify-between items-center flex-wrap flex-col-reverse sm:flex-row
            ">
                <div className="w-full sm:w-[50%] mt-[2rem] sm:mt-0">
                    <h6 className="
                        text-[1.7rem] sm:text-[1rem] lg:text-[1.9rem] xl:text-[2.2rem] 2xl:text-[2.5rem] leading-[1]
                    " data-aos="fade-up">
                        Tazman Pepper™ has a direct action on the skin’s discomfort sensor TRPV1
                    </h6>
                    <p className="
                        text-[1.1rem] sm:text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                        mt-[1rem] sm:mt-[1rem] lg:mt-[1.8rem] xl:mt-[1.9rem] 2xl:mt-[2rem]
                        text-[#363636]
                    " data-aos="fade" data-aos-once="true">
                        for an immediate soothing effect, lasting skin redness reduction, and a calmer everyday experience for atopic and eczema-prone skin.
                    </p>
                </div>
                <div className="w-full sm:w-[40%]">
                    <img 
                        src="/images/tazman/girl.avif" 
                        alt="Girl" 
                        loading="lazy"
                        className="
                            w-full
                            rounded-[15px] sm:rounded-[20px] lg:rounded-[30px] xl:rounded-[35px] 2xl:rounded-[40px]
                        "
                    />
                </div>
            </section>
        </>
    )
}

export default TazmanBenefits
