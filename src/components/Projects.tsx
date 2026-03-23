"use client";

import { useState } from "react";
import { ExternalLink, Github, Code2 } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import SectionLabel from "./SectionLabel";

export default function Projects() {
  return (
    <section id="projects" className="bg-cream py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <SectionLabel>Work</SectionLabel>
            <h2 className="font-display font-black text-ink leading-tight tracking-tight mt-2"
                style={{ fontSize: "clamp(32px, 5vw, 56px)" }}>
              Selected projects
            </h2>
          </div>
          <p className="font-body text-ink-faint text-sm max-w-xs font-light lg:text-right">
            A curated selection of things I've designed, built, and shipped.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  title: string;
  desc: string;
  tags: readonly string[];
  color: string;
  year: string;
}

function ProjectCard({ title, desc, tags, color, year }: ProjectCardProps) {
  const [hov, setHov] = useState(false);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className={`group bg-cream-card border rounded-lg p-8 flex flex-col gap-5 transition-all duration-300 cursor-default
        ${hov ? "border-ink/20 shadow-lg -translate-y-1" : "border-ink/8 shadow-sm"}`}
    >
      {/* Top row */}
      <div className="flex items-start justify-between">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{ background: color + "18", border: `1px solid ${color}33` }}
        >
          <Code2 size={18} style={{ color }} />
        </div>
        <span className="font-mono text-xs text-ink-faint tracking-widest">{year}</span>
      </div>

      {/* Title + desc */}
      <div className="flex-1">
        <h3 className="font-display font-bold text-ink text-xl tracking-tight mb-2">{title}</h3>
        <p className="font-body text-ink-faint text-sm leading-relaxed font-light">{desc}</p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="tag-chip"
            style={{
              color,
              background: color + "12",
              borderColor: color + "30",
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-3 pt-1">
        <button
          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-md text-cream text-sm font-body font-medium transition-opacity hover:opacity-90"
          style={{ background: color }}
        >
          <ExternalLink size={13} /> Live Demo
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-md text-ink-muted text-sm font-body font-medium border border-ink/12 hover:border-ink/30 transition-colors">
          <Github size={13} /> GitHub
        </button>
      </div>
    </div>
  );
}
