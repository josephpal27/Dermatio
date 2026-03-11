import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

let productsData = [
    {
        id: 1,
        image: "/images/products-slider/1.avif",
        name: "Oil",
        desc: "Clinically backed and thoughtfully formulated for baby and toddler skin prone to eczema, irritation, and dryness. ",
    },
    {
        id: 2,
        image: "/images/products-slider/2.avif",
        name: "Shampoo",
        desc: "Clinically backed and thoughtfully formulated for baby and toddler skin prone to eczema, irritation, and dryness. ",
    },
    {
        id: 3,
        image: "/images/products-slider/2.avif",
        name: "Bodywash",
        desc: "Clinically backed and thoughtfully formulated for baby and toddler skin prone to eczema, irritation, and dryness. ",
    },
    {
        id: 4,
        image: "/images/products-slider/1.avif",
        name: "Supplement",
        desc: "Clinically backed and thoughtfully formulated for baby and toddler skin prone to eczema, irritation, and dryness. ",
    },
]

const OurProducts = () => {
    return (
        <>
            <section className="
                mt-[2.5rem] sm:mt-[10rem] lg:mt-[8rem] xl:mt-[9rem] 2xl:mt-[10rem]
            ">
                {/* Header */}
                <div className="
                    px-[1rem] sm:px-[5%] lg:px-[7%]
                ">
                    <h3 className="
                        text-[1.8rem] sm:text-[1rem] lg:text-[3.2rem] xl:text-[3.6rem] 2xl:text-[4rem]
                        leading-[1]
                    " data-aos="fade-up">
                        Our Products
                    </h3>
                </div>

                {/* Products Slider */}
                <div className="
                    bg-[#eaf8ff]
                    px-[1rem] sm:px-[5%] lg:px-[7%]
                    py-[2rem] sm:py-[4rem] lg:py-[3.4rem] xl:py-[3.7rem] 2xl:py-[4rem]
                    mt-[1.7rem] sm:mt-[3rem] lg:mt-[2.6rem] xl:mt-[2.8rem] 2xl:mt-[3rem]
                ">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        slidesPerView={4}
                        centeredSlides={false}
                        loop={true}
                        grabCursor={true}
                        spaceBetween={40}
                        speed={1000}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        // pagination={{
                        //     el: ".custom-pagination",
                        //     clickable: true,
                        // }}
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
                            productsData.map((item, index) => {
                                return (
                                    <SwiperSlide key={index} className="
                                        d-flex flex-col items-center
                                    " data-aos="fade">
                                        <div className="
                                            bg-[#dfdace]
                                            rounded-[35px] sm:rounded-[40px] lg:rounded-[40px] xl:rounded-[45px] 2xl:rounded-[50px]
                                        ">
                                            <img src={item.image} alt={item.title} loading="lazy" className="w-full" />
                                        </div>
                                        <div>
                                            <span dangerouslySetInnerHTML={{
                                                __html: item.name,
                                            }} className="
                                                block text-center text-[#000]
                                                mt-[1rem] sm:mt-[1.5rem] lg:mt-[1.1rem] xl:mt-[1.3rem] 2xl:mt-[1.5rem]
                                                text-[1.5em] sm:text-[1.8rem] lg:text-[1.6rem] xl:text-[1.7rem] 2xl:text-[1.8rem]
                                            " style={{ fontFamily: `"OrdinaryBoys", sans-serif` }} />
                                            <p className="
                                                text-[0.95rem] sm:text-[1rem] lg:text-[0.8rem] xl:text-[0.95rem] 2xl:text-[1rem]
                                                text-center text-[#363636]
                                                mt-[0.5rem]
                                            ">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>

                    {/* Custom Pagination */}
                    {/* <div className="custom-pagination text-center"></div> */}

                </div>
            </section>
        </>
    )
}

export default OurProducts;
