
import "../css/products.css";
import product1 from "../images/product-1.jpg";
import product2 from "../images/product-2.jpg";
import product3 from "../images/product-3.jpg";
import product4 from "../images/product-4.jpg";
import product5 from "../images/product-5.jpg";
import product6 from "../images/product-7.jpg";
import product7 from "../images/product-8.jpg";

const Products = () => {
  return (
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

          <div className="product-card">
            <div className="product-img">
              <img src={product7} alt="Product" />
              <span className="product-badge">New</span>
            </div>
            <div className="product-content">
              <h4>Fresh Banana</h4>
              <div className="price">
                <span className="new-price">$30.00</span>
                <span className="old-price">$40.00</span>
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
  );
};

export default Products;
