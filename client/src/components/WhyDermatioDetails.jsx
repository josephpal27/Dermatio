import icon1 from '../assets/images/icons/ph.png';
import icon2 from '../assets/images/icons/steroid.png';
import icon3 from '../assets/images/icons/proven.png';
import icon4 from '../assets/images/icons/formula.png';
import icon5 from '../assets/images/icons/360deg.png';
import icon6 from '../assets/images/icons/leg.png';

const whyDermatioData = [
    {
        id: 1,
        icon: icon1,
        title: "Hypoallergenic & pH Balanced",
        desc: "Every formula is developed in collaboration with dermatologists who specialize in paediatric skin conditions."
    },
    {
        id: 2,
        icon: icon2,
        title: "Steroid-Free & Fragrance-Free",
        desc: "Formulated without steroids or added fragrances because eczema-prone skin deserves the safest, purest care for long-term use."
    },
    {
        id: 3,
        icon: icon3,
        title: "Clinically Proven Ingredients",
        desc: "Each ingredient is clinically studied and selected for proven efficacy and safety, especially for children’s sensitive and eczema-prone skin."
    },
    {
        id: 4,
        icon: icon4,
        title: "Dermatologist & Paediatrician Developed",
        desc: "Every formula is developed in collaboration with dermatologists and paediatricians who specialize in paediatric skin conditions."
    },
    {
        id: 5,
        icon: icon5,
        title: "360° Eczema Support",
        desc: " A complete eczema wellness platform offering topical care, supplements, dietary guidance, and expert consultations,  all in one place."
    },
    {
        id: 6,
        icon: icon6,
        title: "Made for Atopic Skin",
        desc: "Specifically designed to address the unique needs of atopic dermatitis, not a generic skincare formula repurposed for sensitive skin."
    },
]

const WhyDermatioDetails = () => {
    return (
        <>
            <section className="
                py-[4rem]
                px-[7%]
            ">
                <h6 className="
                    text-[1.4rem] sm:text-[1rem] lg:text-[3.2rem] xl:text-[3.6rem] 2xl:text-[4rem]
                    leading-[1]
                ">
                    Why Dermatio
                </h6>
                <p className="
                    text-[1.1rem] sm:text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                    mt-[1.5rem] sm:mt-[1.2rem] lg:mt-[1.3rem] xl:mt-[1.4rem] 2xl:mt-[1.5rem]
                    text-[#363636] w-[40%]
                ">
                    Six commitments that guide every product, every formulation, and every decision we make.
                </p>

                {/* Row */}
                <div className="
                    mt-[2rem]
                    flex justify-between flex-wrap
                ">
                    {
                        whyDermatioData.map((item, index) => {
                            return (
                                <div className="
                                    w-[32.4%]
                                    bg-[#f6f1ea] rounded-[10px]
                                    p-[1.7rem]
                                    mb-[1.2rem]
                                    hover:scale-[1.02] transition duration-300 hover:shadow-[0px_3px_8px_rgba(0,0,0,0.10)]
                                " key={index}>
                                    <div className="
                                        bg-[#fff] rounded-full
                                        p-[0.7rem]
                                        w-[60px]
                                        h-[60px]
                                    ">
                                        <img src={item.icon} alt="" loading="lazy" className="
                                            w-full h-full object-contain
                                        "/>
                                    </div>
                                    <span className="
                                        mt-[1.3rem]
                                        block font-bold
                                        text-[1.1rem]
                                    ">
                                        {item.title}
                                    </span>
                                    <p className="
                                        text-[1rem] sm:text-[1rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem]
                                        mt-[0.5rem] sm:mt-[0.5rem] lg:mt-[0.3rem] xl:mt-[0.4rem] 2xl:mt-[0.5rem]
                                        text-[#363636]
                                    ">
                                        {item.desc}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default WhyDermatioDetails;
