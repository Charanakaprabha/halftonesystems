import React from 'react';
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
        image: "/src/assets/HS Photos/HomePage5.jpg",
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
        image: "/src/assets/HS Photos/1.jpg",
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
        image: "/src/assets/HS Photos/2.jpg",
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
        image: "/src/assets/HS Photos/3.jpg",
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
        image: "/src/assets/HS Photos/4.jpg",
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
        image: "/src/assets/HS Photos/HomePage4.jpg",
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
        image: "/src/assets/HS Photos/HomePage6.jpg",
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
        image: "/src/assets/HS Photos/HomePage3.jpg",
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
        image: "/src/assets/HS Photos/Consulting Services.webp",
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
        image: "/src/assets/HS Photos/E1.jpg",
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
        image: "/src/assets/HS Photos/11.jpg",
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
        image: "/src/assets/HS Photos/Java.jpg",
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

    return (
        <div className={`ind-seamless-row ${isImageLeft ? '' : 'reverse'}`}>
            <div className={`ind-img-panel ${isImageLeft ? 'left' : 'right'}`}>
                <img src={ind.image} alt="" />
            </div>

            <div className={`ind-text-panel ${isImageLeft ? 'right' : 'left'}`}>
                <div className="ind-text-inner">
                    <div className="ind-icon-wrap">
                        <ind.icon size={26} />
                    </div>

                    <div className="ind-title-wrap">
                        <h3 className="ind-title">{ind.name}</h3>
                        <div className="ind-title-underline" />
                    </div>

                    <div>
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Industries = () => {

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
                        <div className="category-divider">
                            <span className="cat-label">{cat.title}</span>
                            <div className="cat-line" />
                        </div>

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
                    <span>Free Industry Consultation</span>
                    <span className="divider">|</span>
                    <span>Tailored Technology Roadmap</span>
                    <span className="divider">|</span>
                    <span>Measurable ROI from Day One</span>
                </div>
                <Link to="/contact" className="btn btn-primary mt-4">Contact Halftone Systems</Link>
            </div>
        </section>
    );
};
