
import { useState } from "react";
import { NavLink } from "react-router-dom";
import TNSLogo from './assets/TNS-LOGO.png';
import './Navbar.css';

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="nav">
        <div className="logo-container">
          <NavLink to="/">
            <img src={TNSLogo} alt="logo" className="logo" />
          </NavLink>
        </div>
        <div className={`menu-icon ${isMobileMenuOpen ? "open" : ""}`} onClick={handleMenuToggle}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className={`nav-links ${isMobileMenuOpen ? "nav-links-mobile" : ""}`}>
          <li>
            <NavLink to="about" activeClassName="active">About Us</NavLink>
          </li>
          <li>
            <NavLink to="work-with-us" activeClassName="active">Work With Us</NavLink>
          </li>
          <li>
            <NavLink to = "consult" activeClassName="active"> Consulting</NavLink>
          </li>
          <li>
            <NavLink to="blog" activeClassName="active">Blog</NavLink>
          </li>
          <li className="last">
            <NavLink to="strategy" activeClassName="active">Free Discovery Call</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
