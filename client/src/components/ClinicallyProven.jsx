import rightArrow from "../assets/images/icons/arrow.png";
import { Link } from "react-router-dom"
import grapesImage from '../assets/images/grapes.avif';
import provenImage from '../assets/images/proven.avif';

const ClinicallyProven = () => {
    return (
        <>
            <section className="
                px-[7%]
                py-[2rem]
            ">
                <h6 className="
                    text-[4rem]
                    leading-[1.2]
                ">
                    Clinically Proven Ingredient <br /> Tazman Pepper™
                </h6>
                {/* Row */}
                <div className="
                    flex
                    justify-between
                    flex-wrap
                    mt-[3rem]
                ">
                    {/* Left */}
                    <div className="
                        w-[48%]
                        flex
                        justify-between
                        items-center
                        border-r-[2px]
                        border-r-[#505050]
                        border-dashed
                    ">
                        <div className="
                            w-[35%]
                        ">
                            <img src={grapesImage} alt="Grapes" loading="lazy" className="w-full" />
                        </div>
                        <div className="
                            w-[60%]
                        ">
                            <p className="
                                text-[1.2rem]
                                text-[#363636]
                                italic
                                w-[85%]
                            ">
                                Repair microtears, restore barrier function, and replenish moisture as skin heals.
                            </p>
                        </div>
                    </div>
                    {/* Right */}
                    <div className="
                        w-[48%]
                        flex
                        justify-between
                        items-center
                    ">
                        <div className="
                            w-[19%]
                        ">
                            <img src={provenImage} alt="Proven" loading="lazy" className="w-full" />
                        </div>
                        <div className="
                            w-[75%]
                        ">
                            <p className="
                                text-[1.2rem]
                                text-[#363636]
                                italic
                            ">
                                Clinically backed relief, felt instantly.
                            </p>
                            <p className="
                                text-[1.2rem]
                                text-[#363636]
                                italic
                                mt-[1rem]
                            ">
                                Clinically backed relief, felt instantly.Up to 79% less itching, up to 35% visible redness reduction, and rapid calming of burning discomfort.
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
                </div>
            </section>
        </>
    )
}

export default ClinicallyProven
