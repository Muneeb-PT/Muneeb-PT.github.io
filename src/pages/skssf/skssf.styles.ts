export const skssfStyles = `

/* =========================================================
   SKSSF — PERSONAL LEADERSHIP PAGE
   ========================================================= */

:root {
    --green-950: #061a14;
    --green-900: #08251c;
    --green-800: #0c3327;
    --green-700: #124737;

    --gold: #d7b56d;
    --gold-light: #ead39a;

    --cream: #f5f1e7;
    --muted: rgba(245,241,231,.62);
    --faint: rgba(245,241,231,.38);

    --line: rgba(234,211,154,.15);
    --glass: rgba(255,255,255,.045);

    --max: 1180px;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    scroll-behavior: smooth;
}

body {
    background: var(--green-950);
    color: var(--cream);
    font-family: "DM Sans", sans-serif;
    overflow-x: hidden;
}


/* =========================================================
   AMBIENT BACKGROUND
   ========================================================= */

body::before {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: -1;

    background:
        radial-gradient(
            circle at 80% 10%,
            rgba(215,181,109,.10),
            transparent 25%
        ),
        radial-gradient(
            circle at 10% 70%,
            rgba(25,105,77,.22),
            transparent 30%
        );
}


/* =========================================================
   NAVIGATION
   ========================================================= */

.nav {
    position: fixed;
    top: 18px;
    left: 50%;
    transform: translateX(-50%);

    width: min(1100px, calc(100% - 30px));

    padding: 12px 15px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border: 1px solid var(--line);
    border-radius: 100px;

    background: rgba(6,26,20,.72);
    backdrop-filter: blur(20px);

    z-index: 100;
}

.brand {
    display: flex;
    align-items: center;
    gap: 12px;

    color: var(--cream);
    text-decoration: none;
}

.brand-mark {
    width: 38px;
    height: 38px;

    display: grid;
    place-items: center;

    border-radius: 50%;

    border: 1px solid rgba(215,181,109,.4);

    color: var(--gold);

    font-family: "Playfair Display", serif;
    font-size: 18px;
}

.brand-text strong {
    display: block;
    font-size: 13px;
    letter-spacing: .04em;
}

.brand-text span {
    display: block;
    color: var(--faint);
    font-size: 9px;
    letter-spacing: .14em;
    text-transform: uppercase;
}

.nav-links {
    display: flex;
    gap: 25px;
}

.nav-links a {
    color: var(--muted);
    text-decoration: none;
    font-size: 12px;
    transition: .3s ease;
}

.nav-links a:hover {
    color: var(--gold-light);
}

.back {
    padding: 9px 15px;

    border-radius: 100px;

    border: 1px solid var(--line);

    color: var(--cream);
    text-decoration: none;

    font-size: 11px;
}


/* =========================================================
   HERO
   ========================================================= */

.hero {
    min-height: 100vh;

    display: flex;
    align-items: center;

    padding:
        150px 24px
        100px;

    position: relative;
    overflow: hidden;
}

.hero-inner {
    width: min(var(--max), 100%);
    margin: auto;
}

.hero-kicker {
    display: flex;
    align-items: center;
    gap: 12px;

    margin-bottom: 28px;

    color: var(--gold);

    font-size: 11px;
    font-weight: 700;
    letter-spacing: .2em;
}

.hero-kicker::before {
    content: "";
    width: 32px;
    height: 1px;
    background: var(--gold);
}

.hero h1 {
    max-width: 900px;

    font-family: "Playfair Display", serif;

    font-size: clamp(55px, 9vw, 115px);

    line-height: .92;

    letter-spacing: -.055em;
}

.hero h1 span {
    display: block;
    color: var(--gold);
}

.hero-description {
    max-width: 650px;

    margin-top: 35px;

    color: var(--muted);

    font-size: 17px;
    line-height: 1.8;
}

.hero-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    margin-top: 40px;
}

.meta {
    padding: 10px 15px;

    border: 1px solid var(--line);
    border-radius: 100px;

    color: var(--muted);

    font-size: 11px;
}

.meta strong {
    color: var(--gold-light);
}


/* =========================================================
   ORNAMENT
   ========================================================= */

.hero-ornament {
    position: absolute;

    right: -150px;
    bottom: -170px;

    width: 500px;
    height: 500px;

    border: 1px solid rgba(215,181,109,.12);
    border-radius: 50%;
}

.hero-ornament::before,
.hero-ornament::after {
    content: "";

    position: absolute;

    inset: 55px;

    border: 1px solid rgba(215,181,109,.10);
    border-radius: 50%;
}

.hero-ornament::after {
    inset: 110px;
}


/* =========================================================
   MAIN
   ========================================================= */

main {
    width: min(var(--max), calc(100% - 40px));
    margin: auto;
}


/* =========================================================
   SECTION HEADER
   ========================================================= */

.section {
    padding: 110px 0;
}

.section-label {
    color: var(--gold);

    font-size: 10px;
    font-weight: 700;

    letter-spacing: .2em;

    margin-bottom: 18px;
}

.section-title {
    font-family: "Playfair Display", serif;

    font-size: clamp(35px, 5vw, 60px);

    line-height: 1;

    letter-spacing: -.035em;
}

.section-intro {
    max-width: 680px;

    margin-top: 20px;

    color: var(--muted);

    line-height: 1.8;
}


/* =========================================================
   PERSONAL INTRO
   ========================================================= */

.intro-grid {
    display: grid;

    grid-template-columns: 1.1fr .9fr;

    gap: 20px;

    margin-top: 55px;
}

.intro-card {
    padding: 45px;

    border: 1px solid var(--line);

    border-radius: 30px;

    background:
        linear-gradient(
            135deg,
            rgba(255,255,255,.055),
            rgba(255,255,255,.018)
        );
}

.intro-card h3 {
    font-family: "Playfair Display", serif;

    font-size: 30px;

    margin-bottom: 20px;
}

.intro-card p {
    color: var(--muted);

    line-height: 1.85;

    font-size: 15px;
}

.malayalam {
    font-family: "Noto Sans Malayalam", sans-serif;

    margin-top: 25px;

    color: var(--gold-light);

    font-size: 14px;

    line-height: 2;
}


/* =========================================================
   ROLE CARD
   ========================================================= */

.role-card {
    position: relative;

    min-height: 100%;

    padding: 40px;

    border-radius: 30px;

    background:
        linear-gradient(
            145deg,
            var(--green-700),
            var(--green-900)
        );

    border: 1px solid rgba(215,181,109,.18);

    overflow: hidden;
}

.role-card::after {
    content: "SKSSF";

    position: absolute;

    right: -20px;
    bottom: -35px;

    font-family: "Playfair Display", serif;

    font-size: 100px;

    color: rgba(255,255,255,.035);
}

.role-card small {
    color: var(--gold);

    letter-spacing: .15em;

    font-size: 10px;
}

.role-card h3 {
    margin-top: 15px;

    font-family: "Playfair Display", serif;

    font-size: 34px;
}

.role-card p {
    margin-top: 10px;

    color: var(--muted);

    line-height: 1.7;
}

.role-date {
    margin-top: 35px;

    color: var(--gold-light);

    font-size: 12px;
}


/* =========================================================
   IMPACT NUMBERS
   ========================================================= */

.stats {
    display: grid;

    grid-template-columns: repeat(4, 1fr);

    gap: 12px;

    margin-top: 25px;
}

.stat {
    padding: 30px;

    border: 1px solid var(--line);

    border-radius: 23px;

    background: var(--glass);
}

.stat-number {
    display: block;

    color: var(--gold-light);

    font-family: "Playfair Display", serif;

    font-size: 43px;

    line-height: 1;
}

.stat-title {
    display: block;

    margin-top: 12px;

    font-weight: 600;

    font-size: 13px;
}

.stat-text {
    display: block;

    margin-top: 7px;

    color: var(--faint);

    font-size: 11px;

    line-height: 1.5;
}


/* =========================================================
   IMPACT CARDS
   ========================================================= */

.impact-grid {
    display: grid;

    grid-template-columns: repeat(2, 1fr);

    gap: 13px;

    margin-top: 55px;
}

.impact {
    position: relative;

    padding: 32px;

    border: 1px solid var(--line);

    border-radius: 25px;

    background: rgba(255,255,255,.025);

    transition:
        transform .35s ease,
        background .35s ease,
        border-color .35s ease;
}

.impact:hover {
    transform: translateY(-6px);

    background: rgba(255,255,255,.055);

    border-color: rgba(215,181,109,.3);
}

.impact-number {
    color: rgba(215,181,109,.3);

    font-size: 11px;

    letter-spacing: .15em;
}

.impact h3 {
    margin-top: 15px;

    font-family: "Playfair Display", serif;

    font-size: 25px;
}

.impact p {
    margin-top: 10px;

    color: var(--muted);

    line-height: 1.7;

    font-size: 14px;
}

.impact-tag {
    display: inline-block;

    margin-top: 20px;

    padding: 6px 10px;

    border: 1px solid var(--line);

    border-radius: 100px;

    color: var(--gold);

    font-size: 9px;

    letter-spacing: .12em;
}


/* =========================================================
   FUNDRAISING
   ========================================================= */

.fund-section {
    padding: 90px 0;
}

.fund-card {
    padding: 55px;

    border-radius: 30px;

    background:
        linear-gradient(
            135deg,
            rgba(215,181,109,.10),
            rgba(255,255,255,.025)
        );

    border: 1px solid rgba(215,181,109,.18);
}

.fund-top {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    gap: 30px;
}

.fund-amount {
    font-family: "Playfair Display", serif;

    color: var(--gold-light);

    font-size: clamp(55px, 8vw, 90px);

    line-height: .9;
}

.fund-label {
    max-width: 250px;

    color: var(--muted);

    line-height: 1.6;

    font-size: 13px;
}

.fund-items {
    display: flex;
    flex-wrap: wrap;

    gap: 9px;

    margin-top: 40px;
}

.fund-items span {
    padding: 9px 13px;

    border: 1px solid var(--line);

    border-radius: 100px;

    color: var(--muted);

    font-size: 11px;
}


/* =========================================================
   TIMELINE
   ========================================================= */

.timeline {
    position: relative;

    max-width: 850px;

    margin: 60px auto 0;
}

.timeline::before {
    content: "";

    position: absolute;

    left: 9px;

    top: 10px;
    bottom: 10px;

    width: 1px;

    background: linear-gradient(
        var(--gold),
        rgba(215,181,109,.05)
    );
}

.timeline-item {
    position: relative;

    padding-left: 55px;

    margin-bottom: 65px;
}

.timeline-dot {
    position: absolute;

    left: 0;
    top: 5px;

    width: 19px;
    height: 19px;

    border-radius: 50%;

    background: var(--green-950);

    border: 1px solid var(--gold);

    box-shadow:
        0 0 0 5px rgba(215,181,109,.06);
}

.timeline-year {
    color: var(--gold);

    font-size: 10px;

    font-weight: 700;

    letter-spacing: .16em;
}

.timeline-item h3 {
    margin-top: 9px;

    font-family: "Playfair Display", serif;

    font-size: 27px;
}

.timeline-item p {
    margin-top: 10px;

    max-width: 650px;

    color: var(--muted);

    line-height: 1.75;

    font-size: 14px;
}


/* =========================================================
   SKILLS
   ========================================================= */

.skills {
    display: flex;
    flex-wrap: wrap;

    gap: 8px;

    margin-top: 35px;
}

.skills span {
    padding: 10px 14px;

    border: 1px solid var(--line);

    border-radius: 100px;

    color: var(--muted);

    font-size: 11px;

    transition: .3s ease;
}

.skills span:hover {
    color: var(--gold-light);

    border-color: rgba(215,181,109,.35);
}


/* =========================================================
   SUCCESSION
   ========================================================= */

.succession {
    position: relative;

    margin-top: 40px;

    padding: 65px;

    text-align: center;

    border: 1px solid rgba(215,181,109,.2);

    border-radius: 35px;

    background:
        radial-gradient(
            circle at center,
            rgba(215,181,109,.08),
            transparent 55%
        );
}

.succession h3 {
    font-family: "Playfair Display", serif;

    font-size: clamp(32px, 5vw, 52px);

    line-height: 1.05;
}

.succession p {
    max-width: 680px;

    margin: 22px auto 0;

    color: var(--muted);

    line-height: 1.8;
}

.succession-line {
    width: 45px;

    height: 1px;

    margin: 28px auto;

    background: var(--gold);
}

.succession small {
    color: var(--faint);

    font-size: 10px;

    letter-spacing: .15em;
}


/* =========================================================
   PERSONAL SIGNATURE
   ========================================================= */

.signature {
    padding: 100px 0 130px;

    text-align: center;
}

.signature-name {
    font-family: "Playfair Display", serif;

    color: var(--gold-light);

    font-size: 38px;
}

.signature p {
    margin-top: 10px;

    color: var(--faint);

    font-size: 11px;

    letter-spacing: .12em;

    text-transform: uppercase;
}


/* =========================================================
   FOOTER
   ========================================================= */

footer {
    border-top: 1px solid var(--line);

    padding: 30px 20px;

    text-align: center;

    color: var(--faint);

    font-size: 11px;
}

footer a {
    color: var(--gold);

    text-decoration: none;
}


/* =========================================================
   REVEAL ANIMATION
   ========================================================= */

.reveal {
    opacity: 0;

    transform: translateY(25px);

    transition:
        opacity .8s ease,
        transform .8s ease;
}

.reveal.visible {
    opacity: 1;

    transform: translateY(0);
}


/* =========================================================
   MOBILE
   ========================================================= */

@media(max-width: 850px) {

    .nav-links {
        display: none;
    }

    .intro-grid,
    .impact-grid {
        grid-template-columns: 1fr;
    }

    .stats {
        grid-template-columns: repeat(2, 1fr);
    }

    .fund-top {
        flex-direction: column;

        align-items: flex-start;
    }

    .hero {
        min-height: 90vh;
    }

    .hero-ornament {
        opacity: .4;
    }
}


@media(max-width: 550px) {

    main {
        width: min(100% - 28px, var(--max));
    }

    .hero {
        padding:
            140px 20px
            80px;
    }

    .hero h1 {
        font-size: 55px;
    }

    .hero-description {
        font-size: 15px;
    }

    .section {
        padding: 75px 0;
    }

    .intro-card,
    .role-card,
    .fund-card,
    .succession {
        padding: 30px 24px;
    }

    .stats {
        grid-template-columns: 1fr 1fr;
    }

    .stat {
        padding: 23px 18px;
    }

    .stat-number {
        font-size: 34px;
    }

    .timeline-item {
        padding-left: 40px;
    }

    .timeline::before {
        left: 7px;
    }

    .timeline-dot {
        width: 15px;
        height: 15px;
    }
}
`;
