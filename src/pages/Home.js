import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import PageWrapper from "../components/PageWrapper";
import Navbar from "../components/Navbar";
import Slideshow from "../components/Slideshow";

function Home() {
  const navigate = useNavigate();
  const [students, setStudents] = useState(0);

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      count += 50;
      if (count >= 5000) {
        count = 5000;
        clearInterval(interval);
      }
      setStudents(count);
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <PageWrapper>
      <Navbar />

      <div className="home-container">

        {/* HERO SECTION */}
        <section className="hero">
          {/* Background slideshow */}
          <Slideshow />

          {/* Overlay text */}
          <div className="hero-content">
            <h1>Welcome to K'Log Institute</h1>
            <p>Learn. Grow. Succeed.</p>
          </div>
        </section>

        {/* ABOUT */}
        <section className="about">
          <h2>Why Choose Us?</h2>
          <p>
            We are a professional training institute offering industry-oriented
            courses with practical learning, expert mentors, and real-time
            projects.
          </p>

          <div className="stats">
            <div className="stat-box">
              <h3>10+</h3>
              <p>Years Experience</p>
            </div>

            <div className="stat-box">
              <h3>{students}+</h3>
              <p>Students Trained</p>
            </div>

            <div className="stat-box">
              <h3>100%</h3>
              <p>Placement Support</p>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="testimonials">
          <h2>What Our Students Say</h2>

          <div className="testimonial-list">
            <div className="testimonial-card">
              <p>
                "Affordable fees and excellent guidance. The practical sessions
                helped me crack interviews."
              </p>
              <h4>— Priya S</h4>
              <span>Web Development</span>
            </div>

            <div className="testimonial-card">
              <p>
                "Best institute for beginners. Friendly environment and strong
                support till course completion."
              </p>
              <h4>— Rahul M</h4>
              <span>Python</span>
            </div>

            <div className="testimonial-card">
              <p>"Placement guidance and interview support were excellent!"</p>
              <h4>— Karthik B</h4>
              <span>Java</span>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta">
          <h2>Ready to Start Your Career?</h2>
          <button onClick={() => navigate("/login")}>Get Started</button>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <div className="footer-content">
            <div>
              <h3>K'Log Institute</h3>
              <p>Professional IT Training Institute</p>
            </div>

            <div>
              <h4>Contact</h4>
              <p>Email: klogsara@yahoo.com</p>
              <p>Phone: +91 98414 66923</p>
            </div>

            <div>
              <h4>Location</h4>
              <p>Chennai, Tamil Nadu</p>
            </div>
          </div>

          <p className="footer-bottom">
            © 2025 K'Log Institute. All rights reserved.
          </p>
        </footer>
      </div>
    </PageWrapper>
  );
}

export default Home;


