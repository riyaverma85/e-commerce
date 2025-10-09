import React from "react";
import "../css/dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>🌿 Admin Dashboard</h1>
        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/login"; // redirect to login
          }}
        >
          Logout
        </button>
      </header>

      <main className="dashboard-main">
        <div className="cards-container">
          <div className="card">
            <h3>Orders</h3>
            <p>25 New Orders</p>
          </div>
          <div className="card">
            <h3>Products</h3>
            <p>120 Products</p>
          </div>
          <div className="card">
            <h3>Users</h3>
            <p>45 Registered Users</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
