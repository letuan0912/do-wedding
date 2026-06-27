"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/Container";

const stats = [
  {
    value: 500,
    suffix: "+",
    label: "Cặp đôi",
  },
  {
    value: 8,
    suffix: "+",
    label: "Năm kinh nghiệm",
  },
  {
    value: 1200,
    suffix: "+",
    label: "Album hoàn thành",
  },
  {
    value: 100,
    suffix: "%",
    label: "Khách hài lòng",
  },
];

function CountUp({
  end,
}: {
  end: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started.current) return;

      started.current = true;

      let start = 0;

      const duration = 1500;

      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;

        if (start >= end) {
          start = end;
          clearInterval(timer);
        }

        setCount(Math.floor(start));
      }, 16);
    });

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [end]);

  return <div ref={ref}>{count}</div>;
}

export default function Counter() {
  return (
    <section className="py-28 bg-[#c8a86b] text-white">

      <Container>

        <div className="grid md:grid-cols-4 gap-12 text-center">

          {stats.map((item) => (

            <div key={item.label}>

              <h2 className="text-6xl font-extralight">

                <CountUp end={item.value} />

                {item.suffix}

              </h2>

              <p className="uppercase tracking-[4px] mt-5 text-sm text-white/80">
                {item.label}
              </p>

            </div>

          ))}

        </div>

      </Container>

    </section>
  );
}