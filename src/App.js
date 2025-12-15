/*import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";

function App() {
  const [role, setRole] = useState(null);
  const [page, setPage] = useState("login");

  function handleLogin(r) {
    setRole(r);
  }

  if (role === "admin") return <AdminDashboard />;
  if (role === "user") return <UserDashboard />;

  return (
    <>
      {page === "login" && (
        <Login
          onLogin={handleLogin}
          onRegister={() => setPage("register")}
        />
      )}

      {page === "register" && (
        <Register onBack={() => setPage("login")} />
      )}
    </>
  );
}

export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";

function App() {
  const [role, setRole] = useState(null);

  return (
    <Router>
      <Routes>

        
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login onLogin={setRole} />} />
        <Route path="/register" element={<Register />} />

       
        <Route
          path="/admin"
          element={role === "admin" ? <AdminDashboard /> : <Login onLogin={setRole} />}
        />

        <Route
          path="/user"
          element={role === "user" ? <UserDashboard /> : <Login onLogin={setRole} />}
        />

      </Routes>
    </Router>
  );
}

export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Login";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/user" element={<UserDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;*/
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./components/Login";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import CourseEnquiry from "./pages/CourseEnquiry";

function App() {
  return (
    <BrowserRouter>
    

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/course-enquiry" element={<CourseEnquiry />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/user" element={<UserDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

