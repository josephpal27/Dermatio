import rightArrow from "../assets/images/icons/arrow.png";
import { Link } from "react-router-dom"

const AdvancedLotion = () => {
    return (
        <>
            <section className="
                px-[7%]
                py-[1rem] sm:py-[1rem] lg:py-[0.8rem] xl:py-[0.9rem] 2xl:py-[1rem]
                flex
                justify-between
                flex-wrap
            ">
                {/* Images */}
                <div className="
                    w-[36%]
                    bg-[#dfdace]
                    rounded-[80px] sm:rounded-[80px] lg:rounded-[65px] xl:rounded-[75px] 2xl:rounded-[80px]
                    pt-[3rem] sm:pt-[3rem] lg:pt-[2.6rem] xl:pt-[2.8rem] 2xl:pt-[3rem]
                    pb-[2rem] sm:pb-[2rem] lg:pb-[1.6rem] xl:pb-[1.8rem] 2xl:pb-[2rem]
                    relative
                ">
                    <img
                        src="/images/featured-products/1.avif"
                        alt="Product Image"
                        className="
                            w-full
                    " />
                    {/* Floating Image */}
                    <div className="
                        w-[250px]
                        absolute
                        bottom-[-6rem]
                        right-[-4rem]
                        bg-[#dfdace]
                        rounded-[50px]
                        pt-[2rem]
                        pb-[2rem]
                    ">
                        <img
                            src="/images/featured-products/2.avif"
                            alt="Product Image"
                            className="
                                w-full
                        " />
                    </div>
                </div>
                {/* Content */}
                <div className="
                    w-[52%]
                    flex
                    flex-col
                    justify-center
                ">
                    <h2 className="
                        text-[4rem]
                        leading-[1]
                    ">
                        Advance Dermal <br /> Therapy Lotion
                    </h2>
                    <p className="
                        mt-[2rem]
                        text-[1.2rem]
                        w-[50%]
                        text-[#363636]
                    ">
                        Clinically backed and thoughtfully formulated for baby and toddler skin prone to eczema, irritation.
                    </p>
                    <Link to="/" className="
                        mt-[3rem]
                        border-[2px]
                        border-black
                        w-max
                        py-[0.4rem]
                        pl-[1rem]
                        pr-[0.5rem]
                        rounded-[30px]
                        text-[0.95rem]
                        flex
                        items-center
                        group
                    ">
                        Shop Now
                        <img
                            src={rightArrow}
                            alt="Arrow"
                            loading="lazy"
                            className=" 
                                w-[23px]
                                h-[23px]
                                ml-[0.8rem]
                                transition-all
                                duration-200
                                group-hover:ml-[1.2rem]
                        "/>
                    </Link>
                </div>
            </section>
        </>
    )
}

export default AdvancedLotion
