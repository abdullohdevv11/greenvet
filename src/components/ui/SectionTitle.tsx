export default function SectionTitle({
  title,
  subtitle,
  index,
}: {
  title: string;
  subtitle?: string;
  index?: string;
}) {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between border-b border-line pb-6">
      <div className="flex items-baseline gap-4">
        {index && (
          <span className="text-sm font-medium text-brand tabular-nums">{index}</span>
        )}
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-ink">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="text-base md:text-lg text-muted max-w-md md:text-right">
          {subtitle}
        </p>
      )}
    </div>
  );
}
