import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const taglines = [
  "Building intelligent systems and scalable APIs.",
  "Transforming research into real-world applications.",
  "Crafting AI solutions that make a difference.",
  "From neural networks to production-ready systems.",
];

export const HeroSection = () => {
  const [currentTagline, setCurrentTagline] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = taglines[currentTagline];
    const typingSpeed = isDeleting ? 30 : 80;
    const pauseDuration = isDeleting ? 500 : 2000;

    if (!isDeleting && charIndex === currentText.length) {
      // Pause before deleting
      setTimeout(() => setIsDeleting(true), pauseDuration);
      return;
    }

    if (isDeleting && charIndex === 0) {
      // Move to next tagline
      setIsDeleting(false);
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(currentText.substring(0, charIndex + (isDeleting ? -1 : 1)));
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentTagline]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 bg-hero-glow opacity-50" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-[128px] animate-pulse-slow" style={{ animationDelay: "1s" }} />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal-style intro */}
          <div className="inline-block glass rounded-full px-4 py-2 mb-8 animate-fade-in">
            <span className="text-primary font-mono text-sm">
              <span className="text-accent">~</span> Hello, World! I'm
            </span>
          </div>

          {/* Name with gradient animation */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up">
            <span className="text-foreground">Anmol</span>{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
              Garg
            </span>
          </h1>


          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-slide-up font-mono" style={{ animationDelay: "0.1s" }}>
            <span className="text-primary">{"<"}</span>
            <span className="bg-gradient-to-r from-primary to-accent bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
              AI/ML Developer
            </span>
            <span className="text-primary">{" />"}</span>
            {" • "}
            <span className="text-accent">{"<"}</span>
            <span className="bg-gradient-to-r from-accent to-primary bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent" style={{ animationDelay: "0.5s" }}>
              Backend Developer
            </span>
            <span className="text-accent">{" />"}</span>
          </p>
          {/* Animated typing description */}
          <div className="h-16 flex items-center justify-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {displayText}
              <span className="inline-block w-0.5 h-5 bg-primary ml-1 animate-blink" />
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="glow" size="lg" asChild>
              <a href="/anmol-portfolio/RESUME.pdf" download>
                <Download className="mr-2" size={18} />
                Download Resume
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">
                <Mail className="mr-2" size={18} />
                Contact Me
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <a
              href="https://github.com/geniusff676"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 transform"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/anmol-garg-7ba021261"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 transform"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:anmolgarg1422@gmail.com"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 transform"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ChevronDown size={32} />
          </a>
        </div>
      </div>

      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
        
        .animate-gradient {
          animation: gradient 4s ease infinite;
        }
        
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};


// //use it if have a good Photo :

// import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { useState, useEffect } from "react";

// const taglines = [
//   "Building intelligent systems and scalable APIs.",
//   "Transforming research into real-world applications.",
//   "Crafting AI solutions that make a difference.",
//   "From neural networks to production-ready systems.",
// ];

// export const HeroSection = () => {
//   const [currentTagline, setCurrentTagline] = useState(0);
//   const [displayText, setDisplayText] = useState("");
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [charIndex, setCharIndex] = useState(0);

//   useEffect(() => {
//     const currentText = taglines[currentTagline];
//     const typingSpeed = isDeleting ? 30 : 80;
//     const pauseDuration = isDeleting ? 500 : 2000;

//     if (!isDeleting && charIndex === currentText.length) {
//       setTimeout(() => setIsDeleting(true), pauseDuration);
//       return;
//     }

//     if (isDeleting && charIndex === 0) {
//       setIsDeleting(false);
//       setCurrentTagline((prev) => (prev + 1) % taglines.length);
//       return;
//     }

//     const timeout = setTimeout(() => {
//       setDisplayText(currentText.substring(0, charIndex + (isDeleting ? -1 : 1)));
//       setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
//     }, typingSpeed);

//     return () => clearTimeout(timeout);
//   }, [charIndex, isDeleting, currentTagline]);

//   return (
//     <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
//       {/* Background Glow Effects */}
//       <div className="absolute inset-0 bg-hero-glow opacity-50" />
//       <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse-slow" />
//       <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-[128px] animate-pulse-slow" style={{ animationDelay: "1s" }} />

//       {/* Grid Pattern */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             {/* Left: Text Content */}
//             <div className="text-center lg:text-left order-2 lg:order-1">
//               {/* Terminal-style intro */}
//               <div className="inline-block glass rounded-full px-4 py-2 mb-8 animate-fade-in">
//                 <span className="text-primary font-mono text-sm">
//                   <span className="text-accent">~</span> Hello, World! I'm
//                 </span>
//               </div>

//               {/* Name with gradient animation */}
//               <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
//                 <span className="text-foreground">Anmol</span>{" "}
//                 <span className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
//                   Garg
//                 </span>
//               </h1>

//               {/* Tagline */}
//               <p className="text-lg md:text-xl text-muted-foreground mb-4 animate-slide-up font-mono" style={{ animationDelay: "0.1s" }}>
//                 <span className="text-primary">{"<"}</span>
//                 <span className="bg-gradient-to-r from-primary to-accent bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
//                   AI/ML Developer
//                 </span>
//                 <span className="text-primary">{" />"}</span>
//                 {" • "}
//                 <span className="text-accent">{"<"}</span>
//                 <span className="bg-gradient-to-r from-accent to-primary bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent" style={{ animationDelay: "0.5s" }}>
//                   Backend Developer
//                 </span>
//                 <span className="text-accent">{" />"}</span>
//               </p>

//               {/* Animated typing description */}
//               <div className="h-16 flex items-center justify-center lg:justify-start animate-slide-up" style={{ animationDelay: "0.2s" }}>
//                 <p className="text-muted-foreground text-base md:text-lg">
//                   {displayText}
//                   <span className="inline-block w-0.5 h-5 bg-primary ml-1 animate-blink" />
//                 </p>
//               </div>

//               {/* CTA Buttons */}
//               <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8 animate-slide-up" style={{ animationDelay: "0.3s" }}>
//                 <Button variant="glow" size="lg" asChild>
//                   <a href="/RESUME.pdf" download>
//                     <Download className="mr-2" size={18} />
//                     Download Resume
//                   </a>
//                 </Button>
//                 <Button variant="outline" size="lg" asChild>
//                   <a href="#contact">
//                     <Mail className="mr-2" size={18} />
//                     Contact Me
//                   </a>
//                 </Button>
//               </div>

//               {/* Social Links */}
//               <div className="flex items-center justify-center lg:justify-start gap-6 animate-slide-up" style={{ animationDelay: "0.4s" }}>
//                 <a
//                   href="https://github.com/geniusff676"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 transform"
//                 >
//                   <Github size={24} />
//                 </a>
//                 <a
//                   href="https://linkedin.com/in/anmol-garg-7ba021261"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 transform"
//                 >
//                   <Linkedin size={24} />
//                 </a>
//                 <a
//                   href="mailto:anmolgarg1422@gmail.com"
//                   className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 transform"
//                 >
//                   <Mail size={24} />
//                 </a>
//               </div>
//             </div>

//             {/* Right: Photo */}
//             <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "0.5s" }}>
//               <div className="relative group">
//                 {/* Glow effect behind photo */}
//                 <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                
//                 {/* Photo container with glass effect */}
//                 <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
//                   <div className="absolute inset-0 glass rounded-full border-4 border-primary/20 group-hover:border-primary/40 transition-all duration-500 overflow-hidden">
//                     <img
//                       src="/photo.jpg"
//                       alt="Anmol Garg"
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                     />
//                   </div>
                  
//                   {/* Decorative ring */}
//                   <div className="absolute inset-0 rounded-full border-2 border-accent/30 animate-spin-slow" style={{ animationDuration: "20s" }} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
//           <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
//             <ChevronDown size={32} />
//           </a>
//         </div>
//       </div>

//       <style>{`
//         @keyframes gradient {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
        
//         @keyframes blink {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0; }
//         }
        
//         @keyframes pulse-slow {
//           0%, 100% { opacity: 0.3; transform: scale(1); }
//           50% { opacity: 0.5; transform: scale(1.05); }
//         }
        
//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
        
//         .animate-gradient {
//           animation: gradient 4s ease infinite;
//         }
        
//         .animate-blink {
//           animation: blink 1s step-end infinite;
//         }
        
//         .animate-pulse-slow {
//           animation: pulse-slow 4s ease-in-out infinite;
//         }
        
//         .animate-spin-slow {
//           animation: spin-slow 20s linear infinite;
//         }
//       `}</style>
//     </section>
//   );
// };