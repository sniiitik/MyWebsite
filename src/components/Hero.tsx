"use client";

import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import { STATS } from "@/lib/data";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d")!;
    let animId: number;

    const resize = () => {
      c.width = c.offsetWidth;
      c.height = c.offsetHeight;
    };
    resize();

    // Subtle floating dots matching cream palette
    const pts = Array.from({ length: 40 }, () => ({
      x: Math.random() * c.width,
      y: Math.random() * c.height,
      r: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      a: Math.random() * 0.25 + 0.05,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, c.width, c.height);
      pts.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > c.width) p.vx *= -1;
        if (p.y < 0 || p.y > c.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(15,14,12,${p.a})`;
        ctx.fill();
      });
      // Thin connecting lines
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 140) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(15,14,12,${0.04 * (1 - d / 140)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-cream"
    >
      {/* Subtle canvas texture */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
      />

      {/* Faint radial gradient — matches Anthropic's warmth */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_50%_at_30%_40%,rgba(207,108,63,0.06)_0%,transparent_65%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20 w-full">
        {/* Two-column Anthropic-style layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left — massive headline */}
          <div>
            {/* Anthropic-style headline: massive, bold, with underline on key words */}
            <h1 className="font-display font-black text-ink leading-[1.02] tracking-tight"
              style={{ fontSize: "clamp(52px, 7.5vw, 96px)" }}>
              Software{" "}
              <span className="underline decoration-[3px] underline-offset-[8px] decoration-ink/70">
                engineer
              </span>{" "}
              and{" "}
              <span className="underline decoration-[3px] underline-offset-[8px] decoration-ink/70">
                builder
              </span>
            </h1>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mt-12">
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-primary rounded-full"
              >
                View Projects
              </button>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-outline rounded-full"
              >
                Get in touch
              </button>
            </div>
          </div>

          {/* Right — descriptor text, Anthropic-style */}
          <div className="lg:pt-4">
            <p className="font-body text-ink text-xl lg:text-2xl leading-relaxed font-light">
              I build thoughtful, performant systems from elegant APIs to polished UIs. I care deeply about the craft of software and its long-term impact.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 mt-14 pt-10 border-t border-ink/10">
              {STATS.map(({ value, label }) => (
                <div key={label}>
                  <div className="font-display font-black text-ink text-3xl lg:text-4xl tracking-tight">
                    {value}
                  </div>
                  <div className="font-body text-ink-faint text-xs font-medium tracking-wide mt-1 uppercase">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-faint hover:text-ink transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={22} />
      </button>
    </section>
  );
}
