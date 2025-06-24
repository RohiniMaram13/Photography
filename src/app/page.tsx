// src/app/page.tsx
import Hero from '@/components/Hero';
import FeaturedWork from '@/components/FeaturedWork';
import Bio from '@/components/Bio';
import Header from '@/components/Header';
import ContactForm from '@/components/ContactForm'; // <-- Import the new ContactForm
import styles from './page.module.css';

// The old CtaSection component is no longer needed.

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <FeaturedWork />
      <Bio />
      <ContactForm /> {/* <-- Use the new ContactForm component here */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>© {new Date().getFullYear()} Deep Depicts Photography</p>
          <div className={styles.footerLinks}>
            {/* Updated Instagram Link */}
            <a href="https://www.instagram.com/deepdepicts?igsh=dGNydGt4YXhzejZk&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              {/* Instagram Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              <span>Instagram</span>
            </a>
            {/* Updated Email Link */}
            <a href="mailto:deepdepicts@gmail.com">
              {/* Email Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <span>Email</span>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
