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
                py-[3rem]
                mt-[1.5rem]
                bg-[#eeebe7] border-b-[#becb0c]
                border-b-[8px]
                mb-[1rem]
            ">

                <h2 className="
                    text-[1.8rem] sm:text-[1rem] lg:text-[3.2rem] xl:text-[3.6rem] 2xl:text-[4rem]
                    leading-[1]
                ">
                    Key Ingredients We Trust
                </h2>

                {/* Slider */}
                <div className="
                    mt-[3rem]
                    mb-[1rem]
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
                                            bg-[#dddad7] flex items-center gap-[1.3rem]
                                            py-[1rem]
                                            px-[1rem]
                                        ">
                                            <div>
                                                <FaCircle className="
                                                    text-[0.7rem]
                                                " />
                                            </div>
                                            <div>
                                                <p dangerouslySetInnerHTML={{__html: `${item.title}`}} className="
                                                    text-[1.1rem]
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