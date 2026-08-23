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

export interface Products {
  [x: string]: any;

  id: number;
  name: string;
  url: string;
  category: string;
  keywords: string;
  smallDesc: string;
  price: string;
  desc: string;
  images: ImagesData[];
  features: Features[];
  moreDetails?: string;
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

interface DescList {
  id: string;
  title: string;
  desc: string;
}

export interface ProductRangeAndWhyChooseUs {
  id: number;
  title: string;
  descList: DescList[];
}

interface Information {
  id: string;
  title: string;
  desc: string;
}

export interface AboutFactsheet {
  id: number;
  title: string;
  icon: LucideIcon;
  information: {
    id: string;
    title: string;
    desc: string;
  }[];
}

// =========================
// SERVICES
// =========================

interface ServicesImages {
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
// BLOG
// =========================

export interface BlogType {
  slug: string;
  title: string;
  updatedAt?: string;
  description: string;
  keywords: string[];
  image: string;
  alt: string;
  category: string;
  date: string;
  content: string;
}