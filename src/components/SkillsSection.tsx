import { Brain, Server, Code, Database, Cpu } from "lucide-react";

const skillCategories = [
  {
    icon: Brain,
    title: "Machine Learning / Deep Learning",
    color: "primary",
    skills: ["TensorFlow", "PyTorch", "Keras", "CNNs", "Autoencoders", "Image Segmentation", "Object Detection", "Transfer Learning"],
  },
  {
    icon: Server,
    title: "Backend Development",
    color: "accent",
    skills: ["Flask", "FastAPI", "REST APIs", "Model Deployment", "API Design"],
  },
  {
    icon: Code,
    title: "Programming & Tools",
    color: "primary",
    skills: ["Python", "C++", "Linux", "Git/GitHub", "OpenCV", "NumPy", "Pandas", "Matplotlib"],
  },
  {
    icon: Database,
    title: "Databases",
    color: "accent",
    skills: ["MySQL", "PostgreSQL", "SQLite"],
  },
  {
    icon: Cpu,
    title: "Core CS Fundamentals",
    color: "primary",
    skills: ["DSA", "OOP", "Computer Networks", "Operating Systems"],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding relative bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-lg">02.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Skills</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="glass rounded-xl p-6 glass-hover group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-${category.color}/10`}>
                    <category.icon
                      className={category.color === "primary" ? "text-primary" : "text-accent"}
                      size={24}
                    />
                  </div>
                  <h3 className="text-foreground font-semibold text-lg">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm font-mono bg-muted/50 text-muted-foreground rounded-full border border-border/50 hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
