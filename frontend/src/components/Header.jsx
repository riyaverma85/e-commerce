import { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { FaCartArrowDown } from 'react-icons/fa';
import { IoPersonCircle } from 'react-icons/io5';
import logo from '../images/logo2.jpg';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import "../css/header.css";

const Header = () => {
  const { auth, logout, cartCount, setCartCount } = useContext(AuthContext);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const API = import.meta.env.VITE_API_URL || "http://localhost:8000";

  const fetchCartCount = async () => {
    if (!auth?.token) return;
    try {
      const res = await axios.get(`${API}/api/cart/my`, {
        headers: { Authorization: `Bearer ${auth.token}` },
      });
      setCartCount(res.data?.items?.length || 0);
    } catch (err) {
      console.error("Cart fetch failed", err);
    }
  };

  useEffect(() => {
    fetchCartCount();
  }, [auth]);

  const handleProfileClick = () => {
    if (auth && auth.user) {
      navigate(auth.user.role === 'admin' ? '/admin/dashboard' : '/add-product');
    } else {
      navigate('/login');
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (search.trim() !== '') {
      console.log('Searching for:', search);
      setSearch('');
    }
  };

  return (
    <header className="header shadow-sm py-2">
      <Container fluid className="d-flex align-items-center justify-content-between flex-wrap">
        <div className="d-flex align-items-center" style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
          <img src={logo} alt="logo" className="header-logo" />
          <h3 className="brand-name ms-2">OrganicMart</h3>
        </div>

        <form className="search-container" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit"></button>
        </form>

        <div className="header-icons d-flex align-items-center">
          <div className="cart-icon-wrapper" onClick={() => navigate('/add-product')}>
            <FaCartArrowDown className="icon" />
            {cartCount > 0 && <span className="cart-count-badge">{cartCount}</span>}
          </div>

          {auth && auth.user ? (
            <>
              <button
                className="btn btn-link me-2"
                onClick={() => navigate(auth.user.role === 'admin' ? '/admin/dashboard' : '/add-product')}
              >
                {auth.user.name}
              </button>
              <button className="btn btn-outline-danger btn-sm" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <button className="btn btn-link" onClick={handleProfileClick}>
              <IoPersonCircle className="icon" />
            </button>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Header;
