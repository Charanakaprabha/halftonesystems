import React, { useRef, useState, useEffect } from 'react';
import { LayoutGrid, List, MapPin, Briefcase, DollarSign, Clock, ChevronRight, X, Heart, Share2, Bookmark } from 'lucide-react';

/* ══════════════════════════════════════
   INTERSECTION REVEAL HOOK
   Removed per user request for static load
   ══════════════════════════════════════ */

/* ══════════════════════════════════════
   DESIGN TOKENS  — WhoWeAre theme (Keep)
   ══════════════════════════════════════ */
const T = {
    primary: '#2563EB',
    primaryHover: '#1D4ED8',
    primaryLight: 'rgba(37,99,235,0.08)',
    primaryMid: 'rgba(37,99,235,0.15)',
    primaryBorder: 'rgba(37,99,235,0.25)',
    primaryBorderHov: '#2563EB',
    bg: '#ffffff',
    bgAlt: '#f9fafb',
    textDark: '#111827',
    textBody: '#4b5563',
    textMuted: '#6b7280',
    border: '#e5e7eb',
    blob1: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)',
    blob2: 'radial-gradient(circle, rgba(59,130,246,0.10) 0%, transparent 70%)',
    blob3: 'radial-gradient(circle, rgba(96,165,250,0.08) 0%, transparent 70%)',
    blob4: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)',
};

/* ══════════════════════════════════════
   JOBS DATA (Keep & Standardize)
   ══════════════════════════════════════ */
const JOBS = [
    {
        id: 'hcm-cloud',
        company: 'Halftone Systems',
        title: 'Senior Oracle HCM Cloud Consultant',
        tag: 'Cloud / ERP',
        location: 'Bangalore',
        type: 'Full-time',
        salary: '$120,000 - $160,000 a year',
        posted: '2d ago',
        hiringMultiple: true,
        extraInfo: '40 hours per week',
        about: 'We are seeking a seasoned Oracle HCM Cloud Consultant to join our growing Enterprise Solutions team. You will be responsible for leading complex implementations for global clients, ensuring the successful delivery of HR technology solutions that drive business value.',
        responsibilities: [
            'Lead end-to-end Oracle HCM Cloud implementations (Core HR, Payroll, Absence, Talent).',
            'Conduct requirement gathering workshops with key stakeholders.',
            'Design and configure system solutions to meet business needs.',
            'Lead data migration strategy and execution.',
            'Provide expert guidance on best practices for cloud HR processes.'
        ],
        requirements: [
            '8+ years of experience in Oracle HCM (EBS or Cloud).',
            'Minimum 3 full-lifecycle Oracle HCM Cloud implementations.',
            'Deep expertise in Core HR and at least one other module.',
            'Strong client-facing communication and presentation skills.',
            'Oracle HCM Cloud certification is highly preferred.'
        ]
    },
    {
        id: 'ebs-hr',
        company: 'Halftone Systems',
        title: 'Oracle EBS HR',
        tag: 'ERP',
        location: 'Hyderabad',
        type: 'Full-time',
        salary: '$90,000 - $120,000 a year',
        posted: '4d ago',
        hiringMultiple: false,
        extraInfo: '40 hours per week',
        about: 'Join our EBS practice to support and enhance Oracle E-Business Suite HRMS environments for major enterprise clients. You will play a key role in maintaining stability and driving efficiency in global HR operations.',
        responsibilities: [
            'Support and maintain Oracle EBS HRMS modules (HR, Payroll, OAB, OTL).',
            'Perform system configurations and custom developments.',
            'Troubleshoot complex functional and technical issues.',
            'Lead minor upgrades and patch applications.',
            'Liaise with business users to identify process improvement opportunities.'
        ],
        requirements: [
            '5+ years of Oracle EBS HRMS experience (R12 preferred).',
            'Strong SQL and PL/SQL skills.',
            'Experience with Fast Formulas and AME.',
            'Solid understanding of HR business processes.',
            'Ability to work independently in a fast-paced environment.'
        ]
    },
    {
        id: 'servicenow-hrsd',
        company: 'Halftone Systems',
        title: 'ServiceNow HRSD Developer',
        tag: 'Platform',
        location: 'Bangalore',
        type: 'Full-time',
        salary: '$100,000 - $140,000 a year',
        posted: '1w ago',
        hiringMultiple: true,
        extraInfo: '40 hours per week',
        about: 'Help us transform employee experiences by building world-class HR service delivery solutions on the ServiceNow platform. This role involves designing automated workflows that simplify complex HR operations.',
        responsibilities: [
            'Develop and configure ServiceNow HRSD applications (Case Mgmt, Employee Service Center).',
            'Design and implement complex orchestration workflows.',
            'Build integrations with HCM systems like Oracle and Workday.',
            'Customize Portal widgets using AngularJS and CSS.',
            'Participate in platform upgrades and quality assurance.'
        ],
        requirements: [
            '3+ years of ServiceNow development experience.',
            'ServiceNow Certified Implementation Specialist (HRSD) preferred.',
            'Strong JavaScript and web service (REST/SOAP) skills.',
            'Experience with Agile development methodologies.',
            'Clear understanding of ITIL and HR service management principles.'
        ]
    },
    {
        id: 'full-stack',
        company: 'Halftone Systems',
        title: 'Full-Stack Developer (Node.js + React Native)',
        tag: 'Node.js · React',
        location: 'Remote',
        type: 'Full-time',
        salary: '$110k - $150k',
        posted: '3d ago',
        hiringMultiple: true,
        extraInfo: '40 hours per week',
        about: 'Work on cutting-edge mobile and web products as part of our core engineering team. You will own features from database design to UI polish, ensuring high performance and a great user experience.',
        responsibilities: [
            'Develop robust backend APIs using Node.js and TypeScript.',
            'Build responsive web interfaces with React.js.',
            'Contribute to React Native mobile app development.',
            'Optimize applications for maximum speed and scalability.',
            'Collaborate with designers to implement pixel-perfect UIs.'
        ],
        requirements: [
            '4+ years of full-stack development experience.',
            'Expertise in JavaScript/TypeScript and React.',
            'Proficiency in Node.js and Express/Fastify.',
            'Experience with PostgreSQL or MongoDB.',
            'Familiarity with AWS or GCP services.'
        ]
    },
    {
        id: 'ios-dev',
        company: 'Halftone Systems',
        title: 'iOS Developer (Swift)',
        tag: 'Mobile',
        location: 'Remote',
        type: 'Full-time',
        salary: '$100k - $140k',
        posted: '1d ago',
        about: 'Join our mobile team to build high-performance iOS applications. You will work on feature development, architectural improvements, and UI/UX implementation using modern Swift frameworks.',
        responsibilities: [
            'Develop new features using Swift and SwiftUI/UIKit.',
            'Write clean, maintainable, and well-tested code.',
            'Collaborate with backend engineers to integrate APIs.',
            'Optimize app performance and responsiveness.',
            'Participate in code reviews and architectural discussions.'
        ],
        requirements: [
            '3+ years of professional iOS development experience.',
            'Proficiency in Swift and modern iOS architectural patterns (MVVM, Clean).',
            'Experience with RESTful APIs and modern networking libraries.',
            'Familiarity with CI/CD pipelines for mobile apps.',
            'Strong understanding of Apple design guidelines.'
        ]
    },
    {
        id: 'android-dev',
        company: 'Halftone Systems',
        title: 'Android Developer (Kotlin)',
        tag: 'Mobile',
        location: 'Remote',
        type: 'Full-time',
        salary: '$100k - $140k',
        posted: '1d ago',
        about: 'We are looking for an Android Developer to build and scale our native mobile applications. You will be responsible for creating seamless user experiences using Kotlin and the latest Android Jetpack libraries.',
        responsibilities: [
            'Build high-performance Android apps using Kotlin.',
            'Implement complex UI components with Jetpack Compose.',
            'Integrate Third-party libraries and APIs.',
            'Ensure app quality through unit testing and debugging.',
            'Stay updated with the latest Android development trends.'
        ],
        requirements: [
            '3+ years of experience in Android development.',
            'Deep knowledge of Kotlin and Android SDK.',
            'Experience with Coroutines, Flow, and Dagger/Hilt.',
            'Solid understanding of Material Design principles.',
            'Strong problem-solving and collaboration skills.'
        ]
    },
    {
        id: 'ui-ux',
        company: 'Halftone Systems',
        title: 'UI/UX Designer',
        tag: 'Design',
        location: 'Remote / Bangalore',
        type: 'Full-time',
        salary: '$80k - $120k',
        posted: '2w ago',
        hiringMultiple: false,
        extraInfo: '40 hours per week',
        about: 'We believe design is more than aesthetics—it\'s about solving problems. As a UI/UX designer, you will work closely with product managers and engineers to create user-centric solutions from wireframes to high-fidelity prototypes.',
        responsibilities: [
            'Create wireframes, user flows, and interactive prototypes.',
            'Design high-fidelity UI mockups and visual assets.',
            'Conduct user research and usability testing.',
            'Maintain and evolve our internal design system.',
            'Work closely with developers to ensure design fidelity.'
        ],
        requirements: [
            'Portfolio showcasing mobile and web design projects.',
            'Proficiency in Figma (primary tool) and Adobe Suite.',
            'Strong eye for typography, layout, and color theory.',
            'Experience in building and maintaining design systems.',
            'Excellent communication and storytelling abilities.'
        ]
    },
    {
        id: 'qa-tester',
        company: 'Halftone Systems',
        title: 'QA / Testing Engineer',
        tag: 'Quality',
        location: 'Bangalore',
        type: 'Full-time',
        salary: '$70k - $100k',
        posted: '3d ago',
        hiringMultiple: true,
        extraInfo: '40 hours per week',
        about: 'Take ownership of product quality across web and mobile platforms. You will design comprehensive test plans and automate repetitive checks to ensure our releases are rock-solid.',
        responsibilities: [
            'Develop and execute test plans for new features.',
            'Build and maintain automated test suites (Selenium/Cypress/Appium).',
            'Conduct cross-browser and cross-platform testing.',
            'Collaborate with developers to reproduce and resolve bugs.',
            'Perform regression and smoke testing for each release.'
        ],
        requirements: [
            '3+ years of experience in Software Quality Assurance.',
            'Proficiency in test automation tools like Cypress or Playwright.',
            'Experience with API testing (Postman, SoapUI).',
            'Strong analytical and problem-solving skills.',
            'Knowledge of bug tracking systems like Jira.'
        ]
    },
    {
        id: 'devops-backend',
        company: 'Halftone Systems',
        title: 'DevOps / Backend Developer',
        tag: 'Engineering',
        location: 'Remote',
        type: 'Full-time',
        salary: '$110k - $160k',
        posted: '5d ago',
        about: 'Bridge the gap between development and operations. You will build scalable backend services while ensuring seamless deployment and infrastructure stability across our cloud environments.',
        responsibilities: [
            'Build and maintain robust backend services using Go or Node.js.',
            'Design and manage CI/CD pipelines (GitHub Actions/GitLab).',
            'Scale infrastructure using Kubernetes and Terraform.',
            'Monitor system performance and implement security best practices.',
            'Optimize database performance and cloud resource usage.'
        ],
        requirements: [
            '4+ years of experience in Backend and DevOps roles.',
            'Strong proficiency in Cloud platforms (AWS/GCP/Azure).',
            'Experience with Docker, Kubernetes, and IaC tools.',
            'Excellent understanding of Linux systems and networking.',
            'Proficiency in at least one backend language (Go, Python, Node.js).'
        ]
    },
    {
        id: 'digital-marketing',
        company: 'Halftone Systems',
        title: 'Digital Marketing Executive',
        tag: 'Marketing',
        location: 'Bangalore',
        type: 'Full-time',
        salary: '$60k - $90k',
        posted: '1w ago',
        about: 'Join our marketing team to drive brand awareness and lead generation. You will be responsible for managing digital campaigns, SEO, and social media presence to grow our community.',
        responsibilities: [
            'Develop and execute multi-channel digital marketing campaigns.',
            'Manage SEO/SEM strategies to increase website traffic.',
            'Create engaging content for social media and blogs.',
            'Analyze campaign performance using data analytics tools.',
            'Partner with design and sales teams to align on goals.'
        ],
        requirements: [
            '2+ years of experience in digital marketing.',
            'Strong understanding of SEO, PPC, and Content Marketing.',
            'Proficiency with Google Analytics and Ads platforms.',
            'Creative thinker with excellent writing and communication skills.',
            'Experience in the B2B tech industry is a plus.'
        ]
    },
    {
        id: 'clinical-auditor',
        company: 'Halftone Systems',
        title: 'Clinical Quality Auditor (Nurse background)',
        tag: 'Healthcare',
        location: 'Hybrid / Bangalore',
        type: 'Full-time',
        salary: '$80k - $110k',
        posted: '3d ago',
        about: 'Apply your clinical expertise to ensure the highest standards of quality and compliance in our healthcare technology solutions. You will audit clinical workflows and contribute to patient safety initiatives.',
        responsibilities: [
            'Conduct clinical quality audits across healthcare platforms.',
            'Ensure compliance with clinical protocols and healthcare regulations.',
            'Identify areas for clinical workflow improvement.',
            'Collaborate with tech teams to enhance clinical safety features.',
            'Provide clinical insights for product development.'
        ],
        requirements: [
            'Registered Nurse (RN) background with valid certification.',
            '3+ years of clinical practice plus auditing experience.',
            'Deep understanding of healthcare quality standards (JCI, NABH).',
            'Strong attention to detail and analytical skills.',
            'Familiarity with EHR/EMR systems is highly desirable.'
        ]
    },
    {
        id: 'senior-backend',
        company: 'Halftone Systems',
        title: 'Senior Backend Developer',
        tag: 'Engineering',
        location: 'Remote',
        type: 'Full-time',
        salary: '$130k - $180k',
        posted: '2d ago',
        about: 'We are looking for a Senior Backend Developer to architect and build our next generation of enterprise-scale services. You will lead technical decisions and mentor junior engineers in high-stakes projects.',
        responsibilities: [
            'Architect and implement scalable, secure backend systems.',
            'Lead the design of complex APIs and microservices.',
            'Ensure code quality through rigorous testing and reviews.',
            'Solve complex performance and concurrency challenges.',
            'Mentor and guide junior developers on best practices.'
        ],
        requirements: [
            '7+ years of professional backend development experience.',
            'Expert knowledge of Node.js, Python, or Java.',
            'Deep experience with distributed systems and microservices.',
            'Strong understanding of database design and optimization.',
            'Proven track record of delivering enterprise-level software.'
        ]
    }
];

/* ══════════════════════════════════════
   JOB CARD — Accurate Indeed Reference Design
   ══════════════════════════════════════ */
function JobCard({ job, isSelected, onClick, viewMode }) {
    const [hov, setHov] = useState(false);

    const isSplitList = viewMode === 'list';

    return (
        <div
            onClick={onClick}
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            className="job-card-root"
            style={{
                background: '#ffffff',
                border: `1px solid ${isSelected ? T.primary : T.border}`,
                borderRadius: '16px',
                padding: '1.25rem',
                cursor: 'pointer',
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: isSelected || hov ? '0 8px 16px rgba(0,0,0,0.06)' : '0 1px 3px rgba(0,0,0,0.02)',
                marginBottom: isSplitList ? '12px' : '0',
                position: 'relative',
                height: viewMode === 'grid' ? 'max-content' : 'auto'
            }}
        >
            {/* Top Row: Badge and Vertical Icons */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                <div style={{
                    fontSize: '0.8rem',
                    color: T.primary,
                    fontWeight: 600,
                    background: 'rgba(37,99,235,0.08)',
                    padding: '4px 10px',
                    borderRadius: '4px'
                }}>
                    {job.hiringMultiple ? "Hiring multiple candidates" : "Actively hiring"}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingRight: '4px' }}>
                    <Bookmark size={20} style={{ color: T.textMuted }} />
                    <Share2 size={18} style={{ color: T.textMuted }} />
                </div>
            </div>

            {/* Main Content Block (Left Aligned) */}
            <div style={{ marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '0 0 4px', color: T.textDark }}>
                    {job.title}
                </h3>
                <div style={{ fontSize: '1rem', color: T.textBody, fontWeight: 500, marginBottom: '2px' }}>
                    {job.company}
                </div>
                <div style={{ fontSize: '0.95rem', color: T.textMuted }}>
                    {job.location}
                </div>
            </div>

            {/* Metadata Row: Inline Pills (One Row) */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'nowrap', overflow: 'hidden' }}>
                <div style={{ background: T.bgAlt, padding: '6px 12px', borderRadius: '4px', fontSize: '0.85rem', fontWeight: 600, color: T.textDark }}>
                    {job.salary}
                </div>
                <div style={{ background: T.bgAlt, padding: '6px 12px', borderRadius: '4px', fontSize: '0.85rem', fontWeight: 600, color: T.textDark, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Briefcase size={14} /> {job.type}
                </div>
                {job.extraInfo && (
                    <div style={{ background: T.bgAlt, padding: '6px 12px', borderRadius: '4px', fontSize: '0.85rem', fontWeight: 600, color: T.textDark }}>
                        {job.extraInfo}
                    </div>
                )}
            </div>
        </div>
    );
}

/* ══════════════════════════════════════
   JOB DETAIL PANEL (Right Panel)
   ══════════════════════════════════════ */
function JobDetailView({ job, onClose }) {
    if (!job) return null;

    const isMobile = window.innerWidth <= 768;
    const p = isMobile ? '1.25rem' : '2rem';

    return (
        <div style={{
            background: '#ffffff',
            borderRadius: isMobile ? '0' : '16px',
            border: isMobile ? 'none' : `1px solid ${T.border}`,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Header Sticky Area */}
            <div style={{
                padding: p,
                paddingBottom: '1.5rem',
                borderBottom: `1px solid ${T.border}`,
                position: 'sticky',
                top: 0,
                background: '#ffffff',
                zIndex: 10,
                borderRadius: isMobile ? '0' : '16px 16px 0 0'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                    <div style={{ flex: 1 }}>
                        <h2 style={{ fontSize: isMobile ? '1.4rem' : '1.75rem', fontWeight: 800, margin: '0 0 8px', color: T.textDark, lineHeight: 1.2 }}>{job.title}</h2>
                        <div style={{ display: 'flex', gap: isMobile ? '8px' : '16px', flexWrap: 'wrap', alignItems: 'center' }}>
                            <span style={{ color: T.primary, fontWeight: 700, fontSize: '0.85rem' }}>Halftone Systems</span>
                            <span style={{ color: T.textMuted, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <MapPin size={14} /> {job.location}
                            </span>
                        </div>
                    </div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                        <button style={{ padding: '8px', color: T.textMuted, borderRadius: '50%', background: T.bgAlt }}><Share2 size={20} /></button>
                        <button style={{ padding: '8px', color: T.textMuted, borderRadius: '50%', background: T.bgAlt }}><Bookmark size={20} /></button>
                        {onClose && (
                            <button onClick={onClose} style={{ padding: '8px', color: T.textMuted }}>
                                <X size={24} />
                            </button>
                        )}
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
                    <div style={{ background: T.bgAlt, padding: '8px 12px', borderRadius: '6px', fontSize: '0.85rem', fontWeight: 600, color: T.textDark, display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Briefcase size={14} /> {job.type}
                    </div>
                    {job.salary && (
                        <div style={{ background: 'rgba(37,99,235,0.06)', padding: '8px 12px', borderRadius: '6px', fontSize: '0.85rem', fontWeight: 700, color: T.primary, display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <DollarSign size={14} /> {job.salary}
                        </div>
                    )}
                </div>
            </div>

            {/* Scrollable Content Area */}
            <div style={{ padding: p, overflowY: 'auto', flex: 1 }} className="custom-scrollbar">
                <section style={{ marginBottom: isMobile ? '1.5rem' : '2.5rem' }}>
                    <h4 style={{ fontSize: isMobile ? '1rem' : '1.1rem', fontWeight: 700, marginBottom: '0.75rem', color: T.textDark }}>About the role</h4>
                    <p style={{ fontSize: isMobile ? '0.95rem' : '1rem', lineHeight: 1.6, color: T.textBody }}>{job.about}</p>
                </section>

                <section style={{ marginBottom: isMobile ? '1.5rem' : '2.5rem' }}>
                    <h4 style={{ fontSize: isMobile ? '1rem' : '1.1rem', fontWeight: 700, marginBottom: '0.75rem', color: T.textDark }}>Responsibilities</h4>
                    <ul style={{ paddingLeft: '1.25rem', margin: 0 }}>
                        {job.responsibilities.map((item, i) => (
                            <li key={i} style={{ fontSize: isMobile ? '0.95rem' : '1rem', lineHeight: 1.6, color: T.textBody, marginBottom: '8px' }}>{item}</li>
                        ))}
                    </ul>
                </section>

                <section>
                    <h4 style={{ fontSize: isMobile ? '1rem' : '1.1rem', fontWeight: 700, marginBottom: '0.75rem', color: T.textDark }}>Requirements</h4>
                    <ul style={{ paddingLeft: '1.25rem', margin: 0 }}>
                        {job.requirements.map((item, i) => (
                            <li key={i} style={{ fontSize: isMobile ? '0.95rem' : '1rem', lineHeight: 1.6, color: T.textBody, marginBottom: '8px' }}>{item}</li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    );
}

/* ══════════════════════════════════════
   MAIN PAGE
   ══════════════════════════════════════ */
export const CareersPage = () => {
    // Reveal animation hooks removed per user request
    
    // Selection state for Indeed-style split view
    const [viewMode, setViewMode] = useState('list');
    const [selectedJob, setSelectedJob] = useState(JOBS[0]);
    const [mobileShowDetail, setMobileShowDetail] = useState(false);

    const [particles] = useState(() =>
        Array.from({ length: 18 }, (_, i) => ({
            id: i,
            left: `${(i * 43 + 11) % 100}%`,
            top: `${(i * 57 + 7) % 100}%`,
            size: i % 3 === 0 ? 2.5 : i % 3 === 1 ? 1.8 : 1.2,
            dur: `${6 + (i % 6)}s`,
            delay: `-${i % 9}s`,
            color: i % 2 === 0 ? '#2563EB' : '#60a5fa',
            op: 0.12 + (i % 4) * 0.05,
        }))
    );

    return (
        <div style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif", background: T.bg }}>

            {/* HERO — standard standardized header */}
            <section
                className="hero-format-standard"
                style={{
                    position: 'relative', width: '100%', minHeight: '60vh',
                    display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
                    background: '#ffffff', overflow: 'hidden', padding: 'var(--hero-padding-top) 24px 80px',
                }}
            >
                <div style={{
                    position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
                    backgroundImage: 'radial-gradient(rgba(37,99,235,0.13) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(ellipse 85% 65% at 50% 50%, black 5%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 85% 65% at 50% 50%, black 5%, transparent 100%)',
                    opacity: 0.5,
                }} />

                {particles.map(p => (
                    <div key={p.id} style={{
                        position: 'absolute', left: p.left, top: p.top,
                        width: `${p.size}px`, height: `${p.size}px`,
                        borderRadius: '50%', background: p.color, opacity: p.op,
                        animation: `floatParticle ${p.dur} ease-in-out infinite`,
                        animationDelay: p.delay,
                    }} />
                ))}

                <div style={{ position: 'relative', zIndex: 3, maxWidth: '860px', width: '100%', textAlign: 'center' }}>
                    <h4 className="eyebrow-format-standard" style={{ color: T.primary, fontSize: '0.9rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                        WE'RE HIRING
                    </h4>
                    <h1 className="universal-hero-title" style={{
                        marginTop: 0, marginBottom: '1.5rem', color: '#111827',
                    }}>
                        Build Your Future<br /><span style={{ color: T.primary }}>With Us.</span>
                    </h1>
                    <p style={{ fontSize: '1rem', color: '#4b5563', lineHeight: 1.6 }}>
                        We are looking for talented professionals to solve meaningful problems and build world-class products.
                    </p>
                    <div style={{ marginTop: '32px' }}>
                        <a 
                            href="#open-positions" 
                            className="btn btn-primary" 
                            style={{ 
                                padding: '16px 32px', borderRadius: '12px', fontSize: '1.1rem', 
                                display: 'inline-flex', alignItems: 'center', gap: '8px',
                                textDecoration: 'none', color: '#fff'
                            }}
                        >
                            VIEW OPEN POSITIONS <ChevronRight size={20} />
                        </a>
                    </div>
                </div>
            </section>

            {/* JOBS SECTION */}
            <section
                id="open-positions"
                style={{
                    position: 'relative', width: '100%',
                    background: T.bgAlt, padding: '80px 24px 100px',
                }}
            >
                <div style={{ position: 'relative', zIndex: 3, maxWidth: '1200px', margin: '0 auto' }}>
                    
                    {/* Header with toggle */}
                    <div style={{ marginBottom: '48px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px' }}>
                        <div>
                            <p style={{ fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', color: T.primary, marginBottom: '8px' }}>OPEN POSITIONS</p>
                            <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.8rem)', fontWeight: 800, color: T.textDark, margin: 0 }}>{JOBS.length} Active Roles</h2>
                        </div>

                        <div style={{ 
                            display: 'inline-flex', 
                            background: '#f1f5f9', 
                            padding: '4px', 
                            borderRadius: '100px',
                            position: 'relative',
                            zIndex: 1000,
                        }}>
                            <button
                                onClick={(e) => { e.stopPropagation(); setViewMode('grid'); }}
                                style={{
                                    display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 20px', borderRadius: '100px',
                                    background: viewMode === 'grid' ? '#fff' : 'transparent', color: viewMode === 'grid' ? T.primary : T.textBody,
                                    boxShadow: viewMode === 'grid' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none', fontWeight: 600, fontSize: '0.9rem',
                                    cursor: 'pointer', transition: 'all 0.2s', border: 'none', userSelect: 'none'
                                }}
                            >
                                <LayoutGrid size={16} /> Grid
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); setViewMode('list'); }}
                                style={{
                                    display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 20px', borderRadius: '100px',
                                    background: viewMode === 'list' ? '#fff' : 'transparent', color: viewMode === 'list' ? T.primary : T.textBody,
                                    boxShadow: viewMode === 'list' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none', fontWeight: 600, fontSize: '0.9rem',
                                    cursor: 'pointer', transition: 'all 0.2s', border: 'none', userSelect: 'none'
                                }}
                            >
                                <List size={16} /> List
                            </button>
                        </div>
                    </div>

                    {/* Jobs Container */}
                    <div
                        style={{
                            display: viewMode === 'grid' ? 'grid' : 'flex',
                            width: '100%',
                            gridTemplateColumns: viewMode === 'grid' ? 'repeat(auto-fill, minmax(340px, 1fr))' : 'none',
                            gap: '24px',
                            minHeight: '600px',
                            opacity: 1,
                            transform: 'translateY(0)',
                        }}
                    >
                        {viewMode === 'grid' ? (
                            JOBS.map((job) => (
                                <JobCard 
                                    key={job.id} 
                                    job={job} 
                                    viewMode="grid" 
                                    onClick={() => alert(`Opening ${job.title} page...`)} 
                                />
                            ))
                        ) : (
                            /* INDEED STYLE SPLIT VIEW */
                            <div className="indeed-split-view" style={{ 
                                display: 'flex', 
                                width: '100%', 
                                gap: '24px', 
                                alignItems: 'flex-start',
                                position: 'relative' 
                            }}>
                                {/* Left: Job List */}
                                <div className="job-list-pane custom-scrollbar" style={{ 
                                    flex: '1', 
                                    display: 'flex', 
                                    flexDirection: 'column', 
                                    gap: '12px', 
                                    maxHeight: 'calc(100vh - 100px)', 
                                    overflowY: 'auto', 
                                    paddingRight: '8px' 
                                }}>
                                    {JOBS.map((job) => (
                                        <JobCard 
                                            key={job.id} 
                                            job={job} 
                                            isSelected={selectedJob?.id === job.id} 
                                            viewMode="list"
                                            onClick={() => {
                                                setSelectedJob(job);
                                                if (window.innerWidth <= 768) setMobileShowDetail(true);
                                            }}
                                        />
                                    ))}
                                </div>

                                {/* Right: Job Detail (Desktop/Tablet Only) */}
                                <div className="detail-panel-desktop" style={{ 
                                    flex: '1.6', 
                                    position: 'sticky', 
                                    top: '20px', 
                                    height: 'auto', 
                                    maxHeight: 'calc(100vh - 100px)',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                    <JobDetailView job={selectedJob} />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Mobile Detail Overlay */}
                    {mobileShowDetail && (
                        <div style={{
                            position: 'fixed', 
                            top: 0, 
                            left: 0, 
                            right: 0, 
                            bottom: 0, 
                            background: '#fff', 
                            zIndex: 999999, /* Ultra high z-index to beat footer */
                            padding: '0', 
                            display: 'flex', 
                            flexDirection: 'column',
                            overflow: 'hidden'
                        }}>
                            <JobDetailView job={selectedJob} onClose={() => setMobileShowDetail(false)} />
                        </div>
                    )}

                    {/* Bottom CTA / Culture Section */}
                    <div id="life-at-halftone" style={{
                        marginTop: '80px', padding: '3rem', borderRadius: '16px', background: '#fff', border: `1px solid ${T.border}`,
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px',
                    }}>
                        <div>
                            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, margin: '0 0 8px', color: T.textDark }}>Don't see a role that fits?</h3>
                            <p style={{ margin: 0, color: T.textBody }}>Send us your resume — we're always looking for exceptional talent.</p>
                        </div>
                        <a 
                            href="mailto:hr@halftonesystems.com?subject=Job Application" 
                            style={{ 
                                padding: '12px 32px', borderRadius: '8px', background: T.primary, color: '#fff', 
                                fontWeight: 700, border: 'none', cursor: 'pointer', textDecoration: 'none'
                            }}
                        >
                            Send Your Resume →
                        </a>
                    </div>
                </div>
            </section>

            <style>{`
                @keyframes floatParticle {
                    0%, 100% { transform: translateY(0) scale(1); }
                    50% { transform: translateY(-16px) scale(1.2); }
                }
                
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #e5e7eb;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #d1d5db;
                }

                @media (max-width: 1024px) {
                    .detail-panel-desktop {
                        flex: 1.2 !important;
                    }
                }

                @media (max-width: 768px) {
                    .indeed-split-view {
                        flex-direction: column !important;
                    }
                    .detail-panel-desktop {
                        display: none !important;
                    }
                    .job-card-root {
                        padding: 1.25rem !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default CareersPage;