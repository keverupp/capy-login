"use client";

import GridMotion from "@/blocks/Backgrounds/GridMotion/GridMotion";
import LoginForm2 from "@/components/mvpblocks/login-form-2";

export default function Home() {
  // Usa os seus SVGs repetidos para preencher os 28 slots
  const svgs = Array.from({ length: 28 }, (_, i) => {
    const num = (i % 4) + 1;
    return `/capy${num}.svg`;
  });

  return (
    <div className="relative min-h-screen overflow-hidden bg-card">
      {/* GridMotion como background */}
      <div className="absolute inset-0 z-0">
        <GridMotion items={svgs} gradientColor="black" />
      </div>

      {/* LoginForm2 por cima do background */}
      <div className="relative z-10 min-h-screen">
        <LoginForm2 />
      </div>
    </div>
  );
}
