export type RajasthanLocation = {
  slug: string;
  city: string;
  district: string;
  priority: "primary" | "secondary";
  updatedAt: string;
  nearbySlugs: readonly string[];
};

export const rajasthanLocations = [
  // ============================================================
  // SRI GANGANAGAR DISTRICT
  // ============================================================

  {
    slug: "sri-ganganagar",
    city: "Sri Ganganagar",
    district: "Sri Ganganagar",
    priority: "primary",
    updatedAt: "2026-09-08",
    nearbySlugs: [
      "raisinghnagar",
      "sadulshahar",
      "padampur",
      "suratgarh",
      "anupgarh",
      "gharsana",
    ],
  },

  {
    slug: "raisinghnagar",
    city: "Raisinghnagar",
    district: "Sri Ganganagar",
    priority: "secondary",
    updatedAt: "2026-09-08",
    nearbySlugs: [
      "sri-ganganagar",
      "anupgarh",
      "gharsana",
      "rawla-mandi",
    ],
  },

  {
    slug: "sadulshahar",
    city: "Sadulshahar",
    district: "Sri Ganganagar",
    priority: "secondary",
    updatedAt: "2026-09-08",
    nearbySlugs: [
      "sri-ganganagar",
      "padampur",
      "karanpur",
      "kesrisinghpur",
    ],
  },

  {
    slug: "padampur",
    city: "Padampur",
    district: "Sri Ganganagar",
    priority: "secondary",
    updatedAt: "2026-09-08",
    nearbySlugs: [
      "sri-ganganagar",
      "sadulshahar",
      "suratgarh",
      "kesrisinghpur",
    ],
  },

  {
    slug: "suratgarh",
    city: "Suratgarh",
    district: "Sri Ganganagar",
    priority: "primary",
    updatedAt: "2026-09-08",
    nearbySlugs: [
      "sri-ganganagar",
      "padampur",
      "anupgarh",
      "hanumangarh",
    ],
  },

  {
    slug: "anupgarh",
    city: "Anupgarh",
    district: "Sri Ganganagar",
    priority: "primary",
    updatedAt: "2026-09-08",
    nearbySlugs: [
      "sri-ganganagar",
      "raisinghnagar",
      "gharsana",
      "suratgarh",
    ],
  },

  {
    slug: "gharsana",
    city: "Gharsana",
    district: "Sri Ganganagar",
    priority: "secondary",
    updatedAt: "2026-09-08",
    nearbySlugs: [
      "anupgarh",
      "raisinghnagar",
      "rawla-mandi",
      "sri-ganganagar",
    ],
  },

  {
    slug: "karanpur",
    city: "Karanpur",
    district: "Sri Ganganagar",
    priority: "secondary",
    updatedAt: "2026-09-08",
    nearbySlugs: [
      "sri-ganganagar",
      "sadulshahar",
      "kesrisinghpur",
    ],
  },

  {
    slug: "kesrisinghpur",
    city: "Kesrisinghpur",
    district: "Sri Ganganagar",
    priority: "secondary",
    updatedAt: "2026-09-08",
    nearbySlugs: [
      "sri-ganganagar",
      "karanpur",
      "padampur",
      "sadulshahar",
    ],
  },

  {
    slug: "lalgarh-jatan",
    city: "Lalgarh Jatan",
    district: "Sri Ganganagar",
    priority: "secondary",
    updatedAt: "2026-09-08",
    nearbySlugs: [
      "sri-ganganagar",
      "sadulshahar",
      "padampur",
    ],
  },

  {
    slug: "rawla-mandi",
    city: "Rawla Mandi",
    district: "Sri Ganganagar",
    priority: "secondary",
    updatedAt: "2026-09-08",
    nearbySlugs: [
      "gharsana",
      "raisinghnagar",
      "anupgarh",
    ],
  },

  {
    slug: "gajsinghpur",
    city: "Gajsinghpur",
    district: "Sri Ganganagar",
    priority: "secondary",
    updatedAt: "2026-09-08",
    nearbySlugs: [
      "sri-ganganagar",
      "karanpur",
      "kesrisinghpur",
    ],
  },

  // ============================================================
  // HANUMANGARH DISTRICT
  // ============================================================

  {
    slug: "hanumangarh",
    city: "Hanumangarh",
    district: "Hanumangarh",
    priority: "primary",
    updatedAt: "2026-09-08",
    nearbySlugs: [
      "hanumangarh-junction",
      "sangaria",
      "pilibanga",
      "rawatsar",
      "tibbi",
      "suratgarh",
    ],
  },

  {
    slug: "hanumangarh-junction",
    city: "Hanumangarh Junction",
    district: "Hanumangarh",
    priority: "primary",
    updatedAt: "2026-09-08",
    nearbySlugs: [
      "hanumangarh",
      "sangaria",
      "pilibanga",
    ],
  },

  {
    slug: "sangaria",
    city: "Sangaria",
    district: "Hanumangarh",
    priority: "primary",
    updatedAt: "2026-09-08",
    nearbySlugs: [
      "hanumangarh",
      "hanumangarh-junction",
      "pilibanga",
    ],
  },

  {
    slug: "pallu",
    city: "Pallu",
    district: "Hanumangarh",
    priority: "secondary",
    updatedAt: "2026-09-08",
    nearbySlugs: [
      "rawatsar",
      "nohar",
      "hanumangarh",
    ],
  },

  {
    slug: "pilibanga",
    city: "Pilibanga",
    district: "Hanumangarh",
    priority: "secondary",
    updatedAt: "2026-09-08",
    nearbySlugs: [
      "hanumangarh",
      "hanumangarh-junction",
      "sangaria",
      "suratgarh",
    ],
  },

  {
    slug: "rawatsar",
    city: "Rawatsar",
    district: "Hanumangarh",
    priority: "secondary",
    updatedAt: "2026-09-08",
    nearbySlugs: [
      "hanumangarh",
      "pallu",
      "nohar",
      "tibbi",
    ],
  },

  {
    slug: "tibbi",
    city: "Tibbi",
    district: "Hanumangarh",
    priority: "secondary",
    updatedAt: "2026-09-08",
    nearbySlugs: [
      "hanumangarh",
      "pilibanga",
      "rawatsar",
    ],
  },

  {
    slug: "nohar",
    city: "Nohar",
    district: "Hanumangarh",
    priority: "secondary",
    updatedAt: "2026-09-08",
    nearbySlugs: [
      "bhadra",
      "rawatsar",
      "pallu",
    ],
  },

  {
    slug: "bhadra",
    city: "Bhadra",
    district: "Hanumangarh",
    priority: "secondary",
    updatedAt: "2026-09-08",
    nearbySlugs: [
      "nohar",
      "pallu",
    ],
  },

  // ============================================================
  // BIKANER DISTRICT
  // ============================================================

  {
    slug: "bikaner",
    city: "Bikaner",
    district: "Bikaner",
    priority: "primary",
    updatedAt: "2026-09-08",
    nearbySlugs: [
      "nokha",
      "lunkaransar",
      "kolayat",
      "shri-dungargarh",
    ],
  },

  {
    slug: "nokha",
    city: "Nokha",
    district: "Bikaner",
    priority: "secondary",
    updatedAt: "2026-09-08",
    nearbySlugs: [
      "bikaner",
      "nagaur",
      "shri-dungargarh",
    ],
  },

  {
    slug: "kolayat",
    city: "Kolayat",
    district: "Bikaner",
    priority: "secondary",
    updatedAt: "2026-09-08",
    nearbySlugs: [
      "bikaner",
      "lunkaransar",
    ],
  },

  {
    slug: "lunkaransar",
    city: "Lunkaransar",
    district: "Bikaner",
    priority: "secondary",
    updatedAt: "2026-09-08",
    nearbySlugs: [
      "bikaner",
      "kolayat",
      "chhatargarh",
    ],
  },

  {
    slug: "khajuwala",
    city: "Khajuwala",
    district: "Bikaner",
    priority: "secondary",
    updatedAt: "2026-09-08",
    nearbySlugs: [
      "bikaner",
      "chhatargarh",
    ],
  },

  {
    slug: "shri-dungargarh",
    city: "Shri Dungargarh",
    district: "Bikaner",
    priority: "secondary",
    updatedAt: "2026-09-08",
    nearbySlugs: [
      "bikaner",
      "nokha",
    ],
  },

  {
    slug: "chhatargarh",
    city: "Chhatargarh",
    district: "Bikaner",
    priority: "secondary",
    updatedAt: "2026-09-08",
    nearbySlugs: [
      "bikaner",
      "khajuwala",
      "lunkaransar",
    ],
  },

  // ============================================================
  // MAJOR RAJASTHAN CITIES
  // ============================================================

  {
    slug: "jaipur",
    city: "Jaipur",
    district: "Jaipur",
    priority: "primary",
    updatedAt: "2026-09-08",
    nearbySlugs: [
      "ajmer",
      "sikar",
      "tonk",
      "alwar",
    ],
  },

  {
    slug: "jodhpur",
    city: "Jodhpur",
    district: "Jodhpur",
    priority: "primary",
    updatedAt: "2026-09-08",
    nearbySlugs: [
      "pali",
      "nagaur",
      "barmer",
    ],
  },

  {
    slug: "udaipur",
    city: "Udaipur",
    district: "Udaipur",
    priority: "primary",
    updatedAt: "2026-09-08",
    nearbySlugs: [
      "sirohi",
      "chittorgarh",
      "banswara",
    ],
  },

  {
    slug: "kota",
    city: "Kota",
    district: "Kota",
    priority: "primary",
    updatedAt: "2026-09-08",
    nearbySlugs: [
      "bundi",
      "baran",
      "sawai-madhopur",
    ],
  },

  {
    slug: "ajmer",
    city: "Ajmer",
    district: "Ajmer",
    priority: "primary",
    updatedAt: "2026-09-08",
    nearbySlugs: [
      "jaipur",
      "pali",
      "sikar",
    ],
  },

  {
    slug: "alwar",
    city: "Alwar",
    district: "Alwar",
    priority: "primary",
    updatedAt: "2026-09-08",
    nearbySlugs: [
      "jaipur",
      "sikar",
      "bharatpur",
      "jhunjhunu",
    ],
  },

  {
    slug: "sikar",
    city: "Sikar",
    district: "Sikar",
    priority: "primary",
    updatedAt: "2026-09-08",
    nearbySlugs: [
      "jaipur",
      "jhunjhunu",
      "alwar",
    ],
  },

  {
    slug: "bharatpur",
    city: "Bharatpur",
    district: "Bharatpur",
    priority: "primary",
    updatedAt: "2026-09-08",
    nearbySlugs: [
      "alwar",
      "jaipur",
    ],
  },

  {
    slug: "bhilwara",
    city: "Bhilwara",
    district: "Bhilwara",
    priority: "primary",
    updatedAt: "2026-09-08",
    nearbySlugs: [
      "chittorgarh",
      "ajmer",
      "bundi",
    ],
  },

  {
    slug: "pali",
    city: "Pali",
    district: "Pali",
    priority: "primary",
    updatedAt: "2026-09-08",
    nearbySlugs: [
      "jodhpur",
      "ajmer",
      "sirohi",
    ],
  },

  {
    slug: "barmer",
    city: "Barmer",
    district: "Barmer",
    priority: "primary",
    updatedAt: "2026-09-08",
    nearbySlugs: [
      "jodhpur",
      "jaisalmer",
      "sirohi",
    ],
  },

  {
    slug: "chittorgarh",
    city: "Chittorgarh",
    district: "Chittorgarh",
    priority: "primary",
    updatedAt: "2026-09-08",
    nearbySlugs: [
      "udaipur",
      "bhilwara",
      "bundi",
    ],
  },

  {
    slug: "tonk",
    city: "Tonk",
    district: "Tonk",
    priority: "primary",
    updatedAt: "2026-09-08",
    nearbySlugs: [
      "jaipur",
      "sawai-madhopur",
      "kota",
    ],
  },

  {
    slug: "sawai-madhopur",
    city: "Sawai Madhopur",
    district: "Sawai Madhopur",
    priority: "primary",
    updatedAt: "2026-09-08",
    nearbySlugs: [
      "tonk",
      "kota",
      "bundi",
    ],
  },

  {
    slug: "jhunjhunu",
    city: "Jhunjhunu",
    district: "Jhunjhunu",
    priority: "primary",
    updatedAt: "2026-09-08",
    nearbySlugs: [
      "sikar",
      "alwar",
    ],
  },

  {
    slug: "nagaur",
    city: "Nagaur",
    district: "Nagaur",
    priority: "primary",
    updatedAt: "2026-09-08",
    nearbySlugs: [
      "jodhpur",
      "bikaner",
      "nokha",
      "pali",
    ],
  },

  {
    slug: "bundi",
    city: "Bundi",
    district: "Bundi",
    priority: "primary",
    updatedAt: "2026-09-08",
    nearbySlugs: [
      "kota",
      "chittorgarh",
      "sawai-madhopur",
    ],
  },

  {
    slug: "sirohi",
    city: "Sirohi",
    district: "Sirohi",
    priority: "primary",
    updatedAt: "2026-09-08",
    nearbySlugs: [
      "pali",
      "udaipur",
      "barmer",
    ],
  },

  {
    slug: "jaisalmer",
    city: "Jaisalmer",
    district: "Jaisalmer",
    priority: "primary",
    updatedAt: "2026-09-08",
    nearbySlugs: [
      "barmer",
      "jodhpur",
    ],
  },

  {
    slug: "baran",
    city: "Baran",
    district: "Baran",
    priority: "primary",
    updatedAt: "2026-09-08",
    nearbySlugs: [
      "kota",
      "bundi",
    ],
  },

  {
    slug: "banswara",
    city: "Banswara",
    district: "Banswara",
    priority: "primary",
    updatedAt: "2026-09-08",
    nearbySlugs: [
      "udaipur",
      "chittorgarh",
    ],
  },
] as const;