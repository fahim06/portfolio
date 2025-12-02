import type {Metadata} from "next";
import {Button, Section, SectionHeader} from "@/components/ui";
import {education, experience, ExperienceEntry, personalInfo} from "@/data";

export const metadata: Metadata = {
    title: "Experience",
    description:
        "My professional experience and educational background as a software engineer.",
};

// Timeline Item Component
function TimelineItem({entry}: { entry: ExperienceEntry }) {
    return (
        <article className="relative pl-8 pb-12 last:pb-0">
            {/* Timeline line */}
            <div className="absolute left-0 top-2 bottom-0 w-px bg-border last:hidden"/>

            {/* Timeline dot */}
            <div
                className={`absolute left-0 top-2 w-2 h-2 rounded-full -translate-x-[3px] ${
                    entry.type === "work" ? "bg-accent" : "bg-foreground-muted"
                }`}
            />

            {/* Content */}
            <div
                className="bg-background border border-border rounded-xl p-6 hover:border-border-hover hover:shadow-md transition-all duration-300">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                        <h3 className="text-lg font-semibold text-foreground">
                            {entry.role}
                        </h3>
                        <p className="text-accent font-medium">{entry.company}</p>
                    </div>
                    <div className="text-sm text-foreground-muted md:text-right">
                        <p>{entry.period}</p>
                        <p>{entry.location}</p>
                    </div>
                </div>

                {/* Description */}
                <p className="text-foreground-secondary mb-4">{entry.description}</p>

                {/* Responsibilities */}
                <div className="mb-4">
                    <h4 className="text-sm font-medium text-foreground uppercase tracking-wider mb-2">
                        Key Responsibilities
                    </h4>
                    <ul className="space-y-2">
                        {entry.responsibilities.map((responsibility, index) => (
                            <li
                                key={index}
                                className="text-sm text-foreground-secondary flex items-start gap-2"
                            >
                                <svg
                                    className="w-4 h-4 text-accent mt-0.5 shrink-0"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span>{responsibility}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Impact */}
                <div className="mb-4">
                    <h4 className="text-sm font-medium text-foreground uppercase tracking-wider mb-2">
                        Impact
                    </h4>
                    <p className="text-sm text-foreground-secondary">{entry.impact}</p>
                </div>

                {/* Technologies */}
                {entry.technologies && entry.technologies.length > 0 && (
                    <div>
                        <h4 className="text-sm font-medium text-foreground uppercase tracking-wider mb-2">
                            Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {entry.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="text-xs px-2.5 py-1 bg-background-secondary border border-border rounded-md text-foreground-secondary"
                                >
                  {tech}
                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </article>
    );
}

// Experience Section
function ExperienceSection() {
    return (
        <Section>
            <SectionHeader
                title="Professional Experience"
                subtitle="My journey building software across different companies and domains."
            />

            <div className="max-w-3xl">
                {experience.map((entry) => (
                    <TimelineItem key={entry.id} entry={entry}/>
                ))}
            </div>
        </Section>
    );
}

// Education Section
function EducationSection() {
    return (
        <Section variant="alternate">
            <SectionHeader
                title="Education"
                subtitle="Academic foundation in computer science and software engineering."
            />

            <div className="max-w-3xl">
                {education.map((entry) => (
                    <TimelineItem key={entry.id} entry={entry}/>
                ))}
            </div>
        </Section>
    );
}

// CV Download Section
function CVSection() {
    return (
        <Section>
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl mb-4">Download My CV</h2>
                <p className="text-foreground-secondary mb-8">
                    Get a comprehensive overview of my experience, skills, and
                    qualifications in a downloadable format.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button href={personalInfo.cvUrl} size="lg" isExternal>
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
                        Download CV (PDF)
                    </Button>
                    <Button href="/contact" variant="secondary" size="lg">
                        Contact Me
                    </Button>
                </div>
            </div>
        </Section>
    );
}

export default function ExperiencePage() {
    return (
        <>
            <ExperienceSection/>
            <EducationSection/>
            <CVSection/>
        </>
    );
}
