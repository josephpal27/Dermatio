import { Tab, Nav } from "react-bootstrap";

const productsTabsData = [
    {
        id: 1,
        title: "All Products",
        content: "Content 1"
    },
    {
        id: 2,
        title: "Daily Care",
        content: "Content 2"
    },
    {
        id: 3,
        title: "Flare Up",
        content: "Content 3"
    },
    {
        id: 4,
        title: "Baby & Toddler",
        content: "Content 4"
    },
    {
        id: 5,
        title: "Body Wash",
        content: "Content 5"
    },
]

const ProductsTabbing = () => {
    return (
        <>
            <section className="
                
            ">
                <Tab.Container defaultActiveKey={"1"}>

                    {/* Tabs Head */}
                    <div className="
                        bg-[#eee7dd]
                        px-[7%]
                        py-[2rem]
                        mt-[1rem]
                        rounded-t-[40px]
                    ">
                        <Nav variant="tabs" className="tab-head border-none">
                            {
                                productsTabsData.map((item) => (
                                    <Nav.Item key={item.id} className="
                                        
                                    ">
                                        <Nav.Link eventKey={item.id} className="
                                            bg-transparent text-[#000]
                                        ">
                                            {item.title}
                                        </Nav.Link>
                                    </Nav.Item>
                                ))
                            }
                        </Nav>
                    </div>

                    {/* Tabs Body */}
                    <div className="
                        flex justify-between flex-wrap
                        px-[7%]
                        py-[2rem]
                    ">
                        {/* Filters */}
                        <div className="
                            w-[20%]
                        ">
                            <span>Filter Options</span>
                        </div>
                        {/* Tabs Content */}
                        <div className="
                            w-[75%]
                        ">
                            <Tab.Content>
                                {
                                    productsTabsData.map((item) => (
                                        <Tab.Pane key={item.id} eventKey={item.id}>
                                            <p>{item.content}</p>
                                        </Tab.Pane>
                                    ))
                                }
                            </Tab.Content>
                        </div>
                    </div>

                </Tab.Container>
            </section>
        </>
    )
}

export default ProductsTabbing;