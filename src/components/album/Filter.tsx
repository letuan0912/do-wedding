"use client";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const tabs = [
  {
    id: "all",
    title: "Tất Cả",
  },
  {
    id: "studio",
    title: "Studio",
  },
  {
    id: "outdoor",
    title: "Outdoor",
  },
  {
    id: "wedding",
    title: "Wedding",
  },
];

export default function Filter({
  value,
  onChange,
}: Props) {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6 text-center">

        <p className="uppercase tracking-[6px] text-[#c8a86b]">
          Collections
        </p>

        <h2 className="text-5xl font-light mt-4">
          BỘ SƯU TẬP
        </h2>

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          {tabs.map((item) => (

            <button
              key={item.id}
              onClick={() => onChange(item.id)}
              className={`px-7 py-3 rounded-full duration-300 border
                ${
                  value === item.id
                    ? "bg-[#c8a86b] text-white border-[#c8a86b]"
                    : "bg-white border-gray-200 hover:border-[#c8a86b]"
                }`}
            >
              {item.title}
            </button>

          ))}

        </div>

      </div>

    </section>
  );
}