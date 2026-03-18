import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { productsData } from "../../data/productsData";
import ProductCard from "../products/ProductCard";

const RelatedProducts = () => {
    return (
        <>
            <section className="
                px-[7%]
                pt-[4rem] sm:pt-[2.5rem] lg:pt-[3.3rem] xl:pt-[3.6rem] 2xl:pt-[4rem]
                pb-[3rem] sm:pb-[2rem] lg:pb-[2.2rem] xl:pb-[2.5rem] 2xl:pb-[3rem]
            ">
                <h3 className="
                    text-[2.5rem] sm:text-[2rem] lg:text-[1.9rem] xl:text-[2.2rem] 2xl:text-[2.5rem]
                " data-aos="fade-right" data-aos-once="true">
                    Related Products
                </h3>

                {/* Slider */}
                <div className="
                    mt-[2rem] sm:mt-[2rem] lg:mt-[1.5rem] xl:mt-[1.8rem] 2xl:mt-[2rem]
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
                            productsData.map((product, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <div className="p-[0.5rem]">
                                            <ProductCard key={product.id} product={product} />
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

export default RelatedProducts
