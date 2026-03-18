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
                py-[2rem] sm:py-[2rem] lg:py-[1.55rem] xl:py-[1.8rem] 2xl:py-[2rem]
                mt-[0.5rem] sm:mt-[1rem] lg:mt-[0.6rem] xl:mt-[0.8rem] 2xl:mt-[1rem]
                rounded-[40px] sm:rounded-[20px] lg:rounded-[30px] xl:rounded-[35px] 2xl:rounded-[40px]
                flex flex-wrap 
                gap-[1.5rem] sm:gap-[1.5rem] lg:gap-[1.3rem] xl:gap-[1.4rem] 2xl:gap-[1.5rem]
                shadow-[0_6.5px_6px_-5px_rgba(0,0,0,0.25)]
            ">

                {collections.map((item) => (
                    <button
                        key={item}
                        onClick={() => {
                            setActiveCollection(item);
                            setActiveFilter("All");
                        }}
                        className={`
                                text-[1.1rem] sm:text-[1.1rem] lg:text-[0.85rem] xl:text-[1rem] 2xl:text-[1.1rem]
                                py-[0.3rem] 
                                px-[1rem] sm:px-[1rem] lg:px-[0.8rem] xl:px-[0.9rem] 2xl:px-[1rem]
                                border-b-[2.5px] 
                                transition font-[500] 
                                ${activeCollection === item ? "border-[#becb0c]" : "border-transparent"
                            }`}
                    >
                        {item}
                    </button>
                ))}

            </div>

            {/* Content Area */}
            <div className="
                flex justify-between flex-wrap
                px-[7%]
                py-[3rem] sm:py-[2.5rem] lg:py-[2.5rem] xl:py-[2.8rem] 2xl:py-[3rem]
            ">

                {/* Filters */}
                <div className="w-[20%]">

                    <span className="
                        text-[1.4rem] sm:text-[1.2rem] lg:text-[1.15rem] xl:text-[1.3rem] 2xl:text-[1.4rem]
                        font-[600]
                    ">
                        Filter Options
                    </span>

                    <div className="
                        mt-[1.5rem] sm:mt-[1.5rem] lg:mt-[1.3rem] xl:mt-[1.4rem] 2xl:mt-[1.5rem]
                        bg-[#eeeae4]
                        p-[1.3rem] sm:p-[1.3rem] lg:p-[1.1rem] xl:p-[1.2rem] 2xl:p-[1.3rem]
                        rounded-[10px]
                    ">
                        <span className="
                            text-[1rem] sm:text-[1rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem]
                            font-[600]
                        ">
                            By Category
                        </span>

                        <ul className="mt-[0.5rem] flex flex-col">
                            {filters.map((item) => (
                                <li
                                    key={item}
                                    onClick={() => setActiveFilter(item)}
                                    className={`
                                        cursor-pointer 
                                        border-b-[1px] border-[#d9d8d8] last:border-none
                                        py-[0.8rem] sm:py-[0.8rem] lg:py-[0.6rem] xl:py-[0.7rem] 2xl:py-[0.8rem]
                                        px-[0.7rem] sm:px-[0.5rem] lg:px-[0.5rem] xl:px-[0.6rem] 2xl:px-[0.7rem]
                                        text-[1rem] sm:text-[1rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem]
                                        ${activeFilter === item ? "font-semibold text-[#becb0c]" : ""
                                        }`}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>

                    </div>

                </div>

                {/* Products */}
                <div className="
                    w-[75%]
                    flex flex-wrap gap-[2.5%]
                ">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <div className="
                                w-[31.5%]
                            ">
                                <ProductCard key={product.id} product={product} />
                            </div>
                        ))
                    ) : (
                        <p className="
                            text-[1.1rem] sm:text-[1.1rem] lg:text-[0.85rem] xl:text-[1rem] 2xl:text-[1.1rem]
                            text-[#363636]
                        ">
                            No Products Found !
                        </p>
                    )}
                </div>

            </div>
        </section>
    );
};

export default ProductsTabbing;