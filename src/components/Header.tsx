'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);

    const menuItems = [
        { href: "/", label: "Anasayfa", active: true },
        {
            href: "#",
            label: "Kurumsal",
            submenu: [
                { href: "/hakkimizda", label: "Hakkımızda" },
                { href: "/surdurulebilirlik", label: "Sürdürülebilirlik" }
            ]
        },
        {
            href: "#",
            label: "Odalar",
            submenu: [
                { href: "/odalar/suite", label: "Suite Oda" },
                { href: "/odalar/junior-suite", label: "Junior Suite Oda" },
                { href: "/odalar/standart", label: "Standart Oda" }
            ]
        },
        { href: "/toplanti", label: "Toplantı & Organizasyon" },
        { href: "/restaurant", label: "Restaurant & Barlar" },
        { href: "/galeri", label: "Galeri" },
        { href: "/iletisim", label: "İletişim" }
    ];

    const closeMenu = () => setMenuOpen(false);

    // Submenu toggle fonksiyonu
    const toggleSubmenu = (index: number) => {
        setOpenSubmenu(openSubmenu === index ? null : index);
    };

    // Sticky header için scroll listener
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const shouldBeSticky = scrollTop > 50; // 50px scroll'dan sonra sticky yap
            
            if (shouldBeSticky !== isSticky) {
                setIsSticky(shouldBeSticky);
                
                // Body'ye class ekle/çıkar
                if (shouldBeSticky) {
                    document.body.classList.add('header-sticky-active');
                } else {
                    document.body.classList.remove('header-sticky-active');
                }
            }
        };

        // Initial check
        handleScroll();
        
        // Scroll listener ekle
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.body.classList.remove('header-sticky-active');
        };
    }, [isSticky]);

    return (
        <>
            <header className="header-three">
                {/* Üst Bar */}
                <div className="header-top">
                    <div className="container container-custom-three">
                        <div className="d-md-flex align-items-center justify-content-between">
                            <p className="welcome-text">&nbsp;</p>
                            <ul className="header-top-info">
                                <li><i className="fas fa-phone"></i> +90 222 322 3535</li>
                                <li><i className="fas fa-envelope"></i> info@inntownhotel.com</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Ana Menü - Önemli: sticky-active sınıfı kullan */}
                <div className={`main-menu-area sticky-header ${isSticky ? 'sticky-active' : ''}`}>
                    <div className="container container-custom-three">
                        <div className="nav-container d-flex align-items-center justify-content-between">
                            {/* Logo */}
                            <div className="site-logo">
                                <Link href="/">
                                    <Image
                                        src="/img/logo.jpg"
                                        alt="Inn Town Hotel"
                                        width={175}
                                        height={100}
                                        priority
                                    />
                                </Link>
                            </div>

                            {/* Desktop Menü */}
                            <div className="nav-menu">
                                <div className="menu-items">
                                    <ul>
                                        {menuItems.map((item, index) => (
                                            <li key={index} className={item.submenu ? "has-submenu" : ""}>
                                                {item.submenu ? (
                                                    // Submenu'su olan öğeler için a tag ama preventDefault ile
                                                    <a 
                                                        href="#"
                                                        className={item.active ? "actived menu-trigger" : "menu-trigger"}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            e.stopPropagation();
                                                            // Desktop'ta hover ile çalışıyor, tıklama gereksiz
                                                        }}
                                                    >
                                                        {item.label}
                                                        {/* <i className="fas fa-angle-down"></i> */}
                                                    </a>
                                                ) : (
                                                    // Normal linkler
                                                    <Link
                                                        href={item.href}
                                                        className={item.active ? "actived" : ""}
                                                    >
                                                        {item.label}
                                                    </Link>
                                                )}
                                                
                                                {item.submenu && (
                                                    <ul className="submenu">
                                                        {item.submenu.map((subItem, subIndex) => (
                                                            <li key={subIndex}>
                                                                <Link href={subItem.href}>
                                                                    {subItem.label}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Hamburger Butonu */}
                            <button
                                className="navbar-toggler"
                                aria-label="Mobile Menu"
                                onClick={() => setMenuOpen(!menuOpen)}
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobil Menü */}
            <div className={`mobile-menu-overlay ${menuOpen ? 'active' : ''}`}>
                <div className="mobile-menu-backdrop" onClick={closeMenu}></div>
                <div className="mobile-menu-container">
                    {/* Mobil Menü Header */}
                    <div className="mobile-menu-header">
                        <div className="mobile-menu-logo">
                            <Image
                                src="/img/logo.jpg"
                                alt="Inn Town Hotel"
                                width={80}
                                height={80}
                            />
                        </div>
                        <button
                            className="mobile-menu-close"
                            onClick={closeMenu}
                            aria-label="Close Menu"
                        >
                            <i className="fas fa-times"></i>
                        </button>
                    </div>

                    {/* Mobil Menü İçeriği */}
                    <nav className="mobile-menu-nav">
                        <ul>
                            {menuItems.map((item, index) => (
                                <li key={index} className={item.submenu ? "has-submenu" : ""}>
                                    {item.submenu ? (
                                        // Mobilde submenu'su olan öğeler için a tag ama preventDefault ile
                                        <a
                                            href="#"
                                            className={`mobile-menu-trigger ${openSubmenu === index ? 'active' : ''}`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                toggleSubmenu(index);
                                            }}
                                        >
                                            {item.label}
                                            <i className={`fas fa-angle-down ${openSubmenu === index ? 'rotate' : ''}`}></i>
                                        </a>
                                    ) : (
                                        // Normal mobil linkler
                                        <Link href={item.href} onClick={closeMenu}>
                                            {item.label}
                                        </Link>
                                    )}
                                    
                                    {item.submenu && (
                                        <ul className={`mobile-submenu ${openSubmenu === index ? 'open' : ''}`}>
                                            {item.submenu.map((subItem, subIndex) => (
                                                <li key={subIndex}>
                                                    <Link href={subItem.href} onClick={closeMenu}>
                                                        {subItem.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Mobil Menü Footer */}
                    <div className="mobile-menu-footer">
                        <div className="mobile-contact-info">
                            <p><i className="fas fa-phone"></i> +90 222 322 3535</p>
                            <p><i className="fas fa-envelope"></i> info@inntownhotel.com</p>
                        </div>
                        <div className="mobile-social-links">
                            <a href="#" aria-label="Facebook">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" aria-label="Twitter">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" aria-label="Instagram">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}