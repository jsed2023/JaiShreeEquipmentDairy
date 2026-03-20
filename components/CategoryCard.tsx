"use client";

import Link from "next/link";
import { useState } from "react";
import type { Category } from "@/config/categories";

interface CategoryCardProps {
  cat: Category;
  index: number;
}

export default function CategoryCard({ cat, index }: CategoryCardProps) {

  const animationDelayMap = ["8", "11", "14"];
  const animationDelay = animationDelayMap[index % 3];

  const glowBackground =
    cat.gradient ||
    "linear-gradient(to right,#38bdf8,#8b5cf6,#6366f1)";

  const [isFlipped, setIsFlipped] = useState(false);

  const handleTouch = (e: React.MouseEvent<HTMLAnchorElement>) => {

    // Mobile: first tap flips only
    if (!isFlipped) {
      e.preventDefault();
      setIsFlipped(true);

      // auto reset flip after 3 sec (optional UX polish)
      setTimeout(() => setIsFlipped(false), 3000);
    }
  };

  return (
    <Link
      href={`/${cat.slug}`}
      aria-label={`Open category ${cat.name}`}
      className="group relative"
      style={{ perspective: "1200px" }}
      onClick={handleTouch}
    >

      {/* ===== Glow Halo ===== */}
      <div
        className="
          absolute inset-0 rounded-3xl blur-xl opacity-40
          transition duration-700 group-hover:opacity-70
        "
        style={{ background: glowBackground }}
      />

      {/* ===== Soft Outline ===== */}
      <div
        className="
          absolute -inset-[1px] rounded-3xl
          bg-gradient-to-r from-sky-400/40 via-violet-400/40 to-indigo-400/40
          opacity-60 group-hover:opacity-90 transition
        "
      />

      {/* ===== Flip Container ===== */}
      <div
        className={`
          relative w-full h-64 rounded-3xl
          transition-all duration-700 ease-out
          transform-style-preserve-3d
          animate-slideInFromBottom${animationDelay}
          shadow-[0_20px_40px_rgba(0,0,0,0.35)]
          group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.45)]
          group-hover:[transform:rotateY(180deg)_translateY(-10px)_scale(1.04)_rotateX(2deg)]
          ${isFlipped ? "[transform:rotateY(180deg)_translateY(-10px)_scale(1.04)_rotateX(2deg)]" : ""}
        `}
      >

        {/* ===== FRONT ===== */}
        <div
          className="
            absolute inset-0 rounded-3xl p-8
            bg-white/90 dark:bg-slate-900/70
            backdrop-blur-xl
            border border-white/20
            backface-hidden
            flex flex-col
          "
        >
          <h2 className="text-2xl font-semibold mb-3 text-slate-900 dark:text-white">
            {cat.name}
          </h2>

          <p className="text-sm text-slate-600 dark:text-slate-300 flex-grow leading-relaxed">
            {cat.seo.description}
          </p>

          <span className="mt-6 text-sm font-medium text-indigo-600 dark:text-indigo-400">
            view category →
          </span>
        </div>

        {/* ===== BACK ===== */}
        <div
          className="
            absolute inset-0 rounded-3xl p-8
            bg-gradient-to-br from-indigo-600 to-violet-600
            text-white rotate-y-180
            backface-hidden
            flex flex-col justify-center items-center text-center
          "
        >
          <h3 className="text-2xl font-bold mb-3">
            {cat.name}
          </h3>

          <p className="text-sm opacity-90 mb-6 max-w-[220px]">
            Explore premium dairy equipment & solutions
          </p>

          <span
            className="
              px-6 py-2 rounded-full
              bg-white/20 backdrop-blur
              text-sm font-medium
            "
          >
             open →
          </span>
        </div>

      </div>
    </Link>
  );
}
