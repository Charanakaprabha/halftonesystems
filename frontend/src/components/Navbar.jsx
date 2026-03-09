import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsScrolled(currentScrollY > 50);

            // Hide navbar if scrolling down and we're past the top area
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsHidden(true);
            } else {
                // Show navbar if scrolling up
                setIsHidden(false);
            }
            setLastScrollY(currentScrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    // Also close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
        window.scrollTo(0, 0);
    }, [location]);

    const navLinks = [
        {
            name: 'Home',
            href: '/',
            dropdown: []
        },
        {
            name: 'Industries',
            href: '/industries',
            dropdown: [
                { name: 'Automotive', href: '/industries#automotive' },
                { name: 'Healthcare', href: '/industries#healthcare' },
                { name: 'Pharmaceutical', href: '/industries#pharmaceutical' },
                { name: 'Life Sciences', href: '/industries#life-sciences' },
                { name: 'Retail', href: '/industries#retail' },
                { name: 'Travel & Tourism', href: '/industries#travel-tourism' },
                { name: 'Education & Research', href: '/industries#education-research' },
                { name: 'Media & Entertainment', href: '/industries#media-entertainment' }
            ]
        },
        {
            name: 'Who We Are',
            href: '/who-we-are',
            dropdown: [
                { name: 'Our History', href: '/who-we-are' },
                { name: 'Our Journey', href: '/who-we-are' },
                { name: 'Six Pillars', href: '/who-we-are' }
            ]
        },
        {
            name: 'What We Do',
            href: '/what-we-do',
            dropdown: [
                { name: 'Why Choose Us', href: '/what-we-do' },
                { name: 'Our Tech Suite', href: '/what-we-do' },
                { name: 'Specialized Services', href: '/what-we-do' }
            ]
        },
        {
            name: 'Success Stories',
            href: '/success-stories',
            dropdown: [
                { name: 'Case Studies', href: '/success-stories' },
                { name: 'Client Testimonials', href: '/success-stories' },
                { name: 'Impact Reports', href: '/success-stories' }
            ]
        },
        {
            name: 'Careers',
            href: '/careers',
            dropdown: [
                { name: 'Open Positions', href: '/careers' },
                { name: 'Our Culture', href: '/careers' },
                { name: 'Life at Halftone', href: '/careers' }
            ]
        },
    ];

    const scrollToTop = (e) => {
        if (location.pathname === '/') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isHidden ? 'hidden' : ''}`}>

            {/* ── ROW 1: Brand + Utility actions ── */}
            <div className="navbar-top">
                <div className="container navbar-top-inner">
                    {/* Logo / Brand */}
                    <div className="navbar-logo">
                        <Link to="/" className="logo-link" onClick={scrollToTop}>
                            <img src="/src/assets/HS_LOGO.png" alt="Halftone Logo" className="logo-img hs-logo" />
                            <img src="/src/assets/name.png" alt="Halftone Systems" className="logo-img name-img" />
                        </Link>
                    </div>

                    {/* Utility: Contact + Mobile toggle */}
                    <div className="navbar-utility">
                        <Link to="/contact" className="contact-btn">
                            Contact Us
                        </Link>
                        <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* ── ROW 2: Navigation links with dividers ── */}
            <div className="navbar-bottom">
                <div className="container">
                    <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
                        {navLinks.map((link, idx) => (
                            <React.Fragment key={link.name}>
                                {idx > 0 && <span className="nav-divider" />}
                                <div className="nav-item">
                                    <Link to={link.href} className="nav-link">
                                        {link.name}
                                        {link.dropdown && link.dropdown.length > 0 && <ChevronDown size={13} className="dropdown-icon" />}
                                    </Link>
                                    {link.dropdown && link.dropdown.length > 0 && (
                                        <div className={`dropdown-menu ${link.name === 'Home' ? 'grid-3col' :
                                            link.name === 'Industries' ? 'grid-2col' :
                                                link.name === 'Products' ? 'grid-2col' : ''
                                            }`}>
                                            {link.dropdown.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className="dropdown-item"
                                                >
                                                    {item.name}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>

        </nav>
    );
};
