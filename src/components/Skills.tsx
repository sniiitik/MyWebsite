import { Terminal, Layers, Wrench } from "lucide-react";
import { SKILLS } from "@/lib/data";
import SectionLabel from "./SectionLabel";

const ICONS = [Terminal, Layers, Wrench];

export default function Skills() {
  return (
    <section id="skills" className="bg-cream-dark py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Expertise</SectionLabel>
        <h2
          className="font-display font-black text-ink leading-tight tracking-tight mt-2 mb-16"
          style={{ fontSize: "clamp(32px, 5vw, 56px)" }}
        >
          Skills & tools
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILLS.map(({ category, items }, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={category}
                className="bg-cream-card border border-ink/8 rounded-lg p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-lg bg-rust/10 border border-rust/20 flex items-center justify-center text-rust">
                    <Icon size={16} />
                  </div>
                  <span className="font-body font-semibold text-ink text-base tracking-tight">
                    {category}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-xs px-3 py-1.5 rounded-full bg-rust/8 text-ink-muted border border-rust/15 tracking-wide"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
