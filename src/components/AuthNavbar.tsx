import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FaBars, FaTimes, FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";

const AuthNavBar: React.FC<{ handleLogout: () => void }> = ({
  handleLogout,
}) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <Navbar className="bg-color" expand="lg">
      <Container>
        <Navbar.Brand href="#" className="custom-logo">
          E-commerce
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="navbar-toggler-white"
          onClick={toggleNavbar}
        >
          {isNavbarOpen ? (
            <FaTimes style={{ fontSize: "24px", color: "white" }} />
          ) : (
            <FaBars style={{ fontSize: "24px", color: "white" }} />
          )}
        </Navbar.Toggle>
        <Navbar.Collapse
          id="basic-navbar-nav"
          className={isNavbarOpen ? "show" : ""}
        >
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/Home" className="links">
              Home
            </Nav.Link>
            <Nav.Link href="#features" className="links">
              FaQ
            </Nav.Link>
            <Nav.Link href="#aboutus" className="links">
              About Us
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/Cart" className="links">
              <FaShoppingBag style={{ fontSize: "24px", color: "white" }} />
            </Nav.Link>
            <Nav.Link className="links" onClick={handleLogout}>
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AuthNavBar;
