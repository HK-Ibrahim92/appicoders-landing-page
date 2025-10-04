import "./HeroSection.css";
import heroImg from "../../assets/Mobile-Mockup.png"; // left side image
import bgImg from "../../assets/Rectangle.png";
import bgImg1 from "../../assets/Rectangle1.png";



export default function HeroSection() {
  return (
    <div className="hero-section">
    <section
      className="hero"
      id="home"
    //   style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="overlay">
        <div className="hero-container">
          
          {/* Left: Image */}
          <div className="hero-left">
            <img src={heroImg} alt="Hero" />
          </div>

          {/* Right: Text */}
          <div className="hero-right">
            <h1>Leading the Way in App Development Innovation</h1>
            <p>
            We build Android & iOS Mobile Apps that cater all your business needs and take it on the next level.
            </p>
            <button className="hero-btn">GET A FREE QUOTE</button>
          
<div className="arrow-btn left">
  <i className="fa-solid fa-arrow-left"></i>
</div>

<div className="arrow-btn right">
  <i className="fa-solid fa-arrow-right"></i>
</div>

          </div>

        </div>
      </div>
      <div>
        
      </div>
    </section>
    </div>
  );
}
