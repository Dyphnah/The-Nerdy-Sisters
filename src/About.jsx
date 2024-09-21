
import React, { useRef } from 'react';
import DyphnahProfile from './assets/pic-1.jpg'; // Ensure you import the image correctly
// import './About.css'; 

export default function About() {
    const servicesRef = useRef(null);

    const scrollToServices = () => {
        servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <h1>This is our Page</h1>
            <div className="section-1">
                <img src={DyphnahProfile} className="bio" alt="Dyphnah Profile" />
                <div className="section-content">
                    <h1>Enjoy More Time and Less Stress with The Nerdy Sisters' Support!</h1>
                    <h2>
                        Step into the world of wit, wisdom, and a touch of geek charm with The Nerdy Sisters!
                    </h2>
                    <p>
                        Our combined expertise in Technical Writing, Copywriting, Web Development, Design, Print, Social Media Marketing, 
                        and Executive Assistance brings magic to your brand. 
                        Embrace the power of sisterly teamwork, and let’s turn your vision into reality.
                        <br />
                        Ready to make something extraordinary?
                    </p>
                    <button type="button" onClick={scrollToServices}>Explore Our Services</button>
                </div>
            </div>

            <div ref={servicesRef} className="services-section">
                <h2>Our Services</h2>
                {/* Services content goes here */}
            </div>
        </div>
    );
}




