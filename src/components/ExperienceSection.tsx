import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";

const experiences = [
  {
    title: "Research Intern",
    company: "IIT Mandi",
    location: "India",
    period: "2025",
    description: [
      "Worked on railway anomaly detection using VGG-based segmentation + autoencoder reconstruction",
      "Achieved 98.66% accuracy on anomaly detection tasks",
      "Contributed to dataset preprocessing, augmentation, and evaluation metrics development",
    ],
    tech: ["VGG", "Autoencoders", "Image Segmentation", "PyTorch"],
  },
  {
    title: "Research Intern",
    company: "IIT Mandi",
    location: "India",
    period: "2024",
    description: [
      "Implemented YOLO and RetinaNet models for object detection tasks",
      "Hands-on work with Detectron2, PyTorch, and OpenCV",
      "Improved object detection accuracy using feature pyramids & anchor tuning",
    ],
    tech: ["YOLO", "RetinaNet", "Detectron2", "PyTorch", "OpenCV"],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-lg">03.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Experience</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-12 md:pl-20">
                  {/* Timeline Dot */}
                  <div className="absolute left-2 md:left-6 top-2 w-4 h-4 rounded-full bg-primary glow-primary" />

                  <div className="glass rounded-xl p-6 glass-hover">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                          <ChevronRight size={16} className="text-primary mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
