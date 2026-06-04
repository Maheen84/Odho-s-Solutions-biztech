import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

const pricingData = [
  {
    id: 'seo',
    title: 'SEO AND DIGITAL GROWTH',
    tiers: {
      Starter: {
        price: '$320',
        suffix: '/month',
        features: ['Up to 15 keywords', 'On-page SEO for 10 pages', '1 blog post/month', 'GSC setup & configuration'],
        bestFor: 'Small businesses and startups that want to rank in Google without relying entirely on paid advertising'
      },
      Growth: {
        price: '$650',
        suffix: '/month',
        features: ['Up to 30 keywords', 'On-page SEO for 25 pages', '4 blog posts/month', 'Full tech SEO audit & fixes'],
        bestFor: 'Established SMEs ready to accelerate search visibility and gain authority'
      },
      Enterprise: {
        price: '$1,200',
        suffix: '/month',
        features: ['Unlimited keywords', 'On-page SEO for all pages', '8 blog posts/month', 'Dedicated SEO manager & support'],
        bestFor: 'High-growth brands demanding aggressive keyword expansion and constant market-share acquisition'
      }
    },
    btnText: 'VIEW SEO PRICING',
  },
  {
    id: 'advisory',
    title: 'STARTUP ADVISORY',
    tiers: {
      Starter: {
        price: '$400',
        suffix: 'one-time',
        features: ['1-on-1 business consultation', 'Basic business model review', 'Startup idea validation'],
        bestFor: 'Founders preparing for launch or looking to validate their business thesis'
      },
      Growth: {
        price: '$800',
        suffix: 'one-time',
        features: ['Business plan development', 'Competitor landscape overview', 'Go-to-market action roadmap'],
        bestFor: 'Businesses entering a new market or raising an initial funding round'
      },
      Enterprise: {
        price: '$1,200',
        suffix: '/month',
        features: ['Monthly key strategy sessions', 'SOP development & support', 'Ongoing growth execution plan'],
        bestFor: 'Teams that need a clear long-term strategic advisor to execute and scale'
      }
    },
    btnText: 'VIEW ADVISORY PRICING',
  },
  {
    id: 'hr',
    title: 'HR OUTSOURCING',
    tiers: {
      Starter: {
        price: '$300',
        suffix: '/month',
        features: ['Basic HR consultation', 'Employee records support', 'Simple policy templates'],
        bestFor: 'Startups and small businesses without an internal HR function'
      },
      Growth: {
        price: '$550',
        suffix: '/month',
        features: ['Talent acquisition support', 'Onboarding process setup', 'Payroll coordination support'],
        bestFor: 'Teams that need professional people operations without full-time overhead'
      },
      Enterprise: {
        price: '$800',
        suffix: '/month',
        features: ['Full HR operations support', 'Recruitment coordination', 'Payroll & compliance audit'],
        bestFor: 'SMEs with expanding payrolls and complex regulatory/compliance requirements'
      }
    },
    btnText: 'VIEW HR PRICING',
  },
  {
    id: 'social',
    title: 'SOCIAL MEDIA AND BRANDING',
    tiers: {
      Starter: {
        price: '$350',
        suffix: '/month',
        features: ['8 curated posts/month', 'Profile optimization', 'Monthly content calendar'],
        bestFor: 'Businesses that want a consistent, professional brand presence across platforms'
      },
      Growth: {
        price: '$600',
        suffix: '/month',
        features: ['12–16 posts/month', 'Reels & video content creation', 'Monthly performance reports'],
        bestFor: 'Brands looking to build engagement and scale organic audience growth'
      },
      Enterprise: {
        price: '$900',
        suffix: '/month',
        features: ['20+ custom posts/month', 'Advanced video editing', 'Complete platform management', 'Dedicated brand manager'],
        bestFor: 'Companies demanding complete multi-channel activity and premium media production'
      }
    },
    btnText: 'VIEW SOCIAL MEDIA PRICING',
  },
  {
    id: 'webdev',
    title: 'WEBSITE DEVELOPMENT',
    tiers: {
      Starter: {
        price: '$350',
        suffix: '/project',
        features: ['5-page mobile-responsive site', 'Basic SEO foundation setup', 'Fast loading speeds'],
        bestFor: 'Businesses launching a new, clean online presence'
      },
      Growth: {
        price: '$500',
        suffix: '/project',
        features: ['Up to 12 custom pages', 'CMS integration & templates', 'Advanced speed optimization', 'Interactive contact forms'],
        bestFor: 'Established teams replacing an outdated site with a professional hub'
      },
      Enterprise: {
        price: '$700',
        suffix: '/project',
        features: ['Custom e-commerce build', 'Advanced API integrations', '30-day post-launch support', 'Complete custom functionality'],
        bestFor: 'Brands looking to sell online or implement robust systems and integrations'
      }
    },
    btnText: 'VIEW DEVELOPMENT PRICING',
  },
  {
    id: 'webdesign',
    title: 'WEBSITE DESIGN',
    tiers: {
      Starter: {
        price: '$250',
        suffix: '/project',
        features: ['Landing page wireframes', 'UI/UX conversion layouts', 'Stunning typography plan'],
        bestFor: 'Teams looking for high-converting visual direction for single landing pages'
      },
      Growth: {
        price: '$450',
        suffix: '/project',
        features: ['UI/UX design for 6 key pages', 'Mobile-first brand layout', 'Interactive Figma review'],
        bestFor: 'Businesses requiring modern high-end web designs ready for development'
      },
      Enterprise: {
        price: '$600',
        suffix: '/project',
        features: ['Full website UI/UX system', 'Custom style & asset system', 'Complete design handoff', 'Interactive prototype'],
        bestFor: 'Companies seeking elite-level custom branding and visual storytelling'
      }
    },
    btnText: 'VIEW DESIGN PRICING',
  },
  {
    id: 'vocational',
    title: 'VOCATIONAL TRAINING',
    tiers: {
      Starter: {
        price: '$200',
        suffix: '/program',
        features: ['Self-paced learning modules', 'Step-by-step video guides', 'Practical homework exercises'],
        bestFor: 'Aspiring freelancers or self-directed learners building high-income skills'
      },
      Growth: {
        price: '$400',
        suffix: '/program',
        features: ['Full training modules', 'Completion certificates', 'Live instructor group sessions'],
        bestFor: 'Professionals seeking structured guidance and community collaboration'
      },
      Enterprise: {
        price: '$600',
        suffix: '/program',
        features: ['Full modules & resources', 'Live instructor access', '1-on-1 career coaching', 'Figma portfolio review'],
        bestFor: 'Individuals desiring customized mentoring to accelerate career entry'
      }
    },
    btnText: 'VIEW TRAINING PRICING',
  },
  {
    id: 'allinone',
    title: 'ALL-IN-ONE OUTSOURCING',
    recommended: true,
    tiers: {
      Starter: {
        price: '$800',
        suffix: '/month',
        features: ['Basic SEO management', 'Basic HR outsourcing', 'Monthly operations strategy check-in'],
        bestFor: 'Early-stage teams seeking essential support across operations and marketing'
      },
      Growth: {
        price: '$1,300',
        suffix: '/month',
        features: ['Full SEO management', 'Full HR team support', 'Social media branding', 'Monthly KPI & growth reports'],
        bestFor: 'Growing businesses ready to delegate multiple core channels with high cohesion'
      },
      Enterprise: {
        price: '$1,800',
        suffix: '/month',
        features: ['Unlimited priority support', 'Full SEO & operations management', 'Complete HR operations', 'Dedicated operations director'],
        bestFor: 'Scaleups seeking an all-in-one partner to act as their business engine'
      }
    },
    btnText: 'VIEW ALL-IN-ONE PRICING',
  }
];

type TierType = 'Starter' | 'Growth' | 'Enterprise';

export default function SeoPricing() {
  const [activeTiers, setActiveTiers] = useState<Record<string, TierType>>(
    pricingData.reduce((acc, plan) => ({ ...acc, [plan.id]: 'Growth' }), {})
  );

  const handleTierChange = (planId: string, tier: TierType) => {
    setActiveTiers(prev => ({ ...prev, [planId]: tier }));
  };

  return (
    <section className="py-20 bg-[#160d2b]">
      <div className="container">
        <div className="mb-14">
          <span className="text-[11px] font-bold text-[#E8345A] uppercase tracking-[0.2em] mb-2 block">Service Packages</span>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase">
            Select the right <span className="text-[#6d5dfc]">plan for your stage</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {pricingData.map((plan) => {
            const currentTierName = activeTiers[plan.id];
            const currentTierData = plan.tiers[currentTierName];
            const isAllInOne = plan.id === 'allinone';

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col p-8 rounded-[24px] bg-[#1a1035] border transition-all duration-300
                  ${isAllInOne ? 'border-[#E8345A] shadow-[0_0_30px_rgba(232,52,90,0.15)]' : 'border-[#3a1d5e] hover:border-[#6d5dfc] hover:shadow-lg'}
                `}
              >
                {isAllInOne && (
                  <div className="absolute -top-3 right-8 bg-[#6d5dfc] text-white text-[10px] font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                    Recommended
                  </div>
                )}

                <h3 className="text-xl font-black text-white mb-6 pr-4 leading-snug min-h-[60px]">
                  {plan.title}
                </h3>

                {/* Tabs */}
                <div className="flex items-center self-start bg-[#100920] rounded-full p-1 mb-8 w-fit border border-[#3a1d5e]/50 ">
                  {(['Starter', 'Growth', 'Enterprise'] as TierType[]).map((t) => (
                    <button
                      key={t}
                      onClick={() => handleTierChange(plan.id, t)}
                      className={`text-[10px] font-bold uppercase px-4 py-2 rounded-full transition-all duration-300
                        ${currentTierName === t
                          ? 'bg-[#E8345A] text-white shadow-md'
                          : 'text-white/50 hover:text-white'}
                      `}
                    >
                      {t}
                    </button>
                  ))}
                </div>

                <div className="mb-8">
                  <div className="flex items-end gap-1 mb-1">
                    <span className="text-4xl font-black text-white">{currentTierData.price}</span>
                  </div>
                  <span className="text-[10px] font-bold text-[#E8345A] uppercase tracking-widest">{currentTierData.suffix}</span>
                </div>

                <div className="flex-grow flex flex-col mb-8">
                  <span className="text-[10px] font-bold text-[#E8345A] uppercase tracking-widest mb-4 block">What is included</span>
                  <ul className="space-y-4 mb-8 flex-grow">
                    {currentTierData.features.map((feat, idx) => (
                      <li key={idx} className="text-white/70 text-sm flex items-start gap-3">
                        <CheckCircle2 size={16} className="text-[#E8345A] shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div>
                    <span className="text-[10px] font-bold text-[#6d5dfc] uppercase tracking-widest mb-3 block">Best for</span>
                    <div className="text-white/70 text-xs flex items-start gap-3 leading-relaxed">
                      <CheckCircle2 size={14} className="text-[#6d5dfc] shrink-0 mt-0.5" />
                      {currentTierData.bestFor}
                    </div>
                  </div>
                </div>

                <button
                  className={`w-full py-4 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border
                    ${isAllInOne
                      ? 'bg-gradient-to-r from-[#6d5dfc] to-[#E8345A] text-white border-transparent hover:shadow-[0_0_20px_rgba(232,52,90,0.4)]'
                      : 'bg-transparent text-white border-white/20 hover:bg-white hover:text-[#1a1035] hover:border-white'}
                  `}
                >
                  {plan.btnText}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
