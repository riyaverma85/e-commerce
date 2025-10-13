// frontend/src/pages/Login.jsx
import { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

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
    <div className="container mt-5" style={{ maxWidth: 480 }}>
      <h3>Login</h3>
      {err && <div className="alert alert-danger">{err}</div>}
      <form onSubmit={submit}>
        <div className="mb-3">
          <label>Email</label>
          <input className="form-control" value={email} onChange={e=>setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control" value={password} onChange={e=>setPassword(e.target.value)} required />
        </div>
        <button className="btn btn-primary" type="submit">Login</button>
        <div className="mt-3">New user? <Link to="/register">Register here</Link></div>
      </form>
    </div>
  );
};

export default Login;
