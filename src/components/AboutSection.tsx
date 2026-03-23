import { Heart, Shield, Users } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Community First",
    desc: "We live and work in Jackson. Every wire we pull, every panel we install — it's for our neighbors, our friends, our community.",
  },
  {
    icon: Shield,
    title: "Safety & Quality",
    desc: "No shortcuts. We treat every job — big or small — with the same commitment to safety, code compliance, and lasting quality.",
  },
  {
    icon: Users,
    title: "Built on Trust",
    desc: "Our reputation is everything. We earn your trust through transparent pricing, honest timelines, and work we stand behind.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-gold-glow font-semibold tracking-widest uppercase text-sm mb-3">Who We Are</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground gold-underline-center">
            Rooted in Jackson
          </h2>
          <p className="mt-8 text-muted-foreground text-lg leading-relaxed">
            Capital City Maintenance was founded with one simple mission:{" "}
            <strong className="text-foreground">
              to strengthen the city of Jackson, one connection at a time.
            </strong>{" "}
            We believe our capital city deserves world-class electrical services
            delivered with hometown care. When you call us, you're not just
            hiring an electrician — you're investing in a company that's
            committed to building up this community, creating safer homes, and
            powering local businesses to thrive.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v) => (
            <div key={v.title} className="text-center px-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary flex items-center justify-center mb-5">
                <v.icon className="text-primary-foreground" size={28} />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">{v.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
