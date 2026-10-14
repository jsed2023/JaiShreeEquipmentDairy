import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Milk Testing Machine Spare Parts",
    template: "%s | Jai Shree Equipment Dairy",
  },
  description:
    "Buy genuine milk testing machine spare parts for Ekomilk, Advance and Lactoscan analyzers. Contact Jai Shree Equipment Dairy for pricing and availability.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function SparePartsDetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}