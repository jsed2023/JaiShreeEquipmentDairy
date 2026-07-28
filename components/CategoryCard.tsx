"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

import type { Category } from "@/config/categories";

interface CategoryCardProps {
  cat: Category;
  index: number;
}

export default function CategoryCard({
  cat,
  index,
}: CategoryCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const glowBackground =
    cat.gradient ??
    "linear-gradient(to right, #38bdf8, #8b5cf6, #6366f1)";

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    // Touch device: first tap flips, second tap opens link.
    if (window.matchMedia("(hover: none)").matches) {
      if (!isFlipped) {
        event.preventDefault();

        setIsFlipped(true);

        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
          setIsFlipped(false);
        }, 2500);
      }
    }
  };

  return (
    <Link
      href={`/${cat.slug}`}
      aria-label={`Open category ${cat.name}`}
      className="group relative focus:outline-none"
      style={{ perspective: "1200px" }}
      onClick={handleClick}
    >
      {/* Glow Halo */}
      <div
        className="
          absolute inset-0
          rounded-3xl
          opacity-40
          blur-xl
          transition
          duration-700
          group-hover:opacity-70
        "
        style={{
          background: glowBackground,
        }}
      />

      {/* Soft Outline */}
      <div
        className="
          absolute -inset-px
          rounded-3xl
          bg-linear-to-br
          from-sky-400/40
          via-violet-400/40
          to-indigo-400/40
          opacity-60
          transition
          group-hover:opacity-90
        "
      />

      {/* Flip Container */}
      <motion.div
        initial={{
          opacity: 0,
          x: index % 2 === 0 ? -120 : 120,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          y: 0,
        }}
        viewport={{
          once: false,
          amount: 0.2,
        }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
          delay: index * 0.1,
        }}
        className={`
          relative
          h-64
          w-full
          rounded-3xl
          shadow-xl
          transition-all
          duration-700
          ease-out
          transform-style-preserve-3d
          will-change-transform
          group-hover:shadow-2xl
          group-hover:transform-[rotateY(180deg)_translateY(-10px)_scale(1.04)_rotateX(2deg)]
          ${
            isFlipped
              ? "transform-[rotateY(180deg)_translateY(-10px)_scale(1.04)_rotateX(2deg)]"
              : ""
          }
        `}
      >
        {/* Front */}
        <div
          className="
            absolute inset-0
            flex
            flex-col
            rounded-3xl
            border
            border-white/20
            bg-white/90
            p-8
            backface-hidden
            backdrop-blur-xl
            dark:bg-slate-900/70
          "
        >
          <h2
            className="
              mb-3
              text-2xl
              font-semibold
              text-slate-900
              dark:text-white
            "
          >
            {cat.name}
          </h2>

          <p
            className="
              line-clamp-3
              grow
              text-sm
              leading-relaxed
              text-slate-600
              dark:text-slate-300
            "
          >
            {cat.seo.description}
          </p>

          <span
            className="
              mt-6
              text-sm
              font-medium
              text-indigo-600
              dark:text-indigo-400
            "
          >
            View Category →
          </span>
        </div>

        {/* Back */}
        <div
          className="
            absolute inset-0
            flex
            rotate-y-180
            flex-col
            items-center
            justify-center
            rounded-3xl
            bg-linear-to-br
            from-indigo-600
            to-violet-600
            p-8
            text-center
            text-white
            backface-hidden
          "
        >
          <h3 className="mb-3 text-2xl font-bold">
            {cat.name}
          </h3>

          <p className="mb-6 max-w-55 text-sm opacity-90">
            Explore premium dairy equipment, milk analyzers & AMCS
            systems
          </p>

          <span
            className="
              rounded-full
              bg-white/20
              px-6
              py-2
              text-sm
              font-medium
              backdrop-blur
            "
          >
            Open →
          </span>
        </div>
      </motion.div>
    </Link>
  );
}