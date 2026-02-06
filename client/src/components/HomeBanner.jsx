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
                        w-full
                        rounded-b-[45px]
                        h-[93vh]
                        object-cover
                "/>
                {/* Layer */}
                <div className="
                    absolute
                    top-0
                    left-0
                    w-full
                    h-full
                    flex
                    justify-between
                    px-[7%]
                    pb-[8rem]
                    text-[#fff]
                ">
                    {/* Left */}
                    <div className="
                        w-[40%]
                        flex
                        flex-col
                        justify-end
                    ">
                        <span className="
                            text-[1.2rem]
                        ">
                            #1st product to <br /> fight 4 signs of eczema
                        </span>
                        <h1 className="
                            text-[4rem]
                            mt-[1rem]
                            leading-[1]
                        ">
                            Gentle Care <br /> Proven Science
                        </h1>
                    </div>
                    {/* Right */}
                    <div className="
                        w-[34%]
                        flex
                        flex-col
                        justify-center
                    ">
                        <span className="
                            text-[2rem]
                            leading-[1.2]
                            mt-[10rem]
                        ">
                            Eczema relief for <br /> every stage of Childhood
                        </span>
                        <Link to="/" className="
                            mt-[1.5rem]
                            border-[2px]
                            border-white
                            w-max
                            py-[0.4rem]
                            pl-[1rem]
                            pr-[0.5rem]
                            rounded-[30px]
                            text-[0.95rem]
                            transition
                            hover:bg-white
                            hover:text-black
                            flex
                            center
                            group
                        ">
                            Read More 
                            <img 
                                src={rightArrow} 
                                alt="Arrow" 
                                loading="lazy"
                                className=" 
                                    w-[23px]
                                    h-[23px]
                                    ml-[0.8rem]
                                    duration-200
                                    group-hover:ml-[1.2rem]
                            "/>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeBanner
