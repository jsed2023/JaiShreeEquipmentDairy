
const locationKeywords = [
  // Advance Milk Analyzer
  "Advance Milk Analyzer",
  "Advance Milk Analyzer Machine",
  "Advance Milk Analyzer Max",
  "Advance Milk Analyzer Ultra",
  "Advance Milk Analyzer Pro20",
  "Advance Milk Analyzer Plus",
  "Advance Milk Analyzer Max Machine",
  "Advance Milk Analyzer Ultra Machine",
  "Advance Milk Analyzer Pro20 Machine",
  "Advance Milk Analyzer Plus Machine",
  "Advance Milk Analyzer Price",

  // Ekomilk
  "Ekomilk Milk Analyzer",
  "Ekomilk Analyzer",
  "Ekomilk Ultra Milk Analyzer",
  "Ekomilk Milk Analyzer Price",
  "Ekomilk Analyzer Machine",
  "Ekomilk Milk Analyzer Supplier",

  // Lactoscan
  "Lactoscan Milk Analyzer",
  "Lactoscan Mini Milk Analyzer",
  "Lactoscan S Milk Analyzer",
  "Lactoscan SP Milk Analyzer",
  "Lactoscan Milk Analyzer Machine",
  "Lactoscan Milk Analyzer Price",

  // Milk Analyzer
  "Milk Analyzer Machine",
  "Milk Testing Machine",
  "Ultrasonic Milk Analyzer",
  "Digital Milk Analyzer Machine",
  "Portable Milk Analyzer Machine",
  "Best Milk Analyzer in India",

  // Dairy Equipment
  "Dairy Equipment Supplier",
  "Dairy Equipment Dealer Rajasthan",
  "Dairy Equipment Shop",
  "Dairy Farm Equipment",
  "Dairy Processing Equipment",
  "Dairy Machinery Supplier",
  "Dairy Equipment Distributor India",

  // Automatic Milk Collection System
  "Automatic Milk Collection System",
  "Milk Collection Unit",
  "Milk Collection System",
  "AMCS Milk Collection",
  "AMCS System",
  "DPU for Milk Collection",
  "DPU Machine",
  "Milk Collection Center Equipment",
  "Milk Procurement System",
  "Digital Milk Collection System",

  // Milk Testing
  "Milk Fat Testing Machine",
  "Milk Fat and SNF Testing Machine",
  "Milk Testing Equipment Rajasthan",
  "Milk Testing Lab Equipment",

  // Cream Separator
  "Cream Separator Machine",
  "Mini Cream Separator Machine",
  "Milk Cream Separator Machine",
  "Paras Cream Separator Machine",
  "Paras Cream Separator Machine Price",
  "Paras Cream Separator Dealer",
  "Cream Separator Supplier Rajasthan",
  "Cream Separator Machine Rajasthan",
  "Cream Separator Machine Sri Ganganagar",

  // Weighing Machines
  "Electronic Weighing Machine",
  "Milk Weighing Machine",
  "Dairy Weighing Scale",

  // Rajasthan Location Keywords
  "Milk Analyzer Machine Rajasthan",
  "Milk Analyzer Supplier Rajasthan",
  "Milk Analyzer Dealer Rajasthan",
  "Milk Analyzer Machine Sri Ganganagar",
  "Milk Analyzer Machine Hanumangarh",
  "Milk Analyzer Machine Bikaner",
  "Dairy Equipment Rajasthan",
  "Dairy Equipment Sri Ganganagar",
  "Dairy Equipment Hanumangarh",
  "Dairy Equipment Bikaner",

  // Near Me
  "Milk Analyzer Machine Near Me",
  "Dairy Equipment Near Me",
  "Milk Testing Lab Near Me",

  // Dairy Khata
  "Dairy Khata DPU",
  "Dairy Khata Milk Collection System",
  "Dairy Khata Milk Collection Machine",
  "Dairy Khata DPU Machine",
  "Dairy Khata Milk Collection Unit",
  "Dairy Khata Milk Collection Software",
  "Dairy Khata Milk Procurement System",
  "Dairy Khata AMCS Machine",
  "Dairy Khata Milk Collection Center Machine",

  // Hindi Keywords
  "डेयरी खाता DPU",
  "दूध कलेक्शन मशीन",
  "दूध जांच मशीन",
  "मिल्क एनालाइजर मशीन",
  "क्रीम सेपरेटर मशीन",

  // Brand
  "Jai Shree Equipment Dairy",
] as const;

/**
 * Generate SEO keywords for individual Rajasthan location pages.
 */
export function getLocationKeywords(city: string): string[] {
  const cityName = city.trim();

  if (!cityName) {
    return [...locationKeywords];
  }

  const cityKeywords = [
    // Advance Milk Analyzer
    `Advance Milk Analyzer in ${cityName}`,
    `Advance Milk Analyzer Machine in ${cityName}`,
    `Advance Milk Analyzer Max in ${cityName}`,
    `Advance Milk Analyzer Ultra in ${cityName}`,
    `Advance Milk Analyzer Pro20 in ${cityName}`,
    `Advance Milk Analyzer Plus in ${cityName}`,
    `Advance Milk Analyzer Price in ${cityName}`,

    // Ekomilk
    `Ekomilk Milk Analyzer in ${cityName}`,
    `Ekomilk Ultra Milk Analyzer in ${cityName}`,
    `Ekomilk Analyzer Machine in ${cityName}`,
    `Ekomilk Milk Analyzer Supplier in ${cityName}`,

    // Lactoscan
    `Lactoscan Milk Analyzer in ${cityName}`,
    `Lactoscan Mini Milk Analyzer in ${cityName}`,
    `Lactoscan S Milk Analyzer in ${cityName}`,
    `Lactoscan SP Milk Analyzer in ${cityName}`,

    // Milk Analyzer
    `Milk Analyzer Machine in ${cityName}`,
    `Milk Analyzer Supplier in ${cityName}`,
    `Milk Analyzer Dealer in ${cityName}`,
    `Milk Testing Machine in ${cityName}`,
    `Digital Milk Analyzer in ${cityName}`,
    `Portable Milk Analyzer in ${cityName}`,
    `Milk Analyzer Service in ${cityName}`,
    `Milk Analyzer Repair in ${cityName}`,

    // Dairy Equipment
    `Dairy Equipment Supplier in ${cityName}`,
    `Dairy Equipment Dealer in ${cityName}`,
    `Dairy Equipment Shop in ${cityName}`,
    `Dairy Farm Equipment in ${cityName}`,
    `Dairy Machinery Supplier in ${cityName}`,
    `Dairy Equipment Service in ${cityName}`,

    // Automatic Milk Collection System
    `Automatic Milk Collection System in ${cityName}`,
    `Milk Collection Unit in ${cityName}`,
    `Milk Collection System in ${cityName}`,
    `AMCS Milk Collection in ${cityName}`,
    `DPU Machine in ${cityName}`,
    `Milk Procurement System in ${cityName}`,
    `Milk Collection Center Equipment in ${cityName}`,

    // Milk Testing
    `Milk Fat Testing Machine in ${cityName}`,
    `Milk Fat and SNF Testing Machine in ${cityName}`,
    `Milk Testing Equipment in ${cityName}`,
    `Milk Testing Lab Equipment in ${cityName}`,

    // Cream Separator
    `Cream Separator Machine in ${cityName}`,
    `Mini Cream Separator Machine in ${cityName}`,
    `Milk Cream Separator Machine in ${cityName}`,
    `Paras Cream Separator Machine in ${cityName}`,

    // Weighing Machines
    `Electronic Weighing Machine in ${cityName}`,
    `Milk Weighing Machine in ${cityName}`,
    `Dairy Weighing Scale in ${cityName}`,

    // Dairy Khata
    `Dairy Khata DPU in ${cityName}`,
    `Dairy Khata Milk Collection System in ${cityName}`,
    `Dairy Khata Milk Collection Machine in ${cityName}`,

    // Brand + City
    `Jai Shree Equipment Dairy ${cityName}`,
    `Jai Shree Equipment Dairy ${cityName} Rajasthan`,
  ];

  return [
    ...new Set([
      ...locationKeywords,
      ...cityKeywords,
    ]),
  ];
}

// Optional: export common keywords separately
export { locationKeywords };
