"use client";

import { ReactLenis } from "lenis/react";

/** Wraps the app in Lenis smooth scrolling (buttery inertia, like the reference site). */
export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis root options={{ lerp: 0.09, smoothWheel: true, wheelMultiplier: 1 }}>
      {children}
    </ReactLenis>
  );
}
