import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';

// --- Data is now included directly in the file ---
const portfolioData = {
    "name": "Chris Diomampo",
    "contactEmail": "chrisgen19@gmail.com",
    "siteUrl": process.env.NEXT_PUBLIC_SITE_URL || "https://www.cgdiomampo.dev", // Dynamic value with a fallback
    "ogImage": "https://placehold.co/1200x630/e3f3ff/334155?text=Chris+Diomampo",
    "twitterHandle": "@cgdiomampo",
    "description": "The personal portfolio of Chris Diomampo, a Full Stack Web Developer specializing in creating exceptional digital experiences.",
    "socialLinks": {
        "github": "https://github.com/chrisgen19",
        "linkedin": "https://www.linkedin.com/in/cgdiomampo/",
        "twitter": "https://x.com/chrisgen19"
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
        // --- Your existing projects data remains here ---
        {
            "id": 1,
            "title": "SacredMedals.com",
            "category": "E-commerce",
            "imageUrl": "/images/sacredmedals.png",
            "imageUrlLarge": "/images/sacredmedals-full.png",
            "liveUrl": "https://sacredmedals.com/",
            "caseStudy": {
                "description": "A headless e-commerce platform for the niche market of religious jewelry. It uses Shopify for robust backend management and a custom React storefront to deliver a modern, fast, and app-like user experience. The project focused on building customer trust through a seamless, secure, and mobile-first design, complete with integrated one-click payment solutions.",
                "techStack": ["Shopify", "React", "Tailwind CSS", "PayPal", "Apple Pay", "Shop Pay"],
                "features": [
                    "Headless commerce architecture",
                    "Custom React storefront for a high-performance UI",
                    "Seamless checkout with integrated payments (PayPal, Apple Pay, Shop Pay)",
                    "Fully responsive, mobile-first design",
                    "Shopify-powered inventory and order management",
                    "Utility-first styling with Tailwind CSS for a clean aesthetic"
                ]
            }
        },
        {
            "id": 2,
            "title": "MyImprov Online Traffic School",
            "category": "EdTech / LMS",
            "imageUrl": "/images/myimprov.png",
            "imageUrlLarge": "/images/myimprov-full.png",
            "liveUrl": "https://myimprov.com/",
            "caseStudy": {
                "description": "A complex e-learning platform for state-approved defensive driving courses, built by integrating multiple specialized systems. The project combines a user-friendly WordPress frontend for information and marketing with a custom Laravel-based Learning Management System (LMS) for course delivery. Shopify is seamlessly integrated to handle secure course registrations and payments, creating a unified user journey from discovery to certification.",
                "techStack": ["WordPress", "Laravel", "Shopify", "LMS"],
                "features": [
                    "Hybrid architecture integrating WordPress, Laravel, and Shopify",
                    "Custom Learning Management System (LMS) for course progression",
                    "Secure payment and enrollment processing via Shopify",
                    "State-specific course logic and content delivery",
                    "Automated user progress tracking and certificate issuance",
                    "Content management and marketing through a WordPress frontend"
                ]
            }
        },
        {
            "id": 3,
            "title": "Merthyr Village Community Portal",
            "category": "Local Business / Retail Website",
            "imageUrl": "/images/merthyr.png",
            "imageUrlLarge": "/images/merthyr-full.png",
            "liveUrl": "https://www.merthyrvillage.com.au/",
            "caseStudy": {
                "description": "An online hub for the Merthyr Village shopping centre, designed to connect with the local community. Built on a robust WordPress and WooCommerce foundation, the site serves as a central point for store information, news, and events. It leverages powerful marketing and analytics tools like Yoast SEO, Google Tag Manager, and Google Analytics to drive foot traffic and measure online engagement, providing a vital digital presence for the physical retail location.",
                "techStack": ["WordPress", "WooCommerce", "PHP", "MySQL", "Yoast SEO", "Google Tag Manager", "Google Analytics", "jQuery"],
                "features": [
                    "Dynamic store directory with individual tenant pages",
                    "Easy-to-update content management for news and events",
                    "WooCommerce integration for potential e-commerce capabilities",
                    "On-page and technical SEO optimization via Yoast SEO",
                    "Advanced tracking and marketing insights with GTM and Google Analytics",
                    "Reliable and interactive user experience using jQuery"
                ]
            }
        },
        {
            "id": 4,
            "title": "Experience Sunnybank Community Hub",
            "category": "Local Business / Community Portal",
            "imageUrl": "/images/sunnybank.png",
            "imageUrlLarge": "/images/sunnybank-full.png",
            "liveUrl": "https://www.experiencesunnybank.com.au/",
            "caseStudy": {
                "description": "A digital guide and community platform for the Sunnybank area, focusing on dining, shopping, and cultural experiences. The website is built on WordPress, providing an easy-to-manage backend for a dynamic frontend. It utilizes Yoast SEO for enhanced search engine visibility to attract tourists and locals, while Cloudflare integration ensures website performance and security, delivering a fast and reliable user experience.",
                "techStack": ["WordPress", "PHP", "MySQL", "Yoast SEO", "Cloudflare", "jQuery"],
                "features": [
                    "Comprehensive directory for dining, shopping, and services",
                    "Blog and news section for community engagement",
                    "SEO-driven content strategy using Yoast SEO",
                    "High performance and security with Cloudflare CDN",
                    "User-friendly content updates via WordPress CMS",
                    "Responsive design for browsing on any device"
                ]
            }
        },
        {
            "id": 5,
            "title": "Suna E-commerce & Academy Platform",
            "category": "E-commerce / Beauty Industry",
            "imageUrl": "/images/suna.png",
            "imageUrlLarge": "/images/suna-full.png",
            "liveUrl": "#",
            "caseStudy": {
                "description": "A comprehensive digital presence for a high-end salon and hair academy, blending e-commerce with informational content. The site is powered by WordPress and WooCommerce, allowing for seamless online sales of professional hair care products. It's built on a reliable Nginx, PHP, and MySQL stack, with Plesk for server management. The user interface is crafted with Bootstrap and jQuery for responsiveness, while Yoast SEO ensures strong visibility in search results, attracting both product customers and academy students.",
                "techStack": ["WordPress", "WooCommerce", "PHP", "MySQL", "Nginx", "Yoast SEO", "jQuery", "Plesk", "Bootstrap"],
                "features": [
                    "Integrated e-commerce store for hair care products via WooCommerce",
                    "Detailed information on salon services and academy courses",
                    "Responsive and mobile-friendly design using Bootstrap",
                    "High-performance web serving with Nginx",
                    "Simplified server administration with Plesk",
                    "Strategic SEO implementation with the Yoast SEO plugin"
                ]
            }
        },
        {
            "id": 6, // Corrected duplicate ID from 5 to 6
            "title": "Premium Mobile Car Valeting Glasgow",
            "category": "Local Service / E-commerce",
            "imageUrl": "/images/pmcar.png",
            "imageUrlLarge": "/images/pmcar-full.png",
            "liveUrl": "https://premiummobilecarvaletingglasgow.co.uk/",
            "caseStudy": {
                "description": "A sophisticated online platform for a mobile car valeting service, enabling seamless booking and payment for customers. The site leverages WordPress and WooCommerce for its core CMS and e-commerce functionality, running on a standard PHP and MySQL stack. It features a dynamic user interface enhanced by AngularJS and a responsive layout built with Bootstrap. For payments, it integrates PayPal, and for marketing, it uses tools like the Facebook Pixel to run targeted digital advertising campaigns, driving customer acquisition.",
                "techStack": ["WordPress", "WooCommerce", "PHP", "MySQL", "AngularJS", "Bootstrap", "PayPal", "Facebook Pixel"],
                "features": [
                    "Online booking and scheduling system via WooCommerce",
                    "Secure payment processing with PayPal integration",
                    "Dynamic and interactive elements powered by AngularJS",
                    "Fully responsive design for mobile and desktop using Bootstrap",
                    "Advanced customer tracking and retargeting with Facebook Pixel",
                    "Easy content management for services and pricing through WordPress"
                ]
            }
        }
    ],
    "techStack": [
        // --- Your existing tech stack data remains here ---
        {
            "category": "Frontend",
            "description": "Core tools & platforms",
            "technologies": [
                { "name": "HTML5", "icon": "html" },
                { "name": "CSS3", "icon": "css" },
                { "name": "SASS", "icon": "sass" },
                { "name": "Tailwind", "icon": "tailwind" },
                { "name": "JavaScript", "icon": "js" },
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
                { "name": "GraphQL", "icon": "graphql" }
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
        // --- Your existing about data remains here ---
        "photoUrl": "/images/chrisgen.jpg",
        "bio": [
          "Hello! I'm Christian, a professional Full Stack Developer based in Metro Manila, Philippines with over a decade of experience. As a seasoned web development expert, I specialize in both frontend (React, Next.js) and backend (PHP, Laravel, Node.js) technologies to build high-performance applications.",
          "My goal is to craft exceptional user experiences that solve real-world problems. Whether you're looking for a React Developer in the Philippines or a versatile full-stack engineer for your next project, I have the skills and project management experience to deliver outstanding results."
        ]
    },
    "experience": [
        // --- Your existing experience data remains here ---
        {
            "role": "Senior Full Stack Developer / Senior WordPress Developer",
            "company": "Hybrid Anchor",
            "period": "2025 - 2025",
            "description": "Converted Figma designs into WordPress Templates and developed websites from scratch. Handled DevOps for SiteGround Servers, managed projects, and developed Ecommerce websites using WooCommerce."
        },
        {
            "role": "Senior Full Stack Developer",
            "company": "Interactive Education Concept, Inc.",
            "period": "2022 - 2024",
            "description": "Worked as a PHP Developer and Senior Frontend Developer, developing and maintaining custom WordPress plugins and page templates. Handled DevOps for Azure & AWS servers."
        },
        {
            "role": "Sr Wordpress Developer | Sr Frontend Developer",
            "company": "MyImprov Emapta. (US Client)",
            "period": "2019 - 2022",
            "description": "Developed frontend applications using ReactJS and NextJS. Built APIs for custom web and mobile apps and handled DevOps responsibilities."
        },
        {
            "role": "Senior Full Stack Developer",
            "company": "Outdoor Urban Transit / Follow (Australian Company)",
            "period": "2018 - 2019",
            "description": "Served as a Frontend and WordPress Engineer, creating professional WordPress plugins and add-ons. Also worked as a Laravel Developer and managed DevOps for AWS and DigitalOcean servers."
        },
        {
            "role": "Senior Full Stack Developer",
            "company": "BoomLabs - Emapta (Australian Client)",
            "period": "2017 - 2018",
            "description": "Handled large projects using agile methodology and crafted pixel-perfect HTML5 layouts from mockups. Acted as an administrator for Linux Systems on AWS Servers."
        },
        {
            "role": "Senior Web Developer / PHP Senior Programmer",
            "company": "Creagaia Inc (former Argumenta – Denmark Company)",
            "period": "2013 - 2017",
            "description": "Developed web systems using Codeigniter and Laravel, and created APIs for mobile apps. Developed ecommerce sites with WooCommerce and Magento."
        },
        {
            "role": "PHP and Flash Programmer/designer",
            "company": "E-trader Inc Philippines",
            "period": "2011 - 2013",
            "description": "Used PHP Imagick Library and PHP GD Library for interactive customizable jewelries in Magento. Also performed WordPress development."
        },
        {
            "role": "Wordpress Developer / Php Programmer",
            "company": "Symmetri Designs Solution",
            "period": "2010 - 2011",
            "description": "Converted PSD designs to HTML and CSS, and developed WordPress themes and plugins. Built ecommerce websites using zencart and xcart."
        },
        {
            "role": "Graphic Artist",
            "company": "Happy Oranges",
            "period": "2010 - 2010",
            "description": "Responsible for graphic design for ads, posters, IDs, and flyers."
        },
        {
            "role": "Web and Flash Programmer/designer",
            "company": "MIW ORG",
            "period": "2007 - 2008",
            "description": "Worked as a Junior Web Developer and Flash Developer during a tenure as a working student."
        }
    ],
    // --- NEW SECTION DATA: Testimonials ---
    "testimonials": [
        {
            "quote": "Christian delivered exceptional work on our e-commerce platform. His expertise in headless Shopify and React helped us create a fast, modern storefront that significantly improved our conversion rates. He's incredibly detail-oriented and always goes the extra mile.",
            "author": "Michael Limueco",
            "title": "E-commerce Director, Sacred Medals"
        },
        {
            "quote": "We needed a complex multi-system integration for our traffic school platform, and Christian made it happen seamlessly. His ability to work with WordPress, Laravel, and Shopify simultaneously while maintaining clean code and meeting tight deadlines was impressive.",
            "author": "Manir Zaman",
            "title": "VP of Software Development, MyImprov"
        },
        {
            "quote": "Christian's full-stack capabilities are outstanding. He migrated our entire infrastructure to AWS, optimized our WordPress site for performance, and implemented tracking that gave us valuable insights into our customer behavior. A true professional who delivers results.",
            "author": "Rebecca Thompson",
            "title": "Operations Manager, Outdoor Urban Transit"
        }
    ]
};

// --- NEW HOOK: For fade-in on scroll animations ---
const useIntersectionObserver = (options) => {
    const [ref, setRef] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                // Optional: Disconnect after first intersection
                // observer.disconnect();
            }
        }, options);

        if (ref) {
            observer.observe(ref);
        }

        return () => {
            if (ref) {
                observer.unobserve(ref);
            }
        };
    }, [ref, options]);

    return [setRef, isVisible];
};


// --- NEW COMPONENT: AnimatedSection ---
// This wrapper will apply the fade-in effect to any section
const AnimatedSection = ({ children, id }) => {
    const [ref, isVisible] = useIntersectionObserver({
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    });

    return (
        <section
            id={id}
            ref={ref}
            className={`transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-5'}`}
        >
            {children}
        </section>
    );
};

// --- SVG Icons Component ---
const TechIcons = ({ icon, className }) => {
    const icons = {
        html: <img src="/images/techstack/html5.svg" className={`h-8 w-8 text-slate-500 ${className || ''}`} alt="HTML" />,
        css: <img src="/images/techstack/css3.svg" className={`h-8 w-8 text-slate-500 ${className || ''}`} alt="CSS" />,
        js: <img src="/images/techstack/js.svg" className={`h-8 w-8 text-slate-500 ${className || ''}`} alt="JS" />,
        react: <img src="/images/techstack/reactjs.svg" className={`h-8 w-8 text-slate-500 ${className || ''}`} alt="REACT" />,
        node: <img src="/images/techstack/nodejs.svg" className={`h-8 w-8 text-slate-500 ${className || ''}`} alt="NODEJS" />,
        tailwind: <img src="/images/techstack/tailwind.svg" className={`h-8 w-8 text-slate-500 ${className || ''}`} alt="tailwind" />,
        graphql: <img src="/images/techstack/graphql.svg" className={`h-8 w-8 text-slate-500 ${className || ''}`} alt="graphql" />,
        ts: <img src="/images/techstack/ts.svg" className={`h-8 w-8 text-slate-500 ${className || ''}`} alt="typescript" />,
        nextjs: <img src="/images/techstack/nextjs.svg" className={`h-8 w-8 text-slate-500 ${className || ''}`} alt="nextjs" />,
        php: <img src="/images/techstack/php.svg" className={`h-8 w-8 text-slate-500 ${className || ''}`} alt="php" />,
        laravel: <img src="/images/techstack/laravel.svg" className={`h-8 w-8 text-slate-500 ${className || ''}`} alt="laravel" />,
        wordpress: <img src="/images/techstack/wp.svg" className={`h-8 w-8 text-slate-500 ${className || ''}`} alt="wordpress" />,
        mysql: <img src="/images/techstack/mysql.svg" className={`h-8 w-8 text-slate-500 ${className || ''}`} alt="mysql" />,
        postgresql: <img src="/images/techstack/postgresql.svg" className={`h-8 w-8 text-slate-500 ${className || ''}`} alt="postgresql" />,
        mongodb: <img src="/images/techstack/mongodb.svg" className={`h-8 w-8 text-slate-500 ${className || ''}`} alt="mongodb" />,
        supabase: <img src="/images/techstack/supabase.svg" className={`h-8 w-8 text-slate-500 ${className || ''}`} alt="supabase" />,
        vite: <img src="/images/techstack/vite.svg" className={`h-8 w-8 text-slate-500 ${className || ''}`} alt="vite" />,
        git: <img src="/images/techstack/git.svg" className={`h-8 w-8 text-slate-500 ${className || ''}`} alt="git" />,
        cicd: <img src="/images/techstack/cicd.svg" className={`h-8 w-8 text-slate-500 ${className || ''}`} alt="cicd" />,
        docker: <img src="/images/techstack/docker.svg" className={`h-8 w-8 text-slate-500 ${className || ''}`} alt="docker" />,
        sass: <img src="/images/techstack/sass.svg" className={`h-8 w-8 text-slate-500 ${className || ''}`} alt="sass" />
    };
    return icons[icon] || null;
};

// --- Header Component ---
const Header = ({ name }) => (
    <header className="bg-white/80 backdrop-blur-lg fixed top-0 left-0 right-0 z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
                <div className="flex-shrink-0">
                    <a href="#hero" className="text-2xl font-bold text-slate-800">{name}</a>
                </div>
                <nav className="hidden md:flex md:space-x-8">
                    <a href="#projects" className="text-slate-600 hover:text-slate-900 transition-colors duration-300">Projects</a>
                    <a href="#tech-stack" className="text-slate-600 hover:text-slate-900 transition-colors duration-300">Tech Stack</a>
                    <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors duration-300">About</a>
                    <a href="#testimonials" className="text-slate-600 hover:text-slate-900 transition-colors duration-300">Testimonials</a>
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

// --- Wave Divider Component ---
const WaveDivider = () => (
    <div className="absolute bottom-0 left-0 w-full">
        <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
            <defs>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className="parallax">
                <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
                <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
        </svg>
    </div>
);


// --- Hero Component ---
const Hero = ({ name, hero }) => {
    return (
        <section id="hero" className="relative py-24 sm:py-32 bg-blue-50 pb-20">
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
            <WaveDivider />
        </section>
    );
};

// --- Image Loader Component ---
const ImageLoader = () => (
    <div className="flex justify-center items-center w-full h-80 bg-slate-200 rounded-lg">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-slate-900"></div>
    </div>
);

// --- Projects Components ---
const ProjectCard = ({ project, onCaseStudyClick }) => (
    <div className="bg-white rounded-lg shadow-lg border border-slate-200 overflow-hidden group/card transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
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
                <button onClick={() => onCaseStudyClick(project)} className="inline-flex items-center px-2 py-2 text-sm font-medium text-slate-900 relative group/button cursor-pointer" >
                    <span className="relative">
                        View Case Study
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 group-hover/button:w-full"></span>
                    </span>
                    <svg className="ml-2 w-4 h-4 transition-transform group-hover/button:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>
                <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-2 py-2 text-sm font-medium text-slate-900 relative group/link"
                >
                    <span className="relative">
                        Live Site
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 group-hover/link:w-full"></span>
                    </span>
                    <svg className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </a>
            </div>
        </div>
    </div>
);

const CaseStudyModal = ({ project, onClose }) => {
    const [isImageLoading, setIsImageLoading] = useState(true);

    useEffect(() => {
        if (!project) return;

        setIsImageLoading(true);

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
        <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={onClose}>
            <div className="modal-content bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                <div className="sticky top-0 bg-white border-b border-slate-200 p-4 sm:p-6 flex justify-between items-center">
                    <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
                    <button onClick={onClose} className="text-slate-500 hover:text-slate-800">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
                <div className="p-4 sm:p-6">
                    {isImageLoading && <ImageLoader />}
                    <img
                        src={project.imageUrlLarge}
                        alt={project.title}
                        className={`w-full h-auto rounded-lg mb-6 ${isImageLoading ? 'hidden' : 'block'}`}
                        onLoad={() => setIsImageLoading(false)}
                    />
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
        <AnimatedSection id="projects">
            <div className="py-20 bg-white">
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
            </div>
            <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        </AnimatedSection>
    );
};

// --- Tech Stack Section (NEW MODERN VERSION with AUTO-SWITCHING) ---
const TechStack = ({ techStack }) => {
    // State to keep track of the currently active tab
    const [activeCategory, setActiveCategory] = useState(techStack[0].category);
    
    // Use a ref to hold the interval ID. This allows us to clear it later.
    const intervalRef = useRef(null);

    // This function handles a manual tab click
    const handleTabClick = (category) => {
        // Stop the auto-switching interval
        clearInterval(intervalRef.current);
        // Set the new active category
        setActiveCategory(category);
    };

    // This useEffect hook sets up and tears down the interval
    useEffect(() => {
        // Start the interval
        intervalRef.current = setInterval(() => {
            setActiveCategory(prevCategory => {
                // Find the index of the current category
                const currentIndex = techStack.findIndex(cat => cat.category === prevCategory);
                // Calculate the next index, looping back to 0 if at the end
                const nextIndex = (currentIndex + 1) % techStack.length;
                // Return the name of the next category
                return techStack[nextIndex].category;
            });
        }, 3000); // Switch every 3 seconds (3000 milliseconds)

        // This is the cleanup function. It runs when the component unmounts.
        return () => {
            // Clear the interval to prevent memory leaks
            clearInterval(intervalRef.current);
        };
    }, [techStack]); // Rerun the effect if techStack data ever changes

    // Find the data for the active category
    const activeData = techStack.find(cat => cat.category === activeCategory);

    return (
        <AnimatedSection id="tech-stack">
            <div className="py-20 bg-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">My Tech Stack</h2>
                        <p className="mt-4 text-lg text-slate-600">Technologies I use to build modern, high-performance web applications.</p>
                    </div>

                    {/* Tab Navigation - Updated onClick handler */}
                    <div className="mt-12 flex flex-wrap justify-center gap-2 sm:gap-4">
                        {techStack.map(category => (
                            <button
                                key={category.category}
                                onClick={() => handleTabClick(category.category)} // Use the new handler
                                className={`px-4 sm:px-6 py-2 text-sm sm:text-base font-medium rounded-full transition-all duration-300 ${
                                    activeCategory === category.category
                                        ? 'bg-slate-900 text-white shadow-lg'
                                        : 'bg-white text-slate-700 hover:bg-slate-200'
                                }`}
                            >
                                {category.category}
                            </button>
                        ))}
                    </div>

                    {/* Content Panel */}
                    <div className="mt-10 min-h-[300px]">
                        {activeData && (
                            <div
                                key={activeCategory}
                                className="bg-white p-6 sm:p-8 rounded-lg shadow-xl border border-slate-200"
                            >
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                                    {activeData.technologies.map((tech, index) => (
                                        <div
                                            key={tech.name}
                                            className="flex flex-col items-center gap-2 p-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:bg-slate-50 animate-fadeInUp"
                                            style={{ animationDelay: `${index * 75}ms` }}
                                        >
                                            <TechIcons icon={tech.icon} className="h-10 w-10 text-slate-500" />
                                            <span className="text-sm font-medium text-slate-700 text-center">{tech.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
};

// --- About Section ---
const About = ({ about, experience }) => (
    <AnimatedSection id="about">
        <div className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-12 items-center">
                <div className="md:col-span-1 flex justify-center">
                    <Image
                        src={about.photoUrl}
                        alt={`A professional headshot of ${portfolioData.name}, Full Stack Developer.`}
                        width={256}
                        height={256}
                        className="rounded-full shadow-lg object-cover"
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
        </div>
    </AnimatedSection>
);

// --- NEW COMPONENT: Testimonials Section (FIXED) ---
const Testimonials = ({ testimonials }) => (
    <AnimatedSection id="testimonials">
        <div className="py-20 bg-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">What Others Say</h2>
                    <p className="mt-4 text-lg text-slate-600">Feedback from clients and colleagues I&apos;ve worked with.</p>
                </div>
                <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-8 rounded-lg shadow-lg border border-slate-200 flex flex-col">
                            <div className="flex-grow">
                                <svg className="h-10 w-10 text-slate-300" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                                    <path d="M9.352 4C4.456 4 0 8.456 0 13.352c0 2.643 1.076 5.013 2.824 6.76L1.22 25.78c-.37.37-.37.972 0 1.343.185.185.428.277.672.277s.487-.092.672-.277L8.24 21.488c.99.31 2.04.464 3.112.464 4.896 0 9.352-4.456 9.352-9.352S14.248 4 9.352 4z" />
                                </svg>
                                <blockquote className="mt-6 text-slate-600">
                                     {/* FIX: Replaced literal quotes with &quot; HTML entity */}
                                    <p>&quot;{testimonial.quote}&quot;</p>
                                </blockquote>
                            </div>
                            <footer className="mt-6">
                                <p className="font-semibold text-slate-900">{testimonial.author}</p>
                                <p className="text-slate-500">{testimonial.title}</p>
                            </footer>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </AnimatedSection>
);

// --- Contact Section (FIXED) ---
const Contact = ({ email }) => (
    <AnimatedSection id="contact">
        <div className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Get In Touch</h2>
                    {/* FIX: Replaced the apostrophe in "I'd" with &apos; */}
                    <p className="mt-4 text-lg text-slate-600">Have a project in mind or just want to say hello? I&apos;d love to hear from you.</p>
                </div>
                <div className="mt-12 max-w-xl mx-auto">
                    <div className="text-center">
                        <a href={`mailto:${email}`} className="inline-block bg-slate-900 text-white px-8 py-3 rounded-md font-medium hover:bg-slate-700 transition-colors duration-300">{email}</a>
                    </div>
                </div>
            </div>
        </div>
    </AnimatedSection>
);

// --- Footer Component ---
const Footer = ({ name, socialLinks }) => (
    <footer className="bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center space-x-6">
                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-500">
                    <span className="sr-only">GitHub</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" /></svg>
                </a>
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-500">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                </a>
                <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-500">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                </a>
            </div>
            <p className="mt-8 text-center text-base text-slate-400">&copy; {new Date().getFullYear()} {name}. All rights reserved.</p>
        </div>
    </footer>
);

// --- NEW COMPONENT: Back to Top Button ---
const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <button
            type="button"
            onClick={scrollToTop}
            className={`fixed bottom-5 right-5 p-3 rounded-full bg-slate-900 text-white shadow-lg hover:bg-slate-700 transition-transform duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" /></svg>
        </button>
    );
};


// --- Main App Component ---
export default function HomePage() {
    const data = portfolioData;

    useEffect(() => {
        const handleSmoothScroll = (event) => {
            const link = event.target.closest('a[href^="#"]');
            if (link) {
                event.preventDefault();
                const id = link.getAttribute('href').substring(1);
                const element = document.getElementById(id);
                // Adjust for fixed header height
                const headerOffset = 64; // Corresponds to h-16 in the header
                if (element) {
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
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
        <div className="bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
            <Head>
              {/* --- Primary Meta Tags --- */}
              <title>{`${data.name} - Full Stack Web Developer`}</title>
              <meta name="title" content={`${data.name} - Full Stack Web Developer`} />
              <meta name="description" content={data.description} />
              <meta name="author" content={data.name} />
              <link rel="icon" href="/favicon.ico" /> {/* Make sure you have a favicon in your /public folder */}

              {/* --- Open Graph / Facebook --- */}
              <meta property="og:type" content="website" />
              <meta property="og:url" content={data.siteUrl} />
              <meta property="og:title" content={`${data.name} - Full Stack Web Developer`} />
              <meta property="og:description" content={data.description} />
              <meta property="og:image" content={data.ogImage} />

              {/* --- Twitter --- */}
              <meta property="twitter:card" content="summary_large_image" />
              <meta property="twitter:url" content={data.siteUrl} />
              <meta property="twitter:title" content={`${data.name} - Full Stack Web Developer`} />
              <meta property="twitter:description" content={data.description} />
              <meta property="twitter:creator" content={data.twitterHandle} />
              <meta property="twitter:image" content={data.ogImage} />

              <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{ __html: JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "Person",
                      "name": data.name,
                      "url": data.siteUrl,
                      "image": `${data.siteUrl}${data.about.photoUrl}`, // Needs to be an absolute URL
                      "sameAs": [
                          data.socialLinks.github,
                          data.socialLinks.linkedin,
                          data.socialLinks.twitter
                      ],
                      "jobTitle": "Full Stack Web Developer",
                      "worksFor": {
                          "@type": "Organization",
                          "name": data.name // Or your freelance company name
                      },
                      "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Mandaluyong City",
                        "addressRegion": "Metro Manila",
                        "addressCountry": "PH"
                      },
                      "alumniOf": "MIW ORG", // You can add your school here
                      "knowsAbout": ["React", "Next.js", "PHP", "Laravel", "JavaScript", "TypeScript", "WordPress", "E-commerce"]
                  })}}
              />
            </Head>
            <style>{`

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translate3d(0, 20px, 0);
                    }
                    to {
                        opacity: 1;
                        transform: translate3d(0, 0, 0);
                    }
                }

                .animate-fadeInUp {
                    /* Set initial state */
                    opacity: 0; 
                    /* Apply animation */
                    animation: fadeInUp 0.5s ease-out forwards;
                }
                /* Your existing wave styles remain unchanged */
                .waves {
                    position: relative;
                    width: 100%;
                    height: 15vh;
                    margin-bottom: -7px;
                    min-height: 100px;
                    max-height: 150px;
                }
                .parallax > use {
                    animation: move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite;
                }
                .parallax > use:nth-child(1) {
                    animation-delay: -2s;
                    animation-duration: 7s;
                }
                .parallax > use:nth-child(2) {
                    animation-delay: -3s;
                    animation-duration: 10s;
                }
                .parallax > use:nth-child(3) {
                    animation-delay: -4s;
                    animation-duration: 13s;
                }
                .parallax > use:nth-child(4) {
                    animation-delay: -5s;
                    animation-duration: 20s;
                }
                @keyframes move-forever {
                    0% { transform: translate3d(-90px,0,0); }
                    100% { transform: translate3d(85px,0,0); }
                }
                @media (max-width: 768px) {
                    .waves {
                        height: 40px;
                        min-height: 40px;
                    }
                }
            `}</style>
            <Header name={data.name} />

            <main> {/* Removed pt-16, handled by scroll logic */}
                <Hero name={data.name} hero={data.hero} />
                <Projects projects={data.projects} />
                <TechStack techStack={data.techStack} />
                <About about={data.about} experience={data.experience} />
                <Testimonials testimonials={data.testimonials} />
                <Contact email={data.contactEmail} />
            </main>

            <Footer name={data.name} socialLinks={data.socialLinks} />
            <BackToTopButton />
        </div>
    );
}