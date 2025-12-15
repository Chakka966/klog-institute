import React from "react";
import "./Home.css";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      <div className="home">

        {/* HERO SECTION */}
        <section className="hero fade-in">
          <h1>Learn Skills That Matter</h1>
          <p>Professional courses to build your future</p>
          <button className="primary-btn">Explore Courses</button>
        </section>

        {/* COURSES SECTION */}
        <section className="courses-preview slide-up">
          <h2>Popular Courses</h2>

          <div className="course-list">
            <div className="course-card hover-card">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
                alt="Java Course"
              />
              <h3>Java</h3>
              <p>₹8000</p>
            </div>

            <div className="course-card hover-card">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
                alt="Web Development"
              />
              <h3>Web Development</h3>
              <p>₹10000</p>
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section className="why-us fade-in">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>✔ Industry Experts</li>
            <li>✔ Real-time Projects</li>
            <li>✔ Placement Guidance</li>
          </ul>
        </section>

      </div>
    </>
  );
}

export default Home;
