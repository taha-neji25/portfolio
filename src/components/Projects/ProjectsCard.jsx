// components/Projects/ProjectCard.jsx
import styles from './Projects.module.css';

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectImage}>
        <img src={project.image} alt={project.title} />
      </div>
      <div className={styles.projectContent}>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.projectDescription}>{project.description}</p>
        <div className={styles.projectTags}>
          {project.tags.map((tag, index) => (
            <span key={index} className={styles.tag}>{tag}</span>
          ))}
        </div>
        <div className={styles.projectLinks}>
          <a href={project.demoUrl} className={styles.demoLink}>Live Demo</a>
          <a href={project.codeUrl} className={styles.codeLink}>View Code</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;