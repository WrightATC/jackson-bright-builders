import { useState } from "react";
import { Phone, Mail, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/ccm-logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="bg-navy-deep text-primary-foreground text-sm py-2">
        <div className="container flex justify-between items-center">
          <a href="mailto:ccmaintenancepros@gmail.com" className="flex items-center gap-2 hover:text-gold-glow transition-colors">
            <Mail size={14} /> ccmaintenancepros@gmail.com
          </a>
          <a href="tel:601-715-3541" className="flex items-center gap-2 hover:text-gold-glow transition-colors">
            <Phone size={14} /> (601) 715-3541
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-card/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="container flex justify-between items-center py-4">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="CCM Logo" className="h-10 w-10" />
            <span className="font-serif text-2xl font-bold tracking-tight text-foreground">
              Capital City <span className="text-gold-glow">Maintenance</span>
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#contact" className="bg-secondary text-secondary-foreground px-5 py-2.5 rounded-md font-semibold hover:opacity-90 transition-opacity">
              Contact Us
            </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden bg-card border-t border-border px-6 pb-4 space-y-3">
            <a href="#services" onClick={() => setOpen(false)} className="block py-2 text-muted-foreground">Services</a>
            <a href="#about" onClick={() => setOpen(false)} className="block py-2 text-muted-foreground">About</a>
            <a href="#contact" onClick={() => setOpen(false)} className="block py-2 bg-secondary text-secondary-foreground text-center rounded-md font-semibold">Contact Us</a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
