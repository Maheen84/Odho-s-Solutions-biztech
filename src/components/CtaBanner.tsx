import { NavLink } from "react-router-dom";
import CtaArrow from "./CtaArrow";

export default function CtaBanner() {
  return (
    <section className="cta-banner-section">
      <div className="container">
        <div className="cta-banner-card">

          {/* LEFT */}
          <div className="cta-banner-left">
            <span className="cta-banner-label">Contact Us Today</span>
            <h2 className="cta-banner-heading">
              Start Your Next Project<br />With Us
            </h2>
            <p className="cta-banner-desc">
              Partner with <strong>Odho's Solution</strong> to craft digital solutions that drive real impact.
            </p>

            <div className="cta-banner-actions">
              <NavLink to="/contact" className="cta-banner-btn">
                Get Started Free <CtaArrow />
              </NavLink>

              <div className="cta-banner-rating">
                <div className="cta-banner-avatars">
                  {[
                    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80",
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
                    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80",
                    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
                  ].map((src, i) => (
                    <img key={i} src={src} alt="client avatar" />
                  ))}
                </div>
                <div className="cta-banner-rating-text">
                  <div className="cta-banner-stars">★★★★★ <strong>4.9 / 5.0</strong></div>
                  <div className="cta-banner-trust">Trusted by <strong>500+</strong> Worldwide Clients</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="cta-banner-right">
            <div className="cta-banner-card-inner">
              <div className="cta-banner-avatar-circle">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80"
                  alt="Founder"
                />
              </div>
              <p className="cta-banner-card-text">
                Book a completely free discovery call with our founder.
              </p>
              <NavLink to="/contact" className="cta-banner-card-btn">
                Book A Call <CtaArrow />
              </NavLink>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}