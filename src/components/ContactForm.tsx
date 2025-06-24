// src/components/ContactForm.tsx
"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './ContactForm.module.css';

const ContactForm = () => {
    // Basic state to hold form data (can be expanded later)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone:'',
        eventType: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

   const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, eventType, message } = formData;

    const mailto = `mailto:deepdepicts@gmail.com?subject=Inquiry from ${encodeURIComponent(
        name
    )}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nType of Event: ${eventType}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailto;
    setSubmitted(true);
};
    return (
        <section id="contact" className={`${styles.contactSection} pattern-bg`}>
             <div className={styles.overlay}></div>
             <div className={styles.container}>
                <motion.div 
                    className={styles.heading}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                >
                    <span>Your Story Awaits</span>
                    <h2>Get In Touch</h2>
                    <p>I would be honoured to hear about your upcoming event. Please fill out the form below, and I&apos;ll get back to you as soon as possible.</p>
                </motion.div>

                <motion.form 
                    className={styles.form} 
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Full Name</label>
                        <input type="text" id="name" name="name" required onChange={handleChange} />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" name="email" required onChange={handleChange} />
                    </div>
                    <div className={styles.formGroup}>
    <label htmlFor="phone">Call Back Number</label>
    <input
        type="tel"
        id="phone"
        name="phone"
        required
        onChange={handleChange}
        pattern="[0-9+\-\s()]{7,}" // basic phone validation
        placeholder="e.g. +1 234 567 8901"
    />
</div>
                    <div className={styles.formGroup}>
                        <label htmlFor="eventType">Type of Event</label>
                        <select id="eventType" name="eventType" required onChange={handleChange}>
                            <option value="">Please select an option...</option>
                            <option value="Baby Bump / Gender Reveal">Baby Bump / Gender Reveal</option>
                            <option value="Half Saree Function">Half Saree Function</option>
                            <option value="House Warming">House Warming</option>
                            <option value="Street Photography">Street Photography</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="message">Your Message</label>
                        <textarea id="message" name="message" rows={5} required onChange={handleChange}></textarea>
                    </div>
                    {submitted && (
                        <motion.div 
                            className={styles.successMessage}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Thank you for your inquiry! I will get back to you shortly.
                        </motion.div>
                    )}
                    <button type="submit" className={styles.button}>Send Inquiry</button>
                </motion.form>
             </div>
        </section>
    );
};

export default ContactForm;
