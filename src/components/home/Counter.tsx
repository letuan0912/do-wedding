"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/Container";

interface CounterData {
  counter1Number: number;
  counter1Suffix: string;
  counter1Label: string;

  counter2Number: number;
  counter2Suffix: string;
  counter2Label: string;

  counter3Number: number;
  counter3Suffix: string;
  counter3Label: string;

  counter4Number: number;
  counter4Suffix: string;
  counter4Label: string;
}

const initialCounter: CounterData = {
  counter1Number: 500,
  counter1Suffix: "+",
  counter1Label: "Cặp đôi",

  counter2Number: 8,
  counter2Suffix: "+",
  counter2Label: "Năm kinh nghiệm",

  counter3Number: 1200,
  counter3Suffix: "+",
  counter3Label: "Album hoàn thành",

  counter4Number: 100,
  counter4Suffix: "%",
  counter4Label: "Khách hài lòng",
};

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
  const [data, setData] =
    useState<CounterData>(initialCounter);

  useEffect(() => {
    async function loadCounter() {
      try {
        const res = await fetch("/api/homepage", {
          cache: "no-store",
        });

        const result = await res.json();

        if (result.success) {
          setData({
            ...initialCounter,
            ...result.data,
          });
        }
      } catch (error) {
        console.error(error);
      }
    }

    loadCounter();
  }, []);

  const stats = [
    {
      value: data.counter1Number,
      suffix: data.counter1Suffix,
      label: data.counter1Label,
    },
    {
      value: data.counter2Number,
      suffix: data.counter2Suffix,
      label: data.counter2Label,
    },
    {
      value: data.counter3Number,
      suffix: data.counter3Suffix,
      label: data.counter3Label,
    },
    {
      value: data.counter4Number,
      suffix: data.counter4Suffix,
      label: data.counter4Label,
    },
  ];

  return (
    <section className="bg-[#c8a86b] py-28 text-white">
      <Container>
        <div className="grid gap-12 text-center md:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label}>
              <h2 className="text-6xl font-extralight">
                <CountUp end={item.value} />
                {item.suffix}
              </h2>

              <p className="mt-5 text-sm uppercase tracking-[4px] text-white/80">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}