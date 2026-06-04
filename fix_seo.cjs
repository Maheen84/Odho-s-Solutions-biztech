const fs = require('fs');

let sd = fs.readFileSync('src/pages/ServiceDetail.tsx', 'utf8');

// 1. Add Search, TrendingUp, FileText, Link2, Target, Eye to imports
sd = sd.replace(
  'Palette, Laptop, Code, CheckCircle2, Globe, Shield, RefreshCw, Layers, Check, Cpu',
  'Palette, Laptop, Code, CheckCircle2, Globe, Shield, RefreshCw, Layers, Check, Cpu, Search, TrendingUp, FileText, Link2, Target, Eye'
);

// 2. Add isSeo after isAi
sd = sd.replace(
  'const isAi = currentSlug === "ai-automation";',
  'const isAi = currentSlug === "ai-automation";\n  const isSeo = currentSlug === "seo-service";'
);

// 3. Update pageTitle
sd = sd.replace(
  `const pageTitle = isPos \n    ? "Project Management" \n    : (isWebDesign ? "Web Design & Development" : isCrm ? "CRM" : "AI Automation");`,
  `const pageTitle = isPos \n    ? "Project Management" \n    : (isWebDesign ? "Web Design & Development" : isCrm ? "CRM" : isSeo ? "SEO Service" : "AI Automation");`
);

// 4. Update pageBreadcrumb
sd = sd.replace(
  `: (isWebDesign ? "Web Design & Development" : isCrm ? "CRM" : "AI Automation");`,
  `: (isWebDesign ? "Web Design & Development" : isCrm ? "CRM" : isSeo ? "SEO Service" : "AI Automation");`
);

// 5. Update pageDescription - add isSeo case
sd = sd.replace(
  `: "Smart POS and project management solutions designed to streamline modern business operations.";`,
  `: isSeo\n    ? "Data-driven SEO strategies that boost your search rankings, increase organic traffic, and grow your online presence."\n    : "Smart POS and project management solutions designed to streamline modern business operations.";`
);

// 6. Exclude SEO from common bottom sections
sd = sd.replace(
  '{!isCrm && !isAi && (',
  '{!isCrm && !isAi && !isSeo && ('
);

// 7. Add SEO page section before the common bottom sections
const seoSection = `
      {/* ========================================================================= */}
      {/* 5. SEO SERVICE PAGE */}
      {/* ========================================================================= */}
      {isSeo && (
        <>
          {/* SEO Overview */}
          <section className="py-20 bg-white">
            <div className="container">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6">
                  <span className="text-[11px] font-bold text-primary uppercase tracking-[0.2em] mb-4 block">SEO Service</span>
                  <h2 className="text-3xl md:text-5xl font-black text-secondary leading-tight mb-6 uppercase">
                    Rank Higher,<br />Grow Faster
                  </h2>
                  <p className="text-[#555] text-base leading-relaxed mb-8 max-w-xl">
                    Search Engine Optimization is more than just keywords &mdash; it's about building authority, trust, and visibility. Our data-driven SEO strategies are designed to get your website to the top of search results and keep it there.
                  </p>
                  <div className="flex gap-4">
                    <NavLink to="/contact" className="btn btn-dark">Get Started Now <CtaArrow /></NavLink>
                    <NavLink to="/contact" className="btn btn-outline">Book A Call <CtaArrow /></NavLink>
                  </div>
                </div>
                <div className="lg:col-span-6 flex justify-center">
                  <div className="relative w-full max-w-lg rounded-[24px] overflow-hidden shadow-2xl bg-white p-2 border border-[#eee]">
                    <img 
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" 
                      alt="SEO Analytics Dashboard" 
                      className="w-full h-auto rounded-[16px] object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SEO Feature Cards */}
          <section className="py-20 bg-white border-t border-[#eee]">
            <div className="container">
              <div className="mb-14">
                <span className="text-[11px] font-bold text-muted uppercase tracking-[0.2em] mb-3 block">What We Offer</span>
                <h2 className="text-3xl md:text-5xl font-black text-secondary uppercase">
                  Comprehensive SEO <span className="text-primary font-normal text-none lowercase">Solutions</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Keyword Research & Strategy",
                    desc: "We identify high-impact keywords your audience is searching for and build a strategy to capture that traffic.",
                    icon: Search
                  },
                  {
                    title: "On-Page Optimization",
                    desc: "From meta tags to content structure, we optimize every element on your pages for maximum search visibility.",
                    icon: FileText
                  },
                  {
                    title: "Technical SEO",
                    desc: "Site speed, mobile responsiveness, crawlability — we fix the technical foundations that search engines care about.",
                    icon: Code
                  },
                  {
                    title: "Link Building",
                    desc: "We build high-quality backlinks from authoritative sources to boost your domain authority and rankings.",
                    icon: Link2
                  },
                  {
                    title: "Local SEO",
                    desc: "Dominate local search results and Google Maps to drive foot traffic and local leads to your business.",
                    icon: Target
                  },
                  {
                    title: "Analytics & Reporting",
                    desc: "Transparent reporting with actionable insights so you can see exactly how your SEO investment is performing.",
                    icon: TrendingUp
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

          {/* SEO Process / How It Works */}
          <section className="py-20 bg-gradient-to-br from-[#E8345A] via-[#5C2A78] to-[#1E1135] text-white">
            <div className="container">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16">
                <div className="max-w-2xl">
                  <span className="text-[11px] font-bold text-white/70 uppercase tracking-[0.2em] mb-3 block">Our Process</span>
                  <h2 className="text-white text-3xl md:text-5xl font-black leading-tight uppercase">
                    How We Deliver SEO Results
                  </h2>
                </div>
                <NavLink to="/contact" className="btn bg-white text-[#1a1035] hover:bg-white/90 shadow-lg shrink-0">
                  Start Your SEO Journey <CtaArrow />
                </NavLink>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Audit & Analysis", desc: "We start with a deep-dive audit of your current website, competitors, and industry to identify opportunities.", icon: Eye },
                  { title: "Strategy & Planning", desc: "We create a custom SEO roadmap tailored to your business goals, target audience, and competitive landscape.", icon: Target },
                  { title: "On-Page Optimization", desc: "We optimize your website's content, structure, and technical elements for search engine crawlers.", icon: FileText },
                  { title: "Content Creation", desc: "We produce high-quality, keyword-rich content that attracts, engages, and converts your target audience.", icon: Palette },
                  { title: "Link Building", desc: "We build authoritative backlinks through outreach, guest posting, and digital PR campaigns.", icon: Link2 },
                  { title: "Monitor & Refine", desc: "We continuously track performance, analyze data, and refine strategies for sustained growth.", icon: TrendingUp },
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

          {/* Why Choose Us for SEO */}
          <section className="py-20 bg-[#fafafa] border-t border-[#eee]">
            <div className="container">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6">
                  <h2 className="text-3xl md:text-5xl font-black text-secondary leading-tight mb-8 uppercase">
                    Why Businesses Trust Us With Their SEO
                  </h2>
                  <ul className="space-y-4 mb-8">
                    {[
                      "Proven track record of first-page rankings",
                      "Transparent reporting with real-time dashboards",
                      "White-hat strategies that build long-term authority",
                      "Dedicated SEO specialist assigned to your account",
                      "ROI-focused approach with measurable results"
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
                <div className="lg:col-span-6 flex justify-center">
                  <div className="relative w-full max-w-lg rounded-[24px] overflow-hidden shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
                      alt="SEO Growth Analytics" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

`;

// Insert the SEO section before the COMMON BOTTOM SECTIONS comment
sd = sd.replace(
  '      {/* ========================================================================= */}\n      {/* COMMON BOTTOM SECTIONS: 6 SERVICES CARDS & BEST PROJECTS */}',
  seoSection + '      {/* ========================================================================= */}\n      {/* COMMON BOTTOM SECTIONS: 6 SERVICES CARDS & BEST PROJECTS */}'
);

// If the above didn't match (CRLF), try with \r\n
if (!sd.includes('isSeo')) {
  sd = sd.replace(
    '      {/* ========================================================================= */}\r\n      {/* COMMON BOTTOM SECTIONS: 6 SERVICES CARDS & BEST PROJECTS */}',
    seoSection + '      {/* ========================================================================= */}\r\n      {/* COMMON BOTTOM SECTIONS: 6 SERVICES CARDS & BEST PROJECTS */}'
  );
}

fs.writeFileSync('src/pages/ServiceDetail.tsx', sd);
console.log('ServiceDetail.tsx updated successfully');
console.log('isSeo found:', sd.includes('isSeo'));
