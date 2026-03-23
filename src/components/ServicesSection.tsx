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
} from "lucide-react";

const residential = [
  { icon: Search, title: "Inspections", desc: "Thorough electrical safety inspections" },
  { icon: Zap, title: "Troubleshooting", desc: "Fast diagnosis and expert repairs" },
  { icon: Home, title: "Full Rewires", desc: "Complete home rewiring services" },
  { icon: Home, title: "New Construction", desc: "Electrical for new builds" },
  { icon: Home, title: "Remodels", desc: "Upgrade wiring during renovations" },
  { icon: Sun, title: "Landscape Lighting", desc: "Beautiful outdoor illumination" },
  { icon: Lightbulb, title: "Custom Solutions", desc: "Tailored to your unique needs" },
  { icon: Lamp, title: "Exterior & Safety Lighting", desc: "Security and curb appeal" },
  { icon: BatteryCharging, title: "Battery Backups", desc: "Power when you need it most" },
  { icon: Zap, title: "Backup Generators", desc: "Whole-home generator installs" },
  { icon: Car, title: "EV Chargers", desc: "Home EV charging stations" },
];

const commercial = [
  { icon: Zap, title: "Troubleshooting", desc: "Minimize downtime with fast fixes" },
  { icon: SunMedium, title: "Solar", desc: "Commercial solar installations" },
  { icon: Car, title: "EV Chargers", desc: "Workplace charging solutions" },
  { icon: CircleDot, title: "Sign Lighting", desc: "Illuminate your business signage" },
  { icon: Lamp, title: "Exterior & Safety Lighting", desc: "Protect your property" },
  { icon: Building2, title: "Pole Lights", desc: "Parking lot and site lighting" },
  { icon: ArrowUpCircle, title: "Lighting Upgrades", desc: "Energy-efficient LED retrofits" },
];

const ServiceCard = ({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) => (
  <div className="bg-card rounded-lg p-6 shadow-sm border border-border hover:shadow-md hover:border-secondary/50 transition-all group">
    <div className="w-12 h-12 rounded-md bg-secondary/15 flex items-center justify-center mb-4 group-hover:bg-secondary/25 transition-colors">
      <Icon className="text-gold-glow" size={24} />
    </div>
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

        {/* Residential */}
        <div className="mb-16">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-8 gold-underline">Residential</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {residential.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>

        {/* Commercial */}
        <div>
          <h3 className="font-serif text-2xl font-bold text-foreground mb-8 gold-underline">Commercial</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {commercial.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
