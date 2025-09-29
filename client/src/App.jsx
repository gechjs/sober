import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Mission from "./components/Mission/Mission";
import Services from "./components/Services/Services";
import Requirements from "./components/Requirements/Requirements";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.css";
import backgroundImage from "./assets/upstare.jpg";

function App() {
  return (
    <div
      className={styles.app}
      style={{
        backdropFilter: "blur(8px)",
        backgroundImage: `linear-gradient( 135deg,
    rgba(12, 14, 16, 0.5) 0%,
    rgba(40, 60, 34, 0.71) 100%), url(${backgroundImage})`,
      }}
    >
      <Header />
      <Hero />
      <About />
      <Mission />
      <Services />
      <Requirements />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
