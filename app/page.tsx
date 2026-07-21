import Image from "next/image";
import FlowCompare from "@/components/FlowCompare";
import AgentTerminal from "@/components/AgentTerminal";
import Reveal from "@/components/Reveal";
import Clock from "@/components/Clock";
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

export default function Home() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="hero">
        <div className="hero-left">
          <div className="hero-top">
            <span className="pill">
              <span className="dot" />
              Available for projects
            </span>
          </div>

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

      {/* ---------- Bento grid ---------- */}
      <div className="bento">
        {/* Manual vs automated */}
        <Reveal className="card span-6 compare-card" as="div">
          <span className="eyebrow">Manual today vs an agent</span>
          <FlowCompare />
        </Reveal>

        {/* What I do */}
        <Reveal className="card span-3" as="div">
          <span className="eyebrow">What I do</span>
          <h2 className="card-title big">
            AI that fits your workflow. Not the other way around.
          </h2>
          <p className="card-body">
            Lean systems built around how you actually work.
          </p>
        </Reveal>

        {/* Agent at work (terminal) */}
        <Reveal className="card span-3 term-card" as="div">
          <span className="eyebrow">An agent at work</span>
          <AgentTerminal />
        </Reveal>

        {/* Clock */}
        <Reveal className="card span-2 clock-card beige" as="div">
          <span className="eyebrow">Now</span>
          <Clock />
        </Reveal>

        {/* Professionals */}
        <Reveal className="card span-2" as="div">
          <span className="card-kicker">Professionals</span>
          <h3 className="card-title">Use AI better than anyone in your field.</h3>
          <p className="card-body">
            Own automations built for you. Lead instead of getting replaced.
          </p>
        </Reveal>

        {/* Enterprises */}
        <Reveal className="card span-2 beige" as="div">
          <span className="card-kicker">Enterprises</span>
          <h3 className="card-title">Ship AI to production in weeks.</h3>
          <p className="card-body">
            Cut cost. Hit deadlines. Stay lean. Real ROI, fast.
          </p>
        </Reveal>

        {/* Featured build */}
        <Reveal className="card span-6" as="div">
          <span className="card-kicker">Featured build</span>
          <div className="build-grid">
            <div>
              <h3 className="card-title big">Agentic Scheduling</h3>
              <p className="card-body">
                A calendar you run by text or voice. Agents book meetings for
                you.
              </p>
              <div className="chips" aria-label="Tech stack">
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
            </div>
            <div className="showcase-media">
              <video
                className="showcase-video"
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
            </div>
          </div>
        </Reveal>

        {/* Why me */}
        <Reveal className="card span-3" as="div">
          <span className="eyebrow">Why me</span>
          <ul className="mini-list">
            <li>Founder. Half technical, half business.</li>
            <li>You own the system. No lock in.</li>
            <li>Stanford. Production in weeks.</li>
          </ul>
        </Reveal>

        {/* Contact */}
        <Reveal className="card span-3 contact-card beige" as="div">
          <div>
            <span className="eyebrow">Contact</span>
            <h3 className="card-title big" style={{ marginTop: 14 }}>
              Let&apos;s talk.
            </h3>
          </div>
          <div className="contact-links">
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Book a call</span>
              <ArrowUpRight />
            </a>
            <a href={`mailto:${site.email}`}>
              <span>Email</span>
              <ArrowUpRight />
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
              <span>LinkedIn</span>
              <ArrowUpRight />
            </a>
          </div>
        </Reveal>
      </div>

      <footer className="footer">
        <span>Hunter Zhang</span>
        <span>Agentic Automation</span>
        <span>© {site.year}</span>
      </footer>
    </>
  );
}
