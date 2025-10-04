import "./ServicesSection.css";

// Import images properly
import mobileAppImg from "../../assets/editing.png";
import aiImg from "../../assets/artificial-intelligence1.png";
import webImg from "../../assets/web-optimization1.png";
import blockchainImg from "../../assets/programmer.png";
import arImg from "../../assets/augmented-reality1.png";
import mvpImg from "../../assets/mvp.png";
import grouplaptop from "../../assets/Group.png";


// Background images
import bgTop from "../../assets/Rectangle2.png";     // top curved red
import bgBottom from "../../assets/Rectangle3.png"; // bottom transition

export default function ServicesSection() {
    const services = [
        {
            img: mobileAppImg,
            title: "Custom Mobile Applications",
            desc: "iOS, Android and Wearable Apps",
        },
        {
            img: aiImg,
            title: "Artificial Intelligence",
            desc: "Innovative AI & ML Solutions",
        },
        {
            img: webImg,
            title: "Custom Web Development",
            desc: "Robust Websites & Progressive Web Apps",
        },
        {
            img: blockchainImg,
            title: "Blockchain Development",
            desc: "Custom Blockchain Solutions",
        },
        {
            img: arImg,
            title: "Augmented Reality",
            desc: "Fantastic AR Apps",
        },
        {
            img: mvpImg,
            title: "MVP Development",
            desc: "For Startups & Entrepreneurs",
        },
    ];

    return (
        <section className="services-section" id="services">
                <div className="services-container">
                    {/* Heading */}
                    <div className="services-header">
                        <div    >

                        <h2>Our Services</h2>
                        <p>Get to know about what we’re good at.</p>
                        </div>
                    </div>

                    {/* Services Grid */}
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <div key={index} className="service-card">
                                <div className="service-box">
                                    <div className="service-img">
                                    <img   src={service.img} alt={service.title} />
                                    </div>
                                <div>
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                                </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
                <div className="right-group-image">
<img src={grouplaptop} alt="" />
                </div>
        </section>
    );
}
