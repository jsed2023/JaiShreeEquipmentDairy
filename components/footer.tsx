"use client";

import Link from "next/link";

import {
  FaFacebookF,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

import { FcLike } from "react-icons/fc";

export default function Footer() {
  return (
<footer
  className="relative mt-4 overflow-hidden border-t border-amber-200 bg-[#FAF9F6] text-slate-700"
  aria-label="Website Footer"
>
      {/* Background Effect */}
      <div className="absolute inset-0 bg-white/20" />
      {/* Main Footer */}
      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-6 lg:grid-cols-4">
        
{/* Brand */}
<div>
  <Link
    href="/"
    aria-label="Jai Shree Equipment Dairy Home"
    className="inline-block rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
  >
    <h2 className="text-lg font-bold text-slate-900">
      Jai Shree Equipment Dairy
    </h2>
  </Link>

  <p className="mt-4 text-sm leading-6 text-slate-600">
    Jai Shree Equipment Dairy supplies reliable dairy equipment,
    milk analyzer machines, and milk testing solutions for dairy
    businesses across Rajasthan and India.
  </p>

  {/* Social Media */}
  <div className="mt-5 flex items-center gap-3">
    <a
      href="https://www.facebook.com/Jaishreeequipmentdairy"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit our Facebook page"
      className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-lg shadow-sm transition-all duration-200 hover:border-amber-400 hover:bg-amber-50 hover:text-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
    >
      <FaFacebookF />
    </a>

    <a
      href="https://www.youtube.com/@Jaishreeequipmentdairy"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit our YouTube channel"
      className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-lg shadow-sm transition-all duration-200 hover:border-amber-400 hover:bg-amber-50 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
    >
      <FaYoutube />
    </a>
  </div>
</div>


        
{/* Quick Links */}
<nav aria-label="Footer Navigation">
  <h3 className="text-sm font-semibold text-slate-900">
    Quick Links
  </h3>

  <ul className="mt-3 space-y-1 text-sm text-slate-600">
    {[
      {
        name: "Home",
        href: "/",
      },
      {
        name: "Dairy Equipment",
        href: "/dairy-equipment",
      },
      {
        name: "Milk Testing Equipment",
        href: "/milk-testing-equipment",
      },
      {
        name: "Automatic Milk Collection System",
        href: "/automatic-milk-collection-system",
      },
      {
        name: "Services",
        href: "/services",
      },
      {
        name: "Blog",
        href: "/blog",
      },
      {
        name: "Contact Us",
        href: "/contact",
      },
    ].map((link) => (
      <li key={link.name}>
        <Link
          href={link.href}
          title={link.name}
          aria-label={link.name}
          className="group flex min-h-12 items-center gap-2 rounded-md px-2 py-2 transition-all duration-200 hover:bg-amber-50 hover:text-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
        >
          <FaArrowRight className="text-xs opacity-60 transition-transform duration-200 group-hover:translate-x-1" />

          <span>{link.name}</span>
        </Link>
      </li>
    ))}
  </ul>
</nav>

        
{/* Products */}
<div>
  <h3 className="text-sm font-semibold text-slate-900">
    Products
  </h3>

  <ul className="mt-3 space-y-1 text-sm text-slate-600">
    {[
      {
        name: "Milk Analyzer",
        href: "/milk-testing-equipment",
      },
      {
        name: "Automatic Milk Collection System",
        href: "/automatic-milk-collection-system",
      },
      {
        name: "Cream Separator Machine",
        href: "/dairy-equipment",
      },
      {
        name: "Electronic Weighing Scale",
        href: "/automatic-milk-collection-system",
      },
      {
        name: "Dairy Automation Solutions",
        href: "/automatic-milk-collection-system",
      },
    ].map((item) => (
      <li key={item.name}>
        <Link
          href={item.href}
          title={item.name}
          aria-label={item.name}
          className="group flex min-h-12 items-center gap-2 rounded-md px-2 py-2 transition-all duration-200 hover:bg-amber-50 hover:text-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
        >
          <span className="h-2 w-2 flex-shrink-0 rounded-full bg-amber-500" />

          <span>{item.name}</span>
        </Link>
      </li>
    ))}
  </ul>
</div>

        
{/* Contact Information */}
<address className="not-italic">
  <h3 className="text-sm font-semibold text-slate-900">
    Contact Information
  </h3>

  <div className="mt-3 space-y-4 text-sm">
    {/* Address */}
    <div className="flex items-start gap-3">
      <FaMapMarkerAlt
        className="mt-1 shrink-0 text-cyan-600"
        aria-hidden="true"
      />

      <p className="leading-6 text-slate-600">
        Shop No. B-42, Upper Side,
        Rohit Udhyog Market,
        Near HP Gas Agency,
        Shiv Circle Road,
        Sri Ganganagar,
        Rajasthan – 335001,
        India
      </p>
    </div>

    {/* Phone */}
    <div>
      <a
        href="tel:+917375082341"
        aria-label="Call Jai Shree Equipment Dairy"
        className="flex min-h-12 items-center gap-3 rounded-md px-2 py-2 text-slate-600 transition-all duration-200 hover:bg-amber-50 hover:text-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
      >
        <FaPhoneAlt
          className="shrink-0 text-cyan-600"
          aria-hidden="true"
        />

        <span>+91 73750 82341</span>
      </a>
    </div>

    {/* Email */}
    <div>
      <a
        href="mailto:choudharydairy@outlook.com"
        aria-label="Email Jai Shree Equipment Dairy"
        className="flex min-h-12 items-center gap-3 rounded-md px-2 py-2 text-slate-600 transition-all duration-200 hover:bg-amber-50 hover:text-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
      >
        <FaEnvelope
          className="shrink-0 text-cyan-600"
          aria-hidden="true"
        />

        <span className="break-all">
          choudharydairy@outlook.com
        </span>
      </a>
    </div>
  </div>
</address>
      
{/* Copyright */}
<div className="relative border-t border-amber-200">
  <div className="mx-auto flex flex-col items-center justify-between gap-3 px-4 py-4 text-center text-xs text-slate-600 md:flex-row">
    <p>
      © 2026 Jai Shree Equipment Dairy. All Rights Reserved.
    </p>

    <p>
      Trusted Dairy Equipment & Milk Testing Equipment Supplier in Rajasthan,
      India
    </p>
  </div>
</div>

{/* Developer Bar */}
<div className="relative border-t border-amber-200 bg-amber-100">
  <div className="mx-auto flex flex-col items-center justify-between gap-2 px-4 py-3 text-xs text-slate-700 md:flex-row">
    <span>
      Built for speed, SEO &amp; modern web performance
    </span>

    <<a
  href="https://developerchoudhary.vercel.app/"
  target="_blank"
  rel="nofollow noopener noreferrer"
  aria-label="Visit Developer Choudhary website"
  className="flex min-h-12 items-center gap-2 rounded-md px-3 py-2 transition-all duration-200 hover:bg-amber-200 hover:text-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
>
  <span>Made with</span>
  <FcLike aria-hidden="true" />
  <span>by Developer Choudhary</span>
</a>
  </div>
</div>
    </footer>
  );
}
