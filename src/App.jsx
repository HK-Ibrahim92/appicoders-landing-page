import AboutSection from "./components/AboutSection/AboutSection";
import CaseStudySection from "./components/CaseStudySection/CaseStudySection";
import ClientView from "./components/ClientView/ClientView";
import HeroSection from "./components/HeroSection/HeroSection";
import Industries from "./components/Industries/Industries";
import Layout from "./components/Layout/Layout";
import Products from "./components/Products/Products";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import Technologies from "./components/Technologies/Technologies";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";

export default function App() {
  return (
    <Layout>

      <section >
        <HeroSection/>
        <AboutSection/>
        <ServicesSection/>
        <CaseStudySection/>
        <WhyChooseUs/>
        <ClientView/>
        <Industries/>
        <Technologies/>
        <Products/>
        <h1>Welcome to Appicoders</h1>
        <p>This is where the landing page content goes.</p>
      </section>
    </Layout>
  );
}
