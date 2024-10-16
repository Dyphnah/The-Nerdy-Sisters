
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from './assets/Logo-22.png';
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
            <img src={Logo} alt="logo" className="logo" />
          </NavLink>
        </div>
        <div className={`menu-icon ${isMobileMenuOpen ? "open" : ""}`} onClick={handleMenuToggle}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className={`nav-links ${isMobileMenuOpen ? "nav-links-mobile" : ""}`}>
          <li>
            <NavLink to="about" activeclassname="active">About Us</NavLink>
          </li>
          <li>
            <NavLink to="work-with-us" activeclassname="active">Work With Us</NavLink>
          </li>
          <li>
            <NavLink to = "consult" activeclassname="active"> Consulting</NavLink>
          </li>
          <li>
            <NavLink to="blog" activeclassname="active">Blog</NavLink>
          </li>
          <li >
            <NavLink to="portfolio" activeclassname="active">Portfolio</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
