interface Props {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
}: Props) {
  return (
    <div className="text-center">

      <p className="uppercase tracking-[6px] text-[#c8a86b]">
        {eyebrow}
      </p>

      <h2 className="mt-5 text-5xl font-light">
        {title}
      </h2>

      {description && (
        <p className="mt-6 max-w-2xl mx-auto text-gray-500 leading-8">
          {description}
        </p>
      )}

    </div>
  );
}