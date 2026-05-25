import { Search } from "lucide-react";
import { useState, useEffect } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import PageHero from "../components/PageHero";
import CtaBanner from "../components/CtaBanner";
import CtaArrow from "../components/CtaArrow";

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");

  useEffect(() => {
    if (categoryParam) {
      const idx = categories.indexOf(categoryParam);
      if (idx !== -1) setCurrentPage(idx + 1);
    }
  }, [categoryParam]);

  const [currentPage, setCurrentPage] = useState(1);
  const categories = ["All", "Popular", "UI/UX Design", "Graphic Design", "App Development", "Branding", "Typography", "Animation"];
  const currentCategory = categories[currentPage - 1];

  const handleNavigation = (page: number) => {
    setCurrentPage(page);
    setSearchParams({ category: categories[page - 1] });
  };

  const posts = [
    // Popular
    { title: "10 Best Design Resources for 2024", category: "Popular", date: "20 Jan 2024", author: "Olivia Rhye", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=700&q=85", tags: ["Design", "Research"], slug: "ux-review" },
    { title: "How to Build a Scalable API", category: "Popular", date: "18 Jan 2024", author: "Lana Steiner", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=700&q=85", tags: ["Software", "API"], slug: "api-stack" },
    { title: "PM Mental Models Explained", category: "Popular", date: "19 Jan 2024", author: "Phoenix Baker", img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=700&q=85", tags: ["Product", "Strategy"], slug: "pm-models" },
    // UI/UX Design
    { title: "UX Review Presentations", category: "UI/UX Design", date: "20 Jan 2024", author: "Olivia Rhye", img: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&w=700&q=85", tags: ["Design", "UX"], slug: "ux-review" },
    { title: "What is Wireframing?", category: "UI/UX Design", date: "15 Jan 2024", author: "Caroline Wu", img: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=700&q=85", tags: ["Design", "UX"], slug: "wireframing" },
    { title: "Color Theory for UI Designers", category: "UI/UX Design", date: "12 Jan 2024", author: "Olivia Rhye", img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=700&q=85", tags: ["Design", "Theory"], slug: "color-theory" },
    // Graphic Design
    { title: "The Art of Visual Hierarchy", category: "Graphic Design", date: "20 Jan 2024", author: "Olivia Rhye", img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=700&q=85", tags: ["Design", "Graphic"], slug: "visual-hierarchy" },
    { title: "Mastering Adobe Illustrator", category: "Graphic Design", date: "15 Jan 2024", author: "Caroline Wu", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=700&q=85", tags: ["Graphic", "Tools"], slug: "mastering-illustrator" },
    { title: "Grid Systems in Graphic Design", category: "Graphic Design", date: "12 Jan 2024", author: "Olivia Rhye", img: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=700&q=85", tags: ["Design", "Grid"], slug: "grid-systems" },
    // App Development
    { title: "Building Your API Stack", category: "App Development", date: "18 Jan 2024", author: "Lana Steiner", img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=700&q=85", tags: ["Software", "API"], slug: "api-stack" },
    { title: "Intro to GraphQL", category: "App Development", date: "14 Jan 2024", author: "Lana Steiner", img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=700&q=85", tags: ["Software", "GraphQL"], slug: "intro-graphql" },
    { title: "Docker for Beginners", category: "App Development", date: "11 Jan 2024", author: "Alex Whitten", img: "https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=700&q=85", tags: ["Software", "DevOps"], slug: "docker-beginners" },
    // Branding
    { title: "How to Build a Brand Identity", category: "Branding", date: "17 Jan 2024", author: "Alex Whitten", img: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&w=700&q=85", tags: ["Branding", "Identity"], slug: "brand-identity" },
    { title: "Logo Design Principles", category: "Branding", date: "13 Jan 2024", author: "Demi Wilkinson", img: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=700&q=85", tags: ["Branding", "Logo"], slug: "logo-principles" },
    { title: "Brand Voice & Tone Guide", category: "Branding", date: "9 Jan 2024", author: "Caroline Wu", img: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&w=700&q=85", tags: ["Branding", "Communication"], slug: "brand-voice" },
    // Typography
    { title: "Choosing the Right Typeface", category: "Typography", date: "17 Jan 2024", author: "Alex Whitten", img: "https://images.unsplash.com/photo-1503694978374-8a2fa686963a?auto=format&fit=crop&w=700&q=85", tags: ["Design", "Typography"], slug: "choosing-typeface" },
    { title: "Typography Rules for Designers", category: "Typography", date: "13 Jan 2024", author: "Demi Wilkinson", img: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=700&q=85", tags: ["Typography", "Rules"], slug: "typography-rules" },
    { title: "Google Fonts Pairing Guide", category: "Typography", date: "9 Jan 2024", author: "Caroline Wu", img: "https://images.unsplash.com/photo-1524143986875-3b098d78b363?auto=format&fit=crop&w=700&q=85", tags: ["Typography", "Fonts"], slug: "fonts-pairing" },
    // Animation
    { title: "Intro to CSS Animations", category: "Animation", date: "17 Jan 2024", author: "Alex Whitten", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=700&q=85", tags: ["Design", "Animation"], slug: "css-animation" },
    { title: "Motion Design Principles", category: "Animation", date: "13 Jan 2024", author: "Demi Wilkinson", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=700&q=85", tags: ["Animation", "Motion"], slug: "motion-principles" },
    { title: "Micro-interactions That Delight", category: "Animation", date: "9 Jan 2024", author: "Caroline Wu", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=700&q=85", tags: ["Animation", "UX"], slug: "micro-interactions" },
  ];


  const filteredPosts = currentCategory === "All"
    ? posts
    : posts.filter(post => post.category === currentCategory);

  const totalPages = categories.length;
  const paginatedPosts = filteredPosts;

  const handleNextPage = () => {
    if (currentPage < totalPages) handleNavigation(currentPage + 1);
  };
  
  const handlePrevPage = () => {
    if (currentPage > 1) handleNavigation(currentPage - 1);
  };

  return (
    <div className="overflow-hidden">
      <PageHero 
        title="Our Blogs" 
        breadcrumbText="Blog"
        description="Stay updated with the latest digital trends, research insights, and agency news from Odho's Solutions."
      />

      {/* Featured Post */}
      <section className="py-24 bg-soft">
        <div className="container">
          <article className="relative w-full rounded-[14px] overflow-hidden flex flex-col shadow-xl">
             {/* Top Image Area */}
             <div className="bg-[#f0f0f0] h-[350px] md:h-[450px] relative overflow-hidden flex items-center justify-center p-8">
                {/* Simulated Mockups */}
                <div className="relative w-full max-w-2xl">
                   <img 
                      src="https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&w=800&q=85" 
                      alt="Mockup 1" 
                      className="rounded-lg shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 w-full"
                   />
                   <img 
                      src="https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&w=400&q=85" 
                      alt="Mockup 2" 
                      className="absolute top-10 -right-10 w-2/3 rounded-lg shadow-xl -rotate-6 hover:rotate-0 transition-transform duration-500 z-10"
                   />
                </div>
             </div>

             {/* Bottom Text Content with Gradient */}
             <div className="p-10 md:p-14 bg-gradient-to-r from-[#C0392B] to-[#8E44AD] text-white">
                <div className="flex items-center gap-4 mb-6">
                   <span className="px-4 py-1 border border-white/40 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10">Popular</span>
                   <time className="text-white/60 text-xs font-bold uppercase">April 28, 2024</time>
                </div>
                <h2 className="text-white text-3xl md:text-5xl font-black mb-6 leading-tight max-w-4xl uppercase">
                  10 Best Design Resources for 2024: After trying 100+ Here are My Top Picks
                </h2>
                <p className="text-white/80 text-lg mb-8 max-w-3xl leading-relaxed">
                  In the ever-evolving world of design, where innovation meets aesthetics, finding the perfect resources to fuel your creative journey can be a rewarding yet daunting... <NavLink to="/blog/design-resources" className="text-white font-bold inline border-b-2 border-white/20 pb-1 hover:border-white transition-all ml-1 underline">Continue reading →</NavLink>
                </p>
             </div>
          </article>
        </div>
      </section>

      {/* Blog Listing */}
      <section className="py-24 bg-soft">
        <div className="container">
          <div className="flex flex-col flex-wrap gap-8 mb-12">
             <h2 className="text-4xl font-black text-[#111] uppercase">SELECT YOUR CATEGORY</h2>
             <div className="flex w-full justify-between items-center border-b border-line pb-4">
               {categories.map((cat) => (
                 <button
                   key={cat}
                   onClick={() => handleNavigation(categories.indexOf(cat) + 1)}
                   className={`relative text-sm font-medium transition-colors ${
                     categories[currentPage - 1] === cat ? "text-[#e91e8c]" : "text-muted hover:text-[#e91e8c]"
                   }`}
                 >
                   {cat}
                   {categories[currentPage - 1] === cat && (
                     <span className="absolute -bottom-[19px] left-0 right-0 h-[2px] bg-[#e91e8c]"></span>
                   )}
                 </button>
               ))}
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedPosts.map((post, idx) => (
              <article key={idx} className="bg-white rounded-3xl overflow-hidden border border-line shadow-sm hover:shadow-custom hover:-translate-y-2 transition-all duration-300 flex flex-col">
                 <div className="h-[220px] bg-muted/10 overflow-hidden relative">
                    <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
                 </div>
                 
                 <div className="p-6 flex flex-col flex-grow">
                    <span className="text-[#e91e8c] text-sm font-bold tracking-wide mb-3 block">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-black mb-3 flex items-start justify-between gap-4 group">
                      <NavLink to={`/blog/${post.slug}`} className="hover:text-[#e91e8c] transition-colors line-clamp-2 uppercase">{post.title}</NavLink>
                      <CtaArrow />
                    </h3>
                    <p className="text-muted text-sm leading-relaxed mb-6 line-clamp-2">
                      How do you create compelling presentations that wow your colleagues and impress your managers?
                    </p>
                    
                    <div className="flex items-center gap-3 mt-auto">
                       <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#e91e8c]/20 to-navy shrink-0" />
                       <div className="text-[13px]">
                          <span className="block font-bold text-secondary">{post.author}</span>
                          <span className="text-muted">{post.date}</span>
                       </div>
                    </div>
                 </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <nav className="flex items-center justify-center gap-2 mt-20 text-sm font-semibold text-muted">
               <button onClick={handlePrevPage} disabled={currentPage === 1} className="flex items-center gap-2 px-3 py-1 hover:text-[#e91e8c] transition-colors disabled:opacity-50 disabled:hover:text-muted">
                 <CtaArrow /> Previous
               </button>
               
               {Array.from({ length: totalPages }).map((_, i) => {
                 const pageNum = i + 1;
                 
                 return (
                   <button 
                     key={i} 
                     onClick={() => handleNavigation(pageNum)}
                     className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                       currentPage === pageNum ? "bg-[#e91e8c] text-white" : "hover:bg-gray-100 text-secondary"
                     }`}
                   >
                     {pageNum}
                   </button>
                 );
               })}
               
               <button onClick={handleNextPage} disabled={currentPage === totalPages} className="flex items-center gap-2 px-3 py-1 hover:text-[#e91e8c] transition-colors bg-transparent border-none disabled:opacity-50 disabled:hover:text-muted">
                 Next <CtaArrow />
               </button>
            </nav>
          )}
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
