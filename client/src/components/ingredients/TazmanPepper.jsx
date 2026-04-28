import { Link } from "react-router-dom";
import rightArrow from "../../assets/images/icons/arrow.png";

const TazmanPepper = () => {
    return (
        <>
            <section className="
                px-[1rem] sm:px-[5%] lg:px-[7%]
                py-[5rem]
                flex justify-between flex-wrap
            ">
                <div className="w-[48%]">
                    <h4 className="
                        text-[1.8rem] sm:text-[1rem] lg:text-[3.2rem] xl:text-[3.6rem] 2xl:text-[4rem] leading-[1]
                    ">
                        Tazman Pepper
                    </h4>
                    <span className="
                        text-[1.1rem] sm:text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                        mt-[1rem] sm:mt-[1.5rem] lg:mt-[1.3rem] xl:mt-[1.4rem] 2xl:mt-[1.5rem]
                        text-[#363636] block font-[700]
                    ">
                        Our hero of calm
                    </span>
                    <p className="
                        text-[1.1rem] sm:text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                        mt-[1rem] sm:mt-[1rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                        text-[#363636]
                    ">
                        Extracted from Tasmannia lanceolata fruit, Tazman Pepper is rich in natural anti-inflammatory
                        compounds, it helps reduce redness, calm itching, and ease skin discomfort, all common concerns
                        associated with eczema-prone skin.
                    </p>
                    <Link to="/" className="
                        mt-[1.4rem] sm:mt-[1rem] lg:mt-[1.1rem] xl:mt-[1.3rem] 2xl:mt-[1.5rem]
                        border-[1.5px] sm:border-[1.2px] lg:border-[1.3px] xl:border-[1.5px] 2xl:border-[2px]
                        border-[#000]
                        w-max
                        py-[0.4rem] sm:py-[0.4rem] lg:py-[0.3rem] xl:py-[0.35rem] 2xl:py-[0.4rem]
                        pl-[0.7rem] sm:pl-[1rem] lg:pl-[0.9rem] xl:pl-[0.95rem] 2xl:pl-[1rem]
                        pr-[0.5rem] sm:pr-[0.5rem] lg:pr-[0.4rem] xl:pr-[0.45rem] 2xl:pr-[0.5rem]
                        rounded-[30px]
                        text-[0.9rem] sm:text-[0.9rem] lg:text-[0.8rem] xl:text-[0.88rem] 2xl:text-[0.95rem]
                        transition
                        hover:bg-white
                        hover:text-black
                        flex items-center group
                    ">
                        Read More
                        <img
                            src={rightArrow}
                            alt="Arrow"
                            loading="lazy"
                            className=" 
                                w-[21px] sm:w-[22px] lg:w-[19px] xl:w-[21px] 2xl:w-[23px]
                                h-[21px] sm:h-[22px] lg:h-[19px] xl:h-[21px] 2xl:h-[23px]
                                ml-[0.8rem] sm:ml-[0.8rem] lg:ml-[0.6rem] xl:ml-[0.7rem] 2xl:ml-[0.8rem]
                                duration-200
                                group-hover:2xl:ml-[1.2rem]
                                group-hover:xl:ml-[1.1rem]
                                group-hover:lg:ml-[1rem]
                                group-hover:sm:ml-[0.9rem]
                                group-hover:ml-[1rem]
                        "/>
                    </Link>
                </div>
                <div className="w-[48%]">
                    <img
                        src="/images/ingredients/tazman.png"
                        alt="Tazman Pepper"
                        loading="lazy"
                        className="
                            w-full
                            rounded-[15px] sm:rounded-[20px] lg:rounded-[18px] xl:rounded-[22px] 2xl:rounded-[25px]
                    "/>
                </div>
            </section>
        </>
    )
}

export default TazmanPepper
