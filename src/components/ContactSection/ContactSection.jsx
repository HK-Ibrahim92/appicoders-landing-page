import React from "react";
import "./ContactSection.css";
import contactImage from "../../assets/contact.png"; 
import btn_bg from "../../assets/btn-bg.png"; 


const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      {/* LEFT SIDE */}
      <div className="contact-left">
        <div className="contact-content">
          <h4 className="sub-heading">LET’S TALK</h4>
          <h2 className="main-heading">
            Got an idea?  Let’s get in touch!
          </h2>
          <p className="desc">
            Have queries? Not sure of your App Strategy? Discuss with us and
            we'll guide you the way forward.
          </p>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Email Address" />
            <input type="text" placeholder="Phone" />
            <textarea placeholder="Message" rows="3"></textarea>

            <button className="getintouch-btn" type="submit">
                <img src={btn_bg} alt="" />
                <span> LET’S GET IN TOUCH </span>
                </button>
          </form>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="contact-right">
        <img src={contactImage} alt="Contact" className="contact-img" />
        <div className="contact-info">
          <p>
            Please submit your inquiry and our App Development Strategist will
            contact you shortly
          </p>
          <div className="phone-info">
           <i className="fa-solid fa-phone phone-icon"></i>
          </div>
            <div>
              <h3 className="phone-no">+1-(800) 826 8018</h3>
              <span>info@appicoders.com</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
