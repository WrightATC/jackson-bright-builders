import {
  Zap,
  Search,
  Home,
  Sun,
  Lightbulb,
  BatteryCharging,
  Car,
  Building2,
  SunMedium,
  Lamp,
  CircleDot,
  ArrowUpCircle,
  Phone,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const residential = [
  { icon: Search, title: "Whole Home Electrical Inspections", desc: "Comprehensive safety inspections covering your entire electrical system — panels, wiring, outlets, and grounding. Protect your family and your investment.", featured: true },
  { icon: Zap, title: "Troubleshooting", desc: "Fast diagnosis and expert repairs for any electrical issue." },
  { icon: Home, title: "Full Rewires", desc: "Complete home rewiring for older homes or upgraded electrical needs." },
  { icon: Home, title: "New Construction", desc: "Full electrical installations for new residential builds." },
  { icon: Home, title: "Remodels", desc: "Upgrade and extend wiring during kitchen, bath, and whole-home renovations." },
  { icon: Sun, title: "Landscape Lighting", desc: "Beautiful outdoor illumination to enhance your property." },
  { icon: Lightbulb, title: "Custom Solutions", desc: "Tailored electrical solutions for your unique needs." },
  { icon: Lamp, title: "Exterior & Safety Lighting", desc: "Security lighting and curb appeal enhancements." },
  { icon: BatteryCharging, title: "Battery Backups", desc: "Keep your home powered during outages with battery backup systems." },
  { icon: Zap, title: "Backup Generators", desc: "Whole-home generator installation and maintenance." },
  { icon: Car, title: "EV Chargers", desc: "Home electric vehicle charging station installation." },
];

const commercial = [
  { icon: Zap, title: "Troubleshooting", desc: "Minimize downtime with fast, reliable commercial electrical repairs." },
  { icon: SunMedium, title: "Solar", desc: "Commercial solar panel installations to reduce energy costs." },
  { icon: Car, title: "EV Chargers", desc: "Workplace and fleet charging solutions." },
  { icon: CircleDot, title: "Sign Lighting", desc: "Illuminate your business signage for maximum visibility." },
  { icon: Lamp, title: "Exterior & Safety Lighting", desc: "Protect your commercial property with professional lighting." },
  { icon: Building2, title: "Pole Lights", desc: "Parking lot and site lighting installation and repair." },
  { icon: ArrowUpCircle, title: "Lighting Upgrades", desc: "Energy-efficient LED retrofits and commercial lighting upgrades." },
];

const ServiceCard = ({ icon: Icon, title, desc, featured }: { icon: any; title: string; desc: string; featured?: boolean }) => (
  <div className={`rounded-lg p-6 shadow-sm border transition-all group ${featured ? 'bg-secondary/10 border-secondary shadow-md ring-2 ring-secondary/30' : 'bg-card border-border hover:shadow-md hover:border-secondary/50'}`}>
    <div className={`w-12 h-12 rounded-md flex items-center justify-center mb-4 transition-colors ${featured ? 'bg-secondary/25' : 'bg-secondary/15 group-hover:bg-secondary/25'}`}>
      <Icon className="text-gold-glow" size={24} />
    </div>
    {featured && <span className="inline-block text-xs font-bold uppercase tracking-widest text-secondary mb-2">★ Featured Service</span>}
    <h3 className="font-serif font-semibold text-lg text-foreground">{title}</h3>
    <p className="text-muted-foreground text-sm mt-1">{desc}</p>
  </div>
);

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="py-20 bg-section-warm">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-gold-glow font-semibold tracking-widest uppercase text-sm mb-3">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground gold-underline-center">
              All Services
            </h2>
            <p className="mt-8 text-muted-foreground text-lg max-w-2xl mx-auto">
              From whole home inspections to commercial lighting upgrades — Capital City Maintenance has Jackson covered.
            </p>
          </div>

          <div className="mb-16">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-8 gold-underline">Residential</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {residential.map((s) => (
                <ServiceCard key={s.title} {...s} />
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-8 gold-underline">Commercial</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {commercial.map((s) => (
                <ServiceCard key={s.title} {...s} />
              ))}
            </div>
          </div>

          <div className="text-center">
            <a
              href="tel:601-715-3541"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-3.5 rounded-md font-bold text-lg hover:opacity-90 transition-opacity"
            >
              <Phone size={20} />
              Call (601) 715-3541
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
