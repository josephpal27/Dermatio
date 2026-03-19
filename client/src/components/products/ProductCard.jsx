import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    return (
        <div className="
            mb-[1.7rem] sm:mb-[1.5rem] lg:mb-[1.25rem] xl:mb-[1.4rem] 2xl:mb-[1.5rem]
        ">

            <div className="
                bg-[#fbf4eb] hover:bg-[#faf1e4] flex justify-center items-center transition duration-300 overflow-hidden group
                rounded-[20px] sm:rounded-[20px] lg:rounded-[20px] xl:rounded-[25px] 2xl:rounded-[30px]
                pt-[1.5rem] sm:pt-[2rem] lg:pt-[2rem] xl:pt-[2.2rem] 2xl:pt-[2.5rem]
                pb-[1rem] sm:pb-[2rem] lg:pb-[1.5rem] xl:pb-[1.7rem] 2xl:pb-[2rem]
                shadow-[-2.4px_2.4px_3.2px_rgba(0,0,0,0.25)]
            ">
                <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full group-hover:scale-[1.03] transition duration-300"
                />
            </div>

            <div className="
                mt-[0.8rem] sm:mt-[1rem] lg:mt-[1rem] xl:mt-[1.15rem] 2xl:mt-[1.25rem]
                flex flex-col
            ">

                <span className="
                    text-[1.1rem] sm:text-[1rem] lg:text-[1rem] xl:text-[1.15rem] 2xl:text-[1.25rem]
                    text-[#363636]
                ">
                    {product.name}
                </span>

                <span className="
                    text-[1rem] sm:text-[1.1rem] lg:text-[0.85rem] xl:text-[1rem] 2xl:text-[1.1rem]
                    text-[#818181]
                    mt-[0.1rem]
                ">
                    {product.type}
                </span>

                <span className="
                    text-[1.2rem] sm:text-[1.2rem] lg:text-[0.95rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                    font-[600] 
                    mt-[0.5rem] sm:mt-[0.5rem] lg:mt-[0.3rem] xl:mt-[0.4rem] 2xl:mt-[0.5rem]
                ">
                    ₹ {product.sizes[0].price.toLocaleString("en-IN")}
                </span>

                <Link
                    to={`/products/${product.slug}`}
                    className="
                        w-max
                        mt-[0.5rem] sm:mt-[1rem] lg:mt-[0.6rem] xl:mt-[0.8rem] 2xl:mt-[1rem]
                        bg-[#005aed] hover:bg-[#004ecb] text-[#fff] rounded-md transition
                        text-[1rem] sm:text-[1rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem]
                        py-[0.3rem] sm:py-[0.25rem] lg:py-[0.22rem] xl:py-[0.22rem] 2xl:py-[0.27rem]
                        px-[1rem] sm:px-[1rem] lg:px-[0.95rem] xl:px-[1rem] 2xl:px-[1.2rem]
                    ">
                    Explore
                </Link>

            </div>

        </div>
    );
};

export default ProductCard;