import {
  Zap,
  Search,
  Home,
  Car,
  Building2,
  SunMedium,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const highlights = [
  { icon: Search, title: "Whole Home Electrical Inspections", desc: "Comprehensive safety inspections for your entire electrical system. Protect your family and your home.", featured: true },
  { icon: Zap, title: "Troubleshooting & Repairs", desc: "Fast diagnosis and expert repairs for residential and commercial." },
  { icon: Home, title: "New Construction & Remodels", desc: "Full electrical for new builds and renovation upgrades." },
  { icon: Car, title: "EV Chargers", desc: "Home and workplace charging station installation." },
  { icon: SunMedium, title: "Solar", desc: "Commercial solar installations." },
  { icon: Building2, title: "Commercial Services", desc: "Sign lighting, pole lights, and lighting upgrades." },
];

const ServiceCard = ({ icon: Icon, title, desc, featured }: { icon: any; title: string; desc: string; featured?: boolean }) => (
  <div className={`rounded-lg p-6 shadow-sm border transition-all group ${featured ? 'bg-secondary/10 border-secondary shadow-md ring-2 ring-secondary/30 sm:col-span-2' : 'bg-card border-border hover:shadow-md hover:border-secondary/50'}`}>
    <div className={`w-12 h-12 rounded-md flex items-center justify-center mb-4 transition-colors ${featured ? 'bg-secondary/25' : 'bg-secondary/15 group-hover:bg-secondary/25'}`}>
      <Icon className="text-gold-glow" size={24} />
    </div>
    {featured && <span className="inline-block text-xs font-bold uppercase tracking-widest text-secondary mb-2">★ Featured Service</span>}
    <h3 className="font-serif font-semibold text-lg text-foreground">{title}</h3>
    <p className="text-muted-foreground text-sm mt-1">{desc}</p>
  </div>
);

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-section-warm">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-gold-glow font-semibold tracking-widest uppercase text-sm mb-3">What We Do</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground gold-underline-center">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {highlights.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-gold-glow font-semibold text-lg hover:underline"
          >
            View All Services <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
