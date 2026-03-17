import { Tab, Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { productsData } from "../../data/productsData"

const ProductGallery = () => {

    const { slug } = useParams();

    const product = productsData.find(p => p.slug === slug);

    if (!product) return <p>Product Not Found !</p>;

    const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

    return (
        <>
            <section className="
                px-[7%]
                py-[4rem]
                flex justify-between flex-wrap
            ">

                {/* Product Gallery */}
                <div className="
                    w-[50%]
                ">
                    <Tab.Container defaultActiveKey="0">
                        <div className="flex items-center">
                            {/* Side Thumbnails */}
                            <Nav className="
                                flex flex-col gap-[0.8rem]
                                w-[17%]
                            ">
                                {product.galleryImages.map((img, index) => (
                                    <Nav.Item key={index}>
                                        <Nav.Link eventKey={index} className="p-[0]">
                                            <img
                                                src={img}
                                                alt={"Thumbnail " + index}
                                                className="
                                                    w-full
                                                    aspect-square object-cover bg-[#eee7dd]
                                                    rounded-[5px]
                                                    px-[7px]
                                                    py-[10px]
                                        "/>
                                        </Nav.Link>
                                    </Nav.Item>
                                ))}
                            </Nav>

                            {/* Main Image */}
                            <Tab.Content className="
                                w-[80%] 
                                pt-[1rem]
                            ">
                                {product.galleryImages.map((img, index) => (
                                    <Tab.Pane key={index} eventKey={index}>
                                        <img
                                            src={img}
                                            alt={product.name}
                                            className="w-full"
                                        />
                                    </Tab.Pane>
                                ))}
                            </Tab.Content>
                        </div>
                    </Tab.Container>
                </div>

                {/* Product Details */}
                <div className="
                    w-[47%]
                ">
                    <span className="
                        text-[1.1rem]
                        tracking-[1px]
                        text-[#becb0c] font-[600]
                    ">
                        {product.tag}
                    </span>
                    <h2 className="
                        text-[2.5rem]
                        mt-[0.5rem]
                        text-[#131313]
                    ">
                        {product.name}
                    </h2>
                    <span className="
                        text-[2rem]
                        uppercase font-[600]
                    ">
                        {product.type}
                    </span>

                    {/* Description */}
                    <div className="
                        mt-[1rem]
                    ">
                        {product.desc.intro.map((text, i) => (
                            <p key={i} className="
                                text-[0.95rem]
                                mb-[0.3rem]
                                text-[#4b4b4b]
                            ">
                                {text}
                            </p>
                        ))}

                        <ul className="
                            mt-[0.5rem] 
                            list-disc 
                            pl-[1rem]
                            text-[0.95rem]
                            text-[#4b4b4b]
                        ">
                            {product.desc.points.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                    </div>

                    <span className="
                        text-[2.2rem]
                        mt-[1rem]
                        font-[600] text-[#131313] block
                    ">
                        ₹ {selectedSize.price}
                    </span>

                    {/* Size */}
                    <div className="
                        mt-[0.5rem]
                        flex items-center
                    ">
                        <span className="
                            text-[1rem]
                        ">
                            Size :
                        </span>
                        {product.sizes.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedSize(item)}
                                className={`
                                    px-[1rem]
                                    pt-[0.35rem]
                                    pb-[0.25rem]
                                    rounded-full
                                    text-[0.85rem]
                                    ml-[1rem]
                                    transition
                                    ${selectedSize.size === item.size
                                        ? "bg-[#becb0c] text-white"
                                        : "bg-[#eee7dd] text-[#202020]"
                                    }
                                `}
                            >
                                {item.size}
                            </button>
                        ))}
                    </div>

                    <div>
                        <button className="
                            bg-[#005aed] hover:bg-[#004ecb] text-[#fff] transition
                            mt-[2.5rem]
                            px-[1.8rem]
                            py-[0.55rem]
                            rounded-[10px]
                            text-[1.3rem]
                        ">
                            Add to Cart
                        </button>
                    </div>
                </div>

            </section>
        </>
    )
}

export default ProductGallery
