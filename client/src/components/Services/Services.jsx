import React, { useEffect, useRef } from "react";
import styles from "./Services.module.css";

function Services() {
  const services = [
    {
      icon: "fas fa-home",
      title: "Safe Sober Living",
      description:
        "Drug and alcohol-free environment with 24/7 support and supervision in a beautiful, comfortable home setting.",
    },
    {
      icon: "fas fa-users",
      title: "Community Support",
      description:
        "Peer support and communal living with weekly house meetings and group activities to foster connection and accountability.",
    },
    {
      icon: "fas fa-clipboard-list",
      title: "Structured Program",
      description:
        "Curfews, chore assignments, and structured routines that balance autonomy with accountability.",
    },
    {
      icon: "fas fa-briefcase",
      title: "Employment Assistance",
      description:
        "Job search support, career counseling, and connections to local employers to help residents achieve financial independence.",
    },
  ];

  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section id="services" ref={sectionRef} className={styles.services}>
      <div className={styles.backgroundContainer}>
        <div
          className={styles.parallaxBackground}
          // style={{ backgroundImage: `url(${servicesBackground})` }}
        ></div>
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Our Services</h2>
          <div className={styles.titleUnderline}></div>
          <p className={styles.sectionSubtitle}>
            We provide comprehensive support to help individuals rebuild their
            lives and achieve lasting recovery.
          </p>
        </div>

        <div className={styles.servicesContainer}>
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={styles.serviceCard}
            >
              <div className={styles.cardInner}>
                <div className={styles.cardFront}>
                  <div className={styles.serviceIcon}>
                    <i className={service.icon}></i>
                  </div>
                  <h3>{service.title}</h3>
                  <div className={styles.cardHoverIndicator}>
                    <div className={styles.cardHoverHint}>
                      <span>Hover to explore</span>
                      <div className={styles.hintArrow}></div>
                    </div>
                  </div>
                </div>

                <div className={styles.cardBack}>
                  <div className={styles.cardContent}>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>

              <div className={styles.cardGlow}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
