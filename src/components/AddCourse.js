import React, { useState } from "react";
import { db } from "../Firebase";
import { collection, addDoc } from "firebase/firestore";

export default function AddCourse() {
  const [form, setForm] = useState({ name: "", category: "", qty: "", price: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleAdd(e) {
    e.preventDefault();

    if (!form.name || !form.category || form.qty === "") {
      alert("Please fill all fields");
      return;
    }

    // Save to Firestore
    await addDoc(collection(db, "courses"), {
      name: form.name,
      category: form.category,
      qty: Number(form.qty),
      price: Number(form.price) || 0,
      createdAt: new Date()
    });

    alert("Course added successfully!");

    // Reset form
    setForm({ name: "", category: "", qty: "", price: "" });
  }

  return (
    <div>
      <h3>Add Course (Saved to Firestore)</h3>
      <form onSubmit={handleAdd} style={{ display: "grid", gap: 8, maxWidth: 420 }}>
        <input name="name" placeholder="Course name" value={form.name} onChange={handleChange} />
        <input name="category" placeholder="Category" value={form.category} onChange={handleChange} />
        <input name="qty" type="number" placeholder="Quantity" value={form.qty} onChange={handleChange} />
        <input name="price" type="number" placeholder="Price" value={form.price} onChange={handleChange} />
        <button type="submit">Add Course</button>
      </form>
    </div>
  );
}

