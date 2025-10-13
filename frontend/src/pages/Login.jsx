// frontend/src/pages/Login.jsx
import { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import "../css/login.css"
const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const navigate = useNavigate();

  const API = import.meta.env.VITE_API_URL || '';

  const submit = async (e) => {
    e.preventDefault();
    setErr('');
    try {
      const res = await axios.post(`${API}/api/auth/login`, { email, password });
      login(res.data.token, res.data.user);
      if (res.data.user.role === 'admin') navigate('/dashboard');
      else navigate('/');
    } catch (error) {
      setErr(error.response?.data?.message || 'Login failed');
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
