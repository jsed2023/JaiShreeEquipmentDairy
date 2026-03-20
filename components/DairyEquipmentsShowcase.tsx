"use client";

import { motion } from "framer-motion";
import {
  HiLightningBolt,
  HiCog,
  HiShieldCheck,
  HiChartBar,
  HiCurrencyRupee,
  HiClock,
  HiRefresh,
  HiTrendingUp,
} from "react-icons/hi";

type CardItem = {
  title: string;
  desc: string;
  icon: React.ElementType;
};

/* ================= PARAS CREAM SEPARATOR ================= */

const creamSeparatorFeatures: CardItem[] = [
  {
    title: "High Fat Separation",
    desc: "Efficiently separates cream from milk with high accuracy.",
    icon: HiTrendingUp,
  },
  {
    title: "Stainless Steel Body",
    desc: "Durable, rust-free and hygienic build.",
    icon: HiShieldCheck,
  },
  {
    title: "Easy Operation",
    desc: "Simple controls for quick daily use.",
    icon: HiCog,
  },
  {
    title: "Low Maintenance",
    desc: "Minimal servicing required.",
    icon: HiRefresh,
  },
];

const creamSeparatorBenefits: CardItem[] = [
  {
    title: "Better Cream Quality",
    desc: "Produces clean and rich cream.",
    icon: HiLightningBolt,
  },
  {
    title: "Higher Profit",
    desc: "Improves milk product value.",
    icon: HiCurrencyRupee,
  },
  {
    title: "Time Saving",
    desc: "Fast separation process.",
    icon: HiClock,
  },
  {
    title: "Long Life",
    desc: "Strong design for years of use.",
    icon: HiShieldCheck,
  },
];

/* ================= MILKING MACHINE ================= */

const milkingMachineFeatures: CardItem[] = [
  {
    title: "Powerful Vacuum System",
    desc: "Ensures smooth and fast milking.",
    icon: HiLightningBolt,
  },
  {
    title: "Food Grade Components",
    desc: "Safe and hygienic milk flow system.",
    icon: HiShieldCheck,
  },
  {
    title: "Portable Design",
    desc: "Easy to move and use anywhere.",
    icon: HiCog,
  },
  {
    title: "Energy Efficient",
    desc: "Consumes less power.",
    icon: HiChartBar,
  },
];

const milkingMachineBenefits: CardItem[] = [
  {
    title: "Faster Milking",
    desc: "Milks more animals in less time.",
    icon: HiClock,
  },
  {
    title: "Reduced Labor",
    desc: "Less manpower required.",
    icon: HiCurrencyRupee,
  },
  {
    title: "Animal Comfort",
    desc: "Smooth suction avoids stress.",
    icon: HiShieldCheck,
  },
  {
    title: "Higher Output",
    desc: "Improves daily milk collection.",
    icon: HiTrendingUp,
  },
];

/* ================= REUSABLE GRID ================= */

function CardGrid({
  title,
  items,
  gradient,
}: {
  title: string;
  items: CardItem[];
  gradient: string;
}) {
  return (
    <section className="flex flex-col gap-y-8">

      <h2
        className="
        text-center font-semibold text-lg sm:text-xl
        bg-gradient-to-r from-sky-500 to-indigo-600
        bg-clip-text text-transparent
        "
      >
        {title}
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5">

        {items.map((item, i) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="
              p-4 rounded-xl
              bg-white dark:bg-zinc-900/80
              border border-zinc-200 dark:border-zinc-800
              shadow-sm hover:shadow-md
              transition-all duration-300
              "
            >

              <div
                className={`w-10 h-10 mb-3 flex items-center justify-center rounded-lg 
                bg-gradient-to-br ${gradient} text-white`}
              >
                <Icon className="text-xl" />
              </div>

              <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 mb-1">
                {item.title}
              </h3>

              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {item.desc}
              </p>

            </motion.div>
          );
        })}

      </div>
    </section>
  );
}

/* ================= MAIN ================= */

export default function DairyEquipmentsPartsShowcase() {
  return (
    <div
      className="
      bg-gradient-to-b from-sky-50 via-white to-indigo-50
      dark:from-[#05070f] dark:via-zinc-950 dark:to-[#0a0f1f]
      py-16 transition-colors duration-500
      "
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-20">

        {/* ===== PARAS CREAM SEPARATOR ===== */}

        <section className="flex flex-col gap-y-12">

          <h1
            className="
            text-center font-bold text-xl sm:text-2xl
            bg-gradient-to-r from-sky-500 to-indigo-600
            bg-clip-text text-transparent
            "
          >
            Paras Milk Cream Separator
          </h1>

          <CardGrid
            title="Features"
            items={creamSeparatorFeatures}
            gradient="from-sky-500 to-indigo-600"
          />

          <CardGrid
            title="Benefits"
            items={creamSeparatorBenefits}
            gradient="from-emerald-500 to-teal-600"
          />

        </section>

        {/* ===== MILKING MACHINE ===== */}

        <section className="flex flex-col gap-y-12">

          <h1
            className="
            text-center font-bold text-xl sm:text-2xl
            bg-gradient-to-r from-sky-500 to-indigo-600
            bg-clip-text text-transparent
            "
          >
            Milking Machine
          </h1>

          <CardGrid
            title="Features"
            items={milkingMachineFeatures}
            gradient="from-sky-500 to-indigo-600"
          />

          <CardGrid
            title="Benefits"
            items={milkingMachineBenefits}
            gradient="from-emerald-500 to-teal-600"
          />

        </section>

      </div>
    </div>
  );
}