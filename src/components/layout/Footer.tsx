import { NavLink } from "react-router-dom";
import { ArrowUpRight, ArrowUp, Twitter, Facebook, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Left social icons */}
        <div className="footer-socials">
          <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
          <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
          <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
          <a href="#" aria-label="Youtube"><Youtube size={18} /></a>
        </div>

        <div className="footer-grid">
          {/* CTA */}
          <div className="footer-cta">
            <h3>Do You Like<br />What You See?</h3>
            <NavLink to="/contact" className="footer-btn">
              Send A Project <ArrowUpRight size={15} />
            </NavLink>
          </div>

          {/* Learn */}
        <div className="footer-col">
          <div className="footer-col-label">Learn</div>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/testimonials">Testimonials</NavLink>
          <NavLink to="/processes">Processes</NavLink>
          <NavLink to="/faqs">FAQs</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </div>

        {/* Explore */}
        <div className="footer-col">
          <div className="footer-col-label">Explore</div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/work">Work</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/careers">Careers</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        {/* Contact */}
          <div className="footer-col footer-contact-col">
            <div className="footer-col-label">Contact info</div>
            <div className="footer-contact-item"><Phone size={16} /> 879803098059</div>
            <div className="footer-contact-item"><Mail size={16} /> info@odhossolutions.com</div>
            <div className="footer-contact-item"><MapPin size={16} /> 4903 Westpark Dr Ste 304B,<br />Houston, TX, 77063-5286,<br />United States</div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-top">
          <span>© DHo's Solution Ltd 2026</span>
          <div className="footer-bottom-links">
            <a href="#">Web Design</a>
            <span>|</span>
            <a href="#">Privacy Policy</a>
            <span>|</span>
            <span>All Rights Reserved</span>
          </div>
        </div>
        <h2 className="footer-tagline">Crafting Since 2010</h2>
      </div>
    </footer>
  );
}
