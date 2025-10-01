'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import '@/styles/components/header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { href: "/", label: "Anasayfa" },
    { href: "/corporate", label: "Kurumsal" },
    { href: "/rooms", label: "Odalarımız" },
    { href: "/meeting", label: "Toplantı & Organizasyon" },
    { href: "/restaurant", label: "Restaurant & Barlar" },
    { href: "/gallery", label: "Galeri" },
    { href: "/contact", label: "İletişim" }
  ];

  const isMenuItemActive = (item: any) => {
    if (item.href === "/" && pathname === "/") return true;
    if (item.href !== "/" && pathname === item.href) return true;
    return false;
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) {
        closeMenu();
      }
    };

    if (menuOpen) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!menuOpen) return;

      const target = event.target as HTMLElement;
      const mobileMenu = document.querySelector('.mobile-menu-dropdown');
      const hamburger = document.querySelector('.navbar-toggler');

      if (mobileMenu && hamburger && 
          !mobileMenu.contains(target) && 
          !hamburger.contains(target)) {
        closeMenu();
      }
    };

    if (menuOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const shouldBeSticky = window.scrollY > 50;
      setIsSticky(shouldBeSticky);
      if (shouldBeSticky) {
        document.body.classList.add('header-sticky-active');
      } else {
        document.body.classList.remove('header-sticky-active');
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.classList.remove('header-sticky-active');
    };
  }, []);

  const moveIndicator = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const indicator = document.getElementById("nav-indicator");
    if (!indicator) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const parentRect = e.currentTarget.closest("ul")?.getBoundingClientRect();
    if (!parentRect) return;
    indicator.style.width = rect.width + "px";
    indicator.style.left = rect.left - parentRect.left + "px";
  };

  const resetIndicator = () => {
    const activeLink = document.querySelector(".nav-link.actived") as HTMLElement;
    const indicator = document.getElementById("nav-indicator");
    if (activeLink && indicator) {
      const rect = activeLink.getBoundingClientRect();
      const parentRect = activeLink.closest("ul")?.getBoundingClientRect();
      if (!parentRect) return;
      indicator.style.width = rect.width + "px";
      indicator.style.left = rect.left - parentRect.left + "px";
    }
  };

  useEffect(() => {
    setTimeout(() => {
      resetIndicator();
    }, 100);
    window.addEventListener("resize", resetIndicator);
    return () => {
      window.removeEventListener("resize", resetIndicator);
    };
  }, [pathname]);

  return (
    <>
      <header className="header-three">
        <div className="header-top">
          <div className="container container-custom-three">
            <div className="d-md-flex align-items-center justify-content-between">
              <ul className="header-top-info">
                <li>
                  <a href="tel:+902223223535">
                    <i className="fas fa-phone"></i> +90 222 322 3535
                  </a>
                </li>
                <li>
                  <a href="mailto:info@inntownhotel.com">
                    <i className="fas fa-envelope"></i> info@inntownhotel.com
                  </a>
                </li>
              </ul>

              <div className="header-social-links">
                <a href="https://www.facebook.com/inntownhotel/" target='blank' aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.instagram.com/inntownhotel/" target='blank' aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={`main-menu-area sticky-header ${isSticky ? 'sticky-active' : ''}`}>
          <div className="container container-custom-three">
            <div className="nav-container d-flex align-items-center justify-content-between">
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

              <div className="nav-menu">
                <div className="menu-items">
                  <ul onMouseLeave={resetIndicator}>
                    {menuItems.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className={`nav-link ${isMenuItemActive(item) ? "actived" : ""}`}
                          onMouseEnter={moveIndicator}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                    <span className="nav-indicator" id="nav-indicator"></span>
                  </ul>
                </div>
              </div>

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

          <div className={`mobile-menu-dropdown ${menuOpen ? 'active' : ''}`}>
            <div className="mobile-menu-content">
              <nav className="mobile-menu-nav">
                <ul>
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link 
                        href={item.href} 
                        onClick={closeMenu}
                        className={isMenuItemActive(item) ? 'current-page' : ''}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
