
import React from "react";

const projects = [
  {
    title: "Sahaaya — Senior Citizen Digital Services App",
    description:
      "An accessibility-focused application designed to help senior citizens access digital services. Includes medication reminders, emergency SOS, authentication, and multilingual support, with a focus on simple and user-friendly interfaces.",
    tech: "Android • Firebase • Node.js • UI/UX",
    link: "https://github.com/Sahithi3205/Sahaaya"
  },
  {
    title: "Student Information System",
    description:
      "A web-based student management application supporting registration, course enrollment, grades, and attendance. Built using Java Servlets, JSP, JDBC, and MySQL for application functionality and database management.",
    tech: "Java • JSP • Servlets • JDBC • MySQL",
    link: "https://github.com/Sahithi3205/student-information-system"
  },
  {
    title: "Human Annotator Disagreement Prediction",
    description:
      "A deep learning project using CIFAR-10H to predict human disagreement in image classification. Used a modified ResNet-18 model, soft labels, entropy-aware analysis, and KL divergence to study uncertainty in predictions.",
    tech: "Python • PyTorch • ResNet-18 • CIFAR-10H",
    link: "https://github.com/Sahithi3205/Predcting-Human-Annotator-Disagreement"
  },
  {
    title: "React To-Do Application",
    description:
      "A React-based To-Do application developed using JavaScript and Vite, focusing on frontend development, reusable components, and interactive user interfaces.",
    tech: "React • JavaScript • HTML • CSS • Vite",
    link: "https://github.com/Sahithi3205/todo-frontend-sahithi"
  }
];

function Projects() {
  return (
    <div className="section">
      <h1>Projects</h1>

      {projects.map((project) => (
        <div className="project-card" key={project.title}>
          <h3>{project.title}</h3>

          <p>{project.description}</p>

          <p className="tech">
            <strong>Tech:</strong> {project.tech}
          </p>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View Project →
          </a>
        </div>
      ))}
    </div>
  );
}

export default Projects;
