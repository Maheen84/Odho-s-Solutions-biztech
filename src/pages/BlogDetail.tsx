import { Search, ArrowUpRight, Copy, Facebook, Instagram, Twitter, Linkedin, Globe } from "lucide-react";
import { NavLink, useParams } from "react-router-dom";
import PageHero from "../components/PageHero";
import CtaBanner from "../components/CtaBanner";

export default function BlogDetail() {
  const { slug } = useParams();

  return (
    <div className="overflow-hidden bg-[#fafafa]">
      <PageHero 
        title="Blog Details" 
        breadcrumbText="Blog"
        description="Detailed analysis, updates, and deep dives into technology, software, and design."
      />

      {/* Article Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Content */}
            <div className="lg:col-span-8">
              <article className="blog-article">
                <div className="text-center mb-10">
                  <time className="block text-[#e91e8c] font-extrabold text-xs uppercase tracking-[0.2em] mb-4">
                    Published 20 Jan 2024
                  </time>
                  <h1 className="text-3xl md:text-5xl font-black text-secondary leading-tight mb-6 uppercase">
                    UX review presentations
                  </h1>
                  <p className="text-[#555] text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                    How do you create compelling presentations that wow your colleagues and impress your managers?
                  </p>
                  
                  <div className="flex justify-center gap-3 flex-wrap">
                    {["Design", "Research", "Presentation"].map(tag => (
                      <span 
                        key={tag} 
                        className="px-4 py-1.5 border border-[#e0e0e0] rounded-full text-xs font-semibold text-secondary hover:bg-secondary hover:text-white transition-all cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Main image */}
                <div className="rounded-[24px] overflow-hidden mb-12 shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80" 
                    alt="UX Review" 
                    className="w-full h-auto max-h-[460px] object-cover"
                  />
                </div>

                <div className="prose prose-lg max-w-none text-[#555] leading-[1.8] space-y-8 text-[15px]">
                  <p>Creating a UX review presentation is one of the most important skills a designer can develop. Whether you're presenting to stakeholders, clients, or your own team, the way you communicate your findings can be just as impactful as the research itself. A well-structured presentation builds trust, drives decisions, and demonstrates the value of design thinking.</p>
                  
                  <h3 id="introduction" className="text-secondary text-2xl font-black mb-4 mt-10 uppercase">Introduction</h3>
                  <p>A UX review is a systematic evaluation of a product's user experience against established usability principles. The goal is to identify friction points, accessibility issues, and opportunities for improvement before they reach end users. When presenting these findings, clarity and storytelling are everything — you're not just sharing data, you're making a case for change.</p>
                  <p>Start by setting context: who are the users, what were the goals of the review, and what methodology did you use? This gives your audience a foundation before you dive into findings. Always lead with the most critical issues and support each finding with evidence — screenshots, user quotes, or heatmaps work best.</p>
                  
                  <h3 id="software" className="text-secondary text-2xl font-black mb-4 mt-10 uppercase">Software and tools</h3>
                  <p>The right tools can make or break your presentation. Here are the most commonly used tools for UX review presentations:</p>
                  
                  <ul className="list-disc pl-6 space-y-2">
                     <li><strong>Figma</strong> — for annotated design screenshots and interactive prototypes embedded in slides</li>
                     <li><strong>Notion or Confluence</strong> — for written research reports with linked evidence</li>
                     <li><strong>Google Slides or PowerPoint</strong> — for executive-level stakeholder presentations</li>
                     <li><strong>Loom</strong> — for recording walkthrough videos of the UX issues found</li>
                  </ul>

                  <div className="rounded-[24px] overflow-hidden my-12 shadow-sm">
                    <img 
                      src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80" 
                      alt="Team Collaboration" 
                      className="w-full h-auto max-h-[360px] object-cover"
                    />
                  </div>

                  <h3 id="resources" className="text-secondary text-2xl font-black mb-4 mt-10 uppercase">Other resources</h3>
                  <p>For deeper learning on UX presentations, explore resources from Nielsen Norman Group, Smashing Magazine, and the Interaction Design Foundation. These platforms offer templates, case studies, and video courses specifically on communicating UX research to non-designer audiences.</p>
                  
                  <blockquote className="border-l-4 border-[#e91e8c] pl-8 py-3 my-10 italic text-lg text-secondary bg-[#fafafa] rounded-r-xl">
                    "Your style is not a dressing you put on files, it is how they look. It is how you look at the screen when you're working."
                    <footer className="text-xs text-muted mt-3 font-normal not-italic">— Steve Jobs</footer>
                  </blockquote>

                  <h3 id="conclusion" className="text-secondary text-2xl font-black mb-4 mt-10 uppercase">Conclusion</h3>
                  <p>A strong UX review presentation goes beyond listing problems — it tells a story, proposes solutions, and inspires action. Keep your slides clean, your findings prioritized, and your recommendations specific. When you combine solid research with clear communication, you become not just a designer, but a strategic partner in your organization.</p>
                  <p>Remember: your audience doesn't need to understand every detail of your process. They need to understand the impact. Lead with that, and your presentations will always land.</p>
                </div>

                {/* Share Footer */}
                <div className="pt-8 mt-16 border-t border-[#eee] flex flex-wrap justify-between items-center gap-8">
                  <div className="flex items-center gap-4">
                     <img 
                       src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80" 
                       alt="Olivia Rhye" 
                       className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                     />
                     <div>
                       <strong className="block text-secondary text-base">Olivia Rhye</strong>
                       <span className="text-muted text-xs">Product Designer, Odho's</span>
                     </div>
                  </div>
                  <div className="flex items-center gap-3">
                     <button 
                       onClick={() => {
                         navigator.clipboard.writeText(window.location.href);
                         alert("Link copied!");
                       }} 
                       className="flex items-center gap-2 border border-[#eee] px-4 py-2 rounded-full text-xs font-semibold hover:border-primary hover:text-primary transition-all bg-white"
                     >
                       Copy link <Copy size={13} />
                     </button>
                     <a href="#" className="w-9 h-9 border border-[#eee] bg-white rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all"><Twitter size={14} /></a>
                     <a href="#" className="w-9 h-9 border border-[#eee] bg-white rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all"><Facebook size={14} /></a>
                     <a href="#" className="w-9 h-9 border border-[#eee] bg-white rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all"><Linkedin size={14} /></a>
                  </div>
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">
               {/* Search */}
               <div className="p-8 bg-[#1a1035] border border-transparent rounded-[24px] shadow-lg text-white">
                 <h3 className="text-base font-bold mb-6 text-white uppercase tracking-wider">Search Blog</h3>
                 <div className="relative">
                   <input 
                     type="text" 
                     placeholder="Search..." 
                     className="w-full pl-12 pr-6 py-4 bg-white/5 rounded-[16px] border border-white/10 focus:border-primary outline-none transition-all text-sm text-white placeholder-white/40"
                   />
                   <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                 </div>
               </div>

               {/* Table of Content */}
               <div className="p-8 bg-[#1a1035] border border-transparent rounded-[24px] shadow-lg text-white">
                 <h3 className="text-base font-bold mb-6 text-white uppercase tracking-wider">Table Of Content</h3>
                 <nav className="flex flex-col gap-1">
                    <a href="#introduction" onClick={(e) => { e.preventDefault(); document.getElementById('introduction')?.scrollIntoView({behavior: 'smooth'}) }} className="block py-2.5 px-3 rounded-[12px] text-sm font-semibold text-white/70 hover:text-white hover:bg-white/5 transition-colors">Introduction</a>
                    <a href="#software" onClick={(e) => { e.preventDefault(); document.getElementById('software')?.scrollIntoView({behavior: 'smooth'}) }} className="block py-2.5 px-3 rounded-[12px] text-sm font-semibold text-white/70 hover:text-white hover:bg-white/5 transition-colors">Software and Tools</a>
                    <a href="#resources" onClick={(e) => { e.preventDefault(); document.getElementById('resources')?.scrollIntoView({behavior: 'smooth'}) }} className="block py-2.5 px-3 rounded-[12px] text-sm font-semibold text-white/70 hover:text-white hover:bg-white/5 transition-colors">Other Resources</a>
                    <a href="#conclusion" onClick={(e) => { e.preventDefault(); document.getElementById('conclusion')?.scrollIntoView({behavior: 'smooth'}) }} className="block py-2.5 px-3 rounded-[12px] text-sm font-semibold text-white/70 hover:text-white hover:bg-white/5 transition-colors">Conclusion</a>
                 </nav>
               </div>

               {/* Categories */}
               <div className="p-8 bg-[#1a1035] border border-transparent rounded-[24px] shadow-lg text-white">
                 <h3 className="text-base font-bold mb-6 text-white uppercase tracking-wider">Categories</h3>
                 <div className="space-y-1">
                   {["UI/UX Design", "Research", "Presentation", "Product Design", "Tools & Software", "Case Studies"].map((cat, idx) => (
                     <NavLink 
                       key={idx} 
                       to={`/blog?category=${cat}`} 
                       className="block p-3 rounded-[12px] text-white/70 hover:text-white hover:bg-white/5 transition-all font-semibold text-sm"
                     >
                       {cat}
                     </NavLink>
                   ))}
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
