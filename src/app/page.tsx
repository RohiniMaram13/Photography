// src/app/page.tsx
import Hero from '@/components/Hero';
import FeaturedWork from '@/components/FeaturedWork';
import Bio from '@/components/Bio';
import styles from './page.module.css';

// A new simple CTA Component for this page
const CtaSection = () => {
    return (
        // We will add an ID here for the button to scroll to
        <section id="contact" className={`${styles.cta} pattern-bg`}>
            <div className={styles.ctaContent}>
                <span>Your Story Awaits</span>
                <h2>Lets Preserve Your Legacy</h2>
                <p>I am passionate about capturing the vibrancy and emotion of moments. If you connect with my work, I would be honoured to hear from you.</p>
                <button className={styles.button}>Inquire Now</button>
            </div>
        </section>
    )
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedWork />
      <Bio />
      <CtaSection />
      {/* START: Updated Footer Section */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>© {new Date().getFullYear()} Deep Depicts Photography</p>
          <div className={styles.footerLinks}>
            <a href="https://instagram.com/your_username" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              {/* This is an SVG icon for Instagram */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="mailto:your.email@example.com">
              your.email@example.com
            </a>
          </div>
        </div>
      </footer>
      {/* END: Updated Footer Section */}
    </main>
  );
}