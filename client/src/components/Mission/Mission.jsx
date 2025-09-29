import React, { useRef, useEffect, useState } from "react";
import styles from "./Mission.module.css";

function Mission() {
  const missionRef = useRef(null);
  const valuesRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (missionRef.current) {
      observer.observe(missionRef.current);
    }

    if (valuesRef.current) {
      observer.observe(valuesRef.current);
    }

    // Mouse position tracker for interactive effects
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="mission" className={styles.mission} ref={missionRef}>
      {/* Interactive background elements */}
      <div className={styles.kineticBackground}></div>
      
      {/* Floating geometric shapes */}
      <div className={styles.floatingGeometry}>
        <div className={styles.geoShape1}></div>
        <div className={styles.geoShape2}></div>
        <div className={styles.geoShape3}></div>
        <div className={styles.geoShape4}></div>
      </div>
      
      {/* Mouse-following light effect */}
      <div 
        className={styles.mouseLight}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      ></div>
      
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <h2 className={styles.sectionTitle}>
            Our Mission
          </h2>
          
          <div className={styles.missionContent}>
            {/* <div className={styles.missionStatementWrapper}>
              <p className={styles.missionStatement}>
                Our mission is to provide safe, supportive, and structured sober living homes where individuals can find stability, recover with dignity, and build a foundation for lasting success.
              </p>
              <div className={styles.statementOrnament}></div>
            </div> */}
            <p className={styles.missionStatement}>
                Our mission is to provide safe, supportive, and structured sober living homes where individuals can find stability, recover with dignity, and build a foundation for lasting success.
              </p>
            
            <div className={styles.valuesGrid} ref={valuesRef}>
              <div className={styles.valueCard}>
                <div className={styles.valueIconWrapper}>
                  <div className={styles.valueIcon}>🤝</div>
                  <div className={styles.iconOrnament}></div>
                </div>
                <h3>Support</h3>
                <p>Creating a community of mutual support and accountability</p>
                <div className={styles.cardHalo}></div>
              </div>
              
              <div className={styles.valueCard}>
                <div className={styles.valueIconWrapper}>
                  <div className={styles.valueIcon}>🏠</div>
                  <div className={styles.iconOrnament}></div>
                </div>
                <h3>Safety</h3>
                <p>Providing a secure and substance-free environment</p>
                <div className={styles.cardHalo}></div>
              </div>
              
              <div className={styles.valueCard}>
                <div className={styles.valueIconWrapper}>
                  <div className={styles.valueIcon}>🌱</div>
                  <div className={styles.iconOrnament}></div>
                </div>
                <h3>Growth</h3>
                <p>Fostering personal development and life skills</p>
                <div className={styles.cardHalo}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;