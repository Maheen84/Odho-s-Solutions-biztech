import React from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';
import CtaArrow from './CtaArrow';

const seoPricingData = [
  {
    id: 'starter',
    title: 'Starter Plan',
    price: '$320',
    suffix: '/month',
    features: [
      'Up to 15 keywords',
      'On-page SEO for 10 pages',
      '1 blog post/month',
      'GSC setup & configuration'
    ],
    bestFor: 'For small businesses and startups looking to establish initial search presence.',
    recommended: false,
    btnText: 'Choose Starter'
  },
  {
    id: 'growth',
    title: 'Growth Plan',
    price: '$650',
    suffix: '/month',
    features: [
      'Up to 30 keywords',
      'On-page SEO for 25 pages',
      '4 blog posts/month',
      'Full tech SEO audit & fixes'
    ],
    bestFor: 'For growing businesses aiming to accelerate organic traffic and domain authority.',
    recommended: true,
    btnText: 'Choose Growth'
  },
  {
    id: 'authority',
    title: 'Authority Plan',
    price: '$1,200',
    suffix: '/month',
    features: [
      'Unlimited keywords',
      'On-page SEO for all pages',
      '8 blog posts/month',
      'Dedicated SEO manager & support'
    ],
    bestFor: 'For high-growth brands demanding aggressive keyword expansion and authority.',
    recommended: false,
    btnText: 'Choose Authority'
  }
];

export default function SeoPricing() {
  return (
    <section className="py-20 bg-[#f9f9f9] border-t border-[#eee]">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="dash-label mb-6 mx-auto w-fit">Packages</div>
          <h2 className="text-4xl md:text-5xl font-black text-secondary uppercase">
            Select the right <span className="text-primary font-normal text-none lowercase">SEO plan for your stage</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-5xl mx-auto items-center">
          {seoPricingData.map((plan, idx) => {
            const isPopular = plan.recommended;

            return (
              <article
                key={plan.id}
                className={`p-10 border border-[#eee] transition-all duration-300 flex flex-col md:min-h-[500px] relative
                  ${isPopular ? "z-10 bg-[#1a1035] text-white scale-105 rounded-[32px] border-none shadow-2xl" : "bg-white text-secondary"}
                  ${idx === 0 ? "rounded-l-[32px]" : ""}
                  ${idx === 2 ? "rounded-r-[32px]" : ""}
                  ${!isPopular ? "hover:shadow-xl" : ""}
                `}
              >
                {isPopular && (
                  <em className="absolute right-8 top-8 text-[10px] font-bold uppercase tracking-widest text-primary not-italic">
                    MOST POPULAR
                  </em>
                )}

                <strong className={`text-4xl font-black mb-6 flex items-baseline gap-1 ${isPopular ? "text-white" : "text-secondary"}`}>
                  {plan.price} <small className={`text-sm font-medium ${isPopular ? "text-white/50" : "text-[#999]"}`}>{plan.suffix}</small>
                </strong>

                <h3 className={`text-xl font-black mb-4 ${isPopular ? "text-white" : "text-primary"}`}>
                  {plan.title}
                </h3>

                <p className={`text-sm mb-8 leading-relaxed ${isPopular ? "text-white/60" : "text-[#666]"}`}>
                  {plan.bestFor}
                </p>

                <div className="flex-grow flex flex-col mb-8">
                  <ul className="space-y-4 mb-10 flex-grow">
                    {plan.features.map((feat) => (
                      <li key={feat} className={`text-sm flex items-center gap-3 font-semibold ${isPopular ? "text-white/80" : "text-[#666]"}`}>
                        <Check size={14} className="text-primary shrink-0" /> <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="https://www.biztechra.site/pricing/seo-digital-growth"
                  className={`btn w-full ${isPopular ? "bg-white text-navy" : "btn-dark opacity-100"}`}
                >
                  {plan.btnText} <CtaArrow />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
