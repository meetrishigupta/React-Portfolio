import React from "react";
import Nav from "./Components/Navbar";
import About from "./Components/About";
import Projects from "./Components/Project";
import Skills from "./Components/Skills";
import Testimonials from "./Components/Certification";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Nav />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
