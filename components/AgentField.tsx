"use client";

import { useEffect, useRef } from "react";

/**
 * AgentField — a lightweight animated "agent network" motif for the hero.
 * Nodes drift slowly and connect when near; signals pulse along the edges,
 * evoking agents passing work between each other. Pure canvas, no libraries.
 */
export default function AgentField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const INK = "26, 25, 23"; // --ink rgb
    const ACCENT = "181, 98, 58"; // --accent rgb

    let width = 0;
    let height = 0;
    let dpr = 1;

    type Node = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
    };
    type Signal = { a: number; b: number; t: number; speed: number };

    let nodes: Node[] = [];
    let signals: Signal[] = [];
    const LINK_DIST = 170;

    function seed() {
      const area = width * height;
      const count = Math.max(26, Math.min(64, Math.floor(area / 26000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: Math.random() * 1.6 + 0.8,
      }));
      signals = [];
    }

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas!.clientWidth;
      height = canvas!.clientHeight;
      canvas!.width = Math.floor(width * dpr);
      canvas!.height = Math.floor(height * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    }

    let raf = 0;
    let last = 0;

    function frame(now: number) {
      raf = requestAnimationFrame(frame);
      if (now - last < 1000 / 40) return; // cap ~40fps
      last = now;

      ctx!.clearRect(0, 0, width, height);

      // move nodes
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < -20) n.x = width + 20;
        if (n.x > width + 20) n.x = -20;
        if (n.y < -20) n.y = height + 20;
        if (n.y > height + 20) n.y = -20;
      }

      // edges
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < LINK_DIST) {
            const alpha = (1 - d / LINK_DIST) * 0.16;
            ctx!.strokeStyle = `rgba(${INK}, ${alpha})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();

            // occasionally spawn a signal along a close edge
            if (!reduce && Math.random() < 0.0009 && signals.length < 24) {
              signals.push({ a: i, b: j, t: 0, speed: 0.012 + Math.random() * 0.02 });
            }
          }
        }
      }

      // signals (copper pulses travelling along edges)
      for (let s = signals.length - 1; s >= 0; s--) {
        const sig = signals[s];
        const a = nodes[sig.a];
        const b = nodes[sig.b];
        sig.t += sig.speed;
        if (sig.t >= 1) {
          signals.splice(s, 1);
          continue;
        }
        const x = a.x + (b.x - a.x) * sig.t;
        const y = a.y + (b.y - a.y) * sig.t;
        const glow = Math.sin(sig.t * Math.PI); // fade in/out
        ctx!.fillStyle = `rgba(${ACCENT}, ${0.85 * glow})`;
        ctx!.beginPath();
        ctx!.arc(x, y, 2.1, 0, Math.PI * 2);
        ctx!.fill();
      }

      // nodes
      for (const n of nodes) {
        ctx!.fillStyle = `rgba(${INK}, 0.45)`;
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    resize();
    if (reduce) {
      // draw a single static frame
      frame(0);
      cancelAnimationFrame(raf);
    } else {
      raf = requestAnimationFrame(frame);
    }

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />;
}
