import React from 'react';
import { Hero } from '../components/Hero';
import './Home.css';

export const Home = () => {
    return (
        <div className="home-page-new">
            <Hero />

            {/* 1. Hero & Stats Bar */}
            <section className="home-hero reveal">
                <div className="container">
                    <p className="hero-subtitle">— Your Premier Technology Transformation Partner —</p>
                    <h1 className="hero-title reveal reveal-stagger-1">
                        TRANSFORM YOUR<br />
                        <span className="text-yellow">DIGITAL FUTURE</span><br />
                        WITH HALFTONE SYSTEMS
                    </h1>
                    <div className="hero-divider reveal reveal-stagger-2"></div>
                    <p className="hero-tagline reveal reveal-stagger-3">
                        Where Innovation Drives Excellence — and Your Success Is Our Mission.
                    </p>
                    <h2 className="hero-quote text-yellow reveal reveal-stagger-4">
                        " HALFTONE SYSTEMS RUNS TECHNOLOGIES "
                    </h2>
                    <h3 className="hero-subquote reveal reveal-stagger-5">
                        BUSINESSES WITH INFORMATION TECHNOLOGY & TECHNOLOGY PRODUCTS
                    </h3>
                    <p className="hero-description reveal reveal-stagger-6">
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
            <section className="home-section light-bg reveal">
                <div className="container">
                    <div className="section-header-centered reveal">
                        <h2>ACCELERATE YOUR DIGITAL TRANSFORMATION</h2>
                        <p className="header-subtitle">The partner you need. The expertise you deserve. The results that matter.</p>
                        <hr className="header-divider-blue" />
                    </div>

                    <div className="accelerate-grid">
                        <div className="accelerate-left reveal reveal-stagger-1">
                            <div className="accelerate-content-box">
                                <h3>Accelerate Your Digital Transformation Journey</h3>
                                <hr className="box-divider-yellow" />
                                <p>As a premier mobile app development and IT consulting powerhouse, Halftone Systems navigates the most complex digital landscapes with confidence and precision.</p>
                                <p>We've transformed organizations across North America and India — helping them unlock full potential through cutting-edge technology, strategic innovation, and results you can measure from day one.</p>
                            </div>
                        </div>
                        <div className="accelerate-right">
                            <div className="feature-card reveal reveal-stagger-2">
                                <h4>🚀 Risk-Free Innovation</h4>
                                <p>Battle-tested methodologies that minimize project risk while maximizing ROI on every technology investment.</p>
                            </div>
                            <div className="feature-card reveal reveal-stagger-3">
                                <h4>🤝 100% Referenceable</h4>
                                <p>Every client becomes a long-term success story. Our track record is built on repeat partnerships and unwavering trust.</p>
                            </div>
                            <div className="feature-card reveal reveal-stagger-4">
                                <h4>⚡ Agile Collaboration</h4>
                                <p>Our high-performance teams integrate seamlessly with yours — driving alignment, speed, and knowledge transfer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Pillars Section */}
            <section className="home-section white-bg reveal">
                <div className="container">
                    <div className="section-header-centered reveal">
                        <h2>WHAT SETS HALFTONE SYSTEMS APART</h2>
                        <p className="header-subtitle">Four pillars of excellence that make us the partner industry leaders trust.</p>
                        <hr className="header-divider-blue" />
                    </div>

                    <div className="pillars-grid">
                        <div className="pillar-card bg-light-blue reveal reveal-stagger-1">
                            <div className="card-icon">🧠</div>
                            <h4>Deep Technical Expertise</h4>
                            <p>Our multidisciplinary teams master diverse technology stacks — ensuring the perfect, precision-engineered solution for every unique challenge.</p>
                        </div>
                        <div className="pillar-card bg-light-blue reveal reveal-stagger-2">
                            <div className="card-icon">🤝</div>
                            <h4>Strategic Partnership Network</h4>
                            <p>Exclusive collaborations with global technology leaders amplify our capabilities and unlock premium resources for your projects.</p>
                        </div>
                        <div className="pillar-card bg-light-blue reveal reveal-stagger-3">
                            <div className="card-icon">📊</div>
                            <h4>Data-Driven Results</h4>
                            <p>Every solution is built around measurable KPIs — delivering tangible ROI and undeniable business impact from day one.</p>
                        </div>
                        <div className="pillar-card bg-light-blue reveal reveal-stagger-4">
                            <div className="card-icon">🌍</div>
                            <h4>Global Reach, Local Excellence</h4>
                            <p>With offices across India and North America, we fuse local market insights with international best practices.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Solutions Section */}
            <section className="home-section light-bg reveal">
                <div className="container">
                    <div className="section-header-centered reveal">
                        <h2>END-TO-END DIGITAL SOLUTIONS</h2>
                        <p className="header-subtitle">Every capability you need — under one roof, powered by one team.</p>
                        <hr className="header-divider-blue" />
                    </div>

                    <div className="solutions-grid">
                        <div className="solution-card bg-yellow reveal reveal-stagger-1">
                            <div className="card-icon">📱</div>
                            <h4>Custom Mobile App Development</h4>
                            <p>iOS, Android & cross-platform apps crafted for performance and delight.</p>
                        </div>
                        <div className="solution-card bg-yellow reveal reveal-stagger-2">
                            <div className="card-icon">🏢</div>
                            <h4>ERP Solutions</h4>
                            <p>SAP-powered enterprise platforms that unify operations and drive efficiency.</p>
                        </div>
                        <div className="solution-card bg-yellow reveal reveal-stagger-3">
                            <div className="card-icon">💡</div>
                            <h4>Enterprise IT Consulting</h4>
                            <p>Strategic advisory that aligns technology investments with business goals.</p>
                        </div>
                        <div className="solution-card bg-yellow reveal reveal-stagger-4">
                            <div className="card-icon">🔄</div>
                            <h4>Digital Transformation Strategy</h4>
                            <p>Roadmaps that turn complexity into competitive clarity.</p>
                        </div>
                        <div className="solution-card bg-yellow reveal reveal-stagger-5">
                            <div className="card-icon">☁️</div>
                            <h4>Cloud Migration & Management</h4>
                            <p>Seamless, risk-managed journeys to scalable cloud infrastructure.</p>
                        </div>
                        <div className="solution-card bg-yellow reveal reveal-stagger-6">
                            <div className="card-icon">⚙️</div>
                            <h4>Business Process Optimization</h4>
                            <p>Intelligent automation that frees your people to do their best work.</p>
                        </div>
                        <div className="solution-card bg-yellow reveal reveal-stagger-7">
                            <div className="card-icon">🏥</div>
                            <h4>Medical Coding & Digital Health</h4>
                            <p>Specialized health-tech solutions for accuracy, compliance, and care.</p>
                        </div>
                        <div className="solution-card bg-yellow reveal reveal-stagger-8">
                            <div className="card-icon">🤖</div>
                            <h4>AI, IoT & Emerging Platforms</h4>
                            <p>Future-ready technologies implemented today for tomorrow's advantage.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Bottom Value Props */}
            <section className="home-value-props bg-dark-blue reveal">
                <div className="container">
                    <div className="value-props-grid">
                        <div className="value-prop-card reveal reveal-stagger-1">
                            <h4 className="text-yellow">⚡ Rapid Time-to-Market</h4>
                            <p className="text-white">Agile methodology ensures faster deployment without sacrificing quality — getting your solutions live and generating value at speed.</p>
                        </div>
                        <div className="value-prop-card border-left-dark reveal reveal-stagger-2">
                            <h4 className="text-yellow">🔬 Innovation-First</h4>
                            <p className="text-white">We leverage AI, IoT, cloud computing and emerging platforms to keep you decisively ahead of market trends.</p>
                        </div>
                        <div className="value-prop-card border-left-dark reveal reveal-stagger-3">
                            <h4 className="text-yellow">🏆 Proven Track Record</h4>
                            <p className="text-white">Transformations delivered across North America and India — solutions that drive real, compounding growth and competitive advantage.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Bottom CTA */}
            <section className="home-cta reveal">
                <div className="container">
                    <div className="cta-box bg-dark-blue reveal">
                        <h2 className="text-white">Ready to Lead Your Industry?</h2>
                        <p className="text-white">Transform your vision into reality with technology solutions that don't just meet today's needs — they anticipate tomorrow's opportunities.</p>
                        <hr className="cta-divider reveal reveal-stagger-1" />

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
