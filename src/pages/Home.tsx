import { X, ChevronDown, Star, TrendingUp, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import CtaBanner from "../components/CtaBanner";
import CtaArrow from "../components/CtaArrow";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const [testIndex, setTestIndex] = useState(0);
  const [activeService, setActiveService] = useState("web-design");
  const cardWidth = 750;
  const cardGap = 24;
  const slideDistance = cardWidth + cardGap;

  const testimonials = [
    {
      quote: "Michael Markos is amazing! I couldn't be happier with the guidance and support that she has provided me through this process and I definitely couldn't have done it without her. Thank you and Michael so much.",
      name: "Kyle Weznick",
      role: "Lorem ipsum dolor",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80",
      project: "Regal Event Company",
      projectImg: "/assets/regal event image card.png"
    },
    {
      quote: "The personalized approach is what sets them apart. They didn't just provide a solution; they partnered with us to evolve our brand's digital presence.",
      name: "Michael Chen",
      role: "Founder, PeakGrowth",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
      project: "E-Commerce Integration",
      projectImg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
    },
    {
      quote: "They took the time to understand our unique challenges. The result was not just good, but exceptional. Our customer engagement metrics have never been better.",
      name: "Emily Rodriguez",
      role: "Product Lead, InnovateUp",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80",
      project: "Product UI/UX Design",
      projectImg: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=600&q=80"
    },
  ];

  const nextTest = () => setTestIndex((prev) => (prev + 1) % testimonials.length);
  const prevTest = () => setTestIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const services = [
    {
      id: "01",
      title: "Web Design & Development",
      desc: "Research-led interfaces, responsive frontend development, scalable backend architecture.",
      slug: "web-design",
    },
    {
      id: "02",
      title: "CRM",
      desc: "Empower your business with tailored Customer Relationship Management.",
      slug: "crm",
    },
    {
      id: "03",
      title: "AI Automation",
      desc: "Leverage AI-driven processes to minimize manual work and increase efficiency.",
      slug: "ai-automation",
    },
    {
      id: "04",
      title: "POS / Project Management",
      desc: "Streamline sales and organize projects effectively.",
      slug: "pos",
    },
  ];

  const projects = [
    {
      logo: "/assets/WhatsApp Image 2026-05-15 at 9.44.39 PM.jpeg",
      title: "Regal Event Company",
      desc: "A premium event website built to showcase venues, booking details and celebration highlights in a polished, high-impact layout.",
      tags: ["Ecommerce Website", "WordPress Website", "SEO/Hosting", "Marketing"],
      sub: "Regal Event Company Website Design",
      img: "/assets/WhatsApp Image 2026-05-15 at 9.44.40 PM (2).jpeg",
      bgImg: "/assets/WhatsApp Image 2026-05-15 at 9.44.40 PM (2).jpeg",
    },
    {
      logo: "/assets/WhatsApp Image 2026-05-15 at 9.44.39 PM.jpeg",
      title: "Regal Event Company",
      desc: "Lorem Ipsum Dolor Sit Amet, Conse Ctetur Adipiscing Elit...",
      tags: ["Ecommerce Website", "WordPress Website", "SEO/Hosting", "Ecommerce Website"],
      sub: "Regal Event company Website Design",
      img: "/assets/WhatsApp Image 2026-05-15 at 9.44.40 PM (2).jpeg",
      bgImg: "/assets/WhatsApp Image 2026-05-15 at 9.44.40 PM (2).jpeg",
    },
    {
      logo: "/assets/tasky-dashboard.jpg",
      title: "TechPortal Analytics",
      desc: "A polished analytics suite for monitoring revenue, customer behavior, and growth KPIs in a clean dashboard experience.",
      tags: ["React", "Dashboard", "Data Visualization", "API"],
      sub: "TechPortal Analytics Dashboard Design",
      img: "/assets/portfoilio-second.jpeg",
      bgImg: "/assets/predictive-analytics.jpg",
    },
    {
      logo: "/assets/phone-mockup.jpg",
      title: "ShopSwift E-com",
      desc: "A modern e-commerce platform designed for fast checkout, effortless browsing, and conversion-focused user journeys.",
      tags: ["Next.js", "Stripe", "PostgreSQL", "UX Design"],
      sub: "ShopSwift E-commerce Website Design",
      img: "/assets/portfoilio-second.jpeg",
      bgImg: "/assets/team-collaborating.jpg",
    },
  ];

  const actualProjectCount = projects.length;
  const extendedProjects = [projects[actualProjectCount - 1], ...projects, projects[0]];
  const totalExtendedSlides = extendedProjects.length;

  const nextProject = () => {
    setCurrentSlide((prev) => (prev + 1) % totalExtendedSlides);
  };

  const prevProject = () => {
    setCurrentSlide((prev) => (prev - 1 + totalExtendedSlides) % totalExtendedSlides);
  };

  useEffect(() => {
    if (!isTransitionEnabled) {
      requestAnimationFrame(() => requestAnimationFrame(() => setIsTransitionEnabled(true)));
    }
  }, [isTransitionEnabled]);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="hero-section-home">
        <div className="hero-grid">
          <div className="hero-left">
            <h1 className="hero-heading">
              We Drive Growth To Your Business{" "}
              <TrendingUp className="hero-arrow-icon" style={{display: 'inline', verticalAlign: 'middle'}} />
            </h1>
            <div className="hero-image-wrap relative">
              <NavLink to="/contact" className="hero-btn hero-image-cta inline-flex">
                Book A Call <CtaArrow />
              </NavLink>
              <img
                src="/assets/bright-office-team-collaboration.jpeg"
                alt="Team collaborating around an office table"
                className="hero-image"
              />
            </div>
          </div>
          <div className="hero-right">
            <p className="hero-desc">
              Elevating Your Digital Presence With Purpose-Driven Design And Powerful Development.
            </p>
            <div className="stat-cards">
              <div className="stat-card-purple">
                <h3>1.2M+</h3>
                <p>Users Have Interacted With Website Built By Us.</p>
              </div>
              <div className="stat-card-pink">
                <h3>$3M</h3>
                <p>In Funding Raised By Start Ups We've Worked With.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section-home">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 about-inner-grid" style={{position: 'relative', zIndex: 1}}>
          <img src="/assets/deco.png" alt="" style={{ 
            position: 'absolute', left: '-120px', top: '80px', width: '220px', height: '220px', 
            opacity: 0.12, transform: 'scaleX(-1)', pointerEvents: 'none', zIndex: 0 
          }} />
          <img src="/assets/deco.png" alt="" style={{ 
            position: 'absolute', right: '-60px', top: '200px', width: '300px', height: '300px', 
            opacity: 0.08, transform: 'scaleX(-1)', pointerEvents: 'none', zIndex: 0 
          }} />
          <div>
            <div className="about-label">Who We Are</div>
            <h2 className="about-heading">About <span style={{color: '#999', fontWeight: 400}}>Us</span></h2>
          </div>
          <div>
            <p className="about-desc-text">
              <span style={{color: '#E8345A', fontFamily: 'Open Sans', fontWeight: 600}}>Odho's Solution</span>
              {' '}where creativity meets precision in digital transformation. Since our founding, we've been committed to more than just building websites. We design and develop holistic digital experiences from sleek <strong>web and mobile apps</strong>, to impactful branding, animations, content & marketing that deliver real value for businesses. Our team blends innovation, technical expertise, and a client-first mindset to help you elevate your brand, connect with your audience, and thrive online.
            </p>
            <div className="flex flex-wrap gap-4">
              <NavLink to="/about" className="btn btn-dark gap-2">About Odho's Solution <CtaArrow /></NavLink>
              <NavLink to="/contact" className="btn btn-outline">Book a Call</NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* ── Portfolio Showcase ───────────────────────────────────────────── */}
      <section className="portfolio-section" aria-label="Our Projects Showcase">
        <div className="max-w-7xl mx-auto px-4 portfolio-shell">

          {/* Header */}
          <div className="portfolio-header">
            <p className="portfolio-kicker">Portfolio</p>
            <h2 className="portfolio-title">
              Our Projects <span className="portfolio-title-light">Showcase</span>
            </h2>
          </div>
          <div className="portfolio-header-divider" />

          {/* Cards */}
          <div className="portfolio-slider-viewport">
            <div
              className="portfolio-slider-track"
              style={{
                transform: `translateX(-${currentSlide * slideDistance}px)`,
                transition: isTransitionEnabled ? "transform 0.45s ease" : "none",
              }}
              onTransitionEnd={() => {
                if (currentSlide === totalExtendedSlides - 1) {
                  setIsTransitionEnabled(false);
                  setCurrentSlide(1);
                } else if (currentSlide === 0) {
                  setIsTransitionEnabled(false);
                  setCurrentSlide(actualProjectCount);
                }
              }}
            >
              {extendedProjects.map((project, i) => (
                <div key={`slide-${i}-${project.title}`} className="pf-card-wrapper">
                  <div className="pf-card">

                    <div className="pf-card-info">
                      <img
                        src={project.logo}
                        alt={project.title}
                        className="pf-card-logo"
                      />
                      <div className="pf-card-body">
                        <h3 className="pf-card-title">{project.title}</h3>
                        <p className="pf-card-desc">{project.desc}</p>
                        <div className="pf-card-tags">
                          {project.tags.map((tag, ti) => (
                            <span key={ti} className="pf-tag">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pf-card-visual" aria-hidden="true">
                      <div className="pf-card-mockup-area">
                        <img
                          src={project.img}
                          alt=""
                          className="pf-card-mockup-inner"
                        />
                      </div>
                    </div>

                  </div>
                  <p className="pf-card-sub-external">{project.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Nav: progress bar stretches full width, arrows pinned right */}
          <div className="portfolio-nav" aria-label="Portfolio navigation">
            <div className="portfolio-progress" aria-hidden="true">
              <div
                className="portfolio-progress-fill"
                style={{
                  width: `${((currentSlide - 1 + actualProjectCount) % actualProjectCount + 1) / actualProjectCount * 100}%`,
                }}
              />
            </div>
            <button
              onClick={prevProject}
              className="portfolio-nav-btn"
              aria-label="Previous projects"
            >
              ←
            </button>
            <button
              onClick={nextProject}
              className="portfolio-nav-btn"
              aria-label="Next projects"
            >
              →
            </button>
          </div>

        </div>
      </section>
      {/* ── End Portfolio ────────────────────────────────────────────────── */}
      {/* Services Section */}
      <section className="home-services-section">
        <div className="home-services-container">
          <div className="home-services-copy">
            <h2 className="home-services-title">Our Services</h2>
            <p className="home-services-subtitle">
              We Offer A Range Of Creative And Digital Services Designed To Help Your Brand Stand Out
            </p>
            <div className="home-services-list">
              {services.map((service) => (
                <NavLink 
                  key={service.id} 
                  to={`/services/${service.slug}`}
                  onMouseEnter={() => setActiveService(service.slug)}
                  onFocus={() => setActiveService(service.slug)}
                  className={`home-service-item ${activeService === service.slug ? "home-service-item-active" : ""}`}
                >
                  <span className="home-service-index">{service.id}</span>
                  <span className="home-service-label">{service.title}</span>
                  <span className="ml-auto text-white font-bold text-lg">→</span>
                </NavLink>
              ))}
            </div>
          </div>
          <div className="home-services-image-wrap">
            <img 
              src="/assets/team-collaborating.jpg"
              alt="Team collaborating around a laptop"
              className="home-services-image"
            />
          </div>
          <div className="home-services-cards">
            <NavLink to="/work" className="home-service-info-card home-service-info-card-muted">
              <p>Ever wonder how design magic happens?</p>
              <div className="home-service-card-bottom">
                <h3>See How We Work</h3>
                <span className="home-service-card-icon home-service-card-icon-pink" aria-hidden="true">
                  <ArrowUpRight size={20} strokeWidth={1.8} />
                </span>
              </div>
            </NavLink>
            <NavLink to="/contact" className="home-service-info-card home-service-info-card-primary">
              <p>Looking for design experts who can bring your vision to life?</p>
              <div className="home-service-card-bottom">
                <h3>Meet Our Expert</h3>
                <span className="home-service-card-icon home-service-card-icon-white" aria-hidden="true">
                  <ArrowUpRight size={20} strokeWidth={1.8} />
                </span>
              </div>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="why-clients-section">
        <div className="why-clients-container">
          <div className="why-clients-intro">
            <div>
              <h2>Why Our Clients Choose Us As Partners</h2>
              <div className="why-divider" />
            </div>
            <NavLink to="/contact" className="book-btn why-book-btn">Book A Call <CtaArrow /></NavLink>
          </div>
          <div className="why-clients-grid">
            {[
              { title: "Expertise & Specialization", desc: "Access to a team with expertise in various marketing disciplines, ensuring your campaigns are well rounded and effective" },
              { title: "Fresh Perspectives", desc: "We bring an outsider's perspective to your brand. This fresh perspective can help you stay ahead of competitors and adapt to changing market trends." },
              { title: "Scalability and Flexibility", desc: "Whether you're a small startup or a large corporation, we can help you scale your services to meet your needs." },
              { title: "Resource Optimization", desc: "Instead of hiring and training an in-house team, you can tap into the agency's existing infrastructure, saving both time and money." }
            ].map((item) => (
              <div key={item.title} className="why-card">
                <img src="/assets/flower-transparent.png" alt="" className="why-icon" aria-hidden="true" />
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonial-section">
        <div className="max-w-6xl mx-auto">
          <div className="testimonial-label">Testimonial</div>
          <h2 className="testimonial-heading">Social Proof & Success Stories</h2>
          <p className="testimonial-sub">Here's what our clients have to say after partnering us — real experiences, real results, and real stories behind the Search</p>
          <div className="relative max-w-4xl mx-auto mt-10 mx-8" style={{paddingLeft: '32px', paddingRight: '32px'}}>
              <div className="test-card">
                <div className="test-left">
                  <div className="test-quote">“</div>
                  <p className="test-text">{testimonials[testIndex].quote}</p>
                  <div className="flex items-center gap-4">
                    <img src={testimonials[testIndex].avatar} alt={testimonials[testIndex].name} className="test-avatar" />
                    <div>
                      <div className="test-name">{testimonials[testIndex].name}</div>
                      <div className="test-role">{testimonials[testIndex].role}</div>
                    </div>
                  </div>
                </div>
                <div className="test-img-wrap">
                  <img src={testimonials[testIndex].projectImg} alt={testimonials[testIndex].project} />
                </div>
              </div>
            <button className="arrow-btn arrow-left" onClick={prevTest}><ChevronLeft /></button>
            <button className="arrow-btn arrow-right" onClick={nextTest}><ChevronRight /></button>
          </div>
          <div className="trust-bar">
            <div className="avatar-stack">
              {[
                "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
                "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80",
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
              ].map((src, i) => (
                <img key={i} src={src} alt="avatar" />
              ))}
            </div>
            <div className="trust-stars">★★★★★</div>
            <div className="trust-rating">4.9 / 5.0</div>
            <div className="trust-text">Trusted by <span>500+</span> Worldwide Clients</div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="faq-container">
          <div className="faq-left">
            <div className="faq-label">FAQ</div>
            <h2 className="faq-heading">Questions <span>Answers</span></h2>
            {[
              { q: "What services do you offer?", a: "We design everything you need for your business: logos, websites, apps, Product and marketing materials. Need a new brand? We'll create it. Want a website? We'll build it. Looking for marketing designs? We've got you covered. You can pick and choose what you need most right now." },
              { q: "How does the Monthly Retainer subscription work?", a: "You reserve ongoing creative and development support each month, with clear priorities, steady delivery, and a predictable workflow." },
              { q: "What's your refund policy?", a: "We align on scope before work starts and handle concerns through clear checkpoints, revisions, and transparent communication." },
              { q: "How soon can you start working together?", a: "Most projects can begin after discovery, requirements, and initial onboarding are complete." },
              { q: "What do you need to get started?", a: "A brief, project goals, branding assets, content, access details, and any examples you like are usually enough to begin." },
              { q: "Can you work with tight deadlines?", a: "Yes, we can support fast timelines when scope, feedback, and content are aligned from the start." },
              { q: "What if I don't have brand guidelines or a clear brand identity?", a: "We can help shape the visual direction first, then use it consistently across your site, app, or marketing materials." },
              { q: "Can I pause or cancel my subscription anytime?", a: "Yes, you can pause or cancel based on your plan terms and current active work." },
            ].map((faq, idx) => (
              <div 
                key={idx} 
                className={`faq-item ${openFaq === idx ? 'open' : ''}`}
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <div className="faq-item-header">
                  <div className="faq-num">/ 0{idx + 1}</div>
                  <div className="faq-question">{faq.q}</div>
                  <div className="faq-toggle">{openFaq === idx ? '—' : '+'}</div>
                </div>
                <div className="faq-answer">{faq.a}</div>
              </div>
            ))}
          </div>
          <div className="faq-right">
            <div className="contact-card">
              <img src="/assets/designer-sketching.jpg" alt="Designer sketching" className="contact-avatar" />
              <div className="contact-text">Feel free to reach out whenever<span> you have questions.</span></div>
              <NavLink to="/contact" className="ask-btn">Ask a question</NavLink>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
