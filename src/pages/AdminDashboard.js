import React, { useState, useEffect } from "react";
import { db } from "../Firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";
import "../styles/AdminDashboard.css";

export default function AdminDashboard() {
  const [form, setForm] = useState({
    name: "",
    category: "",
    Duration: "",
    price: "",
  });
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  /* ===== Logout ===== */
  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  /* ===== Load Courses ===== */
  useEffect(() => {
    fetchCourses();
  }, []);

  async function fetchCourses() {
    const snapshot = await getDocs(collection(db, "courses"));
    const list = snapshot.docs.map((d) => ({
      id: d.id,
      ...d.data(),
    }));
    setCourses(list);
  }

  /* ===== Handle Input ===== */
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  /* ===== Add Course ===== */
  async function handleAdd(e) {
    e.preventDefault();

    await addDoc(collection(db, "courses"), {
      name: form.name,
      category: form.category,
      Duration: form.Duration,
      price: Number(form.price),
    });

    alert("Course added successfully!");
    setForm({ name: "", category: "", Duration: "", price: "" });
    fetchCourses();
  }

  /* ===== Delete Course ===== */
  async function handleDelete(id) {
    await deleteDoc(doc(db, "courses", id));
    alert("Course deleted!");
    fetchCourses();
  }

  return (
    <div className="admin-container">
      {/* HEADER */}
      <div className="admin-header">
        <h2>Admin Dashboard</h2>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* ADD COURSE FORM */}
      <div className="form-card">
        <h3>Add New Course</h3>

        <form onSubmit={handleAdd}>
          <input
            name="name"
            placeholder="Course Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            name="category"
            placeholder="Category"
            value={form.category}
            onChange={handleChange}
            required
          />

          <input
            name="Duration"
            placeholder="Duration"
            value={form.Duration}
            onChange={handleChange}
            required
          />

          <input
            name="price"
            type="number"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
            required
          />

          <button type="submit">Add Course</button>
        </form>
      </div>

      {/* COURSE TABLE */}
      <table className="course-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Duration</th>
            <th>Price</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {courses.map((c) => (
            <tr key={c.id}>
              <td>{c.name}</td>
              <td>{c.category}</td>
              <td>{c.Duration}</td>
              <td>₹{c.price}</td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(c.id)}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
