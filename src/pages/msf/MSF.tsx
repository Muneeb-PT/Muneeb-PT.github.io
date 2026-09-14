import { Link } from "react-router-dom";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900.css";
import { GraduationCap, Moon, Vote, HeartHandshake, HandCoins, Smartphone } from "lucide-react";
import { useInjectStyle } from "../../hooks/useInjectStyle";
import { usePageMeta } from "../../hooks/usePageMeta";
import { msfStyles } from "./msf.styles";

const serviceCards = [
  {
    Icon: GraduationCap,
    title: "Student Empowerment",
    text: "Recognition and motivation for SSLC and Higher Secondary achievers, including 9A+, 10A+, entrance ranks and exceptional academic accomplishments.",
  },
  {
    Icon: Moon,
    title: "Community Care",
    text: "Annual Ramadan food-support initiatives with essential grocery kits and community assistance for families in need.",
  },
  {
    Icon: Vote,
    title: "Civic Engagement",
    text: "Grassroots election support including voter-list assistance, slip distribution, household outreach and public-benefit awareness.",
  },
  {
    Icon: HeartHandshake,
    title: "Social Responsibility",
    text: "Participation in community initiatives including anti-narcotics awareness and campaigns around local civic and environmental concerns.",
  },
  {
    Icon: HandCoins,
    title: "C.H. Centre",
    text: "Supported annual Ramadan fundraising and community-focused collection activities for the C.H. Centre.",
  },
  {
    Icon: Smartphone,
    title: "Digital Outreach",
    text: "Helped build the unit's Instagram and Facebook presence to improve communication, visibility and engagement with the new generation.",
  },
];

const timeline = [
  {
    span: "2019 → 2025",
    role: "General Secretary · Manathmangalam Unit",
    text: "Coordinated unit-level student and community activities while working with volunteers, residents and local organisational teams.",
  },
  {
    span: "2019 → 2025",
    role: "Executive Member · Perinthalmanna Municipal Committee",
    text: "Contributed to wider organisational programmes and grassroots civic activities.",
  },
  {
    span: "2025 → Present",
    role: "President · Manathmangalam Unit",
    text: "Leading the unit with a focus on student development, community service, youth engagement and modern digital communication.",
  },
];

export default function MSF() {
  useInjectStyle(msfStyles, "msf");
  usePageMeta("MSF | Mohammed Muneeb PT", "MSF Leadership & Community Impact — Mohammed Muneeb PT");

  return (
    <>
      <nav className="nav">
        <Link className="brand" to="/">
          <span className="mark">MSF</span>
          <span>MOHAMMED MUNEEB PT</span>
        </Link>
        <div className="navlinks">
          <a href="#impact">Impact</a>
          <a href="#journey">Journey</a>
          <a href="#service">Service</a>
          <Link to="/">Portfolio ↗</Link>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-inner">
          <div className="kicker">
            <span className="dot" /> MSF · Manathmangalam Unit
          </div>
          <h1>Leadership with purpose. Service with impact.</h1>
          <p>
            A personal record of grassroots leadership, student empowerment, community service,
            civic engagement and digital outreach through the Muslim Students Federation.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#impact">
              Explore impact ↓
            </a>
            <Link className="btn btn-secondary" to="/">
              Back to portfolio ↗
            </Link>
          </div>

          <div className="stats">
            <div className="stat">
              <b>2019+</b>
              <span>Leadership journey</span>
            </div>
            <div className="stat">
              <b>3</b>
              <span>Major leadership roles</span>
            </div>
            <div className="stat">
              <b>10A+</b>
              <span>Student achievement focus</span>
            </div>
            <div className="stat">
              <b>∞</b>
              <span>Community-first mindset</span>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="section" id="impact">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="eyebrow">What I worked on</div>
                <h2>Impact beyond a title.</h2>
              </div>
              <p className="section-intro">
                From education and Ramadan service to youth communication and civic participation,
                the work has always been centred on people.
              </p>
            </div>

            <div className="grid" id="service">
              {serviceCards.map(({ Icon, title, text }) => (
                <article className="card" key={title}>
                  <div className="icon">
                    <Icon size={20} strokeWidth={2} />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="journey">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="eyebrow">Leadership journey</div>
                <h2>Growing through responsibility.</h2>
              </div>
            </div>

            <div className="timeline">
              {timeline.map((t) => (
                <div className="t-item" key={t.role}>
                  <div className="t-dot" />
                  <div className="t-content">
                    <span>{t.span}</span>
                    <strong>{t.role}</strong>
                    <p>{t.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="impact">
              <div>
                <div className="eyebrow">Leadership DNA</div>
                <h3>Serve. Empower. Organise. Inspire.</h3>
                <p>
                  Years of grassroots work have developed practical strengths in team coordination,
                  public communication, event organisation, fundraising, community outreach, student
                  engagement and digital media.
                </p>
              </div>
              <div className="pills">
                {[
                  "Leadership",
                  "Team Coordination",
                  "Community Outreach",
                  "Student Development",
                  "Event Management",
                  "Public Communication",
                  "Fundraising",
                  "Digital Media",
                  "Civic Engagement",
                ].map((pill) => (
                  <span className="pill" key={pill}>
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            <div className="quote">
              <p>
                "Leadership is not measured by the title you hold, but by the positive difference
                people experience because you were there."
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <div>
            <strong>MOHAMMED MUNEEB PT</strong>
            <br />
            MSF · Manathmangalam Unit
          </div>
          <Link to="/">← Return to main portfolio</Link>
        </div>
      </footer>
    </>
  );
}
