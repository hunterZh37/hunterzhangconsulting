/**
 * FlowCompare — the hero visual. Two lanes side by side that make the value
 * obvious at a glance: the MANUAL way (many tedious steps, a slow marker
 * plodding through them) vs WITH AN AGENT (a short clean flow, a fast marker).
 * Pure CSS animation, renders on the server.
 */

const MANUAL_STEPS = [
  "Read the request",
  "Switch between tools",
  "Look up the details",
  "Copy, paste, format",
  "Write the reply",
  "Chase a response",
  "Log it",
];

export default function FlowCompare() {
  return (
    <div className="cmp" aria-hidden="true">
      <div className="cmp-col manual">
        <div className="cmp-head">
          <span className="cmp-label">Manual</span>
          <span className="cmp-time cost">~1 hr a day</span>
        </div>
        <ul className="cmp-steps">
          <span className="cmp-marker" />
          {MANUAL_STEPS.map((s, i) => (
            <li key={i} className="cmp-step">
              {s}
            </li>
          ))}
        </ul>
        <span className="cmp-foot">You do every step</span>
      </div>

      <div className="cmp-col agentic">
        <div className="cmp-head">
          <span className="cmp-label accent">With an agent</span>
          <span className="cmp-time good">seconds</span>
        </div>
        <ul className="cmp-steps">
          <span className="cmp-marker fast" />
          <li className="cmp-step">Request, any channel</li>
          <li className="cmp-step agent">Agent runs it</li>
          <li className="cmp-step done">Done</li>
        </ul>
        <span className="cmp-foot accent">Hands off</span>
      </div>
    </div>
  );
}
