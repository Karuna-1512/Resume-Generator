import './Template3.css'
const Template3 = ({resumeData}) => {
const skillsArray = resumeData.skills.split(',');


  return (
    <>
      <div className="grid-resume-container">
        <div className="grid-resume">
          {/* Header Section */}
          <header className="header-section">
            <h1 className="name">{resumeData.personalDetails.name}</h1>
            <div className="contact-grid">
              <div className="contact-item">{resumeData.personalDetails.location}</div>
              <div className="contact-item">{resumeData.personalDetails.email}</div>
              <div className="contact-item">{resumeData.personalDetails.mobile}</div>
              <div className="contact-item">{resumeData.personalDetails.linkedIn}</div>
              <div className="contact-item">{resumeData.personalDetails.github}</div>
              <div className="contact-item">{resumeData.personalDetails.website}</div>
            </div>
          </header>






          {/* Sidebar */}
          <div className="sidebar">


            {/* Skills Section */}
            <section className='sec'>
              <h2 className="section-title">Skills</h2>
              <div className="skills-grid">
                {skillsArray.map((skill, index) => (
                  <div key={index} className="skill-item">{skill.trim()}</div>
                ))}
              </div>
            </section>


            {/* Education Section */}
            <section className='sec'>
              <h2 className="section-title">Education</h2>
              {resumeData.education.map((edu, index) => (
                <div key={index} className="education-item">
                  <h3 className="school">{edu.school}</h3>
                  <div className="education-details">{edu.duration}</div>
                  <p className="grade">{edu.grade}</p>
                </div>
              ))}
            </section>


           
          </div>


          {/* Main Content */}
          <div className="main-content">
            {/* Summary Section */}
            <section className='sec'>
              <h2 className="section-title">Professional Summary</h2>
              <p className="summary-text">{resumeData.summary}</p>
            </section>


            {/* Experience Section */}
            <section className='sec'>
              <h2 className="section-title">Professional Experience</h2>
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="experience-item">
                  <div className="job-header">
                    <h3 className="position">{exp.position}</h3>
                    <div className="company-duration">
                      <span className="company">{exp.company}</span>
                      <span className="duration">{exp.duration}</span>
                    </div>
                  </div>
                  <p className="description">{exp.description}</p>
                </div>
              ))}
            </section>


             <section className='sec'>
              <h2 className="section-title">Projects</h2>
              {resumeData.projects.map((project, index) => (
                <div key={index} className="project-item">
                  <h3 className="project-name">{project.name}</h3>
                  <div className="technologies">{project.technologies}</div>
                  <p className="project-description">{project.description}</p>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </>
  );
};


export default Template3;
