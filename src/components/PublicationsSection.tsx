
import { BookOpen, Award, Medal, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const publications = [
  {
    title: "Utilizing Deep Learning for the Classification of Multiple Diseases Based on Medical Images",
    venue: "Maitri-2024 (NIT Srinagar)",
    type: "Published Paper",
    // <-- published paper link (you provided this drive link earlier)
    link: "https://doi.org/10.1007/978-981-96-7614-9_13",
  },
  {
    title: "Lumpy Skin Disease Detection in Cattle",
    venue: "Doctoral Symposium on Computational Intelligence",
    type: "Presented Paper",
    // still under publication / no public link yet
    link: null,
  },
];

const achievements = [
  {
    icon: Award,
    title: "GATE DA 2025 Qualified",
    description: "Qualified Graduate Aptitude Test in Engineering - Data Science & AI",
    // GATE score link you provided earlier in the resume
    link: "https://drive.google.com/file/d/16uMm1mLJsVzKmG_sJPET2XbfrC2W62pe/view?usp=drive_link",
  },
  {
    icon: Medal,
    title: "Project Gallery Winner",
    description: "Winner at College Technical Fest Competition",
    // if you have a link to the gallery or announcement, add it; otherwise keep null
    link: "https://drive.google.com/file/d/1W3KPKsTwt9Ex6up2b5d_yiJ7GW3cBRvZ/view",
  },
  {
    icon: Medal,
    title: "College-level Hackathon Winner",
    description: "First prize in college hackathon for AI-based solution",
    link: "/anmol-portfolio/college_hackathon.pdf",
  },
];

const certifications = [
  {
    title: "Deep Learning",
    issuer: "NPTEL – IIT Ropar",
    // you included an NPTEL certificate link previously
    link: "/anmol-portfolio/NPTEL_DL_certificate.jpeg",
  },
  {
    title: "DGCA Remote Pilot Certificate",
    issuer: "Directorate General of Civil Aviation",
    link: "/anmol-portfolio/rpc.pdf",
  },
  {
    title: "Drone Bootcamp",
    issuer: "IIT Mandi",
    link: "/anmol-portfolio/drone_bootcamp_certificate.pdf",
  },
  {
    title: "Python Certificate",
    issuer: "IIT Bombay — Spoken Tutorial",
    link: "/anmol-portfolio/python_certificate.pdf",
  },
  {
    title: "AI/ML Workshop",
    issuer: "IIT Mandi",
    link: "/anmol-portfolio/aiml_certificate.pdf",
  },
];

export const PublicationsSection = () => {
  const openInNewTab = (url: string | null, fallbackMsg?: string) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      alert(fallbackMsg ?? "Link not available yet.");
    }
  };

  return (
    <section id="research-achievements" className="section-padding relative">

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-lg">05.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Research & Achievements</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Publications (left / main) */}
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <BookOpen className="text-primary" size={20} />
                Research Publications
              </h3>

              <div className="space-y-4">
                {publications.map((pub, index) => (
                  <div key={index} className="glass rounded-lg p-5 glass-hover">
                    <div className="flex items-start gap-3">
                      <FileText className="text-primary mt-1 flex-shrink-0" size={20} />
                      <div className="flex-1">
                        <h4 className="text-foreground font-medium mb-1">{pub.title}</h4>
                        <p className="text-muted-foreground text-sm">{pub.venue}</p>
                        <span className="inline-block mt-2 px-2 py-0.5 text-xs font-mono bg-primary/10 text-primary rounded">
                          {pub.type}
                        </span>
                      </div>

                      {/* View Paper button only if link exists */}
                      <div className="ml-4 self-start">
                        {pub.link ? (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => openInNewTab(pub.link)}
                          >
                            View Paper
                          </Button>
                        ) : (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => alert("Going to be published soon!")}
                          >
                            View Paper
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Achievements */}
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2 pt-6">
                <Award className="text-accent" size={20} />
                Achievements
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="glass rounded-lg p-5 glass-hover flex items-start justify-between"
                  >
                    <div>
                      <achievement.icon className="text-accent mb-3" size={24} />
                      <h4 className="text-foreground font-medium mb-1">{achievement.title}</h4>
                      <p className="text-muted-foreground text-sm">{achievement.description}</p>
                    </div>

                    <div className="self-center">
                      {achievement.link ? (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => openInNewTab(achievement.link)}
                        >
                          View
                        </Button>
                      ) : (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => alert("No link available for this achievement.")}
                        >
                          View
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications (right column) */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Medal className="text-primary" size={20} />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="glass rounded-lg p-4 glass-hover flex items-center justify-between">
                    <div>
                      <h4 className="text-foreground font-medium mb-1">{cert.title}</h4>
                      <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                    </div>
                    <div>
                      {cert.link ? (
                        <Button variant="outline" size="sm" onClick={() => openInNewTab(cert.link)}>
                          View Certificate
                        </Button>
                      ) : (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => alert("Certificate not available online yet.")}
                        >
                          View Certificate
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
