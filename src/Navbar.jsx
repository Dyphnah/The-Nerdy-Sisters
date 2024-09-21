import { NavLink } from "react-router-dom";
import TNSLogo from './assets/TNS-LOGO.png';
import './Navbar.css'; 

export default function Navbar() {
  return (
    <>
      <nav className="nav">
        <div className="logo-container">
          <NavLink to="/">
               <img src={TNSLogo} alt="logo" className="logo" />
          </NavLink>
        </div>
        <ul className="nav-links">
          <li>
            <NavLink to="about">About Us</NavLink>
          </li>
          <li>
            <NavLink to="work-with-us">Work With Us</NavLink>
          </li>
          <li>
            <NavLink to="blog">Blog</NavLink>
          </li>
          <li className="last">
            <NavLink to="consult">Schedule a Call</NavLink>
          </li>        
        </ul>
      </nav>
    </>
  );
}
