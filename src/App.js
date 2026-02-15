import { useState, useEffect } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Appointment from "./components/Appointment";
import ViewAppointments from "./components/ViewAppointments";
import Footer from "./components/Footer";

function App() {
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // keep admin logged in after refresh
  useEffect(() => {
    const saved = localStorage.getItem("isAdmin");
    if (saved === "true") {
      setIsAdmin(true);
    }
  }, []);

  const handleAdminLoginSuccess = () => {
    localStorage.setItem("isAdmin", "true");
    setIsAdmin(true);
    setShowAdminLogin(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    setIsAdmin(false);
  };

  return (
    <div className="App">
      <Navbar
        isAdmin={isAdmin}
        onLoginClick={() => setShowAdminLogin(true)}
        onLogoutClick={handleLogout}
      />

      {isAdmin ? (
        <ViewAppointments />
      ) : (
        <>
          {/* SCROLL TARGETS */}
          <div id="home">
            <Home />
          </div>

          <div id="about">
            <About />
          </div>

          <div id="services">
            <Services />
          </div>

          <div id="appointment">
            <Appointment
              showAdminLogin={showAdminLogin}
              setShowAdminLogin={setShowAdminLogin}
              onAdminLoginSuccess={handleAdminLoginSuccess}
            />
          </div>
        </>
      )}

      <Footer />
    </div>
  );
}

export default App;
