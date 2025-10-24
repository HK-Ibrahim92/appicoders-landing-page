import React from "react";
import "./ClientView.css";
import clientImg from "../../assets/Client.png"; 

const ClientView = () => {
  return (
    <section className="testimonials-section" id="testimonial">
      <div className="overlay">
          <div className="quote-icon">❝</div>

      </div>
      <div className="testimonials-content">
        <div className="left-text">
          <h4 className="small-heading">CLIENT TESTIMONIALS</h4>
          <h2 className="main-heading">
            What our clients <br /> are Saying.
          </h2>
        </div>

        <div className="testimonial-card">
          <div className="card-header">
            <img src={clientImg} alt="Client" className="client-img" />
          <div className="quote-icon-client">❝</div>

            <div className="client-info">
              <h4>Scarlett Lawrence</h4>
              <div className="underline"></div>
            </div>
          </div>
          <p className="testimonial-text">
            Thank you Team Appingine you guys have a great understanding of what's current, and get
            things done very quickly compared to others. Reliable communication and qualitative
            suggestions on useful functionality during the planning stage made for a final product
            that surpassed initial expectations. Their project management is amazing, tight
            deadlines were reliably met without issue. Our strong recommendations if you’re looking
            for quality work.
          </p>
          <div className="dots">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientView;
