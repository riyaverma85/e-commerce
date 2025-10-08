
import Carousel from "react-bootstrap/Carousel";
import ban1 from "../images/carousel-1.jpg";
import ban2 from "../images/carousel-2.jpg";
import Upperimage from "../images/fruits.jpg";
import "../css/home.css";
import { FaLeaf, FaSeedling, FaAppleAlt } from "react-icons/fa";


const Home = () => {
  return (
    <>
      <Carousel fade interval={3000} className="organic-carousel">
        <Carousel.Item>
          <img className="d-block w-100" src={ban1} alt="Fresh Organic Vegetables" />
          <Carousel.Caption>
            <h3>Fresh Organic Vegetables</h3>
            <p>Eat healthy, live healthy — delivered fresh from local farms every day.</p>
            <button className="carousel-btn">Shop Now</button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={ban2} alt="Natural & Chemical-Free" />
          <Carousel.Caption>
            <h3>100% Natural & Chemical-Free</h3>
            <p>We bring you products grown with love and free from harmful pesticides.</p>
            <button className="carousel-btn">Explore More</button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={ban2} alt="Healthy Lifestyle Starts Here" />
          <Carousel.Caption>
            <h3>Healthy Lifestyle Starts Here</h3>
            <p>Switch to organics today — because nature knows best.</p>
            <button className="carousel-btn">Get Started</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      

    
  
      

      
      {/* Upper Section: Split Image + Content */}
      <section className="organic-upper">
        <div className="upper-container">
          <div className="upper-text">
            <h2>🌱 Best Organic Fruits & Vegetables</h2>
            <p>
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet.
            </p>
            <ul className="organic-list">
              <li>✔️ Fresh from organic farms</li>
              <li>✔️ Hand-picked with care</li>
              <li>✔️ Eco-friendly packaging</li>
            </ul>
          </div>
          <div className="upper-image">
            <img src={Upperimage} alt="Organic Vegetables" />
          </div>
        </div>
      </section>
      {/* Parallax Banner */}
      <section className="parallax-banner">
        <div className="banner-overlay">
          <h1>🌱 Best Organic Fruits & Vegetables</h1>
          <p>Pure, fresh, and healthy products straight from the farm to your doorstep</p>
        </div>
      </section>
      {/* Features Section with Background Image */}
      <section className="organic-section features-bg" id="features">
        <div className="organic-container">
          <div className="features-section">
            <h3>🌿 Our Features</h3>
            <p>
              Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam
              justo sed rebum vero dolor duo.
            </p>

            <div className="feature-cards">
              <div className="feature-card">
                <FaLeaf className="feature-icon" />
                <h4>Natural Process</h4>
                <p>
                  Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum
                  diam justo sed vero dolor duo.
                </p>
              </div>

              <div className="feature-card">
                <FaAppleAlt className="feature-icon" />
                <h4>Organic Products</h4>
                <p>
                  Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum
                  diam justo sed vero dolor duo.
                </p>
              </div>

              <div className="feature-card">
                <FaSeedling className="feature-icon" />
                <h4>Biologically Safe</h4>
                <p>
                  Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum
                  diam justo sed vero dolor duo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
        {/* Visit Our Firm Section */}
    <section className="visit-firm">
      <div className="visit-container">
        <div className="visit-text">
          <h2>🏢 Visit Our Firm</h2>
          <p>
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet. Diam dolor diam
            ipsum sit. Aliqu diam amet diam et eos.
          </p>
        </div>
        <div className="visit-button">
          <a href="#contact" className="btn">Visit Now</a>
        </div>
      </div>
    </section>
  
    </>
  
  );
};

export default Home;
