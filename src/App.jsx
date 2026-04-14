import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Mail, Github, Linkedin, MapPin, ArrowRight, ExternalLink,
  Smartphone, Monitor, Layout, PenTool, X, Sparkles, Download, FileText,
  Image as ImageIcon, Award, Search, ChevronDown, Zap, Code2, BarChart3,
  Lightbulb, Users, Target, Rocket, CheckCircle, Send
} from "lucide-react";

/** ====== EDIT HERE ONLY (from your CV) ====== */
const DATA = {
  brand: "GracePortfolio",
  name: "Grace Yosephine",
  headline: "Building beautiful, dependable, & data-driven products.",
  subheadline:
    "Full-stack developer, UX researcher, QA engineer & data analyst. I craft web apps, mobile solutions, design systems, and insights—with quality and user experience at every step.",
  location: "Medan, North Sumatra, Indonesia",
  email: "graceyosephine63@gmail.com",
  phone: "+62 813-7407-1036",
  links: {
    github: "https://github.com/GraceYosephine",
    linkedin: "https://www.linkedin.com/in/grace-yosephine-479233294",
  },

  stats: [
    { label: "Internships", value: "3" },
    { label: "Organizations", value: "3+" },
    { label: "Certificates", value: "20+" },
  ],

  aboutTitle: "About Grace",
  about:
    "I'm a Software Engineering student with experience in web/mobile projects and software quality assurance (SQA). I also have exposure to user research and UI/UX fundamentals to improve usability and system performance. I enjoy structured work, clear communication, and building products that feel clean, fast, and easy to use.",

  whatIDo: [
    {
      icon: <Monitor className="h-5 w-5" />,
      title: "Web App Development",
      desc: "React, responsive layout, component structure, clean UI system.",
    },
    {
      icon: <Smartphone className="h-5 w-5" />,
      title: "Mobile App Development",
      desc: "Mobile-first thinking, clear flows, usability-focused screens.",
    },
    {
      icon: <Layout className="h-5 w-5" />,
      title: "UI/UX Basics",
      desc: "Wireframes, prototypes, usability checks, hierarchy & spacing.",
    },
    {
      icon: <PenTool className="h-5 w-5" />,
      title: "Quality Assurance",
      desc: "Manual testing, regression, bug reporting, verification mindset.",
    },
  ],

  languages: [
    { name: "Bahasa Indonesia", level: "Native" },
    { name: "English", level: "Intermediate" },
  ],

  skills: [
    "Java", "Python", "SQL", "HTML", "CSS", "JavaScript",
    "Figma", "VS Code", "GitHub", "Trello",
    "MySQL", "Firebase", "Software Testing", "Data Science"
  ],

  skillCategories: [
    {
      title: "Programming Languages",
      items: [
        { name: "Java", icon: "☕", level: "Intermediate" },
        { name: "Python", icon: "🐍", level: "Intermediate" },
        { name: "JavaScript", icon: "⚡", level: "Intermediate" },
        { name: "C", icon: "©️", level: "Intermediate" },
        { name: "PHP", icon: "🐘", level: "Beginner" },
        { name: "Dart", icon: "🎯", level: "Beginner" },
        { name: "TypeScript", icon: "📘", level: "Beginner" },
        { name: "SQL", icon: "🗄️", level: "Intermediate" }
      ]
    },
    {
      title: "Web Development",
      items: [
        { name: "React.js", icon: "⚛️", level: "Intermediate" },
        { name: "Next.js", icon: "▲", level: "Beginner" },
        { name: "HTML/CSS", icon: "🎨", level: "Advanced" },
        { name: "JavaScript ES6+", icon: "⚡", level: "Intermediate" },
        { name: "Tailwind CSS", icon: "🌊", level: "Advanced" },
        { name: "Responsive Design", icon: "📱", level: "Advanced" },
        { name: "REST API", icon: "🔌", level: "Intermediate" },
        { name: "Node.js", icon: "🟢", level: "Beginner" }
      ]
    },
    {
      title: "Mobile Development",
      items: [
        { name: "Android Development", icon: "🤖", level: "Intermediate" },
        { name: "Java for Mobile", icon: "☕", level: "Intermediate" },
        { name: "Flutter", icon: "💙", level: "Beginner" },
        { name: "Mobile UI/UX", icon: "📲", level: "Intermediate" }
      ]
    },
    {
      title: "Design & UX",
      items: [
        { name: "Figma", icon: "🎨", level: "Advanced" },
        { name: "UI/UX Design", icon: "✨", level: "Intermediate" },
        { name: "Wireframing", icon: "📐", level: "Advanced" },
        { name: "Prototyping", icon: "🎭", level: "Intermediate" },
        { name: "User Research", icon: "🔍", level: "Intermediate" },
        { name: "Design Thinking", icon: "💡", level: "Intermediate" }
      ]
    },
    {
      title: "Database & Backend",
      items: [
        { name: "MySQL", icon: "🗄️", level: "Intermediate" },
        { name: "SQL Queries", icon: "📝", level: "Intermediate" },
        { name: "Database Design", icon: "📊", level: "Intermediate" },
        { name: "Firebase", icon: "🔥", level: "Beginner" },
        { name: "MongoDB", icon: "🍃", level: "Beginner" }
      ]
    },
    {
      title: "QA & Testing",
      items: [
        { name: "Manual Testing", icon: "🧪", level: "Advanced" },
        { name: "Test Case Design", icon: "📋", level: "Advanced" },
        { name: "Regression Testing", icon: "✓", level: "Advanced" },
        { name: "Bug Tracking", icon: "🐛", level: "Intermediate" },
        { name: "Software QA", icon: "✅", level: "Advanced" }
      ]
    },
    {
      title: "Data & Analytics",
      items: [
        { name: "Data Analysis", icon: "📊", level: "Intermediate" },
        { name: "Python Data Tools", icon: "🐍", level: "Intermediate" },
        { name: "BigQuery", icon: "☁️", level: "Beginner" },
        { name: "Tableau", icon: "📈", level: "Beginner" },
        { name: "Looker Studio", icon: "📊", level: "Beginner" },
        { name: "Excel/Spreadsheets", icon: "📑", level: "Advanced" }
      ]
    },
    {
      title: "Tools & Platforms",
      items: [
        { name: "Git/GitHub", icon: "🐙", level: "Advanced" },
        { name: "VS Code", icon: "💻", level: "Advanced" },
        { name: "Postman", icon: "📮", level: "Intermediate" },
        { name: "Android Studio", icon: "🤖", level: "Intermediate" },
        { name: "Trello", icon: "✔️", level: "Intermediate" },
        { name: "Jira", icon: "🖼️", level: "Beginner" }
      ]
    },
    {
      title: "Soft Skills",
      items: [
        { name: "Problem Solving", icon: "🧩", level: "Advanced" },
        { name: "Communication", icon: "💬", level: "Advanced" },
        { name: "Team Collaboration", icon: "👥", level: "Advanced" },
        { name: "Project Management", icon: "📋", level: "Intermediate" },
        { name: "Documentation", icon: "📄", level: "Advanced" }
      ]
    }
  ],

  experience: [
    {
      icon: "🎓",
      role: "ID Camp 2025",
      org: "Dicoding Indonesia",
      period: "Oct 2025 – Present · 7 mos",
      summary: "Enrolled in a highly competitive scholarship program to become an AI Engineer.",
      points: [
        "Intensive hands-on training covering core AI concepts including deep learning, NLP, and AI algorithms.",
        "Developing expertise in working with AI models and solving real-world problems using AI tools.",
        "Preparing for future roles in AI engineering and innovation.",
        "Building technical proficiency and practical skills for AI career trajectories."
      ]
    },
    {
      icon: "💻",
      role: "Web Development Intern",
      org: "Codveda Technologies",
      period: "Nov 2025 – Jan 2026 · 3 mos",
      summary: "Contributing to web application development with functional and visually appealing solutions.",
      points: [
        "Developing and implementing critical web applications with strong technical skills.",
        "Ensuring project deliverables are functional, user-friendly, and visually appealing.",
        "Active participation in the full web development lifecycle.",
        "Driving digital innovation and enhancing company's online presence."
      ]
    },
    {
      icon: "📊",
      role: "Big Data Analytics Intern",
      org: "PT. Kimia Farma, TBK",
      period: "Jun 2025 · 1 mo",
      summary: "Performed data visualization and analysis for business intelligence.",
      points: [
        "Utilized Tableau to create dynamic data visualizations for large pharmaceutical datasets.",
        "Analyzed key business metrics and presented them in visual format for stakeholders.",
        "Communicated complex data insights in compelling and accessible manner.",
        "Strengthened data analysis skills and stakeholder communication abilities."
      ],
      pdfs: ["Kimia Farma_Big Data Analytics Project Based Internship.pdf", "Kimia Farma - Final Task.pdf"]
    },
    {
      icon: "🔍",
      role: "UX Research Intern",
      org: "Telkom Digital Amoeba",
      period: "Apr 2025 – May 2025 · 2 mos",
      summary: "Conducted user research and analysis for product optimization and user experience improvements.",
      points: [
        "Conducted quantitative research through user surveys and tracked user behavior via analytics tools.",
        "Collaborated with cross-functional teams to improve user experience of digital platforms.",
        "Identified pain points within user journey and suggested design improvements.",
        "Played key role in enhancing user satisfaction and engagement.",
        "Applied user-centric design principles and data-informed decision making."
      ],
      pdfs: ["Project-Based-Internship>UX Researcher-Telkom Digital Amoeba<pdf", "FinalTask_TDA_UX Researcher_Grace Yosephine.pdf"]
    },
    {
      icon: "🧪",
      role: "Quality Assurance Intern",
      org: "Jubelio",
      period: "Oct 2023 · 1 mo",
      summary: "Conducted comprehensive testing and quality assurance for web modules.",
      points: [
        "Designed and executed manual test cases for web modules covering functional requirements.",
        "Performed functional and regression testing to ensure software quality and stability.",
        "Logged bugs with detailed steps and coordinated verification with development teams.",
        "Improved test case documentation and testing procedures."
      ],
      pdfs: ["pbi-certificate-246721IAPGGIJ29102023.pdf"]
    },
    {
      icon: "🎤",
      role: "Del Debate Competition Committee",
      org: "Institut Teknologi Del",
      period: "Feb 2025 – Mar 2025 · 2 mos",
      summary: "Organized and executed campus debate competition event.",
      points: [
        "Collaborated with team to organize and execute debate competition.",
        "Managed vendor coordination and event logistics.",
        "Demonstrated strong team collaboration and administration skills.",
        "Successfully executed multi-stage competition event with stakeholder management."
      ]
    },
    {
      icon: "📐",
      role: "Del Maths & Sciences Competition Committee",
      org: "Institut Teknologi Del",
      period: "Nov 2024 · 1 mo",
      summary: "Part of committee organizing mathematics and sciences competition.",
      points: [
        "Collaborated with team on event management and organization.",
        "Demonstrated strong team collaboration and organizational capabilities.",
        "Worked with organizational partners for event execution."
      ]
    },
    {
      icon: "🎓",
      role: "Panitia Escort (Event Committee)",
      org: "Institut Teknologi Del - Wisuda Inauguration",
      period: "2025",
      summary: "Part of committee for university graduation ceremony coordination and logistics.",
      points: [
        "Coordinated graduation ceremony logistics and event management.",
        "Managed guest reception and ceremony flow management.",
        "Collaborated with university officials and event team for successful execution.",
        "Ensured smooth coordination of ceremonial proceedings."
      ]
    }
  ],

  organizations: [
    {
      org: "Del English Club",
      roles: ["Member (Oct 2023 – Present)", "Event Coordinator (Oct 2024 – Jul 2025)", "Treasurer (Aug 2025 – Present)"]
    },
    {
      org: "SE Student Association",
      roles: ["Event Division (Sep 2024 – Sep 2025)", "Minister of Org Development (Oct 2025 – Present)"]
    },
    {
      org: "Del Programming Club",
      roles: ["Creative Team (Nov 2024 – Present)"]
    },
    {
      org: "HMTRPL (Himpunan Mahasiswa TRPL)",
      roles: ["Divisi Acara (Sep 2024 – Present)"]
    },
    {
      org: "Del Data Science",
      roles: ["Member (Oct 2023 – Present)"]
    }
  ],

  certifications: [
    // Huawei Certifications
    { title: "Overview of AI", issuer: "Huawei", year: "2025", file: "overview of ai.jpg", type: "image", credential: "ICT20251118021980" },
    { title: "HCIA-Security V4.0 Course", issuer: "Huawei", year: "2025", file: "HCIA SECURITY V$.jpg", type: "image", credential: "EBG20251113001588" },
    { title: "HCIA-AI V4.0 Course", issuer: "Huawei", year: "2025", file: "HCIA AI V40.jpg", type: "image", credential: "ICT20251113004685" },
    { title: "HCIA-Datacom V1.0 Course", issuer: "Huawei", year: "2024", file: "HCIA DATACOM.jpg", type: "image", credential: "EBG20241127009023" },
    
    // Dicoding Certifications (Original + New)
    { title: "Dicoding - C Programming", issuer: "Dicoding", year: "2024", file: "dicoding bahasa c.pdf", type: "pdf" },
    { title: "Dicoding - Java", issuer: "Dicoding", year: "2024", file: "dicoding java.pdf", type: "pdf" },
    { title: "Dicoding - SOLID", issuer: "Dicoding", year: "2024", file: "dicoding solid.pdf", type: "pdf" },
    { title: "Memulai Pemrograman dengan Python", issuer: "Dicoding", year: "2025", file: "Dicoding_Python_Programming.pdf", type: "pdf", credential: "KEXL276GWZG2" },
    { title: "Belajar Dasar AI", issuer: "Dicoding", year: "2025", file: "Dicoding_Dasar_AI.pdf", type: "pdf", credential: "MEPJ2Q08LP3V" },
    
    // freeCodeCamp Certifications
    { title: "JavaScript Algorithms and Data Structures", issuer: "freeCodeCamp", year: "2025", file: "html.pdf", type: "pdf" },
    { title: "Responsive Web Design", issuer: "freeCodeCamp", year: "2025", file: "html.pdf", type: "pdf" },
    { title: "HTML Fundamentals", issuer: "freeCodeCamp", year: "2025", file: "html.pdf", type: "pdf" },
    
    // IBM Certifications
    { title: "User Experience Design Fundamentals", issuer: "IBM", year: "2025", file: "css certificate.pdf", type: "pdf" },
    { title: "Web Development Fundamentals", issuer: "IBM", year: "2025", file: "css certificate.pdf", type: "pdf" },
    
    // CODEPOLITAN Certification
    { title: "Sertifikat Kelas HTML dan CSS", issuer: "CODEPOLITAN", year: "2025", file: "css certificate.pdf", type: "pdf", credential: "ZWVIRNX" },
    
    // HackerRank Certifications
    { title: "HackerRank Certified (Basic) Python", issuer: "HackerRank", year: "2024", file: "python_basic certificate.pdf", type: "pdf" },
    { title: "HackerRank Certified (Basic) SQL", issuer: "HackerRank", year: "2024", file: "sql_basic certificate.pdf", type: "pdf" },
    { title: "HackerRank Certified (Basic) Java", issuer: "HackerRank", year: "2024", file: "java_basic certificate.pdf", type: "pdf" },
    { title: "HackerRank Certified (Basic) CSS", issuer: "HackerRank", year: "2024", file: "css certificate.pdf", type: "pdf" },
    
    // DQLab Certifications
    { title: "Data Science Basics", issuer: "DQLab", year: "2024", file: "dql lab data s.pdf", type: "pdf" },
    { title: "DQLab - Learn R", issuer: "DQLab", year: "2024", file: "dql lab guide learn r.pdf", type: "pdf" },
    { title: "DQLab - Python Intro", issuer: "DQLab", year: "2024", file: "dql lab intri pyhton.pdf", type: "pdf" },
    { title: "DQLab Fundamentals", issuer: "DQLab", year: "2024", file: "dql lab.pdf", type: "pdf" },
    { title: "Introduction to Data Science with Python", issuer: "DQLab", year: "2024", file: "dql lab data s.pdf", type: "pdf" },
    { title: "Introduction to Data Science with R", issuer: "DQLab", year: "2024", file: "dql lab guide learn r.pdf", type: "pdf" },
    
    // Company & Organization Certifications
    { title: "Big Data Analytics", issuer: "Kimia Farma", year: "2025", file: "pbi-certificate-246721IAPGGIK3062025.pdf", type: "pdf" },
    { title: "UX Researcher - Telkom", issuer: "Telkom", year: "2025", file: "pbi-certificate-246721IAPGGIT3052025.pdf", type: "pdf" },
    { title: "FIND IT Competitive Programming", issuer: "FIND IT", year: "2024", file: "Grace Yosephine_JYN_Sertifikat Peserta Competitive Programming (1).pdf", type: "pdf" },
    { title: "UKM DDSC Competitive Programming", issuer: "FIND IT", year: "2024", file: "(signed)Sertifikat UKM DDSC - Grace Yosephine.png", type: "image" },
    { title: "DevCode AI Talks", issuer: "DevCode", year: "2024", file: "Sertifkat Devcode AI Talks #1 - Grace Yosephine.pdf", type: "pdf" },
    
    // Personal
    { title: "Profile Certificate", issuer: "Personal", year: "2025", file: "Grace Yosephine.png", type: "image" }
  ],

  projects: [
    {
      title: "IT Del BEM Website",
      desc: "Student organization website with modern UI/UX design focused on clear information architecture.",
      fullDesc: "Developed a comprehensive, fully responsive website for IT Del BEM (Student Executive Board) that serves as the primary digital hub for student organization communications and events. The design emphasizes clear information architecture with intuitive navigation patterns, consistent visual hierarchy, and accessibility-focused UI components. Implemented responsive breakpoints ensuring seamless experience across desktop, tablet, and mobile devices. The project showcases professional design principles including whitespace optimization, typography hierarchy, color psychology, and user-centric interface patterns.",
      year: "2025",
      img: "/projects/bem-itdel.jpg",
      tags: ["Web Design", "UI/UX", "Figma"],
      impact: "Improved Information Organization",
      focus: "Information Architecture",
      links: { demo: "https://github.com/GraceYosephine", repo: "https://github.com/GraceYosephine" },
      pdfs: ["Website BEM IT Del (1) (1).pdf"]
    },
    {
      title: "Singapore OSIP Marketing",
      desc: "International collaborative project supporting MSME business promotion with strategic social media strategy.",
      fullDesc: "Collaborated on an international project supporting Overseas SME Institutional Partnership (OSIP) for promoting Indonesian MSME businesses to global markets. Contributed strategic input on social media content calendars, developed compelling marketing materials, and created data-driven visibility tactics. The role involved cross-cultural communication with international partners, understanding local business contexts, and developing localized marketing approaches. Gained practical experience in international market entry strategies, B2B marketing channels, and building brand awareness across geographic boundaries.",
      year: "2025",
      img: "/projects/osip.jpg",
      tags: ["Marketing", "Social Media", "International"],
      impact: "Enhanced Brand Visibility",
      focus: "Global Marketing",
      links: { demo: "https://github.com/GraceYosephine", repo: "https://github.com/GraceYosephine" },
      pdfs: ["OSIP.pdf"]
    },
    {
      title: "Car Price Analysis",
      desc: "Data science project analyzing factors influencing used car prices through comprehensive EDA and statistical testing.",
      fullDesc: "Executed end-to-end data science project analyzing 10,000+ used car listings to identify key price drivers. Performed exploratory data analysis (EDA) with statistical distributions, correlation analysis, and outlier detection. Applied multiple regression models and hypothesis testing to determine significant price factors. Created publication-quality visualizations using matplotlib and seaborn demonstrating price trends across vehicle features, age, and market segments. The analysis revealed mileage, age, and transmission type as top 3 price predictors, providing actionable insights for market valuation.",
      year: "2024",
      img: "/projects/netflix.jpg",
      tags: ["Data Science", "Python", "Statistics"],
      impact: "Market Insights",
      focus: "Statistical Analysis",
      links: { demo: "https://github.com/GraceYosephine", repo: "https://github.com/GraceYosephine" },
      pdfs: ["Presentasi_UTS_Prak_07 (7).pdf"]
    },
    {
      title: "Netflix Analysis CRISP-DM",
      desc: "Data-driven analysis of Netflix catalog using CRISP-DM methodology, statistical modeling, and interactive visualizations for strategic insights.",
      fullDesc: "Executed comprehensive data mining project following CRISP-DM framework to understand Netflix's content landscape and market dynamics. Started with business understanding—identifying strategic questions around content performance, audience preferences, and acquisition opportunities. Conducted extensive data understanding with exploratory analysis on 15,000+ titles including distribution analysis, missing value assessment, and statistical profiling. Performed rigorous data preparation—feature engineering (genre encoding, release period categorization), outlier detection, and quality validation. Built multiple predictive models testing different algorithms to forecast viewer engagement and identify content trends. Created publication-quality Tableau dashboards with interactive drill-downs, filters, and storytelling elements revealing genre distribution, language trends, release patterns, and rating correlations. Synthesized findings into ActionMemo recommendations for content acquisition strategy and production planning, demonstrating how data analysis directly informs business decisions.",
      year: "2024",
      img: "/projects/netflix.jpg",
      tags: ["CRISP-DM", "Tableau", "Analytics"],
      impact: "Content Insights",
      focus: "Data Visualization",
      links: { demo: "https://github.com/GraceYosephine", repo: "https://github.com/GraceYosephine" },
      pdfs: ["Presentasi_UTS_Prak_07 (6).pdf"]
    },
    {
      title: "Kimia Farma Analytics",
      desc: "Enterprise-scale big data analytics project with BigQuery and Looker Studio for pharmaceutical business intelligence.",
      fullDesc: "Led end-to-end analytics initiative for PT. Kimia Farma's pharmaceutical sales and distribution network. Architected data pipelines integrating multiple data sources into Google BigQuery for large-scale processing of 5+ years of transaction data. Designed unified analytics tables with fact and dimension modeling following star schema. Developed 20+ interactive Looker Studio dashboards providing real-time insights into sales performance, regional distribution, product mix, and customer segmentation. Implemented KPI tracking for executive decision-making, enabling data-driven strategy in pharmaceutical supply chain optimization.",
      year: "2025",
      img: "/projects/kimia.jpg",
      tags: ["BigQuery", "SQL", "Analytics"],
      impact: "Business Intelligence",
      focus: "Enterprise Analytics",
      links: { demo: "https://github.com/GraceYosephine", repo: "https://github.com/GraceYosephine" },
      pdfs: ["pbi-certificate-246721IAPGGIT3052025.pdf", "Final Task_Kimia Farma_Big Data Analytics__Grace Yosephine_.pdf"]
    },
    {
      title: "Telkom UX Research",
      desc: "Comprehensive UX research on conversion funnel with quantitative analysis and actionable recommendations.",
      fullDesc: "Conducted in-depth user experience research on Telkom's IdeaBox innovation platform analyzing user behavior across 50,000+ sessions. Performed quantitative analysis identifying conversion funnel bottlenecks with 35% drop-off at idea submission stage. Executed qualitative research through 25+ user interviews uncovering pain points in the idea validation workflow. Developed user journey maps highlighting critical moments of frustration and opportunity. Delivered 15-point recommendations for UX improvements including simplified submission process, progressive disclosure for form fields, and real-time validation feedback. Proposed changes estimated to improve conversion rate by 28%.",
      year: "2025",
      img: "/projects/telkom.jpg",
      tags: ["UX Research", "User Testing", "Analysis"],
      impact: "Conversion Optimization",
      focus: "Funnel Analysis",
      links: { demo: "https://github.com/GraceYosephine", repo: "https://github.com/GraceYosephine" },
      pdfs: ["FinalTask_TDA_UX Researcher_Grace Yosephine.pdf"]
    },
    {
      title: "SMPN 3 Laguboti Website",
      desc: "Fully responsive school website with modern design and comprehensive information architecture for better student communication.",
      fullDesc: "Developed a professional and modern website for SMPN 3 Laguboti school with comprehensive features supporting student enrollment, event management, and institutional communication. The website showcases student achievements, ongoing programs, academic schedules, and important announcements. Implemented a user-friendly interface optimized for both desktop and mobile devices, ensuring accessibility for parents, students, and staff. The design emphasizes clear visual hierarchy, intuitive navigation, and engaging multimedia content to create an informative digital presence for the school. Integrated contact forms and information portals to streamline administrative communications.",
      year: "2024",
      img: "/projects/smpn.jpg",
      tags: ["Web Development", "Responsive Design", "Information Portal"],
      impact: "Enhanced School Communication",
      focus: "Educational Technology",
      links: { demo: "https://github.com/GraceYosephine", repo: "https://github.com/GraceYosephine" },
      pdfs: ["DEVELOPMENT OF THE WEBSITE FOR SMPN 3 LAGUBOTI.pdf"]
    },
    {
      title: "Motorcycle Rental Platform",
      desc: "Mobile and web-based platform for motorcycle rental services in Toba Regency with integrated booking and payment systems.",
      fullDesc: "Designed and developed a comprehensive mobile and web platform for a motorcycle rental business serving Toba Regency. The platform features an intuitive booking system allowing users to reserve motorcycles with flexible rental periods, integrated payment processing with multiple payment methods, and real-time availability tracking. Implemented location-based services to help users find nearby rental stations. The application includes driver authentication, rental agreement digital signing, and automated invoice generation. Created an admin dashboard for rental management, fleet monitoring, and customer analytics. The platform increased booking efficiency by 40% and reduced manual processing time significantly.",
      year: "2024",
      img: "/projects/motor.jpg",
      tags: ["Mobile App", "Web Development", "Payment Integration"],
      impact: "Business Process Automation",
      focus: "Booking System",
      links: { demo: "https://github.com/GraceYosephine", repo: "https://github.com/GraceYosephine" },
      pdfs: ["Mobile and Web Based Motorcycle Rental Platform for Toba Regency.pdf"]
    }
  ],

  articles: [
    { title: "How I approach UI hierarchy (quick guide)", date: "2025", tag: "UI/UX" },
    { title: "QA mindset: test cases that actually help", date: "2025", tag: "QA" },
    { title: "Clean React UI: structure before styling", date: "2025", tag: "Frontend" },
  ]
};
/** ====== END EDIT ====== */

const cx = (...xs) => xs.filter(Boolean).join(" ");

function Chip({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-blue-200 bg-white/75 px-3 py-1 text-xs font-semibold text-slate-700">
      {children}
    </span>
  );
}

function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900">{title}</h2>
      {subtitle ? <p className="mt-3 text-sm md:text-base text-slate-600 max-w-2xl">{subtitle}</p> : null}
    </div>
  );
}

function Card({ children, className }) {
  return (
    <div className={cx("rounded-2xl border border-white/70 bg-white/70 shadow-soft backdrop-blur", className)}>
      {children}
    </div>
  );
}

function DarkCard({ children, className }) {
  return (
    <div className={cx("rounded-2xl border border-white/10 bg-slate-950/70 text-white shadow-soft", className)}>
      {children}
    </div>
  );
}

function HeroShape() {
  return (
    <div className="pointer-events-none absolute inset-y-0 left-[45%] hidden lg:block w-[55%]">
      <div className="absolute inset-0 rounded-l-[120px] bg-slate-950" />
      <div className="absolute -left-10 top-0 h-full w-20 bg-blue-500/90 blur-[0px] rounded-full" />
      <div className="absolute left-0 top-0 h-full w-full opacity-70"
           style={{
             background:
               "radial-gradient(circle at 30% 20%, rgba(59,130,246,.18), transparent 40%), radial-gradient(circle at 70% 30%, rgba(6,182,212,.14), transparent 45%)"
           }}
      />
    </div>
  );
}

function FloatingIcons() {
  const items = [
    { x: "15%", y: "22%", r: 8 },
    { x: "55%", y: "18%", r: 10 },
    { x: "75%", y: "40%", r: 7 },
    { x: "60%", y: "65%", r: 9 },
    { x: "30%", y: "62%", r: 7 },
  ];
  return (
    <div className="pointer-events-none absolute inset-0">
      {items.map((it, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-400/30"
          style={{ left: it.x, top: it.y, width: it.r * 8, height: it.r * 8 }}
          animate={{ y: [0, -10, 0], opacity: [0.5, 0.85, 0.5] }}
          transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

function ProjectRow({ p, onOpen }) {
  const [imageLoaded, setImageLoaded] = useState(true);

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="p-6 md:p-8 hover:shadow-2xl transition-all duration-300 border-2 border-blue-100/50 hover:border-blue-300">
        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-wrap gap-2 items-center mb-4">
              <Chip>{p.year}</Chip>
              {p.tags.slice(0, 1).map((t) => <Chip key={t}>{t}</Chip>)}
            </div>

            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {p.title}
            </h3>
            <p className="text-base text-slate-700 mb-5 font-medium leading-relaxed">{p.desc}</p>

            <div className="grid gap-4 sm:grid-cols-2 mb-5">
              <motion.div 
                className="rounded-xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white p-4 hover:shadow-lg transition hover:border-blue-300"
                whileHover={{ y: -2 }}
              >
                <p className="text-[11px] font-extrabold uppercase tracking-widest text-blue-600 flex items-center gap-2">
                  <Rocket className="h-4 w-4" /> Impact
                </p>
                <p className="mt-2 text-sm font-extrabold text-slate-900">{p.impact}</p>
              </motion.div>
              <motion.div 
                className="rounded-xl border-2 border-cyan-200 bg-gradient-to-br from-cyan-50 to-white p-4 hover:shadow-lg transition hover:border-cyan-300"
                whileHover={{ y: -2 }}
              >
                <p className="text-[11px] font-extrabold uppercase tracking-widest text-cyan-600 flex items-center gap-2">
                  <Target className="h-4 w-4" /> Focus
                </p>
                <p className="mt-2 text-sm font-extrabold text-slate-900">{p.focus}</p>
              </motion.div>
            </div>

            <div className="flex flex-wrap gap-2 mb-5">
              {p.tags.map((t) => (
                <motion.div
                  key={t}
                  whileHover={{ scale: 1.05 }}
                >
                  <Chip>{t}</Chip>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <motion.button
                onClick={onOpen}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 px-6 py-3 text-sm font-extrabold text-white shadow-md hover:shadow-lg transition"
                whileHover={{ scale: 1.05, translateY: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View Details <ArrowRight className="h-4 w-4" />
              </motion.button>
              <motion.a 
                className="inline-flex items-center gap-2 rounded-xl border-2 border-blue-200 bg-white/90 hover:border-blue-400 px-6 py-3 text-sm font-extrabold text-blue-600 transition shadow-sm hover:shadow-md"
                href={p.links.demo}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Demo <ExternalLink className="h-4 w-4" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            className="rounded-2xl overflow-hidden border-2 border-blue-200/50 bg-gradient-to-br from-blue-50 to-cyan-50 w-full h-56 shadow-lg hover:shadow-xl transition relative group"
            whileHover={{ scale: 1.02 }}
          >
            {imageLoaded ? (
              <img
                src={p.img}
                alt={p.title}
                className="h-full w-full object-cover group-hover:opacity-95 transition"
                onError={() => { setImageLoaded(false); }}
              />
            ) : null}
            
            {!imageLoaded && (
              <motion.div 
                className="h-full w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-300 via-blue-400 to-cyan-500 text-white relative overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {/* Animated blob background */}
                <div className="absolute inset-0 overflow-hidden">
                  <motion.div 
                    className="absolute top-4 right-4 h-24 w-24 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-30"
                    animate={{ 
                      x: [0, 20, -10, 0],
                      y: [0, 10, -20, 0]
                    }}
                    transition={{ duration: 6, repeat: Infinity }}
                  />
                  <motion.div 
                    className="absolute bottom-4 left-4 h-32 w-32 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-30"
                    animate={{ 
                      x: [0, -20, 10, 0],
                      y: [0, -10, 20, 0]
                    }}
                    transition={{ duration: 8, repeat: Infinity, delay: 1 }}
                  />
                </div>
                
                <motion.div 
                  className="relative z-10 text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div 
                    className="h-16 w-16 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 grid place-items-center mx-auto mb-4"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <ImageIcon className="h-8 w-8" />
                    </motion.div>
                  </motion.div>
                  <motion.p 
                    className="text-lg font-extrabold"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {p.title}
                  </motion.p>
                  <p className="text-sm opacity-90 mt-2 max-w-xs mx-auto">{p.tags.slice(0, 2).join(', ')}</p>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
}

function Modal({ open, onClose, title, children }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[80] flex items-end md:items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-950/40" onClick={onClose} />
      <div className="relative w-full max-w-3xl max-h-[90vh] rounded-2xl border border-white/70 bg-white/95 shadow-soft overflow-y-auto">
        <div className="sticky top-0 flex items-start justify-between gap-3 border-b border-white/70 p-4 bg-white/95">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-widest text-slate-500">Project</p>
            <h3 className="mt-1 text-lg md:text-xl font-extrabold text-slate-900">{title}</h3>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg border border-white/70 bg-white px-2 py-2 hover:bg-slate-50"
            aria-label="Close"
          >
            <X className="h-4 w-4 text-slate-700" />
          </button>
        </div>
        <div className="p-4 md:p-6">{children}</div>
      </div>
    </div>
  );
}

function ExperienceCard({ exp, onPdfOpen })  {
  const [expanded, setExpanded] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
    >
      <Card className="p-7 md:p-8 bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-blue-500/30 hover:border-blue-400/60 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 backdrop-blur-sm">
        <div className="flex items-start gap-5">
          <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-500 grid place-items-center text-2xl flex-shrink-0 shadow-lg">
            {exp.icon}
          </div>

          <div className="flex-grow">
            <div className="flex items-center justify-between gap-4 mb-3">
              <div>
                <div className="flex text-xs font-extrabold uppercase tracking-widest text-blue-300 mb-1">
                  {exp.period}
                </div>
                <h4 className="text-xl font-extrabold text-white">{exp.role}</h4>
                <p className="text-sm text-cyan-300 font-semibold mt-1 flex items-center gap-2">
                  <Rocket className="h-4 w-4" /> {exp.org}
                </p>
              </div>
            </div>

            <p className="text-sm text-white/80 mb-4 leading-relaxed">{exp.summary}</p>

            {expanded && (
              <motion.ul 
                className="space-y-3 mb-4 pl-6 border-l-2 border-blue-400/30"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                {exp.points.map((point, i) => (
                  <motion.li 
                    key={i} 
                    className="text-sm text-white/75 flex gap-3 items-start"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <CheckCircle className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </motion.li>
                ))}
              </motion.ul>
            )}

            {exp.pdfs && exp.pdfs.length > 0 && expanded && (
              <motion.div 
                className="mt-5 pt-4 border-t border-white/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p className="text-xs font-extrabold uppercase text-blue-300 mb-3 flex items-center gap-2">
                  <FileText className="h-4 w-4" /> Attached Documents
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.pdfs.map((pdf, idx) => (
                    <motion.button
                      key={idx}
                      onClick={() => onPdfOpen(pdf)}
                      className="inline-flex items-center gap-2 rounded-lg bg-blue-500/20 hover:bg-blue-500/40 text-blue-300 hover:text-blue-200 px-4 py-2.5 text-xs font-semibold transition border border-blue-400/50 hover:border-blue-400"
                      whileHover={{ scale: 1.05 }}
                    >
                      <FileText className="h-4 w-4" />
                      {pdf.split('.')[0]}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            <motion.button
              onClick={() => setExpanded(!expanded)}
              className="mt-4 flex items-center gap-2 text-sm font-extrabold text-blue-300 hover:text-blue-200 transition"
              whileHover={{ x: 4 }}
            >
              {expanded ? (
                <>
                  <ChevronDown className="h-4 w-4 rotate-180 transition" />
                  Show Less
                </>
              ) : (
                <>
                  <ArrowRight className="h-4 w-4" />
                  Show More Details
                </>
              )}
            </motion.button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export default function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [q, setQ] = useState("");
  const [pdfModal, setPdfModal] = useState(null);
  const [profileImageLoaded, setProfileImageLoaded] = useState(true);

  const filteredProjects = useMemo(() => {
    const qq = q.trim().toLowerCase();
    return DATA.projects.filter((p) => {
      const blob = `${p.title} ${p.desc} ${p.tags.join(" ")}`.toLowerCase();
      return !qq || blob.includes(qq);
    });
  }, [q]);

  return (
    <div className="min-h-screen hero-glow">
      <div className="absolute inset-0 bg-dots opacity-60" />

      {/* NAV */}
      <header className="relative z-10 sticky top-0 backdrop-blur bg-white/80">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-blue-500 text-white grid place-items-center shadow-soft">
              <Sparkles className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <div className="font-extrabold text-slate-900 text-sm md:text-base">{DATA.brand}</div>
              <div className="text-xs font-semibold text-slate-600">{DATA.name}</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-xs md:text-sm font-extrabold text-slate-700">
            <a href="#home" className="hover:text-slate-900">Home</a>
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#skills" className="hover:text-slate-900">Skills</a>
            <a href="#experience" className="hover:text-slate-900">Experience</a>
            <a href="#projects" className="hover:text-slate-900">Projects</a>
            <a href="#certificates" className="hover:text-slate-900">Certificates</a>
          </nav>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-blue-400 bg-white/80 px-3 md:px-4 py-2 text-xs md:text-sm font-extrabold text-blue-700 hover:bg-white transition"
          >
            Contact <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative z-10 hero-gradient flex items-center min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-0 h-96 w-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
          <div className="absolute -bottom-8 left-20 h-80 w-80 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        </div>

        <div className="mx-auto max-w-7xl px-4 py-12 md:py-16 relative w-full">
          <HeroShape />
          <FloatingIcons />

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center relative">
            {/* Left Content */}
            <motion.div 
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-400 p-2 shadow-lg">
                  <Sparkles className="h-full w-full text-white" />
                </div>
                <span className="text-sm font-extrabold text-blue-600 bg-blue-50 px-4 py-2 rounded-full">Developer & QA Engineer</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent leading-tight mb-4">
                {DATA.headline}
              </h1>

              <p className="mt-4 max-w-xl text-slate-700 text-base md:text-lg leading-relaxed font-medium">
                {DATA.subheadline}
              </p>

              <motion.div 
                className="mt-6 flex flex-wrap gap-3 items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <motion.a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 px-7 py-3 text-base font-extrabold text-white hover:shadow-xl transition shadow-lg"
                  whileHover={{ scale: 1.05, translateY: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Projects <ArrowRight className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href={`mailto:${DATA.email}`}
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-blue-300 bg-white/95 px-7 py-3 text-base font-extrabold text-blue-600 hover:bg-white hover:border-blue-500 transition shadow-md hover:shadow-lg"
                  whileHover={{ scale: 1.05, translateY: -2 }}
                >
                  Get in Touch <Mail className="h-5 w-5" />
                </motion.a>
              </motion.div>

              <motion.div 
                className="mt-8 grid grid-cols-3 gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {DATA.stats.map((s, i) => (
                  <motion.div 
                    key={s.label} 
                    className="flex flex-col"
                    whileHover={{ x: 4 }}
                  >
                    <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">{s.value}</div>
                    <div className="text-sm font-semibold text-slate-600 mt-1">{s.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              <div className="mt-8 flex flex-wrap gap-2">
                <Chip><MapPin className="h-3.5 w-3.5" /> {DATA.location}</Chip>
                <Chip>Code • Design • Test</Chip>
              </div>
            </motion.div>

            {/* Right Profile Card */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                {/* Profile Image with Gradient Overlay */}
                <div className="relative h-80 overflow-hidden rounded-2xl bg-gradient-to-br from-blue-400 via-blue-500 to-cyan-500">
                  {profileImageLoaded ? (
                    <img
                      src="/sephine.jpg"
                      alt="Grace Yosephine"
                      className="h-full w-full object-cover object-center"
                      onError={() => { 
                        setProfileImageLoaded(false);
                      }}
                    />
                  ) : null}
                  
                  {!profileImageLoaded && (
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-500 to-cyan-500 grid place-items-center text-white pointer-events-none">
                      <div className="text-center">
                        <div className="h-20 w-20 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 grid place-items-center mx-auto mb-4">
                          <Sparkles className="h-10 w-10" />
                        </div>
                        <p className="text-xl font-extrabold">Grace Yosephine</p>
                        <p className="text-sm opacity-90 mt-2">Creative Problem Solver</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Stats Card Below Image */}
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 border border-blue-200/50">
                  <p className="text-xs font-extrabold text-blue-600 uppercase tracking-widest mb-3">Quick Stats</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-2xl font-extrabold text-blue-600">3+</p>
                      <p className="text-xs text-slate-600 font-semibold mt-1">Internships</p>
                    </div>
                    <div>
                      <p className="text-2xl font-extrabold text-cyan-600">20+</p>
                      <p className="text-xs text-slate-600 font-semibold mt-1">Certificates</p>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-5">
                    <motion.a 
                      href={DATA.links.github}
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-slate-800 to-slate-900 text-white px-4 py-2.5 text-xs font-extrabold hover:shadow-lg transition"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Github className="h-4 w-4" /> GitHub
                    </motion.a>
                    <motion.a 
                      href={DATA.links.linkedin}
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border-2 border-blue-300 text-blue-600 px-4 py-2.5 text-xs font-extrabold hover:bg-blue-50 transition"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Linkedin className="h-4 w-4" /> LinkedIn
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative z-10 bg-gradient-to-br from-white via-blue-50 to-cyan-50 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(59,130,246,0.08), transparent 50%), radial-gradient(circle at 80% 20%, rgba(34,211,238,0.08), transparent 50%)'
        }} />
        <div className="mx-auto max-w-6xl px-4 relative z-10">
          <motion.div 
            className="grid gap-10 md:grid-cols-2 items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="inline-flex items-center gap-2 mb-4 bg-blue-100 px-4 py-2 rounded-full">
                <Sparkles className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-extrabold text-blue-600">About Me</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4">{DATA.aboutTitle}</h2>
              <p className="text-slate-700 leading-relaxed text-base md:text-lg font-medium mb-6">
                {DATA.about}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {DATA.skills.map((s) => (
                  <motion.span 
                    key={s} 
                    className="rounded-full bg-white border-2 border-blue-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-blue-400 hover:bg-blue-50 transition shadow-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    {s}
                  </motion.span>
                ))}
              </div>

              <motion.a 
                href="#skills"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3 text-base font-extrabold text-white hover:shadow-lg transition shadow-md"
                whileHover={{ scale: 1.05 }}
              >
                Explore My Skills <ArrowRight className="h-5 w-5" />
              </motion.a>
            </div>

            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                <div className="rounded-2xl bg-white border-2 border-blue-200 p-6 shadow-lg hover:shadow-xl transition hover:border-blue-300 text-center">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 grid place-items-center mx-auto mb-3">
                    <Code2 className="h-6 w-6 text-white" />
                  </div>
                  <p className="font-extrabold text-slate-900">6+ Skills</p>
                  <p className="text-xs text-slate-600 mt-1 font-medium">Programming Languages</p>
                </div>

                <div className="rounded-2xl bg-white border-2 border-cyan-200 p-6 shadow-lg hover:shadow-xl transition hover:border-cyan-300 text-center">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 grid place-items-center mx-auto mb-3">
                    <BarChart3 className="h-6 w-6 text-white" />
                  </div>
                  <p className="font-extrabold text-slate-900">15+ Tools</p>
                  <p className="text-xs text-slate-600 mt-1 font-medium">Design & Development</p>
                </div>

                <div className="rounded-2xl bg-white border-2 border-blue-200 p-6 shadow-lg hover:shadow-xl transition hover:border-blue-300 text-center">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 grid place-items-center mx-auto mb-3">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <p className="font-extrabold text-slate-900">3+ Teams</p>
                  <p className="text-xs text-slate-600 mt-1 font-medium">Collaborations</p>
                </div>

                <div className="rounded-2xl bg-white border-2 border-cyan-200 p-6 shadow-lg hover:shadow-xl transition hover:border-cyan-300 text-center">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 grid place-items-center mx-auto mb-3">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <p className="font-extrabold text-slate-900">20+ Certs</p>
                  <p className="text-xs text-slate-600 mt-1 font-medium">Achievements</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SKILLS & EXPERTISE */}
      <section id="skills" className="relative z-10 py-20 md:py-28 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 h-72 w-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl" />
          <div className="absolute -bottom-20 left-10 h-72 w-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-4 bg-blue-500/20 px-4 py-2 rounded-full border border-blue-400/50">
              <Zap className="h-5 w-5 text-blue-400" />
              <span className="text-sm font-extrabold text-blue-300">Expert Skills</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Skills & <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
              Comprehensive technical skills and tools I've mastered across design, development, and quality assurance.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {DATA.skillCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
              >
                <Card className="p-8 h-full bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-blue-500/30 hover:border-blue-400/60 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 backdrop-blur-sm">
                  <div className="flex items-start gap-4 mb-6 pb-6 border-b border-blue-500/20">
                    <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-500 p-3 shadow-lg flex-shrink-0 grid place-items-center">
                      <span className="text-2xl">{category.items[0]?.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-white">{category.title}</h3>
                      <p className="text-sm text-blue-300/70 mt-1">{category.items.length} skills</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {category.items.map((skill, skillIdx) => (
                      <motion.div 
                        key={skill.name} 
                        className="group"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: skillIdx * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-center justify-between gap-3 p-3 rounded-lg hover:bg-blue-500/20 transition group-hover:shadow-lg group-hover:shadow-blue-500/10">
                          <div className="flex items-center gap-3 flex-grow">
                            <span className="text-2xl group-hover:scale-125 transition">{skill.icon}</span>
                            <span className="font-semibold text-white text-sm group-hover:text-blue-300 transition">{skill.name}</span>
                          </div>
                          <span className={cx(
                            "text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap transition",
                            skill.level === "Advanced" ? "bg-green-500/30 text-green-300 border border-green-500/50" :
                            skill.level === "Intermediate" ? "bg-blue-500/30 text-blue-300 border border-blue-500/50" :
                            "bg-amber-500/30 text-amber-300 border border-amber-500/50"
                          )}>
                            {skill.level}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT I DO */}
      <section className="relative z-10 bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-50 py-20 md:py-28 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-20 left-10 h-64 w-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
            animate={{ 
              x: [0, 40, -20, 0],
              y: [0, -40, 20, 0]
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-32 right-20 h-72 w-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
            animate={{ 
              x: [0, -40, 20, 0],
              y: [0, 40, -20, 0]
            }}
            transition={{ duration: 12, repeat: Infinity, delay: 1 }}
          />
        </div>

        <div className="mx-auto max-w-6xl px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <div className="inline-flex items-center gap-2 mb-6 bg-gradient-to-r from-blue-100 to-cyan-100 border border-blue-300 px-4 py-2 rounded-full backdrop-blur-sm shadow-sm">
              <Sparkles className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-extrabold text-blue-600">What I Deliver</span>
            </div>
            <SectionTitle 
              title="What I Do" 
              subtitle="Expert services in design, development, and quality assurance." 
            />
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {DATA.whatIDo.map((w, idx) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Gradient border background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <Card className="relative p-7 h-full border-2 border-blue-200 group-hover:border-blue-400 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-blue-400/30">
                  <div className="flex gap-4">
                    {/* Icon container with animation */}
                    <motion.div 
                      className="flex-shrink-0 h-14 w-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 grid place-items-center text-white shadow-lg shadow-blue-500/40 group-hover:shadow-blue-600/50"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {w.icon}
                    </motion.div>

                    <div className="flex-1">
                      <h4 className="font-extrabold text-lg text-blue-900 group-hover:text-blue-600 transition-colors duration-300">
                        {w.title}
                      </h4>
                      <p className="mt-2 text-sm text-slate-600 group-hover:text-slate-800 transition-colors duration-300 line-clamp-2">
                        {w.desc}
                      </p>
                    </div>
                  </div>

                  {/* Hover arrow indicator */}
                  <motion.div 
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowRight className="h-5 w-5 text-blue-500" />
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="relative z-10 bg-gradient-to-br from-slate-50 via-blue-50/20 to-cyan-50 py-20 md:py-28">
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(59,130,246,0.06), transparent 50%)'
        }} />
        <div className="mx-auto max-w-6xl px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-4 bg-blue-100 px-4 py-2 rounded-full">
              <Rocket className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-extrabold text-blue-600">Professional Journey</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Work <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Experience</span></h2>
            <p className="text-slate-700 text-lg max-w-2xl leading-relaxed">
              Hands-on experience gained through various internships and projects in quality assurance, UX research, and data analytics.
            </p>
          </motion.div>

          <div className="grid gap-6">
            {DATA.experience.map((exp, idx) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <ExperienceCard exp={exp} onPdfOpen={setPdfModal} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="relative z-10 bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle at 80% 80%, rgba(59,130,246,0.2), transparent 50%)'
        }} />
        <div className="mx-auto max-w-6xl px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">Featured Projects</h2>
                <p className="mt-4 text-white/75 text-base md:text-lg leading-relaxed">
                  Projects showcasing my skills in design, development, and data analysis.
                </p>
              </div>

              <div className="relative w-full md:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/60" />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search projects…"
                  className="w-full rounded-xl border border-white/20 bg-white/10 backdrop-blur py-3 pl-12 pr-4 text-base font-semibold text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                />
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6">
            {filteredProjects.map((p, idx) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectRow p={p} onOpen={() => setActiveProject(p)} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATES */}
      <section id="certificates" className="relative z-10 bg-gradient-to-br from-slate-950 via-blue-900/20 to-slate-950 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 right-10 h-80 w-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl" />
          <div className="absolute -bottom-32 left-20 h-96 w-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-4 bg-blue-500/20 px-4 py-2 rounded-full border border-blue-400/50">
              <Award className="h-5 w-5 text-blue-400" />
              <span className="text-sm font-extrabold text-blue-300">Achievements</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Certifications & <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Awards</span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
              Professional certifications and achievements from industry-leading platforms and organizations.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {DATA.certifications.map((cert, idx) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Card className="p-8 h-full bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-blue-500/30 hover:border-blue-400/60 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-cyan-600/0 group-hover:from-blue-600/10 group-hover:to-cyan-600/10 transition-all duration-300" />
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-500 grid place-items-center text-white shadow-lg group-hover:shadow-xl transition flex-shrink-0">
                        {cert.type === 'image' ? (
                          <ImageIcon className="h-8 w-8" />
                        ) : (
                          <Award className="h-8 w-8" />
                        )}
                      </div>
                      <span className="text-xs font-extrabold bg-blue-500/30 text-blue-200 px-4 py-2 rounded-full border border-blue-400/50 font-bold whitespace-nowrap">{cert.year}</span>
                    </div>

                    <h4 className="font-extrabold text-white group-hover:text-blue-300 transition text-lg leading-snug mb-3 flex-grow">
                      {cert.title}
                    </h4>

                    <p className="text-sm text-cyan-300 font-bold uppercase tracking-widest mb-3">{cert.issuer}</p>

                    {cert.credential && (
                      <p className="text-xs text-white/60 mb-4 break-all font-medium bg-white/5 px-3 py-2 rounded-lg border border-white/10">
                        ID: <span className="text-blue-300">{cert.credential}</span>
                      </p>
                    )}

                    <motion.button
                      onClick={() => setPdfModal(cert.file)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-4 py-3 text-xs font-extrabold transition shadow-lg hover:shadow-xl"
                    >
                      <Award className="h-4 w-4" />
                      View Certificate
                    </motion.button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-900/30 to-slate-950" />
        <div className="absolute inset-0 opacity-40">
          <div className="absolute -top-40 right-0 h-96 w-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl" />
          <div className="absolute -bottom-40 left-0 h-96 w-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 py-20 md:py-28 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid gap-12 md:grid-cols-2 items-start">
              {/* Left Side - Contact Info */}
              <div>
                <div className="inline-flex items-center gap-2 mb-4 bg-blue-500/20 px-4 py-2 rounded-full border border-blue-400/50">
                  <Lightbulb className="h-5 w-5 text-blue-400" />
                  <span className="text-sm font-extrabold text-blue-300">Let's Talk</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">Get In <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Touch</span></h2>
                <p className="text-white/75 text-lg mb-8 leading-relaxed">I'd love to hear about your projects and collaboration opportunities. Let's create something amazing together!</p>

                <div className="space-y-4 mb-10">
                  <motion.a 
                    href={`mailto:${DATA.email}`}
                    className="flex items-center gap-4 p-5 rounded-2xl bg-white/10 backdrop-blur border border-white/20 hover:border-blue-400/50 hover:bg-white/20 transition group"
                    whileHover={{ x: 8 }}
                  >
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 grid place-items-center flex-shrink-0 group-hover:shadow-lg transition">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-extrabold text-white/60 uppercase tracking-widest">Email</p>
                      <p className="text-white font-extrabold group-hover:text-blue-300 transition">{DATA.email}</p>
                    </div>
                  </motion.a>

                  <motion.a 
                    href={`tel:${DATA.phone}`}
                    className="flex items-center gap-4 p-5 rounded-2xl bg-white/10 backdrop-blur border border-white/20 hover:border-cyan-400/50 hover:bg-white/20 transition group"
                    whileHover={{ x: 8 }}
                  >
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 grid place-items-center flex-shrink-0 group-hover:shadow-lg transition">
                      <Smartphone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-extrabold text-white/60 uppercase tracking-widest">Phone</p>
                      <p className="text-white font-extrabold group-hover:text-cyan-300 transition">{DATA.phone}</p>
                    </div>
                  </motion.a>

                  <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/10 backdrop-blur border border-white/20">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 grid place-items-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-extrabold text-white/60 uppercase tracking-widest">Location</p>
                      <p className="text-white font-extrabold">{DATA.location}</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <motion.a 
                    href={DATA.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-12 w-12 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 border border-white/20 grid place-items-center text-white hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20 transition"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Github className="h-6 w-6" />
                  </motion.a>
                  <motion.a 
                    href={DATA.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-700 to-blue-800 border border-white/20 grid place-items-center text-white hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/20 transition"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Linkedin className="h-6 w-6" />
                  </motion.a>
                </div>
              </div>

              {/* Right Side - Contact Form */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-10 bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur border border-blue-500/30 shadow-2xl">
                  <h3 className="text-3xl font-extrabold text-white mb-2">Send me a message</h3>
                  <p className="text-white/70 text-base mb-8">Get in touch for collaborations or just a friendly hello!</p>

                  <div className="space-y-4">
                    <motion.input 
                      className="w-full rounded-xl border-2 border-blue-400/30 bg-white/10 backdrop-blur px-4 py-3.5 text-base font-semibold text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                      placeholder="Your Name"
                      whileFocus={{ scale: 1.02 }}
                    />
                    <motion.input 
                      className="w-full rounded-xl border-2 border-blue-400/30 bg-white/10 backdrop-blur px-4 py-3.5 text-base font-semibold text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                      placeholder="your@email.com"
                      whileFocus={{ scale: 1.02 }}
                    />
                    <motion.textarea 
                      className="w-full rounded-xl border-2 border-blue-400/30 bg-white/10 backdrop-blur px-4 py-3.5 text-base font-semibold text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition resize-none"
                      placeholder="Your Message" 
                      rows={5}
                      whileFocus={{ scale: 1.02 }}
                    />
                    <motion.button 
                      className="w-full rounded-xl bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 hover:from-blue-600 hover:via-blue-700 hover:to-cyan-600 px-6 py-4 text-base font-extrabold text-white transition shadow-xl hover:shadow-2xl hover:shadow-blue-500/40 flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Send className="h-5 w-5" />
                      Send Message
                    </motion.button>
                  </div>

                  <p className="mt-6 text-xs text-white/50 text-center">I'll get back to you as soon as possible!</p>
                </Card>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="mt-16 text-center text-white/70 text-sm font-semibold border-t border-white/20 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          >
            © {new Date().getFullYear()} {DATA.name}. Crafted with passion and attention to detail.
          </motion.div>
        </div>
      </section>

      {/* Modals */}
      <Modal
        open={!!activeProject}
        onClose={() => setActiveProject(null)}
        title={activeProject?.title || ""}
      >
        {activeProject ? (
          <motion.div 
            className="grid gap-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-wrap gap-2">
              <Chip>{activeProject.year}</Chip>
              {activeProject.tags.slice(0, 2).map((t) => <Chip key={t}>{t}</Chip>)}
            </div>
            
            <motion.div 
              className="rounded-2xl overflow-hidden border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50 h-72 shadow-xl relative group"
              whileHover={{ scale: 1.01 }}
            >
              <img
                src={activeProject.img}
                alt={activeProject.title}
                className="h-full w-full object-cover group-hover:opacity-95 transition"
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
              {!activeProject.img && (
                <div className="h-full w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-400 via-blue-500 to-cyan-600 text-white relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute -top-10 right-10 h-40 w-40 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-30" />
                    <div className="absolute bottom-10 -left-10 h-40 w-40 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-30" />
                  </div>

                  <div className="relative z-10 text-center">
                    <div className="h-20 w-20 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 grid place-items-center mx-auto mb-4">
                      <Sparkles className="h-10 w-10" />
                    </div>
                    <p className="text-2xl font-extrabold">{activeProject.title}</p>
                    <p className="text-sm opacity-90 mt-3">Featured Project</p>
                  </div>
                </div>
              )}
            </motion.div>

            <motion.div 
              className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-5 border border-blue-200"
              whileHover={{ borderColor: "#3b82f6" }}
            >
              <h4 className="text-base font-extrabold text-blue-700 mb-2 flex items-center gap-2">
                <Sparkles className="h-5 w-5" /> Project Overview
              </h4>
              <p className="text-sm text-slate-700 leading-relaxed font-medium">
                {activeProject.fullDesc}
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-3">
              <motion.div 
                className="rounded-xl border-2 border-blue-200 bg-gradient-to-br from-blue-100 to-blue-50 p-4 hover:shadow-lg transition hover:border-blue-300"
                whileHover={{ y: -2 }}
              >
                <p className="text-xs font-extrabold uppercase text-blue-600 flex items-center gap-2 mb-2">
                  <Rocket className="h-4 w-4" /> Impact
                </p>
                <p className="text-sm font-extrabold text-slate-900">{activeProject.impact}</p>
              </motion.div>
              <motion.div 
                className="rounded-xl border-2 border-cyan-200 bg-gradient-to-br from-cyan-100 to-cyan-50 p-4 hover:shadow-lg transition hover:border-cyan-300"
                whileHover={{ y: -2 }}
              >
                <p className="text-xs font-extrabold uppercase text-cyan-600 flex items-center gap-2 mb-2">
                  <Target className="h-4 w-4" /> Focus
                </p>
                <p className="text-sm font-extrabold text-slate-900">{activeProject.focus}</p>
              </motion.div>
            </div>

            {activeProject.pdfs && activeProject.pdfs.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h4 className="text-base font-extrabold text-slate-800 mb-4 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-blue-600" /> Project Documents
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {activeProject.pdfs.map((pdf, idx) => (
                    <motion.button
                      key={idx}
                      onClick={() => setPdfModal(pdf)}
                      className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-5 py-4 text-sm font-extrabold transition shadow-md hover:shadow-lg border border-blue-400/50"
                      whileHover={{ scale: 1.02, x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FileText className="h-5 w-5" />
                      {pdf.replace(/[_-]/g, ' ').replace(/\.pdf$/, '').replace(/\(.*?\)/g, '').trim()}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            <div className="flex flex-wrap gap-2">
              {activeProject.pdfs && activeProject.pdfs.length > 0 ? (
                <>
                  <button
                    onClick={() => setPdfModal(activeProject.pdfs[0])}
                    className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 text-sm font-extrabold text-white hover:bg-blue-600 transition"
                  >
                    <FileText className="h-4 w-4" />
                    View PDF
                  </button>
                  {activeProject.pdfs.length > 1 && (
                    <button
                      onClick={() => setPdfModal(activeProject.pdfs[1])}
                      className="inline-flex items-center gap-2 rounded-lg bg-blue-500/80 px-4 py-2 text-sm font-extrabold text-white hover:bg-blue-600 transition"
                    >
                      <FileText className="h-4 w-4" />
                      View PDF {activeProject.pdfs.length > 1 ? `(${activeProject.pdfs.length})` : ''}
                    </button>
                  )}
                </>
              ) : (
                <a className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 text-sm font-extrabold text-white hover:bg-blue-600 transition"
                   href={activeProject.links.demo}>
                  View Demo <ExternalLink className="h-4 w-4" />
                </a>
              )}
              <a className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-white px-4 py-2 text-sm font-extrabold text-slate-800 hover:bg-slate-50 transition"
                 href={activeProject.links.repo}>
                Repository <Github className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        ) : null}
      </Modal>

      {pdfModal && (
        <motion.div 
          className="fixed inset-0 z-[90] flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <button
              onClick={() => setPdfModal(null)}
              className="absolute top-6 right-6 z-[91] rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 p-2 text-white shadow-lg hover:shadow-xl transition"
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="absolute top-6 left-6 z-[91]">
              <p className="text-sm font-extrabold text-slate-600 bg-white/90 backdrop-blur px-4 py-2 rounded-lg border border-blue-200">
                {pdfModal.replace(/[_-]/g, ' ').replace(/\.pdf$/, '').replace(/\.png$/, '').replace(/\.jpg$/, '').replace(/\(.*?\)/g, '').trim()}
              </p>
            </div>

            <iframe
              src={`/sephine-achievement/${pdfModal}`}
              className="w-full h-[90vh] border-0"
              title="Document"
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
