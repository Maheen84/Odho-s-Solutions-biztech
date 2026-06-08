"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Work", path: "/work" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="navbar-header">
      <nav className="navbar-inner">
        {/* Logo */}
        <Link href="/" className="navbar-logo flex items-center">
          <img 
            src="/assets/odhos-logo.png" 
            alt="ODHO's SOLUTIONS Logo" 
            className="h-10 md:h-12 w-auto object-contain mix-blend-multiply brightness-110 contrast-125 hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Center Nav Pill */}
        <div className="navbar-links-pill">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`navbar-link ${pathname === link.path || (link.path !== "/" && pathname.startsWith(link.path)) ? "navbar-link-active" : ""}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link href="/contact" className="navbar-cta">
          Hire Us
          <span className="navbar-cta-icon"><ArrowUpRight size={14} /></span>
        </Link>

        {/* Mobile Toggle */}
        <button className="navbar-mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="navbar-mobile-menu">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`navbar-mobile-link ${pathname === link.path || (link.path !== "/" && pathname.startsWith(link.path)) ? "navbar-mobile-link-active" : ""}`}
              onClick={() => setMobileOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact" className="navbar-cta mt-2" onClick={() => setMobileOpen(false)}>
            Hire Us
            <span className="navbar-cta-icon"><ArrowUpRight size={14} /></span>
          </Link>
        </div>
      )}
    </header>
  );
}
