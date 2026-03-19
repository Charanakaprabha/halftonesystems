import React, { useRef, useState, useEffect } from 'react';
import { LayoutGrid, List } from 'lucide-react';

/* ══════════════════════════════════════
   INTERSECTION REVEAL HOOK
══════════════════════════════════════ */
function useReveal(threshold = 0.1) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
            { threshold }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);
    return [ref, visible];
}

/* ══════════════════════════════════════
   DESIGN TOKENS  — WhoWeAre theme
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
    // blobs — blue tints matching WhoWeAre
    blob1: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)',
    blob2: 'radial-gradient(circle, rgba(59,130,246,0.10) 0%, transparent 70%)',
    blob3: 'radial-gradient(circle, rgba(96,165,250,0.08) 0%, transparent 70%)',
    blob4: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)',
};

/* ══════════════════════════════════════
   JOBS DATA
══════════════════════════════════════ */
const JOBS = [
    {
        icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22 }}><path d="M4 6h16M4 10h16M4 14h8" /><circle cx="17" cy="17" r="4" /><path d="M19 15l-4 4" /></svg>),
        title: 'Senior Oracle HCM Cloud Consultant', tag: 'Cloud / ERP',
        desc: 'Lead enterprise HCM cloud implementations and drive end-to-end digital HR transformation.',
    },
    {
        icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22 }}><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg>),
        title: 'Oracle EBS HR', tag: 'ERP',
        desc: 'Configure and optimize Oracle E-Business Suite HR modules across global enterprise deployments.',
    },
    {
        icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22 }}><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /><path d="M7 8l3 3 4-4 3 3" /></svg>),
        title: 'ServiceNow HRSD Developer', tag: 'Platform',
        desc: 'Design and extend HR Service Delivery workflows and integrations on the ServiceNow platform.',
    },
    {
        icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22 }}><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>),
        title: 'Full-Stack Developer', tag: 'Node.js · React',
        desc: 'Build end-to-end product features with Node.js APIs and cross-platform React Native apps.',
    },
    {
        icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22 }}><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>),
        title: 'iOS Developer (Swift)', tag: 'Mobile',
        desc: 'Ship polished, high-performance iOS applications with Swift and modern Apple frameworks.',
    },
    {
        icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22 }}><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><path d="M12 18h.01" /><path d="M9 7l3 3-3 3" /></svg>),
        title: 'Android Developer (Kotlin)', tag: 'Mobile',
        desc: 'Build scalable, beautiful Android experiences using Kotlin and Jetpack Compose.',
    },
    {
        icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22 }}><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>),
        title: 'UI / UX Designer', tag: 'Design',
        desc: 'Craft intuitive interfaces and seamless user journeys that set the standard for product design.',
    },
    {
        icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22 }}><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>),
        title: 'QA / Testing Engineer', tag: 'Quality',
        desc: 'Ensure exceptional product quality through robust manual, automated and performance testing.',
    },
    {
        icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22 }}><path d="M18 20V10M12 20V4M6 20v-6" /></svg>),
        title: 'DevOps / Backend Developer', tag: 'Infrastructure',
        desc: 'Architect cloud infrastructure, CI/CD pipelines and high-availability backend systems.',
    },
    {
        icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22 }}><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>),
        title: 'Digital Marketing Executive', tag: 'Growth',
        desc: 'Drive pipeline growth through data-led campaigns, SEO excellence and compelling brand narratives.',
    },
    {
        icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22 }}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>),
        title: 'Clinical Quality Auditor', tag: 'Healthcare',
        desc: 'Apply clinical nursing expertise to uphold care quality standards and regulatory compliance.',
    },
    {
        icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22 }}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>),
        title: 'Senior Backend Developer', tag: 'Backend',
        desc: 'Design distributed systems and high-throughput APIs that form the backbone of our platform.',
    },
];

/* ══════════════════════════════════════
   AMBIENT BLOB
══════════════════════════════════════ */
function Blob({ w, h, top, left, right, bottom, bg, dur, delay }) {
    return (
        <div style={{
            position: 'absolute', width: w, height: h,
            top, left, right, bottom,
            borderRadius: '50%', background: bg,
            filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0,
            animation: `floatBlob ${dur} ease-in-out infinite`,
            animationDelay: delay,
        }} />
    );
}

/* ══════════════════════════════════════
   JOB CARD — WhoWeAre glassmorphism style
══════════════════════════════════════ */
// Reusable Job Card Component
function JobCard({ job, index, parentVisible, viewMode }) {
    const [hov, setHov] = useState(false);
    const [btnHov, setBtnHov] = useState(false);

    return (
        <div
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            style={{
                position: 'relative',
                background: hov
                    ? 'rgba(255,255,255,0.85)'
                    : 'rgba(255,255,255,0.70)',
                backdropFilter: 'blur(18px)',
                WebkitBackdropFilter: 'blur(18px)',
                border: `1px solid ${hov ? T.primaryBorderHov : T.border}`,
                borderRadius: '16px',
                overflow: 'hidden',
                cursor: 'default',
                transition: 'all 0.38s cubic-bezier(0.22,1,0.36,1)',
                transform: parentVisible
                    ? hov ? 'translateY(-6px)' : 'translateY(0)'
                    : 'translateY(38px)',
                opacity: parentVisible ? 1 : 0,
                transitionDelay: parentVisible ? `${index * 65}ms` : '0ms',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                display: 'flex',
                flexDirection: viewMode === 'list' ? 'row' : 'column',
                alignItems: viewMode === 'list' ? 'center' : 'stretch',
            }}
        >
            {/* Remove top shimmer accent per user request */}
            
            {/* Remove subtle inner glow on hover per user request */}
            {/* card header — bg #f9fafb like WhoWeAre pillar header */}
            <div style={{
                padding: viewMode === 'list' ? '1.5rem 1rem 1.5rem 1.5rem' : '1.5rem 1.5rem 1.25rem',
                background: T.bgAlt,
                borderRight: viewMode === 'list' ? `1px solid ${T.border}` : 'none',
                borderBottom: viewMode === 'list' ? 'none' : `1px solid ${T.border}`,
                transition: 'background 0.3s ease, border-color 0.3s ease',
                display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '12px',
                width: viewMode === 'list' ? '30%' : '100%',
                flexShrink: 0,
            }}>
                {/* icon + tag row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                    <div style={{
                        width: '44px', height: '44px', borderRadius: '10px', flexShrink: 0,
                        background: 'transparent',
                        border: 'none',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: T.primary,
                        boxShadow: 'none',
                    }}>
                        {job.icon}
                    </div>

                    <span style={{
                        fontSize: '10px', fontWeight: 700,
                        fontFamily: "'Inter', system-ui, sans-serif",
                        letterSpacing: '0.08em', textTransform: 'uppercase',
                        color: T.primary,
                        background: 'rgba(37,99,235,0.06)',
                        border: `1px solid rgba(37,99,235,0.18)`,
                        borderRadius: '100px', padding: '4px 11px',
                        transition: 'all 0.3s ease',
                        maxWidth: '140px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                    }}>
                        {job.tag}
                    </span>
                </div>

                {/* title */}
                <h3 style={{
                    margin: 0, fontSize: '1rem', fontWeight: 700,
                    lineHeight: 1.3, letterSpacing: '-0.01em',
                    fontFamily: "'Inter', system-ui, sans-serif",
                    color: T.textDark,
                    transition: 'color 0.3s ease',
                }}>
                    {job.title}
                </h3>
            </div>

            {/* card body */}
            <div style={{ 
                padding: '1.25rem 1.5rem 1.5rem', 
                display: 'flex', 
                flexDirection: viewMode === 'list' ? 'row' : 'column', 
                alignItems: viewMode === 'list' ? 'center' : 'stretch',
                justifyContent: 'space-between',
                gap: '24px',
                width: '100%' 
            }}>
                {/* description */}
                <p style={{
                    margin: 0,
                    fontSize: '0.9rem', lineHeight: 1.68,
                    color: T.textBody,
                    fontFamily: "'Inter', system-ui, sans-serif",
                    flex: 1,
                }}>
                    {job.desc}
                </p>

                {/* bottom row */}
                <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '20px',
                    flexShrink: 0 
                }}>
                    <button
                        onMouseEnter={() => setBtnHov(true)}
                        onMouseLeave={() => setBtnHov(false)}
                        onClick={() => alert(`Applying for: ${job.title}`)}
                        style={{
                            padding: '8px 18px', borderRadius: '8px', border: 'none',
                            cursor: 'pointer', fontSize: '12px', fontWeight: 700,
                            fontFamily: "'Inter', system-ui, sans-serif", letterSpacing: '0.01em',
                            background: btnHov ? T.primary : T.primaryHover,
                            color: '#ffffff',
                            boxShadow: 'none',
                            transition: 'all 0.25s ease',
                            transform: btnHov ? 'scale(1.04)' : 'scale(1)',
                        }}
                    >
                        Apply Now →
                    </button>

                    <div style={{
                        display: 'flex', alignItems: 'center', gap: '4px',
                        color: T.textMuted,
                        fontSize: '11.5px', fontWeight: 600,
                        fontFamily: "'Inter', system-ui, sans-serif",
                    }}>
                        Details
                        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round"
                            style={{ width: 10, height: 10 }}>
                            <path d="M3 8h10M9 4l4 4-4 4" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ══════════════════════════════════════
   MAIN PAGE
══════════════════════════════════════ */
export const CareersPage = () => {
    const [heroRef, heroVisible] = useReveal(0.05);
    const [labelRef, labelVisible] = useReveal(0.1);
    const [gridRef, gridVisible] = useReveal(0.04);
    const [bandRef, bandVisible] = useReveal(0.1);
    const [bandHov, setBandHov] = useState(false);
    const [viewMode, setViewMode] = useState('grid');

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

            {/* ════════════════════════════════
          HERO — white, Inter font, blue accents
      ════════════════════════════════ */}
            <section
                ref={heroRef}
                style={{
                    position: 'relative', width: '100%', minHeight: '100vh',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: '#ffffff',
                    overflow: 'hidden',
                    padding: '130px 24px 110px',
                    boxSizing: 'border-box',
                }}
            >
                {/* floating gradient blobs — REMOVED per user request */}

                {/* dot grid — same as WhoWeAre */}
                <div style={{
                    position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
                    backgroundImage: 'radial-gradient(rgba(37,99,235,0.13) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(ellipse 85% 65% at 50% 50%, black 5%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 85% 65% at 50% 50%, black 5%, transparent 100%)',
                    opacity: 0.5,
                }} />

                {/* particles */}
                {particles.map(p => (
                    <div key={p.id} style={{
                        position: 'absolute', left: p.left, top: p.top,
                        width: `${p.size}px`, height: `${p.size}px`,
                        borderRadius: '50%', background: p.color, opacity: p.op,
                        pointerEvents: 'none', zIndex: 1,
                        animation: `floatParticle ${p.dur} ease-in-out infinite`,
                        animationDelay: p.delay,
                    }} />
                ))}

                {/* top scan line */}
                <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
                    background: `linear-gradient(90deg, transparent 0%, ${T.primary} 30%, rgba(96,165,250,0.8) 50%, ${T.primary} 70%, transparent 100%)`,
                    zIndex: 2, animation: 'scanPulse 4s ease-in-out infinite',
                }} />

                {/* edge vignette */}
                <div style={{
                    position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
                    background: 'radial-gradient(ellipse 130% 110% at 50% 50%, transparent 45%, rgba(255,255,255,0.6) 100%)',
                }} />

                {/* ── HERO CONTENT ── */}
                <div style={{
                    position: 'relative', zIndex: 3, maxWidth: '860px', width: '100%',
                    textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center',
                }}>

                    {/* eyebrow — matches WhoWeAre section title style */}
                        <h4 style={{
                            color: 'var(--c-primary)',
                            fontSize: '0.9rem',
                            fontWeight: 700,
                            letterSpacing: '0.1em',
                            marginTop: 0,
                            marginBottom: '1rem',
                            fontFamily: "'Inter', system-ui, sans-serif",
                            textTransform: 'uppercase'
                        }}>
                            ─── WE'RE HIRING
                        </h4>

                    {/* headline — increased size per user request */}
                    <h1 style={{
                            fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                            fontWeight: 800,
                            marginTop: 0,
                            marginBottom: '1.5rem',
                            lineHeight: 1.2,
                            color: '#111827',
                            fontFamily: "'Inter', system-ui, sans-serif",
                            transform: heroVisible ? 'translateY(0)' : 'translateY(40px)',
                            opacity: heroVisible ? 1 : 0,
                            transition: 'transform 0.8s ease-out 0.08s, opacity 0.8s ease-out 0.08s',
                    }}>
                        Build Your Future<br />
                        <span style={{ color: T.primary }}>With Us.</span>
                    </h1>

                    {/* divider — gradient line */}
                    <div style={{
                        width: '60px', height: '2px', margin: '32px auto',
                        background: `linear-gradient(90deg, transparent, ${T.primary}, transparent)`,
                        borderRadius: '2px',
                        transform: heroVisible ? 'scaleX(1)' : 'scaleX(0)',
                        opacity: heroVisible ? 1 : 0,
                        transition: 'transform 0.7s ease-out 0.30s, opacity 0.7s ease-out 0.30s',
                    }} />

                    <p style={{
                        margin: '0 auto', maxWidth: '800px',
                        fontSize: '1.15rem',
                        color: '#4b5563', lineHeight: 1.6,
                        fontFamily: "'Inter', system-ui, sans-serif",
                        transform: heroVisible ? 'translateY(0)' : 'translateY(40px)',
                        opacity: heroVisible ? 1 : 0,
                        transition: 'transform 0.75s ease-out 0.26s, opacity 0.75s ease-out 0.26s',
                    }}>
                        We are always looking for talented professionals who want to solve meaningful
                        problems, build world-class products, and create technology that genuinely makes an impact.
                    </p>

                    {/* CTAs REMOVED per user request */}

                </div>
            </section>

            {/* ════════════════════════════════
          JOBS SECTION — white bg, glassmorphism cards
      ════════════════════════════════ */}
            <section
                id="jobs"
                style={{
                    position: 'relative', width: '100%',
                    background: T.bgAlt,
                    padding: '100px 24px 120px',
                    overflow: 'hidden',
                    boxSizing: 'border-box',
                }}
            >
                {/* background blobs — REMOVED per user request */}

                {/* subtle dot grid */}
                <div style={{
                    position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
                    backgroundImage: `radial-gradient(rgba(37,99,235,0.10) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(ellipse 100% 80% at 50% 50%, black 0%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 100% 80% at 50% 50%, black 0%, transparent 100%)',
                    opacity: 0.40,
                }} />

                {/* top divider */}
                <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
                    background: `linear-gradient(90deg, transparent, ${T.border}, transparent)`, zIndex: 2,
                }} />

                <div style={{ position: 'relative', zIndex: 3, maxWidth: '1200px', margin: '0 auto' }}>

                    {/* ── Section header — matches WhoWeAre wa-section-title + wa-section-subtitle ── */}
                    <div ref={labelRef} style={{ marginBottom: '64px' }}>

                        <p style={{
                            fontSize: '0.9rem', fontWeight: 700, letterSpacing: '0.1em',
                            textTransform: 'uppercase', color: T.primary, margin: '0 0 0.5rem',
                            fontFamily: "'Inter', system-ui, sans-serif",
                            transform: labelVisible ? 'translateY(0)' : 'translateY(20px)',
                            opacity: labelVisible ? 1 : 0,
                            transition: 'all 0.65s ease-out 0s',
                        }}>
                            ─── OPEN POSITIONS
                        </p>

                        <h2 style={{
                            margin: '0 0 1.2rem',
                            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800,
                            letterSpacing: '-0.025em', lineHeight: 1.15,
                            color: T.textDark,
                            fontFamily: "'Inter', system-ui, sans-serif",
                            transform: labelVisible ? 'translateY(0)' : 'translateY(30px)',
                            opacity: labelVisible ? 1 : 0,
                            transition: 'all 0.75s ease-out 0.1s',
                        }}>
                            {JOBS.length} Roles Across Every Discipline
                        </h2>

                        <p style={{
                            margin: '0 0 2.5rem', maxWidth: '800px',
                            fontSize: '1.15rem', color: T.textBody,
                            lineHeight: 1.65, fontFamily: "'Inter', system-ui, sans-serif",
                            transform: labelVisible ? 'translateY(0)' : 'translateY(30px)',
                            opacity: labelVisible ? 1 : 0,
                            transition: 'all 0.75s ease-out 0.2s',
                        }}>
                            Explore every open role and find where your skills can make the biggest impact.
                        </p>

                        <div style={{
                            display: 'inline-flex', 
                            background: '#f1f5f9',
                            padding: '4px',
                            borderRadius: '100px',
                            border: `1px solid ${T.border}`,
                            marginBottom: '32px',
                            transform: labelVisible ? 'translateY(0)' : 'translateY(30px)',
                            opacity: labelVisible ? 1 : 0,
                            transition: 'all 0.75s ease-out 0.25s',
                        }}>
                            <button
                                onClick={() => setViewMode('grid')}
                                style={{
                                    display: 'flex', alignItems: 'center', gap: '8px',
                                    padding: '8px 20px', 
                                    borderRadius: '100px', 
                                    border: 'none',
                                    background: viewMode === 'grid' ? '#ffffff' : 'transparent',
                                    color: viewMode === 'grid' ? T.primary : T.textBody,
                                    boxShadow: viewMode === 'grid' ? '0 2px 4px rgba(0,0,0,0.05)' : 'none',
                                    cursor: 'pointer', 
                                    transition: 'all 0.2s ease',
                                    fontSize: '0.85rem',
                                    fontWeight: 600,
                                }}
                            >
                                <LayoutGrid size={16} /> Grid
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                style={{
                                    display: 'flex', alignItems: 'center', gap: '8px',
                                    padding: '8px 20px', 
                                    borderRadius: '100px', 
                                    border: 'none',
                                    background: viewMode === 'list' ? '#ffffff' : 'transparent',
                                    color: viewMode === 'list' ? T.primary : T.textBody,
                                    boxShadow: viewMode === 'list' ? '0 2px 4px rgba(0,0,0,0.05)' : 'none',
                                    cursor: 'pointer', 
                                    transition: 'all 0.2s ease',
                                    fontSize: '0.85rem',
                                    fontWeight: 600,
                                }}
                            >
                                <List size={16} /> List
                            </button>
                        </div>

                        {/* rule divider — matches wa-divider */}
                        <div style={{
                            height: '1px',
                            background: `linear-gradient(90deg, transparent, ${T.border}, transparent)`,
                            transform: labelVisible ? 'scaleX(1)' : 'scaleX(0)',
                            opacity: labelVisible ? 1 : 0,
                            transition: 'all 0.7s ease-out 0.3s',
                        }} />
                    </div>

                    {/* ── Jobs grid ── */}
                    <div
                        ref={gridRef}
                        style={{
                            display: viewMode === 'grid' ? 'grid' : 'flex',
                            gridTemplateColumns: viewMode === 'grid' ? 'repeat(auto-fill, minmax(320px, 1fr))' : '1fr',
                            flexDirection: viewMode === 'list' ? 'column' : 'row',
                            gap: '20px',
                        }}
                    >
                        {JOBS.map((job, i) => (
                            <JobCard key={job.title} job={job} index={i} parentVisible={gridVisible} viewMode={viewMode} />
                        ))}
                    </div>

                    {/* ── Bottom CTA band — matches wa-glass-card + WhoWeAre section style ── */}
                    <div
                        ref={bandRef}
                        style={{
                            marginTop: '80px', padding: '3rem',
                            borderRadius: '16px',
                            background: '#ffffff',
                            border: `1px solid ${T.border}`,
                            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                            flexWrap: 'wrap', gap: '24px',
                            position: 'relative', overflow: 'hidden',
                            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
                            transform: bandVisible ? 'translateY(0)' : 'translateY(32px)',
                            opacity: bandVisible ? 1 : 0,
                            transition: 'all 0.85s ease-out 0.55s',
                        }}
                    >
                        {/* top accent */}
                        <div style={{
                            position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                            borderRadius: '16px 16px 0 0',
                            background: `linear-gradient(90deg, transparent, ${T.primary}, transparent)`,
                        }} />
                        {/* inner glow */}
                        <div style={{
                            position: 'absolute', top: '-40%', left: '50%', transform: 'translateX(-50%)',
                            width: '500px', height: '250px',
                            background: `radial-gradient(ellipse at center, ${T.primaryLight} 0%, transparent 70%)`,
                            pointerEvents: 'none',
                        }} />

                        <div style={{ position: 'relative' }}>
                            <h3 style={{
                                margin: '0 0 8px',
                                fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)', fontWeight: 800,
                                letterSpacing: '-0.02em', color: T.textDark,
                                fontFamily: "'Inter', system-ui, sans-serif",
                            }}>
                                Don't see a role that fits?
                            </h3>
                            <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: 1.65, color: T.textBody, fontFamily: "'Inter', system-ui, sans-serif" }}>
                                Send us your resume — we're always looking for exceptional talent.
                            </p>
                        </div>

                        <button
                            onMouseEnter={() => setBandHov(true)}
                            onMouseLeave={() => setBandHov(false)}
                            onClick={() => alert('Send Resume')}
                            style={{
                                padding: '12px 32px', borderRadius: '8px', border: 'none',
                                cursor: 'pointer', fontSize: '0.9rem', fontWeight: 700,
                                fontFamily: "'Inter', system-ui, sans-serif", letterSpacing: '0.01em', flexShrink: 0,
                                background: bandHov ? T.primaryHover : T.primary,
                                color: '#fff',
                                boxShadow: 'none',
                                transform: bandHov ? 'translateY(-2px)' : 'translateY(0)',
                                transition: 'all 0.25s ease',
                            }}
                        >
                            Send Your Resume →
                        </button>
                    </div>
                </div>
            </section>

            {/* ── Keyframes ── */}
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        .careers-jobs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        @keyframes floatBlob {
          0%   { transform: translate(0px,   0px)   scale(1);    }
          33%  { transform: translate(38px, -30px)  scale(1.06); }
          66%  { transform: translate(-24px, 20px)  scale(0.95); }
          100% { transform: translate(0px,   0px)   scale(1);    }
        }
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0px)   scale(1);   }
          50%       { transform: translateY(-16px) scale(1.2); }
        }
        @keyframes pulseDot {
          0%, 100% { box-shadow: 0 0 5px #2563EB, 0 0 12px rgba(37,99,235,0.4);  opacity: 0.8; }
          50%       { box-shadow: 0 0 10px #2563EB, 0 0 22px rgba(37,99,235,0.6); opacity: 1;   }
        }
        @keyframes scanPulse {
          0%, 100% { opacity: 0.4; }
          50%       { opacity: 0.9; }
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.35; transform: scaleY(1);   }
          50%       { opacity: 0.85; transform: scaleY(1.1); }
        }

        /* Responsive grid — 2 col tablet, 1 col mobile */
        @media (max-width: 1024px) {
          .careers-jobs-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .careers-jobs-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </div>
    );
};

/* ══════════════════════════════════════
   HERO BUTTONS
══════════════════════════════════════ */
function HeroPrimaryBtn({ children, onClick }) {
    const [hov, setHov] = useState(false);
    return (
        <button onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} onClick={onClick}
            style={{
                padding: '12px 30px', borderRadius: '8px', border: 'none',
                cursor: 'pointer', fontSize: '0.9rem', fontWeight: 700,
                fontFamily: "'Inter', system-ui, sans-serif", letterSpacing: '0.01em',
                background: hov ? '#1D4ED8' : '#2563EB',
                color: '#fff',
                boxShadow: 'none',
                transform: hov ? 'translateY(-2px)' : 'translateY(0)',
                transition: 'all 0.25s ease',
            }}>
            {children}
        </button>
    );
}

function HeroGhostBtn({ children, onClick }) {
    const [hov, setHov] = useState(false);
    return (
        <button onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} onClick={onClick}
            style={{
                padding: '12px 30px', borderRadius: '8px', cursor: 'pointer',
                fontSize: '0.9rem', fontWeight: 700,
                fontFamily: "'Inter', system-ui, sans-serif", letterSpacing: '0.01em',
                background: hov ? 'rgba(37,99,235,0.07)' : 'transparent',
                border: `1px solid ${hov ? '#2563EB' : '#e5e7eb'}`,
                color: hov ? '#2563EB' : '#4b5563',
                transform: hov ? 'translateY(-2px)' : 'translateY(0)',
                transition: 'all 0.25s ease',
            }}>
            {children}
        </button>
    );
}

export default CareersPage;