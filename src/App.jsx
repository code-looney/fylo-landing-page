import Header from "./components/Header";
import Hero from "./components/Hero";
import CTA from "./components/CTA";
import Cards from "./components/Cards";
import FileStorage from "./components/FileStorage";
import Reviews from "./components/Reviews";

export default function App() {
  return (
    <div className=" font-sans">
      <Header />
      <Hero />
      <CTA />
      <Cards />
      <FileStorage />
      <Reviews />
    </div>
  )
}