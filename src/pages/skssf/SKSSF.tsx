import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/600.css";
import "@fontsource/dm-sans/700.css";
import "@fontsource/playfair-display/500.css";
import "@fontsource/playfair-display/600.css";
import "@fontsource/playfair-display/700.css";
import "@fontsource/noto-sans-malayalam/400.css";
import "@fontsource/noto-sans-malayalam/500.css";
import "@fontsource/noto-sans-malayalam/600.css";
import { useInjectStyle } from "../../hooks/useInjectStyle";
import { usePageMeta } from "../../hooks/usePageMeta";
import { skssfStyles } from "./skssf.styles";

const stats = [
  { number: "5★", title: "Unit Recognition", text: "5-Star Unit Certificate from the higher committee." },
  { number: "₹2L+", title: "Funds Mobilized", text: "Across documented relief and community campaigns." },
  { number: "3+", title: "Years", text: "Continuous leadership and organizational service." },
  { number: "10+", title: "Impact Areas", text: "Education, health, media, culture, environment and more." },
];

const impacts = [
  {
    n: "01",
    title: "5-Star Unit Leadership",
    text: "Helped guide the Manathmangalam Unit toward 5-Star recognition through consistent organizational activity and execution.",
    tag: "ORGANIZATION",
  },
  {
    n: "02",
    title: "Digital Media",
    text: "Started and effectively utilized Instagram and Facebook for program communication, promotion and documentation.",
    tag: "MEDIA",
  },
  {
    n: "03",
    title: "Community Relief",
    text: "Coordinated fundraising initiatives supporting Sahachari, Wayanad disaster relief, Kaithangu, Sunduq and other community-support activities.",
    tag: "SERVICE",
  },
  {
    n: "04",
    title: "Student Support",
    text: "Supported Plus One admission guidance, scholarship assistance and recognition of high-performing students.",
    tag: "EDUCATION",
  },
  {
    n: "05",
    title: "Blood Donor Network",
    text: "Helped establish a digital blood-donor database to make emergency donor identification and coordination easier.",
    tag: "HEALTH",
  },
  {
    n: "06",
    title: "Culture & Youth",
    text: "Supported cultural competitions, youth gatherings, educational programs and student engagement activities.",
    tag: "STUDENTS",
  },
  {
    n: "07",
    title: "Environment",
    text: "Participated in tree planting, bird-water initiatives and environmental awareness programs.",
    tag: "ENVIRONMENT",
  },
  {
    n: "08",
    title: "Team Management",
    text: "Planned meetings, delegated responsibilities, coordinated volunteers and followed up on programs.",
    tag: "LEADERSHIP",
  },
];

const fundItems = [
  "Sahachari Relief",
  "Wayanad Disaster Relief",
  "SKSSF Kaithangu",
  "Sunduq Fund",
  "Community Support",
  "Student Assistance",
];

const timelineItems = [
  {
    year: "BEFORE 2024",
    title: "Executive Member",
    text: "Continued involvement in SKSSF activities and organizational programs, building the foundation for larger responsibilities.",
  },
  {
    year: "JAN 2024",
    title: "General Secretary",
    text: "Took responsibility as General Secretary of SKSSF Manathmangalam Unit and contributed to planning, coordination and execution of programs.",
  },
  {
    year: "2024 — 2026",
    title: "Build · Serve · Lead",
    text: "Expanded work across community fundraising, student support, digital media, blood-donor initiatives, cultural programs, environmental activities and organizational development.",
  },
  {
    year: "SEP 2026",
    title: "A New Chapter",
    text: "Moved to Ernakulam for higher education and transitioned into the role of Working Secretary.",
  },
  {
    year: "2026 — 2028",
    title: "Leadership Continuity",
    text: "Supported the transition of General Secretary responsibility to the next team while continuing to contribute as Working Secretary.",
  },
];

const skills = [
  "Team Leadership",
  "Event Management",
  "Fundraising",
  "Community Mobilization",
  "Digital Media",
  "Public Communication",
  "Student Mentoring",
  "Volunteer Coordination",
  "Organizational Planning",
  "Problem Solving",
  "Social Responsibility",
  "Leadership Succession",
];

export default function SKSSF() {
  useInjectStyle(skssfStyles, "skssf");
  usePageMeta(
    "SKSSF | Mohammed Muneeb PT",
    "SKSSF Leadership Archive — Mohammed Muneeb PT, General Secretary to Working Secretary.",
  );

  const rootRef = useRef<HTMLDivElement>(null);

  // Scroll reveal + active-section nav highlight, matching the
  // page's original standalone behaviour.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const revealEls = root.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    revealEls.forEach((el) => observer.observe(el));

    const sections = root.querySelectorAll("section[id]");
    const links = root.querySelectorAll(".nav-links a");
    function onScroll() {
      let current = "";
      sections.forEach((section) => {
        const top = (section as HTMLElement).offsetTop - 180;
        if (window.scrollY >= top) current = section.id;
      });
      links.forEach((link) => {
        (link as HTMLElement).style.color =
          link.getAttribute("href") === "#" + current ? "var(--gold-light)" : "";
      });
    }
    window.addEventListener("scroll", onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div ref={rootRef}>
      <nav className="nav">
        <Link className="brand" to="/">
          <div className="brand-mark">M</div>
          <div className="brand-text">
            <strong>Muneeb PT</strong>
            <span>Leadership Archive</span>
          </div>
        </Link>
        <div className="nav-links">
          <a href="#story">Story</a>
          <a href="#impact">Impact</a>
          <a href="#timeline">Journey</a>
          <a href="#values">Values</a>
        </div>
        <Link className="back" to="/">
          ← Portfolio
        </Link>
      </nav>

      <header className="hero">
        <div className="hero-inner">
          <div className="hero-kicker">SKSSF · LEADERSHIP &amp; SERVICE</div>
          <h1>
            Serve with purpose.
            <span>Lead with responsibility.</span>
          </h1>
          <p className="hero-description">
            A personal record of my journey with the{" "}
            <strong>Samastha Kerala Sunni Students Federation (SKSSF)</strong> — from long-term
            executive involvement to organizational leadership, community service and the
            transition toward the next generation of leadership.
          </p>
          <div className="hero-meta">
            <div className="meta">
              <strong>2024–2026</strong> · General Secretary
            </div>
            <div className="meta">
              <strong>Perinthalmanna</strong> · Campus Wing
            </div>
            <div className="meta">
              <strong>2026 →</strong> · Working Secretary
            </div>
          </div>
        </div>
        <div className="hero-ornament" />
      </header>

      <main>
        <section className="section reveal" id="story">
          <div className="section-label">01 · THE STORY</div>
          <h2 className="section-title">More than a position.</h2>
          <p className="section-intro">
            Leadership became meaningful to me when responsibility moved beyond a title — into
            people, programs, problems and the community around us.
          </p>

          <div className="intro-grid">
            <article className="intro-card">
              <h3>My SKSSF journey</h3>
              <p>
                I was involved with SKSSF as an executive member for a long period before 2024. In
                January 2024, I took responsibility as General Secretary of the Manathmangalam Unit
                while also serving as Campus Wing Convener in the Perinthalmanna Cluster.
              </p>
              <p style={{ marginTop: 18 }}>
                The following years became a practical education in leadership — coordinating
                people, organizing programs, supporting students, mobilizing resources, using
                digital media and serving the community.
              </p>
              <p className="malayalam">സേവനം • ഉത്തരവാദിത്തം • നേതൃത്വം</p>
            </article>

            <article className="role-card">
              <small>PRIMARY RESPONSIBILITY</small>
              <h3>General Secretary</h3>
              <p>SKSSF Manathmangalam Unit</p>
              <div className="role-date">JAN 2024 — SEP 2026</div>

              <div style={{ marginTop: 30 }}>
                <small>CLUSTER RESPONSIBILITY</small>
                <h3 style={{ fontSize: 26 }}>Campus Wing Convener</h3>
                <p>Perinthalmanna Cluster</p>
              </div>
            </article>
          </div>
        </section>

        <section className="section reveal" id="impact">
          <div className="section-label">02 · IMPACT</div>
          <h2 className="section-title">What the work became.</h2>
          <p className="section-intro">
            The numbers are only part of the story. Behind each one were volunteers, conversations,
            planning meetings and people willing to contribute.
          </p>

          <div className="stats">
            {stats.map((s) => (
              <div className="stat" key={s.title}>
                <span className="stat-number">{s.number}</span>
                <span className="stat-title">{s.title}</span>
                <span className="stat-text">{s.text}</span>
              </div>
            ))}
          </div>

          <div className="impact-grid">
            {impacts.map((imp) => (
              <article className="impact" key={imp.n}>
                <span className="impact-number">{imp.n}</span>
                <h3>{imp.title}</h3>
                <p>{imp.text}</p>
                <span className="impact-tag">{imp.tag}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="fund-section reveal">
          <div className="fund-card">
            <div className="fund-top">
              <div>
                <div className="section-label">COMMUNITY MOBILIZATION</div>
                <div className="fund-amount">₹2L+</div>
              </div>
              <p className="fund-label">
                Documented funds mobilized through multiple relief, humanitarian and
                community-support initiatives during the leadership period.
              </p>
            </div>
            <div className="fund-items">
              {fundItems.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section reveal" id="timeline">
          <div className="section-label">03 · JOURNEY</div>
          <h2 className="section-title">A journey of responsibility.</h2>
          <div className="timeline">
            {timelineItems.map((t) => (
              <div className="timeline-item" key={t.year + t.title}>
                <div className="timeline-dot" />
                <span className="timeline-year">{t.year}</span>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section reveal" id="values">
          <div className="section-label">04 · WHAT I LEARNED</div>
          <h2 className="section-title">Skills built through service.</h2>
          <p className="section-intro">
            These are not just keywords on a résumé. They are capabilities developed through real
            responsibility, people and situations.
          </p>

          <div className="skills">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>

          <div className="succession">
            <h3>
              Leadership is also
              <br />
              knowing when to pass the responsibility forward.
            </h3>
            <p>
              Moving to Ernakulam for education meant leaving one chapter behind — but not leaving
              the organization without continuity. The transition to the next General Secretary for
              the 2026–2028 term became part of the leadership journey itself.
            </p>
            <div className="succession-line" />
            <small>SERVICE · CONTINUITY · SUCCESSION</small>
          </div>
        </section>

        <section className="signature reveal">
          <div className="signature-name">Muneeb PT</div>
          <p>A student · A volunteer · A learner · A leader</p>
        </section>
      </main>

      <footer>
        SKSSF Leadership Archive · <Link to="/">Muneeb PT Portfolio</Link>
      </footer>
    </div>
  );
}
