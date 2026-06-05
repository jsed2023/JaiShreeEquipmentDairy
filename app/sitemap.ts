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

const BASE_URL = siteConfig.url.replace(/\/$/, "");

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}

type ChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

type BlogType = {
  slug: string;
  updatedAt?: string | Date;
};

// SAFE DATE HELPER
const getSafeDate = () => {
  const now = new Date();

  return new Date(
    Date.UTC(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate()
    )
  );
};

// PREVENT FUTURE DATES
const sanitizeDate = (date?: string | Date) => {
  if (!date) return getSafeDate();

  const parsed = new Date(date);

  if (isNaN(parsed.getTime())) {
    return getSafeDate();
  }

  const now = new Date();

  return parsed > now ? getSafeDate() : parsed;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemap: MetadataRoute.Sitemap = [];

  const addedUrls = new Set<string>();

  const addUrl = (
    path: string,
    priority = 0.8,
    changeFrequency: ChangeFrequency = "weekly",
    lastModified: Date = getSafeDate()
  ) => {
    const fullUrl = `${BASE_URL}${path}`;

    if (addedUrls.has(fullUrl)) return;

    addedUrls.add(fullUrl);

    sitemap.push({
      url: fullUrl,
      lastModified,
      changeFrequency,
      priority,
    });
  };

  // =========================
  // STATIC PAGES
  // =========================
  const staticPages = [
    {
      path: "/",
      priority: 1,
      changeFrequency: "daily" as ChangeFrequency,
    },
    {
      path: "/about",
      priority: 0.7,
      changeFrequency: "monthly" as ChangeFrequency,
    },
    {
      path: "/automatic-milk-collection-system",
      priority: 0.9,
      changeFrequency: "weekly" as ChangeFrequency,
    },
    {
      path: "/blog",
      priority: 0.9,
      changeFrequency: "daily" as ChangeFrequency,
    },
    {
      path: "/contact",
      priority: 0.6,
      changeFrequency: "monthly" as ChangeFrequency,
    },
    {
      path: "/categories",
      priority: 0.8,
      changeFrequency: "weekly" as ChangeFrequency,
    },
    {
      path: "/dairy-equipment",
      priority: 0.9,
      changeFrequency: "weekly" as ChangeFrequency,
    },
    {
      path: "/gallery",
      priority: 0.7,
      changeFrequency: "monthly" as ChangeFrequency,
    },
    {
      path: "/testimonials",
      priority: 0.7,
      changeFrequency: "monthly" as ChangeFrequency,
    },
    {
      path: "/locations",
      priority: 0.8,
      changeFrequency: "weekly" as ChangeFrequency,
    },
    {
      path: "/milestones",
      priority: 0.7,
      changeFrequency: "monthly" as ChangeFrequency,
    },
    {
      path: "/milk-analyzer-machines",
      priority: 0.9,
      changeFrequency: "weekly" as ChangeFrequency,
    },
    {
      path: "/milk-rate-chart",
      priority: 0.8,
      changeFrequency: "daily" as ChangeFrequency,
    },
    {
      path: "/milk-testing-equipment",
      priority: 0.9,
      changeFrequency: "weekly" as ChangeFrequency,
    },
    {
      path: "/services",
      priority: 0.8,
      changeFrequency: "monthly" as ChangeFrequency,
    },
  ];

  staticPages.forEach((page) => {
    addUrl(
      page.path,
      page.priority,
      page.changeFrequency,
      getSafeDate()
    );
  });

  // =========================
  // AUTOMATIC MILK COLLECTION SYSTEM
  // =========================
  automaticMilkCollectionSystem?.forEach((product) => {
    if (product?.url) {
      addUrl(
        `/automatic-milk-collection-system/${product.url}`,
        0.9,
        "weekly",
        getSafeDate()
      );
    }
  });

  // =========================
  // DAIRY EQUIPMENT
  // =========================
  [...creamSeparatorMachine, ...milkingMachine].forEach(
    (product) => {
      if (product?.url) {
        addUrl(
          `/dairy-equipment/${product.url}`,
          0.9,
          "weekly",
          getSafeDate()
        );
      }
    }
  );

  // =========================
  // MILK TESTING EQUIPMENT
  // =========================
  MilkTestingEquipment?.forEach((product) => {
    if (product?.url) {
      addUrl(
        `/milk-testing-equipment/${product.url}`,
        0.9,
        "weekly",
        getSafeDate()
      );
    }
  });

  // =========================
  // MILK ANALYZER MACHINES
  // =========================
  MilkAnalyzerMachines?.forEach((product) => {
    if (product?.url) {
      addUrl(
        `/milk-analyzer-machines/${product.url}`,
        0.9,
        "weekly",
        getSafeDate()
      );
    }
  });

  // =========================
  // BLOGS
  // =========================
  Object.values(blogs || {}).forEach((blog) => {
    const typedBlog = blog as BlogType;

    if (typedBlog?.slug) {
      addUrl(
        `/blog/${typedBlog.slug}`,
        0.8,
        "weekly",
        sanitizeDate(typedBlog.updatedAt)
      );
    }
  });

  // =========================
  // LOCATION PAGES
  // =========================
  rajasthanLocations?.forEach((location) => {
    addUrl(
      `/milk-analyzer-${slugify(location)}`,
      0.7,
      "monthly",
      getSafeDate()
    );
  });

  return sitemap;
}