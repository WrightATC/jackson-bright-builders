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
  ShieldCheck,
  Phone,
} from "lucide-react";

const residential = [
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

const ServiceChip = ({ icon: Icon, title }: { icon: any; title: string }) => (
  <div className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 text-sm font-medium text-foreground hover:border-secondary/50 transition-colors">
    <Icon className="text-gold-glow shrink-0" size={16} />
    {title}
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

        {/* Inspections Highlight */}
        <div className="mb-16 rounded-xl border-2 border-secondary/40 bg-gradient-to-br from-secondary/10 to-secondary/5 p-8 md:p-10">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="text-gold-glow" size={40} />
            </div>
            <div className="text-center md:text-left flex-1">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
                Whole Home Electrical Inspections
              </h3>
              <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
                Protect your family and your investment. Our thorough whole-home inspections identify hidden hazards, code violations, and aging wiring — giving you peace of mind and a clear path to a safer home.
              </p>
            </div>
            <a
              href="tel:601-715-3541"
              className="flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-md font-bold hover:opacity-90 transition-opacity shrink-0"
            >
              <Phone size={18} />
              Schedule Now
            </a>
          </div>
        </div>

        {/* Residential */}
        <div className="mb-12">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-6 gold-underline">Residential</h3>
          <div className="flex flex-wrap gap-3">
            {residential.map((s) => (
              <ServiceChip key={s.title} icon={s.icon} title={s.title} />
            ))}
          </div>
        </div>

        {/* Commercial */}
        <div>
          <h3 className="font-serif text-2xl font-bold text-foreground mb-6 gold-underline">Commercial</h3>
          <div className="flex flex-wrap gap-3">
            {commercial.map((s) => (
              <ServiceChip key={s.title} icon={s.icon} title={s.title} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
