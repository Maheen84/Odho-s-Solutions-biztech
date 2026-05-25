import { NavLink } from "react-router-dom";
import CtaArrow from "./CtaArrow";


export default function CtaBanner() {
  return (
    <section className="cta-banner-section">
      <div className="container">
        <div className="cta-banner-card">
          {/* Left */}
          <div className="cta-banner-left">
            <span className="cta-banner-label">Starting A Project</span>
            <h2 className="cta-banner-heading">Start Your Next Project<br />With Us</h2>
            <div className="cta-banner-actions">
              <NavLink to="/contact" className="cta-banner-btn">
                Get Started Now <CtaArrow />
              </NavLink>
              <div className="cta-banner-avatars">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80" alt="" />
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=80&q=80" alt="" />
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80" alt="" />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80" alt="" />
              </div>
            </div>
          </div>
          {/* Right card */}
          <div className="cta-banner-right">
            <div className="cta-banner-card-inner">
              <div className="cta-banner-avatar-circle">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80" alt="Team" />
              </div>
              <p className="cta-banner-card-text">Ready to bring your vision to life? Let's build something great together.</p>
              <NavLink to="/contact" className="cta-banner-card-btn">
                Get In Touch <CtaArrow />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
