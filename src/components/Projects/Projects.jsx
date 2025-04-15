// components/Projects/Projects.jsx
import styles from './Projects.module.css';
import ProjectCard from './ProjectsCard';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with payment integration and inventory management.',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: '/project1.jpg',
    demoUrl: '#',
    codeUrl: '#'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management with team features and progress tracking.',
    tags: ['React', 'Firebase', 'Redux'],
    image: '/project2.jpg',
    demoUrl: '#',
    codeUrl: '#'
  },
  {
    id: 3,
    title: 'Data Visualization Dashboard',
    description: 'Interactive dashboard for visualizing complex datasets with real-time updates.',
    tags: ['D3.js', 'TypeScript', 'Express'],
    image: '/project3.jpg',
    demoUrl: '#',
    codeUrl: '#'
  },
  {
    id: 4,
    title: 'AI-Powered Chatbot',
    description: 'Natural language processing chatbot integrated with customer support systems.',
    tags: ['Python', 'NLP', 'Flask'],
    image: '/project4.jpg',
    demoUrl: '#',
    codeUrl: '#'
  },
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>My Projects</h2>
        <div className={styles.projectsGrid}>
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;