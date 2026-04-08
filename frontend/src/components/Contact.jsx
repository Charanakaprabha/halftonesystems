import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Globe, MapPin, Cpu, Layers, Cloud, Laptop, Shield, PieChart, Bot, Zap, ArrowRight, Quote } from 'lucide-react';
import './Contact.css';

// Flag assets
import indiaFlag from '../assets/india_flag.png';
import usaFlag from '../assets/usa_flag.png';

export const Contact = () => {
    const contactCards = [
        {
            icon: <Mail size={32} />,
            title: "Email Us",
            subtitle: "General & Business Inquiries",
            info: "info@halftonesystems.com",
            link: "mailto:info@halftonesystems.com"
        },
        {
            icon: <Phone size={32} />,
            title: "Call Us",
            subtitle: "Direct Line — Mon to Fri, 9 AM – 6 PM IST",
            info: "+91 99516 51515",
            link: "tel:+919951651515"
        },
        {
            icon: <Globe size={32} />,
            title: "Website",
            subtitle: "Explore Our Solutions & Portfolio",
            info: "www.halftonesystems.com",
            link: "http://www.halftonesystems.com"
        },
        {
            icon: <MapPin size={32} />,
            title: "Visit Us",
            subtitle: "Headquarters — India",
            info: "Plot No. 182/A, Road No. 12, MLA Colony, Banjara Hills, Hyderabad, India",
            link: "https://maps.google.com/?q=Plot+No.+182/A,+Road+No.+12,+MLA+Colony,+Banjara+Hills,+Hyderabad"
        }
    ];

    const locations = [
        {
            country: "India",
            city: "Hyderabad",
            flagImg: indiaFlag,
            details: "Plot No. 182/A, Road No. 12, MLA Colony, Banjara Hills, Hyderabad, Telangana, India — 500 034"
        },
        {
            country: "USA",
            city: "United States",
            flagImg: usaFlag,
            description: "Serving Clients Across North America",
            details: "Enterprise Technology & Digital Transformation Consulting"
        }
    ];

    const serviceCards = [
        { 
            icon: <Bot size={28} />, 
            title: "Artificial Intelligence & ML", 
            desc: "Predictive analytics, NLP, computer vision, and AI-driven automation solutions for your industry." 
        },
        { 
            icon: <Layers size={28} />, 
            title: "Enterprise Applications & SAP", 
            desc: "ERP modernisation, SAP implementation, custom enterprise software, and legacy system transformation." 
        },
        { 
            icon: <Cloud size={28} />, 
            title: "Cloud & DevOps", 
            desc: "Multi-cloud strategy, AWS, Azure, Google Cloud migration, CI/CD pipelines, and IaaS/PaaS/SaaS infrastructure." 
        },
        { 
            icon: <Laptop size={28} />, 
            title: "Mobile & Web Development", 
            desc: "High-performance iOS, Android, cross-platform apps, PWAs, and conversion-optimised digital platforms." 
        },
        { 
            icon: <Shield size={28} />, 
            title: "Cybersecurity", 
            desc: "Zero-Trust architecture, 24/7 AI-powered threat detection, GDPR & HIPAA compliance, military-grade protection." 
        },
        { 
            icon: <PieChart size={28} />, 
            title: "Data Science & Analytics", 
            desc: "Real-time BI dashboards, predictive risk models, customer behaviour analytics, and data-driven operations." 
        },
        { 
            icon: <Cpu size={28} />, 
            title: "Automation & RPA", 
            desc: "Robotic Process Automation, intelligent workflow management, QA automation — reduce operational costs by 50%." 
        },
        { 
            icon: <Zap size={28} />, 
            title: "Digital Marketing & Growth", 
            desc: "ROI-focused campaigns, marketing automation, SEO, and 250%+ online engagement growth strategies." 
        }
    ];

    const processSteps = [
        { id: "01", title: "DISCOVER", desc: "Deep-dive into your goals, pain points & landscape" },
        { id: "02", title: "ARCHITECT", desc: "Design optimal tech roadmap, solution stack & plan" },
        { id: "03", title: "BUILD", desc: "Agile development with continuous feedback & quality" },
        { id: "04", title: "DEPLOY", desc: "Zero-disruption go-live with full training & testing" },
        { id: "05", title: "OPTIMISE", desc: "Ongoing monitoring, enhancements & advisory for ROI" }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <div className="contact-page-container">
            {/* HERO SECTION */}
            <section className="contact-hero hero-format-standard">
                <div className="container text-center">
                    <motion.p 
                        className="eyebrow-format-standard contact-hero-eyebrow"
                        style={{
                            color: '#b48c36',
                            fontSize: '0.85rem',
                            fontWeight: 700,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            fontFamily: "'Inter', system-ui, sans-serif",
                        }}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        CONTACT US
                    </motion.p>
                    <motion.h2 
                        className="hero-main-title"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        Your Technology Transformation Starts With One Conversation
                    </motion.h2>
                    <motion.div 
                        className="hero-bullets"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        <span>Free Consultation</span>
                        <span className="bullet-dot">•</span>
                        <span>Custom Technology Roadmap</span>
                        <span className="bullet-dot">•</span>
                        <span>Measurable ROI from Day One</span>
                    </motion.div>
                </div>
            </section>

            {/* GET IN TOUCH */}
            <section id="getting-in-touch" className="contact-section get-in-touch-section">
                <div className="container">
                    <div className="section-divider">
                        <span className="divider-line"></span>
                        <h2 className="section-label">GET IN TOUCH</h2>
                        <span className="divider-line"></span>
                    </div>
                    <div className="text-center mb-5">
                        <h3 className="section-subtitle-alt">We Are Ready When You Are</h3>
                        <p className="section-text-alt">Reach out through any channel — our experts respond within 24 hours</p>
                    </div>

                    <motion.div 
                        className="contact-grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {contactCards.map((card, idx) => (
                            <motion.a 
                                key={idx} 
                                href={card.link} 
                                className="contact-info-card"
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                            >
                                <div className="card-icon-wrapper">{card.icon}</div>
                                <h4 className="card-title">{card.title}</h4>
                                <p className="card-subtitle">{card.subtitle}</p>
                                <p className="card-info">{card.info}</p>
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* GLOBAL PRESENCE */}
            <section className="presence-section section-padding">
                <div className="container">
                    <div className="section-divider">
                        <span className="divider-line"></span>
                        <h2 className="section-label">OUR GLOBAL PRESENCE</h2>
                        <span className="divider-line"></span>
                    </div>
                    <div className="text-center mb-5">
                        <h3 className="section-subtitle-alt">Where In The World We Are</h3>
                        <p className="section-text-alt">Offices across two continents — delivering local partnership with global expertise</p>
                    </div>

                    <div className="presence-grid">
                        {locations.map((loc, i) => (
                            <motion.div 
                                key={i} 
                                className="location-card-premium"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                            >
                                <img src={loc.flagImg} alt={`${loc.country} Flag`} className="loc-flag-img" />
                                <h4 className="loc-city">{loc.city}</h4>
                                <h5 className="loc-country">{loc.country.toUpperCase()}</h5>
                                {loc.description && <p className="loc-desc">{loc.description}</p>}
                                <p className="loc-details">{loc.details}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SERVICES / CONTACT US SECTION */}
            <section id="contact-us" className="contact-section contact-us-section">
                <div className="container">
                    <div className="section-divider">
                        <span className="divider-line"></span>
                        <h2 className="section-label">CONTACT US</h2>
                        <span className="divider-line"></span>
                    </div>
                    <div className="text-center mb-5">
                        <h3 className="section-subtitle-alt">How Can We Help You?</h3>
                        <p className="section-text-alt">Tell us about your vision — we will architect the path forward</p>
                    </div>

                    <div className="services-grid-detailed">
                        {serviceCards.map((service, idx) => (
                            <motion.div 
                                key={idx} 
                                className="service-card-detailed"
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="service-head">
                                    <div className="service-icon-detailed">{service.icon}</div>
                                    <h4 className="service-title-detailed">{service.title}</h4>
                                </div>
                                <p className="service-desc-detailed">{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* OUR PROCESS */}
            <section className="process-section section-padding">
                <div className="container">
                    <div className="section-divider">
                        <span className="divider-line"></span>
                        <h2 className="section-label">OUR PROCESS</h2>
                        <span className="divider-line"></span>
                    </div>
                    <div className="text-center mb-5">
                        <h3 className="section-subtitle-alt">From First Call to Go-Live</h3>
                        <p className="section-text-alt">A proven 5-step framework that transforms your vision into measurable results</p>
                    </div>

                    <div className="process-flow">
                        {processSteps.map((step, i) => (
                            <React.Fragment key={i}>
                                <div className="process-step-item">
                                    <span className="step-num">{step.id}</span>
                                    <h4 className="step-title">{step.title}</h4>
                                    <p className="step-desc">{step.desc}</p>
                                </div>
                                {i < processSteps.length - 1 && <div className="step-arrow">▶</div>}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

            {/* MANAGEMENT QUOTE */}
            <section className="quote-section section-padding">
                <div className="container">
                    <div className="quote-wrapper">
                        <Quote className="quote-icon-large" size={48} />
                        <blockquote className="md-quote">
                            “Technology is not just about digital adoption; it's about business transformation. 
                            Every solution we architect must drive measurable value, enhance competitive positioning, 
                            and create sustainable growth for our clients.”
                        </blockquote>
                        <cite className="quote-author">
                            — Nagaraj Adireddy, Founder & Managing Director, Halftone Systems
                        </cite>
                    </div>
                </div>
            </section>

            {/* FOOTER INFO */}
            <section className="corporate-footer section-padding">
                <div className="container text-center">
                    <h4 className="corp-name">HALFTONE SYSTEMS PRIVATE LIMITED</h4>
                    <p className="corp-tag">Businesses with Information Technology & Technology Products</p>
                    <div className="corp-badges">
                        <span>19+ Years of Expertise</span>
                        <span className="badge-dot">•</span>
                        <span>100+ Projects Delivered</span>
                        <span className="badge-dot">•</span>
                        <span>INDIA | USA</span>
                    </div>
                    <div className="corp-bottom-links">
                        <span className="footer-link-item"><Mail size={16} /> info@halftonesystems.com</span>
                        <span className="footer-pipe">|</span>
                        <span className="footer-link-item"><Phone size={16} /> +91 99516 51515</span>
                        <span className="footer-pipe">|</span>
                        <span className="footer-link-item"><Globe size={16} /> www.halftonesystems.com</span>
                    </div>
                </div>
            </section>
        </div>
    );
};
