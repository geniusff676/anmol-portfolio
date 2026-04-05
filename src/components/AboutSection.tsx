import { Terminal, Brain, Server, Network, Code2 } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">

          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-lg">01.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">About Me</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid md:grid-cols-[1fr_320px] gap-10 items-start">

            {/* ── Left: prose + quick facts ── */}
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed text-lg">
                Exploring the space between{" "}
                <span className="text-primary font-medium">networks</span> and{" "}
                <span className="text-accent font-medium">AI systems</span>—how things connect,
                communicate, and sometimes fail.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Work spans across routing, switching, and troubleshooting, alongside building{" "}
                <span className="text-primary font-medium">computer vision</span> systems,
                assistive tools, and{" "}
                <span className="text-accent font-medium">LLM-based applications</span>.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Some projects involve{" "}
                <span className="text-primary font-medium">model optimization</span> and deploying
                pipelines on{" "}
                <span className="text-accent font-medium">edge devices</span> like Raspberry Pi,
                keeping things lightweight and practical.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Experience also includes building{" "}
                <span className="text-accent font-medium">scalable APIs</span> with Flask and
                FastAPI, along with work in ML deployment and system integration.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Along the way—qualified{" "}
                <span className="text-primary font-medium">GATE DA</span>, earned a{" "}
                <span className="text-accent font-medium">DGCA Remote Pilot</span> certification,
                with research work and a patent around assistive vision systems.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Gradually moving toward the overlap—using{" "}
                <span className="text-primary font-medium">automation</span> and intelligent
                logic to make systems more efficient and easier to manage.
              </p>

              <p className="text-muted-foreground/60 leading-relaxed text-sm">
                A collection of projects, experiments, and things figured out along the way.
              </p>

              {/* Quick Facts */}
              <div className="grid grid-cols-2 gap-3 pt-4">
                <div className="glass rounded-lg p-4 glass-hover">
                  <p className="text-muted-foreground text-xs mb-1">Location</p>
                  <p className="text-foreground font-medium text-sm">India</p>
                </div>
                <div className="glass rounded-lg p-4 glass-hover">
                  <p className="text-muted-foreground text-xs mb-1">Status</p>
                  <p className="text-primary font-medium text-sm">Open to Work</p>
                </div>
              </div>
            </div>

            {/* ── Right: skill cards ── */}
            <div className="grid grid-cols-2 gap-3">

              {/* AI/ML */}
              <div className="glass rounded-xl p-5 glass-hover flex flex-col gap-3">
                <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center">
                  <Brain size={16} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-foreground font-semibold text-sm mb-1">AI / ML</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Deep learning, CNNs, computer vision, model optimization
                  </p>
                </div>
              </div>

              {/* CCNA */}
              <div className="glass rounded-xl p-5 glass-hover flex flex-col gap-3">
                <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center">
                  <Network size={16} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-foreground font-semibold text-sm mb-1">CCNA</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Routing, switching, IP addressing, VLANs, troubleshooting
                  </p>
                </div>
              </div>

              {/* CCNP */}
              <div className="glass rounded-xl p-5 glass-hover flex flex-col gap-3">
                <div className="w-8 h-8 rounded-md bg-accent/10 flex items-center justify-center">
                  <Server size={16} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-foreground font-semibold text-sm mb-1">CCNP</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Advanced routing, network design, automation, scale troubleshooting
                  </p>
                </div>
              </div>

              {/* Backend */}
              <div className="glass rounded-xl p-5 glass-hover flex flex-col gap-3">
                <div className="w-8 h-8 rounded-md bg-accent/10 flex items-center justify-center">
                  <Server size={16} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-foreground font-semibold text-sm mb-1">Backend</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Flask, FastAPI, REST APIs, database design
                  </p>
                </div>
              </div>

              {/* Development — full width */}
              <div className="col-span-2 glass rounded-xl p-5 glass-hover flex items-center gap-4">
                <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Terminal size={16} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-foreground font-semibold text-sm mb-0.5">Development</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Python · C++ · Linux · Git · Deployment
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};








// import { Terminal, Brain, Server, Network } from "lucide-react";

// export const AboutSection = () => {
//   return (
//     <section id="about" className="section-padding relative">
//       <div className="container mx-auto px-4">
//         <div className="max-w-4xl mx-auto">
//           {/* Section Header */}
//           <div className="flex items-center gap-4 mb-12">
//             <span className="text-primary font-mono text-lg">01.</span>
//             <h2 className="text-3xl md:text-4xl font-bold text-foreground">About Me</h2>
//             <div className="flex-1 h-px bg-border" />
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {/* Main About Text */}
//             <div className="md:col-span-2 space-y-6">
//               {/* <p className="text-muted-foreground leading-relaxed text-lg">
//                 AI/ML and Backend Developer with hands-on experience in{" "}
//                 <span className="text-primary">deep learning</span>,{" "}
//                 <span className="text-primary">computer vision</span>, and building{" "}
//                 <span className="text-accent">scalable APIs</span> using Flask and FastAPI.
//               </p>
//               <p className="text-muted-foreground leading-relaxed">
//                 Worked on real-world projects including medical imaging models, LLM-based scene 
//                 descriptions, and assistive tech for visually impaired users. Skilled in deploying 
//                 models, optimizing performance, and integrating ML pipelines on low-power devices 
//                 like Raspberry Pi.
//               </p>
//               <p className="text-muted-foreground leading-relaxed">
//                 Actively seeking opportunities in <span className="text-primary">AI/ML</span> and{" "}
//                 <span className="text-accent">backend development</span>.
//               </p> */}
// {/* <p className="text-muted-foreground leading-relaxed text-lg">
//   AI/ML and Backend Developer with hands-on experience in{" "}
//   <span className="text-primary">deep learning</span>,{" "}
//   <span className="text-primary">computer vision</span>, and building{" "}
//   <span className="text-accent">scalable APIs</span> using Flask and FastAPI.
// </p>

// <p className="text-muted-foreground leading-relaxed">
//   I enjoy turning complex problems into practical AI systems—whether it's medical
//   imaging models, <span className="text-primary">LLM-powered scene descriptions</span>, or 
//   assistive tech for visually impaired users. I’ve also worked on{" "}
//   <span className="text-accent">ML deployment</span>, performance optimization, and integrating 
//   pipelines on low-power devices like Raspberry Pi.
// </p>

// <p className="text-muted-foreground leading-relaxed">
//   Along the way, I’ve qualified <span className="text-primary">GATE DA</span>, earned a{" "}
//   <span className="text-accent">DGCA Remote Pilot</span> certification, published research, and 
//   even filed a patent for an assistive vision system.
// </p>

// <p className="text-muted-foreground leading-relaxed">
//   I like building things that blend AI with real-world impact—if that sounds interesting,
//   feel free to explore the projects below.
// </p> */}
// <p className="text-muted-foreground leading-relaxed text-lg">
//   Exploring the space between{" "}
//   <span className="text-primary">networks</span> and{" "}
//   <span className="text-accent">AI systems</span>—how things connect,
//   communicate, and sometimes fail.
// </p>

// <p className="text-muted-foreground leading-relaxed">
//   Work spans across routing, switching, and troubleshooting, alongside building{" "}
//   <span className="text-primary">computer vision</span> systems, assistive tools,
//   and <span className="text-accent">LLM-based applications</span>.
// </p>

// <p className="text-muted-foreground leading-relaxed">
//   Some projects involve{" "}
//   <span className="text-primary">model optimization</span> and deploying pipelines
//   on <span className="text-accent">edge devices</span> like Raspberry Pi,
//   keeping things lightweight and practical.
// </p>

// <p className="text-muted-foreground leading-relaxed">
//   Experience also includes building{" "}
//   <span className="text-accent">scalable APIs</span> with Flask and FastAPI,
//   along with work in ML deployment and system integration.
// </p>

// <p className="text-muted-foreground leading-relaxed">
//   Along the way—qualified <span className="text-primary">GATE DA</span>,
//   earned a <span className="text-accent">DGCA Remote Pilot</span> certification,
//   with research work and a patent around assistive vision systems.
// </p>

// <p className="text-muted-foreground leading-relaxed">
//   Gradually moving toward the overlap—using{" "}
//   <span className="text-primary">automation</span> and intelligent logic
//   to make systems more efficient and easier to manage.
// </p>

// <p className="text-muted-foreground leading-relaxed">
//   A collection of projects, experiments, and things figured out along the way.
// </p>

//               {/* Quick Facts */}
//               <div className="grid grid-cols-2 gap-4 pt-6">
//                 <div className="glass rounded-lg p-4 glass-hover">
//                   <p className="text-muted-foreground text-sm">Location</p>
//                   <p className="text-foreground font-medium">India</p>
//                 </div>
//                 <div className="glass rounded-lg p-4 glass-hover">
//                   <p className="text-muted-foreground text-sm">Status</p>
//                   <p className="text-primary font-medium">Open to Work</p>
//                 </div>
//               </div>
//             </div>

//             {/* Side Cards */}
//             <div className="grid grid-cols-2 gap-4">
//               <div className="glass rounded-lg p-6 glass-hover">
//                 <Brain className="text-primary mb-3" size={28} />
//                 <h3 className="text-foreground font-semibold mb-2">AI/ML</h3>
//                 <p className="text-muted-foreground text-sm">
//                   Deep learning, CNNs, computer vision, model optimization
//                 </p>
//               </div>
//               <div className="glass rounded-lg p-6 glass-hover">
//                 <Network className="text-primary mb-3" size={28} />
//                 <h3 className="text-foreground font-semibold mb-2">CCNA</h3>
//                 <p className="text-muted-foreground text-sm">
//                   Routing, switching, IP addressing, subnetting, VLANs, basic troubleshooting
//                 </p>
//               </div>
              
//               <div className="glass rounded-lg p-6 glass-hover">
//                 <Server className="text-primary mb-3" size={28} />
//                 <h3 className="text-foreground font-semibold mb-2">CCNP</h3>
//                 <p className="text-muted-foreground text-sm">
//                   Advanced routing, network design, automation basics, troubleshooting at scale
//                 </p>
//               </div>

//               <div className="glass rounded-lg p-6 glass-hover">
//                 <Server className="text-accent mb-3" size={28} />
//                 <h3 className="text-foreground font-semibold mb-2">Backend</h3>
//                 <p className="text-muted-foreground text-sm">
//                   Flask, FastAPI, REST APIs, database design
//                 </p>
//               </div>
//               <div className="glass rounded-lg p-6 glass-hover">
//                 <Terminal className="text-primary mb-3" size={28} />
//                 <h3 className="text-foreground font-semibold mb-2">Development</h3>
//                 <p className="text-muted-foreground text-sm">
//                   Python, C++, Linux, Git, deployment
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
