import { Link } from "react-router-dom"

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
                    className="w-full"
                />
                <div className="
                    absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-[#fff]
                    px-[1rem] sm:px-[5%] lg:px-[7%]
                ">
                    <h1 className="
                        text-[1.8rem] sm:text-[1rem] lg:text-[3.2rem] xl:text-[3.6rem] 2xl:text-[4rem]
                    " data-aos="fade-up">
                        Shop
                    </h1>
                    <p className="
                        mt-[0.7rem] sm:mt-[0.5rem] lg:mt-[0.5rem] xl:mt-[0.6rem] 2xl:mt-[0.7rem]
                        text-[0.9rem] sm:text-[0.9rem] lg:text-[0.7rem] xl:text-[0.8rem] 2xl:text-[0.9rem]
                    " data-aos="fade">
                        <Link to="/" className="hover:underline">Home</Link> / Shop
                    </p>
                </div>
            </section>
        </>
    )
}

export default ProductDetailsBanner
