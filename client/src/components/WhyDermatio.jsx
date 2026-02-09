import rightArrow from "../assets/images/icons/arrow.png";
import { Link } from "react-router-dom"
import whyDermatio1 from '../assets/images/why-dermatio/1.png';
import whyDermatio2 from '../assets/images/why-dermatio/2.png';
import whyDermatio3 from '../assets/images/why-dermatio/3.png';

const WhyDermatio = () => {
    return (
        <>
            <section className="
                px-[7%]
                pb-[8rem]
                mt-[4rem]
                flex
                justify-between
                flex-wrap
                items-center
            ">
                {/* Images */}
                <div className="
                    w-[40%]
                    relative
                ">
                    <img src={whyDermatio1} alt="Why Dermatio Main" loading="lazy" className="
                        w-full
                        rounded-[60px]
                    " />
                    <img src={whyDermatio2} alt="Why Dermatio 1" loading="lazy" className="
                        w-[40%]
                        rounded-[40px]
                        absolute
                        top-[-8%]
                        right-[-20%]
                    " />
                    <img src={whyDermatio3} alt="Why Dermatio 2" loading="lazy" className="
                        w-[40%]
                        rounded-[40px]
                        absolute
                        bottom-[-15%]
                        left-[-10%]
                    " />
                </div>
                {/* Content */}
                <div className="
                    w-[42%]
                ">
                    <h6 className="
                        text-[4rem]
                        leading-[1]
                    ">
                        Why <br /> Dermatio™ ?
                    </h6>
                    <p className="
                        text-[1.5rem]
                        text-[#363636]
                        mt-[1.4rem]
                    ">
                        Advance Dermal Therapy
                    </p>
                    <Link to="/" className="
                        mt-[2.5rem]
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
                        Read More
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

export default WhyDermatio
