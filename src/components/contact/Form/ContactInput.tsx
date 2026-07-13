"use client";

type Props = {
  label: string;
  name: string;
  value: string;
  placeholder: string;
  type?: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
};

export default function ContactInput({
  label,
  name,
  value,
  placeholder,
  type = "text",
  onChange,
}: Props) {
  return (
    <div className="space-y-3">

      <label className="text-[11px] uppercase tracking-[4px] text-[#b89559]">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          h-14
          w-full
          rounded-2xl
          border
          border-[#ece7df]
          bg-[#faf8f5]
          px-5
          outline-none
          transition-all
          duration-300
          focus:border-[#c8a86b]
          focus:bg-white
          focus:shadow-[0_0_0_4px_rgba(200,168,107,.12)]
        "
      />

    </div>
  );
}