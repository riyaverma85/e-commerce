// frontend/src/components/Header.jsx
import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { FaCartArrowDown } from 'react-icons/fa';
import { IoPersonCircle } from 'react-icons/io5';
import logo from '../images/logo2.jpg';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
  const { auth, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleProfileClick = () => {
    if (auth && auth.user) navigate(auth.user.role === 'admin' ? '/dashboard' : '/profile');
    else navigate('/login');
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="header shadow-sm py-2" style={{ background: '#fff' }}>
      <Container fluid className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center" style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
          <img src={logo} alt="logo" style={{ width: 48, height: 48, borderRadius: 6 }} />
          <h3 style={{ marginLeft: 8 }}>OrganicMart</h3>
        </div>

        <div className="d-flex align-items-center">
          <FaCartArrowDown style={{ fontSize: 20, marginRight: 16 }} />
          {auth && auth.user ? (
            <>
              <button className="btn btn-link me-2" onClick={() => navigate('/profile')}>{auth.user.name}</button>
              <button className="btn btn-outline-danger btn-sm" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <button className="btn btn-link" onClick={handleProfileClick}><IoPersonCircle style={{ fontSize: 26 }} /></button>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Header;
