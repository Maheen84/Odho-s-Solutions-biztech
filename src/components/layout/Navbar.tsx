import { NavLink } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

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
        <NavLink to="/" className="navbar-logo flex items-center">
          <img 
            src="/assets/odhos-logo.png" 
            alt="ODHO's SOLUTIONS Logo" 
            className="h-10 md:h-12 w-auto object-contain mix-blend-multiply brightness-110 contrast-125 hover:scale-105 transition-transform duration-300"
          />
        </NavLink>

        {/* Center Nav Pill */}
        <div className="navbar-links-pill">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `navbar-link ${isActive ? "navbar-link-active" : ""}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* CTA */}
        <NavLink to="/contact" className="navbar-cta">
          Hire Us <ArrowUpRight size={14} />
        </NavLink>

        {/* Mobile Toggle */}
        <button className="navbar-mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="navbar-mobile-menu">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `navbar-mobile-link ${isActive ? "navbar-mobile-link-active" : ""}`
              }
              onClick={() => setMobileOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink to="/contact" className="navbar-cta mt-2" onClick={() => setMobileOpen(false)}>
            Hire Us <ArrowUpRight size={14} />
          </NavLink>
        </div>
      )}
    </header>
  );
}
