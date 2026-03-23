"use client";

import { Code2, Zap, Coffee, MapPin } from "lucide-react";
import SectionLabel from "./SectionLabel";

const FACTS = [
  { icon: Code2, text: "3+ years shipping production software across fintech and AI" },
  { icon: Zap, text: "Obsessed with performance, clean APIs, and developer experience" },
  { icon: Coffee, text: "Fuelled by espresso, good docs, and hard problems" },
];

export default function About() {
  return (
    <section id="about" className="bg-cream-dark py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>About</SectionLabel>

        {/* Anthropic-style two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mt-14">

          {/* Left — avatar */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-56 h-56 lg:w-64 lg:h-64 rounded-full bg-cream border-2 border-ink/10 flex items-center justify-center text-7xl shadow-sm">
                SS
              </div>
              <div className="absolute bottom-3 right-3 bg-rust rounded-full w-12 h-12 flex items-center justify-center shadow-md">
                <MapPin size={18} className="text-cream" />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-full border border-ink/6 pointer-events-none" />
            </div>
          </div>

          {/* Right — bio */}
          <div>
            <h2 className="font-display font-black text-ink leading-tight tracking-tight"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}>
              Building software that{" "}
              <span className="underline decoration-[2.5px] underline-offset-[6px] decoration-rust">
                actually matters.
              </span>
            </h2>

            <p className="font-body text-ink-muted text-lg leading-relaxed mt-6 font-light">
              I'm Snitik Swaroop, a software developer based in Pune. I specialise in robust backend systems and clean frontend interfaces. I've worked across fintech, developer tooling, and AI products always with an eye on reliability, developer experience, and long-term maintainability.
            </p>

            <div className="mt-10 space-y-4">
              {FACTS.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-rust/10 border border-rust/20 flex items-center justify-center text-rust flex-shrink-0 mt-0.5">
                    <Icon size={16} />
                  </div>
                  <p className="font-body text-ink-muted text-sm leading-relaxed pt-1.5">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
