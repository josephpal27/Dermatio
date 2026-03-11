import { Link } from "react-router-dom"
import rightArrow from "../assets/images/icons/arrow.png";

const HomeBanner = () => {
    return (
        <>
            <section className="
                relative
            ">
                <img
                    src="/images/banners/home-banner.avif"
                    alt="Home Banner"
                    loading="eager"
                    className="
                        w-full object-cover
                        rounded-b-[15px] sm:rounded-b-[20px] lg:rounded-b-[35px] xl:rounded-b-[40px] 2xl:rounded-b-[45px]
                        h-[auto] sm:h-[50vh] lg:h-[93vh]
                "/>
                {/* Layer */}
                <div className="
                    relative sm:absolute
                    top-0 left-0 w-full h-full text-[#363636] sm:text-[#fff]
                    flex justify-between flex-wrap
                    px-[1rem] sm:px-[5%] lg:px-[7%]
                    pb-[1rem] sm:pb-[3rem] lg:pb-[6rem] xl:pb-[7rem] 2xl:pb-[8rem]
                ">
                    {/* Left */}
                    <div className="
                        w-[100%] sm:w-[40%]
                        flex flex-col justify-end
                        mt-[1rem] sm:mt-0
                    ">
                        <span className="
                            text-[1.1rem] sm:text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                        ">
                            #1st product to <br /> fight 4 signs of eczema
                        </span>
                        <h1 className="
                            text-[1.8rem] sm:text-[1rem] lg:text-[3.2rem] xl:text-[3.6rem] 2xl:text-[4rem]
                            mt-[1rem] sm:mt-[1rem] lg:mt-[0.6rem] xl:mt-[0.8rem] 2xl:mt-[1rem]
                            leading-[1]
                        ">
                            Gentle Care <br /> Proven Science
                        </h1>
                    </div>
                    {/* Right */}
                    <div className="
                        w-[100%] sm:w-[34%]
                        flex flex-col justify-center
                    ">
                        <span className="
                            text-[1.3rem] sm:text-[2rem] lg:text-[1.6rem] xl:text-[1.8rem] 2xl:text-[2rem]
                            leading-[1.2]
                            mt-[2rem] sm:mt-[3rem] lg:mt-[8rem] xl:mt-[9rem] 2xl:mt-[10rem]
                        ">
                            Eczema relief for <br /> every stage of Childhood
                        </span>
                        <Link to="/" className="
                            mt-[1.4rem] sm:mt-[1rem] lg:mt-[1.1rem] xl:mt-[1.3rem] 2xl:mt-[1.5rem]
                            border-[2px] sm:border-[1px] lg:border-[1.3px] xl:border-[1.5px] 2xl:border-[2px]
                            border-[#000] sm:border-[#fff]
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
                                    w-[21px] sm:w-[20px] lg:w-[19px] xl:w-[21px] 2xl:w-[23px]
                                    h-[21px] sm:h-[20px] lg:h-[19px] xl:h-[21px] 2xl:h-[23px]
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
                </div>
            </section>
        </>
    )
}

export default HomeBanner
