import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "alternate";
}

export function Section({
  children,
  className = "",
  id,
  variant = "default",
}: SectionProps) {
  const bgClass =
    variant === "alternate" ? "bg-background-secondary" : "bg-background";

  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${bgClass} ${className}`}
    >
      <div className="container">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 md:mb-16 ${className}`}>
      <h2 className="text-foreground mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg text-foreground-secondary max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
