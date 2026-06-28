"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import {
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

import {
  AnimatePresence,
  motion,
  LayoutGroup,
} from "framer-motion";

const menus = [
  {
    title: "Album",
    href: "/album",
  },
  {
    title: "Dịch vụ",
    href: "/dich-vu",
  },
  {
    title: "Bảng giá",
    href: "/bang-gia",
  },
  {
    title: "Liên hệ",
    href: "/lien-he",
  },
];

export default function Header() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  return (

    <motion.header

      initial={{
        opacity: 0,
        y: -80,
      }}

      animate={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: .8,
      }}

      className="fixed inset-x-0 top-0 z-50 px-6 pt-6"

    >

      <div

        className={`mx-auto max-w-[1450px] rounded-full border transition-all duration-500

        ${
          scrolled

            ? "border-white/60 bg-white/85 backdrop-blur-2xl shadow-[0_25px_70px_rgba(0,0,0,.12)]"

            : "border-white/40 bg-white/45 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,.08)]"

        }

        `}

      >

        <div

          className={`flex items-center justify-between px-10

          ${
            scrolled
              ? "py-4"
              : "py-5"
          }

          transition-all duration-500`}

        >

          {/* Logo */}

          <motion.div

            whileHover={{
              scale: 1.04,
            }}

            transition={{
              duration: .25,
            }}

          >

            <Link
              href="/"
              className="block"
            >

              <h2 className="text-[34px] font-light tracking-[2px] text-[#222]">

                DO WEDDING

              </h2>

              <p className="-mt-1 text-[11px] uppercase tracking-[5px] text-[#b69557]">

                Luxury Wedding Studio

              </p>

            </Link>

          </motion.div>

          {/* Desktop */}

          <LayoutGroup>

            <nav className="hidden items-center gap-12 lg:flex">
                            {menus.map((item) => (

                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative py-2 text-sm font-medium uppercase tracking-[3px] transition duration-300

                  ${
                    pathname === item.href
                      ? "text-[#c8a86b]"
                      : "text-[#444] hover:text-[#c8a86b]"
                  }

                  `}
                >

                  {item.title}

                  {pathname === item.href && (

                    <motion.span

                      layoutId="navbar"

                      className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-[#c8a86b]"

                      transition={{
                        type: "spring",
                        stiffness: 450,
                        damping: 35,
                      }}

                    />

                  )}

                </Link>

              ))}

              {/* Button */}

              <motion.div

                whileHover={{
                  y: -3,
                  scale: 1.03,
                }}

                transition={{
                  duration: .25,
                }}

              >

                <Link

                  href="/lien-he"

                  className="group flex items-center gap-3 rounded-full bg-[#c8a86b] px-8 py-3 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:bg-[#b89559] hover:shadow-[0_20px_60px_rgba(200,168,107,.4)]"

                >

                  Tư Vấn

                  <ArrowRight

                    size={16}

                    className="transition-transform duration-300 group-hover:translate-x-1"

                  />

                </Link>

              </motion.div>

            </nav>

          </LayoutGroup>

          {/* Mobile Button */}

          <button

            onClick={() => setOpen(!open)}

            className="text-[#222] transition hover:text-[#c8a86b] lg:hidden"

          >

            {open

              ? <X size={28} />

              : <Menu size={28} />

            }

          </button>

        </div>

      </div>
            {/* Mobile Menu */}

      <AnimatePresence>

        {open && (

          <motion.div

            initial={{
              opacity: 0,
              y: -20,
              scale: .98,
            }}

            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}

            exit={{
              opacity: 0,
              y: -20,
              scale: .98,
            }}

            transition={{
              duration: .3,
            }}

            className="mx-5 mt-4 rounded-[32px] border border-white/50 bg-white/90 p-8 shadow-[0_30px_80px_rgba(0,0,0,.12)] backdrop-blur-2xl lg:hidden"

          >

            {menus.map((item) => (

              <Link

                key={item.href}

                href={item.href}

                onClick={() => setOpen(false)}

                className={`block rounded-xl px-4 py-4 text-lg transition-all duration-300

                ${
                  pathname === item.href
                    ? "bg-[#f8f1e5] text-[#c8a86b]"
                    : "text-[#333] hover:bg-[#faf7f2] hover:text-[#c8a86b]"
                }

                `}

              >

                {item.title}

              </Link>

            ))}

            <motion.div

              whileHover={{
                y: -2,
              }}

              className="mt-6"

            >

              <Link

                href="/lien-he"

                onClick={() => setOpen(false)}

                className="flex items-center justify-center gap-3 rounded-full bg-[#c8a86b] py-4 font-medium text-white transition-all duration-300 hover:bg-[#b89559]"

              >

                Tư Vấn

                <ArrowRight size={18} />

              </Link>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </motion.header>

  );

}