import { Github, Linkedin, Mail, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <a href="#" className="text-xl font-bold text-gradient font-mono">
              {"<AG />"}
            </a>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/geniusff676"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/anmol-garg-7ba021261"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:anmolgarg1422@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              © {currentYear} Made while 
  <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text font-semibold">
    vibing
  </span> 
  nonstop – 
  <span className="bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text font-semibold">
    Anmol Garg
  </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
