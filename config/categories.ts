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
      title:
        "Dairy Equipment Supplier in India | Buy Milking Machines & Dairy Machinery",
      description:
        "Leading supplier of dairy equipment including milking machines, cream separators, milk cooling tanks, and dairy farm machinery in Rajasthan.",
      keywords:
        "dairy equipment, dairy equipment supplier india, dairy equipment rajasthan, dairy machinery india, dairy farm equipment, dairy plant machinery, dairy equipment manufacturer india, dairy equipment exporter, dairy tools and equipment, milk processing equipment, dairy processing machines, dairy machinery supplier, dairy equipment near me, milking machine, milking machine price india, automatic milking machine, cow milking machine, buffalo milking machine, portable milking machine, cream separator machine, dairy cream separator price, butter churn machine, paneer making machine, milk storage tank, bulk milk cooler, dairy cooling tank, milk chiller machine, dairy farm setup equipment, small dairy farm equipment india, commercial dairy equipment, dairy automation equipment, buy dairy equipment online india",
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
        "Milk Testing Equipment & Analyzer Machine Price in India | Accurate & Fast",
      description:
        "High quality milk testing equipment including milk analyzers, fat testing machines, and ultrasonic milk stirrers for accurate dairy quality testing.",
      keywords:
        "milk testing equipment, milk testing equipment india, milk analyzer machine, milk analyzer machine price india, digital milk analyzer, automatic milk analyzer, milk fat testing machine, milk fat analyzer, milk quality testing equipment, dairy testing equipment, milk testing lab equipment, milk analyzer supplier india, milk analyzer supplier rajasthan, lactometer digital, electronic lactometer, milk adulteration testing kit, milk purity testing machine, milk SNF testing machine, milk composition analyzer, milk testing machine price, portable milk testing kit, dairy milk testing solutions, milk analyzer for dairy farm, bulk milk testing machine, ultrasonic milk stirrer, milk stirrer machine, automatic milk stirrer, ultrasonic stirrer for milk analyzer, milk sample mixing machine, buy milk analyzer online india",
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
        "Automatic Milk Collection System (AMCS) in India | Smart Dairy Solutions",
      description:
        "Advanced AMCS with Milk Analyzer, Weighing Machine, Ultrasonic Milk Stirrer, and Printer for accurate testing, billing, and transparent dairy management.",
      keywords:
        "automatic milk collection system, AMCS system india, milk collection system india, milk collection machine, dairy milk collection system, milk procurement system, milk collection software, dairy management system india, AMCS dairy software, automatic milk collection unit, bulk milk collection system, milk collection center equipment, dairy automation system, milk collection with billing system, milk data management system, village milk collection system, milk collection system price india, dairy ERP software, milk analyzer machine, milk analyzer for AMCS, digital milk analyzer, milk testing machine, milk weighing machine, digital weighing machine for milk, milk weight machine, electronic weighing scale dairy, load cell milk collection system, milk weighing and billing machine, ultrasonic milk stirrer, milk stirrer machine, automatic milk stirrer, ultrasonic stirrer for milk analyzer, milk sample mixing machine, thermal printer for milk collection, milk receipt printer, billing printer for dairy, AMCS supplier rajasthan, smart dairy solutions india, digital milk collection system, buy AMCS system india",
    },
  },
];