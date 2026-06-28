"use client";

export default function Grid() {
  return (
    <>
      {/* Luxury Grid */}

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(200,168,107,.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,168,107,.045) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 60%, transparent 100%)",
          maskImage:
            "radial-gradient(circle at center, black 60%, transparent 100%)",
        }}
      />

      {/* Watermark */}

      <h1
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          whitespace-nowrap
          text-[16vw]
          font-extralight
          tracking-[28px]
          text-[#c8a86b]/[0.025]
          select-none
        "
      >
        DO WEDDING
      </h1>
    </>
  );
}