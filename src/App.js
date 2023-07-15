import React from "react";
import Nav from "./Components/Navbar";
import About from "./Components/About";
import Projects from "./Components/Project";
import Skills from "./Components/Skills";
import Testimonials from "./Components/Certification";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
    
    <Helmet>
        <title>Rishi Gupta | Frontend Developer</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
    <main className="text-gray-400 bg-gray-900 body-font">
      <Nav />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
    </>
  );
}

export default App;
