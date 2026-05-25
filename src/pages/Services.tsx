import { Check, Monitor, Layout, Cpu, Smartphone, Settings, BarChart3 } from "lucide-react";
import { NavLink } from "react-router-dom";
import PageHero from "../components/PageHero";
import CtaBanner from "../components/CtaBanner";
import CtaArrow from "../components/CtaArrow";

export default function Services() {
  const categories = [
    { icon: <Monitor size={24} />, title: "Web Design", desc: "Bespoke web design perfect for your brand and target audience.", slug: "web-design" },
    { icon: <Layout size={24} />, title: "CRM", desc: "Sell products online 24/7 through a well-designed, easy-to-use eCommerce website.", slug: "crm" },
    { icon: <Cpu size={24} />, title: "AI Automation", desc: "Automate repetitive and time-consuming tasks with our AI-powered workflow.", slug: "ai-automation" },
    { icon: <Settings size={24} />, title: "POS System", desc: "Smart POS system designed for modern retail and growing businesses.", slug: "pos" }
  ];

  const pricing = [
    { name: "Starter", price: "20", desc: "For most businesses that want to optimize web queries", features: ["Lead Management", "Contact Storage", "Chat Support", "Basic Reports"], popular: false },
    { name: "Pro Plan", price: "60", desc: "For most businesses that want to optimize web queries", features: ["Everything in Basic", "Automation", "Sales Pipeline", "Advanced Reports"], popular: true },
    { name: "Premium", price: "160", desc: "For most businesses that want to optimize web queries", features: ["All Features", "Dedicated Support", "Custom Integrations", "Brand Strategy"], popular: false },
  ];

  return (
    <div className="overflow-hidden">
      <PageHero 
        title="Our Services" 
        breadcrumbText="Services"
        description="Web development isn't just about coding — it's about building a digital presence that works. At DHO'S., we craft websites that are fast, secure, and designed to engage."
      />

      {/* Grid Categories */}
      <section className="py-24 bg-transparent">
        <div className="container">
          <div className="flex flex-col lg:flex-row justify-between gap-12 items-end mb-16">
            <div className="max-w-2xl">
              <div className="dash-label mb-6">What we offer</div>
              <h2 className="text-4xl md:text-5xl leading-tight">A Team of Experts That Can Build A Website You're Proud Of</h2>
            </div>
            <NavLink to="/contact" className="btn btn-dark gap-2">Get In Touch Today <CtaArrow /></NavLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, idx) => (
              <NavLink to={`/services/${cat.slug}`} key={idx} className="p-10 border border-line rounded-[32px] hover:shadow-custom hover:border-primary/20 transition-all group block bg-white">
                <div className="w-14 h-14 bg-soft text-primary rounded-2xl flex items-center justify-center mb-10 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {cat.icon}
                </div>
                <h3 className="text-2xl font-black mb-4">{cat.title}</h3>
                <p className="text-muted leading-relaxed mb-6">{cat.desc}</p>
                <div className="text-primary font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                   Learn More <CtaArrow />
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section (Inspired by CRM page) */}
      <section className="py-24 bg-navy mx-6 rounded-[40px] text-white overflow-hidden">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16 px-4">
             <div className="dash-label text-white after:bg-white before:bg-white mb-6 mx-auto w-fit">Product Preview</div>
             <h2 className="text-white mb-6">Simple. Powerful. Intuitive.</h2>
             <p className="text-white/60 text-lg leading-relaxed">
               Our interfaces are designed with simplicity in mind &mdash; so your team can focus on growth, not learning complicated tools.
             </p>
          </div>

          <div className="bg-[#1a1035] rounded-[32px] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] max-w-5xl mx-auto border-[12px] border-white/10 relative group flex items-center justify-center">
             <img 
               src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85" 
               alt="Product Dashboard Analytics Preview" 
               className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-[1.03]"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-soft">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <div className="dash-label mb-6 mx-auto w-fit">Packages</div>
            <h2 className="text-4xl md:text-5xl">Simple, Transparent <span className="text-primary">Pricing</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-5xl mx-auto items-center">
            {pricing.map((plan, idx) => (
              <article 
                key={idx} 
                className={`p-10 border transition-all duration-300 flex flex-col md:min-h-[500px]
                  ${plan.popular ? "z-10 bg-navy text-white scale-105 rounded-[32px] border-none shadow-2xl" : "bg-white border-line"}
                  ${idx === 0 ? "rounded-l-[32px]" : ""}
                  ${idx === 2 ? "rounded-r-[32px]" : ""}
                  ${!plan.popular && "hover:shadow-xl"}
                `}
              >
                {plan.popular && <em className="absolute right-8 top-8 text-[10px] font-bold uppercase tracking-widest text-primary not-italic">MOST POPULAR</em>}
                <strong className={`text-4xl font-black mb-6 flex items-baseline gap-1 ${plan.popular ? "text-white" : "text-secondary"}`}>
                  ${plan.price} <small className={`text-sm font-medium ${plan.popular ? "text-white/50" : "text-muted"}`}>/month</small>
                </strong>
                <h3 className={`text-xl font-black mb-4 ${plan.popular ? "text-white" : "text-primary"}`}>{plan.name}</h3>
                <p className={`text-sm mb-8 leading-relaxed ${plan.popular ? "text-white/60" : "text-muted"}`}>{plan.desc}</p>
                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map(f => (
                    <li key={f} className={`text-sm flex items-center gap-3 font-medium ${plan.popular ? "text-white/80" : "text-muted"}`}>
                      <Check size={14} className="text-primary" /> {f}
                    </li>
                  ))}
                </ul>
                <NavLink to="/contact" className={`btn w-full ${plan.popular ? "bg-white text-navy" : "btn-dark opacity-100"}`}>
                  Choose Plan <CtaArrow />
                </NavLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
