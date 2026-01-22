'use client';

import Image from "next/image";
import {Button} from "@/components/ui";
import {personalInfo} from "@/data";
import {motion} from "framer-motion";

// Animation variants
const containerVariants = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
        },
    },
};

// Hero Section
function HeroSectionWrapper() {
    return (
        <section className="relative py-24 md:py-32 lg:py-40 bg-background overflow-hidden" suppressHydrationWarning>
            <div className="container relative">
                <motion.div
                    className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-16"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Text Content */}
                    <motion.div className="max-w-2xl lg:flex-1" variants={itemVariants}>
                        {/* Greeting */}
                        <p className="text-accent font-medium mb-4">
                            Hello, I&apos;m {personalInfo.name}
                        </p>

                        {/* Main Headline */}
                        <h1 className="mb-6">
                            {personalInfo.headline}
                        </h1>

                        {/* Subheadline */}
                        <p className="text-xl md:text-2xl text-foreground-secondary mb-8 leading-relaxed">
                            {personalInfo.subheadline}
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-4">
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
                    </motion.div>

                    {/* Profile Photo */}
                    <motion.div
                        className="flex justify-center lg:justify-end"
                        variants={itemVariants}
                    >
                        <div className="relative group">
                            {/* Decorative ring - responsive */}
                            <div
                                className="absolute -inset-1.5 sm:-inset-2 md:-inset-3 bg-gradient-to-br from-accent/20 via-accent/10 to-transparent rounded-full blur-sm group-hover:from-accent/30 transition-all duration-300"/>
                            {/* Photo container - fully responsive */}
                            <div
                                className="relative w-40 h-40 xs:w-48 xs:h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden border-2 sm:border-4 border-background shadow-xl sm:shadow-2xl ring-1 sm:ring-2 ring-accent/20">
                                <Image
                                    src={personalInfo.heroImage.url}
                                    alt={personalInfo.heroImage.alt}
                                    fill
                                    priority
                                    className="object-cover"
                                    sizes="(max-width: 480px) 160px, (max-width: 640px) 192px, (max-width: 768px) 224px, (max-width: 1024px) 256px, (max-width: 1280px) 288px, 320px"
                                />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default HeroSectionWrapper;