// src/components/Bio.tsx
"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Bio.module.css';

const Bio = () => {
  // This function finds the contact section and smoothly scrolls to it.
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="about" className={styles.bio}>
    <section className={styles.bio}>
      <div className={styles.container}>
        <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Your personalized image path */}
          <Image
            src="/images/image.png"
            alt="A photo of the photographer, from Deep Depicts"
            width={450}
            height={600}
            style={{ objectFit: 'cover' }}
          />
        </motion.div>
        
        <motion.div
          className={styles.textWrapper}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          {/* Your personalized text content */}
          <span>Welcome, I am Glad You are Here</span>
          <h2>Deep Depicts</h2>
          <p>
            From my home base here in Dallas, Texas, I have always been captivated by telling stories. For me, photography is about capturing the genuine laughter during a family celebration or the quiet joy of a new beginning. My goal is to create authentic, vibrant photos that you and your family will treasure for a lifetime.
          </p>
          
          {/* The button now calls the scroll function when clicked */}
          <button onClick={handleScrollToContact} className={styles.button}>
            Contact Me for a Session
          </button>
        </motion.div>
      </div>
    </section>
    </section>
  );
};

export default Bio;
