import eczemaImage from '../../assets/images/eczema.avif';
import rightArrow from "../../assets/images/icons/arrow.png";
import { Link } from "react-router-dom"

const EczemaJourney = () => {
    return (
        <>
            <section className="
                px-[1rem] sm:px-[5%] lg:px-[7%]
                py-[3rem] sm:py-[4rem] lg:py-[3.5rem] xl:py-[4rem] 2xl:py-[4.5rem]
            ">
                <h4 className="
                    text-[1.8rem] sm:text-[1rem] lg:text-[3.2rem] xl:text-[3.6rem] 2xl:text-[4rem]
                    leading-[1] text-center
                " data-aos="fade-up">
                    Understanding <br /> the Eczema Journey
                </h4>

                {/* Box */}
                <div className="
                    flex justify-between items-center flex-wrap bg-[#f0ede9] overflow-hidden
                    mt-[1.8rem] sm:mt-[3rem] lg:mt-[2.6rem] xl:mt-[2.8rem] 2xl:mt-[3rem]
                    rounded-[35px] sm:rounded-[70px] lg:rounded-[55px] xl:rounded-[65px] 2xl:rounded-[70px]
                ">
                    {/* Image */}
                    <div className="
                        sm:w-[40%]
                    " data-aos="fade-right">
                        <img src={eczemaImage} alt="Eczema Journey" loading="lazy" className="w-full" />
                    </div>
                    {/* Content */}
                    <div className="
                        sm:w-[50%]
                        py-[1.5rem] sm:py-0
                        px-[1rem] sm:px-0
                    " data-aos="fade">
                        <p className="
                            text-[#363636]
                            text-[1.2rem] sm:text-[1.4rem] lg:text-[1.15rem] xl:text-[1.3rem] 2xl:text-[1.4rem]
                            sm:w-[80%]
                        ">
                            Eczema isn't just a skin condition, it's a daily journey of flare-ups, triggers, healing, and care. <br /> <br /> Each phase needs the right support, not just temporary relief.
                        </p>
                        <Link to="/" className="
                            mt-[1.7rem] sm:mt-[2.5rem] lg:mt-[2.6rem] xl:mt-[2.8rem] 2xl:mt-[3rem]
                            border-[1.5px] sm:border-[1px] lg:border-[1.3px] xl:border-[1.5px] 2xl:border-[2px]
                            border-black w-max
                            py-[0.4rem] sm:py-[0.4rem] lg:py-[0.3rem] xl:py-[0.35rem] 2xl:py-[0.4rem]
                            pl-[0.7rem] sm:pl-[1rem] lg:pl-[0.9rem] xl:pl-[0.95rem] 2xl:pl-[1rem]
                            pr-[0.5rem] sm:pr-[0.5rem] lg:pr-[0.4rem] xl:pr-[0.45rem] 2xl:pr-[0.5rem]
                            rounded-[30px]
                            text-[0.9rem] sm:text-[0.9rem] lg:text-[0.8rem] xl:text-[0.88rem] 2xl:text-[0.95rem]
                            flex items-center group
                        ">
                            Read More
                            <img
                                src={rightArrow}
                                alt="Arrow"
                                loading="lazy"
                                className=" 
                                    w-[20px] sm:w-[20px] lg:w-[19px] xl:w-[21px] 2xl:w-[23px]
                                    h-[20px] sm:h-[20px] lg:h-[19px] xl:h-[21px] 2xl:h-[23px]
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
                </div>
            </section>
        </>
    )
}

export default EczemaJourney
