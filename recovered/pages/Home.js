import React, { useEffect, useState } from "react";

function Home() {

  // Typing animation
  const fullText = "Computer Science Engineering Student";
  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;

    const typing = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;

      if (i > fullText.length) clearInterval(typing);
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

      {/* HERO */}
      <div className="hero">
        <img 
  src={process.env.PUBLIC_URL + "/profile.jpg"} 
  alt="profile" 
  className="profile-img" 
/>

        <h1>Sahithi Srilalitha Pinnamaraju</h1>

        <p className="subtitle">{text}</p>

        <div className="contact-blocks">
          <div className="block">9000076464</div>
          <div className="block">sahithi3205.pinnamaraju@gmail.com</div>
          <div className="block">se23ucse201@mahindrauniversity.edu.in</div>
          <div className="block">github.com/Sahithi3205</div>
          <div className="block">linkedin.com/in/sahithi-pinnamaraju-a1566828b</div>
        </div>
      </div>

      {/* MAIN SECTION */}
      <div className="grid-section">

        {/* ABOUT */}
        <div className="card" onClick={(e) => e.currentTarget.classList.toggle("active")}>
          <h2>About Me</h2>
          <p>
            I am a Computer Science Engineering student at Mahindra University with an interest in UX design and web development. 
            I like building applications that are simple, easy to use, and solve real-world problems.
            I have worked on projects like a Senior Citizen Digital Services App, where the main focus was to make technology more accessible for users.
          </p>
        </div>

        {/* RESEARCH */}
        <div className="card" onClick={(e) => e.currentTarget.classList.toggle("active")}>
          <h2>Research Interests</h2>
          <p>UX Design, Web Development</p>
        </div>

        {/* SKILLS */}
        <div className="card" onClick={(e) => e.currentTarget.classList.toggle("active")}>
          <h2>Skills</h2>
          <p>HTML • CSS • Python • C</p>
        </div>

        {/* PROJECT 1 */}
        <div className="card" onClick={(e) => e.currentTarget.classList.toggle("active")}>
          <h2>Senior Citizen Digital Services App</h2>
          <p>
            A user-friendly app designed to help senior citizens easily use digital services.
          </p>
        </div>

        {/* PROJECT 2 */}
        <div className="card" onClick={(e) => e.currentTarget.classList.toggle("active")}>
          <h2>Student Information System</h2>
          <p>
            A system developed to manage and organize student records efficiently,
            including academic and personal information.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Home;
