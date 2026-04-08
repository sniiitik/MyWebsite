"use client";

import { useState } from "react";
import { Mail, Github, Linkedin, Twitter, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import SectionLabel from "./SectionLabel";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/sniiitik",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/snitik7/",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/sniiitik/",
    },
  ];

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errMsg, setErrMsg] = useState("");

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async () => {
    if (!form.name || !form.email || !form.message) {
      setErrMsg("Please fill in all fields."); setStatus("error"); return;
    }
    setStatus("loading"); setErrMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setErrMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrMsg("Network error. Please try again."); setStatus("error");
    }
  };

  const inputCls =
    "w-full bg-cream-card border border-ink/12 rounded-md px-4 py-3.5 font-body text-ink text-sm placeholder:text-ink-faint outline-none focus:border-ink/40 transition-colors duration-200 resize-none";

  return (
    <section id="contact" className="bg-cream py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left — heading */}
          <div>
            <SectionLabel>Contact</SectionLabel>
            <h2
              className="font-display font-black text-ink leading-tight tracking-tight mt-2"
              style={{ fontSize: "clamp(32px, 5vw, 56px)" }}
            >
              Let&apos;s build something{" "}
              <span className="underline decoration-[2.5px] underline-offset-[6px] decoration-rust">
                great.
              </span>
            </h2>
            <p className="font-body text-ink-muted font-light text-lg leading-relaxed mt-6">
              Have a project in mind, a question, or just want to say hello? I&apos;d love to hear from you.
            </p>

            {/* Social links */}
            <div className="flex gap-4 mt-10">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  className="w-11 h-11 rounded-full border border-ink/15 flex items-center justify-center text-ink-faint hover:text-ink hover:border-ink/40 hover:bg-cream-dark transition-all duration-200"
                  aria-label={label}
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div>
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center text-center py-16 bg-cream-card border border-ink/8 rounded-lg">
                <CheckCircle size={48} className="text-rust mb-4" />
                <h3 className="font-display font-bold text-ink text-2xl tracking-tight">Message sent!</h3>
                <p className="font-body text-ink-faint font-light text-sm mt-2">
                  I&apos;ll get back to you within 48 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 btn-outline rounded-full text-sm px-5 py-2"
                >
                  Send another
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    name="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handle}
                    className={inputCls}
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handle}
                    className={inputCls}
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Tell me about your project or idea…"
                  value={form.message}
                  onChange={handle}
                  rows={6}
                  className={inputCls}
                />

                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-600 text-sm font-body">
                    <AlertCircle size={15} />
                    <span>{errMsg}</span>
                  </div>
                )}

                <button
                  onClick={submit}
                  disabled={status === "loading"}
                  className={`btn-primary rounded-full self-start mt-1 ${status === "loading" ? "opacity-60 cursor-not-allowed" : ""}`}
                >
                  {status === "loading" ? (
                    <><Loader2 size={15} className="animate-spin" /> Sending…</>
                  ) : (
                    <><Mail size={15} /> Send Message</>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-ink/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-body text-ink-faint text-xs tracking-wide">
            © {new Date().getFullYear()} Snitik Swaroop. All rights reserved.
          </span>
          {/* <span className="font-body text-ink-faint text-xs">
            Built with Next.js · TypeScript · Tailwind CSS
          </span> */}
        </div>
      </div>
    </section>
  );
}
