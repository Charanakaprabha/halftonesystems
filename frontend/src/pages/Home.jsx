import React from 'react';
import { motion } from 'framer-motion';
import { Target, Award, Zap, Brain, Handshake, BarChart, Globe, Smartphone, Building, Lightbulb, RefreshCw, Cloud, Settings, Activity, Bot, Microscope, Trophy } from 'lucide-react';
import { Hero } from '../components/Hero';
import './Home.css';

export const Home = () => {
    return (
        <div className="home-page-new">
            <Hero />

            {/* 1. Hero & Stats Bar */}
            <section className="home-hero-stats reveal" style={{
                background: '#ffffff',
                color: '#0b1f40'
            }}>
                <div className="container" style={{ textAlign: 'center', padding: '6rem 1rem 4rem' }}>
                    <p className="hero-subtitle" style={{ margin: '0 auto 1.5rem', textAlign: 'center', color: '#3b82f6' }}>— Your Premier Technology Transformation Partner —</p>
                    <h1 className="hero-title reveal reveal-stagger-1" style={{ 
                        color: '#0b1f40',
                        fontFamily: "'Inter', system-ui, sans-serif",
                        fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
                        fontWeight: 800,
                        letterSpacing: '-0.03em',
                        lineHeight: 1.1
                    }}>
                        TRANSFORM YOUR<br />
                        DIGITAL FUTURE<br />
                        WITH <span className="text-blue" style={{ color: '#3b82f6' }}>HALFTONE SYSTEMS</span>
                    </h1>
                    <div className="hero-divider reveal reveal-stagger-2" style={{ backgroundColor: '#0b1f40' }}></div>
                    <p className="hero-tagline reveal reveal-stagger-3" style={{ color: '#475569' }}>
                        Where Innovation Drives Excellence — and Your Success Is Our Mission.
                    </p>
                    <h2 className="hero-quote text-blue reveal reveal-stagger-4">
                        " HALFTONE SYSTEMS RUNS TECHNOLOGIES "
                    </h2>
                    <h3 className="hero-subquote reveal reveal-stagger-5" style={{ color: '#0b1f40' }}>
                        BUSINESSES WITH INFORMATION TECHNOLOGY & TECHNOLOGY PRODUCTS
                    </h3>
                    <p className="hero-description reveal reveal-stagger-6" style={{ color: '#475569' }}>
                        From Fortune 500 enterprises to ambitious startups, Halftone Systems crafts digital experiences that revolutionize how you do business. We don't just deliver technology — we architect competitive advantages that last.
                    </p>
                </div>
            </section>

            <section className="home-stats-bar reveal">
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-item">
                            <h3 className="stat-number">100+</h3>
                            <p className="stat-label">Projects Delivered</p>
                        </div>
                        <div className="stat-item border-left">
                            <h3 className="stat-number">15+</h3>
                            <p className="stat-label">Industries Served</p>
                        </div>
                        <div className="stat-item border-left">
                            <h3 className="stat-number">2</h3>
                            <p className="stat-label">Continents. One Vision.</p>
                        </div>
                        <div className="stat-item border-left">
                            <h3 className="stat-number">100%</h3>
                            <p className="stat-label">Client Referenceable</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Accelerate Section */}
            <section className="home-section light-bg">
                <div className="container">
                    <div className="section-header-centered reveal">
                        <h2 style={{ 
                            fontFamily: "'Inter', system-ui, sans-serif",
                            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                            fontWeight: 800,
                            letterSpacing: '-0.03em',
                            lineHeight: 1.1,
                            color: '#0b1f40'
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
                                <motion.div 
                                    key={index}
                                    className="bento-card-full"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
                                >
                                    <div className="bento-content-header">
                                        <h4 style={{ fontFamily: "'Rubik', sans-serif" }}>{card.icon} {card.title}</h4>
                                    </div>
                                    <img src={card.img} alt={card.title} className="bento-image-full" />
                                    <div className="bento-content-body">
                                        <p>{card.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Pillars Section */}
            <section className="home-section white-bg reveal">
                <div className="container">
                    <div className="section-header-centered reveal">
                        <h2 style={{ 
                            fontFamily: "'Inter', system-ui, sans-serif",
                            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
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
                                <h4 style={{ fontFamily: "'Rubik', sans-serif" }}>Deep Technical Expertise</h4>
                            </div>
                            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400" className="home-card-image" alt="Technical Expertise" />
                            <div className="card-content-body">
                                <p>Our multidisciplinary teams master diverse technology stacks — ensuring the perfect, precision-engineered solution for every unique challenge.</p>
                            </div>
                        </div>
                        <div className="pillar-card bg-light-blue reveal reveal-stagger-2">
                            <div className="pillar-header">
                                <div className="card-icon"><Handshake size={32} color="#3b82f6" /></div>
                                <h4 style={{ fontFamily: "'Rubik', sans-serif" }}>Strategic Partnerships</h4>
                            </div>
                            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" className="home-card-image" alt="Strategic Partnerships" />
                            <div className="card-content-body">
                                <p>Exclusive collaborations with global technology leaders amplify our capabilities and unlock premium resources for your projects.</p>
                            </div>
                        </div>
                        <div className="pillar-card bg-light-blue reveal reveal-stagger-3">
                            <div className="pillar-header">
                                <div className="card-icon"><BarChart size={32} color="#3b82f6" /></div>
                                <h4 style={{ fontFamily: "'Rubik', sans-serif" }}>Data-Driven Results</h4>
                            </div>
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400" className="home-card-image" alt="Data-Driven Results" />
                            <div className="card-content-body">
                                <p>Every solution is built around measurable KPIs — delivering tangible ROI and undeniable business impact from day one.</p>
                            </div>
                        </div>
                        <div className="pillar-card bg-light-blue reveal reveal-stagger-4">
                            <div className="pillar-header">
                                <div className="card-icon"><Globe size={32} color="#3b82f6" /></div>
                                <h4 style={{ fontFamily: "'Rubik', sans-serif" }}>Global Reach, Local Excellence</h4>
                            </div>
                            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400" className="home-card-image" alt="Global Reach" />
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
                            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
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

            {/* 6. Bottom CTA */}
            <section className="home-cta reveal">
                <div className="container">
                    <div className="cta-box bg-dark-blue reveal">
                        <h2 className="text-white" style={{ 
                            fontFamily: "'Inter', system-ui, sans-serif",
                            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                            fontWeight: 800,
                            letterSpacing: '-0.03em',
                            lineHeight: 1.1,
                            color: '#ffffff'
                        }}>Ready to Lead Your Industry?</h2>
                        <p className="text-white">Transform your vision into reality with technology solutions that don't just meet today's needs — they anticipate tomorrow's opportunities.</p>

                        <div className="cta-benefits reveal reveal-stagger-2">
                            <span className="text-yellow">✦ Free Consultation</span>
                            <span className="text-yellow spacer">|</span>
                            <span className="text-yellow">Custom Technology Roadmap</span>
                            <span className="text-yellow spacer">|</span>
                            <span className="text-yellow">Measurable ROI from Day One ✦</span>
                        </div>

                        <p className="text-light-blue cta-subtext reveal reveal-stagger-3">
                            Join the ranks of forward-thinking organizations who have chosen Halftone Systems as their trusted digital transformation partner.
                        </p>
                        <h3 className="text-white cta-contact reveal reveal-stagger-4">Contact us today • www.halftonesystems.com</h3>
                    </div>
                </div>
            </section>

        </div>
    );
};
