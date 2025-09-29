// src/components/About/About.js
import React, { useRef, useEffect } from "react";
import styles from "./About.module.css";
import facilityImage from "../../assets/brooke-cagle--uHVRvDr7pg-unsplash.jpg";

function About() {
  const aboutRef = useRef(null);
  const imageRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.animateIn);
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="about" className={styles.about} ref={aboutRef}>
      <div className={styles.floatingShapes}>
        <div className={styles.shape1}></div>
        <div className={styles.shape2}></div>
        <div className={styles.shape3}></div>
      </div>

      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.titleAccent}></span> About Fresh Start House
        </h2>

        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <p className={styles.introParagraph}>
              Fresh Start Sober Living was established to address the profound
              impact addiction has on individuals and families. Guided by
              compassion and a strong sense of responsibility, we are dedicated
              to providing a safe, structured environment where people can
              rebuild their lives, break the cycle of addiction, and move
              forward with hope and stability.
            </p>

            <div className={styles.missionStatement}>
              <div className={styles.missionIcon}>✨</div>
              <p>
                We believe that everyone deserves a second chance and the
                opportunity to build a fulfilling, substance-free life.
              </p>
            </div>

            <p>
              Our team of experienced professionals is committed to providing
              the highest quality care in a supportive, nurturing environment
              that promotes lasting recovery and personal growth.
            </p>
          </div>

          <div className={styles.aboutImage} ref={imageRef}>
            <div className={styles.imageContainer}>
              <img
                src={facilityImage}
                alt="Fresh Start House Facility"
                className={styles.mainImage}
              />
              <div className={styles.imageOverlay}></div>
              <div className={styles.imageFrame}></div>
            </div>

            <div className={styles.imageCaption}>
              <div className={styles.captionIcon}></div>
              <p>Our peaceful recovery environment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
