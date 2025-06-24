"use client";

import { useState, useEffect } from 'react';
import styles from './Header.module.css';

const HEADER_HEIGHT = 96; // Update this value to match your header's true height in px

// Add this comment for user guidance:
// Make sure to add `scroll-margin-top: 96px;` to your #work, #about, and #contact sections in your CSS

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    // Helper function for smooth scrolling with header offset
    const handleScrollLink = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const yOffset = -HEADER_HEIGHT;
            const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
        setMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };
        document.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [menuOpen]);

    const headerClasses = `${styles.header} ${scrolled ? styles.scrolled : ''}`;
    const menuButtonClasses = `${styles.menuButton} ${menuOpen ? styles.open : ''}`;
    const mobileNavClasses = `${styles.mobileNavOverlay} ${menuOpen ? styles.open : ''}`;

    return (
        <>
            <header className={headerClasses}>
                <div className={styles.logo}>
                    <a href="#">Deep Depicts</a>
                </div>
                <nav className={styles.nav}>
                    <a href="#work" onClick={(e) => handleScrollLink(e, 'work')}>Work</a>
                    <a href="#about" onClick={(e) => handleScrollLink(e, 'about')}>About</a>
                    <a href="#contact" onClick={(e) => handleScrollLink(e, 'contact')}>Contact</a>
                </nav>
                <button className={menuButtonClasses} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                    <div className={styles.hamburgerLine}></div>
                    <div className={styles.hamburgerLine}></div>
                    <div className={styles.hamburgerLine}></div>
                </button>
            </header>
            
            <div className={mobileNavClasses}>
                <nav className={styles.mobileNavLinks}>
                    <a href="#work" onClick={(e) => handleScrollLink(e, 'work')}>Work</a>
                    <a href="#about" onClick={(e) => handleScrollLink(e, 'about')}>About</a>
                    <a href="#contact" onClick={(e) => handleScrollLink(e, 'contact')}>Contact</a>
                </nav>
            </div>
        </>
    );
};

export default Header;