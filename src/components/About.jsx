import "./About.css";
import clinicImage from "../assets/clinic.jpg";

function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        
        <div className="about-image">
          <img src={clinicImage} alt="Clinic" />
        </div>

        <div className="about-content">
          <h1>About Us</h1>

          <p>
            Sri Gaviranga Dental Clinic is committed to providing high-quality
            dental care with a strong focus on patient comfort, safety, and
            satisfaction.
          </p>

          <p>
            We offer general dentistry, preventive care, cosmetic treatments,
            and emergency dental services.
          </p>

          <p>
            Our goal is to create healthy, confident smiles using modern
            techniques and compassionate care.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;
