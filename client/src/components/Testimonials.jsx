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
                mt-[2.5rem]
                mb-[1rem]
            ">
                {/* Head */}
                <div className="
                    flex
                    flex-col
                    items-center
                    px-[7%]
                ">
                    <h6 className="
                        text-[4rem]
                        leading-[1]
                    ">
                        Testimonials
                    </h6>
                    <p className="
                        text-[1.2rem]
                        text-[#363636]
                        mt-[1.5rem]
                        w-[65%]
                        text-center
                    ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. 
                    </p>
                </div>
                {/* Row */}
                <div className="
                    flex
                    justify-between
                    flex-wrap
                    px-[7%]
                    py-[4rem]
                    mt-[3rem]
                    bg-[#e1dfda]
                ">
                    {
                        testimonialsData.map((item, index) => {
                            return(
                                <div key={index} className="
                                    w-[27%]
                                ">
                                    <div className="
                                        w-[100%]
                                        aspect-square
                                        bg-[#fff]
                                        rounded-[50px]
                                    ">
                                        {/* <img src={item.image} alt={item.name} loading="lazy" /> */}
                                    </div>
                                    <div className="
                                        mt-[1.2rem]
                                    ">
                                        <span className="
                                            block
                                            text-center
                                            text-[#000]
                                            text-[1.7rem]
                                        " style={{ fontFamily: `"OrdinaryBoys", sans-serif` }}>
                                            {item.name}
                                        </span>
                                        <p dangerouslySetInnerHTML={{__html: item.desc}} className="
                                            mt-[0.5rem]
                                            text-center
                                            italic
                                            text-[1rem]
                                            text-[#363636]
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
