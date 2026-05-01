"use client";

import { motion } from "framer-motion";
import {
  HiLightningBolt,
  HiShieldCheck,
  HiChartBar,
  HiCog,
  HiClock,
  HiCurrencyRupee,
  HiTrendingUp,
  HiBeaker,
} from "react-icons/hi";

type CardItem = {
  title: string;
  desc: string;
  icon: React.ElementType;
};

/* ================= DATA ================= */

const features: CardItem[] = [
  {
    title: "Accurate Milk Analysis",
    desc: "Precise fat, SNF, protein and density measurement.",
    icon: HiBeaker,
  },
  {
    title: "Fast Testing Results",
    desc: "Milk quality reports generated in seconds.",
    icon: HiLightningBolt,
  },
  {
    title: "User Friendly Interface",
    desc: "Easy operation for farmers and technicians.",
    icon: HiCog,
  },
  {
    title: "Strong Build Quality",
    desc: "Designed for continuous daily usage.",
    icon: HiShieldCheck,
  },
];

const benefits: CardItem[] = [
  {
    title: "Better Quality Control",
    desc: "Maintain consistent milk standards.",
    icon: HiTrendingUp,
  },
  {
    title: "Time Saving",
    desc: "Quick analysis improves workflow speed.",
    icon: HiClock,
  },
  {
    title: "Cost Effective",
    desc: "Prevents losses from incorrect readings.",
    icon: HiCurrencyRupee,
  },
  {
    title: "Industry Compliance",
    desc: "Meets dairy quality regulations.",
    icon: HiChartBar,
  },
];

/* ================= ANIMATION ================= */

const cardAnim = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

/* ================= CARD ================= */

function Card({
  item,
  i,
  gradient,
}: {
  item: CardItem;
  i: number;
  gradient: string;
}) {
  const Icon = item.icon;

  return (
    <motion.div
      variants={cardAnim}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      custom={i}
      whileHover={{ y: -6, scale: 1.02 }}
      className="
        p-6 rounded-2xl
        bg-white dark:bg-zinc-900/80
        border border-zinc-200 dark:border-zinc-800
        shadow-sm hover:shadow-xl
        transition-all duration-300
      "
    >
      <div
        className={`w-14 h-14 mb-4 flex items-center justify-center
        rounded-xl bg-gradient-to-br ${gradient} text-white shadow-lg`}
      >
        <Icon className="text-3xl" />
      </div>

      <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
        {item.title}
      </h3>

      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
        {item.desc}
      </p>
    </motion.div>
  );
}

/* ================= MAIN ================= */

export default function MilkTestingEquipmentsShowcase() {
  return (
    <div
      className="
        bg-gradient-to-b from-sky-50 via-white to-indigo-50
        dark:from-[#05070f] dark:via-zinc-950 dark:to-[#0a0f1f]
        py-24 transition-colors duration-500
      "
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-24">

        {/* ================= FEATURES ================= */}

        <section>
          <h2
            className="
              text-center text-2xl sm:text-3xl font-bold mb-12
              bg-gradient-to-r from-sky-500 to-indigo-600
              bg-clip-text text-transparent
            "
          >
            Milk Testing Equipment Features
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((item, i) => (
              <Card
                key={i}
                item={item}
                i={i}
                gradient="from-sky-500 to-indigo-600"
              />
            ))}
          </div>
        </section>

        {/* ================= BENEFITS ================= */}

        <section>
          <h2
            className="
              text-center text-2xl sm:text-3xl font-bold mb-12
              bg-gradient-to-r from-emerald-500 to-teal-600
              bg-clip-text text-transparent
            "
          >
            Benefits of Milk Testing Equipments
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((item, i) => (
              <Card
                key={i}
                item={item}
                i={i}
                gradient="from-emerald-500 to-teal-600"
              />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
