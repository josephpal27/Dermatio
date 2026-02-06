import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

let productsData = [
    {
        id: 1,
        image: "/images/products-slider/1.png",
        name: "Oil",
        desc: "Clinically backed and thoughtfully formulated for baby and toddler skin prone to eczema, irritation, and dryness. ",
    },
    {
        id: 2,
        image: "/images/products-slider/2.png",
        name: "Shampoo",
        desc: "Clinically backed and thoughtfully formulated for baby and toddler skin prone to eczema, irritation, and dryness. ",
    },
    {
        id: 3,
        image: "/images/products-slider/2.png",
        name: "Bodywash",
        desc: "Clinically backed and thoughtfully formulated for baby and toddler skin prone to eczema, irritation, and dryness. ",
    },
    {
        id: 4,
        image: "/images/products-slider/1.png",
        name: "Supplement",
        desc: "Clinically backed and thoughtfully formulated for baby and toddler skin prone to eczema, irritation, and dryness. ",
    },
]

const OurProducts = () => {
    return (
        <>
            <section className="
                mt-[11rem]
            ">
                {/* Header */}
                <div className="
                    px-[7%]
                ">
                    <h3 className="
                        text-[4rem]
                        leading-[1]
                    ">
                        Our Products
                    </h3>
                </div>

                {/* Products Slider */}
                <div className="
                    bg-[#eaf8ff]
                    px-[7%]
                    py-[4rem]
                    mt-[3rem]
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
                                spaceBetween: 0,
                            },
                            640: {
                                slidesPerView: 3, // tablet
                                spaceBetween: 30,
                            },
                            991: {
                                slidesPerView: 4, // tablet and up
                                spaceBetween: 20,
                            },
                        }}
                    >

                        {
                            productsData.map((item, index) => {
                                return (
                                    <SwiperSlide key={index} className="
                                        d-flex flex-col items-center
                                    ">
                                        <div className="
                                            bg-[#dfdace]
                                            rounded-[50px]
                                        ">
                                            <img src={item.image} alt={item.title} loading="lazy" className="
                                                w-full
                                            " />
                                        </div>
                                        <div>
                                            <span dangerouslySetInnerHTML={{
                                                __html: item.name,
                                            }} className="
                                                block
                                                text-center
                                                mt-[1.5rem]
                                                text-[1.8rem]
                                            " style={{ fontFamily: `"OrdinaryBoys", sans-serif` }} />
                                            <p className="
                                                text-[1rem]
                                                text-center
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

export default OurProducts
