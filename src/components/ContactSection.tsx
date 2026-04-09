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
            Whether it's a quick repair or a major project, we'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <a href="tel:601-715-3541" className="flex items-center gap-4 p-6 rounded-lg border border-primary-foreground/15 hover:border-gold transition-colors">
              <Phone className="text-gold-glow shrink-0" size={28} />
              <div>
                <p className="font-semibold text-lg">Call Us</p>
                <p className="text-primary-foreground/60">(769) 234-4512</p>
              </div>
            </a>

            <a href="mailto:contact@ccmaintenancepros.com" className="flex items-center gap-4 p-6 rounded-lg border border-primary-foreground/15 hover:border-gold transition-colors">
              <Mail className="text-gold-glow shrink-0" size={28} />
              <div>
                <p className="font-semibold text-lg">Email Us</p>
                <p className="text-primary-foreground/60 text-sm">contact@ccmaintenancepros.com</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-6 rounded-lg border border-primary-foreground/15">
              <MapPin className="text-gold-glow shrink-0" size={28} />
              <div>
                <p className="font-semibold text-lg">Service Area</p>
                <p className="text-primary-foreground/60">Jackson, MS & Surrounding</p>
              </div>
            </div>
          </div>

          {/* Embedded Google Form */}
          <div className="rounded-lg overflow-hidden">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSc-zrDU6iLwCyHq8ULe9esmIbrItHGV-XaWaDxErPIjj2iI7g/viewform?embedded=true"
              width="100%"
              height="600"
              className="border-0 bg-white rounded-lg"
              title="Contact Form"
              loading="lazy"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
