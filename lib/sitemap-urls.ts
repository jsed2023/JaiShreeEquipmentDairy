import { siteConfig } from "@/config/site";
import {
  MilkTestingEquipment,
  creamSeparatorMachine,
  milkingMachine,
  automaticMilkCollectionSystem,
} from "@/config/products";
/* ----------------------------------------
   TYPES
---------------------------------------- */
export type SitemapUrl =
  | { loc: string }
  | { loc: string; item: SitemapItem };

export interface SitemapItem {
  name?: string;
  image?: string | { src: string };
  images?: Array<string | { src: string }>;
}

/* ----------------------------------------
   BASE URL
---------------------------------------- */
const base = siteConfig.url.replace(/\/$/, "");

/* ----------------------------------------
   SITEMAP URLS (AUTO)
---------------------------------------- */
export const sitemapUrls: SitemapUrl[] = [
  /* ===== STATIC PAGES ===== */
  { loc: `${base}/` },
  { loc: `${base}/about` },
  { loc: `${base}/milk-rate-chart` },
  { loc: `${base}/services` },
  {loc: `${base}/gallery`},
  { loc: `${base}/contact` },

  /* ===== CATEGORY PAGES ===== */
  { loc: `${base}/automatic-milk-collection-system` },
  { loc: `${base}/dairy-equipment` },
  { loc: `${base}/milk-testing-equipment` },

  /* ===== PRODUCT PAGES ===== */

  // Automatic Milk Collection System
  ...automaticMilkCollectionSystem.map((p) => ({
    loc: `${base}/automatic-milk-collection-system/${p.url}`,
    item: {
      name: p.name,
      images: p.images || (p.image ? [p.image] : []),
    },
  })),

  // Dairy Equipment (Cream Separator + Milking Machines)
  ...[...creamSeparatorMachine, ...milkingMachine].map((p) => ({
    loc: `${base}/dairy-equipment/${p.url}`,
    item: {
      name: p.name,
      images: p.images || (p.image ? [p.image] : []),
    },
  })),

  // Milk Testing Equipment
  ...MilkTestingEquipment.map((p) => ({
    loc: `${base}/milk-testing-equipment/${p.url}`,
    item: {
      name: p.name,
      images: p.images || (p.image ? [p.image] : []),
    },
  })),
];
