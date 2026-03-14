import rightArrow from "../../assets/images/icons/arrow.png";
import { Link } from "react-router-dom"
import grapesImage from '../../assets/images/grapes.avif';
import provenImage from '../../assets/images/proven.avif';

const ClinicallyProven = () => {
    return (
        <>
            <section className="
                px-[1rem] sm:px-[5%] lg:px-[7%]
                py-[2.2rem] sm:py-[2rem] lg:py-[1.5rem] xl:py-[1.8rem] 2xl:py-[2rem]
            ">
                <h6 className="
                    text-[1.8rem] sm:text-[1rem] lg:text-[3.2rem] xl:text-[3.6rem] 2xl:text-[4rem]
                    leading-[1.2]
                " data-aos="fade-up">
                    Clinically Proven Ingredient <br /> Tazman Pepper™
                </h6>
                {/* Row */}
                <div className="
                    flex justify-between flex-wrap
                    mt-[2rem] sm:mt-[3rem] lg:mt-[2.6rem] xl:mt-[2.8rem] 2xl:mt-[3rem]
                " data-aos="fade">
                    {/* Left */}
                    <div className="
                        sm:w-[48%]
                        flex justify-between items-center
                        sm:border-r-[2px] border-r-[#505050] border-dashed
                    ">
                        <div className="
                            w-[35%]
                        " data-aos="zoom-in">
                            <img src={grapesImage} alt="Grapes" loading="lazy" className="w-full" />
                        </div>
                        <div className="
                            w-[60%]
                        ">
                            <p className="
                                text-[1.1rem] sm:text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                                text-[#363636] italic
                                sm:w-[85%]
                            ">
                                Repair microtears, restore barrier function, and replenish moisture as skin heals.
                            </p>
                        </div>
                    </div>
                    {/* Right */}
                    <div className="
                        sm:w-[48%]
                        flex justify-between items-center flex-row-reverse sm:flex-row
                        mt-[1rem] sm:mt-0
                    ">
                        <div className="
                            w-[19%]
                        " data-aos="zoom-in">
                            <img src={provenImage} alt="Proven" loading="lazy" className="w-full" />
                        </div>
                        <div className="
                            w-[75%]
                        ">
                            <p className="
                                text-[1.1rem] sm:text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                                text-[#363636] italic
                            ">
                                Clinically backed relief, felt instantly.
                            </p>
                            <p className="
                                text-[1.1rem] sm:text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                                text-[#363636] italic
                                mt-[1rem]
                            ">
                                Clinically backed relief, felt instantly.Up to 79% less itching, up to 35% visible redness reduction, and rapid calming of burning discomfort.
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
                            ">
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
                    </div>
                </div>
            </section>
        </>
    )
}

export default ClinicallyProven
