"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  HiLightningBolt,
  HiChartBar,
  HiScale,
  HiPrinter,
  HiCheckCircle,
  HiClock,
  HiShieldCheck,
  HiDatabase,
  HiCurrencyRupee,
  HiEye,
} from "react-icons/hi";

/* ================= TYPES ================= */

type CardItem = {
  title: string;
  desc: string;
  icon: React.ElementType;
};

/* ================= DATA ================= */

const features: CardItem[] = [
  { title: "Instant Milk Analysis", desc: "Fat, SNF, CLR & water content in seconds.", icon: HiLightningBolt },
  { title: "Data Processing", desc: "Auto records milk quantity & quality.", icon: HiChartBar },
  { title: "Weighing Integration", desc: "Digital scale connectivity.", icon: HiScale },
  { title: "Slip Printing", desc: "Instant billing receipts.", icon: HiPrinter },
];

const benefits: CardItem[] = [
  { title: "Accurate Payments", desc: "Fair farmer transactions.", icon: HiCheckCircle },
  { title: "Faster Collection", desc: "Less waiting time.", icon: HiClock },
  { title: "Better Hygiene", desc: "Minimal handling.", icon: HiShieldCheck },
  { title: "Digital Records", desc: "Automatic storage.", icon: HiDatabase },
  { title: "Lower Costs", desc: "Reduced manpower.", icon: HiCurrencyRupee },
  { title: "Transparency", desc: "Clear reports.", icon: HiEye },
];

/* ================= SKELETON ================= */

function Skeleton() {
  return (
    <div className="animate-pulse rounded-xl bg-zinc-200 dark:bg-zinc-800 h-32" />
  );
}

function SkeletonGrid({ count }: { count: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <Skeleton key={i} />
      ))}
    </>
  );
}

/* ================= 3D CARD ================= */

function GlowCard({
  item,
  gradient,
  delay,
}: {
  item: CardItem;
  gradient: string;
  delay: number;
}) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{
        scale: 1.05,
        rotateX: 6,
        rotateY: -6,
      }}
      className="relative group perspective"
    >
      <div
        className={`
        relative p-4 rounded-xl
        bg-white dark:bg-zinc-900
        border border-zinc-200 dark:border-zinc-800
        shadow-sm hover:shadow-xl
        transition-all duration-300
        transform-gpu
        `}
      >
        {/* ICON */}
        <div
          className={`
          w-10 h-10 mb-3
          flex items-center justify-center
          rounded-lg
          bg-gradient-to-br ${gradient}
          text-white
          `}
        >
          <Icon className="text-xl" />
        </div>

        {/* TITLE */}
        <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 mb-1">
          {item.title}
        </h3>

        {/* DESC */}
        <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {item.desc}
        </p>
      </div>
    </motion.div>
  );
}

/* ================= MAIN ================= */

export default function FullAIUISystem() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className="
      bg-gradient-to-b
      from-sky-50 via-white to-indigo-50
      dark:from-[#05070f] dark:via-zinc-950 dark:to-[#0a0f1f]
      transition-colors duration-500
      "
    >
      <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col gap-20">

        {/* FEATURES */}

        <section>

          <h2
            className="
            text-center font-bold text-xl sm:text-2xl mb-8
            bg-gradient-to-r from-sky-500 to-indigo-600
            bg-clip-text text-transparent
            "
          >
            Automatic Milk Collection System Features
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {loading ? (
              <SkeletonGrid count={4} />
            ) : (
              features.map((item, i) => (
                <GlowCard
                  key={i}
                  item={item}
                  delay={i * 0.1}
                  gradient="from-sky-500 to-indigo-600"
                />
              ))
            )}

          </div>
        </section>

        {/* BENEFITS */}

        <section>

          <h2
            className="
            text-center font-bold text-xl sm:text-2xl mb-8
            bg-gradient-to-r from-emerald-500 to-teal-600
            bg-clip-text text-transparent
            "
          >
            Benefits Automatic Milk Collection System
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {loading ? (
              <SkeletonGrid count={6} />
            ) : (
              benefits.map((item, i) => (
                <GlowCard
                  key={i}
                  item={item}
                  delay={i * 0.1}
                  gradient="from-emerald-500 to-teal-600"
                />
              ))
            )}

          </div>
        </section>

      </div>
    </div>
  );
}