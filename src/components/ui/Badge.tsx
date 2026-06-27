interface Props {
  children: React.ReactNode;
}

export default function Badge({
  children,
}: Props) {
  return (
    <span className="inline-flex rounded-full bg-[#c8a86b] px-5 py-2 text-xs uppercase tracking-[3px] text-white">
      {children}
    </span>
  );
}