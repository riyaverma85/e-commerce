// frontend/pages/components/DashboardHome.jsx
import { useEffect, useState } from "react";
import axios from "axios";

const DashboardHome=() =>{
  const API = import.meta.env.VITE_API_URL || "http://localhost:8000";
  const [stats, setStats] = useState({ users: 0, products: 0, orders: 0 });
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`${API}/api/admin/stats`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setStats(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="stats-cards">
      <div className="card">
        <h3>Total Users</h3>
        <p>{stats.users}</p>
      </div>
      <div className="card">
        <h3>Total Products</h3>
        <p>{stats.products}</p>
      </div>
      <div className="card">
        <h3>Total Orders</h3>
        <p>{stats.orders}</p>
      </div>
    </div>
  );
}
export default  DashboardHome;