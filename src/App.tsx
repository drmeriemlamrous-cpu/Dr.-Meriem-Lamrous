import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CV from "./components/CV";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <CV />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
