import { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

import {
MilkTestingEquipment,
creamSeparatorMachine,
milkingMachine,
automaticMilkCollectionSystem,
MilkAnalyzerMachines,
} from "@/config/products";

import { blogs } from "@/config/blogs";

import { rajasthanLocations } from "@/lib/rajasthan-locations";

const BASE_URL = siteConfig.url.replace(//$/, "");

function slugify(value: string) {
return value
.toLowerCase()
.trim()
.replace(/[^a-z0-9\s-]/g, "")
.replace(/\s+/g, "-");
}

export default function sitemap(): MetadataRoute.Sitemap {
const now = new Date();

const sitemap: MetadataRoute.Sitemap = [];

const addUrl = (
path: string,
priority = 0.8,
changeFrequency:
| "always"
| "hourly"
| "daily"
| "weekly"
| "monthly"
| "yearly"
| "never" = "weekly"
) => {
sitemap.push({
url: "${BASE_URL}${path}",
lastModified: now,
changeFrequency,
priority,
});
};

// Main Pages
[
"",
"/about",
"/contact",
"/blog",
"/categories",
"/services",
"/gallery",
"/locations",
"/testimonials",
"/milestones",
"/milk-rate-chart",
"/automatic-milk-collection-system",
"/dairy-equipment",
"/milk-testing-equipment",
"/milk-analyzer-machines",
].forEach((path, index) => {
addUrl(
path,
index === 0 ? 1.0 : 0.8,
index === 0 ? "daily" : "weekly"
);
});

// Automatic Milk Collection System Products
automaticMilkCollectionSystem?.forEach((p) => {
if (p?.url) {
addUrl(
"/automatic-milk-collection-system/${p.url}",
0.9,
"weekly"
);
}
});

// Dairy Equipment Products
[...creamSeparatorMachine, ...milkingMachine].forEach((p) => {
if (p?.url) {
addUrl(
"/dairy-equipment/${p.url}",
0.9,
"weekly"
);
}
});

// Milk Testing Equipment
MilkTestingEquipment?.forEach((p) => {
if (p?.url) {
addUrl(
"/milk-testing-equipment/${p.url}",
0.9,
"weekly"
);
}
});

// Milk Analyzer Machines
MilkAnalyzerMachines?.forEach((p) => {
if (p?.url) {
addUrl(
"/milk-analyzer-machines/${p.url}",
0.9,
"weekly"
);
}
});

// Blog Pages
Object.values(blogs || {}).forEach((blog) => {
if (
typeof blog === "object" &&
blog !== null &&
"slug" in blog
) {
addUrl(
"/blog/${blog.slug}",
0.7,
"monthly"
);
}
});

// Rajasthan Location Pages
rajasthanLocations?.forEach((location) => {
addUrl(
"/milk-analyzer-${slugify(location)}",
0.7,
"monthly"
);
});

return sitemap;
}