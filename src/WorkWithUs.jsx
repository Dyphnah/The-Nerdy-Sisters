

import React from "react";
import './WorkWithUs.css'; 

export default function WorkWithUs() {
  return (
    <div className="work-with-us-container">
      <header className="header-section">
        <h1>Work With Us</h1>
        <p>Discover Our Services to Elevate Your Business</p>
      </header>

      <section className="services-section">
        <div className="service">
          <img src="/path/to/consulting-image.jpg" alt="Consulting Services" />
          <h2>Consulting Services</h2>
          <p>
            Our expert consultants provide tailored strategies to help you streamline your operations, improve productivity, and achieve your business goals.
          </p>
          <button onClick={() => window.location.href='/consult'}>Book a Consultation</button>
        </div>
        
        <div className="service">
          <img src="/path/to/va-image.jpg" alt="Virtual Assistant Services" />
          <h2>Virtual Assistant Services</h2>
          <p>
            Our dedicated sisters can help you with administrative tasks, digital marketing, and project management, freeing up your time to focus on what matters.
          </p>
          <button onClick={() => window.location.href='/'}>Explore Our Services</button>
        </div>
      </section>

      <section className="testimonials-section">
        <h2>What Our Clients Say</h2>
        <div className="testimonial">
          <p>"The consulting services were a game changer for my business!"</p>
          <cite>- Happy Client</cite>
        </div>
        <div className="testimonial">
          <p>"The VA services saved me so much time and effort!"</p>
          <cite>- Satisfied Customer</cite>
        </div>
      </section>

      <section className="contact-section">
        <h3 className="h3-1">Contact Us</h3>
        <p>If you have any questions or need more information, feel free to reach out!</p>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
}
