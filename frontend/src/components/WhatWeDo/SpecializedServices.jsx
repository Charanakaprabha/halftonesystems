import React from 'react';
import { Target, Users, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import './SpecializedServices.css';

const SpecCard = ({ icon: Icon, title, subtitle, features }) => {
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    return (
        <div id={slug} className="spec-card">
            {/* Violet header area with icon + title inline */}
            <div className="spec-card-top">
                <Icon size={24} className="spec-header-icon" />
                <span className="spec-header-title">{title}</span>
            </div>
            <div className="spec-card-content">
                <p className="spec-subtitle">{subtitle}</p>
                <ul className="spec-features">
                    {features.map((f, i) => (
                        <li key={i}>{f}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export const SpecializedServices = () => {
    const services = [
        {
            icon: Target,
            title: "IT Consulting & Strategy",
            subtitle: "Navigate your digital transformation with expert guidance.",
            features: [
                "Technology roadmap & architecture design",
                "Digital transformation strategy",
                "IT infrastructure assessment",
                "Vendor selection & tech evaluation"
            ]
        },
        {
            icon: Users,
            title: "Staffing & Talent Solutions",
            subtitle: "Access top-tier IT professionals exactly when you need them.",
            features: [
                "Elite developers, architects & project managers",
                "Flexible: contract, full-time, project-based",
                "Rapid team scaling for urgent projects",
                "Expertise across all technology domains"
            ]
        },
        {
            icon: Layers,
            title: "Product Development",
            subtitle: "From vision to market-ready product — we build what others only dream of.",
            features: [
                "End-to-end product development lifecycle",
                "MVP development & rapid prototyping",
                "UX design, testing & iteration",
                "Go-to-market strategy & launch support"
            ]
        }
    ];

    return (
        <section id="specialized-services" className="specialized section-padding" style={{ position: 'relative', backgroundColor: '#ffffff' }}>
            <motion.div
                className="wwd-step-circle"
                initial={{ backgroundColor: '#ffffff', color: 'var(--c-primary)' }}
                whileInView={{ backgroundColor: 'var(--c-primary)', color: '#ffffff' }}
                viewport={{ margin: "0px 0px -50% 0px" }}
            >
                3
            </motion.div>
            <div className="container">
                <div className="section-header text-center reveal">
                    <h2 style={{ 
                        fontFamily: "'Inter', system-ui, sans-serif",
                        fontSize: 'clamp(1.5rem, 5vw, 3.5rem)',
                        fontWeight: 800,
                        letterSpacing: '-0.03em',
                        lineHeight: 1.1,
                        color: '#0b1f40'
                    }}>SPECIALIZED SERVICES</h2>
                    <p className="section-subtitle">Expert advisory, talent, and product development — your complete technology partner.</p>
                </div>
                <div className="spec-grid reveal-group">
                    {services.map((s, i) => (
                        <div key={i} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                            <SpecCard {...s} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
