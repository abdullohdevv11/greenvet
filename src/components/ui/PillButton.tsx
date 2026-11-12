import { PawPrint } from "lucide-react";
import { cn } from "../../utils/cn";

/** Black pill with an attached round accent icon. */
export default function PillButton({
  children,
  href,
  onClick,
  dark = true,
  className,
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  dark?: boolean;
  className?: string;
}) {
  const inner = (
    <>
      <span
        className={cn(
          "inline-flex items-center rounded-full px-6 py-3 text-sm font-medium transition-colors",
          dark ? "bg-ink text-white group-hover:bg-brand" : "bg-white text-ink"
        )}
      >
        {children}
      </span>
      <span className="-ml-2 h-11 w-11 rounded-full bg-mint ring-4 ring-paper flex items-center justify-center transition-transform group-hover:rotate-12">
        <PawPrint className="h-4 w-4 text-brand-dark" />
      </span>
    </>
  );

  const cls = cn("group inline-flex items-center cursor-pointer", className);
  const external = href?.startsWith("http");

  return href ? (
    <a
      href={href}
      className={cls}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {inner}
    </a>
  ) : (
    <button onClick={onClick} className={cls}>
      {inner}
    </button>
  );
}
