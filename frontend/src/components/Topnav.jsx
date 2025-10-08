import { Link } from "react-router-dom";
import "../css/navbar.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaCartArrowDown } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import logo from "../images/logo2.jpg";

const Topnav = () => {
  return (
    <Navbar expand="lg" className="navbar shadow-sm">
      <Container fluid className="d-flex align-items-center justify-content-between">
        {/* Logo */}
        <Navbar.Brand href="#home" className="logo d-flex align-items-center">
          <img src={logo} alt="OrganicMart Logo" />
        </Navbar.Brand>

        {/* Toggle for mobile */}
        <Navbar.Toggle aria-controls="organic-navbar" className="bg-light" />

        {/* Collapsible content */}
        <Navbar.Collapse id="organic-navbar" className="justify-content-end">
          {/* Navigation Links */}
          <Nav className="nav-links d-flex align-items-center mx-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>

          {/* Search Bar */}
          <div className="search-container">
            <input type="text" placeholder="Search organic products..." />
            <button>
              <i className="bi bi-search"></i>
            </button>
          </div>

          {/* Cart + Profile Icons */}
          <div className="nav-icons">
            <i className="bi bi-cart3">
              <FaCartArrowDown />
            </i>
            <i className="bi bi-person-circle">
              <IoPersonCircle />
            </i>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Topnav;
