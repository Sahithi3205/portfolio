
import React, { useEffect, useState } from "react";

function Home() {
  // Typing animation
  const fullText = "Computer Science Engineering Student";
  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;

    const typing = setInterval(() => {
      i++;
      setText(fullText.slice(0, i));

      if (i >= fullText.length) {
        clearInterval(typing);
      }
    }, 60);

    return () => clearInterval(typing);
  }, []);

  // Scroll animation
  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* HERO SECTION */}
      <div className="hero">
        <img
          src={process.env.PUBLIC_URL + "/profile.jpg"}
          alt="Sahithi Pinnamaraju"
          className="profile-img"
        />

        <h1>Sahithi Srilalitha Pinnamaraju</h1>

        <p className="subtitle">{text}</p>

        {/* CONTACT INFORMATION */}
        <div className="contact-blocks">
          <div className="block">
            9000076464
          </div>

          <div className="block">
            sahithi3205.pinnamaraju@gmail.com
          </div>

          <div className="block">
            se23ucse201@mahindrauniversity.edu.in
          </div>

          <div className="block">
            github.com/Sahithi3205
          </div>

          <div className="block">
            linkedin.com/in/sahithi-pinnamaraju-a1566828b
          </div>
        </div>
      </div>

      {/* MAIN SECTION */}
      <div className="grid-section">

        {/* ABOUT ME */}
        <div
          className="card"
          onClick={(e) =>
            e.currentTarget.classList.toggle("active")
          }
        >
          <h2>About Me</h2>

          <p>
            I am a Computer Science Engineering student at
            Mahindra University, graduating in 2027.
            I am interested in software engineering,
            full-stack development, and building applications
            that solve real-world problems.
          </p>

          <p>
            I enjoy working on projects involving web
            development, application development, databases,
            and machine learning. I also have an interest in
            UI/UX design and creating applications that are
            simple and accessible to users.
          </p>
        </div>

        {/* AREAS OF INTEREST */}
        <div
          className="card"
          onClick={(e) =>
            e.currentTarget.classList.toggle("active")
          }
        >
          <h2>Areas of Interest</h2>

          <p>
            Software Engineering • Full-Stack Development •
            Web Development • UI/UX Design • Machine Learning
          </p>
        </div>

        {/* TECHNICAL SKILLS */}
        <div
          className="card"
          onClick={(e) =>
            e.currentTarget.classList.toggle("active")
          }
        >
          <h2>Technical Skills</h2>

          <p>
            <strong>Programming:</strong> Python • JavaScript •
            Java • C
          </p>

          <p>
            <strong>Frontend:</strong> React • HTML • CSS
          </p>

          <p>
            <strong>Backend:</strong> Node.js • Express.js •
            Java Servlets • JSP • JDBC
          </p>

          <p>
            <strong>Databases:</strong> MySQL • MongoDB
          </p>

          <p>
            <strong>Machine Learning:</strong> PyTorch •
            Pandas • NumPy
          </p>

          <p>
            <strong>Tools:</strong> Git • GitHub • Docker • Figma
          </p>
        </div>

        {/* PROJECT 1 */}
        <div
          className="card"
          onClick={(e) =>
            e.currentTarget.classList.toggle("active")
          }
        >
          <h2>
            Sahaaya — Senior Citizen Digital Services App
          </h2>

          <p>
            Worked on an accessibility-focused application
            designed to help senior citizens access essential
            digital services. The application includes
            medication reminders, emergency SOS features,
            authentication, and multilingual support.
            Focused on designing simple, user-friendly
            interfaces for older users.
          </p>

          <p>
            <strong>Tech:</strong> Android • Firebase •
            Node.js • UI/UX
          </p>
        </div>

        {/* PROJECT 2 */}
        <div
          className="card"
          onClick={(e) =>
            e.currentTarget.classList.toggle("active")
          }
        >
          <h2>Student Information System</h2>

          <p>
            Developed a web-based application to manage
            student registration, course enrollment,
            grades, and attendance. Used Java Servlets
            and JSP for application functionality, with
            JDBC and MySQL for database connectivity
            and student record management.
          </p>

          <p>
            <strong>Tech:</strong> Java • JSP •
            Servlets • JDBC • MySQL
          </p>
        </div>

        {/* PROJECT 3 */}
        <div
          className="card"
          onClick={(e) =>
            e.currentTarget.classList.toggle("active")
          }
        >
          <h2>Human Annotator Disagreement Prediction</h2>

          <p>
            Worked on a deep learning project to study
            disagreement in human image annotations
            using the CIFAR-10H dataset. Used ResNet-18,
            entropy-based analysis, model evaluation,
            and Grad-CAM visualizations to understand
            model predictions.
          </p>

          <p>
            <strong>Tech:</strong> Python • PyTorch •
            ResNet-18 • CIFAR-10H
          </p>
        </div>

        {/* PROJECT 4 */}
        <div
          className="card"
          onClick={(e) =>
            e.currentTarget.classList.toggle("active")
          }
        >
          <h2>React To-Do Application</h2>

          <p>
            Developed an interactive To-Do application
            using React and JavaScript, allowing users
            to add, view, and delete tasks. Worked with
            reusable components, state management,
            and API integration to create a simple
            and responsive user interface.
          </p>

          <p>
            <strong>Tech:</strong> React • JavaScript •
            HTML • CSS • Vite
          </p>
        </div>

        {/* INTERNSHIP EXPERIENCE */}
        <div
          className="card"
          onClick={(e) =>
            e.currentTarget.classList.toggle("active")
          }
        >
          <h2>Internship Experience</h2>

          <h3>SagarSoft — Python Intern</h3>

          <p>June 2025 – July 2025 | Hyderabad</p>

          <p>
            Worked on Python-based data analysis and
            prediction tasks involving data cleaning,
            preprocessing, and exploratory analysis
            using Pandas and NumPy. Gained experience
            testing workflows and evaluating model
            outputs using performance metrics.
          </p>

          <p>
            <strong>Tech:</strong> Python • Pandas • NumPy
          </p>
        </div>

      </div>
    </div>
  );
}

export default Home;
