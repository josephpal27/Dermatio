import { useState } from "react";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../css/Navbar.css";
import logo from "../assets/images/logo/logo.avif";
import { FaRegUser } from "react-icons/fa";
import { BiShoppingBag } from "react-icons/bi";
import { useCart } from "../context/CartContext";

const MyNavbar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { getTotalItems } = useCart();
    const count = getTotalItems();

    return (
        <Navbar expand="lg" className="navbar">
            <Navbar.Brand as={NavLink} to="/" className="nav-brand">
                <img src={logo} alt="logo" loading="eager" />
            </Navbar.Brand>

            {/* Toggle button opens Offcanvas */}
            <Navbar.Toggle onClick={handleShow} />

            <Navbar.Offcanvas
                show={show}
                onHide={handleClose}
                id="offcanvasNavbar-expand-lg"
                aria-labelledby="offcanvasNavbarLabel-expand-lg"
                placement="start"
            >
                <Offcanvas.Header>
                    <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                        <Nav.Link as={NavLink} to="/" onClick={handleClose} style={{ border: 'none' }} >
                            <img src={logo} alt="logo" className="offCanvasLogo" />
                        </Nav.Link>
                    </Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body>
                    <Nav className="justify-content-center flex-grow-1 nav">
                        <Nav.Link as={NavLink} to="/" onClick={handleClose}>
                            Home
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/about" onClick={handleClose}>
                            About Us
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/products" onClick={handleClose}>
                            Products
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/the-science" onClick={handleClose}>
                            The Science
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/offers" onClick={handleClose}>
                            Offers
                        </Nav.Link>
                    </Nav>

                    {/* Right Side */}
                    <div className="right-btn-wrapper">
                        {/* <NavLink to="/profile" onClick={handleClose}>
                            <FaRegUser className="icon profile-icon" />
                        </NavLink> */}
                        <NavLink to="/cart" onClick={handleClose} className="relative">
                            {/* Cart Icon */}
                            <BiShoppingBag className="icon cart-icon" />
                            {/* Badge */}
                            {/* {count > 0 && (
                                <span className="
                                    absolute 
                                    w-[18px]
                                    h-[18px]
                                    -top-[6px] -right-[8px]
                                    bg-[#becb0c] text-white
                                    text-[0.7rem] font-[600]
                                    p-[3px]
                                    rounded-full
                                ">
                                    {count > 99 ? "99+" : count}
                                </span>
                            )} */}
                        </NavLink>
                    </div>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Navbar>
    );
};

export default MyNavbar;