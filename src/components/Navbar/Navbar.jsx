import { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/Logo-Final-White.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Desktop Menu */}
        <nav className="navbar-links-desktop">
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

        {/* Hamburger for mobile */}
        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(true)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Fullscreen Slider */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setIsOpen(false)}>
          &times;
        </button>

        <nav className="mobile-links">
          <a href="#home" onClick={handleLinkClick}>Home</a>
          <a href="#about" onClick={handleLinkClick}>About</a>
          <a href="#services" onClick={handleLinkClick}>Services</a>
          <a href="#whychoseus" onClick={handleLinkClick}>Why Choose Us</a>
          <a href="#portfolio" onClick={handleLinkClick}>Portfolio</a>
          <a href="#products" onClick={handleLinkClick}>Products</a>
          <a href="#testimonial" onClick={handleLinkClick}>Testimonial</a>
          <a href="#technologies" onClick={handleLinkClick}>Technologies</a>
          <a href="#contact" onClick={handleLinkClick}>Contact</a>
        </nav>
      </div>
    </header>
  );
}
