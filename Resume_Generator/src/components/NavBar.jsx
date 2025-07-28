import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <div className="container">
      <h1 className="logo">ResumeGen</h1>
      <div className="navlinks">
        <Link to="/home">Home</Link>
        <Link to="/edit">EditResume</Link>
        <Link to="/preview">Preview</Link>
      </div>
    </div>
  );
}

export default NavBar;
