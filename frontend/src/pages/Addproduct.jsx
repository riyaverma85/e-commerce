// frontend/pages/AddProduct.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "../css/addproduct.css";

const AddProduct = () => {
  const API = import.meta.env.VITE_API_URL || "http://localhost:8000";
  const [active, setActive] = useState("shop");
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem("token");

  // Fetch products
  const fetchProducts = async () => {
    const res = await axios.get(`${API}/api/products`);
    setProducts(res.data);
  };

  // Fetch orders
  const fetchOrders = async () => {
    const res = await axios.get(`${API}/api/orders/my`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setOrders(res.data);
  };

  useEffect(() => {
    fetchProducts();
    fetchOrders();
  }, []);

  // Add to Cart
  const addToCart = (p) => {
    const exists = cart.find((x) => x._id === p._id);
    if (exists) {
      Swal.fire("Already added!", "This product is already in your cart.", "info");
    } else {
      setCart([...cart, { ...p, quantity: 1 }]);
      Swal.fire("Added!", "Product added to cart.", "success");
    }
  };

  // Place Order
  const placeOrder = async () => {
    if (cart.length === 0) {
      Swal.fire("Empty Cart", "Please add products first.", "info");
      return;
    }
    const productsToSend = cart.map((c) => ({
      product: c._id,
      quantity: c.quantity,
    }));

    try {
      await axios.post(
        `${API}/api/orders`,
        { products: productsToSend, totalPrice: totalCartPrice() },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      Swal.fire("Order Placed!", "Your order has been placed successfully!", "success");
      setCart([]);
      fetchOrders();
    } catch {
      Swal.fire("Error", "Failed to place order.", "error");
    }
  };

  // Total Price
  const totalCartPrice = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div className="user-dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>User Panel</h2>
        <ul>
          <li
            className={active === "shop" ? "active" : ""}
            onClick={() => setActive("shop")}
          >
            🛍 Shop
          </li>
          <li
            className={active === "cart" ? "active" : ""}
            onClick={() => setActive("cart")}
          >
            🛒 My Cart
          </li>
          <li
            className={active === "orders" ? "active" : ""}
            onClick={() => setActive("orders")}
          >
            📦 My Orders
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {active === "shop" && (
          <div className="shop-section">
            <h2>Organic Products</h2>
            <div className="product-grid">
              {products.map((p) => (
                <div key={p._id} className="product-card">
                  <img src={p.image} alt={p.name} />
                  <h4>{p.name}</h4>
                  <p>{p.description}</p>
                  <b>₹{p.price}</b>
                  <button onClick={() => addToCart(p)}>Add to Cart</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {active === "cart" && (
          <div className="cart-section">
            <h2>My Cart</h2>
            {cart.length === 0 ? (
              <p>No products in cart.</p>
            ) : (
              <>
                {cart.map((c, i) => (
                  <div key={i} className="cart-item">
                    <img src={c.image} alt={c.name} />
                    <div className="info">
                      <h4>{c.name}</h4>
                      <p>₹{c.price}</p>
                      <input
                        type="number"
                        min="1"
                        value={c.quantity}
                        onChange={(e) => {
                          const newCart = [...cart];
                          newCart[i].quantity = Number(e.target.value);
                          setCart(newCart);
                        }}
                      />
                      <button
                        onClick={() => setCart(cart.filter((_, idx) => idx !== i))}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
                <div className="cart-summary">
                  <h3>Total: ₹{totalCartPrice()}</h3>
                  <button className="place-btn" onClick={placeOrder}>
                    Place Order
                  </button>
                </div>
              </>
            )}
          </div>
        )}

        {active === "orders" && (
          <div className="orders-section">
            <h2>My Orders</h2>
            {orders.length === 0 ? (
              <p>No orders found.</p>
            ) : (
              orders.map((o) => (
                <div key={o._id} className="order-card">
                  <h4>Order #{o._id.slice(-5)}</h4>
                  <p>Status: <b className={o.status}>{o.status}</b></p>
                  <p>Total: ₹{o.totalPrice}</p>
                  <p>Items: {o.products.map((p) => p.product.name).join(", ")}</p>
                </div>
              ))
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default AddProduct;
