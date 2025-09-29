// src/components/Requirements/Requirements.js
import React, { useState, useEffect, useRef } from "react";
import styles from "./Requirements.module.css";
import {
  FaCheckCircle,
  FaChevronDown,
  FaChevronUp,
  FaArrowRight,
  FaUserShield,
  FaShieldAlt,
  FaHandsHelping,
  FaHome,
  FaUsers,
  FaClock,
  FaMoneyBillWave,
  FaHeart,
} from "react-icons/fa";

// Import local images
import soberHome from "../../assets/sober-home.jpg";
import community from "../../assets/community.jpg";
import support from "../../assets/support.jpg";

function Requirements() {
  const [activeTab, setActiveTab] = useState("requirements");
  const [openFaqs, setOpenFaqs] = useState(new Set());
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);

  const requirements = [
    { text: "Be at least 18 years old.", icon: <FaUsers /> },
    { text: "Demonstrate a commitment to sobriety.", icon: <FaHeart /> },
    {
      text: "Agree to regular drug and alcohol testing.",
      icon: <FaShieldAlt />,
    },
    { text: "Adhere to house rules and curfews.", icon: <FaHome /> },
    {
      text: "Engage in recovery activities and support groups.",
      icon: <FaHandsHelping />,
    },
    { text: "Maintain financial responsibility.", icon: <FaMoneyBillWave /> },
    {
      text: "Respect the rights and privacy of other guests.",
      icon: <FaUserShield />,
    },
    {
      text: "Be self-sufficient in daily responsibilities.",
      icon: <FaClock />,
    },
    { text: "No recent history of violent behavior.", icon: <FaShieldAlt /> },
  ];

  const features = [
    {
      icon: <FaUserShield />,
      title: "Live-In Support",
      description:
        "24/7 on-site staff providing guidance, mentorship, and immediate support when needed.",
      image: support,
    },
    {
      icon: <FaShieldAlt />,
      title: "Safe Environment",
      description:
        "A secure, substance-free living space with regular monitoring to ensure everyone's safety.",
      image: soberHome,
    },
    {
      icon: <FaHandsHelping />,
      title: "Community Healing",
      description:
        "Peer support and shared experiences that foster connection and collective growth.",
      image: community,
    },
  ];

  const faqItems = [
    {
      question: "How do I apply?",
      answer:
        "You can apply by filling out our online application form, calling us directly at (651) 240-5828, or emailing us at info@freshstarthouse.com. Our team will schedule an initial assessment to determine if our program is the right fit for you.",
    },
    {
      question: "Is there a minimum length of stay?",
      answer:
        "Yes, we typically require a minimum 90-day commitment to support meaningful progress in recovery. Many residents choose to stay longer to strengthen their foundation before transitioning to independent living.",
    },
    {
      question: "Are visitors allowed at the home?",
      answer:
        "Yes, visitors are allowed during designated visiting hours. All visitors must be approved in advance and must follow our house rules. We prioritize maintaining a safe and recovery-focused environment for all residents.",
    },
    {
      question: "Do guests need to be sober before moving in?",
      answer:
        "Yes, Fresh Start House is a Level 2 sober living facility. Guests must arrive clean and sober and be committed to ongoing recovery. Verification of completion of a detox program or recent sobriety is required before admission.",
    },
  ];

  const tabs = [
    { id: "requirements", label: "Requirements", icon: <FaCheckCircle /> },
    { id: "features", label: "Our Features", icon: <FaHome /> },
    { id: "faq", label: "FAQ", icon: <FaUsers /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.offsetTop;
        const sectionHeight = sectionRef.current.offsetHeight;
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;

        if (scrollY > sectionTop - windowHeight * 0.5) {
          const progress = Math.min(
            1,
            (scrollY - sectionTop + windowHeight * 0.5) / (sectionHeight * 0.5)
          );
          setScrollProgress(progress);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleFaq = (index) => {
    const newSet = new Set(openFaqs);
    if (newSet.has(index)) {
      newSet.delete(index);
    } else {
      newSet.add(index);
    }
    setOpenFaqs(newSet);
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="requirements" className={styles.requirements} ref={sectionRef}>
      {/* Animated background elements */}
      <div className={styles.backgroundElements}>
        <div
          className={styles.floatingCircle}
          style={{ transform: `translateY(${scrollProgress * 50}px)` }}
        ></div>
        <div
          className={styles.floatingCircle2}
          style={{ transform: `translateY(${scrollProgress * -30}px)` }}
        ></div>
        <div
          className={styles.floatingCircle3}
          style={{ transform: `translateY(${scrollProgress * 40}px)` }}
        ></div>
      </div>

      <div className={styles.container}>
        <h2 className={styles.mainTitle}>
          Your Journey to Recovery
          <span className={styles.titleUnderline}></span>
        </h2>
        <p className={styles.mainSubtitle}>
          We provide the structure, support, and community needed for a
          successful recovery journey
        </p>

        {/* TAB BUTTONS - Redesigned as a connected pill group */}
        <div className={styles.tabButtons}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tabButton} ${
                activeTab === tab.id ? styles.active : ""
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className={styles.tabIcon}>{tab.icon}</span>
              <span className={styles.tabLabel}>{tab.label}</span>
              <span className={styles.tabHighlight}></span>
            </button>
          ))}
        </div>

        {/* CONTENT AREA */}
        <div className={styles.tabContent}>
          {/* REQUIREMENTS TAB */}
          {activeTab === "requirements" && (
            <div className={styles.requirementsContent}>
              <div className={styles.requirementsGrid}>
                {requirements.map((item, index) => (
                  <div
                    key={index}
                    className={styles.requirementCard}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={styles.requirementIconWrapper}>
                      <div className={styles.requirementIcon}>{item.icon}</div>
                    </div>
                    <p>{item.text}</p>
                    <div className={styles.requirementHoverEffect}></div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FEATURES TAB */}
          {activeTab === "features" && (
            <div className={styles.featuresContent}>
              <div className={styles.featuresGrid}>
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={styles.featureCard}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className={styles.featureImageContainer}>
                      <img src={feature.image} alt={feature.title} />
                      <div className={styles.featureOverlay}></div>
                      
                    </div>
                    <div className={styles.featureText}>
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                    <div className={styles.featureHoverEffect}></div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FAQ TAB */}
          {activeTab === "faq" && (
            <div className={styles.faqContent}>
              <div className={styles.faqGrid}>
                {faqItems.map((item, index) => {
                  const isOpen = openFaqs.has(index);
                  return (
                    <div
                      key={index}
                      className={`${styles.faqCard} ${
                        isOpen ? styles.open : ""
                      }`}
                    >
                      <div
                        className={styles.faqHeader}
                        onClick={() => toggleFaq(index)}
                      >
                        <h3>{item.question}</h3>
                        <span className={styles.faqToggle}>
                          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                        </span>
                      </div>
                      <div className={styles.faqAnswer}>
                        <p>{item.answer}</p>
                      </div>
                      <div className={styles.faqCardHover}></div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* CALL TO ACTION SECTION */}
        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <div className={styles.ctaText}>
              <h2>Ready to Begin Your Journey to Recovery?</h2>
              <p>
                Take the first step toward a sober, supportive living
                environment. Our team is here to help you through every step of
                the process.
              </p>
            </div>
            <button className={styles.ctaButton} onClick={scrollToContact}>
              <span>Get Started Today</span>
              <div className={styles.ctaButtonIcon}>
                <FaArrowRight />
              </div>
              <div className={styles.ctaButtonEffect}></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Requirements;
