export default function SectionTitle({ title, subtitle }: { title: string, subtitle?: string }) {
  return (
    <div className="flex flex-col">
        <h2 className="text-black text-3xl md:text-5xl font-rounded font-bold mt-1 md:mt-[-5px]">
          {title}
        </h2>
        <p className="text-xl md:text-2xl font-oooh text-darkBlue font-medium mt-1 leading-tight">
          {subtitle}
        </p>
    </div>
  );
}