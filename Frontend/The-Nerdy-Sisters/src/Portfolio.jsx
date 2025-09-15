
import './Portfolio.css'; 

const projects = [
  {
    title: "The Nerdy Sisters'Website",
    description: 'A brief description of Project 1.',
    link: 'https://link-to-your-project1.com',
    image: 'https://via.placeholder.com/300x200' 
  },
  {
    title: 'Three Hearts Agrovet Website',
    description: 'A brief description of Project 2.',
    link: 'https://link-to-your-project2.com',
    image: 'https://via.placeholder.com/300x200' 
  },
  {
    title: 'Project 3',
    description: 'A brief description of Project 3.',
    link: 'https://link-to-your-project3.com',
    image: 'https://via.placeholder.com/300x200' 
  },
  
];

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h2>My Portfolio</h2>
      <p>Here are some of the projects I've worked on:</p>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;


