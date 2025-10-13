import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { FaBox, FaUsers, FaShoppingCart, FaRupeeSign } from 'react-icons/fa';
import "../css/dashboard.css";

const Dashboard = () => {
  const { auth, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Example dummy data (you can replace with API later)
  const stats = [
    { title: "Total Products", value: 128, icon: <FaBox />, color: "#81c784" },
    { title: "Total Users", value: 540, icon: <FaUsers />, color: "#64b5f6" },
    { title: "Total Orders", value: 230, icon: <FaShoppingCart />, color: "#ffb74d" },
    { title: "Total Revenue", value: "₹1,24,000", icon: <FaRupeeSign />, color: "#4db6ac" },
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>🌿 Admin Dashboard</h2>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>

      <p className="welcome-text">Welcome, {auth?.user?.name || 'Admin'} 👋</p>

      <div className="stats-grid">
        {stats.map((item, index) => (
          <div key={index} className="stat-card" style={{ borderTop: `4px solid ${item.color}` }}>
            <div className="icon-wrapper" style={{ backgroundColor: item.color + "33" }}>
              <span style={{ color: item.color }}>{item.icon}</span>
            </div>
            <div className="stat-info">
              <h3>{item.value}</h3>
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-footer">
        <p>© 2025 OrganicMart Admin Panel. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Dashboard;
