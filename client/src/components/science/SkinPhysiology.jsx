const eczemaSkinData = [
    {
        id: 1,
        head: "SKIN BARRIER",
        title: "Filaggrin Deficiency & Ceramide Loss",
        desc: "Filaggrin (FLG) acts as the “mortar” between skin cells. In 30–40% of atopic dermatitis cases, FLG mutations reduce it drastically, weakening the barrier. This leads to ceramide-1 & ceramide-3 depletion, making skin less water resistant and causing a sharp rise in transepidermal water loss (TEWL).",
    },
    {
        id: 2,
        head: "IMMUNE",
        title: "Th2 Cytokine Dominance",
        desc: "Eczema is driven by a Th2-skewed immune response, with IL-4 and IL-13 suppressing filaggrin and increasing IgE activity. IL-31 directly triggers itch signals, while chronic stages involve Th22 / IL-22, disrupting normal skin renewal.",
    },
    {
        id: 3,
        head: "NEUROSENSORY",
        title: "Nerve Sensitisation & Pruriceptor Density",
        desc: "Eczema increases nerve fibre density in the skin. These fibres (via TRPA1 channels) become highly reactive to inflammation. Elevated Substance P and NGF (nerve growth factor) lower the itch threshold - making skin extremely itch-sensitive.",
    },
    {
        id: 4,
        head: "MICROBIOME",
        title: "Staphylococcus aureus Colonisation",
        desc: "A weakened barrier and higher pH allow Staphylococcus aureus to dominate (up to 90% of lesions). Its toxins act as superantigens, amplifying immune response and triggering mast cell degranulation, worsening inflammation and itch.",
    },
]

const SkinPhysiology = () => {
    return (
        <>
            <section className="
                px-[1rem] sm:px-[5%] lg:px-[7%]
                mt-[10rem] sm:mt-[5rem] lg:mt-[8rem] xl:mt-[9rem] 2xl:mt-[10rem]
            ">
                <span className="
                    text-[1.1rem] sm:text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                    text-[#363636]
                " data-aos="fade" data-aos-once="true">
                    — SKIN PHYSIOLOGY & BIOCHEMISTRY
                </span>
                <h5 className="
                    text-[1.8rem] sm:text-[1rem] lg:text-[3.2rem] xl:text-[3.6rem] 2xl:text-[4rem] leading-[1]
                    mt-[0.5rem] sm:mt-[0.5rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                " data-aos="fade-up">
                    What is Actually <br /> Broken in Eczema Skin
                </h5>
                <p className="
                    text-[1.1rem] sm:text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                    mt-[0.5rem] sm:mt-[0.5rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                    text-[#363636]
                " data-aos="fade" data-aos-once="true">
                    Eczema is fundamentally a barrier disease. Four interconnected systems fail and each breakdown feeds the others in a cascade that makes eczema self-perpetuating without targeted intervention.
                </p>

                {/* Row */}
                <div className="
                    mt-[3rem] sm:mt-[2rem] lg:mt-[2.6rem] xl:mt-[2.8rem] 2xl:mt-[3rem]
                    flex justify-between flex-wrap
                ">
                    {eczemaSkinData.map((item) => {
                        return (
                            <div key={item.id} className="
                                w-[48.5%] bg-[#fbf4ea] overflow-hidden
                                p-[2.5rem] sm:p-[2rem] lg:p-[2.1rem] xl:p-[2.3rem] 2xl:p-[2.5rem]
                                mb-[2.5rem] sm:mb-[2rem] lg:mb-[2.1rem] xl:mb-[2.3rem] 2xl:mb-[2.5rem]
                                rounded-2xl shadow-md hover:shadow-lg
                                hover:scale-[1.02] transition duration-300
                            ">
                                <span className="
                                    block text-[1rem] sm:text-[1rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem]
                                " data-aos="fade" data-aos-once="true">
                                    {item.head}
                                </span>
                                <span className="
                                    block text-[1.7rem] sm:text-[1.2rem] lg:text-[1.5rem] xl:text-[1.6rem] 2xl:text-[1.7rem]
                                    mt-[0.5rem]
                                " style={{ fontFamily: `"OrdinaryBoys", sans-serif` }} data-aos="fade-right" data-aos-once="true">
                                    {item.title}
                                </span>
                                <p className="
                                    text-[1.1rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                                    mt-[0.5rem] sm:mt-[0.5rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                                    text-[#363636]
                                " data-aos="fade" data-aos-once="true">
                                    {item.desc}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default SkinPhysiology
