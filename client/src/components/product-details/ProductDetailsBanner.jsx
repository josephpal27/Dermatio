import { Link } from "react-router-dom"

const ProductDetailsBanner = () => {
    return (
        <>
            <section className="
                relative
            ">
                <img 
                    src="/images/banners/product-details-banner.png" 
                    alt="Product Details Banner" 
                    loading="eager"
                    className="w-full"
                />
                <div className="
                    absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-[#fff]
                ">
                    <h1 className="
                        text-[1.8rem] sm:text-[1rem] lg:text-[3.2rem] xl:text-[3.6rem] 2xl:text-[4rem]
                    ">
                        Shop
                    </h1>
                    <p className="
                        mt-[0.7rem]
                        text-[0.9rem]
                    ">
                        <Link to="/" className="hover:underline">Home</Link> / Shop
                    </p>
                </div>
            </section>
        </>
    )
}

export default ProductDetailsBanner
