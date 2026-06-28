"use client";

import Aurora from "./Aurora";
import Grid from "./Grid";
import LightSweep from "./LightSweep";
import Particles from "./Particles";

export default function Background() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      {/* Base */}

      <div className="absolute inset-0 bg-gradient-to-br from-[#fffdfb] via-[#faf6ef] to-[#f4ede3]" />

      <Aurora />

      <Grid />

      <LightSweep />

      <Particles />

    </div>
  );
}