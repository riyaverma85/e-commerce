import Carousel from "react-bootstrap/Carousel";
import ban1 from "../images/carousel-1.jpg";
import ban2 from "../images/carousel-2.jpg";
import Upperimage from "../images/fruits.jpg";
import "../css/home.css";
import { FaLeaf, FaSeedling, FaAppleAlt } from "react-icons/fa";
//  Product Section
import "../css/products.css";
import product1 from "../images/product-1.jpg";
import product2 from "../images/product-2.jpg";
import product3 from "../images/product-3.jpg";
import product4 from "../images/product-4.jpg";
import product5 from "../images/product-5.jpg";
import product6 from "../images/product-7.jpg";

const Home = () => {
  return (
    <>
      


   
    <section className="organic-carousel">
      <Carousel fade interval={4000} controls={true}>
        {/* Slide 1 */}
        <Carousel.Item>
          <img className="carousel-image" src={ban1} alt="Fresh Organic Vegetables" />
          <div className="carousel-overlay"></div>
          <div className="carousel-caption-left">
            <h1>Fresh Organic Vegetables</h1>
            <p>
              Eat healthy, live healthy — fresh, local, and chemical-free produce straight from farms.
            </p>
            <button className="carousel-btn">Shop Now</button>
          </div>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          <img className="carousel-image" src={ban2} alt="Natural & Chemical-Free" />
          <div className="carousel-overlay"></div>
          <div className="carousel-caption-left">
            <h1>100% Natural & Chemical-Free</h1>
            <p>
              Pure and eco-friendly products grown with love — just the way nature intended.
            </p>
            <button className="carousel-btn">Explore More</button>
          </div>
        </Carousel.Item>

        {/* Slide 3 */}
        <Carousel.Item>
          <img className="carousel-image" src={ban2} alt="Healthy Lifestyle" />
          <div className="carousel-overlay"></div>
          <div className="carousel-caption-left">
            <h1>Healthy Lifestyle Starts Here</h1>
            <p>
              Make the switch to organic — nourish your body, care for the planet.
            </p>
            <button className="carousel-btn">Get Started</button>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  
{/* ==============================================First Section======================================================= */}

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
{/* ==============================================Second  Section==========================================
      {/* 🍃 Parallax Banner */}
      <section className="parallax-banner">
        <div className="banner-overlay">
          <h1>🌾 Eat Fresh, Live Organic</h1>
          <p>Pure, fresh, and chemical-free — your health, our priority.</p>
        </div>
      </section>
{/* ==============================================Third Section==========================================
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
{/* ==============================================Fourth Section==========================================
      
      {/* Hero Section */}
      <section className="hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Pure • Natural • Healthy Living 🌿</h1>
          <p>
            Discover the freshness of organic life — where every product is grown with love and care for you and the planet.
          </p>
          <button>Shop Organic</button>
        </div>
      </section>
{/* ==============================================Fifth Section==========================================*/}
      {/* About Section */}
      <section className="about">
        <div className="about-inner">
          <h2>About OrganicMart</h2>
          <p>
            We are passionate about reconnecting you with nature through real, chemical-free food. 
            Every product comes straight from farms that respect the earth — delivering quality and nutrition that your body truly deserves.
          </p>
        </div>
      </section>
{/* ==============================================Sixth Section==========================================*/}
      {/* Why Choose Us Section */}
      <section className="why">
        <h2>Why Choose Us</h2>
        <div className="why-grid">
          <div className="why-card">
            <h3>🌱 100% Organic</h3>
            <p>No pesticides, no chemicals — just pure, natural goodness.</p>
          </div>
          <div className="why-card">
            <h3>🚜 Direct from Farms</h3>
            <p>We partner with trusted organic farmers across the country.</p>
          </div>
          <div className="why-card">
            <h3>🍎 Healthy Lifestyle</h3>
            <p>Eat better, feel better — nourish your body naturally.</p>
          </div>
        </div>
      </section>
{/* ==============================================Seventh Section==========================================*/}
      {/* Farm Section */}
      <section className="farm">
        <div className="farm-content">
          <h2>Fresh from the Farm</h2>
          <p>
            Taste the difference of truly fresh produce — handpicked and delivered at peak freshness.
          </p>
          <button>Explore More</button>
        </div>
      </section>
{/* ==============================================Eightth Section==========================================*/}
      {/* CTA Section */}
      <section className="cta">
        <h2>Join the Green Movement 🌾</h2>
        <p>
          Together, we can build a sustainable future — one organic choice at a time.
        </p>
        <button>Get Started</button>
      </section>
    
    {/* ==============================================Ninth Section==========================================*/}
      
      {/* Product section */}
      <section className="products-section">
            <div className="container">
              <div className="section-header">
                <h2>Our Products</h2>
                <p>
                  Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam
                  justo sed rebum vero dolor duo.
                </p>
              </div>
      
              <div className="product-row">
                {/* Product Card 1 */}
                <div className="product-card">
                  <div className="product-img">
                    <img src={product1} alt="Product" /> {/* Add your image later */}
                    <span className="product-badge">New</span>
                  </div>
                  <div className="product-content">
                    <h4>Fresh Tomato</h4> {/* Product name */}
                    <div className="price">
                      <span className="new-price">$40.00</span> {/* New Price */}
                      <span className="old-price">$50.00</span> {/* Old Price */}
                    </div>
                    <div className="product-buttons">
                      <button className="view-btn">View Detail</button>
                      <button className="cart-btn">Add to Cart</button>
                    </div>
                  </div>
                </div>
      
                {/* Copy this card for more products */}
                <div className="product-card">
                  <div className="product-img">
                    <img src={product2} alt="Product" />
                    <span className="product-badge">New</span>
                  </div>
                  <div className="product-content">
                    <h4>Fresh Pineapple</h4>
                    <div className="price">
                      <span className="new-price">$100.00</span>
                      <span className="old-price">$120.00</span>
                    </div>
                    <div className="product-buttons">
                      <button className="view-btn">View Detail</button>
                      <button className="cart-btn">Add to Cart</button>
                    </div>
                  </div>
                </div>
      
                <div className="product-card">
                  <div className="product-img">
                    <img src={product3} alt="Product" />
                    <span className="product-badge">New</span>
                  </div>
                  <div className="product-content">
                    <h4>Green Chili</h4>
                    <div className="price">
                      <span className="new-price">$30.00</span>
                      <span className="old-price">$60.00</span>
                    </div>
                    <div className="product-buttons">
                      <button className="view-btn">View Detail</button>
                      <button className="cart-btn">Add to Cart</button>
                    </div>
                  </div>
                </div>
      
                <div className="product-card">
                  <div className="product-img">
                    <img src={product4} alt="Product" />
                    <span className="product-badge">New</span>
                  </div>
                  <div className="product-content">
                    <h4>Fresh Strawberry</h4>
                    <div className="price">
                      <span className="new-price">$250.00</span>
                      <span className="old-price">$300.00$</span>
                    </div>
                    <div className="product-buttons">
                      <button className="view-btn">View Detail</button>
                      <button className="cart-btn">Add to Cart</button>
                    </div>
                  </div>
                </div>
      
                <div className="product-card">
                  <div className="product-img">
                    <img src={product5} alt="Product" />
                    <span className="product-badge">New</span>
                  </div>
                  <div className="product-content">
                    <h4>Fresh Cucumber</h4>
                    <div className="price">
                      <span className="new-price">$20.00</span>
                      <span className="old-price">$30.00</span>
                    </div>
                    <div className="product-buttons">
                      <button className="view-btn">View Detail</button>
                      <button className="cart-btn">Add to Cart</button>
                    </div>
                  </div>
                </div>
      
                <div className="product-card">
                  <div className="product-img">
                    <img src={product6} alt="Product" />
                    <span className="product-badge">New</span>
                  </div>
                  <div className="product-content">
                    <h4>Potato</h4>
                    <div className="price">
                      <span className="new-price">$40.00</span>
                      <span className="old-price">$50.00</span>
                    </div>
                    <div className="product-buttons">
                      <button className="view-btn">View Detail</button>
                      <button className="cart-btn">Add to Cart</button>
                    </div>
                  </div>
                </div>
      
                
              </div>
      
              {/* Centered “View More” button */}
              <div className="view-more-container">
                <button className="view-more-btn">View More</button>
              </div>
            </div>
          </section>
          
    </>
  );
};

export default Home;
