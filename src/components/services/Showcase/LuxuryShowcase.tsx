"use client";

import Image from "next/image";
import Link from "next/link";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import {
  ArrowRight,
} from "lucide-react";

import {
  services,
} from "@/data/services";

import {
  useRef,
} from "react";

export default function LuxuryShowcase() {

  return (

    <section
      className="
        relative
        overflow-hidden
        bg-[#f7f4ef]
        py-40
      "
    >

      {/* Glow */}

      <div
        className="
          absolute
          left-1/2
          top-0
          h-[700px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-[#d3b06f]/10
          blur-[180px]
        "
      />

      {/* Heading */}

      <div
        className="
          relative
          z-20
          mx-auto
          mb-36
          max-w-7xl
          px-8
          text-center
        "
      >

        <motion.p

          initial={{
            opacity:0,
            y:20,
          }}

          whileInView={{
            opacity:1,
            y:0,
          }}

          viewport={{
            once:true,
          }}

          transition={{
            duration:.6,
          }}

          className="
            text-xs
            uppercase
            tracking-[10px]
            text-[#c8a86b]
          "
        >

          OUR SERVICES

        </motion.p>

        <motion.h2

          initial={{
            opacity:0,
            y:30,
          }}

          whileInView={{
            opacity:1,
            y:0,
          }}

          transition={{
            delay:.15,
            duration:.8,
          }}

          viewport={{
            once:true,
          }}

          className="
            mt-8
            text-6xl
            font-extralight
            leading-tight
            text-[#1e1e1e]
            md:text-8xl
          "
        >

          Designed
          <br/>
          Around
          <br/>
          Your Love

        </motion.h2>

        <motion.p

          initial={{
            opacity:0,
          }}

          whileInView={{
            opacity:1,
          }}

          transition={{
            delay:.35,
          }}

          viewport={{
            once:true,
          }}

          className="
            mx-auto
            mt-10
            max-w-3xl
            text-lg
            leading-9
            text-gray-500
          "
        >

          Mỗi dịch vụ được xây dựng như
          một hành trình riêng biệt,
          để từng khoảnh khắc đều
          trở thành một phần ký ức.

        </motion.p>

      </div>

      {/* Content */}

      <div
        className="
          relative
          z-20
          mx-auto
          flex
          max-w-[1800px]
          flex-col
          gap-48
          px-8
        "
      >

        {services.map((service,index)=>(

          <LuxuryCard

            key={service.id}

            service={service}

            index={index}

          />

        ))}

      </div>

    </section>

  );

}

type CardProps={

  service:(typeof services)[number];

  index:number;

};

function LuxuryCard({

  service,

  index,

}:CardProps){

  const ref=useRef<HTMLDivElement>(null);

  const mouseX=useMotionValue(0);

  const mouseY=useMotionValue(0);

  const rotateX=useSpring(

    useTransform(mouseY,[-200,200],[8,-8]),

    {

      stiffness:120,

      damping:18,

    }

  );

  const rotateY=useSpring(

    useTransform(mouseX,[-200,200],[-8,8]),

    {

      stiffness:120,

      damping:18,

    }

  );

  function handleMove(

    e:React.MouseEvent<HTMLDivElement>

  ){

    const rect=

      ref.current?.getBoundingClientRect();

    if(!rect) return;

    mouseX.set(

      e.clientX-

      rect.left-

      rect.width/2

    );

    mouseY.set(

      e.clientY-

      rect.top-

      rect.height/2

    );

  }

  function leave(){

    mouseX.set(0);

    mouseY.set(0);

  }

  return (

    <motion.div

      ref={ref}

      onMouseMove={handleMove}

      onMouseLeave={leave}

      style={{

        rotateX,

        rotateY,

        transformPerspective:2000,

      }}

      initial={{

        opacity:0,

        y:80,

      }}

      whileInView={{

        opacity:1,

        y:0,

      }}

      viewport={{

        once:true,

      }}

      transition={{

        duration:.9,

      }}

      className="
        relative
      "
    >
              {/* Huge Number */}

      <div
        className="
          pointer-events-none
          absolute
          -top-20
          left-0
          z-0
          select-none
          text-[220px]
          font-thin
          leading-none
          text-[#ece5dc]
          xl:text-[280px]
        "
      >
        0{index + 1}
      </div>

      <div
        className={`
          relative
          z-10
          grid
          items-center
          gap-14
          lg:grid-cols-12
          ${
            index % 2 === 1
              ? "lg:[&>*:first-child]:order-2"
              : ""
          }
        `}
      >

        {/* IMAGE */}

        <div className="relative lg:col-span-8">

          {/* Glow */}

          <div
            className="
              absolute
              -inset-10
              rounded-[60px]
              bg-[#d3b06f]/10
              blur-[80px]
            "
          />

          <motion.div

            whileHover={{
                scale: 1.02,
                y: -8,
            }}

            transition={{
                duration: .6,
            }}

            style={{
                x: useTransform(mouseX, [-200, 200], [-10, 10]),
                y: useTransform(mouseY, [-200, 200], [-10, 10]),
            }}

            className="
                group
                relative
                overflow-hidden
                rounded-[52px]
                shadow-[0_35px_80px_rgba(0,0,0,.18)]
            "
            >

            {/* Image */}

            <Image

              src={service.cover}

              alt={service.title}

              width={1800}

              height={1300}

              className="
                h-[780px]
                w-full
                object-cover
                duration-700
                group-hover:scale-105
              "

            />

            {/* Overlay */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/45
                via-transparent
                to-black/5
              "
            />

            {/* Reflection */}

            <motion.div

              animate={{
                x:["-200%","250%"],
              }}

              transition={{
                duration:5,
                repeat:Infinity,
                ease:"linear",
                repeatDelay:2,
              }}

              className="
                absolute
                inset-y-0
                w-48
                -rotate-12
                bg-gradient-to-r
                from-transparent
                via-white/20
                to-transparent
                blur-xl
              "

            />

            {/* Floating Glass */}

            <motion.div

              whileHover={{
                y:-6,
              }}

              className="
                absolute
                bottom-10
                left-10
                max-w-md
                rounded-[34px]
                border
                border-white/20
                bg-white/70
                p-8
                shadow-[0_30px_80px_rgba(0,0,0,.18)]
                backdrop-blur-3xl
              "

            >

              <p
                className="
                  text-xs
                  uppercase
                  tracking-[6px]
                  text-[#c8a86b]
                "
              >
                {service.subtitle}
              </p>

              <h3
                className="
                  mt-4
                  text-3xl
                  font-light
                  text-[#222]
                "
              >
                {service.title}
              </h3>

              <p
                className="
                  mt-5
                  leading-8
                  text-gray-600
                "
              >
                {service.description}
              </p>

            </motion.div>

          </motion.div>

        </div>
                {/* CONTENT */}

        <div className="relative lg:col-span-4">

          {/* Vertical Gold Line */}

          <div className="mb-10 h-24 w-px bg-[#c8a86b]" />

          {/* Category */}

          <motion.p
            initial={{
              opacity: 0,
              x: 20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: .15,
            }}
            className="
              text-xs
              uppercase
              tracking-[8px]
              text-[#c8a86b]
            "
          >
            Premium Experience
          </motion.p>

          {/* Huge Title */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: .25,
            }}
            className="
              mt-8
              text-6xl
              font-extralight
              leading-[1.05]
              text-[#1f1f1f]
              xl:text-7xl
            "
          >
            {service.title}
          </motion.h2>

          {/* Story */}

          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: .35,
            }}
            className="
              mt-10
              text-lg
              leading-9
              text-gray-500
            "
          >
            {service.story}
          </motion.p>

          {/* Price */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: .45,
            }}
            className="mt-14"
          >

            <p
              className="
                text-xs
                uppercase
                tracking-[6px]
                text-gray-400
              "
            >
              Chi phí từ
            </p>

            <h3
              className="
                mt-3
                text-5xl
                font-extralight
                text-[#c8a86b]
              "
            >
              {service.price}
            </h3>

          </motion.div>

          {/* CTA */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: .6,
            }}
            className="mt-16"
          >

            <Link
              href={`/dich-vu/${service.slug}`}
              className="
                group
                inline-flex
                items-center
                gap-4
                rounded-full
                border
                border-[#c8a86b]
                px-8
                py-4
                text-[#c8a86b]
                transition-all
                duration-500
                hover:bg-[#c8a86b]
                hover:text-white
              "
            >

              Khám Phá Dịch Vụ

              <ArrowRight
                size={18}
                className="
                  transition-transform
                  duration-500
                  group-hover:translate-x-2
                "
              />

            </Link>

          </motion.div>

          {/* Decorative Line */}

          <div
            className="
              mt-16
              h-px
              w-40
              bg-[#c8a86b]
            "
          />

        </div>

      </div>
          </motion.div>
  );
}   