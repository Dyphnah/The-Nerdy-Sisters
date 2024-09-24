import React from 'react';
import './Consulting.css'; 

const Consulting = () => {
  const packages = [
    {
      title: 'Admin Support Consulting',
      description: 'I will help you streamline your daily operations, set up workflows, and manage administrative tasks more efficiently.',
      fee: '$50 - $100/month',
    },
    {
      title: 'Social Media & Digital Marketing Strategy',
      description: 'I will guide you through building and managing an online presence, content creation, and increasing engagement.',
      fee: '$200 - $300/month',
    },
    {
      title: 'Tech Tools & Systems Setup',
      description: 'I will help you implement the best digital tools for productivity, websites, and workflow automation.',
      fee: '$100 - $250/month',
    },
    {
      title: 'E-commerce & Product Management Support',
      description: 'We assist small e-commerce businesses with store setup, inventory management, and product optimization.',
      fee: '$150 - $300/month',
    },
    {
      title: 'Virtual Assistant Mastermind Group',
      description: 'Share expertise with other virtual assistants and offer insights, tools, and resources for growing a VA business.',
      fee: '$50 - $150/month',
    },
    {
      title: 'Content Creation & Writing Support',
      description: 'Help clients with blog strategies, SEO, email newsletter writing, and social media content.',
      fee: '$100 - $200/month',
    },
    {
      title: 'Project Management Consulting',
      description: 'Teach clients how to manage projects, timelines, and resources using project management tools and methodologies.',
      fee: '$150 - $300/month',
    },
    {
      title: 'Client Relationship Management (CRM) Setup',
      description: 'Help clients set up and optimize CRM systems for better customer interaction and follow-ups.',
      fee: '$100 - $250/month',
    },
  ];

  return (
    <div className="consulting-packages">
      <h1>Consulting Packages</h1>
      <h2 className='h2-c'>Streamline Your Business with Accountability Partners. </h2>

      <p className='consultp'>Sometimes, you don’t need a virtual assistant—you just need someone to help keep you on track, streamline your processes, and be there when you need a shoulder to lean on. Our consulting packages are designed for individuals who want to boost their productivity and business efficiency with personalized guidance, without the need for ongoing administrative support.</p>
      <p className='consultp'>Whether you're an entrepreneur, small business owner, or e-commerce brand, we’re here to help you stay focused, tackle challenges, and simplify your workflows. From process optimization and project management to tech tools setup, we provide the strategic support you need to get the job done.</p>
      <div className="packages-container">
        {packages.map((pkg, index) => (
          <div className="package-card" key={index}>
            <h4>{pkg.title}</h4>
            <p className='consultp'>{pkg.description}</p>
            <p className="fee">{pkg.fee}</p>
            <div className="contact-options">
              <a
                href="https://calendly.com/your-calendly-link" // I will replace with my Calendly link
                className="btn calendly-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule on Calendly
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Consulting;
