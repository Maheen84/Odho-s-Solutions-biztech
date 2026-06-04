const fs = require('fs');

let content = fs.readFileSync('src/pages/ServiceDetail.tsx', 'utf8');

const marker = '{!isCrm && !isAi && !isSeo && (';
const startIndex = content.indexOf(marker);

if (startIndex === -1) {
  console.error("Could not find start marker");
  process.exit(1);
}

const newBottom = `      {!isCrm && !isAi && !isSeo && (
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

      {!isSeo && (
        <>
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
        </>
      )}

      <CtaBanner />
    </div>
  );
}
`;

content = content.substring(0, startIndex) + newBottom;

fs.writeFileSync('src/pages/ServiceDetail.tsx', content);
console.log('Successfully fixed the bottom of ServiceDetail.tsx');
