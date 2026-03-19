
const ProductDetailsBanner = () => {
    return (
        <>
            <section className="
                relative
            ">
                <img 
                    src="/images/banners/product-details-banner.avif" 
                    alt="Product Details Banner" 
                    loading="eager"
                    className="
                        w-full h-[110px] sm:h-auto
                        rounded-b-[15px] sm:rounded-b-[20px] lg:rounded-b-[20px] xl:rounded-b-[25px] 2xl:rounded-b-[30px]
                    "
                />
                <div className="
                    absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-[#fff]
                    px-[1rem] sm:px-[5%] lg:px-[7%]
                ">
                    <h1 className="
                        text-[2rem] sm:text-[1rem] lg:text-[3.2rem] xl:text-[3.6rem] 2xl:text-[4rem]
                    " data-aos="fade-up">
                        Shop
                    </h1>
                </div>
            </section>
        </>
    )
}

export default ProductDetailsBanner
