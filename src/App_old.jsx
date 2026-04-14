import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Mail, Github, Linkedin, MapPin, ArrowRight, ExternalLink,
  Smartphone, Monitor, Layout, PenTool, X, Sparkles, Download, FileText,
  Image as ImageIcon, Award, Search
} from "lucide-react";

/** ====== EDIT HERE ONLY (from your CV) ====== */
const DATA = {
  brand: "GracePortfolio",
  name: "Grace Yosephine",
  headline: "Building user-friendly products with UI/UX thinking + QA mindset.",
  subheadline:
    "Software Engineering student at Del Institute of Technology. Experience in QA, UX research, and data analytics. Passionate about creating reliable, usable, and modern digital solutions.",
  location: "Medan, North Sumatra, Indonesia",
  email: "graceyosephine63@gmail.com",
  phone: "+62 813-7407-1036",
  links: {
    github: "https://github.com/yourusername",
    linkedin: "https://www.linkedin.com/in/grace-yosephine-479233294",
  },

  stats: [
    { label: "Internships", value: "3" },
    { label: "Organizations", value: "3+" },
    { label: "Certificates", value: "20+" },
  ],

  aboutTitle: "About Grace",
  about:
    "I’m a Software Engineering student with experience in web/mobile projects and software quality assurance (SQA). I also have exposure to user research and UI/UX fundamentals to improve usability and system performance. I enjoy structured work, clear communication, and building products that feel clean, fast, and easy to use.",

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

  experience: [
    {
      role: "Quality Assurance Intern",
      org: "Jubelio",
      period: "Oct 2023 – Nov 2023",
      points: [
        "Designed and executed manual test cases for web modules.",
        "Performed functional and regression testing.",
        "Logged bugs and coordinated verification with developers."
      ]
    },
    {
      role: "UX Research Intern",
      org: "Telkom Indonesia Digital Amoeba",
      period: "Apr 2025 – May 2025",
      points: [
        "Conducted interviews, surveys, and usability testing.",
        "Analyzed qualitative/quantitative data for insights.",
        "Built low-fidelity prototypes and presented findings."
      ]
    },
    {
      role: "Big Data Analytics Intern",
      org: "Kimia Farma",
      period: "Jun 2025",
      points: [
        "Supported data cleaning and transformation tasks.",
        "Performed basic exploratory analysis and visualization.",
        "Assisted report preparation for decision making."
      ]
    }
  ],

  organizations: [
    {
      org: "Del English Club",
      roles: ["Member (Oct 2023)", "Event Coordinator (Oct 2024 – Jul 2025)", "Treasurer (Aug 2025 – Present)"]
    },
    {
      org: "SE Student Association",
      roles: ["Event Division (Sep 2024 – Sep 2025)", "Minister of Org Development (Oct 2025 – Present)"]
    },
    {
      org: "Del Programming Club",
      roles: ["Creative Team (Nov 2024 – Present)"]
    }
  ],

  certifications: [
    { title: "UKM DDSC Competitive Programming", issuer: "FIND IT", year: "2024", file: "(signed)Sertifikat UKM DDSC - Grace Yosephine.png", type: "image" },
    { title: "CSS Basics", issuer: "HackerRank", year: "2024", file: "css certificate.pdf", type: "pdf" },
    { title: "Data Science Basics", issuer: "DQLab", year: "2024", file: "dql lab data s.pdf", type: "pdf" },
    { title: "DQLab - Learn R", issuer: "DQLab", year: "2024", file: "dql lab guide learn r.pdf", type: "pdf" },
    { title: "DQLab - Python Intro", issuer: "DQLab", year: "2024", file: "dql lab intri pyhton.pdf", type: "pdf" },
    { title: "DQLab Fundamentals", issuer: "DQLab", year: "2024", file: "dql lab.pdf", type: "pdf" },
    { title: "UX Researcher - Final Task", issuer: "Telkom Digital Amoeba", year: "2025", file: "FinalTask_TDA_UX Researcher_Grace Yosephine.pdf", type: "pdf" },
    { title: "Profile Certificate", issuer: "Personal", year: "2025", file: "Grace Yosephine.png", type: "image" },
    { title: "JYN Competitive Programming", issuer: "JYN", year: "2025", file: "Grace Yosephine_JYN_Sertifikat Peserta Competitive Programming (1).pdf", type: "pdf" },
    { title: "HTML Fundamentals", issuer: "freeCodeCamp", year: "2025", file: "html.pdf", type: "pdf" },
    { title: "Java Basics Certificate", issuer: "HackerRank", year: "2024", file: "java_basic certificate.pdf", type: "pdf" },
    { title: "Big Data Analytics", issuer: "Kimia Farma", year: "2025", file: "pbi-certificate-246721IAPGGIT3052025.pdf", type: "pdf" },
    { title: "Python Basics Certificate", issuer: "HackerRank", year: "2024", file: "python_basic certificate.pdf", type: "pdf" },
    { title: "SQL Basics Certificate", issuer: "HackerRank", year: "2024", file: "sql_basic certificate.pdf", type: "pdf" },
    { title: "Dicoding - C Programming", issuer: "Dicoding", year: "2024", file: "dicoding bahasa c.pdf", type: "pdf" },
    { title: "Dicoding - Java Programming", issuer: "Dicoding", year: "2024", file: "dicoding java.pdf", type: "pdf" },
    { title: "Dicoding - SOLID Principles", issuer: "Dicoding", year: "2024", file: "dicoding solid.pdf", type: "pdf" },
    { title: "DevCode AI Talks #1", issuer: "DevCode", year: "2024", file: "Sertifkat Devcode AI Talks #1 - Grace Yosephine.pdf", type: "pdf" }
  ],

  projects: [
    {
      title: "SMPN 3 Laguboti Website",
      desc: "School information website with improved hierarchy and navigation.",
      year: "2024",
      img: "/projects/project1.png",
      tags: ["UI/UX", "Wireframe", "Prototype"],
      links: { demo: "#", repo: "#" }
    },
    {
      title: "Motorcycle Rental Platform",
      desc: "Responsive booking UI + dashboard layout for monitoring rentals.",
      year: "2025",
      img: "/projects/project2.png",
      tags: ["Frontend", "Responsive", "API"],
      links: { demo: "#", repo: "#" }
    },
    {
      title: "Student Organization Website",
      desc: "Information architecture + consistent page templates for content clarity.",
      year: "2025",
      img: "/projects/project3.png",
      tags: ["UI/UX", "IA", "Handoff"],
      links: { demo: "#", repo: "#" }
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
    <div className="mb-6">
      <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">{title}</h2>
      {subtitle ? <p className="mt-2 text-sm md:text-base text-slate-600">{subtitle}</p> : null}
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

/** Curved hero shape (CSS-only) */
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

/** ===== Projects layout like your 2nd reference image ===== */
function ProjectRow({ p, onOpen }) {
  return (
    <Card className="p-5 md:p-6">
      <div className="grid gap-5 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div>
          <div className="flex flex-wrap gap-2 items-center">
            <Chip>{p.year}</Chip>
            <Chip>Mobile App • Website & Admin</Chip>
          </div>

          <h3 className="mt-4 text-xl md:text-2xl font-extrabold text-slate-900">
            {p.title}
          </h3>
          <p className="mt-2 text-sm md:text-base text-slate-600">{p.desc}</p>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/70 bg-white/80 p-3">
              <p className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500">Impact</p>
              <p className="mt-1 text-sm font-extrabold text-slate-900">Clearer UX flow</p>
            </div>
            <div className="rounded-2xl border border-white/70 bg-white/80 p-3">
              <p className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500">Focus</p>
              <p className="mt-1 text-sm font-extrabold text-slate-900">UI hierarchy</p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {p.tags.map((t) => <Chip key={t}>{t}</Chip>)}
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <button
              onClick={onOpen}
              className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-4 py-2 text-sm font-extrabold text-white hover:bg-blue-600 transition"
            >
              View details <ArrowRight className="h-4 w-4" />
            </button>

            <a className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-white/80 px-4 py-2 text-sm font-extrabold text-slate-800 hover:bg-white transition"
               href={p.links.demo}>
              Demo <ExternalLink className="h-4 w-4" />
            </a>

            <a className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-white/80 px-4 py-2 text-sm font-extrabold text-slate-800 hover:bg-white transition"
               href={p.links.repo}>
              Repo <Github className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden border border-white/70 bg-white/80">
          <div className="p-3 text-xs font-extrabold text-slate-600">UI Preview</div>
          <img
            src={p.img}
            alt={p.title}
            className="h-56 w-full object-cover"
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />
          <div className="p-4 text-sm text-slate-600">
            If image doesn’t show: put screenshot in <b>/public/projects</b>.
          </div>
        </div>
      </div>
    </Card>
  );
}

function Modal({ open, onClose, title, children }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[80] flex items-end md:items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-950/40" onClick={onClose} />
      <div className="relative w-full max-w-3xl rounded-2xl border border-white/70 bg-white/95 shadow-soft">
        <div className="flex items-start justify-between gap-3 border-b border-white/70 p-4">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-widest text-slate-500">Project</p>
            <h3 className="mt-1 text-lg md:text-xl font-extrabold text-slate-900">{title}</h3>
          </div>
          <button
            onClick={onClose}
            className="rounded-xl border border-white/70 bg-white px-2 py-2 hover:bg-slate-50"
            aria-label="Close"
          >
            <X className="h-4 w-4 text-slate-700" />
          </button>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}

export default function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [q, setQ] = useState("");

  const filteredProjects = useMemo(() => {
    const qq = q.trim().toLowerCase();
    return DATA.projects.filter((p) => {
      const blob = `${p.title} ${p.desc} ${p.tags.join(" ")}`.toLowerCase();
      return !qq || blob.includes(qq);
    });
  }, [q]);

  return (
    <div className="min-h-screen hero-glow">
      {/* hero dotted green background like reference */}
      <div className="absolute inset-0 bg-dots opacity-60" />

      {/* NAV */}
      <header className="relative z-10">
        <div className="mx-auto max-w-6xl px-4 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-blue-500 text-white grid place-items-center shadow-soft">
              <Sparkles className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <div className="font-extrabold text-slate-900">{DATA.brand}</div>
              <div className="text-xs font-semibold text-slate-600">{DATA.name}</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-extrabold text-slate-700">
            <a href="#home" className="hover:text-slate-900">Home</a>
            <a href="#about" className="hover:text-slate-900">About me</a>
            <a href="#skills" className="hover:text-slate-900">My skills</a>
            <a href="#projects" className="hover:text-slate-900">Projects</a>
            <a href="#certificates" className="hover:text-slate-900">Certificates</a>
            <a href="#articles" className="hover:text-slate-900">Articles</a>
          </nav>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-blue-400 bg-white/80 px-4 py-2 text-sm font-extrabold text-blue-700 hover:bg-white transition"
          >
            Contact Me <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative z-10">
        <div className="mx-auto max-w-6xl px-4 pb-12 pt-2 relative">
          <HeroShape />
          <FloatingIcons />

          <div className="grid gap-10 lg:grid-cols-2 items-stretch relative">
            {/* Left white */}
            <div className="pt-10 lg:pt-16">
              <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 leading-tight">
                {DATA.headline}
              </h1>
              <p className="mt-4 max-w-xl text-slate-600 text-sm md:text-base leading-relaxed">
                {DATA.subheadline}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-5 py-3 text-sm font-extrabold text-white hover:bg-blue-600 transition shadow-soft"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={`mailto:${DATA.email}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-white/80 px-5 py-3 text-sm font-extrabold text-slate-800 hover:bg-white transition"
                >
                  Email <Mail className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-6 items-center">
                {DATA.stats.map((s) => (
                  <div key={s.label} className="flex items-center gap-2">
                    <div className="h-9 w-9 rounded-xl bg-blue-500/10 border border-blue-200 grid place-items-center">
                      <div className="h-2 w-2 rounded-full bg-blue-500" />
                    </div>
                    <div>
                      <div className="text-lg font-extrabold text-slate-900">{s.value}</div>
                      <div className="text-xs font-semibold text-slate-600">{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                <Chip><MapPin className="h-3.5 w-3.5" /> {DATA.location}</Chip>
                <Chip>UI/UX • QA • Frontend</Chip>
              </div>
            </div>

            {/* Right dark (illustration-ish) */}
            <div className="relative lg:pt-12">
              <div className="relative rounded-3xl bg-slate-950 text-white p-6 md:p-8 shadow-soft overflow-hidden">
                <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-blue-500/25 blur-2xl" />
                <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-cyan-400/20 blur-2xl" />

                <p className="text-xs font-extrabold uppercase tracking-widest text-blue-200/90">
                  UI Preview • Clean Layout • UX-first
                </p>
                <h3 className="mt-2 text-xl md:text-2xl font-extrabold">
                  Modern, readable interfaces.
                </h3>
                <p className="mt-2 text-sm text-white/75">
                  Built with structure, spacing, and consistent components — not random boxes.
                </p>

                <div className="mt-6 grid gap-3 md:grid-cols-2">
                  <DarkCard className="p-4">
                    <p className="text-xs font-extrabold text-blue-200/80 uppercase tracking-widest">Focus</p>
                    <p className="mt-1 text-sm font-extrabold">UI hierarchy & clarity</p>
                  </DarkCard>
                  <DarkCard className="p-4">
                    <p className="text-xs font-extrabold text-blue-200/80 uppercase tracking-widest">Mindset</p>
                    <p className="mt-1 text-sm font-extrabold">QA + usability checks</p>
                  </DarkCard>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-extrabold hover:bg-white/15 transition"
                     href={DATA.links.github}>
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                  <a className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-extrabold hover:bg-white/15 transition"
                     href={DATA.links.linkedin}>
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT blue section like reference */}
      <section id="about" className="relative z-10 bg-blue-500">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-8 md:grid-cols-[1.3fr_0.7fr] items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-extrabold">{DATA.aboutTitle}</h2>
              <p className="mt-4 text-white/90 leading-relaxed text-sm md:text-base">
                {DATA.about}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {DATA.skills.slice(0, 10).map((s) => (
                  <span key={s} className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="w-40 h-40 rounded-full bg-white/20 border border-white/30 overflow-hidden shadow-soft">
                <img
                  src="/profile.jpg"
                  alt="Profile"
                  className="h-full w-full object-cover"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
                <div className="h-full w-full grid place-items-center text-white/90 text-sm font-extrabold">
                  Add /public/profile.jpg
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT I DO + LANGUAGES */}
      <section className="relative z-10">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <SectionTitle title="What I Do" subtitle="Clear services — no clutter." />
              <div className="grid gap-4 sm:grid-cols-2">
                {DATA.whatIDo.map((w) => (
                  <Card key={w.title} className="p-5">
                    <div className="h-10 w-10 rounded-xl bg-blue-500/10 border border-blue-200 grid place-items-center text-blue-700">
                      {w.icon}
                    </div>
                    <div className="mt-3 font-extrabold text-slate-900">{w.title}</div>
                    <div className="mt-1 text-sm text-slate-600">{w.desc}</div>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <SectionTitle title="Language I speak" subtitle="Simple and clear." />
              <div className="grid gap-4">
                {DATA.languages.map((l) => (
                  <Card key={l.name} className="p-5 flex items-center justify-between">
                    <div className="font-extrabold text-slate-900">{l.name}</div>
                    <Chip>{l.level}</Chip>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS (dark like reference) */}
      <section id="projects" className="relative z-10 bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-blue-300">My Projects</h2>
              <p className="mt-2 text-white/70 text-sm md:text-base">
                Featured projects with UI previews — like your reference layout.
              </p>
            </div>

            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search projects…"
                className="w-full rounded-xl border border-white/15 bg-white/10 py-3 pl-10 pr-3 text-sm font-semibold text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          <div className="mt-8 space-y-4">
            {filteredProjects.map((p) => (
              <ProjectRow key={p.title} p={p} onOpen={() => setActiveProject(p)} />
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATES */}
      <section id="certificates" className="relative z-10 bg-gradient-to-b from-blue-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">My Certificates</h2>
            <p className="mt-2 text-slate-600 text-sm md:text-base">
              Professional certifications & achievements from various platforms and programs.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {DATA.certifications.map((cert) => (
              <Card key={cert.title} className="p-5 hover:shadow-lg transition group">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-blue-500/10 border border-blue-200 grid place-items-center text-blue-600 flex-shrink-0">
                    {cert.type === 'image' ? (
                      <ImageIcon className="h-5 w-5" />
                    ) : (
                      <FileText className="h-5 w-5" />
                    )}
                  </div>
                  <span className="text-xs font-extrabold bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full">{cert.year}</span>
                </div>
                <h3 className="font-extrabold text-slate-900 group-hover:text-blue-600 transition">{cert.title}</h3>
                <p className="text-xs text-slate-600 mt-1">{cert.issuer}</p>
                <div className="mt-4 flex gap-2">
                  <a
                    href={`/sephine'achievement/${cert.file}`}
                    download
                    className="inline-flex items-center gap-1.5 flex-1 rounded-lg bg-blue-500/10 hover:bg-blue-500 text-blue-700 hover:text-white px-3 py-2 text-xs font-extrabold transition"
                  >
                    <Download className="h-3.5 w-3.5" />
                    {cert.type === 'image' ? 'View' : 'PDF'}
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section id="articles" className="relative z-10">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <SectionTitle title="Articles" subtitle="Short, useful notes (optional section)." />
          <div className="grid gap-4 md:grid-cols-3">
            {DATA.articles.map((a) => (
              <Card key={a.title} className="p-5">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50/75 px-3 py-1 text-xs font-semibold text-blue-700">
                    {a.tag}
                  </span>
                  <span className="text-xs font-extrabold text-slate-500">{a.date}</span>
                </div>
                <div className="mt-3 font-extrabold text-slate-900">{a.title}</div>
                <div className="mt-3 text-sm text-slate-600">
                  Add your real article links later (Medium, GitHub Pages, etc).
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative z-10 bg-blue-500">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-6 md:grid-cols-2 items-start">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-extrabold">Contact Info</h2>
              <div className="mt-5 grid gap-3">
                <div className="rounded-2xl bg-white/15 border border-white/20 p-4">
                  <div className="text-xs font-extrabold uppercase tracking-widest text-white/80">Email</div>
                  <div className="mt-1 font-extrabold">{DATA.email}</div>
                </div>
                <div className="rounded-2xl bg-white/15 border border-white/20 p-4">
                  <div className="text-xs font-extrabold uppercase tracking-widest text-white/80">Phone</div>
                  <div className="mt-1 font-extrabold">{DATA.phone}</div>
                </div>
                <div className="rounded-2xl bg-white/15 border border-white/20 p-4">
                  <div className="text-xs font-extrabold uppercase tracking-widest text-white/80">Location</div>
                  <div className="mt-1 font-extrabold">{DATA.location}</div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a className="inline-flex items-center gap-2 rounded-xl bg-white/15 border border-white/25 px-4 py-2 text-sm font-extrabold hover:bg-white/20 transition"
                   href={DATA.links.github}>
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a className="inline-flex items-center gap-2 rounded-xl bg-white/15 border border-white/25 px-4 py-2 text-sm font-extrabold hover:bg-white/20 transition"
                   href={DATA.links.linkedin}>
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </div>
            </div>

            <Card className="p-6">
              <div className="text-lg font-extrabold text-slate-900">Email me for collaboration</div>
              <p className="mt-2 text-sm text-slate-600">This is a simple UI form (no backend yet).</p>

              <div className="mt-4 grid gap-3">
                <input className="w-full rounded-xl border border-blue-200 bg-white px-4 py-3 text-sm font-semibold outline-none focus:ring-2 focus:ring-blue-300"
                       placeholder="Name" />
                <input className="w-full rounded-xl border border-blue-200 bg-white px-4 py-3 text-sm font-semibold outline-none focus:ring-2 focus:ring-blue-300"
                       placeholder="Email" />
                <textarea className="w-full rounded-xl border border-blue-200 bg-white px-4 py-3 text-sm font-semibold outline-none focus:ring-2 focus:ring-blue-300"
                          placeholder="Message" rows={4} />
                <button className="rounded-xl bg-blue-500 px-4 py-3 text-sm font-extrabold text-white hover:bg-blue-600 transition">
                  Send
                </button>
              </div>
            </Card>
          </div>

          <div className="mt-10 text-center text-white/80 text-sm font-semibold">
            © {new Date().getFullYear()} {DATA.name}. All rights reserved.
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <Modal
        open={!!activeProject}
        onClose={() => setActiveProject(null)}
        title={activeProject?.title || ""}
      >
        {activeProject ? (
          <div className="grid gap-4">
            <div className="flex flex-wrap gap-2">
              <Chip>{activeProject.year}</Chip>
              {activeProject.tags.map((t) => <Chip key={t}>{t}</Chip>)}
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/70 bg-white">
              <img
                src={activeProject.img}
                alt={activeProject.title}
                className="h-64 w-full object-cover"
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
              <div className="p-4 text-sm text-slate-600">
                Add your UI screenshots into <b>/public/projects</b> to make this section look premium.
              </div>
            </div>
            <div className="text-sm text-slate-700 leading-relaxed">
              {activeProject.desc}
            </div>
            <div className="flex flex-wrap gap-3">
              <a className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-4 py-2 text-sm font-extrabold text-white hover:bg-blue-600 transition"
                 href={activeProject.links.demo}>
                Demo <ExternalLink className="h-4 w-4" />
              </a>
              <a className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-white px-4 py-2 text-sm font-extrabold text-slate-800 hover:bg-slate-50 transition"
                 href={activeProject.links.repo}>
                Repo <Github className="h-4 w-4" />
              </a>
            </div>
          </div>
        ) : null}
      </Modal>
    </div>
  );
}
