import { useState, useContext,useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Swal from "sweetalert2";
import "../css/login.css";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const API = import.meta.env.VITE_API_URL || "http://localhost:8000";

  const redirectPath = location.state?.from || "/add-product";

  const submit = async (e) => {
    e.preventDefault();
    setErr("");

    try {
      // ✅ Added headers for Render/production backend
      const res = await axios.post(
        `${API}/api/auth/login`,
        { email, password },
        // {
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   withCredentials: true, // optional if your backend uses cookies
        // }
      );

      login(res.data.token, res.data.user);

      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: `Welcome ${res.data.user.name}!`,
        timer: 1500,
        showConfirmButton: false,
      });

      if (res.data.user.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate(redirectPath, { replace: true });
      }
    } catch (error) {
      const message = error.response?.data?.message || "Login failed";
      setErr(message);

      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: message,
      });
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Login</h2>
        {err && <div className="message">{err}</div>}
        <form onSubmit={submit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email" // optional, better UX
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
          <button type="submit">Login</button>
        </form>
        <div className="register-link">
          New user? <Link to="/register">Register here</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
