// src/components/Footer/Footer.js
import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          {/* Logo & About */}
          <div className={styles.footerLogo}>
            <div className={styles.logo}>
              <i className={`fas fa-leaf ${styles.logoIcon}`}></i>
              <span className={styles.logoText}>Fresh Start House</span>
            </div>
            <p>
              Helping individuals overcome addiction and rebuild their lives in
              a supportive, structured environment.
            </p>
            {/* <div className={styles.socialLinks}>
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div> */}
          </div>

          {/* Links */}
          <div className={styles.footerLinks}>
            <div className={styles.linkGroup}>
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <button onClick={() => scrollToSection("home")}>Home</button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("about")}>About</button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("mission")}>
                    Mission
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("services")}>
                    Services
                  </button>
                </li>
                
                <li>
                  <button onClick={() => scrollToSection("contact")}>
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4>Services</h4>
              <ul>
                <li>
                  <button onClick={() => scrollToSection("services")}>
                    Sober Living
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("services")}>
                    Community Support
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("services")}>
                    Structured Program
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("services")}>
                    Employment Assistance
                  </button>
                </li>
  
              </ul>
            </div>

            {/* Contact Info */}
            <div className={styles.linkGroup}>
              <h4>Contact Info</h4>
              <ul className={styles.contactInfoList}>
                <li>
                  <i className="fas fa-map-marker-alt"></i> 7060 145th Street
                  West, Apple Valley, MN 55124
                </li>
                <li>
                  <i className="fas fa-phone"></i> (651) 240-5828
                </li>
                <li>
                  <i className="fas fa-envelope"></i> info@freshstarthouse.com
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={styles.copyright}>
          <p>Copyright © 2025 Fresh Start House. All rights reserved.</p>
          <p>Powered by Hope & Determination</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
