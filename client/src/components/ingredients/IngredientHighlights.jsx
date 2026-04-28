const ingredientHighlightsData = [
    {
        id: 1,
        title: "Oat Milk",
        subTitle: "Deep comfort, naturally",
        desc: "Helps soothe dryness and irritation while supporting the skin barrier. Leaves skin soft, calm, and balanced.",
        image: "/images/icons/milk.png",
    },
    {
        id: 2,
        title: "Hyaluronic Acid",
        subTitle: "Hydration that holds",
        desc: "Draws moisture into the skin to keep it hydrated, plump, and smooth.",
        image: "/images/icons/acid.png",
    },
    {
        id: 3,
        title: "Niacinamide",
        subTitle: "Strength meets clarity",
        desc: "Helps strengthen the skin barrier and improve overall texture for calmer, more even-looking skin.",
        image: "/images/icons/niacinamide.png",
    },
    {
        id: 4,
        title: "Ceramides",
        subTitle: "Barrier, rebuilt",
        desc: "Replenishes essential lipids to lock in moisture and protect the skin from dryness.",
        image: "/images/icons/ceramide.png",
    },
]

const IngredientHighlights = () => {
    return (
        <>
            <section className="
                px-[1rem] sm:px-[5%] lg:px-[7%]
                py-[2rem]
                flex justify-between flex-wrap
            ">
                {ingredientHighlightsData.map((item) => {
                    return(
                        <div key={item.id} className="
                            w-[46%]
                            flex justify-between
                            mb-[4rem]
                        ">
                            <div className="w-[15%]">
                                <img src={item.image} alt={item.title} loading="lazy" className="
                                    w-[75px]
                                    h-[75px]
                                    object-contain
                                " />
                            </div>
                            <div className="w-[83%]">
                                <span className="
                                    text-[2rem]
                                    block text-[#000]
                                " style={{fontFamily: `"OrdinaryBoys", sans-serif`}}>
                                    {item.title}
                                </span>
                                <span className="
                                    text-[1.1rem] sm:text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                                    mt-[1rem] sm:mt-[1.5rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                                    text-[#363636] block font-[600]
                                ">
                                    {item.subTitle}
                                </span>
                                <p className="
                                    text-[1.1rem] sm:text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                                    mt-[1rem] sm:mt-[1rem] lg:mt-[0.3rem] xl:mt-[0.4rem] 2xl:mt-[0.5rem]
                                    text-[#363636]
                                ">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </section>
        </>
    )
}

export default IngredientHighlights
