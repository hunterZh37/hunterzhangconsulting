"use client";

import { useEffect, useState } from "react";

type Line =
  | { kind: "cmd"; text: string }
  | { kind: "think"; text: string }
  | { kind: "tool"; text: string }
  | { kind: "done"; text: string };

const SCRIPT: Line[] = [
  { kind: "cmd", text: "book a call with the design team" },
  { kind: "think", text: "checking 3 calendars" },
  { kind: "think", text: "found a slot, Thursday 2:00pm" },
  { kind: "tool", text: "calendar.create()" },
  { kind: "tool", text: "email.invite()" },
  { kind: "done", text: "done in 4s" },
];

// Delay before revealing each line (indexed to match SCRIPT).
const DELAYS = [700, 950, 950, 800, 800, 1100];
const LOOP_PAUSE = 2600;

export default function AgentTerminal() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (count < SCRIPT.length) {
      timer = setTimeout(() => setCount((c) => c + 1), DELAYS[count]);
    } else {
      timer = setTimeout(() => setCount(1), LOOP_PAUSE);
    }
    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div className="term" aria-label="Example: an AI agent booking a meeting">
      <div className="term-bar">
        <span className="term-dot" />
        <span className="term-dot" />
        <span className="term-dot" />
        <span className="term-name">agent.run</span>
      </div>
      <div className="term-body">
        {SCRIPT.slice(0, count).map((line, i) => (
          <div key={i} className={`term-line tl-${line.kind}`}>
            {line.kind === "cmd" && <span className="tl-mark">▶</span>}
            {line.kind === "think" && <span className="tl-spin">◍</span>}
            {line.kind === "tool" && <span className="tl-mark">→</span>}
            <span className="tl-text">
              {line.kind === "cmd" ? `"${line.text}"` : line.text}
            </span>
            {line.kind === "tool" && <span className="tl-ok">✓</span>}
          </div>
        ))}
        {count < SCRIPT.length && <span className="term-cursor" />}
      </div>
    </div>
  );
}
