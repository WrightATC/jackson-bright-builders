const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground/60 py-8">
      <div className="container text-center space-y-2">
        <p className="font-serif text-lg font-bold text-primary-foreground">
          CC <span className="text-gold-glow">Maintenance</span> Pros
        </p>
        <p className="text-sm">
          Proudly serving Jackson, Mississippi and the surrounding communities.
        </p>
        <p className="text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} CC Maintenance Pros. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
