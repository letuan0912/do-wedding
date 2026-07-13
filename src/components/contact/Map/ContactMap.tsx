"use client";

import { MapPin } from "lucide-react";

export default function ContactMap() {
  return (
    <section className="bg-white py-28">

      <div className="mx-auto max-w-6xl px-6">

        <div className="mb-14 text-center">

          <p className="uppercase tracking-[6px] text-[#c8a86b]">
            Studio
          </p>

          <h2 className="mt-5 text-5xl font-light text-[#222]">
            Ghé Thăm DO Wedding
          </h2>

        </div>

        <div className="relative overflow-hidden rounded-[36px] border border-[#eee] shadow-[0_30px_80px_rgba(0,0,0,.08)]">

          <iframe
            src="https://maps.google.com/maps?q=10.8129831,106.6049247&z=15&output=embed"
            width="100%"
            height="520"
            loading="lazy"
            style={{ border: 0 }}
          />

          <div
            className="
              absolute
              left-8
              top-8
              rounded-3xl
              bg-white/90
              px-6
              py-5
              backdrop-blur-xl
              shadow-xl
            "
          >

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#c8a86b]/10">

                <MapPin
                  className="text-[#c8a86b]"
                  size={22}
                />

              </div>

              <div>

                <p className="text-xs uppercase tracking-[4px] text-[#999]">
                  DO Wedding
                </p>

                <h3 className="mt-1 text-xl font-light">
                  TP. Hồ Chí Minh
                </h3>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}