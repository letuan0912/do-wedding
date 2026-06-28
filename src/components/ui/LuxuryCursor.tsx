"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";

export default function LuxuryCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, {
  stiffness: 750,
  damping: 28,
  mass: 0.25,
});

const y = useSpring(mouseY, {
  stiffness: 750,
  damping: 28,
  mass: 0.25,
});

  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement;

      setHover(
        !!target.closest(
          "button,a,video,img,.cursor-hover"
        )
      );
    };

    window.addEventListener("mousemove", move);

    return () =>
      window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* Glow */}

      <motion.div
        style={{
          x,
          y,
        }}
        animate={{
          scale: hover ? 1.8 : 1,
          opacity: hover ? 0.35 : 0.18,
        }}
        transition={{
          duration: .25,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d9bf8a] blur-[80px]"
      />

      {/* Cursor */}

      <motion.div
        style={{
          x,
          y,
        }}
        animate={{
          width: hover ? 70 : 18,
          height: hover ? 70 : 18,
          borderColor: hover
            ? "#c8a86b"
            : "#ffffff",
        }}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 25,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full border-2"
      />

      {/* Dot */}

      <motion.div
        style={{
          x,
          y,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[10000] h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c8a86b]"
      />
    </>
  );
}