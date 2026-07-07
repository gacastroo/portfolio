import React, { Suspense, lazy } from "react";
import "./styles/global.css";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/layout/Navbar";
import Home from "./components/sections/Home";

const About = lazy(() => import("./components/sections/About"));
const Skills = lazy(() => import("./components/sections/Skills"));
const Experience = lazy(() => import("./components/sections/Experience"));
const Work = lazy(() => import("./components/sections/Work"));
const Services = lazy(() => import("./components/sections/Services"));
const Contact = lazy(() => import("./components/sections/Contact"));
const Footer = lazy(() => import("./components/layout/Footer"));

function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <main className="main">
        <Home />
        <Suspense fallback={null}>
          <About />
          <Skills />
          <Experience />
          <Work />
          <Services />
          <Contact />
          <Footer />
        </Suspense>
      </main>
    </LanguageProvider>
  );
}

export default App;
