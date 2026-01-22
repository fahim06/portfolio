// =============================================================================
// Personal Information
// =============================================================================

export const personalInfo = {
    name: "Fahim Yusuf",
    title: "Software Engineer & ML Enthusiast",
    location: "Dhaka, Bangladesh",
    email: "fahim.yusuf06@gmail.com",
    headline: "Building intelligent solutions with code and machine learning.",
    subheadline:
        "Software engineer focused on deep learning, computer vision, and building practical applications that tackle everyday challenges.",
    summary: `I'm a software engineer with a strong foundation in computer science and a real interest in machine learning and AI. My work ranges from building full-stack web apps to developing deep learning models for things like medical image analysis and crop classification.

I focus on combining good engineering practices with the latest AI techniques. I've tackled projects from brain tumor detection systems hitting 95% accuracy to complete student management platforms. I build software that works well and actually helps people.

Outside of coding, I'm usually experimenting with new ML approaches, contributing to open-source projects, or diving into my latest research.`,
    cvUrl: "/resume.pdf",
    cvDownloadName: "Fahim-Yusuf-Resume.pdf",
    // Hero section photo (circular, professional headshot)
    heroImage: {
        url: "/images/fahim-hero.jpg",
        alt: "Fahim Yusuf - Software Engineer",
    },
    // About page photo (rectangular, casual/professional)
    aboutImage: {
        url: "/images/fahim-about.jpg",
        alt: "Fahim Yusuf",
    },
};

// =============================================================================
// Navigation Links
// =============================================================================

export const navLinks = [
    {href: "/", label: "Home"},
    {href: "/about", label: "About"},
    {href: "/projects", label: "Projects"},
    {href: "/experience", label: "Experience"},
    {href: "/contact", label: "Contact"},
];

// =============================================================================
// Social Links
// =============================================================================

export const footerLinks = [
    {href: "https://github.com/fahim06", label: "GitHub", external: true},
    {href: "https://www.linkedin.com/in/fahim06/", label: "LinkedIn", external: true},
    {href: "mailto:fahim.yusuf06@gmail.com", label: "Email", external: true},
];

// =============================================================================
// Engineering Values
// =============================================================================

export const engineeringValues = [
    {
        title: "Simplicity First",
        description:
            "Complex problems don't require complex solutions. I prioritize readability and maintainability over clever abstractions.",
    },
    {
        title: "Measure Impact",
        description:
            "Every feature should have a clear purpose. I focus on outcomes—reduced latency, improved user engagement, fewer bugs.",
    },
    {
        title: "Own the Problem",
        description:
            "I don't just implement tickets. I understand the context, question assumptions, and propose better solutions when I see them.",
    },
    {
        title: "Continuous Learning",
        description:
            "Technology evolves quickly. I stay curious, experiment with new tools, and share knowledge with my team.",
    },
];

// =============================================================================
// Skills
// =============================================================================

export const skills = {
    languages: [
        "Python",
        "Java",
        "PHP",
        "C",
        "SQL",
        "HTML",
        "CSS",
    ],
    frameworks: [
        "Django",
        "Django REST Framework",
        "PyTorch",
        "TensorFlow",
        "Keras",
        "Scikit-learn",
        "Bootstrap",
    ],
    databases: [
        "PostgreSQL",
        "MySQL",
        "SQLite",
    ],
    tools: [
        "Git",
        "GitHub Actions",
        "Docker",
        "Jupyter Notebook",
        "VS Code",
        "Vercel",
        "YOLO",
        "OpenCV",
    ],
};

// =============================================================================
// Experience
// =============================================================================

export interface ExperienceEntry {
    id: string;
    company: string;
    role: string;
    location: string;
    period: string;
    type: "work" | "education";
    description: string;
    responsibilities: string[];
    impact: string;
    technologies?: string[];
}

export const experience: ExperienceEntry[] = [
    {
        id: "exp-1",
        company: "Freelance / Personal Projects",
        role: "Full Stack Developer & ML Engineer",
        location: "Remote",
        period: "2021 – Present",
        type: "work",
        description:
            "Building web applications and machine learning solutions for various domains.",
        responsibilities: [
            "Developed full-stack applications using modern web technologies and frameworks",
            "Created deep learning models for image classification and medical diagnosis",
            "Implemented CI/CD pipelines and deployed applications on cloud platforms",
        ],
        impact:
            "Successfully delivered multiple projects including student management systems, task managers, and ML-based classification systems.",
        technologies: ["Python", "Web Frameworks", "Deep Learning", "Databases", "DevOps"],
    },
];

// =============================================================================
// Education
// =============================================================================

export const education: ExperienceEntry[] = [
    {
        id: "edu-1",
        company: "Jahangirnagar University",
        role: "M.Sc. in Computer Science & Engineering",
        location: "Dhaka, Bangladesh",
        period: "2023 – 2025",
        type: "education",
        description:
            "Advanced studies in machine learning, deep learning, and computer vision.",
        responsibilities: [
            "Thesis: Optimizing Citrus Genus Identification using MobileNet and Inception V3",
            "Achieved 99.85% accuracy in citrus classification using deep learning",
            "Research focus on CNN architectures and transfer learning techniques",
        ],
        impact:
            "Successfully completed M.Sc. thesis demonstrating expertise in deep learning for agricultural applications.",
    },
    {
        id: "edu-2",
        company: "Daffodil International University",
        role: "B.Sc. in Computer Science & Engineering",
        location: "Dhaka, Bangladesh",
        period: "2018 – 2022",
        type: "education",
        description:
            "Comprehensive foundation in computer science, software engineering, and AI.",
        responsibilities: [
            "Thesis: Brain Tumor Identification using Deep Learning (VGG-16 achieved 95.21% accuracy)",
            "Studied algorithms, data structures, database systems, and machine learning",
            "Developed multiple software projects including web applications and mobile apps",
        ],
        impact:
            "Graduated with strong foundation in both software development and machine learning research.",
    },
];

// =============================================================================
// Projects
// =============================================================================

/**
 * Represents a portfolio project with detailed information.
 *
 * @property id Unique identifier for the project.
 * @property title The name of the project.
 * @property category The type or domain of the project (e.g., "AI", "Web App").
 * @property summary A brief overview of the project, highlighting its main purpose and scope.
 * @property problem The specific challenge or need that the project addresses.
 * @property approach The methods, technologies, or strategies used to solve the problem.
 * @property outcome The results, impact, or achievements of the project.
 * @property stack List of technologies and tools used in the project.
 * @property links Related links such as demo, GitHub repository, or case study.
 * @property featured Whether the project is featured in the portfolio.
 */
export interface Project {
    id: string;
    title: string;
    category: string;
    summary: string;   // Brief overview of the project
    problem: string;   // The challenge or need addressed
    approach: string;  // Solution or methodology used
    outcome: string;   // Results or impact achieved
    stack: string[];   // Technologies used
    links: {
        demo?: string;
        github?: string;
        case_study?: string;
    };
    featured: boolean;
    highlight?: boolean; // Indicates a project that should receive special emphasis due to strategic importance, recent achievements, or relevance to current goals. Unlike 'featured', which marks projects for general prominence, 'highlight' is used for projects that require additional attention or promotion.
}

export const projects: Project[] = [
    {
        id: "proj-3",
        title: "Student Management System",
        category: "Full Stack Web Development",
        summary:
            "A complete web app for managing students, staff, courses, attendance, and feedback with role-based access.",
        problem:
            "Educational institutions need a centralized system to manage multiple user roles (Admin, Staff, Students), track attendance, handle feedback, and streamline leave management processes.",
        approach:
            "Built a full-stack app with a modern admin dashboard. Added role-based access with separate portals for admins, staff, and students. Created REST APIs, connected to a database, and set up automated deployment.",
        outcome:
            "Delivered a working system with user management, course handling, attendance tracking, feedback collection, leave requests, and secure profiles.",
        stack: ["Python", "Django", "PostgreSQL", "React", "GitHub Actions (CI/CD)"],
        links: {
            github: "https://github.com/fahim06/student_management_system",
        },
        featured: true,
        highlight: true,
    },
    {
        id: "proj-1",
        title: "Brain Tumor Detection",
        category: "Machine Learning / Healthcare",
        summary:
            "Deep learning system for automatic brain tumor detection from MRI scans using neural networks.",
        problem:
            "Brain tumors make up most primary CNS tumors worldwide. Quick and accurate detection via MRI is key for treatment, but manual checks are slow and can miss things.",
        approach:
            "Compared two deep learning models: a custom network and a pre-trained one. Cleaned and prepared the data, trained the models, and checked results with standard metrics.",
        outcome:
            "Hit 95.21% accuracy with strong scores across precision, recall, and F1, proving it works for medical imaging.",
        stack: ["Python", "Deep Learning", "Neural Networks", "Image Processing"],
        links: {
            github: "https://github.com/fahim06/Brain_Tumor",
        },
        featured: true,
    },
    {
        id: "proj-2",
        title: "Citrus Genus Classification",
        category: "Machine Learning / Agriculture",
        summary:
            "M.Sc. thesis optimizing citrus type identification with deep learning and transfer learning.",
        problem:
            "Old ways of identifying citrus are slow and error-prone. The industry needs a fast, reliable automated system for sorting and quality checks.",
        approach:
            "Used a dataset of over 22,000 images across 8 citrus types. Prepped the data with augmentation. Fine-tuned existing models with transfer learning.",
        outcome:
            "Got excellent results: 99.85% accuracy with top scores in precision, recall, and F1 for citrus sorting.",
        stack: ["Python", "Deep Learning", "Transfer Learning", "Image Classification"],
        links: {
            github: "https://github.com/fahim06/Citrus_Classification",
        },
        featured: true,
    },
    {
        id: "proj-4",
        title: "Task Manager",
        category: "Full Stack Web Development",
        summary:
            "A task management app with a web interface and API for teams.",
        problem:
            "Teams need a straightforward task manager with both a web UI and APIs for connecting to other tools.",
        approach:
            "Created a full-stack app with REST APIs. Added CRUD operations, secure config, database connection, and an admin panel.",
        outcome:
            "Built a clean task manager with APIs, web interface, and secure setup for personal or team use.",
        stack: ["Python", "Web Framework", "REST API", "Database"],
        links: {
            github: "https://github.com/fahim06/Task-Manager",
        },
        featured: false,
    },
    {
        id: "proj-5",
        title: "Object Detection System",
        category: "Computer Vision",
        summary:
            "Real-time object detection app using advanced algorithms for video and webcam.",
        problem:
            "Need real-time object detection for video feeds and cameras, useful for security and automation.",
        approach:
            "Built an object detection system for videos and live camera feeds. Used custom model settings for better performance.",
        outcome:
            "Created a working real-time detector that spots and labels multiple objects in video streams accurately.",
        stack: ["Python", "Computer Vision", "Deep Learning"],
        links: {
            github: "https://github.com/fahim06/Object-Detection",
        },
        featured: false,
    },
    {
        id: "proj-6",
        title: "ChatBot",
        category: "Natural Language Processing",
        summary:
            "Conversational AI chatbot for automated customer interactions.",
        problem:
            "Organizations need automated conversational agents to handle common queries and provide instant responses to users.",
        approach:
            "Developed a chatbot with natural language understanding capabilities for handling user queries and providing appropriate responses.",
        outcome:
            "Created a functional chatbot capable of understanding and responding to user inputs in a conversational manner.",
        stack: ["Python", "NLP", "Machine Learning"],
        links: {
            github: "https://github.com/fahim06/ChatBot",
        },
        featured: false,
    },
];

// =============================================================================
// Navigation
// =============================================================================

export const navigation = [
    {href: "/", label: "Home"},
    {href: "/about", label: "About"},
    {href: "/projects", label: "Projects"},
    {href: "/experience", label: "Experience"},
    {href: "/contact", label: "Contact"},
];

// =============================================================================
// Social Links
// =============================================================================

export const socialLinks = [
    {
        name: "GitHub",
        url: "https://github.com/fahim06",
        icon: "github",
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/fahim06/",
        icon: "linkedin",
    },
    {
        name: "Twitter",
        url: "https://twitter.com/fahim1206",
        icon: "twitter",
    },
];
