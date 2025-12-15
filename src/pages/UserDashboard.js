/*import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";
import "../styles/UserDashboard.css";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";

export default function UserDashboard() {
  const [products, setProducts] = useState([]);
  const [q, setQ] = useState("");
  const [category, setCategory] = useState("All");
  const navigate = useNavigate();

const handleLogout = async () => {
  try {
    await signOut(auth);
    navigate("/login");
  } catch (error) {
    console.error("Logout error:", error);
  }
};

  useEffect(() => {
    loadCourses();
  }, []);

  async function loadCourses() {
    const snap = await getDocs(collection(db, "courses"));
    const list = snap.docs.map((d) => ({
      id: d.id,
      ...d.data(),
    }));
    setProducts(list);
  }

  const categories = [
    "All",
    ...Array.from(new Set(products.map((p) => p.category))),
  ];

  const filtered = products.filter(
    (p) =>
      (category === "All" || p.category === category) &&
      p.name.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div className="dashboard">
      <h1 className="title"> User Dashboard</h1>
       <button className="logout-btn" onClick={handleLogout}>
        Logout
       </button>

      
      <div className="controls">
        <input
          type="text"
          placeholder="Search courses..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

    
      <div className="card-grid">
        {filtered.map((p) => (
          <div className="card" key={p.id}>
            <img
  src={p.image}
  alt={p.name}
  style={{
    width: "100%",
    height: "160px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "10px"
  }}
/>

            <h3>{p.name}</h3>
            <p>
              <strong>Category:</strong> {p.category}
            </p>
            <p>
              <strong>Duration:</strong> {p.Duration}
            </p>
            <p className="price">₹{p.price}</p>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="empty">No courses found</p>
      )}
    </div>
  );
}*/
import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";
import "../styles/UserDashboard.css";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";

export default function UserDashboard() {
  const [products, setProducts] = useState([]);
  const [q, setQ] = useState("");
  const [category, setCategory] = useState("All");

  const navigate = useNavigate();

  // ===== Logout =====
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  // ===== Go Home =====
  const goHome = () => {
    navigate("/");
  };

  // ===== Load courses =====
  useEffect(() => {
    loadCourses();
  }, []);

  async function loadCourses() {
    const snap = await getDocs(collection(db, "courses"));
    const list = snap.docs.map((d) => ({
      id: d.id,
      ...d.data(),
    }));
    setProducts(list);
  }

  const categories = [
    "All",
    ...Array.from(new Set(products.map((p) => p.category))),
  ];

  const filtered = products.filter(
    (p) =>
      (category === "All" || p.category === category) &&
      p.name.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div className="dashboard">
      {/* ===== Header ===== */}
      <div className="dashboard-header">
        <button className="home-btn" onClick={goHome}>
          ⬅ Home
        </button>

        <h1>User Dashboard</h1>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* ===== Search & Filter ===== */}
      <div className="controls">
        <input
          type="text"
          placeholder="Search courses..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {/* ===== Cards ===== */}
      <div className="card-grid">
        {filtered.map((p) => (
          <div className="card" key={p.id}>
            <img
              src={p.image}
              alt={p.name}
              style={{
                width: "100%",
                height: "160px",
                objectFit: "cover",
                borderRadius: "8px",
                marginBottom: "10px",
              }}
            />

            <h3>{p.name}</h3>
            <p>
              <strong>Category:</strong> {p.category}
            </p>
            <p>
              <strong>Duration:</strong> {p.Duration}
            </p>
            <p className="price">₹{p.price}</p>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="empty">No courses found</p>
      )}
    </div>
  );
}
