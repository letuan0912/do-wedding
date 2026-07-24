import { ReactNode } from "react";

type Props = {
  title: string;
  value: number;
  icon: ReactNode;
};

export default function DashboardCard({
  title,
  value,
  icon,
}: Props) {
  return (
    <div className="rounded-3xl border border-[#ececec] bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">
            {title}
          </p>

          <h2 className="mt-3 text-4xl font-light">
            {value}
          </h2>
        </div>

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#c8a86b]/10 text-[#c8a86b]">
          {icon}
        </div>
      </div>
    </div>
  );
}