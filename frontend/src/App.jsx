import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Hero from "./sections/Hero";

function App() {
  return (
    <>
    <Navbar />
    <main>
      <Hero />
      <About />
    </main>
    <Footer />
    </>
  )
}

export default App;