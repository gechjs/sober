import React, { useState, useRef } from "react";
import styles from "./Contact.module.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const nameInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://gizachewm.com/sendmail.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData),
      });
      console.log(response)

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const handleAddressClick = () => {
    window.open(
      "https://www.google.com/maps/place/7060+145th+St+W,+Apple+Valley,+MN+55124"
    );
  };

  const focusNameInput = () => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Contact Us</h2>
          <p className={styles.sectionSubtitle}>
            Reach out to learn more about our services and how we can assist you
            with your needs.
          </p>
        </div>

        <div className={styles.contactContent}>
          {/* Contact Form */}
          <div className={styles.formColumn}>
            <div className={styles.formCard1}>
              <div className={styles.formCard2}>
                <form className={styles.form} onSubmit={handleSubmit}>
                  <p className={styles.formHeading}>Get In Touch</p>

                  {submitStatus === "success" && (
                    <div className={styles.successMessage}>
                      <i className="fas fa-check-circle"></i>
                      Thank you for your message. We'll get back to you soon.
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className={styles.errorMessage}>
                      <i className="fas fa-exclamation-circle"></i>
                      There was an error sending your message. Please try again.
                    </div>
                  )}

                  <div className={styles.formField}>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={styles.inputField}
                      placeholder="Your full name"
                      required
                      ref={nameInputRef}
                    />
                  </div>

                  <div className={styles.formField}>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={styles.inputField}
                      placeholder="Your email address"
                      required
                    />
                  </div>

                  <div className={styles.formField}>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={styles.inputField}
                      placeholder="Subject"
                      required
                    />
                  </div>

                  <div className={styles.formField}>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={styles.inputField}
                      placeholder="How can we help you?"
                      rows="3"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className={styles.sendMessageBtn}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-spinner fa-spin"></i>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className={styles.infoColumn}>
            <div className={styles.infoCard1}>
              <div className={styles.infoCard2}>
                <div className={styles.contactInfo}>
                  <div className={styles.infoBox}>
                    <div className={styles.infoHeader}>
                      <h3>Contact Information</h3>
                      <p>
                        We're here to answer any questions you may have about
                        our services.
                      </p>
                    </div>

                    <div className={styles.infoItem}>
                      <div className={styles.infoIcon}>
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <div className={styles.infoContent}>
                        <h4>Visit Us</h4>
                        <p
                          className={styles.clickableAddress}
                          onClick={handleAddressClick}
                          style={{ cursor: "pointer" }}
                        >
                          7060 145th, street west <br /> Apple Valley MN 55124
                        </p>
                      </div>
                    </div>

                    <div className={styles.infoItem}>
                      <div className={styles.infoIcon}>
                        <i className="fas fa-phone"></i>
                      </div>
                      <div className={styles.infoContent}>
                        <h4>Call Us</h4>
                        <p>651-240-5828</p>
                      </div>
                    </div>

                    <div className={styles.infoItem}>
                      <div className={styles.infoIcon}>
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div className={styles.infoContent}>
                        <h4>Email Us</h4>
                        <p
                          style={{ cursor: "pointer" }}
                          onClick={focusNameInput}
                        >
                          info@freshstarthouse.com
                        </p>
                      </div>
                    </div>

                    <div className={styles.infoItem}>
                      <div className={styles.infoIcon}>
                        <i className="fas fa-clock"></i>
                      </div>
                      <div className={styles.infoContent}>
                        <h4>Business Hours</h4>
                        <ul className={styles.hoursList}>
                          <li>
                            <span style={{ marginRight: "10px" }}>
                              Monday - Friday
                            </span>
                            <span>9:00 AM - 5:00 PM</span>
                          </li>
                          <li>
                            <span>Saturday</span>
                            <span>10:00 AM - 2:00 PM</span>
                          </li>
                          <li>
                            <span>Sunday</span>
                            <span>10:00 AM - 2:00 PM</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
