
const SupportPhase = () => {
    return (
        <>
            <section className="
                px-[1rem] sm:px-[5%] lg:px-[7%]
                py-[3rem] sm:py-[2rem] lg:py-[2.3rem] xl:py-[2.7rem] 2xl:py-[3rem]
                flex justify-between items-center flex-wrap
            ">
                <div className="w-[23%]">
                    <img src="/images/science/support-phase-1.png" alt="Support Phase 1" loading="lazy" className="
                        w-full rounded-3xl
                    " />
                </div>
                <div className="w-[45%]">
                    <h4 className="
                        text-[1.8rem] sm:text-[1rem] lg:text-[3.2rem] xl:text-[3.6rem] 2xl:text-[4rem] leading-[1]
                        text-center
                    ">
                        How Dermatio Supports Each Phase
                    </h4>
                    <p className="
                        text-[1.1rem] sm:text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                        mt-[2rem] sm:mt-[1rem] lg:mt-1.8rem] xl:mt-[1.9rem] 2xl:mt-[2rem]
                        text-[#363636] text-center
                    ">
                        In the acute phase, Dermatio's active complex works to calm cytokine driven inflammation and cool the neural itch signal rapidly. In the subacute and chronic phases, it focuses on barrier restoration replenishing ceramides, reducing transepidermal water loss (TEWL), and modulating the sensitised nerve response to prevent re-entry into flare.
                    </p>
                </div>
                <div className="w-[23%]">
                    <img src="/images/science/support-phase-2.png" alt="Support Phase 2" loading="lazy" className="
                        w-full rounded-3xl
                    " />
                </div>
            </section>
        </>
    )
}

export default SupportPhase
