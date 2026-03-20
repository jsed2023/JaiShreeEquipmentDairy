import { CATEGORIES } from "@/config/categories";
import CategoryCard from "@/components/CategoryCard";

export default function CategoriesPage() {

  // Optional: sort by priority
  const sortedCategories = [...CATEGORIES].sort(
    (a, b) => (b.priority || 0) - (a.priority || 0)
  );

  return (
    <main className="relative max-w-6xl mx-auto px-4 py-24 overflow-hidden">

      {/* ===== CINEMATIC BACKGROUND ===== */}
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

      {/* ===== TITLE ===== */}
      <h1 className="text-4xl font-extrabold mb-16 text-center text-sky-400 tracking-tight animate-slideInFromTop8">
          Categories For Dairy Machines
      </h1>

      {/* ===== GRID ===== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

        {sortedCategories.map((cat, index) => (
          <CategoryCard
            key={cat.slug}
            cat={cat}
            index={index}
          />
        ))}

      </div>

    </main>
  );
}

