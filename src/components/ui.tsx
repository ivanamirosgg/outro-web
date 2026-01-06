export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
      {children}
    </span>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="text-sm font-semibold tracking-widest text-[rgb(var(--outro-accent))]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 text-balance text-2xl font-semibold sm:text-3xl">
        {title}
      </h2>
      {subtitle ? <p className="mt-3 text-white/70">{subtitle}</p> : null}
    </div>
  );
}
