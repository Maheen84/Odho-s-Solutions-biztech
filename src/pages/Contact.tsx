import { ArrowUpRight, Mail, Phone, MapPin, Globe, Facebook, Instagram, Youtube, Share2 } from "lucide-react";
import { useState } from "react";
import CtaBanner from "../components/CtaBanner";
import PageHero from "../components/PageHero";

function TikTokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  );
}

const infoCards = [
  {
    icon: Mail,
    title: "Email Us",
    desc: "Drop us a line anytime.",
    detail: "info@odhossolutions.com",
    href: "mailto:info@odhossolutions.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    desc: "Let's talk about your project.",
    detail: "+1 (234) 567-890",
    href: "tel:+12345678890",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    desc: "7890 Marquis Dr, Houston, TX 77083, United States",
    detail: null,
    href: null,
  },
  {
    icon: Share2,
    title: "Connect",
    desc: "Follow us on social media.",
    social: true,
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="overflow-hidden">
      <PageHero title="Contact Us" breadcrumbText="Contact" description="Get in touch with us to start your digital transformation journey today." />

      {/* Philosophy / Info Cards */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="mb-3">
            <span className="contact-section-label">Our Philosophy</span>
          </div>
          <h2 className="contact-section-heading">
            Driven By People, Powered <span>By Progress</span>
          </h2>
          <div className="contact-info-grid">
            {infoCards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="contact-info-card">
                  <div className="contact-info-icon">
                    <Icon size={22} />
                  </div>
                  <h4>{card.title}</h4>
                  <p>{card.desc}</p>
                  {card.href && card.detail && (
                    <a href={card.href} className="contact-info-link">{card.detail}</a>
                  )}
                  {card.social && (
                    <div className="contact-social-icons">
                      <a href="#" aria-label="Twitter"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.261 5.632 5.903-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
                      <a href="#" aria-label="LinkedIn"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg></a>
                      <a href="#" aria-label="Instagram"><Instagram size={16} /></a>
                      <a href="#" aria-label="Globe"><Globe size={16} /></a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Get A Quote / Contact Form */}
      <section className="pb-24 px-4">
        <div className="container">
          <div className="contact-form-card">
            {/* Left Panel */}
            <div className="contact-form-left">
              <span className="contact-form-label">Get A Quote</span>
              <h2 className="contact-form-heading">
                Ready To Start Your<br />Project?
              </h2>
              <p className="contact-form-desc">
                Fill out the form and our team will get back to you within 24 hours. We're excited to learn about your ideas and how we can help you bring them to life.
              </p>
              <div className="contact-form-avatars">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80" alt="a" />
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=80&q=80" alt="b" />
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80" alt="c" />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80" alt="d" />
              </div>
              <div className="contact-form-stars">★★★★★ <strong>4.9</strong> / 5.0</div>
              <div className="contact-form-trust">Trusted by <strong>500+</strong> Worldwide Clients</div>
            </div>

            {/* Right Form */}
            <div className="contact-form-right">
              {submitted ? (
                <div className="contact-success">
                  <div className="contact-success-icon">✓</div>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. We'll get back to you shortly.</p>
                  <button onClick={() => setSubmitted(false)} className="contact-retry-btn">Send Another</button>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="contact-form-fields">
                  <div className="cf-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="John Doe" required />
                  </div>
                  <div className="cf-group">
                    <label>Email Address</label>
                    <input type="email" placeholder="you@example.com" required />
                  </div>
                  <div className="cf-group cf-full">
                    <label>Service of Interest</label>
                    <select>
                      <option>Web Design &amp; Development</option>
                      <option>UI/UX Design</option>
                      <option>AI Automation</option>
                      <option>CRM</option>
                      <option>POS / Project Management</option>
                    </select>
                  </div>
                  <div className="cf-group cf-full">
                    <label>Your Message</label>
                    <textarea placeholder="Tell us about your project..." rows={4} required />
                  </div>
                  <div className="cf-submit-row">
                    <button type="submit" className="cf-submit-btn">
                      Send Message <ArrowUpRight size={16} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
