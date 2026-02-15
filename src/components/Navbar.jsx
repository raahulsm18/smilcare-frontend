import logo from "../assets/logo.jpeg";
import "./Navbar.css";

function Navbar({ isAdmin, onLoginClick, onLogoutClick }) {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
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

      {/* NAV BUTTONS */}
      <div className="nav-buttons">
        <button onClick={() => scrollToSection("home")}>Home</button>
        <button onClick={() => scrollToSection("about")}>About Us</button>
        <button onClick={() => scrollToSection("services")}>Services</button>
        <button onClick={() => scrollToSection("appointment")}>Appointment</button>

        {!isAdmin ? (
          <button onClick={onLoginClick}>Admin Login</button>
        ) : (
          <button onClick={onLogoutClick}>Logout</button>
        )}
      </div>

    </div>
  );
}

export default Navbar;
