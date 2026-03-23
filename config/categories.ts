export type Category = {
  slug: string;
  name: string;
  priority?: number;
  url: string;

  gradient?: string;

  seo: {
    title: string;
    description: string;
    keywords: string;
  };
};

export const CATEGORIES: Category[] = [
  {
    slug: "dairy-equipment",
    name: "Dairy Equipment",
    priority: 0.9,
    url: "https://jaishreeequipmentdairy.in/dairy-equipment",
    gradient: "linear-gradient(to right,#22c55e,#06b6d4,#3b82f6)",
    seo: {
      title: "Dairy Equipment",
      description:
        "Leading supplier of dairy equipment including milking machines, cream separators, and farm machinery in Rajasthan.",
      keywords:
        "dairy equipment supplier, dairy farm machinery, milking machines",
    },
  },
  {
    slug: "milk-testing-equipment",
    name: "Milk Testing Equipment",
    priority: 0.9,
    url: "https://jaishreeequipmentdairy.in/milk-testing-equipment",
    gradient: "linear-gradient(to right,#f97316,#ec4899,#8b5cf6)",
    seo: {
      title:
        "Milk Testing Equipment & Milk Analyzers",
      description:
        "High quality milk testing equipment and milk analyzer machines for accurate dairy quality testing.",
      keywords:
        "milk testing equipment, milk analyzer machines, milk quality testing",
    },
  },
  {
    slug: "automatic-milk-collection-system",
    name: "Automatic Milk Collection System",
    priority: 0.9,
    url: "https://jaishreeequipmentdairy.in/automatic-milk-collection-system",
    gradient: "linear-gradient(to right,#38bdf8,#8b5cf6,#6366f1)",
    seo: {
      title:
        "Automatic Milk Collection System (AMCS)",
      description:
        "Advanced automatic milk collection systems for transparent data tracking.",
      keywords:
        "automatic milk collection system, AMCS dairy solutions",
    },
  },
];
