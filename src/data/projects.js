export const projects = [
  {
    id: "proj-neurolens",
    title: "NeuroLens",
    category:
      "AI Vision Platform · Computer Vision · Deep Learning · Explainable AI",
    status: "Beta Development",
    summary:
      "NeuroLens is a modular AI vision platform that intelligently analyzes uploaded images, identifies their domain, routes them to the most suitable deep learning model, and delivers explainable predictions through a unified inference pipeline. Designed for scalability, it supports multi-domain AI applications across healthcare, agriculture, biodiversity, and intelligent image analysis.",
    problem:
      "Traditional image classification systems rely on a single model for every input, limiting accuracy, scalability, and maintainability across diverse image domains.",
    solution:
      "NeuroLens uses an intelligent routing engine to detect an image's domain, select the optimal AI model, evaluate prediction confidence, and generate explainable results through a modular, extensible architecture.",
    architecture:
      "Django + Django REST Framework ↔ AI Inference Engine ↔ Multi-Model Services ↔ PostgreSQL, containerized with Docker and automated using GitHub Actions.",
    highlights: [
      "Intelligent multi-domain AI with dynamic model orchestration.",
      "Scalable modular architecture for seamless model expansion.",
      "Confidence-aware inference with uncertainty estimation.",
      "Explainable AI through Grad-CAM visual reasoning.",
      "Semantic similarity retrieval for intelligent decision support.",
      "Domain-aware biological taxonomy enrichment.",
      "Comprehensive analytics for model and system performance.",
      "Enterprise-grade security with JWT authentication and RBAC.",
      "Cloud-native deployment powered by Docker and CI/CD automation.",
    ],
    roadmap: [
      "Expand AI models and supported domains.",
      "Introduce real-time video and live inference.",
      "Add asynchronous processing with Celery and Redis.",
      "Implement model versioning and benchmarking.",
      "Integrate multimodal AI for image and text understanding.",
      "Enhance enterprise security and API management.",
    ],
    lessons:
      "Strengthened expertise in AI system design, full-stack Django development, multi-model machine learning, explainable AI, containerized deployment, and scalable production-ready architectures.",
    stack: [
      "Python",
      "Django",
      "Django REST Framework",
      "Tailwind CSS",
      "JavaScript (ES6+)",
      "TensorFlow",
      "Keras",
      "NumPy",
      "Pillow",
      "Computer Vision",
      "PostgreSQL",
      "Celery",
      "Redis",
      "Docker",
      "Docker Compose",
      "GitHub Actions (CI/CD)",
    ],
    links: {
      github: "https://github.com/fahim06/NeuroLens",
      demo: "",
      case_study: "",
    },
    featured: true,
    highlight: true,
    flagship: true,
  },
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
    stack: [
      "Python",
      "Django",
      "PostgreSQL",
      "React",
      "GitHub Actions (CI/CD)",
    ],
    links: {
      github: "https://github.com/fahim06/student_management_system",
      demo: "",
      case_study: "",
    },
    featured: false,
    highlight: false,
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
      demo: "",
      case_study: "",
    },
    featured: false,
    highlight: false,
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
    stack: [
      "Python",
      "Deep Learning",
      "Transfer Learning",
      "Image Classification",
    ],
    links: {
      github: "https://github.com/fahim06/Citrus_Classification",
      demo: "",
      case_study: "",
    },
    featured: false,
    highlight: false,
  },
  {
    id: "proj-4",
    title: "Task Manager",
    category: "Full Stack Web Development",
    summary: "A task management app with a web interface and API for teams.",
    problem:
      "Teams need a straightforward task manager with both a web UI and APIs for connecting to other tools.",
    approach:
      "Created a full-stack app with REST APIs. Added CRUD operations, secure config, database connection, and an admin panel.",
    outcome:
      "Built a clean task manager with APIs, web interface, and secure setup for personal or team use.",
    stack: ["Python", "Web Framework", "REST API", "Database"],
    links: {
      github: "https://github.com/fahim06/Task-Manager",
      demo: "",
      case_study: "",
    },
    featured: false,
    highlight: false,
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
      demo: "",
      case_study: "",
    },
    featured: false,
    highlight: false,
  },
  {
    id: "proj-6",
    title: "ChatBot",
    category: "Natural Language Processing",
    summary: "Conversational AI chatbot for automated customer interactions.",
    problem:
      "Organizations need automated conversational agents to handle common queries and provide instant responses to users.",
    approach:
      "Developed a chatbot with natural language understanding capabilities for handling user queries and providing appropriate responses.",
    outcome:
      "Created a functional chatbot capable of understanding and responding to user inputs in a conversational manner.",
    stack: ["Python", "NLP", "Machine Learning"],
    links: {
      github: "https://github.com/fahim06/ChatBot",
      demo: "",
      case_study: "",
    },
    featured: false,
    highlight: false,
  },
];
