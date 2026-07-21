/**
 * FlowCompare — the hero visual. A deliberately stark BEFORE / AFTER contrast:
 *   Before = red, long, JAGGED path with a slow marker (manual busywork).
 *   After  = green/copper, single STRAIGHT path with a fast marker (one agent).
 * Big dominant numbers carry the payoff. Pure SVG/CSS, renders on the server.
 */

const JAG = "M8,46 L54,16 L100,48 L146,14 L192,46 L238,18 L292,42";
const JAG_PTS: [number, number][] = [
  [8, 46], [54, 16], [100, 48], [146, 14], [192, 46], [238, 18], [292, 42],
];
const STRAIGHT = "M12,30 L288,30";

export default function FlowCompare() {
  return (
    <div className="vs" aria-hidden="true">
      {/* BEFORE */}
      <div className="vs-block before">
        <div className="vs-h">
          <span className="vs-tag">Before · manual</span>
          <span className="vs-stat cost">
            ~1 hr<em>a day</em>
          </span>
        </div>
        <svg className="vs-svg" viewBox="0 0 300 60">
          <path
            d={JAG}
            fill="none"
            stroke="rgba(207,125,105,0.55)"
            strokeWidth="1.6"
            strokeDasharray="3 4"
          />
          {JAG_PTS.map(([x, y], i) => (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="3.4"
              fill="#1d1b19"
              stroke="rgba(207,125,105,0.75)"
              strokeWidth="1.4"
            />
          ))}
          <circle r="4.5" fill="#d3826d">
            <animateMotion dur="6.5s" repeatCount="indefinite" path={JAG} />
          </circle>
        </svg>
        <span className="vs-cap">You do all seven steps, every time.</span>
      </div>

      <div className="vs-sep">
        <span>automate ↓</span>
      </div>

      {/* AFTER */}
      <div className="vs-block after">
        <div className="vs-h">
          <span className="vs-tag accent">After · with an agent</span>
          <span className="vs-stat good">seconds</span>
        </div>
        <svg className="vs-svg" viewBox="0 0 300 60">
          <path d={STRAIGHT} fill="none" stroke="rgba(224,136,90,0.6)" strokeWidth="2.4" />
          {/* start node */}
          <circle cx="12" cy="30" r="4.5" fill="#e0885a" />
          {/* agent node with pulse */}
          <circle cx="150" cy="30" r="8" fill="rgba(224,136,90,0.9)" />
          <circle cx="150" cy="30" r="8" fill="none" stroke="#e0885a" strokeWidth="1.4">
            <animate attributeName="r" values="8;17;8" dur="1.9s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.7;0;0.7" dur="1.9s" repeatCount="indefinite" />
          </circle>
          {/* done node */}
          <circle cx="288" cy="30" r="5.5" fill="#6bd08a" />
          <path d="M285,30 l2,2 l4,-4.5" fill="none" stroke="#1d1b19" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          {/* fast marker */}
          <circle r="4.5" fill="#f0b58f">
            <animateMotion dur="1.5s" repeatCount="indefinite" path={STRAIGHT} />
          </circle>
          {/* labels */}
          <text x="12" y="48" className="vs-node-label">request</text>
          <text x="150" y="48" className="vs-node-label" textAnchor="middle">agent</text>
          <text x="288" y="48" className="vs-node-label" textAnchor="end">done</text>
        </svg>
        <span className="vs-cap">One agent runs it end to end.</span>
      </div>
    </div>
  );
}
