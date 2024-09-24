
import "./About.css";
import Deey from "./assets/Deey.jpg";
import Stella from "./assets/stella.jpeg";


export default function About() {
  return (
    <div className="about-container">
      <h2>Welcome to The Nerdy Sisters!</h2>
      <div className="about-text">
        <p>
          We’re excited to share a bit about our journey and the talented team behind our virtual assistant services.
        </p>
        <p>Founded in June 2024, The Nerdy Sisters was born from our passion for helping businesses thrive in a digital world. With a delightful blend of wit, wisdom, and a touch of geek charm, we are here to make your life easier.</p>
        <p>Our team is composed of dedicated sisters who bring a wealth of experience and expertise to the table. We believe that every business, no matter how small, has the potential to grow into something extraordinary. That’s why we focus on providing tailored support, from managing your administrative tasks to crafting engaging content and everything in between.</p>
        <p>We’re committed to fostering meaningful relationships with our clients, understanding their unique needs, and helping them succeed. With our combined skills and a shared vision of excellence, we aim to be your trusted partners in navigating the complexities of running a business.</p>
        <p>Join us on this journey as we work together to create a thriving community of entrepreneurs and innovators!</p>
      </div>
      <h2>Meet Our Able Team</h2>
      <div className="about-card">
        <img src={Deey} alt="Stella's Headshot" />
        <div>
         <h3>Dyphnah Nyamongo</h3>
        <h4>Owner & Founder</h4>
                  
          <p>
           Dyphnah is a dynamic professional with a passion for technology, agriculture, travel, mental health, and self-improvement. Over the past six years, she has honed her expertise in virtual assistance, graphic design, and digital marketing. Dyphnah also worked as a Tours and Travel Consultant, crafting memorable experiences in East Africa. At Three Hearts Veterinary Centre, she manages operations and marketing, and as the founder of The Nerdy Sisters, she leads design and development. Dyphnah’s recent venture into software development has broadened her skill set, empowering her to offer creative, tech-driven solutions. Her multifaceted experience and attention to detail position her as a valuable asset across various industries.
          </p>
        </div>
    </div>
    <div className="about-card">
        <img src={Stella} alt="Dyphnah's Headshot" />
        <div>
         <h3>Stella Nyamongo</h3>
        <h4>Veterinarian & Transcriber</h4>
                  
          <p>
            Stella is a highly skilled, compassionate, and dedicated veterinary surgeon who strives to provide the best possible care for her patients. With extensive practical experience, keen eye for detail, and a deep understanding of animal behavior, she is able to diagnose and treat a wide range of conditions. Stella is also running Three Hearts Agrovet, where she not only sells veterinary products but also offers expert advice to her customers, ensuring both animal health and client satisfaction.          
          </p>
        </div>
      </div>

    </div>
  );
}



