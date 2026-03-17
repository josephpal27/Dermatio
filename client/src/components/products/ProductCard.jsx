import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    return (
        <div className="
            mb-[1.5rem]
        ">

            <div className="
                bg-[#fbf4eb] flex justify-center items-center
                rounded-[30px] 
                pt-[2.5rem]
                pb-[2rem]
                shadow-[-2.4px_2.4px_3.2px_rgba(0,0,0,0.25)]
            ">
                <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full"
                />
            </div>

            <div className="
                mt-4 
                flex flex-col 
            ">

                <span className="
                    text-[1.25rem] 
                    text-[#363636]
                ">
                    {product.name}
                </span>

                <span className="
                    text-[1.1rem] 
                    text-[#818181]
                    mt-[0.1rem]
                ">
                    {product.type}
                </span>

                <span className="
                    text-[1.2rem] 
                    font-[600] 
                    mt-[0.5rem]
                ">
                    ₹ {product.sizes[0].price}
                </span>

                <Link
                    to={`/products/${product.slug}`}
                    className="
                        w-max
                        mt-[1rem] 
                        bg-[#005aed] hover:bg-[#004ecb] text-[#fff] rounded-md transition
                        text-[1rem] 
                        py-[0.27rem]
                        px-[1.2rem]
                    ">
                    Explore
                </Link>

            </div>

        </div>
    );
};

export default ProductCard;