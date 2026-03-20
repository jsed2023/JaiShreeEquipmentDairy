import { SwitchProps } from "@nextui-org/switch";
import { ThemeProviderProps } from "next-themes/dist/types";
import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface ThemeSwitchProps {
  className?: string;
  classNames?: SwitchProps["classNames"];
}

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export interface ImageSliderProps {
  images: ImagesData[];
}

export interface ImagesData {
  src: string;
}

export interface ModalData {
  modalType: string;
  equipmentName?: string;
  equipmentImage?: string;
  equipmentPrice?: string;
}

export interface Features {
  id: string;
  key: string;
  value: string;
}

export interface Products {
  [x: string]: any;
  id: number;
  name: string;
  url: string;
  keywords: string;
  smallDesc: string;
  price: string;
  desc: string;
  images: ImagesData[];
  features: Features[];
  moreDetails?: string;
}

export interface ContactFormData {
  firstName?: string;
  lastName?: string;
  email?: string;
  query?: string;
  mobileNumber?: string;
}

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
  information: Information[];
}

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
