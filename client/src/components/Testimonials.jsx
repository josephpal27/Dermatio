let testimonialsData = [
    {
        id: 1,
        image: "",
        name: "Lorem Ipsum",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 2,
        image: "",
        name: "Lorem Ipsum",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 3,
        image: "",
        name: "Lorem Ipsum",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
]

const Testimonials = () => {
    return (
        <>
            <section className="
                mt-[2.5rem] sm:mt-[2.5rem] lg:mt-[1.8rem] xl:mt-[2.2rem] 2xl:mt-[2.5rem]
                mb-[1rem] sm:mb-[1rem] lg:mb-[0.8rem] xl:mb-[0.9rem] 2xl:mb-[1rem]
            ">
                {/* Head */}
                <div className="
                    flex flex-col items-center
                    px-[7%]
                ">
                    <h6 className="
                        text-[1.4rem] sm:text-[1rem] lg:text-[3.2rem] xl:text-[3.6rem] 2xl:text-[4rem]
                        leading-[1]
                    ">
                        Testimonials
                    </h6>
                    <p className="
                        text-[1.1rem] sm:text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                        text-[#363636] text-center
                        mt-[1.5rem] sm:mt-[1.5rem] lg:mt-[1.1rem] xl:mt-[1.3rem] 2xl:mt-[1.5rem]
                        w-[65%]
                    ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. 
                    </p>
                </div>
                {/* Row */}
                <div className="
                    flex justify-between flex-wrap bg-[#e1dfda]
                    px-[7%]
                    py-[4rem] sm:py-[4rem] lg:py-[3rem] xl:py-[3.5rem] 2xl:py-[4rem]
                    mt-[3rem] sm:mt-[3rem] lg:mt-[2.6rem] xl:mt-[2.8rem] 2xl:mt-[3rem]
                ">
                    {
                        testimonialsData.map((item, index) => {
                            return(
                                <div key={index} className="
                                    w-[27%]
                                ">
                                    <div className="
                                        w-[100%] bg-[#fff] aspect-square
                                        rounded-[50px] sm:rounded-[40px] lg:rounded-[40px] xl:rounded-[45px] 2xl:rounded-[50px]
                                    ">
                                        {/* <img src={item.image} alt={item.name} loading="lazy" /> */}
                                    </div>
                                    <div className="
                                        mt-[1.2rem] sm:mt-[1.2rem] lg:mt-[1rem] xl:mt-[1.1rem] 2xl:mt-[1.2rem]
                                    ">
                                        <span className="
                                            block text-center text-[#000]
                                            text-[1.7rem] sm:text-[1.7rem] lg:text-[1.5rem] xl:text-[1.6rem] 2xl:text-[1.7rem]
                                        " style={{ fontFamily: `"OrdinaryBoys", sans-serif` }}>
                                            {item.name}
                                        </span>
                                        <p dangerouslySetInnerHTML={{__html: item.desc}} className="
                                            mt-[0.5rem]
                                            text-center italic text-[#363636]
                                            text-[1rem] sm:text-[1rem] lg:text-[0.8rem] xl:text-[0.95rem] 2xl:text-[1rem]
                                        " />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Testimonials
