"use client";

import { useEffect, useState } from "react";
import { Mail, MapPin, ArrowUp, X, FileText, Menu } from "lucide-react";

/* ==================================================================== */
/*  CUSTOM SVG ICONS (Github & Linkedin)                                */
/* ==================================================================== */

function IconGithub({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  );
}

function IconLinkedin({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  );
}

/* ==================================================================== */
/*  CONTENT           */
/* ==================================================================== */

const PROFILE = {
  name: "Muhammad Haris",
  heroName: "Haris", // shown in the Home section
  role: "Computer Science Student",
  tagline: "AI  •  Cybersecurity  •  Web Development",
  email: "harishkm9899@gmail.com",
  github: "https://github.com/professorharis", // GitHub profile
  linkedin: "https://www.linkedin.com/in/harisxdev", //  LinkedIn profile
  heroPhoto: "/haris-hero.jpg", // Hero section photo 
  aboutPhoto: "/haris-about.jpg", // About section photo
  location: "District Mohmand, Khyber Pakhtunkhwa, Pakistan",
};

const FORM_ENDPOINT = "";

const NAV = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Education", "education"],
  ["Certificates", "certificates"],
  ["Contact", "contact"],
] as const;

const SKILL_GROUPS = [
  {
    title: "Technical Skills",
    icon: "</>",
    items: [
      "Modern Web Development",
      "Frontend Development",
      "Artificial Intelligence Fundamentals",
      "Cybersecurity Fundamentals",
      "Microsoft Office",
      "Technical Problem-Solving",
    ],
  },
  {
    title: "AI & Creative Skills",
    icon: "AI",
    items: [
      "AI Tools & Prompting",
      "AI-Assisted Development",
      "AI-Assisted Content Creation",
      "Thumbnail & Graphic Design",
    ],
  },
  {
    title: "Professional Skills",
    icon: "PS",
    items: [
      "Analytical Thinking",
      "Critical Thinking",
      "Research Skills",
      "Communication",
      "Time Management",
      "Self-Directed Learning",
    ],
  },
];

const SERVICES = [
  {
    title: "Modern Web Development",
    text: "I build clean, responsive websites and web apps that are simple to use and fast to load.",
    icon: "</>",
  },
  {
    title: "Solving Problems with AI Tools",
    text: "I use AI tools with clear prompts to speed up coding, design and research, and I always review the result myself.",
    icon: "AI",
  },
  {
    title: "MS Office & Computer Work",
    text: "Word, Excel, PowerPoint and everyday computer tasks are things I handle comfortably.",
    icon: "PC",
  },
];

type Project = {
  title: string;
  category: "AI" | "Web App";
  image: string;
  desc: string;
  tech: string[];
  github: string;
  live: string;
  date: string;
};

const PROJECTS: Project[] = [
  {
    title: "Custos AI",
    category: "AI",
    image: "/projects/custos.png",
    desc: "An AI-powered cybersecurity platform that checks suspicious URLs, phishing emails and scam messages, then gives a risk assessment, recommendations and a downloadable report.",
    tech: ["AI", "Cybersecurity", "Web App"],
    github: "https://github.com/professorharis/custos.ai",
    live: "https://getcustos.vercel.app",
    date: "Sep 2026 – Present",
  },
  {
    title: "Convertify Pro",
    category: "Web App",
    image: "/projects/convertify.png",
    desc: "A universal file conversion platform. Convert documents and images between many formats through a simple, user-friendly interface.",
    tech: ["Web App", "File Conversion", "Frontend"],
    github: "https://github.com/professorharis/convertify",
    live: "https://convertify-pro.vercel.app/",
    date: "Jan 2026 – Feb 2026",
  },
  {
    title: "Enhance Me",
    category: "Web App",
    image: "/projects/enhance.png",
    desc: "A web-based image utility for background removal, resizing, compression, format conversion and other image-processing tasks.",
    tech: ["Web App", "Image Processing", "Frontend"],
    github: "https://github.com/professorharis/enhance-me",
    live: "https://enhance-me.vercel.app/",
    date: "Oct 2025 – Nov 2025",
  },
];

const EDUCATION = [
  {
    title: "Secondary School Certificate (Matric)",
    place: "Govt Model Higher Secondary School Ghanzi Baig, District Mohmand",
    period: "2023 – 2024",
    result: "1014 marks",
    grade: "Grade A1 · Science",
  },
  {
    title: "F.Sc Computer Science",
    place: "Government Higher Secondary School Ghallanai",
    period: "2024 – 2026",
    result: "870 / 1200",
    grade: "Grade A",
  },
  {
    title: "Diploma in Information Technology (DIT)",
    place: "Govt. College of Management Sciences Ghallanai, Mohmand",
    period: "2025 – 2026",
    result: "789 / 1000",
    grade: "Grade A",
  },
];

//  certificate 
const CERTIFICATES = [
  {
    title: "Digital Skills: Artificial Intelligence",
    issuer: "Accenture / FutureLearn",
    date: "25 March 2026",
    about: "Fundamentals of AI, including key concepts, real-world applications and digital skills.",
    image: "/certs/accenture.png",
    pdf: "/certs/accenture.pdf",
  },
  {
    title: "Ethical Hacking and Cybersecurity",
    issuer: "Khyber Pakhtunkhwa Skills Development Program",
    date: "Online course",
    about: "Basics of ethical hacking, cybersecurity and core security concepts.",
    image: "/certs/cybersecurity.png",
    pdf: "/certs/cybersecurity.pdf",
  },
  {
    title: "AI and Data Science for Beginners",
    issuer: "Khyber Pakhtunkhwa Skills Development Program",
    date: "Online course",
    about: "Fundamentals of AI, machine learning and data science with practical applications.",
    image: "/certs/ai-ds.png",
    pdf: "/certs/ai-ds.pdf",
  },
];

/* ==================================================================== */
/*  THEME                                                                */
/* ==================================================================== */

const RED = "#e8434a";
const RED_DARK = "#c9333a";
const NAVY = "#0b1324";
const HERO_BG = "#1a1f27";

/* ==================================================================== */
/*  HELPERS                                                              */
/* ==================================================================== */

function useTyping(text: string, speed = 90) {
  const [out, setOut] = useState("");
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setOut(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);
  return out;
}

function SectionTitle({
  title,
  sub,
  light = false,
}: {
  title: string;
  sub?: string;
  light?: boolean;
}) {
  return (
    <div className="mb-12 text-center">
      <h2 className={`text-3xl font-semibold md:text-4xl ${light ? "text-white" : "text-slate-900"}`}>
        {title}
      </h2>
      <div className="mx-auto mt-3 h-[3px] w-14 rounded" style={{ background: RED }} />
      {sub && (
        <p
          className={`mx-auto mt-4 max-w-xl text-sm leading-relaxed ${
            light ? "text-slate-300" : "text-slate-500"
          }`}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

function SafeImage({
  src,
  alt,
  label,
  className = "",
  contain = false,
}: {
  src: string;
  alt: string;
  label?: string;
  className?: string;
  contain?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-600 text-center text-white ${className}`}
      >
        <span className="px-4 text-sm font-medium opacity-90">{label ?? alt}</span>
      </div>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`${contain ? "object-contain" : "object-cover"} ${className}`}
    />
  );
}

/* ==================================================================== */
/*  PAGE                                                                 */
/* ==================================================================== */

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [filter, setFilter] = useState<"All" | Project["category"]>("All");
  const [openCert, setOpenCert] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const typedName = useTyping(PROFILE.heroName);

  const STATS = [
    { value: String(PROJECTS.length), label: "Projects built" },
    { value: String(CERTIFICATES.length), label: "Certificates" },
    { value: String(EDUCATION.length), label: "Education levels" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    NAV.forEach(([, id]) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    const onScroll = () => setScrolled(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (openCert === null) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenCert(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openCert]);

  const visibleProjects = PROJECTS.filter((p) => filter === "All" || p.category === filter);

  const validEmail = /^\S+@\S+\.\S+$/.test(form.email);
  const canSend = form.name.trim() && validEmail && form.message.trim().length > 5;

  const sendMessage = async () => {
    if (!canSend) return;
    if (!FORM_ENDPOINT) {
      const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
      const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
      window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
      setStatus("sent");
      return;
    }
    try {
      setStatus("sending");
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputCls =
    "w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#e8434a] focus:ring-2 focus:ring-[#e8434a]/20";

  return (
    <main className="min-h-screen scroll-smooth bg-white text-slate-800 antialiased">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>

      {/* top info bar */}
      <div className="hidden text-xs text-white sm:block" style={{ background: RED_DARK }}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-2">
          <span className="flex items-center gap-2">
            <Mail size={14} /> {PROFILE.email}
          </span>
          <span className="flex items-center gap-2">
            <MapPin size={14} /> {PROFILE.location}
          </span>
        </div>
      </div>

      {/* header */}
      <header className="sticky top-0 z-50 shadow-md" style={{ background: RED }}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
          <a href="#home" className="text-2xl font-bold tracking-tight text-white">
            Haris<span className="text-white/60">.</span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {NAV.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                aria-current={active === id ? "page" : undefined}
                className={`rounded px-3 py-2 text-sm font-medium transition ${
                  active === id ? "bg-white/20 text-white" : "text-white/85 hover:text-white"
                }`}
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-3 rounded bg-white px-4 py-2 text-sm font-semibold transition hover:bg-slate-100"
              style={{ color: RED }}
            >
              Hire Me
            </a>
          </nav>

          <button
            className="rounded p-1 text-white lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="flex flex-col border-t border-white/20 px-5 pb-4 lg:hidden" aria-label="Mobile">
            {NAV.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                className={`py-2.5 text-sm font-medium ${active === id ? "text-white" : "text-white/80"}`}
              >
                {label}
              </a>
            ))}
          </nav>
        )}
      </header>

     {/* ============================ HOME ============================ */}
<section
  id="home"
  className="relative scroll-mt-16 overflow-hidden text-white"
  style={{ backgroundColor: HERO_BG }}
>
  {/* photo: screen ke bilkul right edge par, poori height */}
  <div className="pointer-events-none absolute inset-y-0 right-0 w-full opacity-40 md:w-[55%] md:pr-[6%] md:opacity-100">
  <div className="relative h-full w-full">
    <SafeImage
      src={PROFILE.heroPhoto}
      alt={`Portrait of ${PROFILE.name}`}
      label="Add your photo at /public/haris-hero.jpg"
      className="h-full w-full object-contain object-right-bottom"
    />
    <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#1a1f27] to-transparent" />
  </div>
</div>
  {/* text: left side */}
  <div className="relative z-10 mx-auto flex min-h-[560px] max-w-6xl flex-col justify-center px-5 py-16 md:min-h-[680px]">
    <div className="max-w-xl">
      <p className="text-2xl font-medium" style={{ color: RED }}>
        Hello!
      </p>
      <h1 className="mt-2 text-4xl font-bold leading-tight md:text-6xl">
        I Am {typedName}
        <span
          className="ml-1 inline-block h-[0.9em] w-[2px] translate-y-1 animate-pulse bg-white/70"
          aria-hidden
        />
      </h1>
      <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-300">
        A passionate Computer Science student focused on AI, cybersecurity and web
        development, learning by building real projects.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#projects"
          className="rounded-full px-7 py-3 text-sm font-semibold text-white transition hover:brightness-110"
          style={{ background: "#ff4d55" }}
        >
          Projects
        </a>
        <a
          href="#contact"
          className="rounded-full px-7 py-3 text-sm font-semibold text-white transition hover:brightness-110"
          style={{ background: "#ff4d55" }}
        >
          Contact
        </a>
        <a
          href={PROFILE.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          <IconGithub size={16} /> GitHub
        </a>
      </div>

      <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/10 pt-6">
        {STATS.map((s) => (
          <div key={s.label}>
            <dt className="sr-only">{s.label}</dt>
            <dd>
              <span className="text-3xl font-bold text-white">{s.value}</span>
              <span className="ml-2 text-sm text-slate-400">{s.label}</span>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  </div>
</section>

      {/* ============================ ABOUT ============================ */}
      <section id="about" className="mx-auto max-w-6xl scroll-mt-16 px-5 py-20">
        <div className="grid items-start gap-12 md:grid-cols-[320px_1fr]">
          <div className="mx-auto w-full max-w-xs overflow-hidden rounded-lg shadow-lg">
            <div className="h-95 bg-slate-100">
              <SafeImage
                src={PROFILE.aboutPhoto}
                alt={PROFILE.name}
                label="Add your photo at /public/haris-about.jpg"
                className="h-full w-full object-top"
              />
            </div>
            <div className="p-5 text-white" style={{ background: RED }}>
              <p className="text-lg font-semibold">{PROFILE.name}</p>
              <p className="text-sm text-white/90">{PROFILE.role}</p>
              <div className="mt-4 flex gap-2">
                {[
                  { Ic: IconGithub, href: PROFILE.github, l: "GitHub", color: "#181717" },
                  { Ic: IconLinkedin, href: PROFILE.linkedin, l: "LinkedIn", color: "#0A66C2" },
                  { Ic: Mail, href: `mailto:${PROFILE.email}`, l: "Email", color: "#EA4335" },
                ].map((s) => (
                  <a
                    key={s.l}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.l}
                    className="flex h-9 w-9 items-center justify-center rounded-full text-white transition hover:scale-105"
                    style={{ backgroundColor: s.color }}
                  >
                    <s.Ic size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">About me</h2>
            <div className="mt-3 h-[3px] w-14 rounded" style={{ background: RED }} />

            <div className="mt-6 space-y-4 leading-relaxed text-slate-600">
              <p>
                My name is Muhammad Haris and I&apos;m from District Mohmand, Pakistan. I completed my
                Matric in Science with an A1 grade, then studied F.Sc Computer Science and a Diploma
                in Information Technology (DIT) at the same time.
              </p>
              <p>
                I&apos;m most interested in Artificial Intelligence, Cybersecurity and Web Development.
                I don&apos;t just read about them. I build small projects such as Custos AI, Convertify
                Pro and Enhance Me so that my skills are practical, not only theoretical.
              </p>
              <p>
                My goal is to continue my education internationally, strengthen my technical skills
                and build technology that helps people solve real problems.
              </p>
            </div>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "F.Sc Computer Science + DIT",
                "Focus on AI, Cybersecurity & Web Dev",
                "Learns by building real projects",
                "Interested in online business & trading",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-slate-700">
                  <span
                    className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                    style={{ background: RED }}
                    aria-hidden
                  />
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-8 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-lg border border-slate-200 p-4">
                <p className="font-semibold text-slate-900">Languages</p>
                <p className="mt-1 text-slate-500">Pashto (native), Urdu (B2), English (B1)</p>
              </div>
              <div className="rounded-lg border border-slate-200 p-4">
                <p className="font-semibold text-slate-900">Based in</p>
                <p className="mt-1 text-slate-500">Mohmand, Pakistan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================== WHAT I DO ========================== */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionTitle title="What I do" sub="The kind of work I do and where I can help." />
          <div className="grid gap-6 md:grid-cols-3">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="overflow-hidden rounded-lg bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className="flex h-28 items-center justify-center text-4xl font-bold text-white"
                  style={{ background: `linear-gradient(135deg, ${NAVY}, ${RED})` }}
                >
                  {s.icon}
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-semibold text-slate-900">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ SKILLS ============================ */}
      <section id="skills" className="mx-auto max-w-6xl scroll-mt-16 px-5 py-20">
        <SectionTitle title="My skills" sub="What I have learned so far, and what I keep improving." />
        <div className="grid gap-6 md:grid-cols-3">
          {SKILL_GROUPS.map((g) => (
            <div key={g.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-md text-xs font-bold text-white"
                  style={{ background: RED }}
                >
                  {g.icon}
                </span>
                <h3 className="font-semibold text-slate-900">{g.title}</h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <li
                    key={i}
                    className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700"
                  >
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* =========================== PROJECTS =========================== */}
      <section id="projects" className="scroll-mt-16 bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionTitle
            title="My recent projects"
            sub="Real projects I built and deployed. Open the live demo or read the code on GitHub."
          />

          <div className="mb-10 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Filter projects">
            {(["All", "AI", "Web App"] as const).map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={filter === f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                  filter === f
                    ? "text-white shadow"
                    : "border border-slate-300 bg-white text-slate-600 hover:border-slate-400"
                }`}
                style={filter === f ? { background: RED } : undefined}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visibleProjects.map((p) => (
              <article
                key={p.title}
                className="group flex flex-col overflow-hidden rounded-lg bg-white shadow-md transition hover:shadow-xl"
              >
                <div className="relative h-52 overflow-hidden">
                  <SafeImage
                    src={p.image}
                    alt={`${p.title} screenshot`}
                    label={p.title}
                    className="h-full w-full transition duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 transition focus-within:opacity-100 group-hover:opacity-100"
                    style={{ background: "rgba(232,67,74,.93)" }}
                  >
                    <p className="text-lg font-semibold text-white">{p.title}</p>
                    <div className="flex gap-2">
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded bg-white px-4 py-2 text-xs font-semibold"
                        style={{ color: RED }}
                      >
                        Live Demo
                      </a>
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded border border-white px-4 py-2 text-xs font-semibold text-white"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs text-slate-400">{p.date}</p>
                  <h3 className="mt-1 text-lg font-semibold text-slate-900">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border px-3 py-1 text-xs"
                        style={{ borderColor: RED, color: RED }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex gap-3 border-t border-slate-100 pt-4 text-sm font-semibold">
                    <a href={p.live} target="_blank" rel="noreferrer" style={{ color: RED }}>
                      Live Demo
                    </a>
                    <span className="text-slate-300">|</span>
                    <a href={p.github} target="_blank" rel="noreferrer" className="text-slate-700">
                      GitHub
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================== EDUCATION =========================== */}
      <section id="education" className="mx-auto max-w-4xl scroll-mt-16 px-5 py-20">
        <SectionTitle title="My education" sub="My academic journey so far." />
        <div className="divide-y divide-slate-200 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          {EDUCATION.map((e) => (
            <div
              key={e.title}
              className="grid gap-2 p-5 md:grid-cols-[130px_1fr_auto] md:items-center md:gap-6"
            >
              <p className="text-sm font-semibold" style={{ color: RED }}>
                {e.period}
              </p>
              <div className="min-w-0">
                <h3 className="font-semibold text-slate-900">{e.title}</h3>
                <p className="mt-0.5 text-sm text-slate-500">{e.place}</p>
              </div>
              <p className="text-sm font-semibold text-slate-900 md:text-right">
                {e.result}
                <span className="block text-xs font-medium text-slate-500">{e.grade}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================== CERTIFICATES ========================== */}
      <section
        id="certificates"
        className="scroll-mt-16 py-20"
        style={{
          backgroundColor: NAVY,
          backgroundImage:
            "linear-gradient(rgba(11,19,36,.94), rgba(11,19,36,.94)), repeating-linear-gradient(45deg, #1e293b 0 2px, transparent 2px 14px)",
        }}
      >
        <div className="mx-auto max-w-6xl px-5">
          <SectionTitle
            light
            title="My certificates"
            sub="Courses and programs I completed. Click a card to view the certificate."
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {CERTIFICATES.map((c, i) => (
              <button
                key={c.title}
                onClick={() => setOpenCert(i)}
                className="group overflow-hidden rounded-xl text-left text-white shadow-xl transition hover:-translate-y-1"
                style={{ background: "rgba(232,67,74,.9)" }}
                aria-label={`View certificate: ${c.title}`}
              >
                <div className="relative h-60 overflow-hidden bg-slate-900">
                  <SafeImage
                    src={c.image}
                    alt={`${c.title} certificate`}
                    label="Certificate preview"
                    className="h-full w-full transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-semibold leading-snug">{c.title}</h3>
                  <p className="mt-2 text-sm text-white/90">{c.issuer}</p>
                  <p className="mt-1 text-sm text-white/75">{c.date}</p>
                  <p className="mt-5 flex items-center gap-2 text-sm font-semibold underline underline-offset-4">
                    <FileText size={15} /> View certificate
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* certificate viewer  */}
      {openCert !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={CERTIFICATES[openCert].title}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setOpenCert(null)}
        >
          <div
            className="flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-lg bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-slate-200 p-5">
              <div>
                <h3 className="font-semibold text-slate-900">{CERTIFICATES[openCert].title}</h3>
                <p className="text-sm text-slate-500">
                  {CERTIFICATES[openCert].issuer} · {CERTIFICATES[openCert].date}
                </p>
              </div>
              <button
                onClick={() => setOpenCert(null)}
                aria-label="Close"
                className="shrink-0 rounded p-1 text-slate-500 hover:bg-slate-100"
              >
                <X size={22} />
              </button>
            </div>

            {/* clean certificate image */}
            <div className="flex min-h-0 flex-1 items-center justify-center overflow-auto bg-slate-100 p-4">
              <SafeImage
                src={CERTIFICATES[openCert].image}
                alt={`${CERTIFICATES[openCert].title} certificate`}
                label="Certificate preview not available"
                contain
                className="max-h-[66vh] w-auto max-w-full rounded shadow-lg"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 p-5">
              <p className="text-sm text-slate-600">{CERTIFICATES[openCert].about}</p>
              <a
                href={CERTIFICATES[openCert].pdf}
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-md px-4 py-2 text-xs font-semibold text-white"
                style={{ background: RED }}
              >
                <FileText size={14} /> Open PDF
              </a>
            </div>
          </div>
        </div>
      )}

      {/* =========================== GITHUB =========================== */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <SectionTitle title="GitHub / Code" sub="All my project code lives on GitHub." />
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 rounded-lg border border-slate-200 p-8 text-center shadow-md">
          <span
            className="flex h-14 w-14 items-center justify-center rounded-full text-white"
            style={{ background: NAVY }}
          >
            <IconGithub size={24} />
          </span>
          <p className="text-slate-600">
            Browse my repositories to see how my projects are built, and follow my work as I keep
            learning.
          </p>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-md px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
            style={{ background: RED }}
          >
            Visit my GitHub
          </a>
        </div>
      </section>

      {/* =========================== CONTACT =========================== */}
      <section id="contact" className="scroll-mt-16 bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionTitle
            title="Contact me"
            sub="Have a question, an opportunity or a project idea? Send me a message."
          />
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-4">
              {[
                { Ic: Mail, l: "Email", v: PROFILE.email, href: `mailto:${PROFILE.email}`, color: "#EA4335" },
                { Ic: IconGithub, l: "GitHub", v: PROFILE.github.replace("https://", ""), href: PROFILE.github, color: "#181717" },
                { Ic: IconLinkedin, l: "LinkedIn", v: PROFILE.linkedin.replace("https://www.", ""), href: PROFILE.linkedin, color: "#0A66C2" },
                { Ic: MapPin, l: "Location", v: PROFILE.location, href: undefined, color: RED },
              ].map((c) => {
                const inner = (
                  <>
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white"
                      style={{ background: c.color }}
                    >
                      <c.Ic size={18} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs text-slate-400">{c.l}</span>
                      <span className="block truncate text-sm font-medium text-slate-800">{c.v}</span>
                    </span>
                  </>
                );
                const cls = "flex items-center gap-4 rounded-lg bg-white p-4 shadow-sm";
                return c.href ? (
                  <a
                    key={c.l}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className={`${cls} transition hover:shadow-md`}
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={c.l} className={cls}>
                    {inner}
                  </div>
                );
              })}
            </div>

            <div className="space-y-4 rounded-lg bg-white p-6 shadow-md">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700">
                  Your name
                </label>
                <input
                  id="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Enter your full name"
                  autoComplete="name"
                  className={inputCls}
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
                  Your email
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  autoComplete="email"
                  className={inputCls}
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="How can I help you?"
                  className={inputCls}
                />
              </div>
              <button
                onClick={sendMessage}
                disabled={!canSend || status === "sending"}
                className="w-full rounded-md px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
                style={{ background: RED }}
              >
                {status === "sending" ? "Sending..." : "Send message"}
              </button>
              <p aria-live="polite" className="min-h-5 text-center text-sm">
                {status === "sent" && (
                  <span className="text-green-700">
                    {FORM_ENDPOINT
                      ? "Thanks! Your message was sent. I'll reply soon."
                      : "Your email app should open now. Send the message from there."}
                  </span>
                )}
                {status === "error" && (
                  <span className="text-red-700">
                    Something went wrong. Please email me directly at {PROFILE.email}.
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="text-white" style={{ background: NAVY }}>
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-6 text-sm sm:flex-row">
          <p className="text-slate-400">
            © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
          </p>
          <div className="flex gap-4 text-slate-300">
            <a href={PROFILE.github} target="_blank" rel="noreferrer" className="hover:text-white">
              GitHub
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">
              LinkedIn
            </a>
            <a href={`mailto:${PROFILE.email}`} className="hover:text-white">
              Email
            </a>
          </div>
        </div>
      </footer>

      {/* back to top */}
      {scrolled && (
        <a
          href="#home"
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full text-white shadow-lg transition hover:brightness-110"
          style={{ background: RED }}
        >
          <ArrowUp size={20} />
        </a>
      )}
    </main>
  );
}