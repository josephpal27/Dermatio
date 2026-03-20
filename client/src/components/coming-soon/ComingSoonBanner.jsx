import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

const ComingSoonBanner = () => {

    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const target = 80
        const duration = 2700 // 2.7 seconds
        const steps = 100
        const stepTime = duration / steps

        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= target) {
                    clearInterval(interval)
                    return target
                }
                return prev + 1
            })
        }, stepTime)

        return () => clearInterval(interval)
    }, [])

    return (
        <>
            <section className="relative">
                <img src="/images/banners/home-banner.avif" alt="Coming Soon Banner" loading="lazy" className="
                    w-full h-[92vh] object-cover
                " />
                {/* Layer */}
                <div className="
                    w-full h-full absolute top-0 left-0 backdrop-blur-[100px] flex flex-col items-center justify-center
                ">
                    <h1 className="
                        text-[1.9rem] sm:text-[4rem] lg:text-[4rem] xl:text-[4.6rem] 2xl:text-[5rem]
                        text-center text-[#fff] font-[600] uppercase
                        tracking-[2px] sm:tracking-[4px] lg:tracking-[5px] xl:tracking-[5px] 2xl:tracking-[6px]
                    ">
                        Page Under <br /> 
                        <span className="
                            tracking-[4px] sm:tracking-[6px] lg:tracking-[6px] xl:tracking-[8px] 2xl:tracking-[10px]
                        ">
                            Construction
                        </span>
                    </h1>
                    
                    <p className="
                        mt-[0.8rem] sm:mt-[1rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                        text-[#fff] uppercase font-[500]
                        tracking-[1.5px] sm:tracking-[4px] lg:tracking-[3px] xl:tracking-[3.5px] 2xl:tracking-[4px]
                        text-[1rem] sm:text-[1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                    ">
                        Site Almost Ready
                    </p>

                    <div className="
                        mt-[1.5rem] sm:mt-[2rem] lg:mt-[1.6rem] xl:mt-[1.8rem] 2xl:mt-[2rem]
                        w-[70%] sm:w-[35%]
                        relative text-[#fff] font-[500]
                        text-[0.85rem] sm:text-[0.9rem] lg:text-[0.7rem] xl:text-[0.8rem] 2xl:text-[0.9rem]
                    ">
                        <progress min="0" max="100" value={progress} className="
                            progress-bar w-full
                            h-[10px] sm:h-[8px] lg:h-[8.5px] xl:h-[9.5px] 2xl:h-[10px]
                        " />
                        <span className="absolute -bottom-7 left-0">{progress}%</span>
                        <span className="absolute -bottom-7 right-0">100%</span>
                    </div>

                    <Link to="/" className="
                        bg-[#fff] text-[#becb0c] hover:bg-[#becb0c] hover:text-[#fff] font-[600] transition duration-200
                        mt-[4rem] sm:mt-[4rem] lg:mt-[3.5rem] xl:mt-[3.8rem] 2xl:mt-[4rem]
                        px-[1.2rem] sm:px-[1.4rem] lg:px-[1.3rem] xl:px-[1.4rem] 2xl:px-[1.5rem]
                        py-[0.65rem] sm:py-[0.7rem] lg:py-[0.6rem] xl:py-[0.65rem] 2xl:py-[0.7rem]
                        rounded-[8px]
                        tracking-[2px] shadow-md font-[OrdinaryBoys]
                        text-[1rem] sm:text-[1rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem]
                    ">
                        BACK TO HOME
                    </Link>
                </div>
            </section>
        </>
    )
}

export default ComingSoonBanner