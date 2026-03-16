import { useState } from "react";
import ProductCard from "./ProductCard";
import { productsData } from './../../data/productsData';

const collections = [
    "All Products",
    "Daily Care",
    "Flare Up",
    "Baby & Toddler",
    "Body Wash"
];

const filters = [
    "All",
    "Oil",
    "Shampoo",
    "Lotion",
    "Body Cleanser"
];

const ProductsTabbing = () => {

    const [activeCollection, setActiveCollection] = useState("All Products");
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredProducts = productsData.filter((product) => {

        const collectionMatch =
            activeCollection === "All Products" ||
            product.collection === activeCollection;

        const filterMatch =
            activeFilter === "All" ||
            product.type === activeFilter;

        return collectionMatch && filterMatch;

    });

    return (
        <section>

            {/* Header Tabs */}
            <div className="
        bg-[#eee7dd]
        px-[7%]
        py-[2rem]
        mt-[1rem]
        rounded-[40px]
        flex gap-6
        flex-wrap
      ">

                {collections.map((item) => (
                    <button
                        key={item}
                        onClick={() => {
                            setActiveCollection(item);
                            setActiveFilter("All");
                        }}
                        className={`pb-1 border-b-2 transition ${activeCollection === item
                                ? "border-[#d4e01c]"
                                : "border-transparent"
                            }`}
                    >
                        {item}
                    </button>
                ))}

            </div>

            {/* Content Area */}
            <div className="
        flex
        justify-between
        flex-wrap
        px-[7%]
        py-[2rem]
      ">

                {/* Filters */}
                <div className="w-[20%]">

                    <span className="font-medium">
                        Filter Options
                    </span>

                    <ul className="mt-4 flex flex-col gap-2">

                        {filters.map((item) => (
                            <li
                                key={item}
                                onClick={() => setActiveFilter(item)}
                                className={`cursor-pointer ${activeFilter === item
                                        ? "font-semibold text-green-700"
                                        : ""
                                    }`}
                            >
                                {item}
                            </li>
                        ))}

                    </ul>

                </div>

                {/* Products */}
                <div className="
          w-[75%]
          flex
          flex-wrap
          gap-6
        ">

                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                            />
                        ))
                    ) : (
                        <p>No products found</p>
                    )}

                </div>

            </div>

        </section>
    );
};

export default ProductsTabbing;