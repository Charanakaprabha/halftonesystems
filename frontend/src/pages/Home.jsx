import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, Award, Zap, Brain, Handshake, BarChart, Globe, Smartphone, Building, Lightbulb, RefreshCw, Cloud, Settings, Activity, Bot, Microscope, Trophy, ArrowRight, Mail } from 'lucide-react';
import { Hero } from '../components/Hero';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Home.css';

export const Home = () => {
    const pillarsRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: pillarsRef,
        offset: ["start end", "end start"]
    });

    const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 0.8, 0.8, 0]);

    return (
        <div className="home-page-new">
            <Hero />



            {/* 2. Accelerate Sticky Section */}
            <section className="home-section light-bg accelerate-section" style={{ paddingTop: '80px' }}>
                <div className="container">
                    <div className="section-header-centered reveal">
                        <h2 className="section-title" style={{ 
                            fontSize: 'clamp(1.5rem, 5vw, 3.5rem)',
                            fontWeight: 800
                        }}>ACCELERATE YOUR DIGITAL TRANSFORMATION</h2>
                        <p className="header-subtitle">The partner you need. The expertise you deserve. The results that matter.</p>
                    </div>

                    <div className="accelerate-sticky-wrapper">
                        <div className="accelerate-left-sticky">
                            <div className="accelerate-content-box" style={{ position: 'relative' }}>
                                <div className="journey-stamp">
                                    Strategic
                                </div>
                                <h3 style={{ fontFamily: "'Rubik', sans-serif" }}>Accelerate Your Digital Transformation Journey</h3>
                                <hr className="box-divider-blue-light" />
                                <p>As a premier mobile app development and IT consulting powerhouse, Halftone Systems navigates the most complex digital landscapes with confidence and precision.</p>
                                <p>We've transformed organizations across North America and India — helping them unlock full potential through cutting-edge technology, strategic innovation, and results you can measure from day one.</p>
                                <div style={{ marginTop: '2rem' }}>
                                    <Link to="/contact" className="btn btn-primary" style={{ padding: '14px 28px', fontSize: '1rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                                        <Mail size={18} /> info@halftonesystems.com <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="accelerate-right-scroll">
                            {[
                                {
                                    title: "Risk-Free Innovation",
                                    icon: <Target className="feature-icon" size={20} />,
                                    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=400",
                                    desc: "Battle-tested methodologies that minimize project risk while maximizing ROI on every investment."
                                },
                                {
                                    title: "100% Referenceable",
                                    icon: <Award className="feature-icon" size={20} />,
                                    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400",
                                    desc: "Every client becomes a long-term success story built on repeat partnerships and unwavering trust."
                                },
                                {
                                    title: "Agile Collaboration",
                                    icon: <Zap className="feature-icon" size={20} />,
                                    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400",
                                    desc: "Our high-performance teams integrate seamlessly with yours — driving alignment and speed."
                                }
                            ].map((card, index) => (
                                <div 
                                    key={index}
                                    className="bento-card-full bg-white"
                                >
                                    <div className="bento-content-header">
                                        <h4 style={{ fontFamily: "'Rubik', sans-serif" }}>{card.icon} {card.title}</h4>
                                    </div>
                                    <img src={card.img} alt={card.title} className="bento-image-full" />
                                    <div className="bento-content-body">
                                        <p>{card.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Pillars Section (With Snake growth graph animation) */}
            <section className="home-section white-bg reveal" ref={pillarsRef} style={{ position: 'relative', overflow: 'hidden' }}>
                {/* Scroll-synced Snake Background */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}>
                    <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                        <motion.path
                            d="M -100 1000 L 350 450 L 550 750 L 1100 -100"
                            fill="none"
                            stroke="#3b82f6"
                            strokeWidth="150"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{ 
                                pathLength,
                                opacity,
                                strokeOpacity: 0.8
                            }}
                        />
                    </svg>
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="section-header-centered reveal">
                        <h2 style={{ 
                            fontFamily: "'Inter', system-ui, sans-serif",
                            fontSize: 'clamp(1.5rem, 5vw, 3.5rem)',
                            fontWeight: 800,
                            letterSpacing: '-0.03em',
                            lineHeight: 1.1,
                            color: '#0b1f40'
                        }}>WHAT SETS HALFTONE SYSTEMS APART</h2>
                        <p className="header-subtitle">Four pillars of excellence that make us the partner industry leaders trust.</p>
                    </div>

                    <div className="pillars-grid">
                        <div className="pillar-card bg-light-blue reveal reveal-stagger-1">
                            <div className="pillar-header">
                                <div className="card-icon"><Brain size={32} color="#3b82f6" /></div>
                            </div>
                            <h4 style={{ fontFamily: "'Rubik', sans-serif" }}>Deep Technical Expertise</h4>
                            <div className="card-content-body">
                                <p>Our multidisciplinary teams master diverse technology stacks, ensuring the perfect solution for your unique challenge.</p>
                            </div>
                        </div>
                        <div className="pillar-card bg-light-blue reveal reveal-stagger-2">
                            <div className="pillar-header">
                                <div className="card-icon"><Handshake size={32} color="#3b82f6" /></div>
                            </div>
                            <h4 style={{ fontFamily: "'Rubik', sans-serif" }}>Strategic Partnerships</h4>
                            <div className="card-content-body">
                                <p>Exclusive collaborations with global technology leaders amplify our capabilities and unlock premium resources for your projects.</p>
                            </div>
                        </div>
                        <div className="pillar-card bg-light-blue reveal reveal-stagger-3">
                            <div className="pillar-header">
                                <div className="card-icon"><BarChart size={32} color="#3b82f6" /></div>
                            </div>
                            <h4 style={{ fontFamily: "'Rubik', sans-serif" }}>Data-Driven Results</h4>
                            <div className="card-content-body">
                                <p>Every solution is built around measurable KPIs — delivering tangible ROI and undeniable business impact from day one.</p>
                            </div>
                        </div>
                        <div className="pillar-card bg-light-blue reveal reveal-stagger-4">
                            <div className="pillar-header">
                                <div className="card-icon"><Globe size={32} color="#3b82f6" /></div>
                            </div>
                            <h4 style={{ fontFamily: "'Rubik', sans-serif" }}>Global Reach, Local Excellence</h4>
                            <div className="card-content-body">
                                <p>With offices across India and North America, we fuse local market insights with international best practices.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Solutions Section */}
            <section className="home-section light-bg reveal">
                <div className="container">
                    <div className="section-header-centered reveal">
                        <h2 style={{ 
                            fontFamily: "'Inter', system-ui, sans-serif",
                            fontSize: 'clamp(1.5rem, 5vw, 3.5rem)',
                            fontWeight: 800,
                            letterSpacing: '-0.03em',
                            lineHeight: 1.1,
                            color: '#0b1f40'
                        }}>END-TO-END DIGITAL SOLUTIONS</h2>
                        <p className="header-subtitle">Every capability you need — under one roof, powered by one team.</p>
                    </div>

                    <div className="solutions-grid">
                        <div className="solution-card bg-yellow reveal reveal-stagger-1">
                            <div className="solution-header">
                                <div className="card-icon"><Smartphone size={32} color="#0b1f40" /></div>
                                <h4>Custom Mobile App Development</h4>
                            </div>
                            <div className="card-content-body">
                                <p>iOS, Android & cross-platform apps crafted for performance and delight.</p>
                            </div>
                        </div>
                        <div className="solution-card bg-yellow reveal reveal-stagger-2">
                            <div className="solution-header">
                                <div className="card-icon"><Building size={32} color="#0b1f40" /></div>
                                <h4>ERP Solutions</h4>
                            </div>
                            <div className="card-content-body">
                                <p>SAP-powered enterprise platforms that unify operations and drive efficiency.</p>
                            </div>
                        </div>
                        <div className="solution-card bg-yellow reveal reveal-stagger-3">
                            <div className="solution-header">
                                <div className="card-icon"><Lightbulb size={32} color="#0b1f40" /></div>
                                <h4>Enterprise IT Consulting</h4>
                            </div>
                            <div className="card-content-body">
                                <p>Strategic advisory that aligns technology investments with business goals.</p>
                            </div>
                        </div>
                        <div className="solution-card bg-yellow reveal reveal-stagger-4">
                            <div className="solution-header">
                                <div className="card-icon"><RefreshCw size={32} color="#0b1f40" /></div>
                                <h4>Digital Transformation Strategy</h4>
                            </div>
                            <div className="card-content-body">
                                <p>Roadmaps that turn complexity into competitive clarity.</p>
                            </div>
                        </div>
                        <div className="solution-card bg-yellow reveal reveal-stagger-5">
                            <div className="solution-header">
                                <div className="card-icon"><Cloud size={32} color="#0b1f40" /></div>
                                <h4>Cloud Migration & Management</h4>
                            </div>
                            <div className="card-content-body">
                                <p>Seamless, risk-managed journeys to scalable cloud infrastructure.</p>
                            </div>
                        </div>
                        <div className="solution-card bg-yellow reveal reveal-stagger-6">
                            <div className="solution-header">
                                <div className="card-icon"><Settings size={32} color="#0b1f40" /></div>
                                <h4>Business Process Optimization</h4>
                            </div>
                            <div className="card-content-body">
                                <p>Intelligent automation that frees your people to do their best work.</p>
                            </div>
                        </div>
                        <div className="solution-card bg-yellow reveal reveal-stagger-7">
                            <div className="solution-header">
                                <div className="card-icon"><Activity size={32} color="#0b1f40" /></div>
                                <h4>Medical Coding & Digital Health</h4>
                            </div>
                            <div className="card-content-body">
                                <p>Specialized health-tech solutions for accuracy, compliance, and care.</p>
                            </div>
                        </div>
                        <div className="solution-card bg-yellow reveal reveal-stagger-8">
                            <div className="solution-header">
                                <div className="card-icon"><Bot size={32} color="#0b1f40" /></div>
                                <h4>AI, IoT & Emerging Platforms</h4>
                            </div>
                            <div className="card-content-body">
                                <p>Future-ready technologies implemented today for tomorrow's advantage.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Bottom Value Props */}
            <section className="home-value-props reveal" style={{
                background: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}>
                <div className="container">
                    <div className="value-props-grid">
                        <div className="value-prop-card reveal reveal-stagger-1">
                            <div className="value-prop-header">
                                <h4 className="text-yellow" style={{ fontFamily: "'Rubik', sans-serif" }}><Zap size={24} className="feature-icon" /> Rapid Time-to-Market</h4>
                            </div>
                            <img src="https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&q=80&w=400" className="home-card-image" alt="Time to Market" />
                            <div className="card-content-body">
                                <p className="text-white">Agile methodology ensures faster deployment without sacrificing quality — getting your solutions live and generating value at speed.</p>
                            </div>
                        </div>
                        <div className="value-prop-card border-left-dark reveal reveal-stagger-2">
                            <div className="value-prop-header">
                                <h4 className="text-yellow" style={{ fontFamily: "'Rubik', sans-serif" }}><Microscope size={24} className="feature-icon" /> Innovation-First</h4>
                            </div>
                            <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=400" className="home-card-image" alt="Innovation First" />
                            <div className="card-content-body">
                                <p className="text-white">We leverage AI, IoT, cloud computing and emerging platforms to keep you decisively ahead of market trends.</p>
                            </div>
                        </div>
                        <div className="value-prop-card border-left-dark reveal reveal-stagger-3">
                            <div className="value-prop-header">
                                <h4 className="text-yellow" style={{ fontFamily: "'Rubik', sans-serif" }}><Trophy size={24} className="feature-icon" /> Proven Track Record</h4>
                            </div>
                            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400" className="home-card-image" alt="Proven Track Record" />
                            <div className="card-content-body">
                                <p className="text-white">Transformations delivered across North America and India — solutions that drive real, compounding growth and competitive advantage.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Ready to Lead Your Industry? Box (Matches Image) */}
            <section className="home-section" style={{ padding: '6rem 1.25rem' }}>
                <div className="container" style={{ maxWidth: '1200px' }}>
                    <div className="cta-box-responsive" style={{ 
                        background: 'linear-gradient(90deg, #1e40af 0%, #030712 100%)',
                        padding: 'clamp(2rem, 6vw, 3.5rem) clamp(1rem, 4vw, 2rem)',
                        textAlign: 'center',
                        borderRadius: '1rem',
                        color: 'white',
                        boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.4)',
                        margin: '0 auto'
                    }}>
                        <h2 style={{ 
                            fontSize: 'clamp(1.5rem, 5vw, 2.75rem)', 
                            fontWeight: 800, 
                            marginBottom: '0.75rem',
                            letterSpacing: '-0.02em',
                            color: '#ffffff'
                        }}>Ready to Lead Your Industry?</h2>
                        
                        <p style={{ 
                            fontStyle: 'italic', 
                            fontSize: 'clamp(0.9rem, 2.5vw, 1.05rem)', 
                            marginBottom: '2rem', 
                            maxWidth: '850px', 
                            margin: '0 auto 2.5rem',
                            lineHeight: 1.5,
                            opacity: 0.95
                        }}>
                            Transform your vision into reality with technology solutions that don't just meet today's needs — they anticipate tomorrow's opportunities.
                        </p>
                        
                        <div style={{ 
                            color: '#60a5fa', 
                            fontSize: 'clamp(0.8rem, 2.2vw, 1.1rem)', 
                            fontWeight: 700, 
                            marginBottom: '2rem', 
                            display: 'flex', 
                            justifyContent: 'center', 
                            gap: '10px', 
                            flexWrap: 'wrap',
                            letterSpacing: '0.01em'
                        }}>
                            <span>Free Consultation</span> 
                            <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span> 
                            <span>Custom Technology Roadmap</span> 
                            <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span> 
                            <span>Measurable ROI from Day One</span>
                        </div>
                        
                        <p style={{ 
                            fontSize: 'clamp(0.85rem, 2.2vw, 1rem)', 
                            marginBottom: '2.5rem', 
                            opacity: 0.85,
                            maxWidth: '750px',
                            margin: '0 auto 2.5rem'
                        }}>
                            Join the ranks of forward-thinking organizations who have chosen Halftone Systems as their trusted digital transformation partner.
                        </p>
                        
                        <h3 style={{ 
                            fontSize: 'clamp(1.1rem, 3.5vw, 2.25rem)', 
                            fontWeight: 800,
                            letterSpacing: '-0.01em'
                        }}>
                            Contact us today | <span style={{ fontWeight: 700 }}>HTS</span>
                        </h3>
                    </div>
                </div>
            </section>
        </div>
    );
};
