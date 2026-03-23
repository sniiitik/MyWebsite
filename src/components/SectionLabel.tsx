interface SectionLabelProps {
  children: React.ReactNode;
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-6 h-px bg-rust block" />
      <span className="font-body text-xs font-semibold text-rust tracking-[0.12em] uppercase">
        {children}
      </span>
    </div>
  );
}
