import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { FaCircle } from "react-icons/fa";

let keyIngredientsData = [
    {
        id: 1,
        title: "Ceramide NP <br/> Barrier Repair",
    },
    {
        id: 2,
        title: "Colloidal Oatmeal <br/> Anti-itch · Soothing",
    },
    {
        id: 3,
        title: "Niacinamide 4% <br/> Anti-inflammatory",
    },
    {
        id: 4,
        title: "Hyaluronic Acid <br/> Deep hydration",
    },
    {
        id: 5,
        title: "Allantoin Skin <br/> calming",
    },
]

const KeyIngredients = () => {
    return (
        <>
            <section className="
                px-[7%]
                py-[3rem] sm:py-[2.5rem] lg:py-[2.5rem] xl:py-[2.8rem] 2xl:py-[3rem]
                mt-[1.5rem] sm:mt-[1.5rem] lg:mt-[1.3rem] xl:mt-[1.4rem] 2xl:mt-[1.5rem]
                bg-[#eeebe7] border-b-[#becb0c] overflow-hidden
                border-b-[8px]
                mb-[1rem] sm:mb-[1rem] lg:mb-[0.8rem] xl:mb-[0.9rem] 2xl:mb-[1rem]
            ">

                <h2 className="
                    text-[1.8rem] sm:text-[1rem] lg:text-[2.2rem] xl:text-[2.6rem] 2xl:text-[3rem]
                    leading-[1]
                " data-aos="fade-right" data-aos-once="true">
                    Key Ingredients We Trust
                </h2>

                {/* Slider */}
                <div className="
                    mt-[3rem] sm:mt-[3rem] lg:mt-[2.4rem] xl:mt-[2.7rem] 2xl:mt-[3rem]
                    mb-[1rem] sm:mb-[1rem] lg:mb-[0.8rem] xl:mb-[0.9rem] 2xl:mb-[1rem]
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
                                spaceBetween: 12,
                            },
                            640: {
                                slidesPerView: 3, // tablet
                                spaceBetween: 50,
                            },
                            991: {
                                slidesPerView: 4, // tablet and up
                                spaceBetween: 30,
                            },
                        }}
                    >

                        {
                            keyIngredientsData.map((item, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <div className="
                                            bg-[#dddad7] flex items-center 
                                            gap-[1.3rem] sm:gap-[1rem] lg:gap-[1.1rem] xl:gap-[1.2rem] 2xl:gap-[1.3rem]
                                            p-[1rem] sm:p-[1rem] lg:p-[0.8rem] xl:p-[0.9rem] 2xl:p-[1rem]
                                        ">
                                            <div>
                                                <FaCircle className="
                                                    text-[0.7rem] sm:text-[0.7rem] lg:text-[0.5rem] xl:text-[0.6rem] 2xl:text-[0.7rem]
                                                " />
                                            </div>
                                            <div>
                                                <p dangerouslySetInnerHTML={{__html: `${item.title}`}} className="
                                                    text-[1.1rem] sm:text-[1.1rem] lg:text-[0.85rem] xl:text-[1rem] 2xl:text-[1.1rem]
                                                " />
                                            </div>
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

export default KeyIngredients