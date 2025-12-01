import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui";
import { projects, Project } from "@/data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore my portfolio of software projects, including case studies with technical approaches and outcomes.",
};

// Project Card Component
function ProjectCard({ project, isHighlighted = false }: { project: Project; isHighlighted?: boolean }) {
  return (
    <article className={`bg-background border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 ${
      isHighlighted
        ? "border-accent border-2 relative"
        : "border-border hover:border-border-hover"
    }`}>
      {/* Highlight badge */}
      {isHighlighted && (
        <div className="absolute top-4 right-4 bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
          ⭐ Highlighted
        </div>
      )}
      {/* Header */}
      <div className={`p-6 md:p-8 border-b ${isHighlighted ? "border-accent/30" : "border-border"}`}>
        <div className="flex items-start justify-between mb-4">
          <span className="text-xs font-medium text-accent uppercase tracking-wider">
            {project.category}
          </span>
          {project.featured && !isHighlighted && (
            <span className="text-xs font-medium text-foreground-muted bg-background-secondary px-2 py-1 rounded">
              Featured
            </span>
          )}
        </div>
        <h2 className={`font-semibold text-foreground mb-3 ${isHighlighted ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"}`}>
          {project.title}
        </h2>
        <p className={`text-foreground-secondary ${isHighlighted ? "text-lg" : ""}`}>{project.summary}</p>
      </div>

      {/* Body - Case Study Format */}
      <div className="p-6 md:p-8 space-y-6">
        {/* Problem */}
        <div>
          <h3 className="text-sm font-medium text-foreground uppercase tracking-wider mb-2">
            The Problem
          </h3>
          <p className="text-foreground-secondary text-sm leading-relaxed">
            {project.problem}
          </p>
        </div>

        {/* Approach */}
        <div>
          <h3 className="text-sm font-medium text-foreground uppercase tracking-wider mb-2">
            Technical Approach
          </h3>
          <p className="text-foreground-secondary text-sm leading-relaxed">
            {project.approach}
          </p>
        </div>

        {/* Outcome */}
        <div>
          <h3 className="text-sm font-medium text-foreground uppercase tracking-wider mb-2">
            Outcome
          </h3>
          <p className="text-foreground-secondary text-sm leading-relaxed">
            {project.outcome}
          </p>
        </div>

        {/* Stack */}
        <div>
          <h3 className="text-sm font-medium text-foreground uppercase tracking-wider mb-3">
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2.5 py-1 bg-background-secondary border border-border rounded-md text-foreground-secondary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer - Links */}
      <div className="px-6 md:px-8 py-4 bg-background-secondary border-t border-border flex items-center gap-6">
        {project.links.demo && (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-foreground-secondary hover:text-accent inline-flex items-center gap-2 transition-colors"
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
            className="text-sm text-foreground-secondary hover:text-accent inline-flex items-center gap-2 transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            View Source
          </a>
        )}
        {project.links.case_study && (
          <a
            href={project.links.case_study}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-foreground-secondary hover:text-accent inline-flex items-center gap-2 transition-colors"
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
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Case Study
          </a>
        )}
      </div>
    </article>
  );
}

export default function ProjectsPage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <>
      {/* Featured Projects */}
      <Section>
        <SectionHeader
          title="Projects"
          subtitle="A selection of projects that showcase my approach to problem-solving and technical implementation."
        />

        <div className="space-y-12">
          {/* Featured */}
          <div>
            <h3 className="text-sm font-medium text-accent uppercase tracking-wider mb-6">
              Featured Work
            </h3>
            <div className="grid gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  isHighlighted={project.highlight}
                />
              ))}
            </div>
          </div>

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <div>
              <h3 className="text-sm font-medium text-foreground-muted uppercase tracking-wider mb-6">
                Other Projects
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {otherProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          )}
        </div>
      </Section>

      {/* Call to Action */}
      <Section variant="alternate">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl mb-4">Interested in working together?</h2>
          <p className="text-foreground-secondary mb-6">
            I&apos;m always looking for new challenges and opportunities to build
            meaningful software. Let&apos;s discuss how I can contribute to your next project.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>
      </Section>
    </>
  );
}
