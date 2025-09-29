// src/components/Testimonials/Testimonials.js
import React, { useState } from "react";
import styles from "./Testimonials.module.css";

function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Renee N.",
      quote:
        "My name is Renee, and I am an alcoholic and addict. I came to the Fresh Start House and I am writing this as I prepare to leave 3 months later. The people in the house have all taught me lessons that are valuable. Each one is different, but our journey in recovery is the same.",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Marlaina T.",
      quote:
        "I came to Fresh Start House 8 months ago from jail with nothing but a little bit of hope that this house could help me change my life. Since I came here, I have gotten full custody of my 2-year-old son who now lives with me. I have a full-time job and my son attends daycare full time.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Krissy J.",
      quote:
        "My name is K.J. and I am a Butterfly! Thanks to the guidance of the house manager, I was shoved in the right direction. She was my rock, always pulling me back down to earth. I owe a lot to Fresh Start House, I'm grateful for the opportunity to have experienced the growth I accomplished while living here.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Success Stories</h2>
        <p className={styles.sectionSubtitle}>
          Hear from individuals who have transformed their lives through our
          program.
        </p>

        <div className={styles.testimonialContainer}>
          <div className={styles.testimonialCard}>
            <div className={styles.quoteIcon}>
              <i className="fas fa-quote-left"></i>
            </div>
            <p className={styles.quote}>
              "{testimonials[currentTestimonial].quote}"
            </p>
            <div className={styles.author}>
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
              />
              <h4>{testimonials[currentTestimonial].name}</h4>
            </div>
          </div>

          <div className={styles.navigation}>
            <button onClick={prevTestimonial} className={styles.navButton}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <div className={styles.dots}>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.dot} ${
                    index === currentTestimonial ? styles.activeDot : ""
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
            <button onClick={nextTestimonial} className={styles.navButton}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
