import AgentField from "@/components/AgentField";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

function ArrowUpRight() {
  return (
    <svg
      className="arrow"
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 10L10 3M10 3H4M10 3V9"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* ---------- Top bar ---------- */}
      <header className="topbar">
        <div className="status">
          <span className="status-item">
            <span className="dot" />
            Available for new projects
          </span>
          <span className="status-item wordmark">
            <b>Hunter Zhang</b> — Agentic Automation
          </span>
        </div>
        <a
          className="cta-top"
          href={site.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a call <ArrowUpRight />
        </a>
      </header>

      <main>
        {/* ---------- Hero ---------- */}
        <section className="hero">
          <AgentField />
          <div className="hero-fade" />
          <div className="shell hero-inner">
            <p className="hero-tag">Agentic Automation · Professionals & Enterprises</p>
            <h1 className="display h-hero">
              Become the most leveraged person in the room{" "}
              <span className="muted">— not the one being replaced.</span>
            </h1>
            <p className="lede hero-sub">
              I build agentic AI automation for high-profile professionals and
              lean enterprises — tailored systems you own and maintain, shipped
              to production in weeks, with measurable ROI.
            </p>
            <div className="btn-row">
              <a
                className="btn"
                href={site.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a call <ArrowUpRight />
              </a>
              <a className="btn btn-ghost" href="#results">
                See the work
              </a>
            </div>
          </div>
        </section>

        {/* ---------- 01 · Who I serve ---------- */}
        <section className="section" id="who">
          <div className="shell">
            <div className="grid-label">
              <Reveal className="eyebrow" as="div">
                <span className="num">01</span>
                <span className="dash">—</span>
                <span>Who I serve</span>
              </Reveal>
              <div>
                <Reveal>
                  <h2 className="display h-lg">
                    Two people know AI is powerful. Neither knows how to turn
                    that into their own advantage.
                  </h2>
                </Reveal>

                <div className="serve-grid">
                  <Reveal className="serve-card" as="div">
                    <p className="kicker">For professionals</p>
                    <h3>High-end professionals who fear replacement</h3>
                    <ul className="serve-list">
                      <li>Want to use AI better than anyone else in their field</li>
                      <li>Want to build and own their automations — not be replaced by them</li>
                      <li>Want lean systems tailored to their exact workflow and preferences</li>
                    </ul>
                    <p className="serve-problem">
                      <b>The problem:</b> they know AI is powerful, but not how it
                      applies to their specific role and workflow.
                    </p>
                  </Reveal>

                  <Reveal className="serve-card" as="div" delay={90}>
                    <p className="kicker">For enterprises</p>
                    <h3>Lean enterprises deploying efficient AI</h3>
                    <ul className="serve-list">
                      <li>Outpace competitors without adding headcount</li>
                      <li>Cut costs and hit deadlines with automation that ships</li>
                      <li>Stay lean while scaling output</li>
                    </ul>
                    <p className="serve-problem">
                      <b>The problem:</b> they know AI is powerful, but can&apos;t
                      turn it into deployed systems with measurable ROI.
                    </p>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="shell">
          <hr className="rule" />
        </div>

        {/* ---------- 02 · Results ---------- */}
        <section className="section" id="results">
          <div className="shell">
            <div className="grid-label">
              <Reveal className="eyebrow" as="div">
                <span className="num">02</span>
                <span className="dash">—</span>
                <span>Results</span>
              </Reveal>
              <div>
                <Reveal>
                  <h2 className="display h-lg">
                    Real time given back. Not a demo.
                  </h2>
                </Reveal>

                <Reveal className="case" as="div">
                  <div className="case-meta">
                    <span>
                      Client — <b>Independent consultant</b>
                    </span>
                    <span>
                      Build — <b>Calendar &amp; scheduling agent</b>
                    </span>
                    <span>
                      Outcome — <b>1+ hr/day recovered</b>
                    </span>
                  </div>
                  <div className="ba">
                    <div className="before">
                      <p className="tag">Before</p>
                      <p className="stat">1+ hour daily</p>
                      <p>
                        Spent every day juggling calendars, back-and-forth
                        emails, and manual scheduling — time taken directly from
                        billable, high-value work.
                      </p>
                    </div>
                    <div className="after">
                      <p className="tag">After</p>
                      <p className="stat">Handled entirely</p>
                      <p>
                        A tailored AI agent now runs scheduling end-to-end. The
                        hour comes back every single day — and the client can
                        adjust and maintain the system themselves.
                      </p>
                    </div>
                  </div>
                </Reveal>

                <Reveal>
                  <p className="promise">
                    Clients leave able to build and maintain their own systems —
                    not dependent on me.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <div className="shell">
          <hr className="rule" />
        </div>

        {/* ---------- 03 · Why me ---------- */}
        <section className="section" id="why">
          <div className="shell">
            <div className="grid-label">
              <Reveal className="eyebrow" as="div">
                <span className="num">03</span>
                <span className="dash">—</span>
                <span>Why me</span>
              </Reveal>
              <div>
                <Reveal>
                  <h2 className="display h-lg">
                    Half technical, half business — fluent in both, simple in
                    delivery.
                  </h2>
                </Reveal>

                <div className="why-points">
                  <Reveal className="why-point" as="div">
                    <span className="idx">01</span>
                    <div>
                      <h4>A founder who translates between two worlds</h4>
                      <p>
                        I&apos;m half technical, half business. I speak fluently
                        to engineers and to operators, and I make complex systems
                        simple enough that you actually want to use them.
                      </p>
                    </div>
                  </Reveal>
                  <Reveal className="why-point" as="div" delay={70}>
                    <span className="idx">02</span>
                    <div>
                      <h4>You own the system — no lock-in</h4>
                      <p>
                        Every engagement is built so you leave able to run,
                        adjust, and extend your automations yourself. Leverage
                        that stays with you, not a dependency on me.
                      </p>
                    </div>
                  </Reveal>
                  <Reveal className="why-point" as="div" delay={140}>
                    <span className="idx">03</span>
                    <div>
                      <h4>Shipped to production, measured in weeks</h4>
                      <p>
                        For enterprises: automations that reach production and
                        show ROI in weeks — not slideware, not pilots that never
                        launch. Stanford graduate.
                      </p>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="shell">
          <hr className="rule" />
        </div>

        {/* ---------- 04 · Contact ---------- */}
        <section className="section contact" id="contact">
          <div className="shell">
            <div className="grid-label">
              <Reveal className="eyebrow" as="div">
                <span className="num">04</span>
                <span className="dash">—</span>
                <span>Contact</span>
              </Reveal>
              <div className="contact-grid">
                <Reveal as="div">
                  <h2 className="display h-lg">Let&apos;s talk about your project.</h2>
                  <p className="lede">
                    Tell me what you&apos;re working on, roughly what you&apos;d
                    like to automate, and your timeline. No polished brief needed
                    — just enough to start a real conversation.
                  </p>
                </Reveal>

                <Reveal className="links" as="div" delay={90}>
                  <a
                    className="link-row"
                    href={site.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Book a call</span>
                    <span className="val">
                      bookwithhunter.com <ArrowUpRight />
                    </span>
                  </a>
                  <a className="link-row" href={`mailto:${site.email}`}>
                    <span>Email</span>
                    <span className="val">{site.email}</span>
                  </a>
                  <a
                    className="link-row"
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>LinkedIn</span>
                    <span className="val">
                      Connect <ArrowUpRight />
                    </span>
                  </a>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Footer ---------- */}
        <footer className="footer">
          <div className="shell">
            <hr className="rule" />
            <div className="footer-inner" style={{ paddingTop: 32 }}>
              <span>
                <b>Hunter Zhang</b> — Agentic Automation
              </span>
              <span>
                Build &amp; own your AI systems · ROI in weeks
              </span>
              <span>© {site.year}</span>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
