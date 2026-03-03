import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Patents from "./components/Patents";
import CV from "./components/CV";
import ResearchLibrary from "./components/ResearchLibrary";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Patents />
        <CV />
        <ResearchLibrary />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
