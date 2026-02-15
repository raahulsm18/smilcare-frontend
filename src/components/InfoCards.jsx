import "./InfoCards.css";   // ⭐ EXACT NAME

function InfoCards() {
  return (
    <div className="info-section">
      <div className="info-card">
        <h4>Flexible Schedule</h4>
        <p>Easy appointment booking</p>
      </div>

      <div className="info-card">
        <h4>Best Price Guarantee</h4>
        <p>Affordable dental care</p>
      </div>

      <div className="info-card">
        <h4>Opening Hours</h4>
        <p><strong>Mon – Sat:</strong> 6:00 PM – 9:00 PM</p>
        <p className="holiday"><strong>Sunday:</strong> Holiday</p>
      </div>
    </div>
  );
}

export default InfoCards;
