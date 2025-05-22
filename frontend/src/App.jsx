import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";

function App() {
  return (
    <>
    <Navbar />
    <main>
      <Hero />
      <About />
      <Contact />
    </main>
    <Footer />
    </>
  )
}

export default App;