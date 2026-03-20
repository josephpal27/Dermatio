import { Tab, Nav } from "react-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { productsData } from "../../data/productsData"

const ProductGallery = () => {

    const { slug } = useParams();
    const product = productsData.find(p => p.slug === slug);
    if (!product) return (
        <div className="flex justify-center py-[4rem] px-[1rem] text-[1.1rem]">
            <p>
                Product Not Found !
            </p>
        </div>
    )

    const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
    const images = product.galleryImages[selectedSize.size] || [];
    const [activeKey, setActiveKey] = useState("0");

    const { addToCart } = useCart();
    const navigate = useNavigate();

    return (
        <>
            <section className="
                px-[1rem] sm:px-[5%] lg:px-[7%]
                py-[2rem] sm:py-[2.5rem] lg:py-[3.3rem] xl:py-[3.6rem] 2xl:py-[4rem]
                flex justify-between flex-wrap
            ">

                {/* Product Gallery */}
                <div className="
                    w-[100%] sm:w-[50%]
                ">
                    <Tab.Container activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
                        <div className="flex flex-wrap justify-between flex-col-reverse sm:flex-row">
                            {/* Side Thumbnails */}
                            <Nav className="
                                flex sm:flex-col justify-between
                                w-[100%] sm:w-[17%]
                                mt-[0.8rem] sm:mt-0
                            ">
                                {images.map((img, index) => (
                                    <Nav.Item key={index} className="w-[22.2%] sm:w-full">
                                        <Nav.Link eventKey={index.toString()} className="p-[0]">
                                            <img
                                                src={img}
                                                alt={"Thumbnail " + index}
                                                className="
                                                    w-full
                                                    rounded-[7px]
                                            "/>
                                        </Nav.Link>
                                    </Nav.Item>
                                ))}
                            </Nav>

                            {/* Main Image */}
                            <Tab.Content className="
                                w-[100%] sm:w-[80%]                                
                            ">
                                {images.map((img, index) => (
                                    <Tab.Pane key={index} eventKey={index.toString()}>
                                        <img
                                            src={img}
                                            alt={product.name}
                                            className="w-full rounded-[10px]"
                                        />
                                    </Tab.Pane>
                                ))}
                            </Tab.Content>
                        </div>
                    </Tab.Container>
                </div>

                {/* Product Details */}
                <div className="
                    w-[100%] sm:w-[47%]
                    mt-[2rem] sm:mt-0
                ">
                    <span className="
                        text-[1rem] sm:text-[1.1rem] lg:text-[0.85rem] xl:text-[1rem] 2xl:text-[1.1rem]
                        tracking-[1px]
                        text-[#becb0c] font-[600]
                    ">
                        {product.tag}
                    </span>
                    <h2 className="
                        text-[1.7rem] sm:text-[2rem] lg:text-[1.9rem] xl:text-[2.2rem] 2xl:text-[2.5rem]
                        mt-[0.5rem] sm:mt-[0.5rem] lg:mt-[0.3rem] xl:mt-[0.4rem] 2xl:mt-[0.5rem]
                        text-[#131313]
                    ">
                        {product.name}
                    </h2>
                    <span className="
                        text-[1.4rem] sm:text-[2rem] lg:text-[1.5rem] xl:text-[1.75rem] 2xl:text-[2rem]
                        uppercase font-[600]
                    ">
                        {product.type}
                    </span>

                    {/* Description */}
                    <div className="
                        mt-[0.8rem] sm:mt-[1rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                    ">
                        {product.desc.intro.map((text, i) => (
                            <p key={i} className="
                                text-[1rem] sm:text-[0.9rem] lg:text-[0.75rem] xl:text-[0.85rem] 2xl:text-[0.95rem]
                                mb-[0.5rem] sm:mb-[0.3rem]
                                text-[#4b4b4b]
                            ">
                                {text}
                            </p>
                        ))}

                        <ul className="
                            mt-[0.7rem] sm:mt-[0.5rem] lg:mt-[0.3rem] xl:mt-[0.4rem] 2xl:mt-[0.5rem]
                            list-disc 
                            pl-[1rem] sm:pl-[1rem] lg:pl-[0.8rem] xl:pl-[0.9rem] 2xl:pl-[1rem]
                            text-[1rem] sm:text-[0.9rem] lg:text-[0.75rem] xl:text-[0.85rem] 2xl:text-[0.95rem]
                            text-[#4b4b4b]
                        ">
                            {product.desc.points.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                    </div>

                    <span className="
                        text-[2.1rem] sm:text-[2rem] lg:text-[1.6rem] xl:text-[1.9rem] 2xl:text-[2.2rem]
                        mt-[1rem] sm:mt-[1rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                        font-[600] text-[#131313] block
                    ">
                        ₹ {selectedSize.price.toLocaleString("en-IN")}
                    </span>

                    {/* Size */}
                    <div className="
                        mt-[0.8rem] sm:mt-[0.5rem]
                        flex items-center
                    ">
                        <span className="
                            text-[1.1rem] sm:text-[1rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem]
                        ">
                            Size :
                        </span>
                        {product.sizes.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setSelectedSize(item);
                                    setActiveKey("0"); // reset image to first
                                }}
                                className={`
                                    px-[1rem] sm:px-[1rem] lg:px-[0.8rem] xl:px-[0.9rem] 2xl:px-[1rem]
                                    pt-[0.35rem] sm:pt-[0.4rem] lg:pt-[0.3rem] xl:pt-[0.38rem] 2xl:pt-[0.4rem]
                                    pb-[0.25rem] sm:pb-[0.2rem] lg:pb-[0.26rem] xl:pb-[0.24rem] 2xl:pb-[0.25rem]
                                    rounded-full
                                    text-[1rem] sm:text-[0.8rem] lg:text-[0.7rem] xl:text-[0.8rem] 2xl:text-[0.85rem]
                                    ml-[1rem] sm:ml-[1rem] lg:ml-[0.8rem] xl:ml-[0.9rem] 2xl:ml-[1rem]
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

                    <div className="
                        mt-[2rem] sm:mt-[2rem] lg:mt-[1.9rem] xl:mt-[2.2rem] 2xl:mt-[2.5rem]
                        flex items-center justify-between sm:justify-normal
                        gap-[0] sm:gap-[1rem] lg:gap-[0.8rem] xl:gap-[0.9rem] 2xl:gap-[1rem]
                    ">
                        <button className="
                            bg-[#005aed] hover:bg-[#004ecb] text-[#fff] transition w-[50%] sm:w-auto
                            px-[1rem] sm:px-[1.8rem] lg:px-[1.6rem] xl:px-[1.7rem] 2xl:px-[1.8rem]
                            py-[0.6rem] sm:py-[0.5rem] lg:py-[0.45rem] xl:py-[0.5rem] 2xl:py-[0.55rem]
                            rounded-[10px] text-center
                            text-[1.2rem] sm:text-[1rem] lg:text-[1.05rem] xl:text-[1.2rem] 2xl:text-[1.3rem]
                        " onClick={() => {
                                addToCart(product, selectedSize);
                                navigate("/cart");
                            }}>
                            Add to Cart
                        </button>
                        <Link to="/checkout" className="
                            bg-[#becb0c] hover:bg-[#aeba05] text-[#fff] transition w-[46%] sm:w-auto
                            px-[1rem] sm:px-[1.8rem] lg:px-[1.6rem] xl:px-[1.7rem] 2xl:px-[1.8rem]
                            py-[0.6rem] sm:py-[0.5rem] lg:py-[0.45rem] xl:py-[0.5rem] 2xl:py-[0.55rem]
                            rounded-[10px] text-center
                            text-[1.2rem] sm:text-[1rem] lg:text-[1.05rem] xl:text-[1.2rem] 2xl:text-[1.3rem]
                        ">
                            Buy Now
                        </Link>
                    </div>
                </div>

            </section>
        </>
    )
}

export default ProductGallery
