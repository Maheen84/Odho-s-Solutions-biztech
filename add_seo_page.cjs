const fs = require('fs');

let content = fs.readFileSync('src/pages/ServiceDetail.tsx', 'utf8');

// 1. Ensure SeoPricing is imported
if (!content.includes('import SeoPricing')) {
  content = content.replace(
    'import CtaArrow from "../components/CtaArrow";',
    'import CtaArrow from "../components/CtaArrow";\nimport SeoPricing from "../components/SeoPricing";'
  );
}

// 2. Ensure Plus, Minus are imported from lucide-react if not already
if (!content.includes('Plus')) {
  content = content.replace(
    'Eye \n} from "lucide-react";',
    'Eye, Plus, Minus \n} from "lucide-react";'
  );
}
// 2b. In case it's on a single line
if (!content.includes('Plus') && content.includes('Eye }')) {
    content = content.replace(
      'Eye } from "lucide-react";',
      'Eye, Plus, Minus } from "lucide-react";'
    );
}
if (!content.includes('Plus') && content.includes('Target, Eye')) {
    content = content.replace(
      'Target, Eye',
      'Target, Eye, Plus, Minus'
    );
}

// 3. Insert the new SEO content before the common bottom section
const targetMarker = '{!isCrm && !isAi && !isSeo && (';

if (!content.includes(targetMarker)) {
  console.error("Could not find the target marker: " + targetMarker);
  process.exit(1);
}

// If the SEO section is already present, remove it first
if (content.includes('{isSeo && (')) {
    const start = content.indexOf('{isSeo && (');
    const end = content.indexOf(targetMarker);
    content = content.substring(0, start) + content.substring(end);
}

const newSeoContent = `      {/* ========================================================================= */}
      {/* 5. SEO SERVICE PAGE */}
      {/* ========================================================================= */}
      {isSeo && (
        <>
          {/* Hero & Intro */}
          <section className="py-20 bg-white">
            <div className="container">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6">
                  <span className="text-[11px] font-bold text-primary uppercase tracking-[0.2em] mb-4 block">SEO Service</span>
                  <h2 className="text-3xl md:text-5xl lg:text-[54px] font-black text-secondary leading-[1.1] mb-6 uppercase">
                    DOMINATE ORGANIC SEARCH &<br />ACQUIRE CUSTOMERS ON AUTOPILOT.
                  </h2>
                  <p className="text-[#555] text-lg leading-relaxed mb-6 font-medium">
                    AI-powered, human-driven SEO systems that grow traffic, boost search authority, and drive real pipeline outcomes. Zero wasted ad spend.
                  </p>
                  <p className="text-[#666] text-base leading-relaxed mb-10 max-w-xl">
                    Most small business websites fail to capture organic leads because their sites aren't built to map target search intent. At BizTech, we implement intent-focused semantic clustering, hard-nosed technical SEO remediation, and proactive local growth campaigns that build compounding brand equity.
                  </p>
                  
                  <div className="bg-[#fafafa] border border-[#eee] rounded-2xl p-8 mb-8">
                    <h3 className="font-black text-xl text-secondary mb-6 uppercase">The BizTech Advantage Checklist</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <div className="text-3xl font-black text-primary mb-1">+210%</div>
                        <div className="text-sm font-bold text-secondary mb-1">Organic Leads</div>
                        <p className="text-xs text-muted font-medium">Proven client growth metrics within 6 months.</p>
                      </div>
                      <div>
                        <div className="text-3xl font-black text-primary mb-1">-42%</div>
                        <div className="text-sm font-bold text-secondary mb-1">Average CAC</div>
                        <p className="text-xs text-muted font-medium">Reduce reliance on expensive, high-CPC paid ads.</p>
                      </div>
                      <div>
                        <div className="text-xl font-black text-secondary mb-1 uppercase">Technical Debt Audited</div>
                        <p className="text-xs text-muted font-medium">100% crawl, rendering, speed, and indexing resolution.</p>
                      </div>
                      <div>
                        <div className="text-xl font-black text-secondary mb-1 uppercase">Intent Keyword Silos</div>
                        <p className="text-xs text-muted font-medium">Target transactional queries ready to buy.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 lg:col-start-8">
                  {/* SEO Audit Form */}
                  <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-[#eee]">
                    <h3 className="text-2xl font-black text-secondary uppercase mb-2">Get a Free SEO Audit</h3>
                    <p className="text-muted text-sm mb-8">We'll analyze your site & reply in 1 business day.</p>
                    
                    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                      <div>
                        <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">Full Name *</label>
                        <input type="text" placeholder="John Doe" className="w-full bg-[#fafafa] border border-[#eee] rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-colors" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">Work Email *</label>
                        <input type="email" placeholder="john@company.com" className="w-full bg-[#fafafa] border border-[#eee] rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-colors" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">Phone</label>
                          <input type="tel" placeholder="+1 XXX XXX XXXX" className="w-full bg-[#fafafa] border border-[#eee] rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-colors" />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">Company</label>
                          <input type="text" placeholder="Company name" className="w-full bg-[#fafafa] border border-[#eee] rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-colors" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">Tell Us About Your Site / Goals *</label>
                        <textarea placeholder="What is your website domain and target keyword?" rows={3} className="w-full bg-[#fafafa] border border-[#eee] rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
                      </div>
                      <div className="flex items-start gap-3 py-2">
                        <input type="checkbox" id="privacy" className="mt-1 accent-primary" />
                        <label htmlFor="privacy" className="text-xs text-muted leading-relaxed cursor-pointer">I agree to the Privacy Policy.</label>
                      </div>
                      <button type="submit" className="btn btn-primary w-full justify-center">Claim Free SEO Audit</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* WHY MOST SMALL BUSINESS SEO FAILS */}
          <section className="py-24 bg-[#fafafa] border-t border-[#eee]">
            <div className="container">
              <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">
                <div className="max-w-2xl">
                  <span className="text-[11px] font-bold text-primary uppercase tracking-[0.2em] mb-4 block">WHY MOST SMALL BUSINESS SEO FAILS</span>
                  <h2 className="text-3xl md:text-5xl font-black text-secondary leading-tight uppercase">
                    THE REASON YOUR WEBSITE IS<br /><span className="text-primary">NOT RANKING</span>
                  </h2>
                </div>
                <div className="max-w-xl lg:pt-4">
                  <p className="text-[#666] text-base leading-relaxed mb-4">
                    Most small business websites fail at SEO for predictable reasons. The site was built without keyword research informing the page structure. The content is thin, generic, or written primarily for aesthetics rather than search intent. The technical foundation has crawl errors, slow load times, or missing metadata. There is no internal linking strategy. There are no authoritative external links pointing to the site.
                  </p>
                  <p className="text-[#666] text-base leading-relaxed font-medium mb-6">
                    Fix any one of these in isolation and you will see minimal improvement. Fix all of them together, consistently, over time, and your search visibility changes in a meaningful way.
                  </p>
                  <p className="text-secondary text-base leading-relaxed font-bold uppercase tracking-wide">
                    That is what a proper SEO strategy looks like. Not a tool. Not a single tactic. A coordinated, documented process applied consistently over months. WE BUILD AND MANAGE THAT PROCESS FOR YOU.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: "Thin Content", desc: "Generic pages that don't satisfy search intent." },
                  { title: "Technical Errors", desc: "Slow loads, crawl errors, and broken metadata." },
                  { title: "No Authority", desc: "Zero external links or domain authority building." },
                  { title: "No Structure", desc: "Siloed content without internal linking strategy." }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-8 rounded-[24px] border border-[#eee] hover:shadow-lg transition-all">
                    <h3 className="text-lg font-black text-secondary uppercase mb-3">{item.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* WHAT WE COVER */}
          <section className="py-24 bg-white">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <span className="text-[11px] font-bold text-muted uppercase tracking-[0.2em] mb-4 block">WHAT WE COVER</span>
                <h2 className="text-3xl md:text-5xl font-black text-secondary uppercase leading-tight">
                  AI-POWERED SEO.<br /><span className="text-primary">HUMAN-REVIEWED STRATEGY.</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Keyword Research and Strategy",
                    desc: "We identify the exact search terms your target customers use when looking for businesses like yours. This includes primary keywords, long-tail variations, question-based queries, and commercial intent terms that signal buying readiness. Keyword strategy is the foundation of everything else. If you are targeting the wrong terms, no amount of content or optimization will produce results.",
                    icon: Target
                  },
                  {
                    title: "On-Page SEO Optimization",
                    desc: "We audit and optimize every page on your website. This includes title tags, meta descriptions, heading structure, keyword placement, internal linking, image optimization, and content formatting. On-page optimization ensures that Google can understand what each page is about and match it to the right searches.",
                    icon: FileText
                  },
                  {
                    title: "Technical SEO",
                    desc: "We conduct a full technical audit of your website covering crawlability, indexation, page speed, mobile usability, structured data, XML sitemap, robots.txt configuration, and Core Web Vitals. Fixing technical issues removes obstacles that are suppressing your rankings.",
                    icon: Code
                  },
                  {
                    title: "Content Strategy and Planning",
                    desc: "We build a content plan based on your keyword research that identifies the topics, formats, and publishing cadence needed to build your topical authority over time. Good content strategy is not about publishing frequently. It is about publishing content that answers real questions your audience is searching for.",
                    icon: Palette
                  },
                  {
                    title: "Authority Building",
                    desc: "We develop an off-page strategy to earn high-quality backlinks and build your domain’s authority over time. This is done through legitimate outreach, content partnerships, digital PR, and business citation building. Authority signals remain one of the strongest ranking factors in Google’s algorithm.",
                    icon: Link2
                  },
                  {
                    title: "Local SEO",
                    desc: "For businesses that serve specific geographic markets, we optimize your local search presence including your Google Business Profile, local citations, and location-based keyword targeting. Local SEO gets your business in front of customers searching in your area.",
                    icon: Search
                  },
                  {
                    title: "Monthly SEO Reporting",
                    desc: "You receive a monthly report covering keyword ranking changes, organic traffic trends, technical health updates, and a summary of work completed. You always know exactly what changed, what improved, and what is planned for the coming month.",
                    icon: TrendingUp
                  }
                ].map((feat, idx) => {
                  const Icon = feat.icon;
                  return (
                    <div key={idx} className="p-10 bg-[#fafafa] border border-[#eee] rounded-[32px] hover:border-primary/30 hover:shadow-xl transition-all duration-300 group">
                      <div className="w-14 h-14 rounded-2xl bg-white border border-[#eee] text-primary flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                        <Icon size={24} />
                      </div>
                      <h3 className="text-xl font-black text-secondary mb-4 uppercase">{feat.title}</h3>
                      <p className="text-muted text-sm leading-relaxed">{feat.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* WHAT WE DO NOT DO */}
          <section className="py-24 bg-gradient-to-br from-[#E8345A] via-[#5C2A78] to-[#1E1135] text-white">
            <div className="container">
              <div className="max-w-4xl mx-auto text-center">
                <span className="text-[11px] font-bold text-white/70 uppercase tracking-[0.2em] mb-4 block">WHAT WE DO NOT DO</span>
                <h2 className="text-3xl md:text-5xl font-black leading-tight uppercase mb-12">
                  HONEST ABOUT WHAT<br />SEO IS AND IS NOT
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-left">
                  <div className="bg-white/5 border border-white/10 rounded-[24px] p-8">
                    <CheckCircle2 size={24} className="text-[#E8345A] mb-4" />
                    <p className="text-white/80 text-sm leading-relaxed">We do not promise first-page rankings in 30 days. Anyone who does is either lying or planning to use tactics that will eventually get your site penalized.</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-[24px] p-8">
                    <CheckCircle2 size={24} className="text-[#E8345A] mb-4" />
                    <p className="text-white/80 text-sm leading-relaxed">We do not use link schemes, keyword stuffing, auto-generated content, or any other approach that violates Google’s quality guidelines.</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-[24px] p-8">
                    <CheckCircle2 size={24} className="text-[#E8345A] mb-4" />
                    <p className="text-white/80 text-sm leading-relaxed">We do not pad your reports with vanity metrics that look impressive but do not connect to real business outcomes.</p>
                  </div>
                </div>

                <div className="bg-white/10 border-l-4 border-[#E8345A] p-8 md:p-10 rounded-r-[24px] text-left max-w-3xl mx-auto">
                  <p className="text-xl md:text-2xl font-bold italic text-white leading-relaxed">
                    "We build sustainable search visibility through documented, legitimate strategy applied consistently over time. The results are real and they last because they were earned the right way."
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* THE SEO ENGAGEMENT PROCESS */}
          <section className="py-24 bg-white border-b border-[#eee]">
            <div className="container">
              <div className="text-center mb-16">
                <span className="text-[11px] font-bold text-muted uppercase tracking-[0.2em] mb-4 block">HOW IT WORKS</span>
                <h2 className="text-3xl md:text-5xl font-black text-secondary uppercase">
                  THE SEO ENGAGEMENT PROCESS
                </h2>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="space-y-6">
                  {[
                    { step: "1", title: "Step 1: Free Audit", desc: "We begin with a free SEO audit that identifies the most important technical issues, content gaps, and missed keyword opportunities on your current website. This gives you an honest picture of where you stand before any money changes hands." },
                    { step: "2", title: "Step 2: Strategy Development", desc: "Based on the audit, we develop a prioritized SEO strategy that covers keyword targets, on-page fixes, technical priorities, and content recommendations. The strategy is documented and explained in plain language." },
                    { step: "3", title: "Step 3: Implementation", desc: "We execute the strategy. On-page optimization, technical fixes, content creation, and authority building activities happen on a defined monthly schedule. You receive progress updates throughout." },
                    { step: "4", title: "Step 4: Monthly Reporting", desc: "Every month, you receive a report that shows keyword ranking movement, organic traffic changes, and a summary of completed work. We also outline priorities for the following month." },
                    { step: "5", title: "Step 5: Ongoing Refinement", desc: "SEO is not a set-it-and-forget-it discipline. We continuously refine the strategy based on performance data, algorithm updates, and changes in your competitive landscape." }
                  ].map((process, idx) => (
                    <div key={idx} className="flex flex-col md:flex-row gap-6 md:gap-10 p-8 rounded-[24px] border border-[#eee] bg-[#fafafa] hover:shadow-md transition-all">
                      <div className="w-16 h-16 shrink-0 bg-primary text-white rounded-2xl flex items-center justify-center text-2xl font-black">
                        {process.step}
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-secondary uppercase mb-3">{process.title}</h3>
                        <p className="text-muted leading-relaxed text-sm">{process.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* THE TIMELINE */}
          <section className="py-24 bg-[#fafafa]">
            <div className="container">
              <div className="text-center mb-16">
                <span className="text-[11px] font-bold text-primary uppercase tracking-[0.2em] mb-4 block">THE TIMELINE</span>
                <h2 className="text-3xl md:text-5xl font-black text-secondary uppercase">
                  WHEN WILL YOU SEE RESULTS?
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { month: "Month 1 to 2", title: "Foundation", desc: "Technical fixes, on-page optimization, and content restructuring. Rankings for lower-competition terms may begin to move." },
                  { month: "Month 3 to 4", title: "Traction", desc: "Content strategy in motion. Primary keyword rankings begin improving. Organic traffic starts showing measurable growth." },
                  { month: "Month 5 to 6", title: "Momentum", desc: "Authority building producing results. Stronger keywords gaining movement. Organic traffic and lead quality improving meaningfully." },
                  { month: "Month 6 and beyond", title: "Compounding Results", desc: "Each month of good SEO builds on the last. Businesses that invest in SEO for 12 months or more see substantially better returns than those who stop at three." }
                ].map((time, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-[24px] border border-[#eee] relative overflow-hidden group hover:border-primary/30 hover:shadow-lg transition-all">
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#eee] group-hover:bg-primary transition-colors"></div>
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest mb-2 block">{time.month}</span>
                    <h3 className="text-xl font-black text-secondary uppercase mb-4">{time.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{time.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* PRICING */}
          <SeoPricing />

          {/* FAQ SECTION */}
          <section className="py-24 bg-white border-t border-[#eee]">
            <div className="container max-w-4xl">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-black text-secondary uppercase">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-4">
                {[
                  "What does an SEO agency actually do for a small business?",
                  "How long does SEO take to show results?",
                  "What is the difference between on-page SEO and technical SEO?",
                  "Do I need to create content for SEO?",
                  "What is AI-powered SEO and how does it work?",
                  "Can you help a website that was penalized by Google?",
                  "What do you include in monthly SEO reports?",
                  "How much does SEO cost for a small business?"
                ].map((faq, idx) => (
                  <div key={idx} className="border border-[#eee] rounded-[16px] overflow-hidden bg-[#fafafa] group cursor-pointer hover:border-primary/30 transition-all">
                    <div className="p-6 flex justify-between items-center">
                      <h3 className="font-bold text-secondary text-base pr-8">{faq}</h3>
                      <div className="w-8 h-8 rounded-full bg-white border border-[#eee] flex items-center justify-center shrink-0 group-hover:text-primary transition-colors">
                        <Plus size={16} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

`;

content = content.replace(targetMarker, newSeoContent + targetMarker);

fs.writeFileSync('src/pages/ServiceDetail.tsx', content);
console.log('Success');
