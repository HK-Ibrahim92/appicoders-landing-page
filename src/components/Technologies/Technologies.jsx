
import "./Technologies.css";

import cloudImg from "../../assets/Technologies.png";

const Technologies = () => {
  return (
    <section className="technologies-section">
      <h2 className="tech-title">Technologies</h2>

      <div className="tech-row">
        {/* Left card */}
        <div className="tech-card">
          <div>
          <h3>Cloud Solutions</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisi libero,
            sollicitudin vel tempor sed, ullamcorper quis diam. Ut eros elit, luctus eu pulvinar a,
            lacinia a justo. Sed felis sapien, rutrum ut tempus quis, elementum eu dui.
          </p>
</div>
          <div className="accent">
            <span className="bar main"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>

        {/* Right image */}
        <div className="tech-visual">
          <img src={cloudImg} alt="Cloud Solutions" />
        </div>
      </div>
    </section>
  );
};

export default Technologies;
