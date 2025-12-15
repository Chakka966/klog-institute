/*import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);

      // ✅ SIMPLE ADMIN CHECK
      if (email.trim() === "admin@gmail.com") {
        navigate("/admin");
      } else {
        navigate("/user");
      }

    } catch (error) {
      console.error(error);
      alert("Invalid email or password");
    }
  };

  return (
    <div className="login-bg">
      <div className="login-card">
        <h1 className="institute-name">K'log Institute</h1>
        <p className="tagline">Pay less. Learn more.</p>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;*/
import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { auth, db } from "../Firebase";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  const [showSignup, setShowSignup] = useState(false);
  const [showEnquiry, setShowEnquiry] = useState(false);

  const navigate = useNavigate();

  /* ================= LOGIN ================= */
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);

      // ✅ Simple admin check
      if (email.trim() === "admin@gmail.com") {
        navigate("/admin");
      } else {
        navigate("/user");
      }
    } catch (error) {
      alert("Invalid email or password");
      console.error(error);
    }
  };

  /* ================= SIGN UP ================= */
  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email.trim(), password);

      // Optional: save user details
      await addDoc(collection(db, "users"), {
        name,
        email,
        createdAt: Timestamp.now(),
      });

      alert("Account created successfully! Please login.");
      setShowSignup(false);
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      alert(error.message);
    }
  };

  /* ================= COURSE ENQUIRY ================= */
  const handleEnquiry = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "enquiries"), {
        name,
        email,
        course,
        createdAt: Timestamp.now(),
      });

      alert("Enquiry submitted successfully!");
      setShowEnquiry(false);
      setName("");
      setEmail("");
      setCourse("");
    } catch (error) {
      alert("Failed to submit enquiry");
    }
  };

  return (
    <div className="login-bg">
      <div className="login-card">
        <h1 className="institute-name">K'log Institute</h1>
        <p className="tagline">Pay less. Learn more.</p>

        {/* LOGIN */}
        {!showSignup && !showEnquiry && (
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit" className="login-btn">
              Login

            </button>
            <button className="back-home-btn" onClick={() => navigate("/")}>
  Back to Home
</button>
          </form>
          

        )}

        {/* SIGN UP */}
        {showSignup && (
          <form onSubmit={handleSignup}>
            <input
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit" className="login-btn">
              Create Account
            </button>
          </form>
        )}

        {/* ENQUIRY */}
        {showEnquiry && (
          <form onSubmit={handleEnquiry}>
            <input
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              placeholder="Course Interested"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              required
            />

            <button type="submit" className="login-btn">
              Submit Enquiry
            </button>
          </form>
        )}

        {/* LINKS */}
        <div className="enquiry">
          {!showSignup && !showEnquiry && (
            <>
              <button
                className="link-btn"
                onClick={() => setShowSignup(true)}
              >
                New here? Create Account
              </button>

              <button
                className="link-btn"
                onClick={() => setShowEnquiry(true)}
              >
                Course Enquiry
              </button>
            </>
          )}

          {(showSignup || showEnquiry) && (
            <button
              className="link-btn"
              onClick={() => {
                setShowSignup(false);
                setShowEnquiry(false);
              }}
            >
              ← Back to Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;





