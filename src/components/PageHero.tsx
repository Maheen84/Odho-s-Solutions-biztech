import { NavLink } from "react-router-dom";

interface PageHeroProps {
  title: string;
  breadcrumbText: string;
  description?: string;
}

export default function PageHero({ title, breadcrumbText, description }: PageHeroProps) {
  return (
    <section className="page-hero circuit-bg">
      <div className="container text-center relative z-10">
        <div className="page-hero-title-row">
          <div className="page-hero-dash" />
          <h1 className="page-hero-title">{title}</h1>
          <div className="page-hero-dash" />
        </div>
        {description && (
          <p className="page-hero-desc">{description}</p>
        )}
        <nav className="page-hero-breadcrumb">
          <NavLink to="/" className="page-hero-bc-link">Home</NavLink>
          <span className="page-hero-bc-sep">›</span>
          <span className="page-hero-bc-current">{breadcrumbText}</span>
        </nav>
      </div>
    </section>
  );
}
