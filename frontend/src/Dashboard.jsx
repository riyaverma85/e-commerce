// // frontend/pages/AdminDashboard.jsx
// import { useEffect, useState } from "react";
// import axios from "axios";
// import "./css/dashboard.css"

// const AdminDashboard = () => {
//   const API = import.meta.env.VITE_API_URL || "http://localhost:8000";
//   const [stats, setStats] = useState({ users: 0, products: 0 });
//   const [active, setActive] = useState("dashboard");

//   const fetchData = async () => {
//     const res = await axios.get(`${API}/api/admin/stats`);
//     setStats(res.data);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className="admin-dashboard">
//       {/* Sidebar */}
//       <aside className="sidebar">
//         <h2>Admin Panel</h2>
//         <ul>
//           <li
//             className={active === "dashboard" ? "active" : ""}
//             onClick={() => setActive("dashboard")}
//           >
//             Dashboard
//           </li>
//           <li
//             className={active === "products" ? "active" : ""}
//             onClick={() => setActive("products")}
//           >
//             Products
//           </li>
//           <li
//             className={active === "users" ? "active" : ""}
//             onClick={() => setActive("users")}
//           >
//             Users
//           </li>
//           <li
//             className={active === "orders" ? "active" : ""}
//             onClick={() => setActive("orders")}
//           >
//             Orders
//           </li>
//         </ul>
//       </aside>

//       {/* Main Content */}
//       <main className="main-content">
//         {active === "dashboard" && (
//           <div className="stats-cards">
//             <div className="card">
//               <h3>Total Users</h3>
//               <p>{stats.users}</p>
//             </div>
//             <div className="card">
//               <h3>Total Products</h3>
//               <p>{stats.products}</p>
//             </div>
//           </div>
//         )}

//         {active === "products" && <div><h2>Products Section</h2></div>}
//         {active === "users" && <div><h2>Users Section</h2></div>}
//         {active === "orders" && <div><h2>Orders Section</h2></div>}
//       </main>
//     </div>
//   );
// };

// export default AdminDashboard;
// frontend/pages/AdminDashboard.jsx
import { useState } from "react";
import DashboardHome from "./AdminComponent/DashboardHome"
import ProductManager from "./AdminComponent/ProductManager"
import OrdersManager from "./AdminComponent/OrdersManager"
import UsersManager from "./AdminComponent/UsersManager";
import "./css/dashboard.css"

export default function AdminDashboard() {
  const [active, setActive] = useState("dashboard");

  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li
            className={active === "dashboard" ? "active" : ""}
            onClick={() => setActive("dashboard")}
          >
            Dashboard
          </li>
          <li
            className={active === "products" ? "active" : ""}
            onClick={() => setActive("products")}
          >
            Products
          </li>
          <li
            className={active === "users" ? "active" : ""}
            onClick={() => setActive("users")}
          >
            Users
          </li>
          <li
            className={active === "orders" ? "active" : ""}
            onClick={() => setActive("orders")}
          >
            Orders
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {active === "dashboard" && <DashboardHome />}
        {active === "products" && <ProductManager />}
        {active === "users" && <UsersManager />}
        {active === "orders" && <OrdersManager />}
      </main>
    </div>
  );
}
