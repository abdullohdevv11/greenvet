export default function SectionTitle({ title, subtitle }: { title: string, subtitle?: string }) {
  return (
    <div className="flex flex-col">
        <h2 className="text-black text-2xl md:text-5xl font-rounded font-bold mt-1 md:mt-[-5px]">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xl sm:text-2xl md:text-3xl font-rounded text-darkBlue font-medium mt-1 leading-tight">
            {subtitle}
          </p>
        )}
    </div>
  );
}