import heroBg from "@/assets/hero-bg.jpg";
import { Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] flex items-center">
      <img
        src={heroBg}
        alt="Professional electrician working on electrical panel"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 hero-overlay" />

      <div className="relative z-10 container py-24">
        <div className="max-w-2xl space-y-6">
          <p className="text-gold-glow font-semibold tracking-widest uppercase text-sm">
            Jackson, Mississippi's Trusted Electrical Contractors
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground leading-tight">
            Powering Jackson,{" "}
            <span className="text-gold-glow">One Home at a Time</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-lg leading-relaxed">
            Proudly serving our community with reliable residential and
            commercial electrical services. Your neighbors trust us — you can
            too.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="#contact"
              className="bg-secondary text-secondary-foreground px-8 py-3.5 rounded-md font-bold text-lg hover:opacity-90 transition-opacity text-center"
            >
              Free Estimate
            </a>
            <a
              href="tel:601-715-3541"
              className="flex items-center justify-center gap-2 border-2 border-gold text-primary-foreground px-8 py-3.5 rounded-md font-semibold text-lg hover:bg-primary-foreground/10 transition-colors"
            >
              <Phone size={20} />
              (601) 715-3541
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
