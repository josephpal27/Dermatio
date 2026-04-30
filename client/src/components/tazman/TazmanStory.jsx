
const TazmanStory = () => {
    return (
        <>
            <section className="
                px-[1rem] sm:px-[5%] lg:px-[7%]
                py-[4rem] sm:py-[2rem] lg:py-[3.4rem] xl:py-[3.7rem] 2xl:py-[4rem]
                flex justify-between items-center flex-wrap
            ">
                <div className="w-[55%]">
                    <h2 className="
                        text-[1.8rem] sm:text-[1rem] lg:text-[3.2rem] xl:text-[3.6rem] 2xl:text-[4rem] leading-[1]
                    ">
                        TAZMAN PEPPER™
                    </h2>
                    <span className="
                        text-[1.1rem] sm:text-[1.2rem] lg:text-[1.5rem] xl:text-[1.6rem] 2xl:text-[1.7rem]
                        mt-[1rem] sm:mt-[1.5rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                        text-[#363636] block
                    ">
                        The Story Behind <br /> the Ingredient
                    </span>
                    <p className="
                        text-[1.1rem] sm:text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                        mt-[1rem] sm:mt-[1rem] lg:mt-[1.8rem] xl:mt-[1.9rem] 2xl:mt-[2rem]
                        text-[#363636]
                    ">
                        Deep in the cold, rugged mountains of Tasmania Island, a rare botanical has been used by Australia’s Aboriginal people for centuries. Known as “mourao”, the Tasmanian pepper berry (Tasmannia lanceolata) was traditionally prized for calming inflammation. Today, this ancestral bushfood is at the heart of our most advanced formulation for sensitive, atopic, and eczema-prone skin.
                    </p>
                </div>
                <div className="w-[30%]">
                    <img
                        src="/images/tazman/tazman-story.png" 
                        alt="Tazman Stoyry" 
                        loading="lazy"
                        className="w-full rounded-[15px] sm:rounded-[20px] lg:rounded-[20px] xl:rounded-[25px] 2xl:rounded-[30px]"
                    />
                </div>
            </section>
        </>
    )
}

export default TazmanStory
