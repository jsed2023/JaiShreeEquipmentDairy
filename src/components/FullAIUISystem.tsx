import type { ElementType } from "react";
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
  icon: ElementType;
};

/* ================= DATA ================= */

const features: CardItem[] = [
  {
    title: "Instant Milk Analysis",
    desc: "Fat, SNF, CLR and water content analysis in seconds.",
    icon: HiLightningBolt,
  },
  {
    title: "Data Processing",
    desc: "Automatically records milk quantity and quality.",
    icon: HiChartBar,
  },
  {
    title: "Weighing Integration",
    desc: "Connects with digital weighing scales for accurate measurement.",
    icon: HiScale,
  },
  {
    title: "Slip Printing",
    desc: "Instant billing receipts with milk quantity and quality details.",
    icon: HiPrinter,
  },
];

const benefits: CardItem[] = [
  {
    title: "Accurate Payments",
    desc: "Ensures fair and transparent farmer transactions.",
    icon: HiCheckCircle,
  },
  {
    title: "Faster Collection",
    desc: "Reduces waiting time at dairy collection centers.",
    icon: HiClock,
  },
  {
    title: "Better Hygiene",
    desc: "Minimizes manual handling during milk collection.",
    icon: HiShieldCheck,
  },
  {
    title: "Digital Records",
    desc: "Automatically stores milk collection and quality data.",
    icon: HiDatabase,
  },
  {
    title: "Lower Costs",
    desc: "Reduces manual work and operational expenses.",
    icon: HiCurrencyRupee,
  },
  {
    title: "Complete Transparency",
    desc: "Provides clear reports and accurate transaction records.",
    icon: HiEye,
  },
];

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
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.04,
        rotateX: 5,
        rotateY: -5,
      }}
      className="group relative h-full perspective"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        className="
          relative h-full rounded-xl p-4
          border border-zinc-200 dark:border-zinc-800
          bg-white dark:bg-zinc-900
          shadow-sm
          transition-shadow duration-300
          group-hover:shadow-xl
        "
      >
        {/* ICON */}

        <div
          className={`
            mb-3 flex h-11 w-11 items-center justify-center
            rounded-lg bg-linear-to-br ${gradient}
            text-white shadow-md
          `}
        >
          <Icon className="text-xl" aria-hidden="true" />
        </div>

        {/* TITLE */}

        <h3 className="mb-1 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          {item.title}
        </h3>

        {/* DESCRIPTION */}

        <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
          {item.desc}
        </p>
      </div>
    </motion.article>
  );
}

/* ================= MAIN COMPONENT ================= */

export default function FullAIUISystem() {
  return (
    <div
      className="
        bg-linear-to-br
        from-sky-50 via-white to-indigo-50
        dark:from-[#05070f] dark:via-zinc-950 dark:to-[#0a0f1f]
        transition-colors duration-500
      "
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-4 py-12 sm:py-16">

        {/* FEATURES */}

        <section aria-labelledby="amcs-features-heading">
          <h2
            id="amcs-features-heading"
            className="
              mb-8 text-center text-xl font-bold
              bg-linear-to-br from-sky-500 to-indigo-600
              bg-clip-text text-transparent
              sm:text-2xl
            "
          >
            Automatic Milk Collection System Features
          </h2>

          <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
            {features.map((item, index) => (
              <GlowCard
                key={item.title}
                item={item}
                delay={index * 0.1}
                gradient="from-sky-500 to-indigo-600"
              />
            ))}
          </div>
        </section>

        {/* BENEFITS */}

        <section aria-labelledby="amcs-benefits-heading">
          <h2
            id="amcs-benefits-heading"
            className="
              mb-8 text-center text-xl font-bold
              bg-linear-to-br from-emerald-500 to-teal-600
              bg-clip-text text-transparent
              sm:text-2xl
            "
          >
            Benefits of Automatic Milk Collection System
          </h2>

          <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
            {benefits.map((item, index) => (
              <GlowCard
                key={item.title}
                item={item}
                delay={index * 0.1}
                gradient="from-emerald-500 to-teal-600"
              />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
