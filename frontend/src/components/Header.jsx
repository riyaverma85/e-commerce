
import "../css/header.css";
import { Container } from "react-bootstrap";
import { FaCartArrowDown } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import logo from "../images/logo2.jpg";

const Header = () => {
  return (
    <header className="header shadow-sm py-2">
      <Container fluid className="d-flex align-items-center justify-content-between flex-wrap">
        
        {/* Logo Section */}
        <div className="logo-section d-flex align-items-center">
          <img src={logo} alt="OrganicMart Logo" className="header-logo" />
          <h2 className="brand-name ms-2">OrganicMart</h2>
        </div>

        {/* Search Bar */}
        <div className="search-container d-flex align-items-center">
          <input type="text" placeholder="Search organic products..." />
          <button><i className="bi bi-search"></i></button>
        </div>

        {/* Cart and Profile Icons */}
        <div className="header-icons d-flex align-items-center">
          <FaCartArrowDown className="icon" />
          <IoPersonCircle className="icon" />
        </div>
      </Container>
    </header>
  );
};

export default Header;
