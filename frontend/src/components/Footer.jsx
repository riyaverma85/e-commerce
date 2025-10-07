
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import "../css/footer.css"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>🌿 OrganicMart</h3>
          <p>Pure, Fresh & Healthy Organic Products — delivered to your doorstep.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#policy">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <i className="fab fa-facebook"><FaFacebook /></i>
            <i className="fab fa-instagram"><FaInstagram /></i>
            <i className="fab fa-twitter"><FaTwitterSquare /></i>
            <i className="fab fa-youtube"><IoLogoYoutube /></i>
          </div>
        </div>
      </div>
      <p className="footer-bottom">© 2025 OrganicMart | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
