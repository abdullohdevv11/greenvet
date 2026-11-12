import { cn } from "../../utils/cn";

/** Small label with a dot, e.g. "• Our services" */
export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("flex items-center gap-2 text-sm font-medium text-ink", className)}>
      <span className="h-2 w-2 rounded-full bg-brand" />
      {children}
    </p>
  );
}

/** Hand-drawn double stroke under a word */
function Scribble() {
  return (
    <svg
      viewBox="0 0 120 14"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="absolute left-0 -bottom-2 md:-bottom-3 h-3 md:h-4 w-[110%] text-brand"
    >
      <path d="M2 6 C 30 2, 70 2, 118 5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M8 11 C 40 7, 80 8, 112 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

/** Large heading; the last word gets a scribble underline. */
export function Heading({
  text,
  as: Tag = "h2",
  className,
}: {
  text: string;
  as?: "h1" | "h2";
  className?: string;
}) {
  const trimmed = text.trim();
  const cut = trimmed.lastIndexOf(" ");
  const head = cut > 0 ? trimmed.slice(0, cut + 1) : "";
  const last = cut > 0 ? trimmed.slice(cut + 1) : trimmed;

  return (
    <Tag className={cn("font-medium tracking-tight text-ink leading-[1.1]", className)}>
      {head}
      <span className="relative inline-block whitespace-nowrap">
        {last}
        <Scribble />
      </span>
    </Tag>
  );
}
