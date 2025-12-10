import { useState } from "react";
import {
  ExternalLink,
  Github,
  ChevronDown,
  ChevronUp,
  Eye,
  Brain,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Smart Cap — AI-Powered Assistive Vision",
    subtitle: "Major Project · For the Visually Impaired",
    icon: Eye,
    featured: true,
    description:
      "Wearable Smart Cap on Raspberry Pi 4 providing 180° environmental awareness, OCR→TTS reading, LLM-based scene descriptions, LiDAR-assisted depth estimation, face recognition, SOS with live location, and a voice assistant.",
    role:
      "Led navigation & LLM scene-description modules; implemented voice assistant (Sanjay), TTS/STT integration, and system integration for real-time performance on Raspberry Pi.",
    features: [
      "180° multi-camera setup for wide FOV scene capture",
      "OCR → TTS for reading printed text",
      "LLM-generated scene descriptions and contextual assistance",
      "LiDAR integration for accurate depth estimation and safer navigation",
      "Face recognition for caregiver identification and automated SOS alerts",
      "Optimized pipelines for low-power, real-time execution on Raspberry Pi",
    ],
    tech: [
      "Python",
      "Raspberry Pi",
      "OpenCV",
      "OCR",
      "TTS/STT",
      "LiDAR",
      "Face Recognition",
      "LLMs",
    ],
    highlights: [
      "State-level Smart Hackathon winner",
      "Best Technical Project Presentation",
      "Patent filed",
    ],
    // code is private (patent)
    github: null,
    demo: "https://your-demo-link.com",
    viewCodeNote:
      "🔒 This project is currently under patent review — the code is on a 'secret mission'. 👀 Enjoy the demo for now!",
    tag: {
  text: "Major Project",
  classes: "bg-lime-500/20 text-lime-500 border border-lime-500/30"
}

  },

  {
    title: "QWACH – Detecting Malicious QR Codes & URLs using AI",
    subtitle: "Minor Project · Hybrid ML Security Tool",
    icon: Shield,
    featured: true,
    description:
      "Ensemble-based ML system to classify QR codes and URLs as malicious or legitimate, integrated as a Manifest V3 Chrome extension with Flask backend for real-time threat scanning.",
    features: [
      "Hybrid ensemble model with MLP meta-classifier",
      "Real-time scanning via Manifest V3 Chrome extension",
      "Flask backend API for QR/URL analysis",
      "Periodic online retraining with newly collected threat data",
      "Instant malicious URL alerts with detailed risk metadata",
    ],
    tech: [
      "Python",
      "Flask",
      "Machine Learning",
      "Ensemble Models",
      "Chrome Extension",
      "JavaScript",
    ],
    highlights: ["1 research paper based on this project", "Supports incremental learning"],
    github: "https://github.com/geniusff676",
    demo: "https://your-qwach-demo.com",
    tag: {
  text: "Minor Project",
  classes: "bg-sky-500/20 text-sky-500 border border-sky-500/30"
}

  },

  {
    title: "Brain Tumor Classification",
    subtitle: "Medical Image Analysis · Research-Backed Project",
    icon: Brain,
    featured: false,
    description:
      "Deep learning MRI tumor classifier built using transfer learning, deployed via a Flask interface with Grad-CAM explainability.",
    features: [
      "MobileNet-based transfer learning for MRI classification",
      "Flask backend API for prediction serving",
      "Lightweight responsive web UI for image uploads",
      "Grad-CAM visualization for model explainability",
    ],
    tech: ["TensorFlow", "Flask", "MobileNet", "OpenCV", "Medical Imaging"],
    github: "https://github.com/geniusff676",
    demo: "https://your-brain-tumor-demo.com",
    tag: { text: "Research-Backed", classes: "bg-fuchsia-500/20 text-fuchsia-500 border border-fuchsia-500/30"},
  },
];

export const ProjectsSection = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(0);

  return (
    <section id="projects" className="section-padding relative bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-lg">04.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Featured Projects
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Projects Grid */}
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`glass rounded-xl overflow-hidden transition-all duration-500 ${
                  project.featured ? "border-primary/20" : ""
                }`}
              >
                {/* Project Header */}
                <div
                  className="p-6 cursor-pointer glass-hover"
                  onClick={() =>
                    setExpandedProject(expandedProject === index ? null : index)
                  }
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <project.icon className="text-primary" size={24} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl font-bold text-foreground">
                            {project.title}
                          </h3>

                          {/* Tag badge (project type) */}
                          {project.tag && (
                            <span
                              className={`px-2 py-0.5 text-xs font-mono rounded ${project.tag.classes} border`}
                              style={{ boxShadow: "0 6px 18px rgba(0,0,0,0.04)" }}
                            >
                              {project.tag.text}
                            </span>
                          )}

                          {project.featured && (
                            <span className="px-2 py-0.5 text-xs font-mono bg-accent/20 text-accent rounded">
                              Featured
                            </span>
                          )}
                        </div>

                        <p className="text-primary text-sm font-medium">
                          {project.subtitle}
                        </p>
                        <p className="text-muted-foreground mt-2 hidden md:block">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    <button className="text-muted-foreground hover:text-primary transition-colors">
                      {expandedProject === index ? (
                        <ChevronUp size={24} />
                      ) : (
                        <ChevronDown size={24} />
                      )}
                    </button>
                  </div>

                  {/* Mobile Description */}
                  <p className="text-muted-foreground mt-4 md:hidden">
                    {project.description}
                  </p>
                </div>

                {/* Expanded Content */}
                {expandedProject === index && (
                  <div className="px-6 pb-6 animate-fade-in">
                    <div className="border-t border-border pt-6">
                      <h4 className="text-foreground font-semibold mb-4">
                        Key Features
                      </h4>

                      <ul className="grid md:grid-cols-2 gap-2 mb-6">
                        {project.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-muted-foreground"
                          >
                            <span className="text-primary mt-1">▹</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap items-center justify-between gap-4">
                        {/* Tech Badges with subtle animation */}
                        {/* <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-xs font-mono bg-muted/50 text-muted-foreground rounded-full border border-border/50 transform transition hover:-translate-y-0.5 hover:scale-[1.02]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div> */}
                        <div className="flex flex-wrap gap-2">
  {project.tech.map((tech) => (
    <span
      key={tech}
      className="px-3 py-1 text-xs font-mono rounded-full border border-primary/30
        bg-primary/5 text-primary shadow-sm
        hover:bg-primary/10 hover:shadow-primary/40 
        transition-all duration-300 ease-out
        hover:-translate-y-0.5 hover:scale-105"
    >
      {tech}
    </span>
  ))}
</div>

                        {/* Action buttons */}
                        <div className="flex gap-3">
                          {/* View Code */}
                          {project.github ? (
                            <Button variant="outline" size="sm" asChild>
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center"
                              >
                                <Github size={16} className="mr-2" />
                                View Code
                              </a>
                            </Button>
                          ) : (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => alert(project.viewCodeNote)}
                              className="flex items-center"
                            >
                              <Github size={16} className="mr-2" />
                              View Code
                            </Button>
                          )}

                          {/* View Demo (if available) */}
                          {project.demo && (
                            <Button variant="default" size="sm" asChild>
                              <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center"
                              >
                                <ExternalLink size={16} className="mr-2" />
                                View Demo
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>

                      {/* Highlights (if any) */}
                      {project.highlights && (
                        <div className="mt-6">
                          <h5 className="text-sm font-medium mb-2 text-foreground">
                            Highlights
                          </h5>
                          <ul className="flex flex-wrap gap-2">
                            {project.highlights.map((h, i) => (
                              <li
                                key={i}
                                className="px-3 py-1 text-xs font-mono bg-muted/40 text-muted-foreground rounded-full border border-border/50"
                              >
                                {h}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
