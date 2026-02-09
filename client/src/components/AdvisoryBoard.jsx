import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router-dom";
import rightArrow from "../assets/images/icons/arrow.png";

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
        title: "Dr. Armonita, <br/> MD (Paediatrics & Neonatal-Perinatal Medicine)",
    },
]

const AdvisoryBoard = () => {
    return (
        <>
            <section className="
                py-[3rem]
            ">
                {/* Head */}
                <div className="
                    flex
                    flex-col
                    items-center
                    px-[7%]
                ">
                    <h6 className="
                        text-[4rem]
                        leading-[1]
                    ">
                        Our Advisory Board
                    </h6>
                    <p className="
                        text-[1.2rem]
                        text-[#363636]
                        mt-[1.5rem]
                        w-[65%]
                        text-center
                    ">
                        Dermatio is guided by a panel of dermatologists, pediatric experts, and formulation scientists who ensure every product is safe, evidence based, and child friendly.
                    </p>
                </div>

                {/* Slider */}
                <div className="
                    px-[7%]
                    mt-[4rem]
                ">
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
                                spaceBetween: 0,
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
                                        rounded-[50px]
                                    ">
                                        <div>
                                            <img src={item.image} alt={item.title} loading="lazy" className="
                                                w-full
                                            " />
                                        </div>
                                        <div className="
                                            p-[1.5rem]
                                        ">
                                            <span dangerouslySetInnerHTML={{
                                                __html: item.title,
                                            }} className="
                                                block
                                                text-[1rem]
                                                text-[#000]
                                            " />
                                            <Link to="/">
                                                <img src={rightArrow} alt="Arrow" loading="lazy" className="
                                                    w-[35px]
                                                    mt-[1rem]
                                                    border-[#1f1f1f]
                                                    border-[2px]
                                                    rounded-full
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
