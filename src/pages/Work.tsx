
import { NavLink } from "react-router-dom";
import PageHero from "../components/PageHero";
import CtaArrow from "../components/CtaArrow";
import CtaBanner from "../components/CtaBanner";

export default function Work() {
  const projects = [
    { 
      title: "FinTech Dashboard Pro", 
      category: "Web App Development", 
      desc: "A sleek, high-performance financial dashboard designed for enterprise data visualization and real-time analytics.", 
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=85",
      slug: "web-design" 
    },
    { 
      title: "Smart Retail POS", 
      category: "POS System", 
      desc: "A modern point-of-sale interface built for seamless transactions, inventory management, and intuitive staff onboarding.", 
      img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=85",
      slug: "pos" 
    },
    { 
      title: "Omnichannel CRM", 
      category: "CRM Platform", 
      desc: "An intelligent customer relationship management tool centralizing communication, sales pipelines, and support tickets.", 
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=85",
      slug: "crm" 
    },
  ];

  const showcase = [
    { 
      title: "Nexus AI Automation", 
      subtitle: "MACHINE LEARNING", 
      desc: "Automated business workflows reducing manual data entry by 85%.", 
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85"
    },
    { 
      title: "Echo E-Commerce", 
      subtitle: "WEB DEVELOPMENT", 
      desc: "A headless commerce experience built for lightning-fast page loads.", 
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=85"
    },
    { 
      title: "Lumiere Brand Identity", 
      subtitle: "UI/UX DESIGN", 
      desc: "Complete visual overhaul and design system for a digital lifestyle brand.", 
      img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=85"
    },
    { 
      title: "Global Logistics API", 
      subtitle: "SOFTWARE ENGINEERING", 
      desc: "Robust backend infrastructure powering international supply chains.", 
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85"
    },
  ];

  return (
    <div className="overflow-hidden">
      <PageHero 
        title="Our Work" 
        breadcrumbText="Work"
        description="Explore our portfolio of cutting-edge digital experiences, scalable platforms, and transformational brands."
      />

      {/* Main Portfolio Grid */}
      <section className="py-24 bg-[#fafafa]">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="dash-label justify-center mb-4">Recent Deliveries</span>
            <h2 className="text-4xl md:text-5xl font-black">Crafted with precision, <br/>built for performance.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <article key={idx} className="bg-white border border-line rounded-[32px] overflow-hidden group hover:shadow-custom hover:border-primary/20 transition-all duration-300 flex flex-col">
                <div className="h-[280px] bg-muted/10 relative overflow-hidden">
                   <img 
                     src={project.img} 
                     alt={project.title} 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#1a1035]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                   <span className="text-[#e91e8c] text-xs font-bold uppercase tracking-widest mb-3 block">{project.category}</span>
                   <h3 className="text-2xl font-black mb-4 group-hover:text-[#e91e8c] transition-colors">{project.title}</h3>
                   <p className="text-muted text-sm leading-relaxed mb-8 flex-grow">{project.desc}</p>
                   <NavLink to={`/services/${project.slug}`} className="btn btn-dark w-full gap-2 mt-auto">View Details <CtaArrow /></NavLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Showcase */}
      <section className="py-24 bg-white border-y border-line">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
             <div className="max-w-2xl">
               <div className="dash-label mb-6">Featured Case Studies</div>
               <h2 className="text-4xl md:text-6xl font-black">Our Benchmark <div className="inline text-[#e91e8c]">Projects.</div></h2>
             </div>
             <p className="max-w-md text-muted font-medium text-lg">We dive deep into our clients' businesses to build scalable solutions that generate measurable results and lasting impact.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {showcase.map((item, idx) => (
              <div 
                key={idx} 
                className="group relative h-[320px] md:h-[500px] rounded-[40px] overflow-hidden shadow-lg border border-line cursor-pointer"
              >
                {/* Background Image */}
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1035]/90 via-[#1a1035]/30 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                
                {/* Content */}
                <div className="absolute inset-0 p-10 md:p-14 flex flex-col justify-end text-white z-10">
                    <div className="transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                      <strong className="text-[#e91e8c] text-sm font-bold tracking-widest mb-3 block">{item.subtitle}</strong>
                      <h3 className="text-3xl md:text-5xl font-black leading-tight mb-4">{item.title}</h3>
                      <p className="text-white/80 text-base font-medium leading-relaxed max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{item.desc}</p>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 mx-4 md:mx-10">
        <div className="container bg-gradient-to-br from-[#1a1035] to-[#3b1c6e] rounded-[40px] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
           <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
              <div className="pt-8 md:pt-0">
                 <strong className="text-6xl md:text-8xl font-black block mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">500+</strong>
                 <span className="text-[#e91e8c] font-bold uppercase tracking-widest text-sm">Completed Projects</span>
              </div>
              <div className="pt-8 md:pt-0">
                 <strong className="text-6xl md:text-8xl font-black block mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">15k</strong>
                 <span className="text-[#e91e8c] font-bold uppercase tracking-widest text-sm">Satisfied Clients</span>
              </div>
              <div className="pt-8 md:pt-0">
                 <strong className="text-6xl md:text-8xl font-black block mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">94%</strong>
                 <span className="text-[#e91e8c] font-bold uppercase tracking-widest text-sm">Success Rate</span>
              </div>
           </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
