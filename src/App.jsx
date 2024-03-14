import Header from "./components/Header";
import Hero from "./components/Hero";
import CTA from "./components/CTA";
import Cards from "./components/Cards";
import FileStorage from "./components/FileStorage";
import Testimonials from "./components/Testimonials";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import BackgroundCurve from "./components/BackgroundCurve";

export default function App() {
  return (
    <Container className="bg-body font-sans">
      <Header />
      <Hero />
      <BackgroundCurve />
      <CTA />
      <Cards />
      <FileStorage />
      <Testimonials />
      <Newsletter />
      <Footer />
    </Container>
  )
}