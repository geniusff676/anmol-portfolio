import { GraduationCap, Code, BookOpen, Award, FileText, Lightbulb, Briefcase, Trophy, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const timelineData = [
  {
    year: "2018",
    title: "Completed Class 10",
    description: "First spark for tech",
    icon: GraduationCap,
  },
  {
    year: "2020",
    title: "Completed Class 12",
    description: "Decided to pursue AI & ML",
    icon: Lightbulb,
  },
  {
    year: "2022",
    title: "Started B.Tech in AI & ML",
    description: "Beginning of the journey",
    icon: GraduationCap,
  },
  {
    year: "2023",
    title: "Built my first ML project",
    description: "Brain Tumor Classification",
    icon: Code,
  },
  {
    year: "2023",
    title: "Completed first deep learning course",
    description: "NPTEL – IIT Ropar",
    icon: BookOpen,
  },
  {
    year: "2024",
    title: "Wrote my first research paper",
    description: "Medical Image Classification — later published",
    icon: FileText,
  },
  {
    year: "2024",
    title: "Completed first research internship",
    description: "IIT Mandi — Object Detection",
    icon: Briefcase,
  },
  {
    year: "2025",
    title: "Built QWACH",
    description: "Hybrid ML URL/QR security system (minor project)",
    icon: Code,
  },
  {
    year: "2025",
    title: "Qualified GATE DA 2025",
    description: "Graduate Aptitude Test in Engineering - Data Science & AI",
    icon: Award,
  },
  {
    year: "2025",
    title: "Second internship at IIT Mandi",
    description: "Railway anomaly detection (Autoencoders + Segmentation)",
    icon: Briefcase,
  },
  {
    year: "2025",
    title: "Major Project: Smart Cap",
    description: "AI-Powered Assistive Vision • Patent filed • State-level Smart Hackathon winner • Best Technical Project Presentation",
    icon: Trophy,
    highlight: true,
  },
  {
    year: "2026",
    title: "Working toward next internship",
    description: "Graduating soon",
    icon: Zap,
    future: true,
  },
];

const TimelineItem = ({ item, index, isVisible }) => {
  const Icon = item.icon;
  
  return (
    <div
      className={`flex gap-6 group transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Year marker */}
      <div className="flex flex-col items-end w-20 flex-shrink-0">
        <span className={`font-mono font-bold text-lg ${item.future ? 'text-accent' : 'text-primary'}`}>
          {item.year}
        </span>
      </div>

      {/* Timeline line and icon */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
            item.highlight
              ? 'bg-accent/20 border-2 border-accent shadow-lg shadow-accent/20 group-hover:shadow-xl group-hover:shadow-accent/30'
              : item.future
              ? 'bg-accent/10 border-2 border-accent/50 group-hover:border-accent'
              : 'glass border-2 border-primary/30 group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/20'
          }`}
        >
          <Icon
            size={20}
            className={`${
              item.highlight ? 'text-accent' : item.future ? 'text-accent' : 'text-primary'
            }`}
          />
        </div>
        {index !== timelineData.length - 1 && (
          <div className="w-0.5 flex-1 bg-gradient-to-b from-primary/30 via-primary/20 to-transparent min-h-[80px]" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-12">
        <div
          className={`glass rounded-lg p-5 glass-hover transition-all duration-300 ${
            item.highlight ? 'border-accent/30 shadow-lg shadow-accent/5' : ''
          }`}
        >
          <h3 className="text-foreground font-semibold text-lg mb-1">
            {item.title}
          </h3>
          <p className={`text-sm ${item.highlight ? 'text-muted-foreground leading-relaxed' : 'text-muted-foreground'}`}>
            {item.description}
          </p>
          {item.highlight && (
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="px-2 py-1 text-xs font-mono bg-accent/10 text-accent rounded border border-accent/20">
                Patent Filed
              </span>
              <span className="px-2 py-1 text-xs font-mono bg-accent/10 text-accent rounded border border-accent/20">
                State Winner
              </span>
              <span className="px-2 py-1 text-xs font-mono bg-accent/10 text-accent rounded border border-accent/20">
                Best Presentation
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const JourneySection = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const observerRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const index = Number(target.dataset.index);

            setVisibleItems((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observerRef.current.observe(ref);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <section id="journey" className="section-padding relative bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-16">
            <span className="text-primary font-mono text-lg">06.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">My Journey</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {timelineData.map((item, index) => (
              <div
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                data-index={index}
              >
                <TimelineItem
                  item={item}
                  index={index}
                  isVisible={visibleItems.has(index)}
                />
              </div>
            ))}
          </div>

          {/* Optional: Call to Action at the end */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground text-lg">
              The journey continues...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};