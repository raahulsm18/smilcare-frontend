import { useState } from "react";
import logo from "../assets/logo.jpeg";
import "./Navbar.css";

function Navbar({ isAdmin, onLoginClick, onLogoutClick }) {

  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const navbar = document.querySelector(".navbar");

    if (section && navbar) {
      const navbarHeight = navbar.offsetHeight;

      const sectionPosition =
        section.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight;

      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth"
      });
    }

    setMenuOpen(false);
  };

  return (
    <div className="navbar">

      {/* LOGO */}
      <div className="logo" onClick={() => scrollToSection("home")}>
        <img src={logo} alt="Gaviranga Logo" />
      </div>

      {/* HAMBURGER */}
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
          <button
            onClick={() => {
              onLoginClick();
              setMenuOpen(false);
            }}
          >
            Admin Login
          </button>
        ) : (
          <button
            onClick={() => {
              onLogoutClick();
              setMenuOpen(false);
            }}
          >
            Logout
          </button>
        )}
      </div>

    </div>
  );
}

export default Navbar;
