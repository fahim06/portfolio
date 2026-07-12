export const personalInfo = {
  name: 'Fahim Yusuf',
  title: 'Software Engineer & ML Enthusiast',
  role: 'Software Engineer & ML Enthusiast',
  location: 'Dhaka, Bangladesh',
  email: 'fahim.yusuf06@gmail.com',
  availability: 'Open to opportunities',
  headline: 'Building intelligent solutions with code and machine learning.',
  statement:
    'Software engineer focused on deep learning, computer vision, and building practical applications that tackle everyday challenges.',
  summary: `I'm a software engineer with a strong foundation in computer science and a deep passion for machine learning, deep learning, and AI. My work ranges from building full-stack web apps to developing sophisticated deep learning models for applications like medical image analysis and crop classification.

I focus on combining good engineering practices with the latest AI techniques. I've tackled projects from brain tumor detection systems hitting 95% accuracy to complete student management platforms. I build software that works well and actually helps people.

Outside of coding, I'm usually experimenting with new ML approaches, contributing to open-source projects, or diving into my latest research.`,
  cvUrl: '/resume.pdf',
  cvDownloadName: 'Fahim-Yusuf-Resume.pdf',
  heroImage: { url: '/images/fahim-hero.jpg', alt: 'Fahim Yusuf — Software Engineer' },
  aboutImage: { url: '/images/fahim-about.jpg', alt: 'Fahim Yusuf' },
};

export const engineeringValues = [
  { title: 'Simplicity First', description: "Complex problems don't require complex solutions. I prioritize readability and maintainability over clever abstractions." },
  { title: 'Measure Impact', description: 'Every feature should have a clear purpose. I focus on outcomes—reduced latency, improved user engagement, fewer bugs.' },
  { title: 'Own the Problem', description: "I don't just implement tickets. I understand the context, question assumptions, and propose better solutions when I see them." },
  { title: 'Continuous Learning', description: 'Technology evolves quickly. I stay curious, experiment with new tools, and share knowledge with my team.' },
];

export const skillGroups = [
  { title: 'Languages', items: ['Python', 'JavaScript', 'Java', 'PHP', 'C', 'SQL', 'HTML', 'CSS', 'React'] },
  { title: 'Frameworks & ML', items: ['React', 'Django', 'Django REST Framework', 'PyTorch', 'TensorFlow', 'Keras', 'Scikit-learn', 'Bootstrap'] },
  { title: 'Databases', items: ['PostgreSQL', 'MySQL', 'SQLite'] },
  { title: 'Tools & Platforms', items: ['Git', 'GitHub Actions', 'Docker', 'Jupyter Notebook', 'VS Code', 'Vercel', 'YOLO', 'OpenCV'] },
];

export const experience = [
  {
    id: 'exp-1',
    company: 'Freelance / Personal Projects',
    role: 'Full Stack Developer & ML Engineer',
    location: 'Remote',
    period: '2021 – Present',
    description: 'Building web applications and machine learning solutions for various domains.',
    responsibilities: [
      'Developed full-stack applications using modern web technologies and frameworks',
      'Created deep learning models for image classification and medical diagnosis',
      'Implemented CI/CD pipelines and deployed applications on cloud platforms',
    ],
    impact: 'Successfully delivered multiple projects including student management systems, task managers, and ML-based classification systems.',
    technologies: ['Python', 'Web Frameworks', 'Deep Learning', 'Databases', 'DevOps'],
    placeholder: false,
  },
  {
    id: 'exp-2',
    company: 'SkyTech Global LTD',
    role: 'Trainee',
    location: '',
    period: '',
    description: '',
    responsibilities: [],
    impact: '',
    technologies: [],
    placeholder: true,
  },
];

export const education = [
  {
    id: 'edu-1',
    institution: 'Jahangirnagar University',
    degree: 'M.Sc. in Computer Science & Engineering',
    location: 'Dhaka, Bangladesh',
    period: '2023 – 2025',
    description: 'Advanced studies in machine learning, deep learning, and computer vision.',
    highlights: [
      'Thesis: Optimizing Citrus Genus Identification using MobileNet and Inception V3',
      'Achieved 99.85% accuracy in citrus classification using deep learning',
      'Research focus on CNN architectures and transfer learning techniques',
    ],
  },
  {
    id: 'edu-2',
    institution: 'Daffodil International University',
    degree: 'B.Sc. in Computer Science & Engineering',
    location: 'Dhaka, Bangladesh',
    period: '2018 – 2022',
    description: 'Comprehensive foundation in computer science, software engineering, and AI.',
    highlights: [
      'Thesis: Brain Tumor Identification using Deep Learning (VGG-16 achieved 95.21% accuracy)',
      'Studied algorithms, data structures, database systems, and machine learning',
      'Developed multiple software projects including web applications and mobile apps',
    ],
  },
];

export const projects = [
  {
    id: 'proj-3',
    title: 'Student Management System',
    category: 'Full Stack Web Development',
    summary: 'A complete web app for managing students, staff, courses, attendance, and feedback with role-based access.',
    problem: 'Educational institutions need a centralized system to manage multiple user roles (Admin, Staff, Students), track attendance, handle feedback, and streamline leave management processes.',
    approach: 'Built a full-stack app with a modern admin dashboard. Added role-based access with separate portals for admins, staff, and students. Created REST APIs, connected to a database, and set up automated deployment.',
    outcome: 'Delivered a working system with user management, course handling, attendance tracking, feedback collection, leave requests, and secure profiles.',
    stack: ['Python', 'Django', 'PostgreSQL', 'React', 'GitHub Actions (CI/CD)'],
    links: { github: 'https://github.com/fahim06/student_management_system', demo: '', case_study: '' },
    featured: true,
    highlight: true,
  },
  {
    id: 'proj-1',
    title: 'Brain Tumor Detection',
    category: 'Machine Learning / Healthcare',
    summary: 'Deep learning system for automatic brain tumor detection from MRI scans using neural networks.',
    problem: 'Brain tumors make up most primary CNS tumors worldwide. Quick and accurate detection via MRI is key for treatment, but manual checks are slow and can miss things.',
    approach: 'Compared two deep learning models: a custom network and a pre-trained one. Cleaned and prepared the data, trained the models, and checked results with standard metrics.',
    outcome: 'Hit 95.21% accuracy with strong scores across precision, recall, and F1, proving it works for medical imaging.',
    stack: ['Python', 'Deep Learning', 'Neural Networks', 'Image Processing'],
    links: { github: 'https://github.com/fahim06/Brain_Tumor', demo: '', case_study: '' },
    featured: true,
    highlight: false,
  },
  {
    id: 'proj-2',
    title: 'Citrus Genus Classification',
    category: 'Machine Learning / Agriculture',
    summary: 'M.Sc. thesis optimizing citrus type identification with deep learning and transfer learning.',
    problem: 'Old ways of identifying citrus are slow and error-prone. The industry needs a fast, reliable automated system for sorting and quality checks.',
    approach: 'Used a dataset of over 22,000 images across 8 citrus types. Prepped the data with augmentation. Fine-tuned existing models with transfer learning.',
    outcome: 'Got excellent results: 99.85% accuracy with top scores in precision, recall, and F1 for citrus sorting.',
    stack: ['Python', 'Deep Learning', 'Transfer Learning', 'Image Classification'],
    links: { github: 'https://github.com/fahim06/Citrus_Classification', demo: '', case_study: '' },
    featured: true,
    highlight: false,
  },
  {
    id: 'proj-4',
    title: 'Task Manager',
    category: 'Full Stack Web Development',
    summary: 'A task management app with a web interface and API for teams.',
    problem: 'Teams need a straightforward task manager with both a web UI and APIs for connecting to other tools.',
    approach: 'Created a full-stack app with REST APIs. Added CRUD operations, secure config, database connection, and an admin panel.',
    outcome: 'Built a clean task manager with APIs, web interface, and secure setup for personal or team use.',
    stack: ['Python', 'Web Framework', 'REST API', 'Database'],
    links: { github: 'https://github.com/fahim06/Task-Manager', demo: '', case_study: '' },
    featured: false,
    highlight: false,
  },
  {
    id: 'proj-5',
    title: 'Object Detection System',
    category: 'Computer Vision',
    summary: 'Real-time object detection app using advanced algorithms for video and webcam.',
    problem: 'Need real-time object detection for video feeds and cameras, useful for security and automation.',
    approach: 'Built an object detection system for videos and live camera feeds. Used custom model settings for better performance.',
    outcome: 'Created a working real-time detector that spots and labels multiple objects in video streams accurately.',
    stack: ['Python', 'Computer Vision', 'Deep Learning'],
    links: { github: 'https://github.com/fahim06/Object-Detection', demo: '', case_study: '' },
    featured: false,
    highlight: false,
  },
  {
    id: 'proj-6',
    title: 'ChatBot',
    category: 'Natural Language Processing',
    summary: 'Conversational AI chatbot for automated customer interactions.',
    problem: 'Organizations need automated conversational agents to handle common queries and provide instant responses to users.',
    approach: 'Developed a chatbot with natural language understanding capabilities for handling user queries and providing appropriate responses.',
    outcome: 'Created a functional chatbot capable of understanding and responding to user inputs in a conversational manner.',
    stack: ['Python', 'NLP', 'Machine Learning'],
    links: { github: 'https://github.com/fahim06/ChatBot', demo: '', case_study: '' },
    featured: false,
    highlight: false,
  },
];
