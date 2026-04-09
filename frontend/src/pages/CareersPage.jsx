import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Clock, Shield, Zap, TrendingUp, Globe, Users, ArrowRight,
    Code, BrainCircuit, Cloud, Server, Target, BookOpen, Layers,
    MapPin, Briefcase, DollarSign
} from 'lucide-react';
import './CareersPage.css';

/* ══════════════════════════════════════
   JOBS DATA (Restored)
   ══════════════════════════════════════ */
const JOBS = [
    {
        id: 'hcm-cloud', company: 'Halftone Systems', title: 'Senior Oracle HCM Cloud Consultant',
        tag: 'Cloud / ERP', location: 'Hyderabad', type: 'Full-time', salary: '$120,000 - $160,000 / year',
        posted: '2d ago', hiringMultiple: true, about: 'We are seeking a seasoned Oracle HCM Cloud Consultant to join our growing Enterprise Solutions team. You will lead complex HR technology solutions that drive business value.',
        responsibilities: ['Lead end-to-end Oracle HCM Cloud implementations (Core HR, Payroll, Absence, Talent).','Conduct requirement gathering workshops with stakeholders.','Lead data migration strategy and execution.'],
        requirements: ['8+ years of experience in Oracle HCM.','Min 3 full-lifecycle Oracle HCM Cloud implementations.','Deep expertise in Core HR.']
    },
    {
        id: 'servicenow-hrsd', company: 'Halftone Systems', title: 'ServiceNow HRSD Developer',
        tag: 'Platform', location: 'Hyderabad', type: 'Full-time', salary: '$100,000 - $140,000 / year',
        posted: '1w ago', hiringMultiple: true, about: 'Help us transform employee experiences by building world-class HR service delivery solutions on the ServiceNow platform.',
        responsibilities: ['Develop and configure ServiceNow HRSD applications.','Design complex orchestration workflows.','Build integrations with Oracle and Workday.'],
        requirements: ['3+ years ServiceNow experience.','Implementation Specialist preferred.','Clear ITIL understanding.']
    },
    {
        id: 'full-stack', company: 'Halftone Systems', title: 'Full-Stack Developer (Node + React)',
        tag: 'Engineering', location: 'Hyderabad', type: 'Full-time', salary: '$110k - $150k / year',
        posted: '3d ago', hiringMultiple: true, about: 'Work on cutting-edge mobile and web products. You will own features from database design to UI polish, ensuring high performance.',
        responsibilities: ['Develop robust backend APIs using Node.js/TypeScript.','Build responsive web interfaces with React.js.','Contribute to React Native apps.'],
        requirements: ['4+ years full-stack experience.','Expertise in React and Node.js.','Experience with AWS or GCP.']
    },
    {
        id: 'ios-dev', company: 'Halftone Systems', title: 'iOS Developer (Swift)',
        tag: 'Mobile', location: 'Hyderabad', type: 'Full-time', salary: '$100k - $140k / year',
        posted: '1d ago', hiringMultiple: false, about: 'Join our mobile team to build high-performance iOS applications using modern Swift frameworks.',
        responsibilities: ['Develop new features using Swift and SwiftUI/UIKit.','Write clean, maintainable code.','Optimize performance.'],
        requirements: ['3+ years professional iOS experience.','Proficiency in modern iOS patterns (MVVM).','Strong understanding of Apple guidelines.']
    },
    {
        id: 'ui-ux', company: 'Halftone Systems', title: 'UI/UX Designer',
        tag: 'Design', location: 'Hyderabad', type: 'Full-time', salary: '$80k - $120k / year',
        posted: '2w ago', hiringMultiple: false, about: 'We believe design is more than aesthetics. Work closely with product managers and engineers to create user-centric solutions.',
        responsibilities: ['Create wireframes and interactive prototypes.','Design high-fidelity UI mockups.','Maintain our internal design system.'],
        requirements: ['Portfolio showcasing web/mobile design.','Proficiency in Figma.','Strong eye for typography and color theory.']
    },
    {
        id: 'devops-backend', company: 'Halftone Systems', title: 'DevOps / Backend Engineer',
        tag: 'Engineering', location: 'Hyderabad', type: 'Full-time', salary: '$110k - $160k / year',
        posted: '5d ago', hiringMultiple: false, about: 'Bridge the gap between development and operations. Build scalable services while ensuring deployment stability across clouds.',
        responsibilities: ['Build backend services (Go/Node.js).','Design CI/CD pipelines.','Scale infrastructure using Kubernetes & Terraform.'],
        requirements: ['4+ years DevOps experience.','AWS/GCP/Azure proficiency.','Docker & Kubernetes expertise.']
    },
    {
        id: 'clinical-auditor', company: 'Halftone Systems', title: 'Clinical Quality Auditor',
        tag: 'Healthcare', location: 'Hyderabad', type: 'Full-time', salary: '$80k - $110k / year',
        posted: '3d ago', hiringMultiple: false, about: 'Apply your clinical expertise to ensure the highest standards of compliance in our healthcare tech solutions (Vayucare).',
        responsibilities: ['Conduct clinical quality audits.','Ensure compliance with healthcare regulations.','Enhance clinical safety features.'],
        requirements: ['Registered Nurse (RN) background.','3+ years clinical practice.','Understanding of healthcare quality standards (JCI).']
    }
];

export const CareersPage = () => {
    // Tab state for the Culture progressive disclosure
    const [activeTab, setActiveTab] = useState('roots');
    const [selectedJobId, setSelectedJobId] = useState(JOBS[0].id);
    const selectedJob = JOBS.find(j => j.id === selectedJobId);

    // Animation constants
    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="cp-container">
            {/* 1. HERO SECTION - CLARITY FIRST */}
            <section className="cp-hero">
                <div className="cp-hero-content">
                    <motion.h1 className="cp-hero-title" initial="hidden" animate="visible" variants={fadeIn}>
                        Build the Future.<br />
                        <span style={{ color: 'var(--c-primary)' }}>With Us.</span>
                    </motion.h1>
                    <motion.p className="cp-hero-subtitle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }}>
                        We don’t just build technology. We build futures — and that begins with the extraordinary people who are HTS.
                    </motion.p>
                    <motion.div className="cp-hero-actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                        <a href="#roles" className="cp-btn-primary">View Open Roles</a>
                        <a href="#culture" className="cp-btn-secondary">Life at HTS</a>
                    </motion.div>
                </div>
                
                <div className="cp-hero-visual">
                    <div className="cp-stat-card cp-stat-1">
                        <h3>19+</h3>
                        <p>Years Expertise</p>
                    </div>
                    <div className="cp-stat-card cp-stat-2">
                        <h3>100+</h3>
                        <p>Global Projects</p>
                    </div>
                    <div className="cp-stat-card cp-stat-3">
                        <h3>14+</h3>
                        <p>Industry Verticals</p>
                    </div>
                </div>
            </section>

            {/* 2. TRUST STRIP */}
            <section className="cp-trust-strip">
                <div className="cp-trust-quote-sm">Trusted by Fortune 500s across 2 countries (India & USA)</div>
                <div className="cp-trust-logos">
                    <span>SAP CONSULTING</span>
                    <span>•</span>
                    <span>HEALTHCARE AI</span>
                    <span>•</span>
                    <span>ENTERPRISE CLOUD</span>
                    <span>•</span>
                    <span>CYBERSECURITY</span>
                </div>
            </section>

            {/* SPLIT OPEN ROLES SECTION RESTORED HERE */}
            <section id="open-roles" className="cp-roles-bg" style={{ background: 'var(--c-bg-light)' }}>
                <div className="cp-section-header">
                    <span className="cp-section-tag">CAREERS AT HTS</span>
                    <h2 className="cp-section-title">Open Positions</h2>
                </div>

                <div className="cp-split-layout">
                    {/* Left: Scrollable List */}
                    <div className="cp-job-list">
                        {JOBS.map(job => (
                            <div 
                                key={job.id} 
                                className={`cp-job-card ${selectedJobId === job.id ? 'active' : ''}`}
                                onClick={() => setSelectedJobId(job.id)}
                            >
                                <div className="cp-job-tags" style={{ marginBottom: '12px' }}>
                                    {job.hiringMultiple ? 
                                        <span className="cp-tag hiring">Multiple Openings</span> : 
                                        <span className="cp-tag primary">Actively Hiring</span>
                                    }
                                    <span className="cp-tag">{job.tag}</span>
                                </div>
                                <h3 className="cp-job-title">{job.title}</h3>
                                <div style={{ display: 'flex', gap: '16px', color: 'var(--c-text-muted)', fontSize: '0.9rem', marginBottom: '16px', flexWrap: 'wrap' }}>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><MapPin size={16} /> {job.location}</span>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Briefcase size={16} /> {job.type}</span>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Clock size={16} /> {job.posted}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right: Sticky Detail Panel */}
                    <div className="cp-job-detail">
                        <AnimatePresence mode='wait'>
                            <motion.div 
                                key={selectedJob.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="cp-detail-header">
                                    <h2 className="cp-detail-title">{selectedJob.title}</h2>
                                    <div style={{ display: 'flex', gap: '16px', fontSize: '1.05rem', color: 'var(--c-primary)', fontWeight: 600 }}>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><MapPin size={18} /> {selectedJob.location}</span>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><DollarSign size={18} /> {selectedJob.salary}</span>
                                    </div>
                                </div>
                                <div className="cp-detail-body">
                                    <h4>About the Role</h4>
                                    <p>{selectedJob.about}</p>

                                    <h4>Key Responsibilities</h4>
                                    <ul>
                                        {selectedJob.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
                                    </ul>

                                    <h4>Requirements</h4>
                                    <ul>
                                        {selectedJob.requirements.map((r, i) => <li key={i}>{r}</li>)}
                                    </ul>
                                </div>
                                <div style={{ marginTop: '32px', display: 'flex', gap: '16px' }}>
                                    <button className="cp-btn-primary">Apply for this Role <ArrowRight size={18} style={{ display: 'inline', marginLeft: '8px', verticalAlign: 'middle' }}/></button>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* 3. CULTURE SECTION & PROGRESSIVE DISCLOSURE TABS */}
            <section id="culture" className="cp-whitespace-lg" style={{ background: 'white' }}>
                <div className="cp-section-header">
                    <span className="cp-section-tag">OUR CULTURE</span>
                    <h2 className="cp-section-title">Where Ambition Meets Purpose</h2>
                    <p className="cp-section-subtitle">
                        Born from 19 years of international experience spanning Germany, USA, UK, and India, our culture is a unique blend of global perspective and grounded human values — rigorous enough to serve Fortune 500 enterprises, yet agile enough to champion bold startup ambitions.
                    </p>
                </div>

                {/* Tabbed Interface for Long Text */}
                <div className="cp-tabs-container">
                    <div className="cp-tabs-nav">
                        <button className={`cp-tab-trigger ${activeTab === 'roots' ? 'active' : ''}`} onClick={() => setActiveTab('roots')}>Deep Roots</button>
                        <button className={`cp-tab-trigger ${activeTab === 'collab' ? 'active' : ''}`} onClick={() => setActiveTab('collab')}>Collaboration</button>
                        <button className={`cp-tab-trigger ${activeTab === 'diversity' ? 'active' : ''}`} onClick={() => setActiveTab('diversity')}>Diversity</button>
                        <button className={`cp-tab-trigger ${activeTab === 'promise' ? 'active' : ''}`} onClick={() => setActiveTab('promise')}>Our Promise</button>
                    </div>
                    <div className="cp-tab-content">
                        <AnimatePresence mode="wait">
                            {activeTab === 'roots' && (
                                <motion.div key="roots" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                                    <h3>A Culture Built on Deep Roots</h3>
                                    <p>Our Founder and Managing Director built Halftone Systems not just as a technology company — but as a platform for people who want to do exceptional work. His 19-year journey across four countries is a promise: every person at HTS will have access to world-class thinking and global exposure.</p>
                                    <button className="cp-tab-readmore">Read full story <ArrowRight size={16}/></button>
                                </motion.div>
                            )}
                            {activeTab === 'collab' && (
                                <motion.div key="collab" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                                    <h3>Collaboration, Not Hierarchy</h3>
                                    <p>At HTS, the best idea wins — regardless of title. We have built a flat, collaborative structure where junior engineers challenge architects, where designers influence strategy, and where every voice contributes to the outcomes. When you join HTS, you help improve our 5-step delivery methodology.</p>
                                    <button className="cp-tab-readmore">Read full story <ArrowRight size={16}/></button>
                                </motion.div>
                            )}
                            {activeTab === 'diversity' && (
                                <motion.div key="diversity" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                                    <h3>Diversity as a Competitive Strength</h3>
                                    <p>We serve 14+ industry verticals across two continents. That breadth demands genuine diversity of thought, background, and expertise. HTS is where generalists and specialists collaborate to produce outcomes no single discipline could achieve alone.</p>
                                    <button className="cp-tab-readmore">Read full story <ArrowRight size={16}/></button>
                                </motion.div>
                            )}
                            {activeTab === 'promise' && (
                                <motion.div key="promise" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                                    <h3>Our Promise to Every Team Member</h3>
                                    <p>Whether you are a seasoned technology architect or an ambitious graduate entering your first role, Halftone Systems commits to giving you the environment, the tools, and the trust to build something extraordinary. Your career is not just a job here — it is a mission.</p>
                                    <button className="cp-tab-readmore">Read full story <ArrowRight size={16}/></button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* 4. CORE VALUES - 2x3 HOVER EXPAND GRID */}
            <section className="cp-whitespace-lg" style={{ background: 'var(--c-bg-light)' }}>
                <div className="cp-section-header">
                    <h2 className="cp-section-title">Our Core Values</h2>
                </div>
                <div className="cp-grid-3">
                    {[
                        { title: "Innovation First", icon: <Zap size={24}/>, hook: "We lead with curiosity and conviction.", detail: "AI, ML, Cloud, and Blockchain are not just buzzwords at HTS — they are the architecture of every solution we deliver. We challenge the status quo." },
                        { title: "Measurable Excellence", icon: <TrendingUp size={24}/>, hook: "Good enough is never good enough.", detail: "Every solution is benchmarked against real outcomes — from 300% ROI to 40% conversion lifts. We celebrate outcomes, not just effort." },
                        { title: "Integrity Uncompromised", icon: <Shield size={24}/>, hook: "We operate with military-grade honesty.", detail: "The same zero-compromise standard we apply to cybersecurity. Our clients trust us with their most sensitive operations." },
                        { title: "Global Mindset", icon: <Globe size={24}/>, hook: "Think globally, connect personally.", detail: "With offices across India and the USA, we have delivered across 14+ verticals. Every stakeholder is treated as a long-term partner." },
                        { title: "Ownership", icon: <Target size={24}/>, hook: "We don’t have passengers on this journey.", detail: "Every member takes full ownership. We have builders, thinkers, and leaders at every level. Problems are owned, not deflected." },
                        { title: "Continuous Growth", icon: <BookOpen size={24}/>, hook: "Perpetual learning at breakneck speed.", detail: "We stay ahead by fostering cross-discipline exposure, mentorship from leaders, and the freedom to experiment and grow fast." }
                    ].map((val, i) => (
                        <div key={i} className="cp-expand-card">
                            <div className="cp-ec-header">
                                <div className="cp-ec-icon">{val.icon}</div>
                                <div>
                                    <h4 className="cp-ec-title">{val.title}</h4>
                                </div>
                            </div>
                            <p className="cp-ec-hook">{val.hook}</p>
                            <div className="cp-ec-hidden">{val.detail}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. INNOVATION EMBEDDED IN CULTURE (GRID SYSTEM) */}
            <section className="cp-whitespace-lg" style={{ background: 'white' }}>
                 <div className="cp-section-header">
                    <span className="cp-section-tag">METHODOLOGY</span>
                    <h2 className="cp-section-title">Innovation Embedded</h2>
                </div>
                <div className="cp-grid-3">
                    {[
                         { title: "AI-First Thinking", desc: "Every team is encouraged to find the AI application within their domain — whether automating testing or predicting risk.", icon: <BrainCircuit size={28}/> },
                         { title: "Cloud-Native", desc: "We architect for scale from day one. Every solution is cloud-ready to grow with client ambitions.", icon: <Cloud size={28}/> },
                         { title: "Security Always", desc: "Military-grade security is woven into every layer of development, from architecture to deployment.", icon: <Shield size={28}/> },
                         { title: "Data-Driven", desc: "Decisions at HTS are backed by evidence, insight, and metrics — not opinion.", icon: <Target size={28}/> },
                         { title: "Client Partnership", desc: "Our team acts like the client's internal technology division — invested entirely in outcomes.", icon: <Users size={28}/> },
                         { title: "Speed Without Compromise", desc: "Agile methodology delivers in 50 days. Speed is cultured without sacrificing quality or security.", icon: <Zap size={28}/> }
                    ].map((item, i) => (
                        <div key={i} className="cp-icon-item" style={{ textAlign: 'left', alignItems: 'flex-start', padding: '24px' }}>
                            <div className="cp-icon-circle" style={{ marginBottom: '24px' }}>{item.icon}</div>
                            <h4 className="cp-icon-title">{item.title}</h4>
                            <p className="cp-icon-desc" style={{ textAlign: 'left' }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 6. LIFE AT HTS (EXPERIENCE DESIGN) */}
            <section className="cp-whitespace-lg" style={{ background: 'var(--c-bg-light)' }}>
                <div className="cp-section-header">
                    <span className="cp-section-tag">LIFE AT HTS</span>
                    <h2 className="cp-section-title">Your Day at HTS</h2>
                    <p className="cp-section-subtitle">No two days are alike. Deep cross-functional sprints across global timezones.</p>
                </div>
                
                <div className="cp-timeline-row">
                    <div className="cp-timeline-step">
                        <div className="cp-ts-time">Morning</div>
                        <h4 className="cp-ts-title">Healthcare AI Sprint</h4>
                        <p className="cp-ts-desc">Deep in a cross-functional sprint for a healthcare client in India.</p>
                    </div>
                    <div className="cp-timeline-step">
                        <div className="cp-ts-time">Afternoon</div>
                        <h4 className="cp-ts-title">Digital Strategy</h4>
                        <p className="cp-ts-desc">Contributing to a digital commerce strategy for a client in the United States.</p>
                    </div>
                    <div className="cp-timeline-step">
                        <div className="cp-ts-time">Ongoing</div>
                        <h4 className="cp-ts-title">Mentorship</h4>
                        <p className="cp-ts-desc">Learning natural results working shoulder-to-shoulder with global leaders.</p>
                    </div>
                </div>
            </section>

            {/* 7. ROLES SECTION - SCAN FIRST DESIGN */}
            <section id="roles" className="cp-whitespace-lg" style={{ background: 'white' }}>
                 <div className="cp-section-header">
                    <h2 className="cp-section-title">Roles That Make an Impact</h2>
                </div>
                <div className="cp-grid-2">
                    {[
                        { title: "Software Engineering", hook: "Full-stack, mobile (iOS & Android), and cloud-native.", detail: "Cross-platform development roles working on enterprise, healthcare, retail, and mobility platforms.", icon: <Code /> },
                        { title: "AI & Data Science", hook: "Turn raw data into competitive strategic advantage.", detail: "Machine learning engineering, predictive analytics, NLP, computer vision, and BI roles for global clients.", icon: <BrainCircuit /> },
                        { title: "Cybersecurity", hook: "Protecting clients at military-grade standards.", detail: "Zero-Trust Architecture specialists, AI threat detection engineers, and compliance experts (GDPR, HIPAA, SOC 2).", icon: <Shield /> },
                        { title: "Cloud & DevOps", hook: "Building the infrastructure that powers enterprise.", detail: "Multi-cloud architects and DevOps engineers working across AWS, Azure, and Google Cloud.", icon: <Cloud /> },
                        { title: "ERP & SAP Consulting", hook: "Delivering operational transformation at scale.", detail: "Specialists in SAP ERP, S/4HANA, and legacy modernisation for supply chain and manufacturing.", icon: <Server /> },
                        { title: "Project & Delivery", hook: "Orchestrate our 5-step delivery methodology.", detail: "Delivery managers, Scrum Masters, and programme leads ensuring every engagement exceeds expectations.", icon: <Layers /> }
                    ].map((role, i) => (
                        <div key={i} className="cp-expand-card">
                            <div className="cp-ec-header">
                                <div className="cp-ec-icon">{role.icon}</div>
                                <h4 className="cp-ec-title">{role.title}</h4>
                            </div>
                            <p className="cp-ec-hook">{role.hook}</p>
                            <div className="cp-ec-hidden">{role.detail}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 8. WHAT YOU CAN EXPECT (ICON GRID) */}
            <section className="cp-whitespace-lg" style={{ background: 'var(--c-bg-light)' }}>
                 <div className="cp-section-header">
                    <h2 className="cp-section-title">What You Can Expect From Day One</h2>
                </div>
                <div className="cp-icon-grid">
                    <div className="cp-icon-item">
                        <div className="cp-icon-circle"><Target size={30}/></div>
                        <h4 className="cp-icon-title">Immediate Impact</h4>
                        <p className="cp-icon-desc">Contributing to live client engagements from your first week.</p>
                    </div>
                    <div className="cp-icon-item">
                        <div className="cp-icon-circle"><Users size={30}/></div>
                        <h4 className="cp-icon-title">Leadership Access</h4>
                        <p className="cp-icon-desc">Direct access to Fortune 500 advisory experts.</p>
                    </div>
                    <div className="cp-icon-item">
                        <div className="cp-icon-circle"><Globe size={30}/></div>
                        <h4 className="cp-icon-title">Landmark Projects</h4>
                        <p className="cp-icon-desc">Build a portfolio featuring the most complex technology challenges.</p>
                    </div>
                    <div className="cp-icon-item">
                        <div className="cp-icon-circle"><TrendingUp size={30}/></div>
                        <h4 className="cp-icon-title">Accelerated Trajectory</h4>
                        <p className="cp-icon-desc">Significant promotion and lateral movement opportunities.</p>
                    </div>
                </div>
            </section>

            {/* 9. VISUAL BREAK FOUNDER QUOTE */}
            <section className="cp-quote-break">
                <h2 className="cp-quote-text">
                    "Technology is not just about digital adoption; it’s about business transformation. Every solution we architect must drive measurable value."
                </h2>
                <div className="cp-quote-author">— Nagaraj Adireddy, Founder & Managing Director</div>
            </section>

            {/* 10. FINAL CTA */}
            <section className="cp-cta-section">
                <h2 className="cp-cta-title">Ready to build your future?</h2>
                <div className="cp-cta-buttons">
                    <a href="mailto:careers@halftonesystems.com" className="cp-cta-btn-white">Apply Now</a>
                    <a href="mailto:info@halftonesystems.com" className="cp-cta-btn-outline">Email Us</a>
                </div>
            </section>
        </div>
    );
};