import { ArrowUpRight, X, ChevronDown, Star, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import CtaBanner from "../components/CtaBanner";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [projectIndex, setProjectIndex] = useState(0);
  const [testIndex, setTestIndex] = useState(0);

  const testimonials = [
    {
      quote: "Working with BizTech was a absolute game-changer. Their expertise enabled us to streamline our marketing and see a 40% growth in leads within just three months.",
      name: "Sarah Jenkins",
      role: "CMO, BrightSpark Systems",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80",
      project: "Brand Identity Revamp",
      projectImg: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&q=80"
    },
    {
      quote: "The personalized approach is what sets them apart. They didn't just provide a solution; they partnered with us to evolve our brand’s digital presence.",
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
    { id: "01", title: "Web Design & Development", desc: "Research-led interfaces, responsive frontend development, scalable backend architecture.", slug: "web-design" },
    { id: "02", title: "CRM", desc: "Empower your business with tailored Customer Relationship Management.", slug: "crm" },
    { id: "03", title: "AI Automation", desc: "Leverage AI-driven processes to minimize manual work and increase efficiency.", slug: "ai-automation" },
    { id: "04", title: "POS / Project Management", desc: "Streamline sales and organize projects effectively.", slug: "pos" },
  ];

  const projects = [
    { title: "Regal Event Company", desc: "Enterprise event planning platform with seamless booking and interactive maps.", tags: ["Ecommerce", "WordPress", "SEO", "Hosting"], img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80" },
    { title: "TechPortal Analytics", desc: "Modern analytics dashboard providing real-time data insights and performance reports.", tags: ["React", "Dashboard", "API"], img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80" },
    { title: "HealthTrack Pro", desc: "Personalized wellness app tracking activity, nutrition, and vital health metrics.", tags: ["Mobile", "Flutter", "Firebase"], img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=400&q=80" },
    { title: "ShopSwift E-com", desc: "Fast, secure, and user-centric marketplace designed for high-volume retail traffic.", tags: ["Next.js", "Stripe", "Postgres"], img: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=400&q=80" },
  ];

  const nextProject = () => setProjectIndex((prev) => (prev + 1) % Math.ceil(projects.length / 2));
  const prevProject = () => setProjectIndex((prev) => (prev - 1 + Math.ceil(projects.length / 2)) % Math.ceil(projects.length / 2));

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="hero-left">
            <h1 className="hero-heading">We Drive Growth To Your Business <TrendingUp className="hero-arrow-icon" /></h1>
            <NavLink to="/contact" className="hero-btn hover:-translate-y-1 hover:shadow-lg active:scale-95 transition-all duration-200 inline-flex mt-6">Book A Call <ArrowUpRight size={16} /></NavLink>
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=85" alt="Team" className="hero-image mt-10" />
          </div>
          <div className="hero-right max-w-sm mx-auto lg:mx-0">
            <p className="hero-desc">Elevating Your Digital Presence With Purpose-Driven Design And Powerful Development.</p>
            <div className="stat-cards grid gap-4 mt-8">
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
      <section className="py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="min-h-[280px] md:h-[430px] rounded-2xl bg-soft overflow-hidden shadow-custom relative">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=85" 
              alt="Team collaborating" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div>
            <div className="dash-label mb-6">Who We Are</div>
            <h2 className="mb-6">About Us</h2>
            <p className="text-muted leading-[1.7] text-[15px] font-normal mb-6">
              <span className="text-primary font-bold">
                Odho's Solution
              </span>
              {' '}where creativity meets precision in digital transformation.
            </p>
            <p className="text-muted leading-[1.7] text-[15px] font-normal mb-8">
              Since our founding, we've been committed to more than just building websites. We design and develop holistic digital experiences from sleek 
              <strong className="text-secondary font-bold">web and mobile apps</strong>
              , to impactful branding, animations, content & marketing that deliver real value for businesses. Our team blends innovation, technical expertise, and a client-first mindset to help you elevate your brand, connect with your audience, and thrive online.
            </p>
            <div className="flex flex-wrap gap-4">
              <NavLink to="/about" className="btn btn-dark gap-2">About Odho's Solution <ArrowUpRight size={18} /></NavLink>
              <NavLink to="/contact" className="btn btn-outline">Book a Call</NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="py-10 bg-[#F5F5F5] my-10 md:my-[60px] mx-0 rounded-[16px] relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          {/* Header */}
          <div className="portfolio-header">
            <small className="text-[#999] text-[13px] uppercase tracking-wider font-semibold">Portfolio</small>
            <h2 className="text-4xl font-bold mt-2">
              Our Projects <span className="font-normal">Showcase</span>
            </h2>
          </div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={projectIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
            >
              {projects.slice(projectIndex * 2, projectIndex * 2 + 2).map((project, i) => (
                <div key={i} className="bg-white rounded-[16px] p-5 md:p-7 flex flex-col sm:flex-row gap-5 items-stretch shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-visible h-full">
                  <div className="flex-1 flex flex-col gap-3 justify-between">
                    <div>
                      <h3 className="text-lg md:text-[22px] font-bold text-black">{project.title}</h3>
                      <p className="text-gray-500 text-[13px] md:text-sm leading-relaxed mt-1">{project.desc}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map(tag => (
                        <span key={tag} className="bg-[#f0f0f0] text-[#333] text-[10px] rounded-full px-3 py-1 font-semibold">{tag}</span>
                      ))}
                    </div>
                    <p className="text-[#999] text-[11px] mt-2">{project.title} Website Design</p>
                  </div>
                  <div className="flex-1 relative overflow-visible sm:-mt-5 sm:-mr-4 sm:rotate-6 flex items-center justify-center mt-4 sm:mt-0">
                    <img src={project.img} alt={project.title} className="w-full max-w-[180px] rounded-[10px] shadow-[8px_8px_24px_rgba(0,0,0,0.15)] object-cover" />
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-end items-center gap-3 mt-8">
            <div className="w-[100px] h-1 bg-gray-300 rounded-full overflow-hidden">
               <div className="h-full bg-[#E8345A] transition-all duration-300" style={{ width: `${((projectIndex + 1) / Math.ceil(projects.length / 2)) * 100}%` }} />
            </div>
            <button onClick={prevProject} className="w-10 h-10 rounded-full border border-black flex items-center justify-center hover:bg-black/5 transition-colors">←</button>
            <button onClick={nextProject} className="w-10 h-10 rounded-full bg-[#E8345A] text-white flex items-center justify-center hover:bg-[#E8345A]/90 transition-colors">→</button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 bg-[#4A2C6E] text-white mx-0 rounded-[16px] relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Col 1 */}
          <div className="flex flex-col gap-6">
            <h2 className="text-white font-bold text-3xl">Our Services</h2>
            <p className="text-white/70 font-medium max-w-sm">
              We Offer A Range Of Creative And Digital Services Designed To Help Your Brand Stand Out
            </p>
            <div className="flex flex-col gap-2">
              {services.map((service) => (
                <NavLink 
                  key={service.id} 
                  to={`/services/${service.slug}`}
                  className="rounded-full px-5 py-3 flex items-center gap-4 font-semibold text-sm transition-all bg-transparent border border-white/20 text-white hover:bg-white/10"
                >
                  <span className="text-white/60">{service.id}</span>
                  {service.title}
                  <span className="ml-auto text-white font-bold text-lg">→</span>
                </NavLink>
              ))}
            </div>
          </div>
          
          {/* Col 2 */}
          <div className="h-full">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&q=85" 
              alt="Service preview" 
              className="w-full h-full object-cover rounded-[12px]"
            />
          </div>

          {/* Col 3 */}
          <div className="flex flex-col gap-3 h-full">
            <div className="bg-white/10 p-6 rounded-[12px] flex flex-col gap-2 h-full transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-black/20 cursor-pointer">
              <p className="text-sm text-white/70">Ever wonder how design magic happens?</p>
              <div className="flex items-end justify-between mt-auto">
                <h3 className="text-white font-extrabold text-[20px] leading-tight">See How We Work</h3>
                <button className="w-8 h-8 rounded-full bg-[#ba1c53] flex items-center justify-center text-white"><ArrowUpRight size={16} /></button>
              </div>
            </div>
            <div className="bg-[#E8345A] p-6 rounded-[12px] flex flex-col gap-2 h-full transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-black/20 cursor-pointer">
              <p className="text-sm text-white/80">Looking for design experts who can bring your vision to life?</p>
              <div className="flex items-end justify-between mt-auto">
                <h3 className="text-white font-extrabold text-[20px] leading-tight">Meet Our Expert</h3>
                <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#E8345A]"><ArrowUpRight size={16} /></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-16 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-10">
            <div>
              <h2 className="text-3xl lg:text-4xl font-black">Why Our Clients Choose Us As Partners</h2>
              <div className="why-divider mt-4" />
            </div>
            <NavLink to="/contact" className="book-btn self-start">Book A Call <ArrowUpRight size={16} /></NavLink>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Expertise & Specialization", desc: "Access to a team with expertise in various marketing disciplines, ensuring your campaigns are well rounded and effective" },
              { title: "Fresh Perspectives", desc: "We bring an outsider's perspective to your brand. This fresh perspective can help you stay ahead of competitors and adapt to changing market trends." },
              { title: "Scalability and Flexibility", desc: "Whether you're a small startup or a large corporation, we can help you scale your services to meet your needs." },
              { title: "Resource Optimization", desc: "Instead of hiring and training an in-house team, you can tap into the agency's existing infrastructure, saving both time and money." }
            ].map((item) => (
              <div key={item.title} className="why-card">
                <div className="why-icon"></div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonial-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="testimonial-label">Testimonial</div>
          <h2 className="testimonial-heading">Social Proof & Success Stories</h2>
          <p className="testimonial-sub">Here's what our clients have to say after partnering us — real experiences, real results, and real stories behind the Search</p>

          <div className="relative max-w-4xl mx-auto mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={testIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="test-card"
            >
              <div className="test-left">
                <div className="test-quote">"</div>
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
                <div className="test-img-label">{testimonials[testIndex].project}</div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button className="arrow-btn arrow-left" onClick={prevTest}><ChevronLeft /></button>
          <button className="arrow-btn arrow-right" onClick={nextTest}><ChevronRight /></button>
        </div>

        <div className="trust-bar">
          <div className="avatar-stack">
            {[
              "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80",
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
              "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80"
            ].map((src, i) => (
              <img key={i} src={src} alt="avatar" />
            ))}
          </div>
          <div className="stars">★★★★★</div>
          <div className="text-white font-bold">4.9 / 5.0</div>
          <div className="trust-text">Trusted by <span>500+</span> Worldwide Clients</div>
        </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
          <div className="faq-left">
            <div className="faq-label">FAQ</div>
            <h2 className="faq-heading">Questions <span>Answers</span></h2>

            {[
            { q: "What services do you offer?", a: "We design everything you need for your business: logos, websites, apps, product and marketing materials. Need a new brand? We'll create it. Want a website? We'll build it. Looking for marketing designs? We've got you covered." },
            { q: "How does the Monthly Retainer subscription work?", a: "You reserve ongoing design and development capacity each month with a predictable workflow and priority support." },
            { q: "What's your refund policy?", a: "We align on scope before work starts and handle concerns through clear checkpoints and transparent communication." },
            { q: "How soon can you start working together?", a: "Most projects can begin after discovery, requirements, and initial onboarding are complete." },
            { q: "What do you need to get started?", a: "Brief, scope of work, branding assets, and access points are usually required to kickstart the project." },
            { q: "Can you work with tight deadlines?", a: "Yes, we offer expedited timelines for projects requiring accelerated delivery for an additional premium." },
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
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80" alt="Avatar" className="contact-avatar" />
              <div className="contact-text">Feel free to reach out <em>whenever</em> you have questions.</div>
              <button className="ask-btn">Ask a question</button>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
