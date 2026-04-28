
const IngredientsBanner = () => {
    return (
        <>
            <section className="
                relative
            ">
                <img
                    src="/images/banners/ingredients-banner.png"
                    alt="Ingredients Banner"
                    loading="eager"
                    className="
                        w-full object-cover
                        rounded-b-[15px] sm:rounded-b-[20px] lg:rounded-b-[35px] xl:rounded-b-[40px] 2xl:rounded-b-[45px]
                        h-[auto] sm:h-[50vh] lg:h-[93vh]
                "/>
                {/* Layer */}
                <div className="
                    relative sm:absolute
                    top-0 left-0 w-full h-full text-[#363636] sm:text-[#fff]
                    flex flex-col justify-end
                    px-[1rem] sm:px-[5%] lg:px-[7%]
                    pb-[1rem] sm:pb-[3rem] lg:pb-[6rem] xl:pb-[7rem] 2xl:pb-[8rem]
                ">
                    <h1 className="
                        text-[1.8rem] sm:text-[1rem] lg:text-[3.2rem] xl:text-[3.6rem] 2xl:text-[4rem]
                        mt-[0.5rem] sm:mt-[1rem] lg:mt-[0.6rem] xl:mt-[0.8rem] 2xl:mt-[1rem]
                        leading-[1] w-[60%]
                    " data-aos="fade-up">
                        Calm starts here With ingredients your skin trusts
                    </h1>
                </div>
            </section>
        </>
    )
}

export default IngredientsBanner;
