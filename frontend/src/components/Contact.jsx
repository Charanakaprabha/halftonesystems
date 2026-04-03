import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import './Contact.css';

const ContactForm = () => {
    return (
        <form className="contact-form">
            <h3 className="form-title">Tell Us About Your Project</h3>
            <p className="form-subtitle">Fill in this form and one of our specialists will be in touch within one business day.</p>

            <div className="form-grid-dense">
                <div className="form-group">
                    <label>FIRST NAME *</label>
                    <input type="text" placeholder="Enter your first name" required />
                </div>
                <div className="form-group">
                    <label>LAST NAME *</label>
                    <input type="text" placeholder="Enter your last name" required />
                </div>
                <div className="form-group">
                    <label>BUSINESS EMAIL *</label>
                    <input type="email" placeholder="your@company.com" required />
                </div>
                <div className="form-group">
                    <label>PHONE NUMBER</label>
                    <input type="tel" placeholder="+91 98765 43210" />
                </div>
            </div>

            <div className="form-group full-width">
                <label>COMPANY / ORGANISATION</label>
                <input type="text" placeholder="Your company name" />
            </div>

            <div className="form-group full-width">
                <label>SERVICE AREA</label>
                <div className="service-options">
                    <label><input type="checkbox" /> Healthcare AI & Smart Ambulance Systems</label>
                    <label><input type="checkbox" /> EV Fleet & Sustainable Mobility</label>
                    <label><input type="checkbox" /> Smart Manufacturing & Industry 4.0</label>
                    <label><input type="checkbox" /> Enterprise AI & ERP Transformation</label>
                    <label><input type="checkbox" /> AI Solutions for MSMEs</label>
                    <label><input type="checkbox" /> E-commerce & Digital Platforms</label>
                    <label><input type="checkbox" /> Mobile App Development</label>
                    <label><input type="checkbox" /> Networking & Infrastructure</label>
                    <label><input type="checkbox" /> Strategic Technology Consulting</label>
                    <label><input type="checkbox" /> Other / General Enquiry</label>
                </div>
            </div>

            <div className="form-group full-width">
                <label>YOUR MESSAGE *</label>
                <textarea placeholder="Tell us about your project, goals, or the challenge you're looking to solve..." rows="5" required></textarea>
            </div>

            <button type="submit" className="btn btn-primary submit-btn">
                SEND MESSAGE <ArrowRight size={18} />
            </button>

            <div className="privacy-note">
                <ShieldCheck size={16} />
                <span>Your information is completely confidential. We will never share your details with third parties.</span>
            </div>
        </form>
    );
};

export const Contact = () => {
    const locations = [
        { country: "India", label: "Headquarters", flag: "https://flagcdn.com/w160/in.png" },
        { country: "USA", label: "Americas", flag: "https://flagcdn.com/w160/us.png" }
    ];

    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.1 }
        }
    };

    return (
        <section id="contact" className="contact section-padding">
            <div className="container">
                <motion.div
                    className="section-header text-center"
                >
                    <p className="section-subtitle-small">WE'RE READY TO CONNECT</p>
                    <h1 className="universal-hero-title" style={{ color: '#111827' }}>Let's Start a Conversation.</h1>
                    <p className="contact-intro">
                        Whether you have a bold vision, a complex challenge, or simply want to explore what's possible — our team is here, ready to listen and ready to deliver.
                    </p>
                </motion.div>

                <motion.div
                    className="contact-wrapper"
                >
                    <motion.div className="contact-form-wrapper glass-card huge-box">
                        <h3 className="info-heading">SEND A MESSAGE</h3>
                        <ContactForm />
                    </motion.div>

                    <motion.div className="contact-info">
                        <h3 className="info-heading">CONTACT INFORMATION</h3>
                        <h2 className="info-title">Reach Out to Us</h2>

                        <div className="info-block glass-card partitioned-block">
                            <div className="info-icon"><Mail size={24} /></div>
                            <div>
                                <h4>EMAIL US</h4>
                                <a href="mailto:info@halftonesystems.com" className="contact-link">info@halftonesystems.com</a>
                                <p className="info-note">We typically respond within 24 business hours. For urgent matters, please flag your email as HIGH PRIORITY.</p>
                            </div>
                        </div>

                        <div className="info-block glass-card partitioned-block">
                            <div className="info-icon"><MapPin size={24} /></div>
                            <div>
                                <h4>OFFICE HEADQUARTERS</h4>
                                <p>Plot # 184/A, Mallu Royal Ascot</p>
                                <p>Lane - 7, MLA's Colony</p>
                                <p>Road No. 12, Banjara Hills</p>
                                <p>Hyderabad, Telangana</p>
                                <p>INDIA — 500 034</p>
                                <p className="info-note">Located in the heart of Hyderabad's premier business district — Banjara Hills.</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="global-presence text-center"
                >
                    <motion.div>
                        <h3 className="info-heading">GLOBAL PRESENCE</h3>
                        <h2 className="section-title section-title-dark text-center" style={{ fontSize: '2.5rem' }}>A Global Reach, A Local Touch</h2>
                        <p className="presence-desc">Serving clients across four countries with the precision of a trusted partner and the power of an international firm.</p>
                    </motion.div>

                    <div className="locations-grid">
                        {locations.map((loc, i) => (
                            <motion.div key={i} className="location-card glass-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
                                <img src={loc.flag} alt={`${loc.country} Flag`} style={{ width: '80px', height: 'auto', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '4px', marginBottom: '1rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }} />
                                <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem' }}>{loc.country}</h4>
                                <p style={{ margin: 0, color: 'var(--c-text-light)' }}>{loc.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
