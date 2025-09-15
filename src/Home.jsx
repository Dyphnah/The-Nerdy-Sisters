
import React, { useRef } from 'react';
import DyphnahProfile from './assets/pic-1.jpg';
import './Home.css';
import design from './assets/design.jpg';
import FAQs from './FAQs';

export default function Home() {
  const servicesRef = useRef(null);

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="section-1">
        <div className="section-content">
          <h1>
            Enjoy More Time and Less Stress with <span>The Nerdy Sisters'</span> Support!
          </h1>
          <p>
            Feeling overwhelmed? Delegate your tasks to us and free up your schedule! Our combined expertise in Technical Writing, Copywriting, Web Development, Design, Social Media Marketing, and Executive Assistance brings magic to your brand. Embrace the power of sisterly teamwork and let’s turn your vision into reality.
          </p>
          <p>Ready to Ease Your Schedule and Save Time?</p>
          <button className="btn" type="button" onClick={scrollToServices}>
            Explore Our Services
          </button>
        </div>
        <div>
          <img src={DyphnahProfile} className="bio" alt="Dyphnah Profile" />
        </div>
      </div>
      <div className='more'>
        <h2 className='firsth2'>Finally, you can focus on what truly matters—growing your business!</h2>
        <p>Are you overwhelmed with tasks and in need of a reliable virtual assistant?</p>
        <p>Imagine having a dedicated partner who not only manages your daily tasks but also brings innovative solutions to simplify your workflow.</p>
        <p>With our unique approach, you’ll find that your business can run smoother, allowing you to focus on growth and creativity.</p>

        <div ref={servicesRef} className="services">
          <h2 className="title">Our Services</h2>
        </div>
        <section className="virtual-assistant-services">
          <div className="grid-container">
            <div className="service-item">
              <img src={design} alt="Administrative Support" />
              <h3>Admin Support</h3>
              <p>We’re here to make your life easier! With our email management and calendar scheduling, you’ll never miss an important message or appointment again. We’ll keep your files organized so you can quickly find what you need. Plus, we handle travel arrangements and follow up with clients, saving you time and reducing stress. Our project management support and task prioritization mean you can focus on growing your business while we take care of the details that keep everything running smoothly.</p>
              {/* <p className="price">Starting at $21 per hour</p> */}
              <a href="consult-page-url" className="cta-button">Book a Consultation</a>
            </div>
            <div className="service-item">
              <img src={design} alt="Content Creation" />
              <h3>Content Creation</h3>
              <p>We’ll bring your ideas to life through high-quality content creation! Whether you need engaging blog posts, informative technical documents, persuasive email copy, or compelling sales and landing pages, we’ve got you covered. Our team understands how to tailor content to resonate with your audience, ensuring it not only informs but also inspires action. Let us help you connect with your audience and elevate your brand through powerful storytelling and effective communication!</p>
              {/* <p className="price">Starting at $30</p> */}
              <a href="consult-page-url" className="cta-button">Book a Consultation</a>
            </div>
            <div className="service-item">
              <img src={design} alt="Front-end Development" />
              <h3>Front-end Development</h3>
              <p>With our technical expertise, we can create stunning, responsive designs that adapt seamlessly to any device. Using React & CSS, we build interactive user interfaces that enhance the user experience and engage your audience. Our flexible approach allows us to bring your unique vision to life while ensuring optimal performance.</p>
              {/* <p className="price">Starting at $60</p> */}
              <a href="consult-page-url" className="cta-button">Book a Consultation</a>
            </div>
            <div className="service-item">
              <img src={design} alt="Social Media Management" />
              <h3>Social Media Management</h3>
              <p>We’ll help you connect with your audience in meaningful ways! We'll craft tailored strategies to boost your online presence, increase engagement, and grow your brand. We handle everything from creating eye-catching content and scheduling posts to monitoring analytics and responding to followers.</p>
              {/* <p className="price">5 Posts per week from $100</p> */}
              <a href="consult-page-url" className="cta-button">Book a Consultation</a>
            </div>
            <div className="service-item">
              <img src={design} alt="Graphic Design" />
              <h3>Graphic Design</h3>
              <p>We love bringing creativity to life with graphic design! Whether you need stunning social media graphics, sleek presentations, or eye-catching promotional materials, we’ve got you covered. Our team blends creativity with simplicity, ensuring your visuals are not only engaging but also easy to understand.</p>
              {/* <p className="price">Starting at $20</p> */}
              <a href="consult-page-url" className="cta-button">Book a Consultation</a>
            </div> 
            <div className="service-item">
              <img src={design} alt="Transcription & Video Captioning" />
              <h3>Transcription & Video Captioning</h3>
              <p>We’re here to make transcription and video captioning hassle-free! Our team provides accurate and timely transcriptions of your audio or video files. We also specialize in video captioning, making your content accessible to a wider audience.</p>
              {/* <p className="price">Starting at $50 per audio hour</p> */}
              <a href="consult-page-url" className="cta-button">Book a Consultation</a>
            </div>          
          </div>
        </section>
        <h2 className='firsth2'>Not finding exactly what you need?</h2>
        <p>Explore our <span>All-in-One Virtual Assistant Packages</span>—perfect for combining multiple services into a single plan that’s tailored just for you!</p> 
        <section className="pricing-packages">
          <div className="grid-container">
            <div className="package">
              <h3>Basic Plan</h3>
              {/* <p className="rate">$399/month</p> */}
              <ul>
                <li>Up to 20 hours of support per month</li>
                <li>Switch Plans or Cancel Anytime</li>
                <li>Response time: Within 24 hours</li>
                <li>Access to all services</li>
              </ul>
              <a href="consult-page-url" className="cta-button">Book Consultation</a>
            </div>

            <div className="package">
              <h3>Standard Plan</h3>
              {/* <p className="rate">$750/month</p> */}
              <ul>
                <li>Up to 40 hours of support per month</li>
                <li>Switch Plans or Cancel Anytime</li>
                <li>Response time: Within 24 hours</li>
                <li>Access to all services</li>
              </ul>
              <a href="consult-page-url" className="cta-button">Book Consultation</a>
            </div>

            <div className="package">
              <h3>Premium Plan</h3>
              {/* <p className="rate">$1799/month</p> */}
              <ul>
                <li>Up to 100 hours of support per month</li>
                <li>Switch Plans or Cancel Anytime</li>
                <li>We overlap your time-zone</li>
                <li>Same day response time</li>
                <li>Access to All Services</li>
              </ul>
              <a href="consult-page-url" className="cta-button">Book Consultation</a>
            </div>
          </div>
        </section>
        <FAQs />
      </div>
    </>
  );
}
