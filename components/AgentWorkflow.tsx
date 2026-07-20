/**
 * AgentWorkflow — a labeled, animated pipeline for the hero:
 * Trigger → Agent (reasoning) → Tools → Done, with tokens flowing along the
 * wires and the tool chips lighting up in sequence. Pure CSS animation, so it
 * renders on the server with no JS. Reads instantly as "an AI agent doing work".
 */

function CalendarIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="2" y="3" width="12" height="11" rx="2" stroke="currentColor" strokeWidth="1.3" />
      <path d="M2 6.5h12M5.5 2v2M10.5 2v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="2" y="3.5" width="12" height="9" rx="2" stroke="currentColor" strokeWidth="1.3" />
      <path d="M3 5l5 3.5L13 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function GearIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="2.2" stroke="currentColor" strokeWidth="1.3" />
      <path d="M8 1.5v2M8 12.5v2M1.5 8h2M12.5 8h2M3.4 3.4l1.4 1.4M11.2 11.2l1.4 1.4M12.6 3.4l-1.4 1.4M4.8 11.2l-1.4 1.4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function Wire() {
  return (
    <div className="flow-wire" aria-hidden="true">
      <i className="tok" />
      <i className="tok" />
    </div>
  );
}

export default function AgentWorkflow() {
  return (
    <div className="flow" aria-hidden="true">
      <div className="flow-node">
        <span className="flow-label">Trigger</span>
        <span className="flow-main">New request</span>
      </div>

      <Wire />

      <div className="flow-node flow-agent">
        <span className="agent-ring" />
        <span className="flow-label">Agent</span>
        <span className="flow-main">Reasoning</span>
      </div>

      <Wire />

      <div className="flow-tools">
        <span className="tool t0">
          <CalendarIcon /> Calendar
        </span>
        <span className="tool t1">
          <MailIcon /> Email
        </span>
        <span className="tool t2">
          <GearIcon /> CRM
        </span>
      </div>

      <Wire />

      <div className="flow-node flow-done">
        <span className="flow-main">Done</span>
      </div>
    </div>
  );
}
