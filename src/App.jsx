import Header from "./components/Header";
import Hero from "./components/Hero";
import CTA from "./components/CTA";
import Cards from "./components/Cards";
import FileStorage from "./components/FileStorage";
import Testimonials from "./components/Testimonials";
import Container from "./components/Container";

export default function App() {
  return (
    <Container className=" font-sans">
      <Header />
      <Hero />
      <CTA />
      <Cards />
      <FileStorage />
      <Testimonials />
    </Container>
  )
}