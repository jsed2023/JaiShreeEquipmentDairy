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
          >
           <h2 className="text-sm font-bold text-slate-900">
              Jai Shree Equipment Dairy
            </h2>
          </Link>

          {/* Optimized SEO Content */}
          <p className="mt-4 text-sm leading-6 text-slate-600">
            Jai Shree Equipment Dairy supplies
            reliable dairy equipment, milk
            analyzer machines, and milk
            testing solutions for dairy
            businesses across Rajasthan
            and India.
          </p>
</div>
         {/* Social Media */}
<div className="mt-4 flex items-center gap-2">
  <a
    href="https://www.facebook.com/Jaishreeequipmentdairy"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
    className="flex h-12 w-12 items-center justify-center rounded-full
      border border-slate-200 bg-white shadow-sm text-xl
      text-[#1877F2] transition hover:bg-[#1877F2] hover:text-white"
  >
    <FaFacebookF />
  </a>

  <a
    href="https://www.youtube.com/@Jaishreeequipmentdairy"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="YouTube"
    className="flex h-12 w-12 items-center justify-center rounded-full
      border border-slate-200 bg-white shadow-sm text-xl
      text-[#FF0000] transition hover:bg-[#FF0000] hover:text-white"
  >
    <FaYoutube />
  </a>
</div>
        {/* Quick Links */}
        <nav aria-label="Footer Navigation">
          <h3 className="text-xs font-semibold text-slate-900">
            Quick Links
          </h3>

          <ul className="mt-2 space-y-1 text-[10px] text-slate-600">
            {[
              {
                name: "Home",
                href: "/",
              },
            {
                name: "Gallery",
                href: "/gallery",
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
                  className="group flex min-h-[12px] items-center gap-2
px-2 py-2 transition hover:text-amber-600"

                >
                  <FaArrowRight className="text-[8px] opacity-60 transition group-hover:translate-x-1" />

                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Products */}
        <div>
          <h3 className="text-xs font-semibold text-slate-900">
            Products
          </h3>

          <ul className="mt-2 space-y-1 text-[10px] text-slate-600">
            {[
              {
                name: "Milk Analyzers",
                href: "/milk-analyzer-machines",
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
              <li
                key={item.name}
                className="flex items-center gap-1"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />

                <Link
                  href={item.href}
                  title={item.name}
                  aria-label={item.name}
                  className="inline-flex min-h-[12px] items-center py-2 transition hover:text-amber-600"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <address className="not-italic">
          <h3 className="text-xs font-semibold text-slate-900">
            Contact Information
          </h3>

          <div className="mt-2 space-y-2 text-[10px]">
            {/* Address */}
            <div className="flex gap-1">
              <div className="mt-1 text-cyan-600">
                <FaMapMarkerAlt className="text-cyan-600" />
              </div>

             <p className="leading-4 text-slate-600">
                Shop No. B-42, Upper Side,
                Rohit Udhyog Market,
                Near HP Gas Agency,Shiv Circle Road,
                Sri Ganganagar,Rajasthan – 335001,
                India
              </p>
            </div>

            {/* Phone */}
               <div className="flex items-center gap-1">
              <FaPhoneAlt className="text-cyan-600" />

             <a
  href="tel:+917375082341"
  className="inline-flex min-h-[44px] items-center py-2 transition hover:text-amber-700"
>
                +91 73750 82341
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-1">
              <FaEnvelope className="text-cyan-600" />

              <a
                href="mailto:choudharydairy@outlook.com"
                className="inline-flex min-h-[44px] items-center py-2 transition hover:text-amber-700"
              >
                choudharydairy@outlook.com
              </a>
            </div>
          </div>
        </address>
      </div>

      {/* Copyright */}
     <div className="relative border-t border-amber-200">
        <div className="mx-auto flex flex-col items-center justify-between gap-1 px-2 py-2 text-center text-[10px] text-slate-600 md:flex-row">
          <p>
            © 2026 Jai Shree Equipment Dairy.
            All Rights Reserved.
          </p>

          <p>
            Trusted Dairy Equipment & Milk Testing Equipment Supplier
            in Rajasthan, India
          </p>
        </div>
      </div>

      {/* Developer Bar */}
      <div className="relative border-t border-amber-200 bg-amber-100 px-2 py-1 text-[10px] text-slate-700">
        <div className="mx-auto flex flex-col items-center justify-between gap-1 md:flex-row">
          <span>
            Built for speed, SEO & modern web performance
          </span>

          <Link
            href="https://developerchoudhary.vercel.app/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="flex min-h-[44px] items-center gap-2 px-2 py-2 transition hover:text-amber-700"
          >
            <span>Made with</span>

            <FcLike />

            <span>by Developer Choudhary</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}