
import "../css/products.css";
import product1 from "../images/product-1.jpg";
// import product2 from "../images/product2.jpg";
// import product3 from "../images/product3.jpg";
// import product4 from "../images/product5.jpg";
// import product5 from "../images/product6.jpg";
// import product6 from "../images/product7.jpg";




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
              <img src="" alt="Product" /> {/* Add your image later */}
              <span className="product-badge">New</span>
            </div>
            <div className="product-content">
              <h4></h4> {/* Product name */}
              <div className="price">
                <span className="new-price"></span> {/* New Price */}
                <span className="old-price"></span> {/* Old Price */}
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
              <img src="" alt="Product" />
              <span className="product-badge">New</span>
            </div>
            <div className="product-content">
              <h4></h4>
              <div className="price">
                <span className="new-price"></span>
                <span className="old-price"></span>
              </div>
              <div className="product-buttons">
                <button className="view-btn">View Detail</button>
                <button className="cart-btn">Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="product-card">
            <div className="product-img">
              <img src="" alt="Product" />
              <span className="product-badge">New</span>
            </div>
            <div className="product-content">
              <h4></h4>
              <div className="price">
                <span className="new-price"></span>
                <span className="old-price"></span>
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
