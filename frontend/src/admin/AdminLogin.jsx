import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Popup from "../components/Popup";
import "../css/login.css";
import axios from "axios";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [popup, setPopup] = useState({ message: "", type: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // ✅ Make sure the slash is there
      const api = `${import.meta.env.VITE_API_URL}/admin/login`;
      const { data } = await axios.post(api, { email, password });

      localStorage.setItem("token", data.token);

      setPopup({ message: "✅ Admin Login Successful!", type: "success" });

      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);

    } catch (err) {
      console.log(err);
      setPopup({ message: err.response?.data?.message || "❌ Login Failed", type: "error" });
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-card">
        <h2>🌿 Organic Admin Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>

      <Popup
        message={popup.message}
        type={popup.type}
        onClose={() => setPopup({ message: "", type: "" })}
      />
    </div>
  );
};

export default AdminLogin;
