import React from 'react';
import { Rocket, Factory, Zap, ShieldCheck, TrendingUp, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import './WhyChoose.css';

const ReasonCard = ({ icon: Icon, title, desc }) => (
    <div className="reason-card">
        <div className="reason-icon-wrapper">
            <Icon size={32} className="reason-icon" />
        </div>
        <h3 className="reason-title">{title}</h3>
        <p className="reason-desc">{desc}</p>
    </div>
);

export const WhyChoose = () => {
    const reasons = [
        {
            icon: Rocket,
            title: "Innovation-First Approach",
            desc: "We stay ahead of emerging technology trends, giving you a decisive competitive edge."
        },
        {
            icon: Factory,
            title: "Deep Industry Expertise",
            desc: "Domain knowledge across manufacturing, healthcare, finance, retail, logistics, and more."
        },
        {
            icon: Zap,
            title: "Rapid Deployment",
            desc: "Accelerated time-to-market with proven agile development methodologies."
        },
        {
            icon: ShieldCheck,
            title: "Enterprise-Grade Security",
            desc: "Military-level cybersecurity protecting your data, operations, and reputation."
        },
        {
            icon: TrendingUp,
            title: "Measurable ROI",
            desc: "Every solution is designed to deliver quantifiable, verifiable business value."
        },
        {
            icon: Globe,
            title: "Global Vision, Local Expertise",
            desc: "International best practices perfectly tailored to your specific environment."
        }
    ];

    return (
        <section id="why-choose" className="why-choose section-padding" style={{ position: 'relative', backgroundColor: '#ffffff' }}>
            <motion.div
                className="wwd-step-circle"
                initial={{ backgroundColor: '#ffffff', color: 'var(--c-primary)' }}
                whileInView={{ backgroundColor: 'var(--c-primary)', color: '#ffffff' }}
                viewport={{ margin: "0px 0px -50% 0px" }}
            >
                1
            </motion.div>
            <div className="container">
                <div className="section-header text-center">
                    <h2 style={{ 
                        fontFamily: "'Inter', system-ui, sans-serif",
                        fontSize: 'clamp(1.5rem, 5vw, 3.5rem)',
                        fontWeight: 800,
                        letterSpacing: '-0.03em',
                        lineHeight: 1.1,
                        color: '#0b1f40'
                    }}>WHY CHOOSE HALFTONE SYSTEMS?</h2>
                    <p className="section-subtitle">Six reasons why industry leaders trust us to power their digital transformation.</p>
                </div>
                <div className="reasons-grid">
                    {reasons.map((r, i) => (
                        <div key={i} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                            <ReasonCard {...r} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
