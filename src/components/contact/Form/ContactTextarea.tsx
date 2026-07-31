"use client";

type Props = {
  name?: string;
  value: string;
  placeholder?: string;
  onChange: (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
};

export default function ContactTextarea({
  name = "message",
  value,
  placeholder = "Chia sẻ về ý tưởng hoặc nhu cầu của bạn...",
  onChange,
}: Props) {
  return (
    <div className="space-y-3">
      <label className="text-[11px] uppercase tracking-[4px] text-[#b89559]">
        Nội dung
      </label>

      <textarea
        rows={6}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          w-full
          rounded-2xl
          border
          border-[#ece7df]
          bg-[#faf8f5]
          p-5
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