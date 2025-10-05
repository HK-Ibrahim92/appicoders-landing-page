import "./CaseStudySection.css";

// assets
import bgImage from "../../assets/bgCaseStudy.png"; 

import mobile1 from "../../assets/casestudy1.png";
import mobile2 from "../../assets/casestudy2.png";
import mobile3 from "../../assets/casestudy3.png";

export default function CaseStudySection() {
  return (
    <section
      className="case-study"
      id="case-study"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="case-study-overlay">
        <div className="case-study-container">
          {/* Left content */}
          <div className="case-left">
            <div className="tags">
              <span>iOS Development</span>
              <span>Android Development</span>
              <span>UI/UX Design</span>
            </div>
            <h2>Caviar - Order Food Delivery</h2>
            <p>
              Get food delivered from curated lists of local restaurants right at
              your fingertips with Caviar. Enjoy quality dining at home and make
              any night a special occasion.
            </p>

               <div class="store-buttons">
        <a href="#" class="store-btn">
            <i class="fab fa-apple"></i>
            <div class="text-container">
                <span class="download-text">Download on the</span>
                <span class="store-name">App Store</span>
            </div>
        </a>
        
        <a href="#" class="store-btn">
            <i class="fab fa-google-play"></i>
            <div class="text-container">
                <span class="download-text">GET IT ON</span>
                <span class="store-name">Google Play</span>
            </div>
        </a>
    </div>

            <button className="view-btn">VIEW CASE STUDY</button>
          </div>

          {/* Right images */}
          <div className="case-right">
            <div className="mockup">
              <img src={mobile1} alt="Mobile mockup 1" />
            </div>
            <div className="mockup">
              <img src={mobile2} alt="Mobile mockup 2" />
            </div>
             <div className="mockup">
              <img src={mobile3} alt="Mobile mockup 3" />
            </div>

            {/* Navigation arrows */}
            <div className="nav-buttons">
              <button className="arrow up">↑</button>
              <button className="arrow down">↓</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
