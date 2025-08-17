import React, { useState, useEffect, useRef } from 'react';

// --- Data is now included directly in the file ---
const portfolioData = {
  "name": "John Doe",
  "contactEmail": "hello@johndoe.com",
  "socialLinks": {
    "github": "https://github.com",
    "linkedin": "https://linkedin.com",
    "twitter": "https://twitter.com"
  },
  "hero": {
    "title": "Full Stack Web Developer",
    "subtitle": "I transform ideas into exceptional digital experiences through clean code and innovative design.",
    "terminalCommands": [
      { "command": "$ npx create-next-app@latest", "output": "✓ Project initialized successfully!" },
      { "command": "$ git init && git add .", "output": "Initialized empty Git repository." },
      { "command": "$ npm run dev", "output": "Server running on http://localhost:3000" },
      { "command": "$ npm install react react-dom", "output": "✓ Dependencies installed" }
    ]
  },
  "projects": [
    {
      "id": 1,
      "title": "E-commerce Platform",
      "category": "Web Application",
      "imageUrl": "https://placehold.co/600x400/e2e8f0/334155?text=E-commerce",
      "liveUrl": "#",
      "caseStudy": {
        "description": "A full-featured e-commerce platform built with the MERN stack. It includes product browsing, a shopping cart, user authentication, and an admin panel for managing products and orders. The focus was on creating a seamless and secure shopping experience.",
        "techStack": ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
        "features": ["Secure user authentication (JWT)", "Stripe integration for payments", "Admin dashboard for product management", "Responsive design for all devices"]
      }
    },
    {
      "id": 2,
      "title": "Project Management Tool",
      "category": "SaaS",
      "imageUrl": "https://placehold.co/600x400/e2e8f0/334155?text=SaaS+Tool",
      "liveUrl": "#",
      "caseStudy": {
        "description": "A collaborative project management tool designed to help teams organize tasks, track progress, and communicate effectively. Features include Kanban boards, task assignments, and real-time updates.",
        "techStack": ["React", "Firebase", "GraphQL", "Styled Components"],
        "features": ["Drag-and-drop Kanban boards", "Real-time database with Firestore", "User roles and permissions", "Notifications and activity feeds"]
      }
    },
    {
      "id": 3,
      "title": "Corporate Landing Page",
      "category": "Website",
      "imageUrl": "https://placehold.co/600x400/e2e8f0/334155?text=Landing+Page",
      "liveUrl": "#",
      "caseStudy": {
        "description": "A modern and professional landing page for a tech startup. The goal was to create a visually appealing site that clearly communicates the company's value proposition and drives user sign-ups. Optimized for performance and SEO.",
        "techStack": ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
        "features": ["Fully responsive layout", "Contact form with validation", "Animations on scroll", "Optimized for Core Web Vitals"]
      }
    }
  ],
  "techStack": [
      { 
        "category": "Frontend",
        "description": "Core tools & platforms",
        "technologies": [
            { "name": "HTML5", "icon": "html" },
            { "name": "CSS3", "icon": "css" },
            { "name": "Tailwind CSS", "icon": "tailwind" },
            { "name": "JavaScript (ES6+)", "icon": "js" },
            { "name": "TypeScript", "icon": "ts" },
            { "name": "React", "icon": "react" },
            { "name": "Next.js", "icon": "nextjs" }
        ]
      },
      { 
        "category": "Backend",
        "description": "Core tools & platforms",
        "technologies": [
            { "name": "Node.js", "icon": "node" },
            { "name": "PHP", "icon": "php" },
            { "name": "Laravel", "icon": "laravel" },
            { "name": "WordPress", "icon": "wordpress" },
            { "name": "REST/GraphQL", "icon": "graphql" }
        ]
      },
      { 
        "category": "Databases",
        "description": "Core tools & platforms",
        "technologies": [
            { "name": "MySQL", "icon": "mysql" },
            { "name": "PostgreSQL", "icon": "postgresql" },
            { "name": "Supabase", "icon": "supabase" }
        ]
      },
      { 
        "category": "Build & DevOps",
        "description": "Core tools & platforms",
        "technologies": [
            { "name": "Vite/Webpack", "icon": "vite" },
            { "name": "Git", "icon": "git" },
            { "name": "CI/CD", "icon": "cicd" },
            { "name": "Docker", "icon": "docker" }
        ]
      }
  ],
  "about": {
    "photoUrl": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80",
    "bio": [
      "Hello! I'm John, a passionate web developer with a knack for creating beautiful and functional websites. With over 5 years of experience in the industry, I've had the privilege of working on a diverse range of projects, from small business websites to large-scale enterprise applications.",
      "My goal is to combine my technical skills with a keen eye for design to build products that not only look great but also provide an exceptional user experience."
    ]
  },
  "experience": [
    {
      "role": "Senior Frontend Developer",
      "company": "Tech Solutions Inc.",
      "period": "2021 - Present",
      "description": "Leading the development of client-facing web applications using React and TypeScript, improving performance and user engagement."
    },
    {
      "role": "Web Developer",
      "company": "Digital Crafters Co.",
      "period": "2018 - 2021",
      "description": "Developed and maintained a variety of client websites, focusing on responsive design and cross-browser compatibility."
    }
  ]
};


// --- SVG Icons Component ---
const TechIcons = ({ icon, className }) => {
    const icons = {
        html: <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h18v2H3V3zm2 4h14v14H5V7zm2 2v2h2V9H7zm4 0v2h2V9h-2zm4 0v2h2V9h-2zm-8 4v2h2v-2H7zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2z"/></svg>,
        css: <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h18v2H3V3zm2 4h14v14H5V7zm8 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>,
        js: <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-1 14.5a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5zm4-3a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5z"/></svg>,
        react: <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm-4.5-8a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5zm9 0a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5z"/></svg>,
        node: <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-2 14.59L8.41 15 7 16.41 10.59 20 17 13.41 15.59 12 10 17.59z"/></svg>,
        tailwind: <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-4 14.5V7.5h2v7h-2zm8 0V7.5h2v7h-2z"/></svg>,
        graphql: <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm-4-8a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1z"/></svg>,
        ts: <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-1 14h-2v-2h2v2zm0-4h-2V9h2v3zm4 4h-2v-2h2v2zm0-4h-2V9h2v3z"/></svg>,
        nextjs: <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-1 14.59L9.41 15 8 16.41 11.59 20 18 13.41 16.59 12 11 17.59z"/></svg>,
        php: <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-2 14v-2h4v-2h-4V9h6v2h-4v2h4v2h-6z"/></svg>,
        laravel: <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-3 14.59L7.41 15 6 16.41 9.59 20 16 13.41 14.59 12 9 17.59z"/></svg>,
        wordpress: <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-3 14.59L7.41 15 6 16.41 9.59 20 16 13.41 14.59 12 9 17.59z"/></svg>,
        mysql: <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-1 14H9v-2h2v2zm0-4H9V9h2v3zm4 4h-2v-2h2v2zm0-4h-2V9h2v3z"/></svg>,
        postgresql: <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-1 14H9v-2h2v2zm0-4H9V9h2v3zm4 4h-2v-2h2v2zm0-4h-2V9h2v3z"/></svg>,
        supabase: <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-1 14H9v-2h2v2zm0-4H9V9h2v3zm4 4h-2v-2h2v2zm0-4h-2V9h2v3z"/></svg>,
        vite: <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l-10 18h20L12 2zm-1 14h2v2h-2v-2zm0-4h2v2h-2v-2z"/></svg>,
        git: <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-1 14.59L9.41 15 8 16.41 11.59 20 18 13.41 16.59 12 11 17.59z"/></svg>,
        cicd: <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-1 14H9v-2h2v2zm0-4H9V9h2v3zm4 4h-2v-2h2v2zm0-4h-2V9h2v3z"/></svg>,
        docker: <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V12H8v-2h2V8.5C10 6.57 11.57 5 13.5 5H16v2h-1.5c-.83 0-1.5.67-1.5 1.5V10h3l-.5 2h-2.5v9.8c4.56-.93 8-4.96 8-9.8z"/></svg>,
    };
    return icons[icon] || null;
};

// --- Header Component ---
const Header = ({ name }) => (
    <header className="bg-white/80 backdrop-blur-lg fixed top-0 left-0 right-0 z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
                <div className="flex-shrink-0">
                    <a href="#" className="text-2xl font-bold text-slate-800">{name}</a>
                </div>
                <nav className="hidden md:flex md:space-x-8">
                    <a href="#projects" className="text-slate-600 hover:text-slate-900 transition-colors duration-300">Projects</a>
                    <a href="#tech-stack" className="text-slate-600 hover:text-slate-900 transition-colors duration-300">Tech I Use</a>
                    <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors duration-300">About</a>
                    <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors duration-300">Contact</a>
                </nav>
            </div>
        </div>
    </header>
);

// --- Animated Terminal Component for Hero Section ---
const AnimatedTerminal = ({ commands }) => {
    const [lines, setLines] = useState([]);
    const commandIndex = useRef(0);
    const charIndex = useRef(0);
    const lineIndex = useRef(0);

    useEffect(() => {
        const type = () => {
            const currentCommand = commands[commandIndex.current];
            if (!currentCommand) return;

            if (lineIndex.current === 0) {
                const commandText = currentCommand.command;
                if (charIndex.current < commandText.length) {
                    setLines(prev => {
                        const newLines = [...prev];
                        if (newLines.length <= commandIndex.current * 2) {
                            newLines.push({ text: '', type: 'command' });
                        }
                        newLines[commandIndex.current * 2].text = commandText.substring(0, charIndex.current + 1);
                        return newLines;
                    });
                    charIndex.current++;
                } else {
                    lineIndex.current = 1;
                    charIndex.current = 0;
                }
            }
            else if (lineIndex.current === 1) {
                const outputText = currentCommand.output;
                if (charIndex.current < outputText.length) {
                    setLines(prev => {
                        const newLines = [...prev];
                        if (newLines.length <= commandIndex.current * 2 + 1) {
                            newLines.push({ text: '', type: 'output' });
                        }
                        newLines[commandIndex.current * 2 + 1].text = outputText.substring(0, charIndex.current + 1);
                        return newLines;
                    });
                    charIndex.current++;
                } else {
                    commandIndex.current++;
                    lineIndex.current = 0;
                    charIndex.current = 0;
                }
            }
        };

        const intervalId = setInterval(type, 60);
        return () => clearInterval(intervalId);
    }, [commands]);

    return (
        <div className="w-full h-full bg-slate-900 shadow-2xl rounded-lg p-4 font-mono text-sm text-slate-300 flex flex-col">
            <div className="flex items-center gap-2 mb-4">
                <span className="h-3 w-3 bg-red-500 rounded-full block"></span>
                <span className="h-3 w-3 bg-yellow-500 rounded-full block"></span>
                <span className="h-3 w-3 bg-green-500 rounded-full block"></span>
            </div>
            <div className="flex-grow overflow-y-auto">
                {lines.map((line, index) => (
                    <div key={index} className={line.type === 'output' ? 'text-green-400' : 'text-slate-300'}>
                        <span>{line.text}</span>
                        {index === lines.length - 1 && <span className="animate-pulse">_</span>}
                    </div>
                ))}
            </div>
        </div>
    );
};


// --- Hero Component (New Version) ---
const Hero = ({ name, hero }) => {
    return (
        <section id="hero" className="py-24 sm:py-32 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left">
                    <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">{name}</h1>
                    <h2 className="mt-4 text-2xl text-slate-700">{hero.title}</h2>
                    <p className="mt-6 max-w-xl mx-auto md:mx-0 text-lg text-slate-600">{hero.subtitle}</p>
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a href="#projects" className="bg-slate-900 text-white px-8 py-3 rounded-md font-medium hover:bg-slate-700 transition-colors duration-300 flex items-center justify-center gap-2">
                            View Projects
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </a>
                        <a href="#contact" className="bg-white text-slate-800 px-8 py-3 rounded-md font-medium hover:bg-slate-100 transition-colors duration-300 border border-slate-300 flex items-center justify-center gap-2">
                            Let&apos;s Talk
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                        </a>
                    </div>
                </div>
                <div className="h-80">
                    <AnimatedTerminal commands={hero.terminalCommands} />
                </div>
            </div>
        </section>
    );
};


// --- Projects Components ---
const ProjectCard = ({ project, onCaseStudyClick }) => (
    <div className="bg-white rounded-lg shadow-lg border border-slate-200 overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
        <div className="bg-slate-100 px-4 py-2 border-b border-slate-200 flex items-center gap-2">
            <span className="h-3 w-3 bg-red-500 rounded-full block"></span>
            <span className="h-3 w-3 bg-yellow-500 rounded-full block"></span>
            <span className="h-3 w-3 bg-green-500 rounded-full block"></span>
        </div>
        <div className="bg-white p-1">
            <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover rounded-sm" />
        </div>
        <div className="p-6 flex-grow">
            <h3 className="text-xl font-semibold text-slate-800">{project.title}</h3>
            <p className="mt-2 text-slate-600">{project.category}</p>
        </div>
        <div className="p-6 pt-0 mt-auto">
            <div className="mt-4 flex space-x-4">
                <button onClick={() => onCaseStudyClick(project)} className="text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors duration-300">View Case Study</button>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors duration-300">Live Site &rarr;</a>
            </div>
        </div>
    </div>
);

const CaseStudyModal = ({ project, onClose }) => {
    useEffect(() => {
        if (!project) return;

        const handleEsc = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);
        document.body.style.overflow = 'hidden';
        return () => {
            window.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = '';
        };
    }, [project, onClose]);

    if (!project) return null;

    return (
        <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 opacity-100" onClick={onClose}>
            <div className="modal-content bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto transform scale-100" onClick={(e) => e.stopPropagation()}>
                <div className="sticky top-0 bg-white border-b border-slate-200 p-4 sm:p-6 flex justify-between items-center">
                    <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
                    <button onClick={onClose} className="text-slate-500 hover:text-slate-800">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
                    </button>
                </div>
                <div className="p-4 sm:p-6">
                    <img src={project.imageUrl} alt={project.title} className="w-full h-auto rounded-lg mb-6" />
                    <div className="prose max-w-none text-slate-600">
                        <h4 className="text-xl font-semibold text-slate-800 mb-2">About the Project</h4>
                        <p>{project.caseStudy.description}</p>
                        <h4 className="text-xl font-semibold text-slate-800 mt-6 mb-2">Tech Stack Used</h4>
                        <ul className="list-disc list-inside">
                            {project.caseStudy.techStack.map((tech, index) => <li key={index}>{tech}</li>)}
                        </ul>
                        <h4 className="text-xl font-semibold text-slate-800 mt-6 mb-2">Key Features</h4>
                        <ul className="list-disc list-inside">
                            {project.caseStudy.features.map((feature, index) => <li key={index}>{feature}</li>)}
                        </ul>
                        <div className="mt-8">
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="bg-slate-900 text-white px-6 py-2 rounded-md font-medium hover:bg-slate-700 transition-colors duration-300 no-underline">Visit Live Site</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Projects = ({ projects }) => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <>
            <section id="projects" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Projects Showcase</h2>
                        <p className="mt-4 text-lg text-slate-600">A selection of my recent work.</p>
                    </div>
                    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {projects.map(project => (
                            <ProjectCard key={project.id} project={project} onCaseStudyClick={setSelectedProject} />
                        ))}
                    </div>
                </div>
            </section>
            <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        </>
    );
};

// --- Tech Stack Section (New Version) ---
const TechStack = ({ techStack }) => (
    <section id="tech-stack" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Tech I Use</h2>
                <p className="mt-4 text-lg text-slate-600">Battle-tested tools I reach for to ship fast, maintainable websites.</p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
                {techStack.map(category => (
                    <div key={category.category} className="bg-white p-6 rounded-lg shadow-lg border border-slate-200">
                        <h3 className="text-xl font-semibold text-slate-800">{category.category}</h3>
                        <p className="mt-1 text-slate-500">{category.description}</p>
                        <div className="mt-6 flex flex-wrap gap-4">
                            {category.technologies.map(tech => (
                                <div key={tech.name} className="flex flex-col items-center gap-2 p-2 rounded-md hover:bg-slate-100 transition-colors">
                                    <TechIcons icon={tech.icon} className="h-8 w-8 text-slate-500" />
                                    <span className="text-sm font-medium text-slate-600">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);


const About = ({ about, experience }) => (
    <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-1 flex justify-center">
                <img 
                    src={about.photoUrl} 
                    alt="Your Photo" 
                    className="rounded-full shadow-lg w-64 h-64 object-cover" 
                />
            </div>
            <div className="md:col-span-2">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">About Me</h2>
                {about.bio.map((paragraph, index) => (
                    <p key={index} className="mt-4 text-lg text-slate-600">{paragraph}</p>
                ))}
                <div className="mt-8">
                    <h3 className="text-2xl font-bold text-slate-800">Work Experience</h3>
                    <div className="mt-4 border-l-2 border-slate-200 pl-6 space-y-6">
                        {experience.map((job, index) => (
                            <div key={index}>
                                <h4 className="font-semibold text-slate-900">{job.role}</h4>
                                <p className="text-slate-600">{job.company} | {job.period}</p>
                                <p className="mt-1 text-sm text-slate-500">{job.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const Contact = ({ email }) => (
    <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Get In Touch</h2>
                <p className="mt-4 text-lg text-slate-600">Have a project in mind or just want to say hello? I&apos;d love to hear from you.</p>
            </div>
            <div className="mt-12 max-w-xl mx-auto">
                <div className="text-center">
                    <a href={`mailto:${email}`} className="inline-block bg-slate-900 text-white px-8 py-3 rounded-md font-medium hover:bg-slate-700 transition-colors duration-300">{email}</a>
                </div>
            </div>
        </div>
    </section>
);

const Footer = ({ name, socialLinks }) => (
    <footer className="bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center space-x-6">
                <a href={socialLinks.github} className="text-slate-400 hover:text-slate-500">
                    <span className="sr-only">GitHub</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd"/></svg>
                </a>
                <a href={socialLinks.linkedin} className="text-slate-400 hover:text-slate-500">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/></svg>
                </a>
                 <a href={socialLinks.twitter} className="text-slate-400 hover:text-slate-500">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                </a>
            </div>
            <p className="mt-8 text-center text-base text-slate-400">&copy; {new Date().getFullYear()} {name}. All rights reserved.</p>
        </div>
    </footer>
);

// --- Main App Component ---
export default function App() {
  const data = portfolioData;

  useEffect(() => {
    const handleSmoothScroll = (event) => {
        const link = event.target.closest('a[href^="#"]');
        if (link) {
            event.preventDefault();
            const id = link.getAttribute('href').substring(1);
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    };

    document.addEventListener('click', handleSmoothScroll);
    document.title = `${data.name} - Web Developer Portfolio`;

    return () => {
        document.removeEventListener('click', handleSmoothScroll);
    };
  }, [data.name]);

  return (
    <div className="bg-slate-50" style={{fontFamily: "'Inter', sans-serif"}}>
      <Header name={data.name} />
      
      <main className="pt-16">
        <Hero name={data.name} hero={data.hero} />
        <Projects projects={data.projects} />
        <TechStack techStack={data.techStack} />
        <About about={data.about} experience={data.experience} />
        <Contact email={data.contactEmail} />
      </main>

      <Footer name={data.name} socialLinks={data.socialLinks} />
    </div>
  );
}
