import Link from "next/link";
import { Section, Button } from "@/components/ui";

export default function NotFound() {
  return (
    <Section>
      <div className="text-center max-w-xl mx-auto py-16">
        <p className="text-8xl font-bold text-accent mb-4">404</p>
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-foreground-secondary mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/" size="lg">
            Go Home
          </Button>
          <Button href="/contact" variant="secondary" size="lg">
            Contact Me
          </Button>
        </div>
      </div>
    </Section>
  );
}
