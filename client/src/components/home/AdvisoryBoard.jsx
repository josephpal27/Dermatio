import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";

let AdvisoryBoardData = [
    {
        id: 1,
        image: "/images/advisory-board/1.avif",
        title: "Dr. Shantanu Ray, <br/> MBBS, MD (Paediatrics)",
        desc: "With 30+ years of experience, Dr. Ray specializes in child health with a strong focus on sensitive and eczema-prone skin. He emphasizes skin barrier protection, ingredient safety, and long-term comfort for infants and young children. At Dermatio, he ensures formulations are safe, gentle, and aligned with real-world pediatric care.",
    },
    {
        id: 2,
        image: "/images/advisory-board/2.avif",
        title: "Dr. Ritam Mondal, <br/> MBBS, MD (Paediatrics)",
        desc: "Dr. Mondal brings over a decade of clinical experience with a preventive, child-centric approach. He focuses on early-stage skin concerns like dryness, irritation, and atopic tendencies. His insights help shape gentle, practical, and everyday-use formulations for sensitive skin.",
    },
    {
        id: 3,
        image: "/images/advisory-board/3.avif",
        title: "Dr. Aniruddha Ghosh, <br/> MD (Dermatology)",
        desc: "A leading dermatologist and academician, Dr. Ghosh specializes in eczema and barrier-compromised skin. His approach combines skin science with clinical precision, focusing on barrier repair, hydration, and inflammation control. He guides Dermatio's formulations to ensure efficacy with high skin tolerance.",
    },
    {
        id: 4,
        image: "/images/advisory-board/4.avif",
        title: "Dr. Aromita Deb, <br/> MD (Pediatrician), Allergy Specialist (FAAI) ",
        desc: "Dr. Armonita specializes in newborn care and early-life allergies. She focuses on protecting immature skin barriers and minimizing allergen exposure. At Dermatio, she ensures formulations meet high safety and hypoallergenic standards for infants and delicate skin.",
    },
    {
        id: 5,
        image: "/images/advisory-board/5.avif",
        title: "Dr. Ananya Bhowmik, <br/> Ph.D. (Clinical Nutritionist)",
        desc: "With 17+ years of experience, Dr. Ananya connects nutrition, immunity, and skin health. She highlights the role of diet and gut health in managing eczema and inflammation. Her expertise supports Dermatio's holistic approach to skin wellness.",
    },
    {
        id: 6,
        image: "/images/advisory-board/6.avif",
        title: "Dr. Sharmistha Dutta, <br/> M. Sc. (Psychology)",
        desc: "With 9+ years of experience, Sharmistha works with children across autism, ADHD, and learning disabilities. She focuses on emotional well-being, behavior, and developmental support. Her perspective adds a holistic dimension to Dermatio's approach to child care and overall wellness.",
    },
]

const AdvisoryBoard = () => {

    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") setSelectedItem(null);
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    return (
        <>
            <section className="
                py-[0] sm:py-[2rem] lg:py-[1rem] xl:py-[1.5rem] 2xl:py-[2rem]
                mb-[4rem] sm:mb-[3rem] lg:mb-[2.5rem] xl:mb-[3rem] 2xl:mb-[3.5rem]
            ">
                {/* Head */}
                <div className="
                    flex flex-col items-center
                    px-[1rem] sm:px-[5%] lg:px-[7%]
                ">
                    <h6 className="
                        text-[1.8rem] sm:text-[1rem] lg:text-[3.2rem] xl:text-[3.6rem] 2xl:text-[4rem]
                        leading-[1]
                    " data-aos="fade-up" data-aos-once="true">
                        Our Advisory Board
                    </h6>
                    <p className="
                        text-[1.1rem] sm:text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                        text-[#363636] text-center
                        mt-[1rem] sm:mt-[1.5rem] lg:mt-[1.1rem] xl:mt-[1.3rem] 2xl:mt-[1.5rem]
                        w-[100%] sm:w-[65%]
                    " data-aos="fade" data-aos-once="true">
                        Dermatio is guided by a panel of dermatologists, pediatric experts, and formulation scientists who ensure every product is safe, evidence based, and child friendly.
                    </p>
                </div>

                {/* Slider */}
                <div className="
                    px-[1rem] sm:px-[5%] lg:px-[7%]
                    mt-[2rem] sm:mt-[4rem] lg:mt-[3rem] xl:mt-[3.5rem] 2xl:mt-[4rem]
                " data-aos="fade" data-aos-once="true">
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={4}
                        centeredSlides={false}
                        loop={true}
                        grabCursor={true}
                        spaceBetween={30}
                        speed={1000}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1, // for mobile
                                spaceBetween: 12,
                            },
                            640: {
                                slidesPerView: 3, // tablet
                                spaceBetween: 60,
                            },
                            991: {
                                slidesPerView: 4, // tablet and up
                                spaceBetween: 40,
                            },
                        }}
                    >

                        {
                            AdvisoryBoardData.map((item, index) => {
                                return (
                                    <SwiperSlide key={index} className="
                                        flex flex-col overflow-hidden bg-[#dfdace]
                                        rounded-[35px] sm:rounded-[40px] lg:rounded-[40px] xl:rounded-[45px] 2xl:rounded-[50px]
                                    ">
                                        <div>
                                            <img src={item.image} alt={item.title} loading="lazy" className="w-full" />
                                        </div>
                                        <div className="
                                            p-[1rem] sm:p-[1.5rem] lg:p-[1.1rem] xl:p-[1.3rem] 2xl:p-[1.5rem]
                                        ">
                                            <span dangerouslySetInnerHTML={{
                                                __html: item.title,
                                            }} className="
                                                block text-[#000]
                                                text-[1.1rem] sm:text-[1rem] lg:text-[0.8rem] xl:text-[0.95rem] 2xl:text-[1rem]
                                            " />
                                            <img
                                                src="/images/icons/arrow.png"
                                                alt="Arrow"
                                                loading="lazy"
                                                className="
                                                    w-[30px] sm:w-[35px] lg:w-[25px] xl:w-[30px] 2xl:w-[35px]
                                                    mt-[0.8rem] sm:mt-[1rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                                                    border-[#1f1f1f] border-[2px] rounded-full cursor-pointer hover:scale-110 transition duration-300
                                                "
                                                onClick={() => setSelectedItem(item)}
                                            />
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>

                </div>
            </section>

            {/* Custom Modal */}
            {selectedItem && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-[1rem] lg:px-0">

                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedItem(null)}
                    ></div>

                    {/* Modal Content */}
                    <div className="
                        relative z-10 w-full lg:w-[60%] 
                        bg-white rounded-[20px] overflow-hidden
                        flex justify-between flex-wrap
                        animate-[fadeIn_.3s_ease] shadow-[-4px_4px_0px_0px_#c3cc17]
                    ">

                        {/* Close Button */}
                        <button
                            className="
                                absolute top-[0.7rem] lg:top-[1rem] right-[0.7rem] lg:right-[1rem] text-black 
                                text-[1.4rem] sm:text-[1.5rem] lg:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.5rem]
                            "
                            onClick={() => setSelectedItem(null)}
                        >
                            <IoClose />
                        </button>

                        {/* Left Image */}
                        <div className="w-full lg:w-[50%]">
                            <img
                                src={selectedItem.image}
                                alt={selectedItem.title}
                                className="w-full"
                            />
                        </div>

                        {/* Right Content */}
                        <div className="
                            w-full lg:w-[50%] flex items-center
                            p-[1rem] sm:p-[1.2rem] lg:p-[1rem] xl:p-[1.1rem] 2xl:p-[1.2rem]
                        ">
                            <div>
                                <span
                                    className="text-[1.2rem] sm:text-[1.4rem] lg:text-[1.2rem] xl:text-[1.3rem] 2xl:text-[1.4rem] font-[600]"
                                    dangerouslySetInnerHTML={{
                                        __html: selectedItem.title,
                                    }}
                                />
                                <p className="
                                    text-[#363636] 
                                    text-[1rem] sm:text-[1rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem]
                                    mt-[0.5rem] sm:mt-[1rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                                ">
                                    {selectedItem.desc}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            )}

        </>
    )
}

export default AdvisoryBoard
