
import "./Industries.css";

import medicalIcon from "../../assets/industries1.png";
import trainingIcon from "../../assets/industries2.png";
import fintechIcon from "../../assets/industries3.png";
import healthIcon from "../../assets/industries4.png";
import businessIcon from "../../assets/industries5.png";
import cleaningIcon from "../../assets/industries6.png";

const industries = [
  {
    title: "Medical & Pharma Services",
    text: "We research, plan, and execute – and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.",
    icon: medicalIcon,
  },
  {
    title: "Training & Fitness",
    text: "We research, plan, and execute – and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.",
    icon: trainingIcon,
    active: true,
  },
  {
    title: "Fintech",
    text: "We research, plan, and execute – and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.",
    icon: fintechIcon,
  },
  {
    title: "Health & Fitness",
    text: "We research, plan, and execute – and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.",
    icon: healthIcon,
  },
  {
    title: "Business & Services",
    text: "We research, plan, and execute – and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.",
    icon: businessIcon,
  },
  {
    title: "Cleaning Services",
    text: "We research, plan, and execute – and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.",
    icon: cleaningIcon,
  },
];

const Industries = () => {
  return (
    <section className="industries-section" id="portfolio">
      <h2 className="industries-title">Industries</h2>

      <div className="industries-grid">
        {industries.map((item, index) => (
          <div
            key={index}
            className={`industry-card ${item.active ? "active" : ""}`}
          >

            <img src={item.icon} alt={item.title} className="industry-icon" />
            <div>

            <h3>{item.title}</h3>
            <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Industries;
