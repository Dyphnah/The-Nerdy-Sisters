
import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';

export default function Footer() {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // To add newsletter subscription logic here (e.g., API call)
    alert("Thank you for subscribing to our newsletter!");
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-item map">
            <h3>Find Us</h3>
            {/* To replace with your actual map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345098823!2d144.95373531531582!3d-37.81720997975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f1e79d1%3A0x5045675218cedb0!2sYour%20Location!5e0!3m2!1sen!2sau!4v1626781370943!5m2!1sen!2sau"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          <div className="footer-item contact">
            <h3>Contact Us</h3>
            <p className="cp">Email: info@thenerdysisters.com</p>
            <p className="cp">Phone: +254794050309</p>
            <p className="cp">Address: Tree Twins Centre, Banana, Kiambu County</p>
          </div>

          <div className="footer-item newsletter">
            <h3>Stay Connected</h3>
            <p>Subscribe to our newsletter for the latest updates and offers</p>
            <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-button">Subscribe</button>
            </form>
          </div>

          <div className="footer-item quick-links">
            <h3>Quick Links</h3>
            <nav>
              <ul className="footer-nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="about">About Us</Link></li>
                <li><Link to="work-with-us">Work With Us</Link></li>
                <li><Link to="consult">Consulting</Link></li>
                <li><Link to="blog">Blog</Link></li>
                <li><Link to="strategy">Schedule a Strategy Session</Link></li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} The Nerdy Sisters. All Rights Reserved.</p>
          <p>Website designed by <strong>Dyphnah Nyamongo</strong></p>
        </div>
      </footer>
    </>
  );
}
