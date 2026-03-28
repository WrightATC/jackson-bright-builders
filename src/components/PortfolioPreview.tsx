import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const projects = [
  {
    src: portfolio1,
    alt: "Electrical panel installation",
    title: "Panel Upgrade",
    description: "Complete 200-amp panel upgrade for a Jackson residence",
  },
  {
    src: portfolio2,
    alt: "Commercial electrical work",
    title: "Commercial Wiring",
    description: "Full electrical buildout for a local commercial space",
  },
  {
    src: portfolio3,
    alt: "Residential electrical project",
    title: "New Construction",
    description: "Whole-home electrical installation for new build",
  },
];

const PortfolioPreview = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-3">
            Our Work
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            Recent <span className="text-secondary">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Quality craftsmanship you can see — browse a sample of our completed
            electrical projects across Jackson.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-lg shadow-md bg-card"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.src}
                  alt={project.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-serif font-bold text-lg text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-1">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity"
          >
            View Full Portfolio
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
