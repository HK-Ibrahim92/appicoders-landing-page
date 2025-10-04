import "./AboutSection.css";

export default function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        
        {/* Left: Heading */}
        <div className="about-left">
          <h2>
            <span>Appicoders</span> – #1. Mobile App & Web Development Company in USA
          </h2>
        </div>

        {/* Right: Paragraph + Button */}
        <div className="about-right">
          <p>
            Welcome to Appicoders, your trusted partner for expert mobile app and
            web development. With over 10+ years of experience, we specialize in
            designing, developing, and marketing cutting-edge solutions for all
            major mobile platforms, including Android, iOS, and Windows.
          </p>
          <button className="about-btn">READ MORE</button>
        </div>

      </div>
    </section>
  );
}
