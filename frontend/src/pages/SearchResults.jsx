import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import ProductCard from "../components/ProductCard"; // same as your Home.jsx me use hota hai
import "../css/search.css";

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search).get("query") || "";
  const API = import.meta.env.VITE_API_URL || "http://localhost:8000";

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // ✅ Fetch matching products
  useEffect(() => {
    const fetchProducts = async () => {
      if (!query.trim()) return;
      try {
        setLoading(true);
        const res = await axios.get(`${API}/api/products?search=${encodeURIComponent(query)}`);
        setProducts(res.data);
      } catch (err) {
        console.error("Search failed", err);
        Swal.fire("Error", "Failed to load search results.", "error");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [query]);

  return (
    <section className="search-results-section">
      <div className="container">
        <h2>
          🔍 Search Results for: <span className="highlight">"{query}"</span>
        </h2>

        {loading ? (
          <p className="loading">Loading products...</p>
        ) : products.length > 0 ? (
          <div className="products-grid">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p>No products found for your search.</p>
            <button className="btn-back" onClick={() => navigate("/")}>
              ← Back to Home
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchResults;
