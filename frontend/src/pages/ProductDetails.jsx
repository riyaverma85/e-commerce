import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import "../css/productdetails.css";

const API = import.meta.env.VITE_API_URL || "http://localhost:8000";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

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


  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h2>{product.name}</h2>
        <p className="price">₹{product.price}</p>
        <p className="desc">{product.description}</p>
        <button className="add-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
