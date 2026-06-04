import { Check, Quote, ArrowLeft, Play } from "lucide-react";
import { motion } from "motion/react";
import { NavLink } from "react-router-dom";
import { useState, useRef } from "react";
import CtaBanner from "../components/CtaBanner";
import PageHero from "../components/PageHero";
import CtaArrow from "../components/CtaArrow";

export default function About() {
  const [activeService, setActiveService] = useState('UI/UX Design');
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollRef.current.clientWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollRef.current.clientWidth, behavior: 'smooth' });
    }
  };

  const philosophies = [
    { title: "Clarity", desc: "We simplify complex goals into focused digital experiences that people can understand and trust." },
    { title: "Craft", desc: "Every detail is shaped with purpose, polish, and performance across design and development." },
    { title: "Growth", desc: "Our work is designed to help ambitious businesses move faster, connect better, and scale." },
  ];

  const stats = [
    { val: "500+", label: "Completed Projects" },
    { val: "15k", label: "Customers Reached" },
    { val: "10k", label: "Campaign Results" },
    { val: "45+", label: "Countries Helped" }
  ];

  return (
    <div className="overflow-hidden">
      <PageHero
        title="About Us"
        breadcrumbText="About Us"
        description="We are a team of visionary designers and strategic developers helping brands navigate the digital landscape since 2010."
      />

      {/* About Content */}
      <div className="container py-12">
        <section className="about-content shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="about-left">
            <span className="about-label">About Us</span>
            <div className="about-label-line"></div>
            <h2 className="about-heading">
              Expert web designers and web developers trained in the full digital industry who offer a bespoke, professional and trust worthy service.
            </h2>
          </div>
          <div className="about-right">
            <p><strong style={{ color: "var(--color-primary)" }}>Odho's Solution</strong> where creativity meets precision in digital transformation.</p>
            <p>
              Since our founding, we have been committed to more than just building websites. We design and develop holistic digital experiences from sleek web and mobile apps to impactful branding, animations, content and marketing that deliver real value for businesses. Our team blends innovation, technical expertise, and a client-first mindset to help you elevate your brand.
            </p>
            <div className="about-btns flex flex-wrap gap-6">
              <NavLink to="/contact" className="btn btn-dark hover:-translate-y-1 hover:shadow-lg active:scale-95 transition-all duration-200">Get Started Now <CtaArrow /></NavLink>
              <NavLink to="/contact" className="btn btn-outline hover:-translate-y-1 hover:shadow-lg active:scale-95 transition-all duration-200">Book A Call <CtaArrow /></NavLink>
            </div>
          </div>
        </section>
      </div>

      {/* Stats Info Bar */}
      <div className="container pt-24 pb-12">
        <div className="stats-bar">
          {/* Col 1 */}
          <div className="stats-col">
            <h3>Services</h3>
            <div className="services-tags">
              {['UI/UX Design', 'Graphic Design', 'Web Development', 'Seo Service', 'Social Media', 'Mobile & Desktop App'].map(service => (
                <span
                  key={service}
                  className={`tag-pill ${service === 'Seo Service' ? 'tag-plus' : ''}`}
                >
                  {service === 'Seo Service' && <span className="tag-plus-icon">+</span>}
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Col 2 */}
          <div className="stats-col-wrapper">
            <div className="stat-standalone stat-card-pink">
              <h3>1.2M+</h3>
              <p>Users Have Interacted With Website Built By Us.</p>
            </div>
            <div className="stat-standalone stat-card-white">
              <h3>$3M</h3>
              <p>In Funding Raised By Start Ups We've Worked With.</p>
            </div>
          </div>

          {/* Col 3 */}
          <div className="stats-col testimonial-col">
            <div className="testimonial-quote-icon">"</div>
            <p>The final product exceeded my expectations.</p>
            <p>Impressed with the results!</p>
            <div className="avatar-stack mt-4">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" alt="User 1" />
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80" alt="User 2" />
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" alt="User 3" />
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy */}
      <section className="philosophy-section">
        <div className="container">
          <span className="philosophy-header-label">Our Philosophy</span>
          <h2 className="philosophy-header-title">Driven By People, <strong>Powered</strong> By Progress</h2>

          <div className="philosophy-cards-row">
            <div className="philosophy-card">
              <span className="philosophy-card-num">01</span>
              <p className="philosophy-card-desc">
                Humans are at the heart of everything we do. Simply put we're people, working with people and for people. Humans are at the heart of everything we do.
              </p>
            </div>
            <div className="philosophy-card">
              <span className="philosophy-card-num">02</span>
              <p className="philosophy-card-desc">
                We always focus on the result that the product brings to the business. For us, it is not only about aesthetics but also about efficiency. We understand that entrepreneurial creativity must bring profits.
              </p>
            </div>
            <div className="philosophy-card">
              <span className="philosophy-card-num">03</span>
              <p className="philosophy-card-desc">
                We are constantly evolving, analyzing user feedback, and always seeking fresh ideas. We call this the process of continuous improvement.
              </p>
            </div>
          </div>

          <div className="philosophy-testimonial">
            <div className="philosophy-testi-author">
              <div className="philosophy-testi-avatar"></div>
              <div className="philosophy-testi-info">
                <span className="philosophy-testi-name">Max Yekuabyegik</span>
                <span className="philosophy-testi-title">CTO, Fusionyync</span>
              </div>
            </div>
            <div className="philosophy-testi-quote">
              <span className="philosophy-sq">«</span>If we had to describe cooperation with us in one word, it would be Odho's Solution We take the client's idea, add our own expertise and experience, and get overachieving results».
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-12">
        <div className="container">
          <div className="roi-stats-card">
            <span className="roi-label">Success In Numbers</span>
            <h2 className="roi-heading">The Best Return On Your Investment</h2>
            <div className="roi-grid">
              <div className="roi-cell">
                <p className="roi-cell-desc">Startup, enterprises and mid-market companies trust Superside to deliver pixel-perfect creative, at scale.</p>
                <div className="roi-cell-num">500+</div>
              </div>
              <div className="roi-cell">
                <p className="roi-cell-desc">Projects delivered to this day and counting.</p>
                <div className="roi-cell-num">70k+</div>
              </div>
              <div className="roi-cell">
                <p className="roi-cell-desc">Brands see a three-year ROI of 94% on their Superside subscription.</p>
                <div className="roi-cell-num">94%</div>
              </div>
              <div className="roi-cell">
                <p className="roi-cell-desc">Brands see a 6-month payback period on their Superside subscription.</p>
                <div className="roi-cell-num">6 Mon</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We Work With Section */}
      <section className="work-with-section">
        <div className="container">
          <div className="work-with-container">
            <div className="work-with-left">
              <span className="work-with-label">Built For</span>
              <h2 className="work-with-heading mb-6">We Work With</h2>
              <div className="flex gap-2">
                <button onClick={scrollLeft} className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">
                  <ArrowLeft size={16} color="#111" />
                </button>
                <button onClick={scrollRight} className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">
                  <CtaArrow />
                </button>
              </div>
            </div>

            <div className="work-with-right" ref={scrollRef}>
              <div className="work-card">
                <div className="work-card-emoji">🧑‍💻</div>
                <h3 className="work-card-title">Entrepreneurs</h3>
                <p className="work-card-desc">
                  Who are experts in their field. They have an ambitious idea. We will help to bring their product vision to life.
                </p>
              </div>

              <div className="work-card">
                <div className="work-card-emoji">🏢</div>
                <h3 className="work-card-title">Startups</h3>
                <p className="work-card-desc">
                  Early-stage teams who need a strong digital foundation. We help build scalable products from the ground up.
                </p>
              </div>

              <div className="work-card">
                <div className="work-card-emoji">🚀</div>
                <h3 className="work-card-title">Scale-ups</h3>
                <p className="work-card-desc">
                  Growing businesses that need to move fast without breaking things. We bring structure and speed to your next phase.
                </p>
              </div>

              <div className="work-card">
                <div className="work-card-emoji">🎨</div>
                <h3 className="work-card-title">Creative Agencies</h3>
                <p className="work-card-desc">
                  Studios and agencies that need a reliable tech partner. We integrate seamlessly into your existing workflow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built For V2 Section */}
      <section className="py-24">
        <div className="container">
          <div className="built-v2-container">
            <div className="built-v2-left">
              <span className="built-v2-label">Built For</span>
              <h2 className="built-v2-heading">
                <span>Your Vision Our Expertise</span>
                <span>Your Success Get Noticed</span>
                <span>Generate Leads Dominate</span>
              </h2>
              <div className="built-v2-main-img">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600" alt="Team working" crossOrigin="anonymous" />
              </div>
            </div>
            <div className="built-v2-right">
              <div className="built-v2-img-row">
                <div className="built-v2-card">
                  <span className="built-v2-badge-blog">Blog</span>
                  <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400" alt="Meeting" crossOrigin="anonymous" />
                  <span className="built-v2-badge-pro">Pro Tips</span>
                </div>
                <div className="built-v2-card">
                  <span className="built-v2-badge-blog">Blog</span>
                  <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400" alt="Brainstorming" crossOrigin="anonymous" />
                  <span className="built-v2-badge-pro">Pro Tips</span>
                </div>
              </div>
              <div>
                <p className="built-v2-text">
                  Fusion Sync where creativity meets precision in digital transformation. Since our founding, we've been committed to more than just building websites. We design and develop holistic digital experiences from sleek.
                </p>
                <div className="built-v2-stats">
                  <div>
                    <div className="built-v2-stat-num">500+</div>
                    <div className="built-v2-stat-label">Completed Projects</div>
                  </div>
                  <div>
                    <div className="built-v2-stat-num">15k</div>
                    <div className="built-v2-stat-label">Completed Projects</div>
                  </div>
                  <div>
                    <div className="built-v2-stat-num">10k</div>
                    <div className="built-v2-stat-label">Completed Projects</div>
                  </div>
                  <div>
                    <div className="built-v2-stat-num">45+</div>
                    <div className="built-v2-stat-label">Completed Projects</div>
                  </div>
                </div>
                <div className="built-v2-cta">
                  <div className="built-v2-icon">
                    <Play size={14} color="white" fill="white" />
                  </div>
                  <div>
                    <div className="built-v2-cta-title">Hear From CEO</div>
                    <div className="built-v2-cta-sub">Founder Of FusionSync</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
