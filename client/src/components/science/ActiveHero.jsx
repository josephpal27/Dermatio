const activeHeroData = [
    {
        id: 1,
        title: "TRPV1 Desensitisation",
        desc: "Polygodial activates and then rapidly desensitises TRPV1 ion channels on pruriceptive C-fibres producing initial warmth followed by sustained itch suppression. Comparable mechanism to capsaicin but without prolonged burning sensation.",
        image: "/images/science/1.avif",
    },
    {
        id: 2,
        title: "IL-4 & IL-13 Suppression",
        desc: "Tasman pepper extracts have demonstrated inhibition of key Th2 cytokines in keratinocyte models, reducing the upstream drivers of eczema inflammation without broad immunosuppression.",
        image: "/images/science/2.avif",
    },
    {
        id: 3,
        title: "Staph Aureus Inhibition",
        desc: "Polygodial and related compounds show significant antimicrobial activity against S. aureus, including methicillin-resistant strains helping to restore healthy microbiome balance on eczema skin.",
        image: "/images/science/3.avif",
    },
    {
        id: 4,
        title: "Ceramide Synthesis Support",
        desc: "Tasman pepper's antioxidant flavonoids (including rutin and quercetin derivatives) support the enzymatic pathways involved in ceramide production helping to restore barrier lipid architecture.",
        image: "/images/science/4.avif",
    },
    {
        id: 5,
        title: "COX & LOX Pathway Inhibition",
        desc: "Polygodial inhibits both cyclooxygenase (COX) and 5-lipoxygenase (5-LOX), two enzymes central to prostaglandin and leukotriene production in inflammatory skin. The result is a dampened inflammatory cascade at the eicosanoid level.",
        image: "/images/science/5.avif",
    },
    {
        id: 6,
        title: "NGF Modulation",
        desc: "Emerging data suggests Tasman pepper constituents reduce nerve growth factor (NGF) expression potentially reversing the intra-epidermal nerve sprouting that makes chronic eczema skin persistently itch-sensitive.",
        image: "/images/science/6.avif",
    },
]

const ActiveHero = () => {
    return (
        <>
            <section className="
                px-[1rem] sm:px-[5%] lg:px-[7%]
                py-[2rem] sm:py-[2rem] lg:py-[2.2rem] xl:py-[2.5rem] 2xl:py-[3rem]
            ">
                <span className="
                    text-[1.1rem] sm:text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                    text-[#363636]
                " data-aos="fade" data-aos-once="true">
                    — SKIN PHYSIOLOGY & BIOCHEMISTRY
                </span>
                <h5 className="
                    text-[1.8rem] sm:text-[1rem] lg:text-[3.2rem] xl:text-[3.6rem] 2xl:text-[4rem] leading-[1]
                    mt-[1.5rem] sm:mt-[0.5rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                " data-aos="fade-up">
                    Tazman Pepper: <br /> The Active Hero
                </h5>
                <b className="
                    text-[1.1rem] sm:text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                    mt-[1rem] sm:mt-[1rem] lg:mt-[1.3rem] xl:mt-[1.4rem] 2xl:mt-[1.5rem]
                    text-[#363636] block
                " data-aos="fade" data-aos-once="true">
                    Tasmannia lanceolata - Tazman Pepper
                </b>
                <p className="
                    text-[1.1rem] sm:text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                    mt-[1rem] sm:mt-[0.5rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                    text-[#363636]
                " data-aos="fade" data-aos-once="true">
                    A native Australian shrub with a remarkable phytochemical profile. Tasman pepper contains exceptionally high concentrations of polygodial, a sesquiterpene dialdehyde with potent anti-inflammatory, antimicrobial, and TRPV1-modulating activity. It is the botanical backbone of Dermatio's efficacy.
                </p>

                {/* Row */}
                <div className="
                    mt-[2rem] sm:mt-[2rem] lg:mt-[2.6rem] xl:mt-[2.8rem] 2xl:mt-[3rem]
                ">
                    {activeHeroData.map((item) => {
                        return (
                            <div key={item.id} className="
                                flex justify-between items-center flex-wrap even:flex-row-reverse
                                mb-[2rem] sm:mb-[1.5rem] lg:mb-[1.6rem] xl:mb-[1.8rem] 2xl:mb-[2rem]
                            ">
                                <div className="w-full sm:w-[48%] overflow-hidden">
                                    <span className="
                                        block text-[1.6rem] sm:text-[1.5rem] lg:text-[1.6rem] xl:text-[1.7rem] 2xl:text-[1.8rem]
                                    " data-aos="zoom-out" data-aos-once="true">
                                        0{item.id}
                                    </span>
                                    <span className="
                                        block text-[1.7rem] sm:text-[1.5rem] lg:text-[1.8rem] xl:text-[1.9rem] 2xl:text-[2rem]
                                        mt-[0.1rem]
                                    " style={{ fontFamily: `"OrdinaryBoys", sans-serif` }} data-aos="fade-up" data-aos-once="true">
                                        {item.title}
                                    </span>
                                    <p className="
                                        text-[1.1rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                                        mt-[1rem] sm:mt-[0.5rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                                        text-[#363636]
                                    " data-aos="fade" data-aos-once="true">
                                        {item.desc}
                                    </p>
                                </div>
                                <div className="w-full sm:w-[48%] mt-[1.8rem] sm:mt-0">
                                    <img src={item.image} alt={item.title} loading="lazy" className="w-full rounded-2xl sm:rounded-3xl" />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default ActiveHero
