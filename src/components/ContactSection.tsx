import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-navy-deep text-primary-foreground">
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-gold-glow font-semibold tracking-widest uppercase text-sm mb-3">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold gold-underline-center">
            Ready to Get Started?
          </h2>
          <p className="mt-8 text-primary-foreground/70 text-lg max-w-xl mx-auto">
            Whether it's a quick repair or a major project, we'd love to hear from you. Reach out today — no pressure, just honest advice.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <a href="tel:601-715-3541" className="flex flex-col items-center p-8 rounded-lg border border-primary-foreground/15 hover:border-gold transition-colors group">
            <Phone className="text-gold-glow mb-4" size={32} />
            <p className="font-semibold text-lg">Call Us</p>
            <p className="text-primary-foreground/60 mt-1">(601) 715-3541</p>
          </a>

          <a href="mailto:Ccmaintenancepros@gmail.com" className="flex flex-col items-center p-8 rounded-lg border border-primary-foreground/15 hover:border-gold transition-colors group">
            <Mail className="text-gold-glow mb-4" size={32} />
            <p className="font-semibold text-lg">Email Us</p>
            <p className="text-primary-foreground/60 mt-1 text-sm">Ccmaintenancepros@gmail.com</p>
          </a>

          <div className="flex flex-col items-center p-8 rounded-lg border border-primary-foreground/15">
            <MapPin className="text-gold-glow mb-4" size={32} />
            <p className="font-semibold text-lg">Service Area</p>
            <p className="text-primary-foreground/60 mt-1">Jackson, MS & Surrounding</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
