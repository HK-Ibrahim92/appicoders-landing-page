
import "./Awards.css";

import award1 from "../../assets/award1.png";
import award2 from "../../assets/award2.png";
import award2top from "../../assets/award2top.png";
import award3 from "../../assets/award3.png";
import award4 from "../../assets/award4.png";

const Awards = () => {
  return (
    <section className="awards-section">
      <h2 className="awards-title">Awards and Recognitions</h2>

      <div className="awards-row">
        <div className="award">
          <img src={award1} alt="ITFirms Award" />
        </div>

     <div className="award-badge">
      <img className="badge-bg" src={award2} alt="Badge background" />

      <img className="badge-logo" src={award2top} alt="TopDevelopers crest" />

      <h4 className="badge-title">Top Mobile App<br/>Developers 2020</h4>
      <p className="badge-desc">
        Top Developers mentioned us in<br/>
        their top app development<br/>
        companies in the USA list.
      </p>
    </div>

        <div className="award">
          <img src={award3} alt="Clutch Award" />
        </div>

        <div className="award">
          <img src={award4} alt="AppFutura Award" />
        </div>
      </div>

      <div className="bottom-accent" />
    </section>
  );
};

export default Awards;
