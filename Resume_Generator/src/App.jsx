import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import Resumeform from "./components/ResumeForm";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Template1 from "./components/Template1";
import Template2 from "./components/Template2";
import Template3 from "./components/Template3";
import Preview from "./components/PreviewPage";

function App() {
  const [resumeData, setResumeData] = useState({
    personalDetails: {
      name: "",
      location: "",
      email: "",
      linkedIn: "",
      mobile: "",
      github: "",
      website: "",
    },
    summary: "",
    experience: [
      { company: "", position: "", duration: "", description: "" }
    ],
    education: [
      { school: "", duration: "", grade: "" }
    ],
    projects: [
      { name: "", technologies: "", description: "" }
    ],
    skills: ""
  });

  useEffect(() => {
    const data = localStorage.getItem("resume");
    if (data) {
      setResumeData(JSON.parse(data));
    }
  }, []);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/edit"
          element={<Resumeform resumeData={resumeData} setResumeData={setResumeData} />}
        />
        <Route path="/preview" element={<Preview />} />
        <Route path="/preview/1" element={<Template1 data={resumeData} />} />
        <Route path="/preview/2" element={<Template1 resumeData={resumeData} />} />
        <Route path="/preview/3" element={<Template2 resumeData={resumeData} />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      
    </div>
  );
}

export default App;
