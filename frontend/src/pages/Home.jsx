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
  


      
    <div className="home">

      {/* 🥬 Upper Section */}
      <section className="organic-upper">
        <div className="upper-container">
          <div className="upper-text">
            <h2>🌱 Fresh Organic Fruits & Vegetables</h2>
            <p>
              Discover the freshness of locally grown organic produce — hand-picked, pesticide-free,
              and delivered straight to your home for a healthier you.
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
          <button className="btn-banner">Explore Products</button>
        </div>
      </section>

      {/* 🌻 Features Section */}
      <section className="features-section">
        <div className="features-container">
          <h2>🌿 Why Choose Us</h2>
          <p className="features-sub">
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
              <button className="btnn1">Read More</button>
            </div>

            <div className="feature-card">
              <FaSeedling className="feature-icon" />
              <h4>Biologically Safe</h4>
              <p>
                Our products are 100% chemical-free and safe for you and your family.
              </p>
              <button className="btnn1">Read More</button>
            </div>
          </div>
        </div>
      </section>

      {/* 🌾 Hero Section */}
      <section className="hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Pure • Natural • Healthy Living 🌿</h1>
          <p>
            Discover the freshness of organic life — where every product is grown with love and care for you and the planet.
          </p>
          <button className="hero-btn">Shop Organic</button>
        </div>
      </section>

      {/* 🌱 About Section */}
      <section className="about">
        <div className="about-inner">
          <h2>About OrganicMart</h2>
          <p>
            We’re passionate about reconnecting you with nature through real, chemical-free food.
            Every product comes directly from farms that respect the earth and deliver true nutrition.
          </p>
        </div>
      </section>

      {/* 💚 Why Choose Section */}
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

      {/* 🌾 Farm Section */}
      <section className="farm">
        <div className="farm-content">
          <h2>Fresh from the Farm</h2>
          <p>
            Taste the difference of truly fresh produce — handpicked and delivered at peak freshness.
          </p>
          <button>Explore More</button>
        </div>
      </section>

      {/* 🌿 CTA Section */}
      <section className="cta">
        <h2>Join the Green Movement 🌾</h2>
        <p>Together, we can build a sustainable future — one organic choice at a time.</p>
        <button>Get Started</button>
      </section>

      {/* 🥕 Product Section */}
      <section className="products-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Products</h2>
            <p>
              Taste the freshness of organic produce — natural, healthy, and chemical-free.
            </p>
          </div>

          <div className="product-row">
            {[product1, product2, product3, product4, product5, product6].map((img, i) => (
              <div className="product-card" key={i}>
                <div className="product-img">
                  <img src={img} alt="Product" />
                  <span className="product-badge">New</span>
                </div>
                <div className="product-content">
                  <h4>{["Tomato","Pineapple","Green Chili","Strawberry","Cucumber","Potato"][i]}</h4>
                  <div className="price">
                    <span className="new-price">${(i+1)*20}.00</span>
                    <span className="old-price">${(i+1)*25}.00</span>
                  </div>
                  <div className="product-buttons">
                    <button className="view-btn">View Detail</button>
                    <button className="cart-btn">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="view-more-container">
            <button className="view-more-btn">View More</button>
          </div>
        </div>
      </section>
    </div>
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Fresh. Organic. Sustainable.</h1>
          <p>
            Experience the purity of nature — Fresh organic fruits, vegetables,
            and groceries delivered straight from local farms.
          </p>
          <button className="shop-btn">Explore Products</button>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-image"></div>
        <div className="about-content">
          <h2>Why Choose Organic?</h2>
          <p>
            Our mission is to promote healthy living through 100% organic and
            chemical-free products. We support local farmers and sustainable
            farming practices for a greener tomorrow.
          </p>
          <button className="learn-btn">Learn More</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Our Core Values</h2>
        <div className="features-grid">
          <div className="feature-card">
            <img src="https://cdn-icons-png.flaticon.com/512/415/415733.png" alt="Fresh" />
            <h3>Fresh Produce</h3>
            <p>We handpick only the freshest and finest organic products.</p>
          </div>
          <div className="feature-card">
            <img src="https://cdn-icons-png.flaticon.com/512/415/415682.png" alt="Eco" />
            <h3>Eco-Friendly</h3>
            <p>All our packaging is biodegradable and environment-safe.</p>
          </div>
          <div className="feature-card">
            <img src="https://cdn-icons-png.flaticon.com/512/1534/1534958.png" alt="Quality" />
            <h3>Guaranteed Quality</h3>
            <p>Certified organic products tested and approved by experts.</p>
          </div>
        </div>
      </section>

      {/* Parallax Section */}
      <section className="parallax-section">
        <div className="parallax-overlay"></div>
        <div className="parallax-content">
          <h2>Eat Organic, Live Longer 🌾</h2>
          <p>
            Join the green movement — switch to organic and feel the
            difference.
          </p>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <h2>What Our Customers Say</h2>
        <div className="testimonials">
          <div className="testimonial-card">
            <p>
              “The quality of fruits and vegetables is amazing. Everything feels
              farm-fresh!”
            </p>
            <h4>— Riya Sharma</h4>
          </div>
          <div className="testimonial-card">
            <p>
              “Loved their eco-friendly approach. Truly organic and trustworthy
              brand.”
            </p>
            <h4>— Ankit Verma</h4>
          </div>
        </div>
      </section>
    </div>
  
    </>
  );
};

export default Home;
