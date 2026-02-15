import InfoCards from "./InfoCards";

export default function Home() {
  return (
    <section className="hero" id="home">
      <h1>Welcome to Sri Gaviranga Dental Clinic</h1>
      <p>Your smile is our priority</p>

      {/* Info Cards Section */}
      <InfoCards />
    </section>
  );
}
