import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    return (
        <div className="w-[250px] bg-white rounded-[20px] p-4 shadow-sm">

            <div className="bg-[#f5f5f5] rounded-[16px] p-6 flex justify-center">
                <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-[140px] object-contain"
                />
            </div>

            <div className="mt-4 flex flex-col gap-1">

                <span className="text-[15px] font-medium">
                    {product.name}
                </span>

                <span className="text-[13px] text-gray-500">
                    {product.type}
                </span>

                <span className="text-[16px] font-semibold mt-1">
                    ₹ {product.price}
                </span>

                <Link
                    to={`/products/${product.slug}`}
                    className="mt-3 text-center bg-blue-600 text-white text-[13px] py-1 rounded-md"
                >
                    Explore
                </Link>

            </div>

        </div>
    );
};

export default ProductCard;