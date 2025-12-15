import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase";
import { useNavigate } from "react-router-dom";
import "./CourseEnquiry.css";

export default function CourseEnquiry() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await addDoc(collection(db, "enquiries"), form);
      alert("Enquiry submitted successfully!");
      setForm({ name: "", email: "", phone: "", course: "" });
    } catch (err) {
      alert("Something went wrong");
    }
  }

  return (
    <div className="enquiry-container">
      <div className="enquiry-card">
        <h2>Course Enquiry</h2>

        <form onSubmit={handleSubmit}>
          <input
            placeholder="Full Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />

          <input
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />

          <input
            placeholder="Phone Number"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            required
          />

          <input
            placeholder="Interested Course"
            value={form.course}
            onChange={(e) => setForm({ ...form, course: e.target.value })}
            required
          />

          <button type="submit">Submit Enquiry</button>
        </form>

        <p className="back" onClick={() => navigate("/")}>
          ← Back to Home
        </p>
      </div>
    </div>
  );
}

