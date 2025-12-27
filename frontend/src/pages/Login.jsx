// frontend/pages/Login.jsx
import { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import "../css/login.css";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const navigate = useNavigate();

  // 👇 backend ka base URL from .env (must have VITE_API_URL=http://localhost:8000)
  const API = import.meta.env.VITE_API_URL || 'http://localhost:8000';

  const submit = async (e) => {
    e.preventDefault();
    setErr('');

    try {
      const res = await axios.post(`${API}/api/auth/login`, { email, password });

      // ✅ Save token and user globally
      login(res.data.token, res.data.user);

      // ✅ Redirect based on role
      if (res.data.user.role === 'admin') {
        navigate('/admin/dashboard');
      } else {
        navigate('/add-product');
      }

      Swal.fire({
        icon: 'success',
        title: 'Login Successful',
        text: `Welcome ${res.data.user.name}!`,
        timer: 1500,
        showConfirmButton: false,
      });
    } catch (error) {
      const message = error.response?.data?.message || 'Login failed';
      setErr(message);

      if (message.toLowerCase().includes('invalid') || message.toLowerCase().includes('not found')) {
        Swal.fire({
          icon: 'warning',
          title: 'User Not Registered',
          text: 'Please register first before logging in.',
          confirmButtonText: 'Go to Register',
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/register');
          }
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: message,
        });
      }
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
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
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
