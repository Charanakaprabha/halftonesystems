import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Car, HeartPulse, Pill, Microscope, Stethoscope,
    ShoppingBag, Plane, GraduationCap, Briefcase, Clapperboard,
    CheckCircle2, TrendingUp, Landmark, Cpu, ChevronLeft, ChevronRight, X
} from 'lucide-react';
import './Industries.css';

const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

const IndustryGridCard = ({ ind, onClick }) => {
    return (
        <motion.div
            layoutId={`card-${ind.number}`}
            className="ind-grid-card"
            onClick={onClick}
            whileHover="hover"
            initial="rest"
            animate="rest"
            variants={{
                rest: { y: 0, boxShadow: "0 10px 25px rgba(0,0,0,0.15)", borderColor: "rgba(255,255,255,0.1)" },
                hover: { y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.3)", borderColor: "rgba(59,130,246,0.5)", transition: { duration: 0.3, ease: "easeOut" } }
            }}
        >
            <motion.div
                layoutId={`image-${ind.number}`}
                className="ind-grid-bg"
                style={{ backgroundImage: `url(${ind.image})` }}
                variants={{
                    rest: { scale: 1 },
                    hover: { scale: 1.08, transition: { duration: 0.6, ease: "easeOut" } }
                }}
            />
            <div className="ind-grid-overlay"></div>

            <div className="ind-header grid-header">
                <div className="ind-top">
                    <ind.icon size={32} className="ind-icon" />
                </div>
                <h3 className="ind-name">{ind.name}</h3>
            </div>

            <motion.div
                className="ind-hover-content"
                variants={{
                    rest: { y: "100%", opacity: 0 },
                    hover: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } }
                }}
            >
                <p className="ind-tagline">{ind.tagline}</p>
                <div className="ind-expand-hint">CLICK TO EXPLORE</div>
            </motion.div>
        </motion.div>
    );
};

const CategoryRow = ({ title, items, onSelect }) => {
    const rowRef = useRef(null);

    const scroll = (direction) => {
        if (rowRef.current) {
            const scrollAmount = direction === 'left' ? -480 : 480;
            rowRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <motion.div
            className="ind-category-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
                visible: { transition: { staggerChildren: 0.15 } },
                hidden: {}
            }}
        >
            <motion.h2
                className="ind-category-title"
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                }}
            >
                {title}
            </motion.h2>
            <div className="ind-row-wrapper">
                <button className="scroll-arrow left" onClick={() => scroll('left')} aria-label="Scroll left">
                    <ChevronLeft size={36} />
                </button>
                <div className="ind-row-container" ref={rowRef}>
                    <div className="ind-row-content">
                        {items.map((ind, i) => (
                            <motion.div
                                className="ind-card-wrapper"
                                key={i}
                                variants={{
                                    hidden: { opacity: 0, y: 60 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                                }}
                            >
                                <IndustryGridCard ind={ind} onClick={() => onSelect(ind)} />
                            </motion.div>
                        ))}
                    </div>
                </div>
                <button className="scroll-arrow right" onClick={() => scroll('right')} aria-label="Scroll right">
                    <ChevronRight size={36} />
                </button>
            </div>
        </motion.div>
    );
};

export const Industries = () => {
    const [expandedIndustry, setExpandedIndustry] = useState(null);

    // Prevent body scroll when overlay is open
    useEffect(() => {
        if (expandedIndustry) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [expandedIndustry]);

    const industries = [
        {
            icon: Car,
            number: "01",
            name: "AUTOMOTIVE",
            tagline: "Driving the Future of Mobility & Manufacturing",
            image: "https://images.unsplash.com/photo-1562426509-5044a121aa49?auto=format&fit=crop&q=80",
            description: "The automotive industry is undergoing its most dramatic transformation in a century. Halftone Systems engineers the digital backbone that powers this revolution.",
            capabilities: [
                "Connected Vehicle & IoT Platforms",
                "Smart Manufacturing & Industry 4.0",
                "Predictive Maintenance Systems",
                "Supply Chain Digitization & ERP",
                "Dealer Management & CRM Solutions",
                "Autonomous Systems Integration"
            ],
            outcomes: [
                "Up to 40% reduction in downtime",
                "30% faster production cycles",
                "Real-time supply chain visibility",
                "Enhanced customer experience",
                "Accelerated EV transition readiness"
            ]
        },
        {
            icon: HeartPulse,
            number: "02",
            name: "HEALTHCARE",
            tagline: "Transforming Patient Care Through Intelligent Technology",
            image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80",
            description: "Healthcare demands precision, compliance, and compassion. Halftone Systems delivers secure, HIPAA-compliant digital platforms that empower clinicians.",
            capabilities: [
                "Electronic Health Records (EHR/EMR)",
                "Telemedicine & Remote Care Platforms",
                "Clinical Workflow Automation",
                "AI-Powered Diagnostics & Analytics",
                "Hospital Management Systems",
                "Patient Engagement & Mobile Apps"
            ],
            outcomes: [
                "60% improvement in care coordination",
                "45% reduction in administrative burden",
                "Real-time patient monitoring",
                "Full HIPAA & regulatory compliance",
                "Higher patient satisfaction scores"
            ]
        },
        {
            icon: Pill,
            number: "03",
            name: "PHARMACEUTICAL",
            tagline: "Accelerating Drug Discovery & Regulatory Excellence",
            image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80",
            description: "In an industry where speed saves lives, Halftone Systems delivers intelligent technology that accelerates drug pipelines and transforms how pharma companies operate.",
            capabilities: [
                "Clinical Trial Management Systems",
                "Regulatory Compliance & Reporting",
                "Drug Discovery AI & Analytics",
                "Serialization & Track-and-Trace",
                "Pharmacovigilance Platforms",
                "Laboratory Information Management"
            ],
            outcomes: [
                "Faster clinical trial execution",
                "Reduced compliance risk & penalties",
                "End-to-end drug traceability",
                "Accelerated time-to-market",
                "Data-driven R&D decision-making"
            ]
        },
        {
            icon: Microscope,
            number: "04",
            name: "LIFE SCIENCES",
            tagline: "Powering Breakthroughs from Lab to Market",
            image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80",
            description: "Life sciences companies operate at the intersection of innovation and regulation. Halftone Systems provides the digital infrastructure to advance human health.",
            capabilities: [
                "Genomics & Bioinformatics Platforms",
                "Research Data Management Systems",
                "Quality Management Systems (QMS)",
                "Digital Lab Automation & LIMS",
                "Regulatory Submission Portals",
                "AI-Powered Research Analytics"
            ],
            outcomes: [
                "Accelerated research timelines",
                "Full GxP regulatory compliance",
                "Improved research reproducibility",
                "Seamless lab-to-market pipeline",
                "Real-time scientific collaboration"
            ]
        },
        {
            icon: Stethoscope,
            number: "05",
            name: "MEDICAL",
            tagline: "Engineering Precision Solutions for Medical Excellence",
            image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80",
            description: "Halftone Systems builds digital ecosystems that ensure precision, safety, and seamless patient outcomes across the full medical technology continuum.",
            capabilities: [
                "Medical Device Software (FDA/CE Certified)",
                "Medical Imaging & Diagnostics AI",
                "Medical Coding & Billing Automation",
                "Interoperability & HL7/FHIR Integration",
                "Chronic Disease Management Platforms",
                "Digital Health Compliance Solutions"
            ],
            outcomes: [
                "99%+ medical coding accuracy",
                "Reduced billing errors & claim denials",
                "Seamless system interoperability",
                "Faster insurance reimbursement",
                "Improved diagnostic precision"
            ]
        },
        {
            icon: ShoppingBag,
            number: "06",
            name: "RETAIL",
            tagline: "Reimagining Shopping Experiences for the Digital Age",
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80",
            description: "Today's retail winners are built on intelligent digital foundations. Halftone Systems equips retailers with the technology to compete, captivate, and grow.",
            capabilities: [
                "Omnichannel Commerce Platforms",
                "AI-Powered Personalization Engines",
                "Inventory & Supply Chain Management",
                "Point of Sale (POS) & Payment Systems",
                "Customer Loyalty & CRM Programs",
                "Retail Analytics & Business Intelligence"
            ],
            outcomes: [
                "40% boost in conversion rates",
                "60% improvement in customer retention",
                "Real-time inventory optimization",
                "Higher average order values",
                "Seamless online-to-offline experience"
            ]
        },
        {
            icon: Plane,
            number: "07",
            name: "TRAVEL & TOURISM",
            tagline: "Crafting Seamless Journeys in the Experience Economy",
            image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80",
            description: "Halftone Systems helps airlines, hotels, tour operators, and travel agencies harness AI, mobile, and analytics to create journeys that inspire loyalty.",
            capabilities: [
                "Travel Booking & Reservation Platforms",
                "AI-Powered Trip Personalization",
                "Revenue Management Systems",
                "Hotel & Property Management Systems",
                "Loyalty Program Platforms",
                "Real-Time Travel Analytics & Insights"
            ],
            outcomes: [
                "Higher booking conversion rates",
                "Improved customer loyalty & NPS",
                "Dynamic revenue optimization",
                "Reduced operational overhead",
                "Seamless multi-channel booking"
            ]
        },
        {
            icon: GraduationCap,
            number: "08",
            name: "EDUCATION & RESEARCH",
            tagline: "Empowering Learners & Advancing Knowledge at Scale",
            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80",
            description: "Halftone Systems delivers intelligent learning platforms and institutional technology that empowers educators, engages learners, and drives academic excellence worldwide.",
            capabilities: [
                "Learning Management Systems (LMS)",
                "AI-Powered Adaptive Learning Engines",
                "Student Information & ERP Systems",
                "Research Collaboration Platforms",
                "Virtual Classrooms & EdTech Apps",
                "Assessment & Credentialing Solutions"
            ],
            outcomes: [
                "Improved learner engagement & retention",
                "Personalized AI-driven learning paths",
                "Streamlined institutional administration",
                "Enhanced research collaboration",
                "Data-driven academic performance insights"
            ]
        },
        {
            icon: Briefcase,
            number: "09",
            name: "SERVICES INDUSTRY",
            tagline: "Elevating Service Delivery Through Smart Automation",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
            description: "Halftone Systems equips service organizations with the digital tools to work smarter, deliver faster, and build relationships that drive sustained growth.",
            capabilities: [
                "Professional Services Automation (PSA)",
                "CRM & Client Relationship Platforms",
                "Intelligent Workflow Automation (RPA)",
                "Financial Management & ERP Systems",
                "Knowledge Management Platforms",
                "Service Analytics & Reporting Dashboards"
            ],
            outcomes: [
                "50% reduction in manual processing",
                "Improved client satisfaction & retention",
                "Faster service delivery cycles",
                "Real-time business performance insights",
                "Scalable growth without added headcount"
            ]
        },
        {
            icon: Clapperboard,
            number: "10",
            name: "MEDIA & ENTERTAINMENT",
            tagline: "Powering Content, Engagement & Digital Experience",
            image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80",
            description: "The media landscape demands relentless innovation. Halftone Systems engineers the digital infrastructure that keeps creators and audiences constantly connected.",
            capabilities: [
                "OTT & Streaming Platform Development",
                "Content Management & Distribution Systems",
                "AI-Powered Content Recommendation Engines",
                "Audience Analytics & Monetization Tools",
                "Digital Rights Management (DRM)",
                "Immersive AR/VR Experience Platforms"
            ],
            outcomes: [
                "Higher content engagement & watch time",
                "Personalized viewer experiences at scale",
                "New digital revenue streams unlocked",
                "Reduced content delivery costs",
                "Stronger audience loyalty & retention"
            ]
        },
        {
            icon: Landmark,
            number: "11",
            name: "FINANCE & BANKING",
            tagline: "Engineering Secure & Scalable Financial Ecosystems",
            image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80",
            description: "In a world of digital-first banking and decentralized finance, Halftone Systems builds robust, compliant, and innovative financial platforms that drive growth.",
            capabilities: [
                "Core Banking Modernization",
                "Digital Payments & Wallets",
                "Algorithmic Trading Platforms",
                "Risk & Fraud Management AI",
                "Open Banking APIs",
                "Wealth Management Systems"
            ],
            outcomes: [
                "Zero-downtime financial operations",
                "Enhanced fraud detection accuracy",
                "Seamless cross-border payments",
                "Regulatory compliance at scale",
                "Accelerated digital lending"
            ]
        },
        {
            icon: Cpu,
            number: "12",
            name: "TECHNOLOGY & SOFTWARE",
            tagline: "Building the Foundations of Tomorrow's Digital Products",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80",
            description: "We partner with leading tech companies and ISVs to architect, develop, and scale software products that define markets and disrupt traditions.",
            capabilities: [
                "SaaS Product Development",
                "Cloud-Native Architecture",
                "DevOps & SRE Transformation",
                "API Design & Integration",
                "Microservices Migration",
                "AI Model Deployment"
            ],
            outcomes: [
                "Faster time-to-market for products",
                "Highly scalable cloud infrastructure",
                "Reduced technical debt",
                "Improved developer productivity",
                "99.99% system availability"
            ]
        }
    ];

    const categories = [
        {
            title: "Healthcare & Life Sciences",
            items: [industries[1], industries[2], industries[3], industries[4]]
        },
        {
            title: "Commerce & Mobility",
            items: [industries[0], industries[5], industries[6], industries[10]]
        },
        {
            title: "Knowledge & Innovation",
            items: [industries[7], industries[8], industries[9], industries[11]]
        }
    ];

    return (
        <section id="industries" className="industries-netflix-section">

            {/* Grid Container (Fades/blurs out when expanded) */}
            <motion.div
                className="ind-netflix-container"
                animate={{
                    opacity: expandedIndustry ? 0.3 : 1,
                    filter: expandedIndustry ? 'blur(10px) grayscale(50%)' : 'blur(0px) grayscale(0%)',
                    scale: expandedIndustry ? 0.95 : 1
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ pointerEvents: expandedIndustry ? 'none' : 'auto' }}
            >
                {categories.map((cat, idx) => (
                    <CategoryRow
                        key={idx}
                        title={cat.title}
                        items={cat.items}
                        onSelect={setExpandedIndustry}
                    />
                ))}
            </motion.div>

            {/* Split View Overlay */}
            <AnimatePresence>
                {expandedIndustry && (
                    <div className="split-view-overlay">
                        {/* Left Sidebar */}
                        <motion.div
                            className="split-sidebar"
                            initial={{ x: '-100%', opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: '-100%', opacity: 0 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        >
                            <h3 className="sidebar-title">Explore Industries</h3>
                            <div className="sidebar-list">
                                {industries.map(ind => (
                                    <button
                                        key={ind.number}
                                        className={`sidebar-item ${expandedIndustry.number === ind.number ? 'active' : ''}`}
                                        onClick={() => setExpandedIndustry(ind)}
                                    >
                                        <ind.icon size={22} className="sidebar-icon" />
                                        <span>{ind.name}</span>
                                    </button>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right Detail Panel */}
                        <div className="split-detail-container">
                            <motion.div
                                layoutId={`card-${expandedIndustry.number}`}
                                className="detail-panel-card"
                            >
                                <button className="close-btn" onClick={() => setExpandedIndustry(null)}>
                                    <X size={24} />
                                </button>

                                {/* Left Side: Image Column */}
                                <div key={`img-${expandedIndustry.number}`} className="detail-image-column" style={{ '--bg-image': `url(${expandedIndustry.image})` }}>
                                    <div className="detail-image-overlay"></div>
                                    <div className="detail-hero-content">
                                        <motion.div
                                            className="ind-top-meta"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.3, duration: 0.4 }}
                                        >
                                            <expandedIndustry.icon size={32} className="ind-icon" />
                                        </motion.div>

                                        <div className="name-reveal-wrapper">
                                            <motion.div
                                                className="reveal-line"
                                                initial={{ scaleX: 0 }}
                                                animate={{ scaleX: 1 }}
                                                transition={{ delay: 0.4, duration: 0.4, ease: "easeOut" }}
                                            />
                                            <div className="name-overflow-hidden">
                                                <motion.h2
                                                    className="ind-name large"
                                                    initial={{ y: "100%" }}
                                                    animate={{ y: 0 }}
                                                    transition={{ delay: 0.45, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                                >
                                                    {expandedIndustry.name}
                                                </motion.h2>
                                            </div>
                                        </div>

                                        <motion.p
                                            className="ind-tagline large"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.6, duration: 0.4 }}
                                        >
                                            {expandedIndustry.tagline}
                                        </motion.p>
                                    </div>
                                </div>

                                {/* Right Side: Text Column */}
                                <motion.div
                                    key={`text-${expandedIndustry.number}`}
                                    className="detail-text-column"
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                    variants={{
                                        visible: { transition: { staggerChildren: 0.06, delayChildren: 0.7 } },
                                        hidden: { transition: { staggerChildren: 0.02, staggerDirection: -1 } }
                                    }}
                                >
                                    <motion.p className="detail-desc" variants={fadeUpVariant}>
                                        {expandedIndustry.description}
                                    </motion.p>

                                    <motion.div className="detail-section" variants={fadeUpVariant}>
                                        <h4 className="detail-section-title"><CheckCircle2 size={18} className="text-primary" /> Our Capabilities</h4>
                                        <ul className="detail-list list-primary">
                                            {expandedIndustry.capabilities.map((cap, i) => (
                                                <motion.li key={i} variants={fadeUpVariant}>{cap}</motion.li>
                                            ))}
                                        </ul>
                                    </motion.div>

                                    {expandedIndustry.outcomes && expandedIndustry.outcomes.length > 0 && (
                                        <motion.div className="detail-section mt-4" variants={fadeUpVariant}>
                                            <h4 className="detail-section-title"><TrendingUp size={18} className="text-success" /> Business Outcomes</h4>
                                            <ul className="detail-list list-success outcomes">
                                                {expandedIndustry.outcomes.map((out, i) => (
                                                    <motion.li key={i} variants={fadeUpVariant}>{out}</motion.li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    )}
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                )}
            </AnimatePresence>

            <div className="section-footer text-center">
                <h3 className="footer-heading">Your Industry. Our Expertise. Extraordinary Results.</h3>
                <p className="footer-text" style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto 1.5rem' }}>
                    No matter which sector you operate in, Halftone Systems brings the domain depth, technological excellence, and strategic partnership you need to lead your industry in the digital age.
                </p>
                <div className="footer-links">
                    <span>✦ Free Industry Consultation</span>
                    <span className="divider">|</span>
                    <span>Tailored Technology Roadmap</span>
                    <span className="divider">|</span>
                    <span>Measurable ROI from Day One ✦</span>
                </div>
                <button className="btn btn-primary mt-4">Contact Halftone Systems</button>
            </div>
        </section >
    );
};
