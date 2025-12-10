import { Terminal, Brain, Server } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-lg">01.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">About Me</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Main About Text */}
            <div className="md:col-span-2 space-y-6">
              {/* <p className="text-muted-foreground leading-relaxed text-lg">
                AI/ML and Backend Developer with hands-on experience in{" "}
                <span className="text-primary">deep learning</span>,{" "}
                <span className="text-primary">computer vision</span>, and building{" "}
                <span className="text-accent">scalable APIs</span> using Flask and FastAPI.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Worked on real-world projects including medical imaging models, LLM-based scene 
                descriptions, and assistive tech for visually impaired users. Skilled in deploying 
                models, optimizing performance, and integrating ML pipelines on low-power devices 
                like Raspberry Pi.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Actively seeking opportunities in <span className="text-primary">AI/ML</span> and{" "}
                <span className="text-accent">backend development</span>.
              </p> */}
<p className="text-muted-foreground leading-relaxed text-lg">
  AI/ML and Backend Developer with hands-on experience in{" "}
  <span className="text-primary">deep learning</span>,{" "}
  <span className="text-primary">computer vision</span>, and building{" "}
  <span className="text-accent">scalable APIs</span> using Flask and FastAPI.
</p>

<p className="text-muted-foreground leading-relaxed">
  I enjoy turning complex problems into practical AI systems—whether it's medical
  imaging models, <span className="text-primary">LLM-powered scene descriptions</span>, or 
  assistive tech for visually impaired users. I’ve also worked on{" "}
  <span className="text-accent">ML deployment</span>, performance optimization, and integrating 
  pipelines on low-power devices like Raspberry Pi.
</p>

<p className="text-muted-foreground leading-relaxed">
  Along the way, I’ve qualified <span className="text-primary">GATE DA</span>, earned a{" "}
  <span className="text-accent">DGCA Remote Pilot</span> certification, published research, and 
  even filed a patent for an assistive vision system.
</p>

<p className="text-muted-foreground leading-relaxed">
  I like building things that blend AI with real-world impact—if that sounds interesting,
  feel free to explore the projects below.
</p>

              {/* Quick Facts */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="glass rounded-lg p-4 glass-hover">
                  <p className="text-muted-foreground text-sm">Location</p>
                  <p className="text-foreground font-medium">India</p>
                </div>
                <div className="glass rounded-lg p-4 glass-hover">
                  <p className="text-muted-foreground text-sm">Status</p>
                  <p className="text-primary font-medium">Open to Work</p>
                </div>
              </div>
            </div>

            {/* Side Cards */}
            <div className="space-y-4">
              <div className="glass rounded-lg p-6 glass-hover">
                <Brain className="text-primary mb-3" size={28} />
                <h3 className="text-foreground font-semibold mb-2">AI/ML</h3>
                <p className="text-muted-foreground text-sm">
                  Deep learning, CNNs, computer vision, model optimization
                </p>
              </div>
              <div className="glass rounded-lg p-6 glass-hover">
                <Server className="text-accent mb-3" size={28} />
                <h3 className="text-foreground font-semibold mb-2">Backend</h3>
                <p className="text-muted-foreground text-sm">
                  Flask, FastAPI, REST APIs, database design
                </p>
              </div>
              <div className="glass rounded-lg p-6 glass-hover">
                <Terminal className="text-primary mb-3" size={28} />
                <h3 className="text-foreground font-semibold mb-2">Development</h3>
                <p className="text-muted-foreground text-sm">
                  Python, C++, Linux, Git, deployment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
