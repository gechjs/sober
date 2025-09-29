import React, { useState } from 'react';
import styles from './Subscribe.module.css';

function Subscribe() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Email subscription logic would go here
    console.log('Subscribed with email:', email);
    alert('Thank you for subscribing to our newsletter!');
    setEmail('');
  };

  return (
    <section className={styles.subscribe}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Subscribe</h2>
        <p className={styles.subscribeText}>Sign up to hear from us.</p>
        <form onSubmit={handleSubmit} className={styles.subscribeForm}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.subscribeInput}
            placeholder="Email"
            required
          />
          <button type="submit" className={styles.subscribeButton}>Sign up</button>
        </form>
      </div>
    </section>
  );
}

export default Subscribe;