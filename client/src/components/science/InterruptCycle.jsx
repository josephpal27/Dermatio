
const InterruptCycle = () => {
    return (
        <>
            <section className="
                px-[1rem] sm:px-[5%] lg:px-[7%] bg-[#e4e0d5]
                py-[1rem]
                mt-[0] sm:mt-[3rem] lg:mt-[6rem] xl:mt-[6.5rem] 2xl:mt-[7rem]
                flex justify-between items-center flex-wrap relative
            ">
                <div className="w-full sm:w-[20%]">
                    <img src="/images/science/interrupt.avif" alt="Interrupts Cycle" loading="lazy" className="
                        w-full rounded-2xl sm:rounded-3xl scale-[1] sm:scale-[1.5]
                        ml-[0] sm:ml-[3rem] lg:ml-[3.3rem] xl:ml-[3.6rem] 2xl:ml-[4rem]
                    " />
                </div>
                <div className="w-full sm:w-[60%] mt-[2rem] sm:mt-0">
                    <h6 className="
                        text-[1.8rem] sm:text-[1rem] lg:text-[3.2rem] xl:text-[3.6rem] 2xl:text-[4rem] leading-[1]
                    " data-aos="fade-up">
                        How Dermatio <br /> Interrupts The Cycle
                    </h6>
                    <p className="
                        text-[1.1rem] sm:text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                        mt-[1rem] sm:mt-[1rem] lg:mt-[1.3rem] xl:mt-[1.4rem] 2xl:mt-[1.5rem]
                        text-[#363636]
                    " data-aos="fade" data-aos-once="true">
                        Dermatio's formula targets the cycle at two points simultaneously: it suppresses TSLP and IL-31 expression at the keratinocyte level, reducing the neural trigger and it acts on TRPV1 and TRPA1 ion channels on pruriceptive nerve fibres, desensitising the itch receptor. The result is fewer signals reaching the brain, and a quieter scratch reflex.
                    </p>
                </div>
            </section>
        </>
    )
}

export default InterruptCycle
