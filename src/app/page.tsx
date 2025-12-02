import Link from "next/link";
import Image from "next/image";
import { Button, Section } from "@/components/ui";
import { personalInfo, skills, projects } from "@/data";

// Hero Section
function HeroSection() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 bg-background overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container relative">
        <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="max-w-2xl lg:flex-1">
            {/* Greeting */}
            <p className="text-accent font-medium mb-4 animate-fade-in-up opacity-0">
              Hello, I&apos;m {personalInfo.name}
            </p>

            {/* Main Headline */}
            <h1 className="mb-6 animate-fade-in-up opacity-0 animation-delay-100">
              {personalInfo.headline}
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-foreground-secondary mb-8 leading-relaxed animate-fade-in-up opacity-0 animation-delay-200">
              {personalInfo.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in-up opacity-0 animation-delay-300">
              <Button href="/projects" size="lg">
                View Projects
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Button>
              <Button
                href={personalInfo.cvUrl}
                variant="secondary"
                size="lg"
                download={personalInfo.cvDownloadName}
              >
                <svg
                  className="mr-2 w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download CV
              </Button>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="flex justify-center lg:justify-end animate-fade-in opacity-0 animation-delay-200">
            <div className="relative group">
              {/* Decorative ring - responsive */}
              <div className="absolute -inset-1.5 sm:-inset-2 md:-inset-3 bg-gradient-to-br from-accent/20 via-accent/10 to-transparent rounded-full blur-sm group-hover:from-accent/30 transition-all duration-300" />
              {/* Photo container - fully responsive */}
              <div className="relative w-36 h-36 xs:w-40 xs:h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 rounded-full overflow-hidden border-2 sm:border-4 border-background shadow-xl sm:shadow-2xl ring-1 sm:ring-2 ring-accent/20">
                <Image
                  src={personalInfo.heroImage.url}
                  alt={personalInfo.heroImage.alt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 480px) 144px, (max-width: 640px) 160px, (max-width: 768px) 192px, (max-width: 1024px) 224px, (max-width: 1280px) 256px, 288px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Skills Preview Section
function SkillsPreview() {
  const allSkills = [
    ...skills.languages.slice(0, 3),
    ...skills.frameworks.slice(0, 3),
    ...skills.tools.slice(0, 2),
  ];

  return (
    <Section variant="alternate" id="skills-preview">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div className="max-w-xl">
          <h2 className="text-2xl md:text-3xl mb-4">
            Technologies I work with
          </h2>
          <p className="text-foreground-secondary">
            I focus on modern, battle-tested technologies that enable rapid
            development without sacrificing quality or scalability.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {allSkills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-background border border-border rounded-lg text-sm text-foreground-secondary hover:border-accent hover:text-accent transition-colors duration-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}

// Featured Projects Section
function FeaturedProjects() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <Section id="featured-projects">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
        <div>
          <h2 className="text-2xl md:text-3xl mb-2">Featured Projects</h2>
          <p className="text-foreground-secondary">
            Selected work that demonstrates my approach to solving problems.
          </p>
        </div>
        <Link
          href="/projects"
          className="text-accent hover:text-accent-hover inline-flex items-center gap-1 font-medium"
        >
          View all projects
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {featuredProjects.map((project) => (
          <article
            key={project.id}
            className={`group bg-background-secondary border rounded-xl p-6 md:p-8 hover:shadow-lg transition-all duration-300 ${
              project.highlight
                ? "border-accent border-2 md:col-span-2 relative overflow-hidden"
                : "border-border hover:border-border-hover"
            }`}
          >
            {/* Highlight badge for featured project */}
            {project.highlight && (
              <div className="absolute top-4 right-4 bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
                ⭐ Highlighted
              </div>
            )}
            <div className="mb-4">
              <span className="text-xs font-medium text-accent uppercase tracking-wider">
                {project.category}
              </span>
            </div>
            <h3 className={`font-semibold mb-3 group-hover:text-accent transition-colors ${
              project.highlight ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
            }`}>
              {project.title}
            </h3>
            <p className={`text-foreground-secondary mb-6 ${
              project.highlight ? "text-lg" : "line-clamp-2"
            }`}>
              {project.summary}
            </p>

            {/* Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.stack.slice(0, project.highlight ? 6 : 4).map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2.5 py-1 bg-background border border-border rounded-md text-foreground-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex items-center gap-4">
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground-secondary hover:text-accent inline-flex items-center gap-1 transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Live Demo
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground-secondary hover:text-accent inline-flex items-center gap-1 transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Source
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

// CTA Section
function CTASection() {
  return (
    <Section variant="alternate" id="cta">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl mb-4">Let&apos;s work together</h2>
        <p className="text-foreground-secondary mb-8">
          I&apos;m always interested in discussing new projects, opportunities,
          or how I can help solve challenging technical problems.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/contact" size="lg">
            Get in Touch
          </Button>
          <Button href="/about" variant="secondary" size="lg">
            Learn More About Me
          </Button>
        </div>
      </div>
    </Section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SkillsPreview />
      <FeaturedProjects />
      <CTASection />
    </>
  );
}
