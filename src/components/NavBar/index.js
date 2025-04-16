import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";
import "./index.css";

const NavBar = () => {
  const [navbarColor, setNavbarColor] = useState("#F7E7E7");
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavbarColor(window.scrollY > 50 ? "#fff" : "#F7E7E7");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar
        expand="md"
        fixed="top"
        style={{ backgroundColor: navbarColor, transition: "0.3s"}}
        className="navbar-custom"
        >
        <Container fluid>
            <Navbar.Brand as={Link} to="/">
            <img src="/images/est_logo25.png" alt="Logo" className="navbar-logo" />
            </Navbar.Brand>

            {/* Toggler visible only on small devices */}
            <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            onClick={() => setShowOffcanvas(true)}
            className="d-md-none openbtn"
            />

            {/* Offcanvas menu for small screens only */}
            {/* <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            show={showOffcanvas}
            onHide={() => setShowOffcanvas(false)}
            className="d-md-none"
            >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel" style={{color: "#9A5E26",}}>EsteticaNow</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Nav className="ms-auto flex-grow-1 pe-3">
                <Nav.Link as={Link} to="/" onClick={() => setShowOffcanvas(false)}>Home</Nav.Link>
                <Nav.Link as={Link} to="/about-us" onClick={() => setShowOffcanvas(false)}>About Us</Nav.Link>
                <Nav.Link as={Link} to="/pricing" onClick={() => setShowOffcanvas(false)}>Pricing</Nav.Link>
                <Nav.Link as={Link} to="/reviews" onClick={() => setShowOffcanvas(false)}>Reviews</Nav.Link>
                <Nav.Link as={Link} to="/contact" onClick={() => setShowOffcanvas(false)}>Contact</Nav.Link>
                </Nav>
            </Offcanvas.Body>
            </Navbar.Offcanvas> */}

            <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end"
                show={showOffcanvas}
                onHide={() => setShowOffcanvas(false)}
                className="d-md-none custom-offcanvas"
                >
                <Offcanvas.Header closeButton closeVariant="white">
                    <Offcanvas.Title
                    id="offcanvasNavbarLabel"
                    style={{ color: "#9A5E26",fontWeight:"bold",}}
                    >
                    EsteticaNow
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="ms-auto flex-grow-1 pe-3">
                    <Nav.Link
                        as={Link}
                        to="/"
                        onClick={() => setShowOffcanvas(false)}
                        className="text-white"
                    >
                        Home
                    </Nav.Link>
                    <Nav.Link
                        as={Link}
                        to="/about-us"
                        onClick={() => setShowOffcanvas(false)}
                        className="text-white"
                    >
                        About Us
                    </Nav.Link>
                    <Nav.Link
                        as={Link}
                        to="/pricing"
                        onClick={() => setShowOffcanvas(false)}
                        className="text-white"
                    >
                        Pricing
                    </Nav.Link>
                    <Nav.Link
                        as={Link}
                        to="/reviews"
                        onClick={() => setShowOffcanvas(false)}
                        className="text-white"
                    >
                        Reviews
                    </Nav.Link>
                    <Nav.Link
                        as={Link}
                        to="/contact"
                        onClick={() => setShowOffcanvas(false)}
                        className="text-white"
                    >
                        Contact
                    </Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas>


            {/* Collapse menu for medium and larger screens */}
            <Navbar.Collapse className="justify-content-end d-none d-md-flex">
            <Nav>
                <Nav.Link as={Link} to="/" className="anchor">Home</Nav.Link>
                <Nav.Link as={Link} to="/about-us" className="anchor">About Us</Nav.Link>
                <Nav.Link as={Link} to="/pricing" className="anchor">Pricing</Nav.Link>
                <Nav.Link as={Link} to="/reviews" className="anchor">Reviews</Nav.Link>
                <Nav.Link as={Link} to="/contact" className="anchor">Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>

    </>
  );
};

export default NavBar;
