import { useState } from "react";
import logo from "../assets/logo.jpeg";
import "./Navbar.css";

function Navbar({ isAdmin, onLoginClick, onLogoutClick }) {

  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // close menu after click (mobile)
    }
  };

  return (
    <div className="navbar">

      {/* LOGO */}
      <div className="logo" onClick={() => scrollToSection("home")}>
        <img
          src={logo}
          alt="Gaviranga Logo"
          className="logo-img"
        />
      </div>

      {/* HAMBURGER ICON */}
      <div 
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* NAV BUTTONS */}
      <div className={`nav-buttons ${menuOpen ? "active" : ""}`}>
        <button onClick={() => scrollToSection("home")}>Home</button>
        <button onClick={() => scrollToSection("about")}>About Us</button>
        <button onClick={() => scrollToSection("services")}>Services</button>
        <button onClick={() => scrollToSection("appointment")}>Appointment</button>

        {!isAdmin ? (
          <button onClick={() => {
            onLoginClick();
            setMenuOpen(false);
          }}>
            Admin Login
          </button>
        ) : (
          <button onClick={() => {
            onLogoutClick();
            setMenuOpen(false);
          }}>
            Logout
          </button>
        )}
      </div>

    </div>
  );
}

export default Navbar;
