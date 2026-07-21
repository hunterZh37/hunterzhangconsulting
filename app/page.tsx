import Image from "next/image";
import FlowCompare from "@/components/FlowCompare";
import AgentTerminal from "@/components/AgentTerminal";
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
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Section({
  n,
  label,
  id,
  children,
}: {
  n: string;
  label: string;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="sec" id={id}>
      <div className="shell grid-label">
        <Reveal className="eyebrow" as="div">
          <span className="num">{n}</span>
          <span>{label}</span>
        </Reveal>
        <div className="sec-body">{children}</div>
      </div>
    </section>
  );
}

function Rule() {
  return (
    <div className="shell">
      <hr className="rule" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="hero">
        <div className="hero-left">
          <span className="pill">
            <span className="dot" />
            Available for projects
          </span>

          <div>
            <h1 className="display hero-h1">
              Be the most leveraged person in the room.
            </h1>
            <p className="hero-sub">
              Agentic AI automation for professionals and lean teams. You own
              what I build.
            </p>
            <a
              className="btn"
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a call <ArrowUpRight />
            </a>
          </div>

          <div className="hero-links">
            <a href={`mailto:${site.email}`}>Email</a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-right">
          <Image
            src="/hunter.jpg"
            alt="Hunter Zhang at Stanford"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 50vw"
            className="hero-photo"
          />
          <span className="hero-badge">Hunter Zhang · Stanford</span>
        </div>
      </section>

      <main>
        {/* 01 — the contrast */}
        <Section n="01" label="Manual today vs an agent" id="why">
          <Reveal>
            <FlowCompare />
          </Reveal>
        </Section>

        <Rule />

        {/* 02 — what I do + who I serve */}
        <Section n="02" label="What I do">
          <Reveal>
            <h2 className="display h-lg">
              AI that fits your workflow. Not the other way around.
            </h2>
            <p className="lede">
              Lean systems built around how you actually work.
            </p>
          </Reveal>

          <div className="two-col">
            <Reveal as="div">
              <span className="kicker">Professionals</span>
              <h3 className="h-sm">Use AI better than anyone in your field.</h3>
              <p className="body">
                Own automations built for you. Lead instead of getting replaced.
              </p>
            </Reveal>
            <Reveal as="div" delay={80}>
              <span className="kicker">Enterprises</span>
              <h3 className="h-sm">Ship AI to production in weeks.</h3>
              <p className="body">
                Cut cost. Hit deadlines. Stay lean. Real ROI, fast.
              </p>
            </Reveal>
          </div>
        </Section>

        <Rule />

        {/* 03 — proof: an agent at work */}
        <Section n="03" label="An agent at work">
          <Reveal>
            <h2 className="display h-lg">Not a demo. It runs the task.</h2>
            <p className="lede">
              Take a request on any channel, reason over your real data, call
              the tools, and finish the job.
            </p>
          </Reveal>
          <Reveal className="term-wrap" as="div" delay={80}>
            <AgentTerminal />
          </Reveal>
        </Section>

        <Rule />

        {/* 04 — featured build */}
        <Section n="04" label="Featured build">
          <div className="build">
            <Reveal as="div">
              <span className="kicker">Agentic Scheduling</span>
              <h2 className="display h-lg">
                A calendar you run by text or voice.
              </h2>
              <p className="body">
                A Claude agent aggregates your Google and Microsoft calendars,
                hands strangers a booking page, and takes its orders from the
                web, WhatsApp, or a voice note. Two agents can even negotiate a
                meeting and book it.
              </p>
              <div className="chips">
                <span>Next.js</span>
                <span>TypeScript</span>
                <span>Claude</span>
                <span>Postgres</span>
                <span>Twilio</span>
              </div>
              <div className="build-actions">
                <a
                  className="btn btn-ghost"
                  href={site.agenticSchedulingRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub <ArrowUpRight />
                </a>
                <span className="build-stat">
                  <b>1+ hr/day</b> back for a client
                </span>
              </div>
            </Reveal>
            <Reveal className="build-media" as="div" delay={80}>
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                aria-label="Demo of Agentic Scheduling booking a meeting"
              >
                <source
                  src="/showcase/agentic-scheduling-demo.mp4"
                  type="video/mp4"
                />
              </video>
            </Reveal>
          </div>
        </Section>

        <Rule />

        {/* 05 — why me */}
        <Section n="05" label="Why me">
          <Reveal>
            <h2 className="display h-lg">
              Half technical, half business. Fluent in both.
            </h2>
          </Reveal>
          <Reveal className="mini-list" as="ul" delay={60}>
            <li>Founder who translates between engineers and operators.</li>
            <li>You own the system. No lock in.</li>
            <li>Stanford. Production in weeks.</li>
          </Reveal>
        </Section>

        <Rule />

        {/* 06 — contact */}
        <Section n="06" label="Contact" id="contact">
          <Reveal>
            <h2 className="display h-lg">Let&apos;s talk.</h2>
            <p className="lede">
              Tell me what you want to automate and your timeline. No polished
              brief needed.
            </p>
          </Reveal>
          <Reveal className="links" as="div" delay={80}>
            <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer">
              <span>Book a call</span>
              <span className="val">
                bookwithhunter.com <ArrowUpRight />
              </span>
            </a>
            <a href={`mailto:${site.email}`}>
              <span>Email</span>
              <span className="val">{site.email}</span>
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
              <span>LinkedIn</span>
              <span className="val">
                Connect <ArrowUpRight />
              </span>
            </a>
          </Reveal>
        </Section>
      </main>

      <footer className="footer">
        <div className="shell footer-inner">
          <span>Hunter Zhang</span>
          <span>Agentic Automation</span>
          <span>© {site.year}</span>
        </div>
      </footer>
    </>
  );
}
