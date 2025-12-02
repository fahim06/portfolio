import type { Metadata } from "next";
import Image from "next/image";
import { Section, SectionHeader } from "@/components/ui";
import { personalInfo, engineeringValues, skills } from "@/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about my background, engineering philosophy, and what drives me as a software engineer.",
};

// Biography Section
function BiographySection() {
  const paragraphs = personalInfo.summary.split("\n\n");

  return (
    <Section>
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-center md:items-start">
        {/* Photo Column - Responsive */}
        <div className="flex-shrink-0 flex justify-center">
          <div className="relative group">
            {/* Decorative background - responsive */}
            <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-accent/5 rounded-xl sm:rounded-2xl -rotate-2 sm:-rotate-3 group-hover:rotate-0 transition-transform duration-300" />
            <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-accent/5 rounded-xl sm:rounded-2xl rotate-2 sm:rotate-3 group-hover:rotate-0 transition-transform duration-300" />
            {/* Photo container - fully responsive */}
            <div className="relative w-48 h-60 xs:w-56 xs:h-72 sm:w-64 sm:h-80 md:w-56 md:h-72 lg:w-64 lg:h-80 xl:w-72 xl:h-96 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl border border-border sm:border-2">
              <Image
                src={personalInfo.aboutImage.url}
                alt={personalInfo.aboutImage.alt}
                fill
                className="object-cover"
                sizes="(max-width: 480px) 192px, (max-width: 640px) 224px, (max-width: 768px) 256px, (max-width: 1024px) 224px, (max-width: 1280px) 256px, 288px"
              />
            </div>
          </div>
        </div>

        {/* Text Column */}
        <div className="flex-1 max-w-2xl">
          <SectionHeader
            title="About Me"
            subtitle="Engineer, problem solver, and lifelong learner."
          />

          <div className="space-y-4 sm:space-y-6">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="text-base sm:text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

// Engineering Values Section
function ValuesSection() {
  return (
    <Section variant="alternate">
      <SectionHeader
        title="Engineering Values"
        subtitle="The principles that guide how I approach building software."
      />

      <div className="grid md:grid-cols-2 gap-8">
        {engineeringValues.map((value, index) => (
          <div
            key={index}
            className="relative pl-6 border-l-2 border-accent/30 hover:border-accent transition-colors duration-300"
          >
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {value.title}
            </h3>
            <p className="text-foreground-secondary">{value.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

// Skills Section
function SkillsSection() {
  const skillCategories = [
    { title: "Languages", items: skills.languages },
    { title: "Frameworks & Libraries", items: skills.frameworks },
    { title: "Databases", items: skills.databases },
    { title: "Tools & Platforms", items: skills.tools },
  ];

  return (
    <Section>
      <SectionHeader
        title="Technical Skills"
        subtitle="Technologies I use to bring ideas to life."
      />

      <div className="grid md:grid-cols-2 gap-12">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h3 className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-background-secondary border border-border rounded-md text-sm text-foreground hover:border-accent hover:text-accent transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

// Personal Note Section
function PersonalNoteSection() {
  return (
    <Section variant="alternate">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl mb-6">Beyond the Code</h2>
        <p className="text-lg text-foreground-secondary leading-relaxed mb-6">
          When I step away from the keyboard, you&apos;ll find me exploring new coffee
          shops, reading about system design and distributed systems, or hiking
          through local trails. I believe that creativity in engineering comes from
          having diverse experiences and staying curious about the world around us.
        </p>
        <p className="text-lg text-foreground-secondary leading-relaxed">
          I&apos;m always open to connecting with fellow engineers, discussing
          interesting technical challenges, or exploring potential collaborations.
          Feel free to reach out—I&apos;d love to hear from you.
        </p>
      </div>
    </Section>
  );
}

export default function AboutPage() {
  return (
    <>
      <BiographySection />
      <ValuesSection />
      <SkillsSection />
      <PersonalNoteSection />
    </>
  );
}
