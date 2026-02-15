import { useState } from "react";
import logo from "../assets/logo.jpeg";
import "./Navbar.css";

function Navbar({ isAdmin, onLoginClick, onLogoutClick }) {

  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    // Close menu first
    setMenuOpen(false);

    // Wait for menu to close before scrolling
    setTimeout(() => {
      const section = document.getElementById(id);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }, 150); // small delay
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

        <button onClick={() => scrollToSection("home")}>
          Home
        </button>

        <button onClick={() => scrollToSection("about")}>
          About Us
        </button>

        <button onClick={() => scrollToSection("services")}>
          Services
        </button>

        <button onClick={() => scrollToSection("appointment")}>
          Appointment
        </button>

        {!isAdmin ? (
          <button
            onClick={() => {
              setMenuOpen(false);
              setTimeout(() => onLoginClick(), 150);
            }}
          >
            Admin Login
          </button>
        ) : (
          <button
            onClick={() => {
              setMenuOpen(false);
              setTimeout(() => onLogoutClick(), 150);
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
