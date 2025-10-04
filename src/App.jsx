import AboutSection from "./components/AboutSection/AboutSection";
import HeroSection from "./components/HeroSection/HeroSection";
import Layout from "./components/Layout/Layout";
import ServicesSection from "./components/ServicesSection/ServicesSection";

export default function App() {
  return (
    <Layout>

      <section >
        <HeroSection/>
        <AboutSection/>
        <ServicesSection/>
        <h1>Welcome to Appicoders</h1>
        <p>This is where the landing page content goes.</p>
      </section>
    </Layout>
  );
}
