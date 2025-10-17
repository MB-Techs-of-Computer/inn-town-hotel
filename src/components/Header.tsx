"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "@/styles/components/header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const pathname = usePathname();

  interface SubMenuItem {
    href: string;
    label: string;
  }

  interface MenuItem {
    href: string;
    label: string;
    submenu?: SubMenuItem[];
  }

  const menuItems = [
    { href: "/", label: "Anasayfa" },
    {
      href: "#",
      label: "Kurumsal",
      submenu: [
        { href: "/about", label: "Hakkımızda" },
        { href: "/sustainability", label: "Sürdürülebilirlik Politikası" },
      ],
    },
    { href: "/rooms", label: "Odalarımız" },
    { href: "/restaurant", label: "Restaurant & Barlar" },
    { href: "/gallery", label: "Galeri" },
    { href: "/contact", label: "İletişim" },
  ];

  const isMenuItemActive = (item: MenuItem): boolean => {
    if (item.href === "/" && pathname === "/") return true;
    if (item.href !== "/" && pathname === item.href) return true;
    return item.submenu?.some((sub) => sub.href === pathname) ?? false;
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setSubmenuOpen(false);
  };

  const toggleSubmenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setSubmenuOpen(!submenuOpen);
  };

  const handleDesktopMenuClick = (e: React.MouseEvent, hasSubmenu?: boolean) => {
    if (hasSubmenu) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.classList.remove("mobile-menu-open");
    }
    return () => {
      document.body.classList.remove("mobile-menu-open");
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) {
        closeMenu();
      }
    };

    if (menuOpen) {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!menuOpen) return;

      const target = event.target as HTMLElement;
      const mobileMenu = document.querySelector(".mobile-menu-dropdown");
      const hamburger = document.querySelector(".navbar-toggler");

      if (mobileMenu && hamburger && !mobileMenu.contains(target) && !hamburger.contains(target)) {
        closeMenu();
      }
    };

    if (menuOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const shouldBeSticky = window.scrollY > 50;
      setIsSticky(shouldBeSticky);
      if (shouldBeSticky) {
        document.body.classList.add("header-sticky-active");
      } else {
        document.body.classList.remove("header-sticky-active");
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.classList.remove("header-sticky-active");
    };
  }, []);

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
                <a
                  href="https://www.facebook.com/inntownhotel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://www.instagram.com/inntownhotel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={`main-menu-area sticky-header ${isSticky ? "sticky-active" : ""}`}>
          <div className="container container-custom-three">
            <div className="nav-container d-flex align-items-center justify-content-between">
              <div className="site-logo">
                <Link href="/">
                  <Image src="/img/inn-town-logo.png" alt="Inn Town Hotel" width={175} height={100} priority />
                </Link>
              </div>

              <div className="nav-menu">
                <div className="menu-items">
                  <ul>
                    {menuItems.map((item, index) => (
                      <li key={index} className={item.submenu ? "has-submenu" : ""}>
                        <Link
                          href={item.href}
                          className={`nav-link ${isMenuItemActive(item) ? "actived" : ""}`}
                          onClick={(e) => handleDesktopMenuClick(e, !!item.submenu)}
                        >
                          {item.label}
                        </Link>

                        {item.submenu && (
                          <ul className="submenu">
                            {item.submenu.map((sub, subIndex) => (
                              <li key={subIndex}>
                                <Link href={sub.href} className={pathname === sub.href ? "active-submenu" : ""}>
                                  {sub.label}
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

              <button className="navbar-toggler" aria-label="Mobile Menu" onClick={() => setMenuOpen(!menuOpen)}>
                <Image src="/img/icon/menu-icon.png" alt="Menu Icon" width={20} height={20} priority />
              </button>
            </div>
          </div>

          <div className={`mobile-menu-dropdown ${menuOpen ? "active" : ""}`}>
            <div className="mobile-menu-content">
              <nav className="mobile-menu-nav">
                <ul>
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      {item.submenu ? (
                        <>
                          <button
                            onClick={toggleSubmenu}
                            className={`mobile-menu-trigger ${isMenuItemActive(item) ? "current-page" : ""}`}>
                            {item.label}
                            <i className={`fas fa-chevron-down ${submenuOpen ? "rotated" : ""}`}></i>
                          </button>
                          <ul className={`mobile-submenu ${submenuOpen ? "open" : ""}`}>
                            {item.submenu.map((sub, subIndex) => (
                              <li key={subIndex}>
                                <Link
                                  href={sub.href}
                                  onClick={closeMenu}
                                  className={pathname === sub.href ? "current-page" : ""}>
                                  {sub.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={closeMenu}
                          className={isMenuItemActive(item) ? "current-page" : ""}>
                          {item.label}
                        </Link>
                      )}
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