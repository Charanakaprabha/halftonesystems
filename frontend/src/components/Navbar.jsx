/* eslint-disable react-hooks/set-state-in-effect */
import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Phone, Check, Moon, Sun } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import hsLogo from '../assets/HS_LOGO.png';
import hsName from '../assets/name.png';
import './Navbar.css';
import './Navbar.css';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
    const [lastScrollY, setLastScrollY] = useState(0);
    const location = useLocation();

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
            setIsHidden(false); // Make sure it's visible when open
        } else {
            document.body.style.overflow = '';
            setOpenMobileDropdown(null);
        }
        return () => { document.body.style.overflow = ''; };
    }, [isMobileMenuOpen]);

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
                { name: 'Our History', href: '/who-we-are#our-history' },
                { name: 'Our Journey', href: '/who-we-are#our-journey' },
                { name: 'Six Pillars', href: '/who-we-are#six-pillars' }
            ]
        },
        {
            name: 'What We Do',
            href: '/what-we-do',
            dropdown: [
                { name: 'Why Choose Us', href: '/what-we-do#why-choose' },
                { name: 'Our Tech Suite', href: '/what-we-do#tech-suite' },
                { name: 'Specialized Services', href: '/what-we-do#specialized-services' }
            ]
        },
        {
            name: 'Success Stories',
            href: '/success-stories',
            dropdown: [
                { name: 'Case Studies', href: '/success-stories#success-stories' },
                { name: 'Global Presence', href: '/success-stories#partnerships' }
            ]
        },
        {
            name: 'Careers',
            href: '/careers',
            dropdown: [
                { name: 'Open Positions', href: '/careers#open-positions' },
                { name: 'Our Culture', href: '/careers#life-at-halftone-systems' },
                { name: 'Life at Halftone Systems', href: '/careers#life-at-halftone-systems' }
            ]
        },
        {
            name: 'Contact Us',
            href: '/contact',
            dropdown: []
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
                            <img src={hsLogo} alt="Halftone Systems Logo" className="logo-img hs-logo" />
                            <img src={hsName} alt="Halftone Systems" className="logo-img name-img" />
                        </Link>
                    </div>

                    {/* Utility: Contact + Mobile toggle */}
                    <div className="navbar-utility" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <Link to="/contact" className="book-call-btn">
                            Book a Call
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
                        {navLinks.map((link, idx) => {
                            const isActive = location.pathname === link.href ||
                                (link.href !== '/' && location.pathname.startsWith(link.href));
                            return (
                                <React.Fragment key={link.name}>
                                    {idx > 0 && <span className="nav-divider" />}
                                    <div className={`nav-item ${isActive ? 'active' : ''}`}>
                                        <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <Link to={link.href} className="nav-link" style={{ flexGrow: 1 }} onClick={() => setIsMobileMenuOpen(false)}>
                                                {link.name}
                                            </Link>
                                        </div>
                                        {/* Dropdown for DESKTOP only */}
                                        {link.dropdown && link.dropdown.length > 0 && (
                                            <div className="dropdown-menu">
                                                {link.dropdown.map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className="dropdown-item"
                                                    >
                                                        <span className="hover-tick"><Check size={14} strokeWidth={3} /></span>
                                                        {item.name}
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </React.Fragment>
                            );
                        })}
                        
                        {/* Mobile-only Call Button */}
                        <Link to="/contact" className="mobile-contact-link" onClick={() => setIsMobileMenuOpen(false)}>
                            Book a Call
                        </Link>
                    </div>
                </div>
            </div>

        </nav>
    );
};
