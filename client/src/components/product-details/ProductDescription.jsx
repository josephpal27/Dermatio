import { Tab, Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { productsData } from "../../data/productsData"

const ProductDescription = () => {

    const { slug } = useParams();
    const product = productsData.find(p => p.slug === slug);

    const tabs = [
        { key: "description", label: "Description" },
        { key: "ingredients", label: "Ingredients" },
        { key: "use", label: "How To Use" },
        { key: "warnings", label: "Precautions & Warnings" },
    ];

    return (
        <>
            <section className="
                px-[1rem] sm:px-[5%] lg:px-[7%]
                mt-[1rem] sm:mt-[1rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                product-desc-tabbing
            ">
                <Tab.Container defaultActiveKey="description">

                    {/* Head */}
                    <Nav className="gap-[1rem] sm:gap-[2rem] lg:gap-[2.1rem] xl:gap-[2.3rem] 2xl:gap-[2.5rem]">
                        {tabs.map(tab => (
                            <Nav.Item key={tab.key}>
                                <Nav.Link eventKey={tab.key} className="
                                    text-[1.1rem] sm:text-[1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                                    p-0 text-[#666666]
                                ">
                                    {tab.label}
                                </Nav.Link>
                            </Nav.Item>
                        ))}
                    </Nav>

                    {/* Content */}
                    <Tab.Content className="
                        bg-[#fbf4ea]
                        p-[0.8rem] sm:p-[1.2rem] lg:p-[1.1rem] xl:p-[1.3rem] 2xl:p-[1.5rem]
                        rounded-[6px] sm:rounded-[5px]
                        mt-[1rem] sm:mt-[1rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                    ">
                        {tabs.map(tab => (
                            <Tab.Pane key={tab.key} eventKey={tab.key}>
                                <p className="
                                    text-[1rem] sm:text-[1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                                ">
                                    {product.details[tab.key]}
                                </p>
                            </Tab.Pane>
                        ))}
                    </Tab.Content>

                </Tab.Container>
            </section>
        </>
    )
}

export default ProductDescription
