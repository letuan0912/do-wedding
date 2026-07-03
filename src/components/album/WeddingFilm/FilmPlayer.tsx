"use client";

import { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";

import Image from "next/image";

import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

import { Play } from "lucide-react";

interface Props {
  video: string;
  cover: string;
}

export default function FilmPlayer({
  video,
  cover,
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [open]);

  useEffect(() => {
    if (open && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [open]);

  return (
    <>      {/* Preview Card */}

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
        }}
        className="relative group"
      >
        {/* Glow */}

        <div
          className="
            absolute
            -inset-8
            rounded-[60px]
            bg-[#c8a86b]/20
            blur-[90px]
            opacity-0
            transition
            duration-700
            group-hover:opacity-100
          "
        />

        {/* Card */}

        <div
          className="
            relative
            overflow-hidden
            rounded-[40px]
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            shadow-[0_40px_120px_rgba(0,0,0,.35)]
          "
        >
          {/* Poster */}

          <Image
            src={cover}
            alt="Wedding Film"
            width={1600}
            height={900}
            priority
            className="
              aspect-video
              w-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-105
            "
          />

          {/* Overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/20" />

          {/* Reflection */}

          <motion.div
            animate={{
              x: ["-180%", "220%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
              repeatDelay: 2,
            }}
            className="
              absolute
              inset-y-0
              w-40
              -rotate-12
              bg-gradient-to-r
              from-transparent
              via-white/30
              to-transparent
              blur-xl
            "
          />

          {/* Center */}

          <div className="absolute inset-0 flex items-center justify-center">
            <motion.button
            onClick={() => setOpen(true)}
            whileHover={{
                scale: 1.12,
                rotate: -8,
            }}
              whileTap={{
                scale: 0.95,
              }}
              animate={{
                boxShadow: [
                  "0 0 0 rgba(255,255,255,.2)",
                  "0 0 60px rgba(255,255,255,.45)",
                  "0 0 0 rgba(255,255,255,.2)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="
                relative
                flex
                h-24
                w-24
                items-center
                justify-center
                rounded-full
                border
                border-white/30
                bg-white/10
                backdrop-blur-2xl
              "
            >
              {/* Pulse */}

              <motion.div
                animate={{
                  scale: [1, 1.8],
                  opacity: [0.45, 0],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  inset-0
                  rounded-full
                  border
                  border-[#d9bf8a]
                "
              />

              <Play
                size={34}
                fill="white"
                className="relative z-10 ml-1 text-white"
              />
            </motion.button>
          </div>

          {/* Bottom Info */}

          <div
            className="
              absolute
              bottom-0
              left-0
              right-0
              flex
              items-center
              justify-between
              px-8
              py-7
            "
          >
            <div>
              <p className="text-xs uppercase tracking-[6px] text-[#d6b16b]">
                Wedding Film
              </p>

              <h3 className="mt-3 text-3xl font-extralight text-white">
                Every Love Story Deserves
                <br />
                A Beautiful Film
              </h3>
            </div>

            <span className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-xs uppercase tracking-[3px] text-white backdrop-blur-xl">
              4K Cinema
            </span>
          </div>
        </div>
      </motion.div>      {/* Fullscreen Dialog */}

      <Dialog
        open={open}
        onOpenChange={setOpen}
      >
        <DialogContent
          className="
            max-w-[90vw]
            overflow-hidden
            border-none
            bg-transparent
            p-0
            shadow-none
        "
        >
          <motion.div
            initial={{
                opacity: 0,
                scale: 0.96,
            }}
            animate={{
                opacity: 1,
                scale: 1,
            }}
            transition={{
                duration: 0.35,
            }}
            className="
                relative
                overflow-hidden
                rounded-[40px]
                bg-black
                shadow-[0_40px_120px_rgba(0,0,0,.45)]
            "
            >
            {/* Video */}

            <video
            ref={videoRef}
            controls
            playsInline
            preload="metadata"
            className="
                aspect-video
                w-full
                bg-black
                outline-none
            "
            >
              <source
                src={video}
                type="video/mp4"
              />
            </video>

            {/* Top Gradient */}

            <div
              className="
                pointer-events-none
                absolute
                inset-x-0
                top-0
                h-40
                bg-gradient-to-b
                from-black/70
                to-transparent
              "
            />

            {/* Live Badge */}

            <div
            className="
                absolute
                left-8
                top-8
                rounded-full
                border
                border-white/20
                bg-white/10
                px-5
                py-3
                text-xs
                uppercase
                tracking-[4px]
                text-white
                backdrop-blur-xl
            "
            >
            LIVE CINEMA
            </div>

            {/* Bottom Gradient */}

            <div
              className="
                pointer-events-none
                absolute
                inset-x-0
                bottom-0
                h-40
                bg-gradient-to-t
                from-black/70
                to-transparent
              "
            />

            {/* Info */}

            <div
              className="
                pointer-events-none
                absolute
                bottom-8
                left-8
              "
            >
              <p
                className="
                  text-xs
                  uppercase
                  tracking-[6px]
                  text-[#d6b16b]
                "
              >
                Wedding Film
              </p>

              <h3
                className="
                  mt-3
                  text-3xl
                  font-extralight
                  text-white
                "
              >
                {`Every Love Story
Deserves A Beautiful Film`}
              </h3>
            </div>

            {/* Quality */}

            <div
              className="
                absolute
                right-8
                top-8
                rounded-full
                border
                border-white/20
                bg-white/10
                px-5
                py-3
                text-xs
                uppercase
                tracking-[3px]
                text-white
                backdrop-blur-xl
              "
            >
              4K CINEMA
            </div>

            {/* Duration */}

            <div
            className="
                absolute
                bottom-8
                right-8
                rounded-full
                border
                border-white/20
                bg-black/40
                px-4
                py-2
                text-sm
                text-white
                backdrop-blur-xl
            "
            >
            06:23
            </div>
          </motion.div>
        </DialogContent>
      </Dialog>    </>
  );
}
</>