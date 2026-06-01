import { NavLink } from "react-router-dom";
import { Twitter, Facebook, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react";
import CtaArrow from "../CtaArrow";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Floating back to top button */}
      <div 
        className="footer-back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Okay, enough scrolling... back to the top 🚀
      </div>

      {/* Floating left social icons matching screenshot */}
      <div className="footer-socials">
        <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
        <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
        <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
        <a href="#" aria-label="Youtube"><Youtube size={18} /></a>
      </div>

      <div className="footer-top-section">
        {/* Col 1 */}
        <div className="footer-cta-col">
          <h3>Do You Like<br />What You See?</h3>
          <NavLink to="/contact" className="footer-btn">
            Send A Project <CtaArrow />
          </NavLink>
        </div>

        {/* Col 2 */}
        <div className="footer-nav-col">
          <div className="footer-col-label">Learn</div>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/testimonials">Testimonials</NavLink>
          <NavLink to="/processes">Processes</NavLink>
          <NavLink to="/faqs">FAQs</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </div>

        {/* Col 3 */}
        <div className="footer-nav-col">
          <div className="footer-col-label">Explore</div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/work">
            Work <span className="new-badge">NEW</span>
          </NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/careers">Careers</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        {/* Col 4 */}
        <div className="footer-contact-col">
          <div className="footer-col-label">Contact info</div>
          <div className="footer-contact-item"><Phone size={16} /> <span>879803098059</span></div>
          <div className="footer-contact-item"><Mail size={16} /> <span>info@odhossolutions.com</span></div>
          <div className="footer-contact-item"><MapPin size={16} /> <span>4903 Westpark Dr Ste 304B,<br />Houston, TX, 77063-5286,<br />United States</span></div>
        </div>
      </div>

      <div className="footer-middle-section">
        <h2 className="footer-giant-text">Crafting Since 2010</h2>
      </div>

      <div className="footer-bottom-bar">
        <div className="footer-bottom-left">© Odho's Solution Ltd 2026</div>
        <div className="footer-bottom-right">
          <a href="#">Web Design</a>
          <span className="separator">|</span>
          <a href="#">Privacy Policy</a>
          <span className="separator">|</span>
          <span>All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
}
