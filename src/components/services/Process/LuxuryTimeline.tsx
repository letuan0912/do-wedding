"use client";

type TimelineStep = {
  number: string;
  title: string;
  description: string;
};

type Props = {
  subtitle: string;
  title: string;
  steps: TimelineStep[];
};

export default function LuxuryTimeline({
  subtitle,
  title,
  steps,
}: Props) {
  if (!steps?.length) return null;

  return (
    <section className="bg-[#faf8f5] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-20 text-center">
          <p className="text-xs uppercase tracking-[8px] text-[#c8a86b]">
            {subtitle}
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-light text-[#222]">
            {title}
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-[#d8c29a]" />

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={`${step.number}-${index}`}
                className="relative flex gap-8"
              >
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#c8a86b] bg-white text-sm font-medium text-[#c8a86b]">
                  {step.number}
                </div>

                <div>
                  <h3 className="text-2xl font-medium text-[#222]">
                    {step.title}
                  </h3>

                  <p className="mt-3 max-w-2xl text-gray-600 leading-7">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}