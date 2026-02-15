import cleaning from "./cleaning.jpg";
import rootCanal from "./rootcanal.jpg";
import braces from "./braces.jpg";
import implants from "./implants.jpg";
import cosmetic from "./cosmetics.jpg";
import emergency from "./emergency.jpg";


export default function Services() {
  return (
    <section className="services" id="services">
      {/* HEADING FIRST */}
      <h2 className="services-heading">Our Services</h2>

      {/* IMAGES BELOW */}
      <div className="services-grid">
        <div className="service-card">
          <img src={cleaning} alt="Teeth Cleaning" />
          <p>Teeth Cleaning</p>
        </div>

        <div className="service-card">
          <img src={rootCanal} alt="Root Canal Treatment" />
          <p>Root Canal Treatment</p>
        </div>

        <div className="service-card">
          <img src={braces} alt="Braces & Orthodontics" />
          <p>Braces & Orthodontics</p>
        </div>

        <div className="service-card">
          <img src={implants} alt="Dental Implants" />
          <p>Dental Implants</p>
        </div>

        <div className="service-card">
          <img src={cosmetic} alt="Cosmetic Dentistry" />
          <p>Cosmetic Dentistry</p>
        </div>

        <div className="service-card">
          <img src={emergency} alt="Emergency Dental Care" />
          <p>Emergency Dental Care</p>
        </div>
      </div>
    </section>
  );
}
