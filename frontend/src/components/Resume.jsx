import React from 'react';

export const Resume = () => (
  <div className="resume">
    <header className="resume-header">
      <h1>Rebecca Kuhlman</h1>
    </header>
    <section className="objective">
      <h2>Objective</h2>
      <p>To obtain a position as a software engineer post-undergrad to kick-start my career as a lifetime learner in computer science, data science, and machine learning.</p>
    </section>
    <section className="work-experience">
      <h2>Work Experience</h2>
      <div>
        <h3>Lab Technician, SMU Deason Innovation Gym</h3>
        <p>August 2021 – Present</p>
        <ul>
          <li>Trained dozens on how to operate various machines, provided certification tests.</li>
          <li>Advised on dozens of patron projects, focusing on safety and design.</li>
          <li>Held and designed workshops to teach new skills and crafts.</li>
        </ul>
      </div>
      <div>
        <h3>Technology Intern, Infosys Strategic Technology Group</h3>
        <p>Summer 2023</p>
        <ul>
          <li>Acted as project manager in the InStep program, leading a full-stack project.</li>
          <li>Used Flask and React libraries for web app development connecting to a GPT model.</li>
        </ul>
      </div>
    </section>
    <section className="education">
      <h2>Education</h2>
      <p>Southern Methodist University, B.S. Computer Science with AI/ML specialization, B.S. Data Science, Minor in Mathematics</p>
      <p>GPA: 3.67</p>
    </section>
    <section className="skills">
      <h2>Skills</h2>
      <p>Programming Languages: Python, C/C++, Java, React JS, SQL, Bootstrap, Matlab, etc.</p>
    </section>
    <section className="activities">
      <h2>Activities</h2>
      <p>Marketing Officer, HackSMU planning committee</p>
    </section>
  </div>
);

export default Resume;
