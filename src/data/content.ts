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
    "Software engineer passionate about deep learning, computer vision, and creating impactful applications that solve real-world problems.",
  summary: `I'm a software engineer with a strong foundation in computer science and a deep passion for machine learning and artificial intelligence. My journey spans from building full-stack web applications to developing deep learning models for medical image analysis and agricultural classification.

My approach combines solid engineering principles with cutting-edge AI research. I've worked on projects ranging from brain tumor detection systems achieving 95% accuracy to comprehensive student management platforms. I believe in building software that not only works but makes a meaningful difference.

When I'm not coding, I'm usually exploring new ML architectures, contributing to open-source projects, or working on my next thesis research.`,
  cvUrl: "/resume.pdf",
  cvDownloadName: "Fahim-Yusuf-Resume.pdf",
  // Hero section photo (circular, professional headshot)
  heroImage: {
    url: "/images/fahim-hero.webp",
    alt: "Fahim Yusuf - Software Engineer",
  },
  // About page photo (rectangular, casual/professional)
  aboutImage: {
    url: "/images/fahim-about.webp",
    alt: "Fahim Yusuf",
  },
};

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
      "Comprehensive web application for managing students, staff, courses, attendance, and feedback with role-based access control.",
    problem:
      "Educational institutions need a centralized system to manage multiple user roles (Admin, Staff, Students), track attendance, handle feedback, and streamline leave management processes.",
    approach:
      "Built a full-stack application with a modern admin dashboard for the frontend. Implemented role-based access control with dedicated portals for administrators, staff, and students. Created RESTful APIs, integrated relational database, and set up automated CI/CD pipelines.",
    outcome:
      "Delivered a production-ready system with features including user management, course/subject management, attendance tracking with interactive UI, feedback system, leave management, and profile management with secure authentication.",
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
      "Deep learning system for automated brain tumor identification from MRI scans using neural network architectures.",
    problem:
      "Brain tumors account for 85-90% of all primary CNS tumors globally. Early and accurate detection using non-invasive methods like MRI is crucial for effective treatment, but manual analysis is time-consuming and prone to human error.",
    approach:
      "Implemented and compared two deep learning architectures: a custom neural network and a pre-trained model. Applied rigorous data preprocessing, trained on a curated dataset, and evaluated using confusion matrices and standard metrics including accuracy, precision, recall, and F1-score.",
    outcome:
      "Achieved 95.21% accuracy, 96.02% specificity, 90.53% precision, and 91.85% F1-score, demonstrating superior performance for medical image classification.",
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
      "M.Sc. thesis project optimizing citrus genus identification using deep learning architectures and transfer learning.",
    problem:
      "Traditional methods for citrus identification are slow, labor-intensive, and prone to human error. The citrus industry needs an automated, reliable system for accurate classification to optimize market value and quality control.",
    approach:
      "Utilized a dataset of 22,348 images covering 8 citrus genera. Applied comprehensive data preprocessing and augmentation techniques. Fine-tuned pre-trained models using transfer learning for optimal feature extraction.",
    outcome:
      "Achieved exceptional results with 99.85% accuracy, 99.66% precision, 99.52% recall, and 0.99 F1-score for citrus classification.",
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
      "RESTful task management application with web interface and API endpoints.",
    problem:
      "Teams need a simple yet powerful task management tool with both a web interface and programmatic API access for integration with other tools.",
    approach:
      "Built a full-stack application with REST API endpoints. Implemented CRUD operations, environment-based configuration for security, database integration, and admin interface for easy management.",
    outcome:
      "Created a clean, functional task manager with RESTful API endpoints, web interface, and secure configuration management suitable for personal and team use.",
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
      "Real-time object detection application using state-of-the-art detection algorithms.",
    problem:
      "Need for real-time object detection capability for video streams and webcam feeds for various applications including surveillance and automation.",
    approach:
      "Implemented object detection system capable of processing video files and live webcam feeds. Configured custom model weights for optimized detection performance.",
    outcome:
      "Built a functional real-time object detection system that can identify and classify multiple objects in video streams with high accuracy.",
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
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
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
