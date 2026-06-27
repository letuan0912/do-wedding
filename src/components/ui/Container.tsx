import { CONTAINER } from "@/lib/theme";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = "",
}: Props) {
  return (
    <div className={`${CONTAINER} ${className}`}>
      {children}
    </div>
  );
}