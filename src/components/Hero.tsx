"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.imageContainer}>
        <Image
          src="/images/home.jpg" // A vibrant, culturally rich hero image
          alt="A vibrant Indian wedding scene"
          fill
          style={{ objectFit: 'cover' }}
          priority
          quality={90}
        />
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.content}>
        <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          Love in Full Colour
        </motion.h1>
        <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
        >
            Photography in Dallas & Beyond
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;