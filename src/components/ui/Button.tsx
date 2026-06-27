import Link from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
}

export default function Button({
  href,
  children,
}: Props) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-[#c8a86b] px-8 py-4 text-white transition duration-300 hover:bg-[#b79555]"
    >
      {children}
    </Link>
  );
}