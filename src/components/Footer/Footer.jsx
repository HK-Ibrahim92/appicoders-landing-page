
import "./Footer.css";

import logo from "../../assets/appicoders_footer_logo.png"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Left column */}
        <div className="footer-col footer-brand">
          <img src={logo} alt="Appicoders Inc." className="footer-logo" />

          <h4 className="footer-heading mt16">Contact Us</h4>
          <p className="muted">Tel: +1 (800) 826-8018</p>
          <p className="muted">Email: info@appicoders.com</p>

          <div className="socials">
            <a href="#" aria-label="Facebook" className="social">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Twitter/X" className="social">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="#" aria-label="LinkedIn" className="social">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Middle column */}
        <div className="footer-col">
          <h4 className="footer-heading">About</h4>
          <ul className="footer-list">
            <li><a href="#">HOME</a></li>
            <li><a href="#">ABOUT US</a></li>
            <li><a href="#">CONTACT US</a></li>
          </ul>
        </div>

        {/* Right column */}
        <div className="footer-col">
          <h4 className="footer-heading">Appicoders Services</h4>
          <ul className="footer-list bullets">
            <li><a href="#">IPHONE APPLICATION DEVELOPMENT</a></li>
            <li><a href="#">ANDROID APPLICATION DEVELOPMENT</a></li>
            <li><a href="#">ENTERPRISE APP DEVELOPMENT</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="copyright">
        © 2025 APPICODERS. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
};

export default Footer;
