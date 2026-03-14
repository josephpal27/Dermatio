import rightArrow from "../../assets/images/icons/arrow.png";
import { Link } from "react-router-dom"
import whyDermatio1 from '../../assets/images/why-dermatio/1.avif';
import whyDermatio2 from '../../assets/images/why-dermatio/2.avif';
import whyDermatio3 from '../../assets/images/why-dermatio/3.avif';

const WhyDermatio = () => {
    return (
        <>
            <section className="
                px-[1rem] sm:px-[5%] lg:px-[7%]
                pb-[1rem] sm:pb-[8rem] lg:pb-[6rem] xl:pb-[7rem] 2xl:pb-[8rem]
                mt-[2rem] sm:mt-[4rem] lg:mt-[3.6rem] xl:mt-[3.8rem] 2xl:mt-[4rem]
                flex justify-between flex-wrap items-center
            ">
                {/* Images */}
                <div className="
                    w-[100%] sm:w-[40%]
                    relative
                ">
                    <img src={whyDermatio1} alt="Why Dermatio Main" loading="lazy" className="
                        w-[80%] sm:w-[100%]
                        mx-[auto] sm:mx-0
                        rounded-[35px] sm:rounded-[50px] lg:rounded-[50px] xl:rounded-[55px] 2xl:rounded-[60px]
                    " />
                    <img src={whyDermatio2} alt="Why Dermatio 1" loading="lazy" className="
                        w-[37%] sm:w-[40%]
                        rounded-[25px] sm:rounded-[30px] lg:rounded-[30px] xl:rounded-[35px] 2xl:rounded-[40px]
                        absolute
                        top-[-8%]
                        right-[0] sm:right-[-20%]
                    " data-aos="fade-down"/>
                    <img src={whyDermatio3} alt="Why Dermatio 2" loading="lazy" className="
                        w-[30%] sm:w-[32%]
                        rounded-[18px] sm:rounded-[30px] lg:rounded-[30px] xl:rounded-[35px] 2xl:rounded-[40px]
                        absolute
                        bottom-[-15%]
                        left-[0] sm:left-[-10%]
                    " data-aos="fade-left"/>
                </div>
                {/* Content */}
                <div className="
                    w-[100%] sm:w-[42%]
                    mt-[5rem] sm:mt-0
                ">
                    <h6 className="
                        text-[1.8rem] sm:text-[1rem] lg:text-[3.2rem] xl:text-[3.6rem] 2xl:text-[4rem]
                        leading-[1]
                    " data-aos="fade-up">
                        Why <br /> Dermatio™ ?
                    </h6>
                    <p className="
                        text-[1.3rem] sm:text-[1.5rem] lg:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.5rem]
                        text-[#363636]
                        mt-[1rem] sm:mt-[1.4rem] lg:mt-[1.2rem] xl:mt-[1.3rem] 2xl:mt-[1.4rem]
                    " data-aos="fade">
                        Advance Dermal Therapy
                    </p>
                    <Link to="/" className="
                        mt-[1.8rem] sm:mt-[2.5rem] lg:mt-[2.1rem] xl:mt-[2.3rem] 2xl:mt-[2.5rem]
                        border-[1.5px] sm:border-[1px] lg:border-[1.3px] xl:border-[1.5px] 2xl:border-[2px]
                        border-black w-max
                        py-[0.4rem] sm:py-[0.4rem] lg:py-[0.3rem] xl:py-[0.35rem] 2xl:py-[0.4rem]
                        pl-[0.7rem] sm:pl-[1rem] lg:pl-[0.9rem] xl:pl-[0.95rem] 2xl:pl-[1rem]
                        pr-[0.5rem] sm:pr-[0.5rem] lg:pr-[0.4rem] xl:pr-[0.45rem] 2xl:pr-[0.5rem]
                        rounded-[30px]
                        text-[0.9rem] sm:text-[0.9rem] lg:text-[0.8rem] xl:text-[0.88rem] 2xl:text-[0.95rem]
                        flex items-center group
                    " data-aos="fade">
                        Read More
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

export default WhyDermatio
