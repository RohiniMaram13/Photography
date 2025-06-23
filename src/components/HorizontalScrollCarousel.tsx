"use client";
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import styles from './HorizontalScrollCarousel.module.css';

const featuredImages = [
  { src: '/images/BabyBump.jpg', title: 'Baby Bump & Gender Reveal' },
  { src: '/images/housewarming.jpg', title: 'House Warming Ceremonies' },
  { src: '/images/halfsaree.jpg', title: 'Half Saree Functions' },
  { src: '/images/nature.jpg', title: 'Street Photography' },
 
];

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  
  // Map vertical scroll progress to horizontal movement
  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-80%']);

  return (
    <section ref={targetRef} className={styles.container}>
      <div className={styles.stickyWrapper}>
        <div className={styles.heading}>
  <h2>Capturing Life Milestones</h2>
  <p>From vibrant celebrations to quiet, everyday moments.</p>
</div>
        <motion.div style={{ x }} className={styles.carousel}>
          {featuredImages.map((img, index) => (
            <div key={index} className={styles.card}>
              <Image 
                src={img.src} 
                alt={img.title} 
                width={600} 
                height={800} 
                className={styles.image}
              />
              <h3>{img.title}</h3>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollCarousel;