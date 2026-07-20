"use client";

import { useEffect, useState } from "react";

/** Live local date + time. Renders only after mount to avoid hydration mismatch. */
export default function Clock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const date = now
    ? now.toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
      })
    : "";
  const time = now ? now.toLocaleTimeString("en-GB", { hour12: false }) : "";

  return (
    <div className="clock" suppressHydrationWarning>
      <span className="clock-date">{date}</span>
      <span className="clock-time">{time}</span>
    </div>
  );
}
