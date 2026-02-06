import eczemaImage from '../assets/images/eczema.png';
import rightArrow from "../assets/images/icons/arrow.png";
import { Link } from "react-router-dom"

const EczemaJourney = () => {
    return (
        <>
            <section className="
                px-[7%]
                py-[4rem]
            ">
                <h4 className="
                    text-[4rem]
                    leading-[1]
                    text-center
                ">
                    Understanding <br /> the Eczema Journey
                </h4>

                {/* Box */}
                <div className="
                    flex
                    justify-between
                    items-center
                    mt-[3rem]
                    flex-wrap
                    rounded-[70px]
                    bg-[#f0ede9]
                    overflow-hidden
                ">
                    {/* Image */}
                    <div className="
                        w-[40%]
                    ">
                        <img src={eczemaImage} alt="Eczema Journey" loading="lazy" className="
                            w-full
                        " />
                    </div>
                    {/* Content */}
                    <div className="
                        w-[50%]
                    ">
                        <p className="
                            text-[#363636]
                            text-[1.4rem]
                            w-[80%]
                        ">
                            Eczema isn't just a skin condition, it's a daily journey of flare-ups, triggers, healing, and care. <br /> <br /> Each phase needs the right support, not just temporary relief.
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
                </div>
            </section>
        </>
    )
}

export default EczemaJourney
