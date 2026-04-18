import { CATEGORIES } from "@/config/categories";
import CategoryCard from "@/components/CategoryCard";

export default function CategoriesPage() {
  const sortedCategories = [...CATEGORIES].sort(
    (a, b) => (b.priority || 0) - (a.priority || 0)
  );

  return (
    <main className="relative max-w-6xl mx-auto px-4 py-24 overflow-hidden">

      {/* ===== BACKGROUND ===== */}
      <div className="fixed inset-0 -z-10 bg-slate-950 overflow-hidden">

        <div
          className="absolute inset-0 opacity-70 animate-ambientFloat"
          style={{
            background: `
              radial-gradient(circle at 12% 18%, rgba(56,189,248,0.45) 0%, transparent 38%),
              radial-gradient(circle at 82% 22%, rgba(167,139,250,0.45) 0%, transparent 38%),
              radial-gradient(circle at 50% 82%, rgba(99,102,241,0.5) 0%, transparent 42%)
            `
          }}
        />

        <div
          className="absolute inset-0 blur-3xl opacity-40 animate-slowPulse"
          style={{
            background: `
              radial-gradient(circle at 30% 40%, rgba(99,102,241,0.35), transparent 45%),
              radial-gradient(circle at 70% 65%, rgba(56,189,248,0.3), transparent 45%)
            `
          }}
        />

        <div className="absolute inset-0 bg-slate-950/75" />
      </div>

      {/* ===== HEADER (FIXED) ===== */}
      <header className="relative text-center max-w-3xl mx-auto mb-16">

        {/* 🔥 DARK OVERLAY FOR READABILITY */}
        <div className="absolute inset-0 bg-black/40 rounded-xl -z-10" />

        <h1 className="text-4xl font-extrabold text-sky-400 tracking-tight animate-slideInFromTop8">
          Dairy Equipment, Milk Testing Machines & AMCS Systems
        </h1>

        {/* ✅ FIXED TEXT VISIBILITY */}
        <p className="mt-4 text-block text-base leading-relaxed">
          Explore our complete range of dairy solutions including dairy equipment,
          milk testing machines, and automatic milk collection systems (AMCS).
          We provide high-quality machinery for dairy farms, milk collection centers,
          and processing units across India.
        </p>
      </header>

      {/* ===== GRID ===== */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {sortedCategories.map((cat, index) => (
          <CategoryCard key={cat.slug} cat={cat} index={index} />
        ))}
      </section>

      {/* ===== SEO CONTENT BLOCK ===== */}
      <section className="mt-20 max-w-3xl mx-auto text-block text-sm leading-relaxed space-y-4">
        <h2 className="text-xl font-semibold text-block">
          Complete Dairy Machinery Solutions in India
        </h2>

        <p>
          Our platform offers a wide range of dairy equipment including milking machines,milk cream separator machine,
          milk analyzers machine, and automatic milk collection systems. These solutions are designed
          to improve efficiency, ensure accurate milk testing, and provide transparent billing
          for dairy businesses.
        </p>

        <p>
          Whether you are setting up a new dairy farm or upgrading your milk collection center,
          our products help streamline operations with modern technology such as digital milk
          analyzers, weighing machines, ultrasonic stirrers, and billing printers.
        </p>

        <p>
          We serve dairy farmers, cooperatives, and commercial dairy units across Rajasthan
          and India with reliable and cost-effective machinery.
        </p>
      </section>

    </main>
  );
}