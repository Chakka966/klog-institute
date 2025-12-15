import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to Course Portal</h1>
      <p>Learn skills. Grow your career.</p>

      <Link to="/login">
        <button>Login</button>
      </Link>

      <br /><br />

      <Link to="/register">
        <button>New Here? Register</button>
      </Link>
    </div>
  );
}

export default Home;
