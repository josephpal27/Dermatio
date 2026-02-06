import { useState } from "react";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../css/Navbar.css";
import logo from "../assets/images/logo/logo.png";
import { FaRegUser } from "react-icons/fa";
import { BiShoppingBag } from "react-icons/bi";

const MyNavbar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                        <Nav.Link as={NavLink} to="/" onClick={handleClose} style={{border: 'none'}} >
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
                        <NavLink to="/profile" onClick={handleClose}>
                            <FaRegUser className="icon profile-icon" />
                        </NavLink>
                        <NavLink to="/cart" onClick={handleClose}>
                            <BiShoppingBag  className="icon cart-icon" />
                        </NavLink>
                    </div>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Navbar>
    );
};

export default MyNavbar;