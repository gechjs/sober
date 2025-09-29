import React, { useState, useEffect, useRef } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHover, setActiveHover] = useState(null);
  const blobRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (blobRef.current) {
        const { clientX, clientY } = e;
        blobRef.current.animate(
          {
            left: `${clientX}px`,
            top: `${clientY}px`,
          },
          { duration: 3000, fill: "forwards" }
        );
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "mission", label: "Mission" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact", isSpecial: true },
  ];

  return (
    <>
      <div ref={blobRef} className={styles.blob}></div>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.container}>
          {/* Logo with animation */}
          <div className={styles.logo} onClick={() => scrollToSection("home")}>
            <div className={styles.logoIconWrapper}>
              <i className={`fas fa-seedling ${styles.logoIcon}`}></i>
              <div className={styles.logoPulse}></div>
            </div>
            <span className={styles.logoText}>
              Fresh Start House<span className={styles.logoAccent}></span>
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`${styles.mobileMenuBtn} ${menuOpen ? styles.open : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Navigation */}
          <nav
            className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}
            aria-label="Main navigation"
          >
            <ul className={styles.navList}>
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`${styles.navButton} ${
                      item.isSpecial ? styles.specialButton : ""
                    }`}
                    onMouseEnter={() => setActiveHover(item.id)}
                    onMouseLeave={() => setActiveHover(null)}
                    aria-label={`Scroll to ${item.label} section`}
                  >
                    {item.isSpecial && (
                      <span className={styles.buttonSparkle}></span>
                    )}
                    <span className={styles.buttonText}>{item.label}</span>
                    {!item.isSpecial && activeHover === item.id && (
                      <span className={styles.buttonHoverEffect}></span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;