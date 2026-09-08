// lib/location-seo-content.ts

import type { RajasthanLocation } from "@/lib/rajasthan-locations";

export type LocationFAQ = {
  question: string;
  answer: string;
};

export type LocationSEOContent = {
  title: string;
  description: string;
  intro: string;
  about: string;
  products: string;
  industry: string;
  support: string;
  serviceAreas: string[];
  faqs: LocationFAQ[];
};

type LocationContentInput = {
  city: RajasthanLocation["city"];
  district: string;
  focus: string;
  serviceAreas: string[];
  localNote: string;
};

const COMMON_PRODUCTS =
  "Milk Analyzer Machines, Milk Fat Testing Machines, Milk Testing Equipment, Automatic Milk Collection Units, Data Processing Units (DPU), Milk Cream Separator Machines, Digital Weighing Scales, and related dairy equipment";

function createFAQs(
  city: string,
  focus: string,
): LocationFAQ[] {
  return [
    {
      question: `Do you supply milk analyzer machines in ${city}?`,
      answer:
        `Yes. Jai Shree Equipment Dairy supplies milk analyzer machines and milk testing equipment for dairy farms, milk collection centers, milk procurement points and other dairy applications in ${city}, Rajasthan.`,
    },
    {
      question: `Which milk testing equipment is available in ${city}?`,
      answer:
        `Customers in ${city} can enquire about milk analyzer machines, milk fat testing machines, milk testing instruments and related equipment depending on their testing requirements and application.`,
    },
    {
      question: `Do you provide dairy equipment for ${focus.toLowerCase()}?`,
      answer:
        `Yes. We can help customers select suitable dairy equipment for ${focus.toLowerCase()}, including milk testing, collection and processing-related requirements.`,
    },
    {
      question: `Do you provide installation and service support in ${city}?`,
      answer:
        `Jai Shree Equipment Dairy provides product guidance, installation assistance, troubleshooting, maintenance and after-sales support for suitable equipment supplied in ${city} and its service areas.`,
    },
    {
      question: `Can I get spare parts and repair support for milk testing equipment?`,
      answer:
        `Yes. Compatible spare parts and selected repair or troubleshooting support are available for milk testing and dairy equipment, subject to the equipment model and service requirement.`,
    },
  ];
}

function createLocationContent({
  city,
  district,
  focus,
  serviceAreas,
  localNote,
}: LocationContentInput): LocationSEOContent {
  return {
    title: `Milk Analyzer Machine Supplier in ${city}`,

    description:
      `Jai Shree Equipment Dairy supplies milk analyzer machines, milk testing equipment, dairy equipment and milk collection systems in ${city}, Rajasthan.`,

    intro:
      `Jai Shree Equipment Dairy supplies milk analyzer machines and dairy equipment in ${city}, ${district}, Rajasthan. Our equipment is suitable for dairy farms, milk collection centers, milk procurement points and other dairy applications requiring reliable milk testing and collection solutions.`,

    about:
      `Customers in ${city} can enquire about milk analyzers, milk fat testing machines, automatic milk collection equipment, cream separators, weighing equipment and related dairy machinery. We provide product guidance and after-sales assistance based on the equipment requirement. ${localNote}`,

    products:
      `Our product range for customers in ${city} includes ${COMMON_PRODUCTS}. Equipment selection can depend on the required milk parameters, collection setup, operating volume, automation level and application.`,

    industry:
      `Milk collection and dairy operations in and around ${city} require practical equipment for routine milk testing and collection. Milk analyzers can help operators evaluate parameters such as milk fat, SNF and CLR, while suitable collection equipment can help organize procurement and weighing processes. ${localNote}`,

    support:
      `Jai Shree Equipment Dairy provides product guidance, installation assistance, testing support, maintenance, troubleshooting, compatible spare parts and selected repair services for suitable dairy equipment supplied in ${city}.`,

    serviceAreas,

    faqs: createFAQs(city, focus),
  };
}

/*
|--------------------------------------------------------------------------
| Location-specific SEO content
|--------------------------------------------------------------------------
|
| IMPORTANT:
| Keep every slug from rajasthan-locations.ts here.
| This record is intentionally typed against RajasthanLocation["slug"]
| so TypeScript can catch missing locations.
|
*/

const LOCATION_CONTENT: Record<
  RajasthanLocation["slug"],
  LocationSEOContent
> = {
  /*
  |--------------------------------------------------------------------------
  | Sri Ganganagar District
  |--------------------------------------------------------------------------
  */

  "sri-ganganagar": createLocationContent({
    city: "Sri Ganganagar",
    district: "Sri Ganganagar District",
    focus:
      "dairy farms, milk collection centers and dairy businesses",
    serviceAreas: [
      "Sri Ganganagar",
      "Raisinghnagar",
      "Sadulshahar",
      "Padampur",
      "Suratgarh",
      "Anupgarh",
      "Gharsana",
      "Karanpur",
      "Kesrisinghpur",
      "Lalgarh Jatan",
      "Rawla Mandi",
      "Gajsinghpur",
    ],
    localNote:
      "Sri Ganganagar is the operating location of Jai Shree Equipment Dairy, making it a key service point for customers requiring dairy equipment and milk testing solutions in the surrounding area.",
  }),

  raisinghnagar: createLocationContent({
    city: "Raisinghnagar",
    district: "Sri Ganganagar District",
    focus:
      "milk collection centers, dairy farms and milk procurement operations",
    serviceAreas: [
      "Raisinghnagar",
      "Sri Ganganagar",
      "Anupgarh",
      "Gharsana",
      "Rawla Mandi",
    ],
    localNote:
      "Customers in Raisinghnagar can enquire about milk testing and collection equipment according to the requirements of their dairy or milk procurement setup.",
  }),

  sadulshahar: createLocationContent({
    city: "Sadulshahar",
    district: "Sri Ganganagar District",
    focus:
      "dairy farms and local milk collection operations",
    serviceAreas: [
      "Sadulshahar",
      "Sri Ganganagar",
      "Padampur",
      "Karanpur",
      "Kesrisinghpur",
    ],
    localNote:
      "For dairy operations around Sadulshahar, equipment selection can be planned around routine milk testing, collection and weighing requirements.",
  }),

  padampur: createLocationContent({
    city: "Padampur",
    district: "Sri Ganganagar District",
    focus:
      "milk collection centers and dairy farms",
    serviceAreas: [
      "Padampur",
      "Sri Ganganagar",
      "Sadulshahar",
      "Gajsinghpur",
      "Karanpur",
    ],
    localNote:
      "Milk collection operators in Padampur can enquire about suitable analyzers, collection units and related dairy equipment.",
  }),

  suratgarh: createLocationContent({
    city: "Suratgarh",
    district: "Sri Ganganagar District",
    focus:
      "dairy businesses, milk collection points and testing operations",
    serviceAreas: [
      "Suratgarh",
      "Sri Ganganagar",
      "Sadulshahar",
      "Padampur",
      "Anupgarh",
    ],
    localNote:
      "Customers in Suratgarh can select equipment according to their milk testing frequency, collection workflow and operational requirements.",
  }),

  anupgarh: createLocationContent({
    city: "Anupgarh",
    district: "Sri Ganganagar District",
    focus:
      "milk procurement centers and dairy farms",
    serviceAreas: [
      "Anupgarh",
      "Sri Ganganagar",
      "Gharsana",
      "Raisinghnagar",
      "Rawla Mandi",
    ],
    localNote:
      "For milk procurement operations in Anupgarh, suitable testing and collection equipment can support routine evaluation and organized milk collection.",
  }),

  gharsana: createLocationContent({
    city: "Gharsana",
    district: "Sri Ganganagar District",
    focus:
      "dairy farms and milk collection centers",
    serviceAreas: [
      "Gharsana",
      "Anupgarh",
      "Raisinghnagar",
      "Rawla Mandi",
      "Sri Ganganagar",
    ],
    localNote:
      "Customers in Gharsana can enquire about milk analyzers, testing machines and collection equipment suitable for their dairy operation.",
  }),

  karanpur: createLocationContent({
    city: "Karanpur",
    district: "Sri Ganganagar District",
    focus:
      "milk collection centers, dairy farms and cooperative dairy operations",
    serviceAreas: [
      "Karanpur",
      "Sri Ganganagar",
      "Kesrisinghpur",
      "Padampur",
      "Sadulshahar",
    ],
    localNote:
      "Dairy operators in Karanpur can choose milk testing and collection equipment according to their procurement and testing workflow.",
  }),

  kesrisinghpur: createLocationContent({
    city: "Kesrisinghpur",
    district: "Sri Ganganagar District",
    focus:
      "milk testing and dairy collection operations",
    serviceAreas: [
      "Kesrisinghpur",
      "Sri Ganganagar",
      "Karanpur",
      "Padampur",
      "Gajsinghpur",
    ],
    localNote:
      "For customers in Kesrisinghpur, equipment enquiries can cover milk analysis, fat testing, collection and supporting dairy equipment.",
  }),

  "lalgarh-jatan": createLocationContent({
    city: "Lalgarh Jatan",
    district: "Sri Ganganagar District",
    focus:
      "dairy farms and milk procurement points",
    serviceAreas: [
      "Lalgarh Jatan",
      "Sri Ganganagar",
      "Sadulshahar",
      "Padampur",
      "Karanpur",
    ],
    localNote:
      "Dairy businesses around Lalgarh Jatan can enquire about equipment for milk quality testing and collection workflows.",
  }),

  "rawla-mandi": createLocationContent({
    city: "Rawla Mandi",
    district: "Sri Ganganagar District",
    focus:
      "milk collection centers and dairy businesses",
    serviceAreas: [
      "Rawla Mandi",
      "Gharsana",
      "Anupgarh",
      "Raisinghnagar",
      "Sri Ganganagar",
    ],
    localNote:
      "Milk collection operators in Rawla Mandi can enquire about analyzers and related equipment based on their daily testing and procurement requirements.",
  }),

  gajsinghpur: createLocationContent({
    city: "Gajsinghpur",
    district: "Sri Ganganagar District",
    focus:
      "dairy farms and milk collection operations",
    serviceAreas: [
      "Gajsinghpur",
      "Sri Ganganagar",
      "Padampur",
      "Karanpur",
      "Kesrisinghpur",
    ],
    localNote:
      "Customers in Gajsinghpur can enquire about milk testing machines, analyzers, collection units and other dairy equipment.",
  }),

  /*
  |--------------------------------------------------------------------------
  | Hanumangarh District
  |--------------------------------------------------------------------------
  */

  hanumangarh: createLocationContent({
    city: "Hanumangarh",
    district: "Hanumangarh District",
    focus:
      "dairy farms, milk collection centers and milk procurement businesses",
    serviceAreas: [
      "Hanumangarh",
      "Hanumangarh Junction",
      "Sangaria",
      "Pilibanga",
      "Rawatsar",
      "Tibbi",
      "Nohar",
      "Bhadra",
      "Pallu",
    ],
    localNote:
      "Hanumangarh is an important dairy service area for customers looking for milk testing, milk collection and related dairy equipment.",
  }),

  "hanumangarh-junction": createLocationContent({
    city: "Hanumangarh Junction",
    district: "Hanumangarh District",
    focus:
      "milk collection centers and dairy testing operations",
    serviceAreas: [
      "Hanumangarh Junction",
      "Hanumangarh",
      "Sangaria",
      "Tibbi",
      "Pilibanga",
    ],
    localNote:
      "Customers in Hanumangarh Junction can enquire about milk analyzers and collection equipment according to their dairy testing requirements.",
  }),

  sangaria: createLocationContent({
    city: "Sangaria",
    district: "Hanumangarh District",
    focus:
      "dairy farms, milk procurement points and collection centers",
    serviceAreas: [
      "Sangaria",
      "Hanumangarh",
      "Hanumangarh Junction",
      "Pilibanga",
      "Tibbi",
    ],
    localNote:
      "Dairy operators in Sangaria can enquire about milk analysis, fat testing and milk collection equipment.",
  }),

  pallu: createLocationContent({
    city: "Pallu",
    district: "Hanumangarh District",
    focus:
      "milk collection and dairy farm requirements",
    serviceAreas: [
      "Pallu",
      "Rawatsar",
      "Nohar",
      "Hanumangarh",
      "Bhadra",
    ],
    localNote:
      "For dairy requirements in Pallu, equipment can be selected around the required milk testing and collection workflow.",
  }),

  pilibanga: createLocationContent({
    city: "Pilibanga",
    district: "Hanumangarh District",
    focus:
      "milk testing centers and dairy collection operations",
    serviceAreas: [
      "Pilibanga",
      "Hanumangarh",
      "Sangaria",
      "Hanumangarh Junction",
      "Tibbi",
    ],
    localNote:
      "Customers in Pilibanga can enquire about milk analyzers, fat testing machines and collection equipment.",
  }),

  rawatsar: createLocationContent({
    city: "Rawatsar",
    district: "Hanumangarh District",
    focus:
      "dairy farms and milk procurement operations",
    serviceAreas: [
      "Rawatsar",
      "Pallu",
      "Nohar",
      "Hanumangarh",
      "Bhadra",
    ],
    localNote:
      "Milk procurement and dairy businesses in Rawatsar can enquire about suitable testing and collection equipment.",
  }),

  tibbi: createLocationContent({
    city: "Tibbi",
    district: "Hanumangarh District",
    focus:
      "milk collection centers and dairy farms",
    serviceAreas: [
      "Tibbi",
      "Hanumangarh",
      "Pilibanga",
      "Sangaria",
      "Hanumangarh Junction",
    ],
    localNote:
      "Dairy operators in Tibbi can enquire about milk analyzer machines and supporting dairy equipment.",
  }),

  nohar: createLocationContent({
    city: "Nohar",
    district: "Hanumangarh District",
    focus:
      "dairy farms and milk collection operations",
    serviceAreas: [
      "Nohar",
      "Bhadra",
      "Rawatsar",
      "Pallu",
      "Hanumangarh",
    ],
    localNote:
      "Customers in Nohar can enquire about milk testing, milk collection and dairy equipment based on their operational needs.",
  }),

  bhadra: createLocationContent({
    city: "Bhadra",
    district: "Hanumangarh District",
    focus:
      "milk procurement centers and dairy farms",
    serviceAreas: [
      "Bhadra",
      "Nohar",
      "Rawatsar",
      "Pallu",
      "Hanumangarh",
    ],
    localNote:
      "Dairy businesses in Bhadra can enquire about milk analyzers, milk fat testing equipment and collection solutions.",
  }),

  /*
  |--------------------------------------------------------------------------
  | Bikaner District
  |--------------------------------------------------------------------------
  */

  bikaner: createLocationContent({
    city: "Bikaner",
    district: "Bikaner District",
    focus:
      "dairy farms, milk collection centers and dairy businesses",
    serviceAreas: [
      "Bikaner",
      "Nokha",
      "Kolayat",
      "Lunkaransar",
      "Khajuwala",
      "Shri Dungargarh",
      "Chhatargarh",
    ],
    localNote:
      "Jai Shree Equipment Dairy serves customers in Bikaner with milk testing and dairy equipment enquiries, including equipment for milk collection and quality evaluation.",
  }),

  nokha: createLocationContent({
    city: "Nokha",
    district: "Bikaner District",
    focus:
      "dairy farms and milk collection centers",
    serviceAreas: [
      "Nokha",
      "Bikaner",
      "Shri Dungargarh",
      "Kolayat",
    ],
    localNote:
      "Customers in Nokha can enquire about milk analyzers, milk fat testing machines and dairy collection equipment.",
  }),

  kolayat: createLocationContent({
    city: "Kolayat",
    district: "Bikaner District",
    focus:
      "milk procurement and dairy collection operations",
    serviceAreas: [
      "Kolayat",
      "Bikaner",
      "Nokha",
      "Lunkaransar",
      "Chhatargarh",
    ],
    localNote:
      "Milk procurement operators in Kolayat can enquire about testing and collection equipment suitable for their workflow.",
  }),

  lunkaransar: createLocationContent({
    city: "Lunkaransar",
    district: "Bikaner District",
    focus:
      "dairy farms and milk testing operations",
    serviceAreas: [
      "Lunkaransar",
      "Bikaner",
      "Kolayat",
      "Khajuwala",
      "Chhatargarh",
    ],
    localNote:
      "Customers in Lunkaransar can enquire about milk testing machines, analyzers and related dairy equipment.",
  }),

  khajuwala: createLocationContent({
    city: "Khajuwala",
    district: "Bikaner District",
    focus:
      "milk collection centers and dairy farms",
    serviceAreas: [
      "Khajuwala",
      "Bikaner",
      "Lunkaransar",
      "Chhatargarh",
    ],
    localNote:
      "Dairy operations in Khajuwala can enquire about equipment for milk analysis, collection and weighing applications.",
  }),

  "shri-dungargarh": createLocationContent({
    city: "Shri Dungargarh",
    district: "Bikaner District",
    focus:
      "dairy farms and milk procurement centers",
    serviceAreas: [
      "Shri Dungargarh",
      "Bikaner",
      "Nokha",
    ],
    localNote:
      "Customers in Shri Dungargarh can enquire about milk analyzers, testing equipment and supporting dairy machinery.",
  }),

  chhatargarh: createLocationContent({
    city: "Chhatargarh",
    district: "Bikaner District",
    focus:
      "milk collection and dairy testing requirements",
    serviceAreas: [
      "Chhatargarh",
      "Bikaner",
      "Lunkaransar",
      "Khajuwala",
      "Kolayat",
    ],
    localNote:
      "For dairy requirements in Chhatargarh, suitable equipment can be selected based on testing, collection and operational requirements.",
  }),

  /*
  |--------------------------------------------------------------------------
  | Jaipur
  |--------------------------------------------------------------------------
  */

  jaipur: createLocationContent({
    city: "Jaipur",
    district: "Jaipur District",
    focus:
      "dairy businesses, milk testing laboratories and milk collection operations",
    serviceAreas: [
      "Jaipur",
      "Rajasthan",
    ],
    localNote:
      "Customers in Jaipur can enquire about milk testing equipment and dairy machinery for commercial dairy, collection and testing applications.",
  }),

  /*
  |--------------------------------------------------------------------------
  | Major Rajasthan Locations
  |--------------------------------------------------------------------------
  */

  jodhpur: createLocationContent({
    city: "Jodhpur",
    district: "Jodhpur District",
    focus:
      "dairy farms, milk collection centers and commercial dairy operations",
    serviceAreas: [
      "Jodhpur",
      "Rajasthan",
    ],
    localNote:
      "Customers in Jodhpur can enquire about milk analyzers, milk testing machines and other dairy equipment for commercial and collection applications.",
  }),

  udaipur: createLocationContent({
    city: "Udaipur",
    district: "Udaipur District",
    focus:
      "dairy farms and milk collection businesses",
    serviceAreas: [
      "Udaipur",
      "Rajasthan",
    ],
    localNote:
      "Dairy businesses in Udaipur can enquire about milk testing and collection equipment according to their operational requirements.",
  }),

  kota: createLocationContent({
    city: "Kota",
    district: "Kota District",
    focus:
      "dairy farms, milk collection centers and milk testing operations",
    serviceAreas: [
      "Kota",
      "Rajasthan",
    ],
    localNote:
      "Customers in Kota can enquire about milk analyzer machines, fat testing equipment, collection units and other dairy machinery.",
  }),

  ajmer: createLocationContent({
    city: "Ajmer",
    district: "Ajmer District",
    focus:
      "dairy farms and milk procurement operations",
    serviceAreas: [
      "Ajmer",
      "Rajasthan",
    ],
    localNote:
      "Dairy operators in Ajmer can enquire about milk testing, analysis and collection equipment for their dairy applications.",
  }),

  alwar: createLocationContent({
    city: "Alwar",
    district: "Alwar District",
    focus:
      "dairy farms, milk collection centers and dairy businesses",
    serviceAreas: [
      "Alwar",
      "Rajasthan",
    ],
    localNote:
      "Customers in Alwar can enquire about milk analyzer machines and related dairy equipment for collection and testing applications.",
  }),

  sikar: createLocationContent({
    city: "Sikar",
    district: "Sikar District",
    focus:
      "dairy farms and milk collection operations",
    serviceAreas: [
      "Sikar",
      "Rajasthan",
    ],
    localNote:
      "Dairy businesses in Sikar can enquire about milk analyzers, fat testing machines and collection equipment.",
  }),

  bharatpur: createLocationContent({
    city: "Bharatpur",
    district: "Bharatpur District",
    focus:
      "dairy farms and milk procurement centers",
    serviceAreas: [
      "Bharatpur",
      "Rajasthan",
    ],
    localNote:
      "Customers in Bharatpur can enquire about milk testing and dairy collection equipment according to their application.",
  }),

  bhilwara: createLocationContent({
    city: "Bhilwara",
    district: "Bhilwara District",
    focus:
      "dairy farms and commercial milk collection operations",
    serviceAreas: [
      "Bhilwara",
      "Rajasthan",
    ],
    localNote:
      "Dairy operators in Bhilwara can enquire about milk analyzers, milk testing machines and related dairy equipment.",
  }),

  pali: createLocationContent({
    city: "Pali",
    district: "Pali District",
    focus:
      "dairy businesses and milk collection centers",
    serviceAreas: [
      "Pali",
      "Rajasthan",
    ],
    localNote:
      "Customers in Pali can enquire about milk testing equipment, collection systems and dairy machinery.",
  }),

  barmer: createLocationContent({
    city: "Barmer",
    district: "Barmer District",
    focus:
      "dairy farms and milk collection operations",
    serviceAreas: [
      "Barmer",
      "Rajasthan",
    ],
    localNote:
      "Dairy businesses in Barmer can enquire about suitable milk testing and collection equipment.",
  }),

  chittorgarh: createLocationContent({
    city: "Chittorgarh",
    district: "Chittorgarh District",
    focus:
      "dairy farms, milk testing and collection operations",
    serviceAreas: [
      "Chittorgarh",
      "Rajasthan",
    ],
    localNote:
      "Customers in Chittorgarh can enquire about milk analyzer machines and other dairy equipment for milk testing and collection applications.",
  }),

  tonk: createLocationContent({
    city: "Tonk",
    district: "Tonk District",
    focus:
      "dairy farms and milk procurement operations",
    serviceAreas: [
      "Tonk",
      "Rajasthan",
    ],
    localNote:
      "Dairy operators in Tonk can enquire about milk testing machines, analyzers and milk collection equipment.",
  }),

  "sawai-madhopur": createLocationContent({
    city: "Sawai Madhopur",
    district: "Sawai Madhopur District",
    focus:
      "dairy farms and milk collection centers",
    serviceAreas: [
      "Sawai Madhopur",
      "Rajasthan",
    ],
    localNote:
      "Customers in Sawai Madhopur can enquire about milk analyzers and dairy equipment according to their testing and collection needs.",
  }),

  jhunjhunu: createLocationContent({
    city: "Jhunjhunu",
    district: "Jhunjhunu District",
    focus:
      "dairy farms and milk collection operations",
    serviceAreas: [
      "Jhunjhunu",
      "Rajasthan",
    ],
    localNote:
      "Dairy businesses in Jhunjhunu can enquire about milk testing equipment and collection systems.",
  }),

  nagaur: createLocationContent({
    city: "Nagaur",
    district: "Nagaur District",
    focus:
      "dairy farms, milk procurement and collection centers",
    serviceAreas: [
      "Nagaur",
      "Rajasthan",
    ],
    localNote:
      "Customers in Nagaur can enquire about milk analyzers, milk fat testing machines and dairy collection equipment.",
  }),

  bundi: createLocationContent({
    city: "Bundi",
    district: "Bundi District",
    focus:
      "dairy farms and milk testing operations",
    serviceAreas: [
      "Bundi",
      "Rajasthan",
    ],
    localNote:
      "Dairy operators in Bundi can enquire about milk testing and collection equipment for their dairy applications.",
  }),

  sirohi: createLocationContent({
    city: "Sirohi",
    district: "Sirohi District",
    focus:
      "dairy farms and milk collection businesses",
    serviceAreas: [
      "Sirohi",
      "Rajasthan",
    ],
    localNote:
      "Customers in Sirohi can enquire about milk analyzer machines, testing equipment and related dairy machinery.",
  }),

  jaisalmer: createLocationContent({
    city: "Jaisalmer",
    district: "Jaisalmer District",
    focus:
      "dairy farms and milk collection requirements",
    serviceAreas: [
      "Jaisalmer",
      "Rajasthan",
    ],
    localNote:
      "Dairy businesses in Jaisalmer can enquire about suitable milk testing and collection equipment based on their operational needs.",
  }),

  baran: createLocationContent({
    city: "Baran",
    district: "Baran District",
    focus:
      "dairy farms and milk procurement operations",
    serviceAreas: [
      "Baran",
      "Rajasthan",
    ],
    localNote:
      "Customers in Baran can enquire about milk analyzers, milk testing equipment and dairy collection systems.",
  }),

  banswara: createLocationContent({
    city: "Banswara",
    district: "Banswara District",
    focus:
      "dairy farms, milk collection centers and testing requirements",
    serviceAreas: [
      "Banswara",
      "Rajasthan",
    ],
    localNote:
      "Dairy operators in Banswara can enquire about milk testing and dairy equipment according to their collection and testing workflow.",
  }),
};

/*
|--------------------------------------------------------------------------
| Public helpers
|--------------------------------------------------------------------------
*/

export function generateLocationSEOContent(
  locationSlug: RajasthanLocation["slug"],
): LocationSEOContent {
  return LOCATION_CONTENT[locationSlug];
}

export function getLocationSEOContent(
  locationSlug: string,
): LocationSEOContent | null {
  const normalizedSlug = locationSlug
    .toLowerCase()
    .trim() as RajasthanLocation["slug"];

  return LOCATION_CONTENT[normalizedSlug] ?? null;
}

export function hasUniqueLocationSEOContent(
  locationSlug: string,
): boolean {
  const normalizedSlug = locationSlug
    .toLowerCase()
    .trim() as RajasthanLocation["slug"];

  return Boolean(LOCATION_CONTENT[normalizedSlug]);
}