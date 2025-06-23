// src/components/FeaturedWork.tsx
"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './FeaturedWork.module.css';

// NEW: Updated array with your requested categories
const galleries = [
  { 
    title: 'Baby Bump & Gender Reveal', 
    description: 'Celebrating new beginnings', 
    image: '/images/BabyBump.jpg' // New image
  },
  { 
    title: 'Half Saree Function', 
    description: 'A vibrant coming-of-age', 
    image: '/images/halfsaree.jpg' // New image
  },
  { 
    title: 'House Warming', 
    description: 'Blessing the new home', 
    image: '/images/housewarming.jpg' // New image
  },
  { 
    title: 'Nature', 
    description: 'Capturing the beauty of the outdoors', 
    image: '/images/nature.jpg' // New image
  },
];

const FeaturedWork = () => {
  return (
    <section className={styles.featuredWork}>
      <div className={styles.heading}>
        {/* NEW: Updated heading text */}
        <h2>Capturing Lifes Milestones</h2>
        <p>From quiet, personal moments to joyous celebrations, each event has a unique story to tell.</p>
      </div>
      <div className={styles.grid}>
        {galleries.map((gallery, index) => (
          <motion.div 
            key={gallery.title} 
            className={styles.card}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={gallery.image}
                alt={gallery.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.cardContent}>
              <h3>{gallery.title}</h3>
              {/* NEW: Using description instead of location */}
              <span>{gallery.description}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedWork;