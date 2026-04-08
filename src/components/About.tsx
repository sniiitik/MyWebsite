"use client";

import { Code2, Zap, Coffee } from "lucide-react";
import SectionLabel from "./SectionLabel";

const FACTS = [
  { icon: Code2, text: "3+ years shipping production software across fintech and AI" },
  { icon: Zap, text: "Obsessed with performance, clean APIs, and developer experience" },
  { icon: Coffee, text: "Fuelled by espresso, good docs, and hard problems" },
];

const HIGHLIGHTS = [
  { label: "Based in", value: "Pune, India" },
  { label: "Focus", value: "Backend systems and polished frontend experiences" },
  { label: "Care about", value: "Reliability, clarity, and maintainable software" },
];

export default function About() {
  return (
    <section id="about" className="bg-cream-dark py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>About</SectionLabel>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mt-14">
          <div className="lg:pr-8">
            <div className="bg-cream border border-ink/10 rounded-[28px] p-8 lg:p-10 shadow-sm">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-rust">
                A bit about me
              </p>

              <p className="font-display text-ink tracking-tight mt-6 leading-tight text-[clamp(28px,4vw,46px)]">
                I enjoy turning messy ideas into software that feels calm, fast, and dependable.
              </p>

              <div className="mt-10 space-y-5 border-t border-ink/10 pt-8">
                {HIGHLIGHTS.map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between"
                  >
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint">
                      {label}
                    </span>
                    <span className="font-body text-sm leading-relaxed text-ink max-w-sm">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-display font-black text-ink leading-tight tracking-tight"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}>
              Building software that{" "}
              <span className="underline decoration-[2.5px] underline-offset-[6px] decoration-rust">
                actually matters.
              </span>
            </h2>

            <p className="font-body text-ink-muted text-lg leading-relaxed mt-6 font-light">
              I&apos;m Snitik Swaroop, a software developer based in Pune. I specialise in robust backend systems and clean frontend interfaces. I&apos;ve worked across fintech, developer tooling, and AI products always with an eye on reliability, developer experience, and long-term maintainability.
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
