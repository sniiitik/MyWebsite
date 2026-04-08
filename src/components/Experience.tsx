import { EXPERIENCE } from "@/lib/data";
import SectionLabel from "./SectionLabel";

export default function Experience() {
  return (
    <section id="experience" className="bg-cream py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <SectionLabel>Experience</SectionLabel>
            <h2
              className="font-display font-black text-ink leading-tight tracking-tight mt-2"
              style={{ fontSize: "clamp(32px, 5vw, 56px)" }}
            >
              Work I&apos;ve done
            </h2>
          </div>
          <p className="font-body text-ink-faint text-sm max-w-sm font-light lg:text-right">
            A mix of product building, applied AI work, and full-stack engineering across startups and enterprise environments.
          </p>
        </div>

        <div className="space-y-6">
          {EXPERIENCE.map((item) => (
            <article
              key={`${item.company}-${item.role}`}
              className="bg-cream-card border border-ink/8 rounded-[24px] p-8 lg:p-10 shadow-sm"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                <div className="max-w-2xl">
                  <p
                    className="font-mono text-[11px] uppercase tracking-[0.18em]"
                    style={{ color: item.color }}
                  >
                    {item.location}
                  </p>
                  <h3 className="font-display font-bold text-ink text-[clamp(28px,4vw,42px)] tracking-tight mt-4">
                    {item.company}
                  </h3>
                  <p className="font-body text-ink text-lg font-medium mt-3">
                    {item.role}
                  </p>
                </div>

                <div className="lg:text-right">
                  <span className="inline-flex items-center rounded-full border border-ink/10 bg-cream px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-faint">
                    {item.period}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 mt-8">
                {item.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="rounded-2xl border border-ink/6 bg-white/40 px-5 py-4"
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className="mt-2 h-2.5 w-2.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: item.color }}
                      />
                      <p className="font-body text-sm text-ink-muted leading-relaxed">
                        {highlight}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
