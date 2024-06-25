import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FaBars, FaTimes, FaShoppingBag, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

interface NavBarProps {
  isLoggedIn: boolean;
  handleLogout: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ isLoggedIn, handleLogout }) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const handleLogoutClick = () => {
    handleLogout(); // Call the logout function from props
    navigate("/"); // Redirect to the home page after logout
  };

  return (
    <Navbar className="bg-color" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="custom-logo">
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
        <Navbar.Collapse id="basic-navbar-nav" className={isNavbarOpen ? "show" : ""}>
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/Home" className="links">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/FaQ" className="links">
              FaQ
            </Nav.Link>
            <Nav.Link href="#aboutus" className="links">
              About Us
            </Nav.Link>
          </Nav>
          <Nav>
            {isLoggedIn ? (
              <>
                <Nav.Link as={Link} to="/Cart" className="links">
                  <FaShoppingBag style={{ fontSize: "24px", color: "white" }} />
                </Nav.Link>
                <Nav.Link className="links" onClick={handleLogoutClick}>
                  Log Out
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/Signup" className="links">
                  Sign Up
                </Nav.Link>
                <Nav.Link as={Link} to="/Login" className="links">
                  Log In
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
