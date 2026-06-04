import { useParams, NavLink } from "react-router-dom";
import { 
  Zap, Inbox, BarChart3, Users, UserCheck, Monitor, HelpCircle, 
  Palette, Laptop, Code, CheckCircle2, Globe, Shield, RefreshCw, Layers, Check, Cpu 
} from "lucide-react";
import PageHero from "../components/PageHero";
import CtaBanner from "../components/CtaBanner";
import CtaArrow from "../components/CtaArrow";

export default function ServiceDetail() {
  const { slug } = useParams();
  const currentSlug = slug || "web-design";

  const isPos = currentSlug === "pos";
  const isWebDesign = currentSlug === "web-design";
  const isCrm = currentSlug === "crm";
  const isAi = currentSlug === "ai-automation";

  // Web Design custom features
  const webDesignFeatures = [
    { title: "Web Design", desc: "Bespoke web design perfect for your brand and target audience.", icon: Palette },
    { title: "eCommerce", desc: "Sell products online 24/7 through a well-designed, easy-to-use eCommerce website.", icon: Zap },
    { title: "UI Design", desc: "Understand user needs and build products that solve user problems.", icon: Monitor },
    { title: "Responsive Design", desc: "Make your website look great on any device.", icon: Laptop },
    { title: "Wireframes", desc: "Structure and organize your website content.", icon: Code },
    { title: "Strategy", desc: "Plan and execute the website project.", icon: RefreshCw },
  ];

  // POS custom features
  const posFeatures = [
    { title: "Sales Management", desc: "Proactively parallel task cross-media partnerships rather than dynamic partnerships.", icon: Zap },
    { title: "Inventory Tracking", desc: "Proactively parallel task cross-media partnerships rather than dynamic partnerships.", icon: Inbox },
    { title: "Reports & Analytics", desc: "Proactively parallel task cross-media partnerships rather than dynamic partnerships.", icon: BarChart3 },
    { title: "Customer Management", desc: "Proactively parallel task cross-media partnerships rather than dynamic partnerships.", icon: Users },
    { title: "Staff Management", desc: "Proactively parallel task cross-media partnerships rather than dynamic partnerships.", icon: UserCheck },
    { title: "Multi-Device Support", desc: "Proactively parallel task cross-media partnerships rather than dynamic partnerships.", icon: Monitor },
  ];

  const features = isWebDesign ? webDesignFeatures : posFeatures;

  const gridCards = [
    {
      title: "Mobile development",
      img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80",
      desc: "We develop advanced computer vision applications capable of identifying and classifying objects."
    },
    {
      title: "Custom Development",
      img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80",
      desc: "We develop advanced computer vision applications capable of identifying and classifying objects."
    },
    {
      title: "Staff Augmentation",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
      desc: "We develop advanced computer vision applications capable of identifying and classifying objects."
    },
    {
      title: "AI automation",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
      desc: "We develop advanced computer vision applications capable of identifying and classifying objects."
    },
    {
      title: "Product Development",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
      desc: "We develop advanced computer vision applications capable of identifying and classifying objects."
    },
    {
      title: "Creative Design",
      img: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=600&q=80",
      desc: "We develop advanced computer vision applications capable of identifying and classifying objects."
    }
  ];

  // General service page details
  const pageTitle = isPos 
    ? "Project Management" 
    : (isWebDesign ? "Web Design & Development" : isCrm ? "CRM" : "AI Automation");

  // Common pricing data (for CRM page)
  const pricing = [
    { name: "Starter", price: "20", desc: "For most businesses that want to optimize web queries", features: ["Lead Management", "Contact Storage", "Chat Support", "Basic Reports"], popular: false },
    { name: "Pro Plan", price: "60", desc: "For most businesses that want to optimize web queries", features: ["Everything in Basic", "Automation", "Sales Pipeline", "Advanced Reports"], popular: true },
    { name: "Premium", price: "160", desc: "For most businesses that want to optimize web queries", features: ["All Features", "Dedicated Support", "Custom Integrations", "Brand Strategy"], popular: false },
  ];

  // Common Best Projects data
  const bestProjects = [
    {
      title: "Mobile App Mockup",
      img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "LIFESTYLE",
      subtitle: "SUMMER COLLECTION",
      img: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Truck Tracking Dashboard",
      img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Financial Dashboard",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80"
    }
  ];

  const pageBreadcrumb = isPos
    ? "POS / Project Management"
    : (isWebDesign ? "Web Design & Development" : isCrm ? "CRM" : "AI Automation");

  const pageDescription = isWebDesign
    ? "We craft bespoke websites that are fast, secure, and designed to engage your audience and scale your business."
    : isCrm
    ? "Manage customer relationships smarter and accelerate sales pipeline velocities with ease."
    : isAi
    ? "Automate repetitive business workflows and unlock predictive business intelligence using machine learning."
    : "Smart POS and project management solutions designed to streamline modern business operations.";

  return (
    <div className="overflow-hidden bg-[#fafafa]">
      <PageHero 
        title={pageTitle} 
        breadcrumbText={pageBreadcrumb} 
        description={pageDescription}
      />

      {/* ========================================================================= */}
      {/* 1. WEB DESIGN & DEVELOPMENT PAGE */}
      {/* ========================================================================= */}
      {isWebDesign && (
        <>
          <section className="py-20 bg-white">
            <div className="container">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
                <div className="lg:col-span-4">
                  <span className="text-[11px] font-bold text-primary uppercase tracking-[0.2em] mb-3 block">Service</span>
                  <h2 className="text-3xl md:text-5xl font-black text-secondary leading-tight uppercase">
                    Web Design &<br />Development
                  </h2>
                </div>
                <div className="lg:col-span-8 lg:pt-6">
                  <p className="text-[#555] text-base leading-[1.8] max-w-3xl">
                    Web development is not just about coding a site &mdash; it's about building a digital presence that works. At Designco, we craft websites that are fast, secure, and designed to engage your audience while growing your business.
                  </p>
                </div>
              </div>

              {/* Banner + Stats overlay */}
              <div className="relative rounded-[24px] overflow-hidden shadow-2xl">
                <div className="h-[300px] md:h-[450px] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80" 
                    alt="Developer Desk" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-[#1a1035] text-white py-10 px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-t-4 border-primary">
                  <div>
                    <strong className="text-3xl md:text-5xl font-black block text-primary mb-1">13+</strong>
                    <span className="text-white/60 text-xs font-bold uppercase tracking-wider">Years experience</span>
                  </div>
                  <div className="border-l border-white/10 md:border-l">
                    <strong className="text-3xl md:text-5xl font-black block text-primary mb-1">13K+</strong>
                    <span className="text-white/60 text-xs font-bold uppercase tracking-wider">Projects</span>
                  </div>
                  <div className="border-l border-white/10 md:border-l">
                    <strong className="text-3xl md:text-5xl font-black block text-primary mb-1">7K+</strong>
                    <span className="text-white/60 text-xs font-bold uppercase tracking-wider">Active Clients</span>
                  </div>
                  <div className="border-l border-white/10 md:border-l">
                    <strong className="text-3xl md:text-5xl font-black block text-primary mb-1">124+</strong>
                    <span className="text-white/60 text-xs font-bold uppercase tracking-wider">Team Members</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-24 bg-white border-t border-[#eee]">
            <div className="container space-y-28">
              {/* Row 1: Text Left, Phone Right */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6">
                  <span className="text-[11px] font-bold text-primary uppercase tracking-[0.2em] mb-4 block">
                    Always craft premium & custom designs
                  </span>
                  <h2 className="text-3xl md:text-5xl font-black text-secondary leading-tight mb-6 uppercase">
                    Easy To Use Websites<br />That Are Functional.
                  </h2>
                  <p className="text-[#555] text-base leading-relaxed mb-8">
                    We don't build generic websites. Here at Odho's Solutions, we understand all aspects of a custom website, from research to web development and hosting, so UX Design. We tailor our services to the client and the project requirements.
                  </p>
                  <NavLink to="/contact" className="inline-flex items-center gap-3 bg-primary text-white font-bold py-3 px-8 rounded-full text-xs uppercase tracking-wider hover:bg-primary/95 transition-all">
                    Book A Call Today <CtaArrow />
                  </NavLink>
                </div>
                <div className="lg:col-span-6 flex justify-center">
                  <div className="relative w-full max-w-lg rounded-[24px] overflow-hidden shadow-2xl border border-[#eee]">
                    <img 
                      src="/assets/designer-sketching.jpg" 
                      alt="Designer Sketching Workstation" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Laptop Left, Text Right */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
                  <div className="relative w-full max-w-xl rounded-[24px] overflow-hidden shadow-2xl border border-[#eee]">
                    <img 
                      src="/assets/team-collaborating.jpg" 
                      alt="Team Collaborating Around Laptop" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                <div className="lg:col-span-6 order-1 lg:order-2">
                  <h2 className="text-3xl md:text-5xl font-black text-secondary leading-tight mb-6 uppercase">
                    We Handle Every Project In-House, We Don't Outsource.
                  </h2>
                  <p className="text-[#555] text-base leading-relaxed">
                    When running a project, we never hire freelancers to complete it. Every website project we take on is produced in-house, with no outsourcing involved. This is that we maintain control of all aspects of your project, we will maintain the quality of the project. Our team is made up of developers, designers, and content writers who work together to give you the perfect solution.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Capability Grid */}
          <section className="py-20 bg-gradient-to-br from-[#E8345A] via-[#5C2A78] to-[#1E1135] text-white">
            <div className="container">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16">
                <div className="max-w-2xl">
                  <span className="text-[11px] font-bold text-white/70 uppercase tracking-[0.2em] mb-3 block">What we can help you with</span>
                  <h2 className="text-white text-3xl md:text-5xl font-black leading-tight uppercase">
                    A Team Experts That Can Build A Website You're Proud Of
                  </h2>
                </div>
                <NavLink to="/contact" className="btn bg-white text-[#1a1035] hover:bg-white/90 shadow-lg shrink-0">
                  Get In Touch Today <CtaArrow />
                </NavLink>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Web Design", desc: "Bespoke web design perfect for your brand and target audience.", icon: Palette },
                  { title: "eCommerce", desc: "Sell products online 24/7 through a well-designed, easy-to-use eCommerce website.", icon: Zap },
                  { title: "UI Design", desc: "Understand user needs and build products that solve user problems.", icon: Monitor },
                  { title: "Responsive Design", desc: "Make your website look great on any device.", icon: Laptop },
                  { title: "Wireframes", desc: "Structure and organize your website content.", icon: Code },
                  { title: "Strategy", desc: "Plan and execute the website project.", icon: RefreshCw },
                ].map((feat, idx) => {
                  const Icon = feat.icon;
                  return (
                    <div key={idx} className="p-8 bg-white/5 border border-white/10 rounded-[24px] hover:bg-white/10 transition-all duration-300">
                      <div className="w-12 h-12 rounded-xl bg-[#E8345A] text-white flex items-center justify-center mb-6">
                        <Icon size={22} />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 text-none normal-case">{feat.title}</h3>
                      <p className="text-white/75 text-sm leading-relaxed">{feat.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </>
      )}

      {/* ========================================================================= */}
      {/* 2. CRM PAGE */}
      {/* ========================================================================= */}
      {isCrm && (
        <>
          <section className="py-20 bg-white">
            <div className="container">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Left */}
                <div className="lg:col-span-6">
                  <span className="text-[11px] font-bold text-primary uppercase tracking-[0.2em] mb-4 block">CRM</span>
                  <h2 className="text-3xl md:text-5xl font-black text-secondary leading-tight mb-6 uppercase">
                    Manage Customers<br />Smarter, Go Faster
                  </h2>
                  <p className="text-[#555] text-base leading-relaxed mb-8 max-w-xl">
                    Manage customer data, track analytics, view sales pipelines, build custom campaigns, and more. Empower your sales & support teams to close deals faster and keep customer data secure.
                  </p>
                  <div className="flex gap-4">
                    <NavLink to="/contact" className="btn btn-dark">Get Started Now <CtaArrow /></NavLink>
                    <NavLink to="/contact" className="btn btn-outline">Book A Call <CtaArrow /></NavLink>
                  </div>
                </div>

                {/* Right CRM collage */}
                <div className="lg:col-span-6 flex justify-center">
                  <div className="relative w-full max-w-lg rounded-[24px] overflow-hidden shadow-2xl bg-white p-2 border border-[#eee]">
                    <img 
                      src="/assets/crm-dashboard.jpg" 
                      alt="CRM Dashboard Collage" 
                      className="w-full h-auto rounded-[16px] object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CRM Feature cards */}
          <section className="py-20 bg-white border-t border-[#eee]">
            <div className="container">
              <div className="mb-14">
                <span className="text-[11px] font-bold text-muted uppercase tracking-[0.2em] mb-3 block">Features</span>
                <h2 className="text-3xl md:text-5xl font-black text-secondary uppercase">
                  Everything You Need To <span className="text-primary font-normal text-none lowercase">Manage Your Customers</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Lead Management",
                    desc: "Capture, organize, and track leads effectively from multiple channels.",
                    icon: Users
                  },
                  {
                    title: "Sales Pipeline",
                    desc: "Visualize your deals and move them through custom pipelines.",
                    icon: Layers
                  },
                  {
                    title: "Automation",
                    desc: "Automate repetitive tasks and follow-ups to save time.",
                    icon: Zap
                  },
                  {
                    title: "Analytics & Reports",
                    desc: "Gain real-time insights into your sales performance.",
                    icon: BarChart3
                  }
                ].map((feat, idx) => {
                  const Icon = feat.icon;
                  return (
                    <div key={idx} className="p-8 bg-[#fafafa] border border-[#f0f0f0] rounded-[24px] flex gap-6 items-start hover:shadow-lg transition-all duration-300">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <Icon size={22} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-secondary mb-2 text-none normal-case">{feat.title}</h3>
                        <p className="text-[#666] text-sm leading-relaxed">{feat.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Global.io Dashboard Preview */}
          <section className="py-24 bg-navy w-full text-white overflow-hidden my-12">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center mb-16 px-4">
                 <div className="dash-label text-white after:bg-white before:bg-white mb-6 mx-auto w-fit">Product Preview</div>
                 <h2 className="text-white mb-6">Simple. Powerful. Intuitive.</h2>
                 <p className="text-white/60 text-lg leading-relaxed">
                   Our CRM dashboard is simple to use &mdash; so your team can focus on growth, not learning complicated tools.
                 </p>
              </div>

               <div className="bg-white rounded-[32px] overflow-hidden text-secondary shadow-2xl w-full lg:w-[70%] max-w-4xl mx-auto border-8 border-white/10">
                  <img 
                    src="/assets/crm-dashboard.jpg" 
                    alt="CRM Dashboard Preview" 
                    className="w-full h-auto"
                  />
               </div>
            </div>
          </section>

          {/* Pricing Grid */}
          <section className="py-20 bg-[#f9f9f9]">
            <div className="container">
              <div className="max-w-2xl mx-auto text-center mb-16">
                <div className="dash-label mb-6 mx-auto w-fit">Packages</div>
                <h2 className="text-4xl md:text-5xl font-black text-secondary uppercase">Simple, Transparent Pricing</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-5xl mx-auto items-center">
                {pricing.map((plan, idx) => (
                  <article 
                    key={idx} 
                    className={`p-10 border border-[#eee] transition-all duration-300 flex flex-col md:min-h-[500px] relative
                      ${plan.popular ? "z-10 bg-[#1a1035] text-white scale-105 rounded-[32px] border-none shadow-2xl" : "bg-white"}
                      ${idx === 0 ? "rounded-l-[32px]" : ""}
                      ${idx === 2 ? "rounded-r-[32px]" : ""}
                      ${!plan.popular ? "hover:shadow-xl" : ""}
                    `}
                  >
                    {plan.popular && <em className="absolute right-8 top-8 text-[10px] font-bold uppercase tracking-widest text-primary not-italic">MOST POPULAR</em>}
                    <strong className={`text-4xl font-black mb-6 flex items-baseline gap-1 ${plan.popular ? "text-white" : "text-secondary"}`}>
                      ${plan.price} <small className={`text-sm font-medium ${plan.popular ? "text-white/50" : "text-[#999]"}`}>/month</small>
                    </strong>
                    <h3 className={`text-xl font-black mb-4 ${plan.popular ? "text-white" : "text-primary"}`}>{plan.name}</h3>
                    <p className={`text-sm mb-8 leading-relaxed ${plan.popular ? "text-white/60" : "text-[#666]"}`}>{plan.desc}</p>
                    <ul className="space-y-4 mb-10 flex-grow">
                      {plan.features.map(f => (
                        <li key={f} className={`text-sm flex items-center gap-3 font-semibold ${plan.popular ? "text-white/80" : "text-[#666]"}`}>
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
        </>
      )}

      {/* ========================================================================= */}
      {/* 3. AI AUTOMATION PAGE */}
      {/* ========================================================================= */}
      {isAi && (
        <>
          {/* AI Features Cards Grid */}
          <section className="py-20 bg-white">
            <div className="container">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                {/* Card 1: AI Workflow Automation */}
                <div className="bg-white border border-[#f0f0f0] rounded-[24px] overflow-hidden hover:shadow-lg transition-all flex flex-col">
                  <div className="p-6 bg-[#fafafa] border-b border-[#f0f0f0] flex flex-col gap-3 min-h-[160px] justify-center">
                    {[
                      { text: "Select Files", checked: true },
                      { text: "Run Automation", checked: true },
                      { text: "Analyze Outcomes", checked: true }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 bg-white px-4 py-2 rounded-xl border border-[#eee] shadow-sm">
                        <div className="w-5 h-5 rounded-full bg-[#E8345A] text-white flex items-center justify-center shrink-0">
                          <Check size={12} strokeWidth={3} />
                        </div>
                        <span className="text-xs font-bold text-secondary">{item.text}</span>
                      </div>
                    ))}
                  </div>
                  <div className="p-6 flex-grow">
                    <h3 className="text-lg font-bold text-secondary mb-2 text-none normal-case">AI Workflow Automation</h3>
                    <p className="text-[#666] text-sm leading-relaxed">
                      Automate repetitive and time-consuming tasks with our AI-powered workflow automation
                    </p>
                  </div>
                </div>

                {/* Card 2: NLP Engine */}
                <div className="bg-white border border-[#f0f0f0] rounded-[24px] overflow-hidden hover:shadow-lg transition-all flex flex-col">
                  <div className="p-4 bg-[#fafafa] border-b border-[#f0f0f0] flex justify-center items-center min-h-[160px]">
                    <img 
                      src="/assets/nlp-chart.jpg" 
                      alt="Natural Language Processing Graph" 
                      className="w-full h-auto max-h-[130px] object-contain rounded-lg shadow-sm"
                    />
                  </div>
                  <div className="p-6 flex-grow">
                    <h3 className="text-lg font-bold text-secondary mb-2 text-none normal-case">Natural Language Processing (NLP) Engine</h3>
                    <p className="text-[#666] text-sm leading-relaxed">
                      Analyze text, understand sentiment, and extract keywords from your text data.
                    </p>
                  </div>
                </div>

                {/* Card 3: Predictive Analytics */}
                <div className="bg-white border border-[#f0f0f0] rounded-[24px] overflow-hidden hover:shadow-lg transition-all flex flex-col">
                  <div className="p-4 bg-[#fafafa] border-b border-[#f0f0f0] flex justify-center items-center min-h-[160px]">
                    <img 
                      src="/assets/predictive-analytics.jpg" 
                      alt="Predictive Analytics Graph" 
                      className="w-full h-auto max-h-[130px] object-contain rounded-lg shadow-sm"
                    />
                  </div>
                  <div className="p-6 flex-grow">
                    <h3 className="text-lg font-bold text-secondary mb-2 text-none normal-case">Predictive Analytics</h3>
                    <p className="text-[#666] text-sm leading-relaxed">
                      Automate repetitive and time-consuming tasks with our AI-powered workflow automation
                    </p>
                  </div>
                </div>

                {/* Card 4: Smart Data Visualization */}
                <div className="bg-white border border-[#f0f0f0] rounded-[24px] overflow-hidden hover:shadow-lg transition-all flex flex-col">
                  <div className="p-4 bg-[#fafafa] border-b border-[#f0f0f0] flex justify-center items-center min-h-[160px]">
                    <img 
                      src="/assets/data-visualization.jpg" 
                      alt="Smart Data Visualization Progress" 
                      className="w-full h-auto max-h-[130px] object-contain rounded-lg shadow-sm"
                    />
                  </div>
                  <div className="p-6 flex-grow">
                    <h3 className="text-lg font-bold text-secondary mb-2 text-none normal-case">Smart Data Visualization</h3>
                    <p className="text-[#666] text-sm leading-relaxed">
                      Automate repetitive and time-consuming tasks with our AI-powered workflow automation
                    </p>
                  </div>
                </div>

                {/* Card 5: AI-Powered Decision-Making */}
                <div className="bg-white border border-[#f0f0f0] rounded-[24px] overflow-hidden hover:shadow-lg transition-all flex flex-col">
                  <div className="p-4 bg-[#fafafa] border-b border-[#f0f0f0] flex justify-center items-center min-h-[160px]">
                    <img 
                      src="/assets/ai-brain.jpg" 
                      alt="AI-Powered Decision-Making Brain" 
                      className="w-full h-auto max-h-[130px] object-contain rounded-lg shadow-sm"
                    />
                  </div>
                  <div className="p-6 flex-grow">
                    <h3 className="text-lg font-bold text-secondary mb-2 text-none normal-case">AI-Powered Decision-Making</h3>
                    <p className="text-[#666] text-sm leading-relaxed">
                      This feature processes vast amounts of data in real-time, identifying patterns, predicting
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Enjoy The Benefits Section */}
          <section className="py-20 bg-[#fafafa] border-t border-[#eee]">
            <div className="container">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Left */}
                <div className="lg:col-span-6">
                  <h2 className="text-3xl md:text-5xl font-black text-secondary leading-tight mb-8 uppercase">
                    Enjoy The Benefits Of Having Everything In A Single Platform
                  </h2>
                  <ul className="space-y-4 mb-8">
                    {[
                      "Solve common bottlenecks with built-in AI models",
                      "Integrate machine learning into existing tools",
                      "Plan campaigns and analyze results in one place",
                      "Gain real-time insights into customer behavior",
                      "Deliver personalized experiences to every user"
                    ].map((bullet, idx) => (
                      <li key={idx} className="flex items-center gap-3 font-semibold text-secondary">
                        <CheckCircle2 className="text-[#e91e8c]" size={20} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-4">
                    <NavLink to="/contact" className="btn btn-dark">Get Started Now <CtaArrow /></NavLink>
                    <NavLink to="/contact" className="btn btn-outline">Book A Call <CtaArrow /></NavLink>
                  </div>
                </div>

                {/* Right Image */}
                <div className="lg:col-span-6 flex justify-center">
                  <div className="relative w-full max-w-lg rounded-[24px] overflow-hidden shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80" 
                      alt="Developer Setup Dual Monitors" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Promptverse AI Offers Container */}
          <section className="py-20 bg-white">
            <div className="container">
              <div className="bg-gradient-to-br from-[#3b1c6e] via-[#6f1a4e] to-[#cc285b] rounded-[36px] p-8 md:p-14 text-white shadow-xl">
                <div className="mb-10">
                  <span className="text-[11px] font-bold text-white/75 uppercase tracking-[0.2em] block">Features</span>
                  <div className="w-8 h-[2px] bg-white/70 mt-2 mb-4"></div>
                  <h2 className="text-white text-3xl md:text-4xl font-black leading-tight uppercase">
                    Promptverse AI Offers To An Individual
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { 
                      title: "Write Mails & Replies", 
                      desc: "We are visionaries We will tell you everything you need about the market at the moment, but also predict how the cost of housing and your areawill change in a few years" 
                    },
                    { 
                      title: "Read Pdf & Attachments", 
                      desc: "We do not want to sell you any specific object, our goal is to find the \"right\" apartment for you and remain partners for many years." 
                    },
                    { 
                      title: "Lead Management", 
                      desc: "We provide a full range of services for the purchase and sale of real estate, from searching for an object and ending with paperwork." 
                    },
                    { 
                      title: "Write Codes & Programs", 
                      desc: "The housing should make your life better. Therefore, when selecting real estate, we carefully learn your request and find only what is ideal." 
                    },
                    { 
                      title: "Research", 
                      desc: "We have more than 130 objects in our portfolio, but for you we will make an individual selection with only suitable options." 
                    },
                    { 
                      title: "Automation", 
                      desc: "Whether it's the legal execution of a transaction, interior design or the technical details of a building, our brokers will tell you everything." 
                    },
                  ].map((feat, idx) => (
                    <div key={idx} className="p-8 bg-white rounded-[20px] shadow-sm flex flex-col">
                      <h3 className="text-lg font-black text-[#1a1035] mb-3 text-none normal-case">{feat.title}</h3>
                      <p className="text-[#555] text-xs leading-[1.6] flex-grow">{feat.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Run Compliant Payroll Section */}
          <section className="py-24 bg-white border-t border-[#eee]">
            <div className="container">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Left Cybernetic Image */}
                <div className="lg:col-span-6 flex justify-center">
                  <div className="relative w-full max-w-lg rounded-[24px] overflow-hidden shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=800&q=80" 
                      alt="Cybernetic Shaking Hands" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>

                {/* Right */}
                <div className="lg:col-span-6">
                  <h2 className="text-3xl md:text-5xl font-black text-secondary leading-tight mb-8 uppercase">
                    Run Compliant Payroll For Your Global Team In Minutes
                  </h2>
                  <ul className="space-y-4 mb-8">
                    {[
                      "Manage payroll, taxes, and compliance globally",
                      "Pay employees in local currencies easily",
                      "Automate tax filings and tax payments",
                      "Get 24/7 support from local experts",
                      "Integrate with popular accounting tools"
                    ].map((bullet, idx) => (
                      <li key={idx} className="flex items-center gap-3 font-semibold text-secondary">
                        <CheckCircle2 className="text-[#e91e8c]" size={20} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-4">
                    <NavLink to="/contact" className="btn btn-dark">Get Started Now <CtaArrow /></NavLink>
                    <NavLink to="/contact" className="btn btn-outline">Book A Call <CtaArrow /></NavLink>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* ========================================================================= */}
      {/* 4. POS / PROJECT MANAGEMENT PAGE */}
      {/* ========================================================================= */}
      {isPos && (
        <>
          <section className="py-20 bg-white">
            <div className="container">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6">
                  <span className="text-[11px] font-bold text-primary uppercase tracking-[0.2em] mb-4 block">POS</span>
                  <h2 className="text-3xl md:text-5xl font-black text-secondary leading-tight mb-6 uppercase">
                    Smart POS System for Modern Businesses
                  </h2>
                  <p className="text-[#555] text-base leading-relaxed mb-8 max-w-xl">
                    Fusion Sync where creativity meets precision in digital transformation. Since our founding, we've been committed to more than just building websites. We design and develop holistic digital experiences from sleek.
                  </p>
                  <div className="flex gap-4">
                    <NavLink to="/contact" className="btn btn-dark">Get Started Now <CtaArrow /></NavLink>
                    <NavLink to="/contact" className="btn btn-outline">Book A Call <CtaArrow /></NavLink>
                  </div>
                </div>
                <div className="lg:col-span-6 flex justify-center">
                  <div className="relative w-full max-w-lg">
                    <img 
                      src="/assets/tasky-dashboard.jpg" 
                      alt="POS Laptop Mockup" 
                      className="w-full h-auto rounded-[16px] shadow-2xl object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Purple Gradient Features Grid */}
          <section className="py-20 bg-gradient-to-br from-[#E8345A] via-[#5C2A78] to-[#1E1135] text-white">
            <div className="container">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16">
                <div className="max-w-2xl">
                  <span className="text-[11px] font-bold text-white/70 uppercase tracking-[0.2em] mb-3 block">Features</span>
                  <h2 className="text-white text-3xl md:text-5xl font-black leading-tight uppercase">
                    A Team Experts That Can Build A Website You're Proud Of
                  </h2>
                </div>
                <NavLink to="/contact" className="btn bg-white text-[#1a1035] hover:bg-white/90 shadow-lg shrink-0">
                  Get In Touch Today <CtaArrow />
                </NavLink>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feat, idx) => {
                  const Icon = feat.icon;
                  return (
                    <div key={idx} className="p-8 bg-white/5 border border-white/10 rounded-[24px] hover:bg-white/10 transition-all duration-300">
                      <div className="w-12 h-12 rounded-xl bg-[#E8345A] text-white flex items-center justify-center mb-6">
                        <Icon size={22} />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 text-none normal-case">{feat.title}</h3>
                      <p className="text-white/75 text-sm leading-relaxed">{feat.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </>
      )}

      {/* ========================================================================= */}
      {/* COMMON BOTTOM SECTIONS: 6 SERVICES CARDS & BEST PROJECTS */}
      {/* ========================================================================= */}
      {!isCrm && !isAi && (
        <section className="py-20 bg-white border-t border-[#eee]">
          <div className="container">
            <div className="mb-12">
              <span className="text-[11px] font-bold text-muted uppercase tracking-[0.2em] mb-2 block">Project Review</span>
              <h2 className="text-3xl md:text-5xl font-black text-secondary uppercase">
                Fast. Simple. Reliable.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gridCards.map((card, idx) => (
                <div key={idx} className="bg-white border border-[#eee] rounded-[32px] overflow-hidden group hover:shadow-xl hover:border-transparent transition-all duration-300 flex flex-col">
                  <div className="h-60 overflow-hidden relative">
                    <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-8 bg-gradient-to-b from-[#E8345A] to-[#3a1d5e] text-white flex-grow flex flex-col">
                    <div className="flex justify-between items-start gap-4 mb-4">
                      <h3 className="text-xl font-extrabold text-white text-none normal-case">{card.title}</h3>
                      <span className="text-white/60 text-xs font-semibold tracking-wider">Services</span>
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed mb-6 flex-grow">{card.desc}</p>
                    <div className="flex justify-between items-center mt-auto">
                      <button className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white hover:text-[#E8345A] transition-colors">
                        <CtaArrow />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Best Projects Showcase */}
      <section className="py-20 bg-[#fafafa] border-t border-[#eee]">
        <div className="container">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-secondary uppercase">
              Best Project <span className="text-primary">.</span>
            </h2>
            <p className="text-muted text-sm max-w-xs text-right">
              We list down some of the most successful projects built by our team recently.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestProjects.map((proj, idx) => (
              <div key={idx} className="bg-white border border-[#eee] rounded-[24px] overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="h-56 overflow-hidden bg-soft relative">
                  <img src={proj.img} alt={proj.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  {proj.subtitle && (
                    <span className="text-[10px] font-bold text-primary tracking-widest uppercase block mb-1">{proj.subtitle}</span>
                  )}
                  <h3 className="text-base font-bold text-secondary text-none normal-case m-0 truncate">{proj.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
