import { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/Logo-Final-White.png"; // put your logo in assets

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Desktop Menu */}
        <div className="navbar-right">        
            <nav className={`navbar-links ${isOpen ? "open" : ""}`}>
        <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#whychoseus">Why Choose Us</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#products">Products</a>
          <a href="#testimonial">Testimonial</a>
          <a href="#technologies">Technologies</a>
          <a href="#contact">Contact</a>
        </nav>
        <span className="contact-btn">📞 +92 300 1234567</span>

        </div>
        {/* Hamburger for mobile */}
        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Bottom Contact Bar */}
    
    </header>
  );
}
