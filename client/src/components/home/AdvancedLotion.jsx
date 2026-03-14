import rightArrow from "../../assets/images/icons/arrow.png";
import { Link } from "react-router-dom"

const AdvancedLotion = () => {
    return (
        <>
            <section className="
                px-[1rem] sm:px-[5%] lg:px-[7%]
                py-[1rem] sm:py-[1rem] lg:py-[0.8rem] xl:py-[0.9rem] 2xl:py-[1rem]
                flex flex-wrap justify-between
            ">
                {/* Images */}
                <div className="
                    w-[80%] sm:w-[36%]
                    bg-[#dfdace] relative
                    rounded-[45px] sm:rounded-[80px] lg:rounded-[65px] xl:rounded-[75px] 2xl:rounded-[80px]
                    pt-[2rem] sm:pt-[3rem] lg:pt-[2.6rem] xl:pt-[2.8rem] 2xl:pt-[3rem]
                    pb-[1rem] sm:pb-[2rem] lg:pb-[1.6rem] xl:pb-[1.8rem] 2xl:pb-[2rem]
                ">
                    <img
                        src="/images/featured-products/1.avif"
                        alt="Product Image"
                        className="w-full" />
                    {/* Floating Image */}
                    <div className="
                        w-[60%] sm:w-[200px] lg:w-[210px] xl:w-[230px] 2xl:w-[250px]
                        absolute bg-[#dfdace]
                        bottom-[-4.5rem] sm:bottom-[-5rem] lg:bottom-[-4.5rem] xl:bottom-[-5.5rem] 2xl:bottom-[-6rem]
                        right-[-24%] sm:right-[-4rem] lg:right-[-3rem] xl:right-[-3.5rem] 2xl:right-[-4rem]
                        rounded-[35px] sm:rounded-[40px] lg:rounded-[40px] xl:rounded-[45px] 2xl:rounded-[50px]
                        py-[1.2rem] sm:py-[2rem] lg:py-[1.6rem] xl:py-[1.8rem] 2xl:py-[2rem]
                    " data-aos="fade-down">
                        <img
                            src="/images/featured-products/2.avif"
                            alt="Product Image"
                            className="w-full" />
                    </div>
                </div>
                {/* Content */}
                <div className="
                    w-[100%] sm:w-[52%]
                    flex flex-col justify-center
                    mt-[6.5rem] sm:mt-0
                ">
                    <h2 className="
                        text-[1.8rem] sm:text-[1rem] lg:text-[3.2rem] xl:text-[3.6rem] 2xl:text-[4rem]
                        leading-[1]
                    " data-aos="fade-up">
                        Advance Dermal <br /> Therapy Lotion
                    </h2>
                    <p className="
                        mt-[1.5rem] sm:mt-[2rem]
                        text-[1.1rem] sm:text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                        w-[100%] sm:w-[50%] text-[#363636]
                    " data-aos="fade">
                        Clinically backed and thoughtfully formulated for baby and toddler skin prone to eczema, irritation.
                    </p>
                    <Link to="/" className="
                        mt-[2rem] sm:mt-[2.5rem] lg:mt-[2.6rem] xl:mt-[2.8rem] 2xl:mt-[3rem]
                        border-[1.5px] sm:border-[1px] lg:border-[1.3px] xl:border-[1.5px] 2xl:border-[2px]
                        border-black w-max
                        py-[0.4rem] sm:py-[0.4rem] lg:py-[0.3rem] xl:py-[0.35rem] 2xl:py-[0.4rem]
                        pl-[0.7rem] sm:pl-[1rem] lg:pl-[0.9rem] xl:pl-[0.95rem] 2xl:pl-[1rem]
                        pr-[0.5rem] sm:pr-[0.5rem] lg:pr-[0.4rem] xl:pr-[0.45rem] 2xl:pr-[0.5rem]
                        rounded-[30px]
                        text-[0.9rem] sm:text-[0.9rem] lg:text-[0.8rem] xl:text-[0.88rem] 2xl:text-[0.95rem]
                        flex items-center group
                    " data-aos="fade">
                        Shop Now
                        <img
                            src={rightArrow}
                            alt="Arrow"
                            loading="lazy"
                            className=" 
                                w-[21px] sm:w-[20px] lg:w-[19px] xl:w-[21px] 2xl:w-[23px]
                                h-[21px] sm:h-[20px] lg:h-[19px] xl:h-[21px] 2xl:h-[23px]
                                ml-[0.8rem] sm:ml-[0.8rem] lg:ml-[0.6rem] xl:ml-[0.7rem] 2xl:ml-[0.8rem]
                                transition-all duration-200
                                group-hover:2xl:ml-[1.2rem]
                                group-hover:xl:ml-[1.1rem]
                                group-hover:lg:ml-[1rem]
                                group-hover:sm:ml-[0.9rem]
                                group-hover:ml-[1rem]
                        "/>
                    </Link>
                </div>
            </section>
        </>
    )
}

export default AdvancedLotion;
