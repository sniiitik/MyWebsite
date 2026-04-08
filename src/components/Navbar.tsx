"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, FileText } from "lucide-react";
import { NAV_LINKS, PROFILE } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section tracking
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => l.toLowerCase());
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { threshold: 0.35 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-cream/90 backdrop-blur-md border-b border-ink/8"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo — Anthropic-style bold wordmark */}
        <span className="font-display font-black text-ink text-lg tracking-tight select-none">
          SNITIK<span className="text-rust">\</span>SWAROOP
        </span>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className={`font-body text-sm font-medium tracking-wide transition-colors duration-150 ${active === l.toLowerCase()
                ? "text-ink border-b border-ink pb-0.5"
                : "text-ink-faint hover:text-ink"
                }`}
            >
              {l}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={PROFILE.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-ink/15 text-ink font-body font-medium text-sm px-4 py-2.5 rounded-full hover:border-ink/35 hover:bg-cream-card transition-colors duration-200"
          >
            <FileText size={14} /> Resume
          </a>
          <button
            onClick={() => scrollTo("Contact")}
            className="flex items-center gap-1.5 bg-ink text-cream font-body font-medium text-sm px-5 py-2.5 rounded-full hover:bg-ink-muted transition-colors duration-200"
          >
            Get in Touch <ChevronDown size={14} />
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-ink p-1"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-cream border-t border-ink/10 px-6 py-4">
          {NAV_LINKS.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="block w-full text-left font-body font-medium text-ink py-3.5 border-b border-ink/8 text-base last:border-0"
            >
              {l}
            </button>
          ))}
          <button
            onClick={() => scrollTo("Contact")}
            className="mt-4 w-full bg-ink text-cream font-body font-medium text-sm py-3 rounded-full"
          >
            Get in Touch
          </button>
          <a
            href={PROFILE.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block w-full text-center border border-ink/12 text-ink font-body font-medium text-sm py-3 rounded-full"
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
}
