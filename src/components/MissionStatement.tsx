const MissionStatement = () => {
  return (
    <section className="py-16 bg-navy-deep text-primary-foreground">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold-glow font-semibold tracking-widest uppercase text-sm mb-3">Our Mission</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold gold-underline-center">
            Powering Jackson Forward
          </h2>
          <blockquote className="mt-8 text-primary-foreground/90 text-xl md:text-2xl font-serif italic leading-relaxed">
            "Our mission is to strengthen the city of Jackson — one connection at a time. We are committed to delivering safe, reliable electrical services that uplift our neighborhoods, protect our families, and power the businesses that make our capital city thrive."
          </blockquote>
          <p className="mt-6 text-primary-foreground/60 text-base">
            — Capital City Maintenance, proudly serving our community
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;
