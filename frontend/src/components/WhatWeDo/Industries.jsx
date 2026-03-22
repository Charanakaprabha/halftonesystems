import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Car, HeartPulse, Pill, Microscope, Stethoscope,
    ShoppingBag, Plane, GraduationCap, Briefcase, Clapperboard,
    Landmark, Cpu, CheckCircle2, TrendingUp
} from 'lucide-react';
import './Industries.css';

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
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80",
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

const IndustryRow = ({ ind, index }) => {
    const isImageLeft = index % 2 === 0;
    const shouldReduceMotion = useReducedMotion();

    return (
        <motion.div 
            className={`ind-seamless-row ${isImageLeft ? '' : 'reverse'}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
                hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 70 },
                visible: { opacity: 1, y: 0, transition: { duration: shouldReduceMotion ? 0.6 : 1.1, ease: shouldReduceMotion ? "easeOut" : [0.22, 1, 0.36, 1] } }
            }}
        >
            <div className={`ind-img-panel ${isImageLeft ? 'left' : 'right'}`}>
                <img src={ind.image} alt="" />
            </div>

            <div className={`ind-text-panel ${isImageLeft ? 'right' : 'left'}`}>
                <div className="ind-text-inner">
                    <motion.div 
                        className="ind-icon-wrap"
                        variants={{
                            hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
                            visible: { opacity: 1, y: 0, transition: { duration: shouldReduceMotion ? 0.6 : 0.8, ease: "easeOut", delay: shouldReduceMotion ? 0 : 0.5 } }
                        }}
                    >
                        <ind.icon size={26} />
                    </motion.div>

                    <div className="ind-title-wrap">
                        <motion.h3 
                            className="ind-title"
                            variants={{
                                hidden: { clipPath: 'inset(100% 0 -5px 0)', opacity: shouldReduceMotion ? 0 : 1 },
                                visible: { clipPath: 'inset(0% 0 -5px 0)', opacity: 1, transition: { duration: shouldReduceMotion ? 0.6 : 0.9, ease: shouldReduceMotion ? "easeOut" : [0.16, 1, 0.3, 1], delay: shouldReduceMotion ? 0 : 0.3 } }
                            }}
                        >
                            {ind.name}
                        </motion.h3>
                        <motion.div 
                            className="ind-title-underline"
                            variants={{
                                hidden: { scaleX: 0, opacity: shouldReduceMotion ? 0 : 1 },
                                visible: { scaleX: 1, opacity: 1, transition: { duration: 0.5, delay: shouldReduceMotion ? 0 : 0.2 } }
                            }}
                        />
                    </div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
                            visible: { opacity: 1, y: 0, transition: { duration: shouldReduceMotion ? 0.6 : 0.8, ease: "easeOut", delay: shouldReduceMotion ? 0 : 0.5 } }
                        }}
                    >
                        <p className="ind-body">{ind.description}</p>
                        
                        <div className="ind-lists-container">
                            {ind.capabilities && ind.capabilities.length > 0 && (
                                <div className="ind-detail-section">
                                    <h4 className="ind-detail-title"><CheckCircle2 size={16} className="ind-icon-primary" /> Capabilities</h4>
                                    <ul className="ind-detail-list">
                                        {ind.capabilities.map((cap, i) => (
                                            <li key={i}>{cap}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {ind.outcomes && ind.outcomes.length > 0 && (
                                <div className="ind-detail-section">
                                    <h4 className="ind-detail-title"><TrendingUp size={16} className="ind-icon-success" /> Outcomes</h4>
                                    <ul className="ind-detail-list success">
                                        {ind.outcomes.map((out, i) => (
                                            <li key={i}>{out}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export const Industries = () => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section id="industries" className="industries-v2-section">
            <div className="marquee-zone">
                <div className="marquee-content">
                    <span>
                        <a href="#category-0" className="marquee-link">HEALTHCARE & LIFE SCIENCES</a> <span className="marquee-dot">·</span> 
                        <a href="#category-1" className="marquee-link">COMMERCE & MOBILITY</a> <span className="marquee-dot">·</span> 
                        <a href="#category-2" className="marquee-link">KNOWLEDGE & INNOVATION</a> <span className="marquee-dot">·</span>
                    </span>
                    <span>
                        <a href="#category-0" className="marquee-link">HEALTHCARE & LIFE SCIENCES</a> <span className="marquee-dot">·</span> 
                        <a href="#category-1" className="marquee-link">COMMERCE & MOBILITY</a> <span className="marquee-dot">·</span> 
                        <a href="#category-2" className="marquee-link">KNOWLEDGE & INNOVATION</a> <span className="marquee-dot">·</span>
                    </span>
                </div>
            </div>
            
            <div className="ind-v2-container">
                {categories.map((cat, idx) => (
                    <div key={idx} id={`category-${idx}`} className="ind-category-group">
                        <motion.div 
                            className="category-divider"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <motion.span 
                                className="cat-label"
                                variants={{
                                    hidden: { clipPath: 'inset(0 100% 0 0)', opacity: shouldReduceMotion ? 0 : 1 },
                                    visible: { clipPath: 'inset(0 0% 0 0)', opacity: 1, transition: { duration: shouldReduceMotion ? 0.6 : 0.7 } }
                                }}
                            >
                                {cat.title}
                            </motion.span>
                            <motion.div 
                                className="cat-line"
                                variants={{
                                    hidden: { scaleX: 0, opacity: shouldReduceMotion ? 0 : 1 },
                                    visible: { scaleX: 1, opacity: 1, transition: { duration: shouldReduceMotion ? 0.6 : 0.7, delay: shouldReduceMotion ? 0 : 0.2 } }
                                }}
                                style={{ originX: 0 }}
                            />
                        </motion.div>

                        {cat.items.map((ind, i) => (
                            <IndustryRow key={ind.number} ind={ind} index={i} />
                        ))}
                    </div>
                ))}
            </div>

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
                <Link to="/contact" className="btn btn-primary mt-4">Contact Halftone Systems</Link>
            </div>
        </section>
    );
};
