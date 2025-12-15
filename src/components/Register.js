import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../Firebase";
import { doc, setDoc } from "firebase/firestore";

function Register({ onBack }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister(e) {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      await setDoc(doc(db, "users", res.user.uid), {
        email,
        role: "user"
      });

      alert("Account created! Please login.");
      onBack();
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <form onSubmit={handleRegister}>
      <h2>Create Account</h2>

      <input
        type="email"
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
        required
      />

      <button type="submit">Register</button>
      <button type="button" onClick={onBack}>Back to Login</button>
    </form>
  );
}

export default Register;
