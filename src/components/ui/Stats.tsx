interface Props {
  number: string;
  label: string;
}

export default function Stats({
  number,
  label,
}: Props) {
  return (
    <div>

      <h2 className="text-5xl font-light text-[#c8a86b]">
        {number}
      </h2>

      <p className="mt-3 uppercase tracking-[2px] text-gray-500">
        {label}
      </p>

    </div>
  );
}