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
                py-[4rem]
            ">
                <h3 className="
                    text-[2.5rem]
                ">
                    Related Products
                </h3>

                {/* Slider */}
                <div className="
                    mt-[2rem]
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
