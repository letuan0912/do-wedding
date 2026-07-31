"use client";

import Aurora from "./Aurora";
import Grid from "./Grid";
import LightSweep from "./LightSweep";
import Particles from "./Particles";

interface BackgroundProps {
  background: string;
}

export default function Background({
  background,
}: BackgroundProps) {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Base */}

      <div className="absolute inset-0 bg-gradient-to-br from-[#fffdfb] via-[#faf6ef] to-[#f4ede3]" />

      {/* Background Image */}

      {background && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${background})`,
            }}
          />

          {/* Overlay để giữ tone màu */}

          <div className="absolute inset-0 bg-[#fbf8f3]/70 backdrop-blur-[1px]" />
        </>
      )}

      <Aurora />

      <Grid />

      <LightSweep />

      <Particles />
    </div>
  );
}