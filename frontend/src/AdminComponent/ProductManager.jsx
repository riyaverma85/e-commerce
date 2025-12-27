// frontend/pages/components/ProductManager.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "../css/productManager.css";

const ProductManager=() =>{
  const API = import.meta.env.VITE_API_URL || "http://localhost:8000";
  const token = localStorage.getItem("token");

  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: "", description: "", price: "" });
  const [image, setImage] = useState(null);
  const [editProduct, setEditProduct] = useState(null); // ✅ to store current product being edited

  const fetchProducts = async () => {
    const res = await axios.get(`${API}/api/products`);
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // ✅ Add product
  const handleAddProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("description", form.description);
    formData.append("price", form.price);
    if (image) formData.append("image", image);

    try {
      await axios.post(`${API}/api/products`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      Swal.fire("✅ Success", "Product Added!", "success");
      setForm({ name: "", description: "", price: "" });
      setImage(null);
      fetchProducts();
    } catch (err) {
      Swal.fire("❌ Error", "Failed to add product", "error");
    }
  };

  // ✅ Delete product
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This product will be deleted permanently!",
      icon: "warning",
      showCancelButton: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(`${API}/api/products/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        Swal.fire("Deleted!", "Product removed", "success");
        fetchProducts();
      }
    });
  };

  // ✅ Open edit form
  const handleEditClick = (product) => {
    setEditProduct(product);
    setForm({
      name: product.name,
      description: product.description,
      price: product.price,
    });
    setImage(null);
  };

  // ✅ Submit edited product
  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("description", form.description);
    formData.append("price", form.price);
    if (image) formData.append("image", image);

    try {
      await axios.put(`${API}/api/products/${editProduct._id}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      Swal.fire("✅ Updated", "Product updated successfully!", "success");
      setEditProduct(null);
      fetchProducts();
    } catch (err) {
      Swal.fire("❌ Error", "Failed to update product", "error");
    }
  };

  return (
    <div className="product-manager">
      <h2>{editProduct ? "Edit Product" : "Add Product"}</h2>

      <form className="product-form" onSubmit={editProduct ? handleUpdateProduct : handleAddProduct}>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          required
        />
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <button type="submit">{editProduct ? "Update Product" : "Add Product"}</button>
        {editProduct && (
          <button
            type="button"
            style={{ marginLeft: "10px", background: "gray" }}
            onClick={() => {
              setEditProduct(null);
              setForm({ name: "", description: "", price: "" });
              setImage(null);
            }}
          >
            Cancel
          </button>
        )}
      </form>

      <h2 style={{ marginTop: "30px" }}>All Products</h2>
      <div className="product-grid">
        {products.map((p) => (
          <div key={p._id} className="product-card">
            <img src={p.image} alt={p.name} />
            <h4>{p.name}</h4>
            <p>₹{p.price}</p>
            <div className="btn-group">
              <button onClick={() => handleEditClick(p)}>✏️ Edit</button>
              <button onClick={() => handleDelete(p._id)}>🗑️ Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default  ProductManager;