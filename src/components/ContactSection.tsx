import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill out all required fields.", variant: "destructive" });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_KEY",
          subject: `New inquiry from ${form.name.trim()}`,
          from_name: "Capital City Maintenance Website",
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          message: form.message.trim(),
        }),
      });
      const data = await res.json();
      if (data.success) {
        toast({ title: "Message sent!", description: "We'll get back to you soon." });
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error("Submit failed");
      }
    } catch {
      toast({ title: "Something went wrong. Please call us instead.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

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

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <a href="tel:601-715-3541" className="flex items-center gap-4 p-6 rounded-lg border border-primary-foreground/15 hover:border-gold transition-colors">
              <Phone className="text-gold-glow shrink-0" size={28} />
              <div>
                <p className="font-semibold text-lg">Call Us</p>
                <p className="text-primary-foreground/60">(601) 715-3541</p>
              </div>
            </a>

            <a href="mailto:Ccmaintenancepros@gmail.com" className="flex items-center gap-4 p-6 rounded-lg border border-primary-foreground/15 hover:border-gold transition-colors">
              <Mail className="text-gold-glow shrink-0" size={28} />
              <div>
                <p className="font-semibold text-lg">Email Us</p>
                <p className="text-primary-foreground/60 text-sm">Ccmaintenancepros@gmail.com</p>
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

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-primary-foreground/80 mb-1">Name *</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                maxLength={100}
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-md border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-secondary"
                placeholder="Your name"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary-foreground/80 mb-1">Email *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  maxLength={255}
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-md border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-secondary"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-primary-foreground/80 mb-1">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  maxLength={20}
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full rounded-md border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-secondary"
                  placeholder="(601) 555-1234"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-primary-foreground/80 mb-1">How can we help? *</label>
              <textarea
                id="message"
                name="message"
                required
                maxLength={1000}
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-md border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-6 py-3.5 rounded-md font-bold text-lg hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              <Send size={18} />
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
