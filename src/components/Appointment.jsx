import { useState } from "react";
import API from "../services/api";
import "./Appointment.css";

export default function Appointment({
  showAdminLogin,
  setShowAdminLogin,
  onAdminLoginSuccess
}) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: ""
  });

  /* ----------------- HANDLE CHANGE ----------------- */
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name" && value.length > 30) return;

    if (name === "phone") {
      const digits = value.replace(/\D/g, "");
      if (digits.length > 10) return;
      setForm(prev => ({ ...prev, phone: digits }));
      return;
    }

    if (name === "date") {
      const day = new Date(value).getDay();
      if (day === 0) {
        alert("Clinic closed on Sunday");
        return;
      }
    }

    setForm(prev => ({ ...prev, [name]: value }));
  };

  /* ----------------- APPOINTMENT SUBMIT ----------------- */
  const handleSubmit = async () => {
    if (!form.name || !form.phone || !form.date) {
      alert("Fill all fields");
      return;
    }

    if (form.phone.length !== 10) {
      alert("Phone must be 10 digits");
      return;
    }

    try {
      const res = await API.post("/appointments", form);
      alert(`Appointment booked!\nToken: ${res.data.token}`);
      setForm({ name: "", phone: "", date: "" });
    } catch {
      alert("Error booking appointment");
    }
  };

  /* ----------------- ADMIN LOGIN ----------------- */
  const handleAdminLogin = () => {
    // TEMP login (replace with API later)
    onAdminLoginSuccess();
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <section id="appointment" className="appointment-section">

      {!showAdminLogin ? (
        <>
          <h2>Book Appointment</h2>

          <div className="appointment-form">
            <input
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
            />

            <input
              name="phone"
              placeholder="Enter phone number"
              value={form.phone}
              onChange={handleChange}
            />

            <input
              type="date"
              name="date"
              min={today}
              value={form.date}
              onChange={handleChange}
            />

            <button onClick={handleSubmit}>
              Book Appointment
            </button>
          </div>
        </>
      ) : (
        <>
          <h2>Admin Login</h2>

          <div className="appointment-form">
            <input placeholder="Admin Username" />
            <input type="password" placeholder="Password" />

            <button onClick={handleAdminLogin}>
              Login
            </button>

            <p
              style={{ cursor: "pointer", marginTop: "10px" }}
              onClick={() => setShowAdminLogin(false)}
            >
              ← Back to Appointment
            </p>
          </div>
        </>
      )}

    </section>
  );
}
