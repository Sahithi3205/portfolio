import React from "react";

function Projects() {
  return (
    <div className="section">

      <h1>Projects</h1>

      {/* PROJECT 1 */}
      <div className="project-card">
        <h3>Senior Citizen Digital Services App</h3>
        <p>
          A user-friendly app designed to help senior citizens easily use digital services.
        </p>

        {/* ✅ UPDATED TECH */}
        <p className="tech">
          Tech: Android • Firebase • Node.js
        </p>

        <a
          href="https://github.com/Sahithi3205/Sahaaya"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          View Project →
        </a>
      </div>

      {/* PROJECT 2 */}
      <div className="project-card">
        <h3>Student Information System</h3>
        <p>
          A system developed to manage and organize student records efficiently,
          including academic and personal information.
        </p>

        <p className="tech">
          Tech: Java • MySQL • Servlets
        </p>

        <a
          href="https://github.com/Sahithi3205/student-information-system"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          View Project →
        </a>
      </div>

    </div>
  );
}

export default Projects;