import React from "react";
import "../css/products.css";

const Products = () => {
  const products = [
    { id: 1, name: "Fresh Tomato", price: 19.0, oldPrice: 29.0 },
    { id: 2, name: "Organic Apple", price: 25.0, oldPrice: 35.0 },
    { id: 3, name: "Natural Honey", price: 30.0, oldPrice: 45.0 },
    { id: 4, name: "Fresh Cucumber", price: 15.0, oldPrice: 25.0 },
    { id: 5, name: "Green Capsicum", price: 22.0, oldPrice: 30.0 },
    { id: 6, name: "Fresh Carrot", price: 18.0, oldPrice: 28.0 },
  ];

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

        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              {/* Product Image (you’ll add src later) */}
              <div className="product-img">
                <img src="https://via.placeholder.com/300x250" alt={product.name} />
                <span className="product-badge">New</span>
              </div>

              <div className="product-content">
                <h4>{product.name}</h4>
                <div className="price">
                  <span className="new-price">${product.price.toFixed(2)}</span>
                  <span className="old-price">${product.oldPrice.toFixed(2)}</span>
                </div>

                <div className="product-buttons">
                  <button className="view-btn">View Detail</button>
                  <button className="cart-btn">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
