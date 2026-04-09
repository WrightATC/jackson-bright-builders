import { useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const projects = [
  {
    src: portfolio1,
    alt: "Electrical panel installation",
    title: "Panel Upgrade",
    category: "Residential",
    description:
      "Complete 200-amp panel upgrade for a Jackson residence, replacing outdated equipment with modern, code-compliant hardware.",
  },
  {
    src: portfolio2,
    alt: "Commercial electrical work",
    title: "Commercial Wiring",
    category: "Commercial",
    description:
      "Full electrical buildout for a local commercial space including lighting, power distribution, and safety systems.",
  },
  {
    src: portfolio3,
    alt: "Residential electrical project",
    title: "New Construction Wiring",
    category: "Residential",
    description:
      "Whole-home electrical installation for a new construction project — from rough-in to finish, done right the first time.",
  },
];

const categories = ["All", "Residential", "Commercial"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="container text-center">
          <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-3">
            Our Work
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground">
            Project <span className="text-secondary">Portfolio</span>
          </h1>
          <p className="text-primary-foreground/80 mt-4 max-w-xl mx-auto text-lg">
            A showcase of our electrical craftsmanship across Jackson,
            Mississippi — residential and commercial.
          </p>
        </div>
      </section>

      {/* Filters */}
      <div className="container py-8 flex justify-center gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-md font-semibold text-sm transition-colors ${
              activeCategory === cat
                ? "bg-secondary text-secondary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <section className="container pb-20 flex-1">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <div
              key={i}
              className="group cursor-pointer"
              onClick={() => setLightbox(i)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-md bg-card">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.src}
                    alt={project.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-primary-foreground font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg">
                    View Project
                  </span>
                </div>
              </div>
              <div className="mt-3">
                <span className="text-secondary text-xs font-semibold uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="font-serif font-bold text-foreground text-lg">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-1">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 bg-foreground/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-primary-foreground hover:text-secondary transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={32} />
          </button>
          <div
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              className="w-full rounded-lg shadow-2xl"
            />
            <div className="mt-4 text-center">
              <h3 className="font-serif font-bold text-primary-foreground text-xl">
                {filtered[lightbox].title}
              </h3>
              <p className="text-primary-foreground/70 mt-1">
                {filtered[lightbox].description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-serif font-bold text-primary-foreground mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
            Whether it's residential or commercial, Capital City Maintenance
            delivers quality electrical work you can count on.
          </p>
          <Link
            to="/#contact"
            className="bg-secondary text-secondary-foreground px-8 py-3.5 rounded-md font-bold text-lg hover:opacity-90 transition-opacity"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
