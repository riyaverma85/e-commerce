import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import "../css/productdetails.css";
import { AuthContext } from "../context/AuthContext";

const API = import.meta.env.VITE_API_URL || "http://localhost:8000";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { auth, cartCount, setCartCount } = useContext(AuthContext);
  const navigate = useNavigate();

  // Fetch product details
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`${API}/api/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        Swal.fire("Error", "Failed to load product details", "error");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  // Add to cart handler
  const handleAddToCart = async () => {
    if (!auth || !auth.token) {
      Swal.fire({
        title: "Login Required",
        text: "You need to login first to add items to the cart.",
        icon: "info",
        confirmButtonText: "Login",
      }).then(() => {
        navigate("/login");
      });
      return;
    }

    try {
      const res = await axios.post(
        `${API}/api/cart/add`,
        { productId: id },
        { headers: { Authorization: `Bearer ${auth.token}` } }
      );
      setCartCount(res.data.items.length); // update cart count
      Swal.fire("Added!", "Product added to your cart.", "success");
    } catch (err) {
      Swal.fire("Error", "Failed to add product to cart", "error");
      console.error(err);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h2>{product.name}</h2>
        <p className="price">₹{product.price}</p>
        <p className="desc">{product.description}</p>
        <button className="add-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
