import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#eae8e0",
        "cream-dark": "#dedad0",
        "cream-card": "#f2f0e8",
        ink: "#0f0e0c",
        "ink-muted": "#3a3530",
        "ink-faint": "#7a746c",
        rust: "#cf6c3f",
        "rust-light": "rgba(207,108,63,0.12)",
      },
      fontFamily: {
        // Matching Anthropic: Tiempos Headline (or Freight Display) for display,
        // Söhne (or similar) for body. We use Google Fonts alternatives:
        // "Playfair Display" → bold serif headlines (closest free match)
        // "DM Sans" → clean geometric sans for body
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(52px, 8vw, 96px)", { lineHeight: "1.0", letterSpacing: "-0.03em", fontWeight: "800" }],
        "display-lg": ["clamp(36px, 5vw, 64px)", { lineHeight: "1.05", letterSpacing: "-0.025em", fontWeight: "800" }],
        "display-md": ["clamp(26px, 3.5vw, 42px)", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "pulse-dot": "pulseDot 2s ease-in-out infinite",
        spin: "spin 1s linear infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        pulseDot: {
          "0%,100%": { opacity: "1" },
          "50%":     { opacity: "0.3" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
