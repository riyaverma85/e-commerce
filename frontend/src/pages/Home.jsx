import Carousel from "react-bootstrap/Carousel";
import ban1 from "../images/carousel-1.jpg";
import ban2 from "../images/carousel-2.jpg";
import Upperimage from "../images/fruits.jpg";
import "../css/home.css";
import { FaLeaf, FaSeedling, FaAppleAlt } from "react-icons/fa";


const Home = () => {
  return (
    <>
      {/* 🌿 Carousel Section */}
      <Carousel fade interval={3000} className="organic-carousel">
        <Carousel.Item>
          <img className="d-block w-100" src={ban1} alt="Fresh Organic Vegetables" />
          <Carousel.Caption>
            <h3>Fresh Organic Vegetables</h3>
            <p>Eat healthy, live healthy — fresh from local organic farms daily.</p>
            <button className="carousel-btn">Shop Now</button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={ban2} alt="Natural & Chemical-Free" />
          <Carousel.Caption>
            <h3>100% Natural & Chemical-Free</h3>
            <p>Products grown with love — no chemicals, only nature’s care.</p>
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

      {/* 🥬 Upper Section: Image + Text */}
      <section className="organic-upper">
        <div className="upper-container">
          <div className="upper-text">
            <h2>🌱 Best Organic Fruits & Vegetables</h2>
            <p>
              Discover the freshest, locally grown fruits and vegetables, carefully hand-picked
              and delivered straight to your doorstep — because you deserve better health.
            </p>
            <ul className="organic-list">
              <li>✔️ Fresh from organic farms</li>
              <li>✔️ Hand-picked with care</li>
              <li>✔️ Eco-friendly packaging</li>
            </ul>
            <button className="btnn2">Read More</button>
          </div>
          <div className="upper-image">
            <img src={Upperimage} alt="Organic Vegetables" />
          </div>
        </div>
      </section>

      {/* 🍃 Parallax Banner */}
      <section className="parallax-banner">
        <div className="banner-overlay">
          <h1>🌾 Eat Fresh, Live Organic</h1>
          <p>Pure, fresh, and chemical-free — your health, our priority.</p>
        </div>
      </section>

      {/* 🌻 Features Section */}
      <section className="organic-section features-bg" id="features">
        <div className="organic-container">
          <div className="features-section">
            <h3>🌿 Why Choose Us</h3>
            <p>
              Experience the purity of nature with our organically sourced, farm-fresh products.
              Sustainability and quality are at the heart of everything we do.
            </p>

            <div className="feature-cards">
              <div className="feature-card">
                <FaLeaf className="feature-icon" />
                <h4>Natural Process</h4>
                <p>
                  We follow eco-friendly farming methods to protect nature and ensure purity.
                </p>
                <button className="btnn1">Read More</button>
              </div>

              <div className="feature-card">
                <FaAppleAlt className="feature-icon" />
                <h4>Organic Products</h4>
                <p>
                  Every product is certified organic and sourced from trusted farms only.
                </p>
                <button className="btnn">Read More</button>
              </div>

              <div className="feature-card">
                <FaSeedling className="feature-icon" />
                <h4>Biologically Safe</h4>
                <p>
                  Our products are 100% chemical-free and safe for you and your family.
                </p>
                <button className="btnn">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🏢 Visit Our Firm Section */}
      <section className="visit-firm">
        <div className="visit-container">
          <div className="visit-text">
            <h2>🏡 Visit Our Organic Farm</h2>
            <p>
              Witness the magic of sustainable farming up close! See how we grow, harvest, and
              pack your organic food — all while protecting nature.
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
