import "./ResumeForm.css";

function ResumeForm({ resumeData, setResumeData }) {
  console.log("Resume Data:", resumeData);

  function addBlock(section, fields) {
    setResumeData({ ...resumeData, [section]: [...resumeData[section], fields] });
  }

  function removeBlock(section, index) {
    const data = resumeData[section].filter((_, i) => i !== index);
    setResumeData({ ...resumeData, [section]: data });
  }

  function updateFeild(section, field, value) {
    setResumeData({ ...resumeData, [section]: { ...resumeData[section], [field]: value } });
  }

  function updateValue(section, value) {
    setResumeData({ ...resumeData, [section]: value });
  }

  function updateArrayFeild(section, index, field, value) {
    const data = resumeData[section];
    const updatedData = data.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
    setResumeData({ ...resumeData, [section]: updatedData });
  }

  function saveData() {
    localStorage.setItem("resume", JSON.stringify(resumeData));
  }

  return (
    <div className="form-container">
      {/* Personal Details */}
      <div className="section">
        <h2 className="title">Personal Details</h2>
        <div className="input-group">
          <input type="text" placeholder="Enter your name" value={resumeData.personalDetails.name} onChange={(e) => updateFeild("personalDetails", "name", e.target.value)} />
          <input type="text" placeholder="Enter your email" value={resumeData.personalDetails.email} onChange={(e) => updateFeild("personalDetails", "email", e.target.value)} />
          <input type="text" placeholder="Enter your github" value={resumeData.personalDetails.github} onChange={(e) => updateFeild("personalDetails", "github", e.target.value)} />
          <input type="text" placeholder="Enter your linkedIn" value={resumeData.personalDetails.linkedIn} onChange={(e) => updateFeild("personalDetails", "linkedIn", e.target.value)} />
          <input type="text" placeholder="Enter your website" value={resumeData.personalDetails.website} onChange={(e) => updateFeild("personalDetails", "website", e.target.value)} />
          <input type="text" placeholder="Enter your location" value={resumeData.personalDetails.location} onChange={(e) => updateFeild("personalDetails", "location", e.target.value)} />
          <input type="text" placeholder="Enter your role" value={resumeData.personalDetails.role} onChange={(e) => updateFeild("personalDetails", "role", e.target.value)} />
          <input type="text" placeholder="Enter your mobile" value={resumeData.personalDetails.mobile} onChange={(e) => updateFeild("personalDetails", "mobile", e.target.value)} />
        </div>
      </div>

      {/* Professional Summary */}
      <div className="section">
        <h2 className="title">Professional Summary</h2>
        <textarea placeholder="Enter your professional summary in two or three lines" value={resumeData.summary} onChange={(e) => updateValue("summary", e.target.value)} />
      </div>

      {/* Experience */}
      <div className="section">
        <h2 className="title">Experience</h2>
        <button onClick={() => addBlock("experience", { company: "", position: "", duration: "", description: "" })}
          className="add">
          Add Experience
        </button>
        {resumeData.experience.map((exp, index) => (
          <div key={index}>
            <input type="text" placeholder="Enter company" value={exp.company} onChange={(e) => updateArrayFeild("experience", index, "company", e.target.value)} />
            <input type="text" placeholder="Position" value={exp.position} onChange={(e) => updateArrayFeild("experience", index, "position", e.target.value)} />
            <input type="text" placeholder="Duration" value={exp.duration} onChange={(e) => updateArrayFeild("experience", index, "duration", e.target.value)} />
            <input type="text" placeholder="Description" value={exp.description} onChange={(e) => updateArrayFeild("experience", index, "description", e.target.value)} />
            {resumeData.experience.length > 1 && <button onClick={() => removeBlock("experience", index)}>Remove</button>}
          </div>
        ))}
      </div>

      {/* Education */}
      <div className="section">
        <h2 className="title">Education</h2>
        <button   className="add"
        onClick={() => addBlock("education", { school: "", duration: "", grade: "" })}>
          Add Education
        </button>
        {resumeData.education.map((edu, index) => (
          <div key={index}>
            <input type="text" placeholder="Enter school name" value={edu.school} onChange={(e) => updateArrayFeild("education", index, "school", e.target.value)} />
            <input type="text" placeholder="Enter duration" value={edu.duration} onChange={(e) => updateArrayFeild("education", index, "duration", e.target.value)} />
            <input type="text" placeholder="Enter grade" value={edu.grade} onChange={(e) => updateArrayFeild("education", index, "grade", e.target.value)} />
            {resumeData.education.length > 1 && <button className="remove"
             onClick={() => removeBlock("education", index)}>Remove</button>}
          </div>
        ))}
      </div>

      {/* Projects */}
      <div className="section">
        <h2 className="title">Projects</h2>
        <button  className="add"
         onClick={() => addBlock("projects", { name: "", technologies: "", description: "" })}>
          Add Projects
        </button>
        {resumeData.projects.map((proj, index) => (
          <div key={index}>
            <input type="text" placeholder="Name" value={proj.name} onChange={(e) => updateArrayFeild("projects", index, "name", e.target.value)} />
            <input type="text" placeholder="Technologies" value={proj.technologies} onChange={(e) => updateArrayFeild("projects", index, "technologies", e.target.value)} />
            <input type="text" placeholder="Add description" value={proj.description} onChange={(e) => updateArrayFeild("projects", index, "description", e.target.value)} />
            {resumeData.projects.length > 1 && <button className="remove"
             onClick={() => removeBlock("projects", index)}>Remove</button>}
          </div>
        ))}
      </div>

      {/* Skills */}
      <div className="section">
        <h2 className="title">Skills</h2>
        <textarea placeholder="Enter your skills" value={resumeData.skills} onChange={(e) => updateValue("skills", e.target.value)} />
      </div>

      <div className="section">
        <button className="add1"
        onClick={saveData}>Save</button>
      </div>
    </div>
  );
}

export default ResumeForm;
