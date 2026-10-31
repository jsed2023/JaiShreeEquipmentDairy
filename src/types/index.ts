
import type { ReactNode, SVGProps } from "react";
import type { LucideIcon } from "lucide-react";

// =========================
// ICON
// =========================

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

// =========================
// THEME SWITCH
// =========================

export interface ThemeSwitchProps {
  className?: string;
  classNames?: {
    base?: string;
    wrapper?: string;
  };
}

// =========================
// PROVIDERS
// =========================

export interface ProvidersProps {
  children: ReactNode;
}

// =========================
// IMAGE SLIDER
// =========================

export interface ImagesData {
  src: string;
  alt?: string;
  caption?: string;
}

export interface ImageSliderProps {
  images: ImagesData[];
  productName: string;
}

// =========================
// MODAL
// =========================

export interface ModalData {
  modalType: string;
  equipmentName?: string;
  equipmentImage?: string;
  equipmentPrice?: string;
}

// =========================
// FEATURES
// =========================

export interface Features {
  id: string;
  key: string;
  value: string;
}

// =========================
// PRODUCTS
// =========================


export type ProductCategory =
  | "dairy-equipment"
  | "milk-testing-equipment"
  | "automatic-milk-collection-system"
  | "milk-analyzer-machines";

export interface SpecsRow {
  label: string;
  value: string;
}

export type SpecsTable = SpecsRow[];

export interface Products {
  id: number;
  name: string;
  title?: string;
  h1?: string;
  metaDescription?: string;
  url: string;
  category: ProductCategory;
  keywords: string;
  smallDesc: string;
  price: string;
  desc: string;
  images: ImagesData[];
  features: Features[];
  moreDetails?: string;
  updatedAt?: string;
  specsTable?: SpecsTable;
}


// =========================
// CONTACT FORM
// =========================

export interface ContactFormData {
  firstName?: string;
  lastName?: string;
  email?: string;
  query?: string;
  mobileNumber?: string;
}

// =========================
// ABOUT
// =========================

export interface AboutAndStory {
  id: number;
  title: string;
  desc: string;
}

export interface DescList {
  id: string;
  title: string;
  desc: string;
}

export interface ProductRangeAndWhyChooseUs {
  id: number;
  title: string;
  descList: DescList[];
}

export interface Information {
  id: string;
  title: string;
  desc: string;
}

export interface AboutFactsheetInformation {
  id: string;
  title: string;
  desc: string;
  icon: LucideIcon;
}

export interface AboutFactsheet {
  id: number;
  title: string;
  icon: LucideIcon;
  information: AboutFactsheetInformation[];
}

// =========================
// SERVICES
// =========================

export interface ServicesImages {
  id: string;
  url: string;
  alt: string;
  figcaption: string;
}

export interface Services {
  id: string;
  name: string;
  images: ServicesImages[];
}

// =========================
// GALLERY
// =========================

export interface GalleryImage {
  src: string;
  name: string;
  altText: string;
  href?: string;
}

// =========================
// CATEGORY
// =========================

export interface Category {
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
}
// =========================
// SPARE PARTS
// =========================

export interface SparePart {
  id: number;
  url: string;
  name: string;

  sku: string;
  price: string;
  category: string;
  stockStatus: string;
  warranty: string;

  photo: string;
  alt: string;

  // SEO
  keywords: string[];
  metaTitle: string;
  metaDescription: string;

  // Product description
  description: string;

  // Features
  keyFeatures: string[];

  // Specifications
  specifications: Record<string, string>;

  // Optional package details
  packageIncludes?: string[];
}