"use client";

import { useEffect, useState } from "react";
import { ExternalLink, Github, Code2, X, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import SectionLabel from "./SectionLabel";

type Project = (typeof PROJECTS)[number];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!selectedProject) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedProject]);

  return (
    <>
      <section id="projects" className="bg-cream py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div>
              <SectionLabel>Work</SectionLabel>
              <h2
                className="font-display font-black text-ink leading-tight tracking-tight mt-2"
                style={{ fontSize: "clamp(32px, 5vw, 56px)" }}
              >
                Selected projects
              </h2>
            </div>
            <p className="font-body text-ink-faint text-sm max-w-sm font-light lg:text-right">
              A curated selection of AI systems, developer tools, and backend projects.
              Click any card to open a deeper project view.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                onOpen={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedProject ? (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      ) : null}
    </>
  );
}

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  const [hov, setHov] = useState(false);

  return (
    <button
      type="button"
      onClick={onOpen}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className={`group w-full text-left bg-cream-card border rounded-[22px] p-7 flex flex-col gap-5 transition-all duration-300
        ${hov ? "border-ink/20 shadow-lg -translate-y-1" : "border-ink/8 shadow-sm"}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center"
            style={{ background: project.color + "18", border: `1px solid ${project.color}33` }}
          >
            <Code2 size={18} style={{ color: project.color }} />
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em]" style={{ color: project.color }}>
              {project.eyebrow}
            </p>
            <h3 className="font-display font-bold text-ink text-2xl tracking-tight mt-2">
              {project.title}
            </h3>
          </div>
        </div>
        <span className="font-mono text-xs text-ink-faint tracking-[0.18em] pt-1">
          {project.year}
        </span>
      </div>

      <p className="font-body text-ink-faint text-sm leading-relaxed font-light">
        {project.desc}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="tag-chip"
            style={{
              color: project.color,
              background: project.color + "12",
              borderColor: project.color + "30",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="pt-1 flex items-center justify-between gap-4">
        <span className="font-body text-sm text-ink-muted">View details</span>
        <span
          className="w-10 h-10 rounded-full border border-ink/10 flex items-center justify-center text-ink-muted group-hover:text-ink group-hover:border-ink/20 transition-colors"
        >
          <ArrowUpRight size={16} />
        </span>
      </div>
    </button>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[70] px-4 py-6 sm:px-6 md:px-8">
      <div
        className="absolute inset-0 bg-ink/35 backdrop-blur-[3px]"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto max-h-full overflow-y-auto rounded-[30px] border border-ink/10 bg-[#f4f1ea] shadow-2xl">
        <div className="sticky top-0 z-10 flex justify-end p-4 bg-[linear-gradient(to_bottom,rgba(244,241,234,0.94),rgba(244,241,234,0.78),transparent)]">
          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 rounded-full border border-ink/10 bg-cream/90 text-ink-muted hover:text-ink hover:border-ink/20 transition-colors flex items-center justify-center"
            aria-label="Close project details"
          >
            <X size={18} />
          </button>
        </div>

        <div className="px-6 pb-8 pt-2 sm:px-10 sm:pb-10">
          <div className="flex items-start justify-between gap-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: project.color }}>
              {project.eyebrow}
            </p>
            <span className="font-mono text-xs text-ink-faint tracking-[0.18em] pt-1">
              {project.year}
            </span>
          </div>

          <h3 className="font-display font-black text-ink leading-none tracking-tight mt-6 text-[clamp(42px,7vw,72px)]">
            {project.title}
          </h3>

          <p className="font-body text-ink text-[clamp(24px,2.5vw,32px)] leading-[1.45] font-light mt-8 max-w-3xl">
            {project.desc}
          </p>

          <p className="font-body text-ink-muted text-lg leading-relaxed font-light mt-10 max-w-3xl">
            {project.summary}
          </p>

          <div className="grid grid-cols-1 gap-4 mt-10">
            {project.highlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-3xl border border-ink/6 bg-white/35 px-5 py-5 sm:px-6"
              >
                <div className="flex items-start gap-4">
                  <span
                    className="mt-2 h-2.5 w-2.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: project.color }}
                  />
                  <p className="font-body text-base text-ink-muted leading-relaxed">
                    {highlight}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mt-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="tag-chip"
                style={{
                  color: project.color,
                  background: "#fffaf2",
                  borderColor: project.color + "30",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-10">
            <button
              type="button"
              className="flex-1 flex items-center justify-center gap-2 py-4 rounded-full text-cream text-base font-body font-medium transition-opacity hover:opacity-90"
              style={{ background: project.color }}
            >
              <ExternalLink size={16} /> Live Demo
            </button>

            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-4 rounded-full text-ink text-base font-body font-medium border border-ink/12 hover:border-ink/30 transition-colors"
              >
                <Github size={16} /> View GitHub
              </a>
            ) : (
              <button
                type="button"
                disabled
                className="flex-1 flex items-center justify-center gap-2 py-4 rounded-full text-ink-faint/70 text-base font-body font-medium border border-ink/8 cursor-not-allowed"
              >
                <Github size={16} /> GitHub coming soon
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
