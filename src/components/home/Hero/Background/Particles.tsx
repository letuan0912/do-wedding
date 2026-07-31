"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Particle = {
  width: number;
  height: number;
  left: number;
  duration: number;
  delay: number;
  moveX: number;
};

export default function Particles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const data = Array.from({ length: 20 }, () => ({
      width: Math.random() * 2 + 1,
      height: Math.random() * 2 + 1,
      left: Math.random() * 100,
      duration: 8 + Math.random() * 5,
      delay: Math.random() * 8,
      moveX: (Math.random() - 0.5) * 60,
    }));

    setParticles(data);
  }, []);

  return (
    <>
      {particles.map((particle, index) => (
        <motion.span
          key={index}
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: [0, 0.5, 0],
            y: [-20, -260],
            x: [0, particle.moveX],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
          }}
          className="absolute rounded-full bg-[#d9bf8a]"
          style={{
            width: particle.width,
            height: particle.height,
            left: `${particle.left}%`,
            bottom: -20,
            filter: "blur(.4px)",
          }}
        />
      ))}
    </>
  );
}