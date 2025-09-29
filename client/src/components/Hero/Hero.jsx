// src/components/Hero/Hero.js
import React, { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.css";
import heroImage from "../../assets/home_page.jpg";

function Hero() {
  const titleRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Calculate scroll progress for background effects
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollPercent = Math.min(scrollY / (windowHeight * 0.5), 1);
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      id="home" 
      className={styles.hero}
    >
      <div className={styles.heroBackground} style={{ opacity: 1 - scrollProgress * 0.5 }}>
        <div 
          className={styles.backgroundImage}
          style={{ 
            backgroundImage: `url(${heroImage})`,
            transform: `scale(${1 + scrollProgress * 0.1})`
          }}
        ></div>
        <div className={styles.backgroundGradient} style={{ opacity: 0.85 - scrollProgress * 0.3 }}></div>
        <div className={styles.floatingShapes}>
          <div className={styles.shape1}></div>
          <div className={styles.shape2}></div>
          <div className={styles.shape3}></div>
        </div>
      </div>
      
      <div className={styles.heroContent}>
        <div className={styles.titleContainer} ref={titleRef}>
          <h1 className={styles.heroTitle}>
           
            <span className={styles.titlePart4}>Fresh Start Sober Living</span>
          </h1>
        </div>
        
        <p className={styles.heroSubtitle}>
          A Place to Heal<span className={styles.highlight}></span>. A Place to Grow<span className={styles.highlight}></span>. A Place to Start Again<span className={styles.highlight}></span>.
        </p>
        
        <div className={styles.heroButtons}>
          <button
            className={styles.heroButtonPrimary}
            onClick={scrollToContact}
          >
            <span>Get Help Now</span>
            <div className={styles.buttonHoverEffect}></div>
          </button>
          <button
            className={styles.heroButtonSecondary}
            onClick={scrollToAbout}
          >
            <span>Learn More</span>
            <div className={styles.buttonHoverEffect}></div>
          </button>
        </div>
        
        <div className={styles.scrollIndicator}>
          <div className={styles.chevron}></div>
          <div className={styles.chevron}></div>
          <div className={styles.chevron}></div>
          <span>Scroll to explore</span>
        </div>
      </div>
      
      <div className={styles.interactiveElements}>
        <div onClick={scrollToContact} className={styles.interactiveCard}>
          <h3>Recovery Journey</h3>
          <p>Take the first step toward transformation</p>
        </div>
      </div>

      {/* New Animated Elements */}
      <div className={styles.animatedParticles}>
        {[...Array(15)].map((_, i) => (
          <div key={i} className={styles.particle}></div>
        ))}
      </div>
    </section>
  );
}

export default Hero;