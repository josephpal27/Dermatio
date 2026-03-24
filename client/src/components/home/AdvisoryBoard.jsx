import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router-dom";
import rightArrow from "../../assets/images/icons/arrow.png";

let AdvisoryBoardData = [
    {
        id: 1,
        image: "/images/advisory-board/1.avif",
        title: "Dr. Shantanu Ray, <br/> MBBS, MD (Paediatrics)",
    },
    {
        id: 2,
        image: "/images/advisory-board/2.avif",
        title: "Dr. Ritam Mondal, <br/> MBBS, MD (Paediatrics)",
    },
    {
        id: 3,
        image: "/images/advisory-board/3.avif",
        title: "Dr. Aniruddha Ghosh, <br/> MD (Dermatology)",
    },
    {
        id: 4,
        image: "/images/advisory-board/4.avif",
        title: "Dr. Aromita Deb, <br/> MD (Paediatrics & Neonatal-Perinatal Medicine)",
    },
    // {
    //     id: 5,
    //     image: "/images/advisory-board/5.avif",
    //     title: "Ms. Alia SK, <br/> Child Psychologist",
    // },
    {
        id: 6,
        image: "/images/advisory-board/6.avif",
        title: "Dr. Ananya Bhowmik, <br/> Ph.D. (Clinical Nutritionist)",
    },
]

const AdvisoryBoard = () => {
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
                                            <Link to="/">
                                                <img src={rightArrow} alt="Arrow" loading="lazy" className="
                                                    w-[30px] sm:w-[35px] lg:w-[25px] xl:w-[30px] 2xl:w-[35px]
                                                    mt-[0.8rem] sm:mt-[1rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                                                    border-[#1f1f1f] border-[2px] rounded-full
                                                " />
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>

                </div>
            </section>
        </>
    )
}

export default AdvisoryBoard
