import WCUBrain from "../../assets/WCU-Brain.png"
import WCUCredit from "../../assets/WCU-Credit.png"
import WCUTeam from "../../assets/WCU-Team.png"

import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <section className="why-choose-section">
      <h2 className="why-title">Why Choose Us?</h2>
      <p className="why-subtitle">
        With our unique approach and cost-effective solutions, your business will prosper because
        quality is the top priority for us.
      </p>

      <div className="why-cards">
        <div className="why-card">
          <div className="icon-box grey">
            <img src={WCUBrain} alt="" />
          </div>
          <h3>Focused Business Approach</h3>
          <p>
            We research, plan, and execute – and these qualities make Appicoders stand out from the
            crowd. We put the needs of our clients ahead of us.
          </p>
        </div>

        <div className="why-card active">
          <div className="icon-box red">
            <img src={WCUCredit} alt="" />

          </div>
          <h3>Professional Team</h3>
          <p>
            Our mobile development company has extremely professional & expert mobile app developers
            who specialize in 2D, 3D, & isometric apps for Android, iOS, & web app platforms.
          </p>
        </div>

        <div className="why-card">
          <div className="icon-box grey">
            <img src={WCUTeam} alt="" />

          </div>
          <h3>Flexible Payment Terms</h3>
          <p>
            Get your apps developed with the most affordable price and with our flexible payment
            terms, you pay as your project progresses.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
