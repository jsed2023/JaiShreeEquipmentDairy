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
      className="relative mt-24 overflow-hidden border-t border-white/10 bg-black text-slate-300"
      aria-label="Website Footer"
    >
      {/* ===== BACKGROUND EFFECT ===== */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 blur-3xl" />

      {/* ===== MAIN FOOTER ===== */}
      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 md:grid-cols-2 xl:grid-cols-4">
        {/* ===== BRAND ===== */}
        <div>
          <Link
            href="/"
            aria-label="Jai Shree Equipment Dairy Home"
          >
            <h2 className="text-3xl font-bold text-white">
              Jai Shree Equipment Dairy
            </h2>
          </Link>

          {/* ===== SEO CONTENT ===== */}
          <p className="mt-6 text-sm leading-7 text-slate-400">
            Jai Shree Equipment Dairy is a trusted
            dairy equipment & milk testing machine
            supplier in Rajasthan providing milk
            analyzer machines, milk testing
            equipment, automatic milk collection
            systems, weighing scale machines,
            cream separator machines, ultrasonic
            milk stirrers, dairy farming equipment,
            and dairy automation solutions in
            Sri Ganganagar, Bikaner, Hanumangarh,
            Suratgarh, and nearby Rajasthan areas
            since 2020.
          </p>

          {/* ===== SOCIAL MEDIA ===== */}
          <div className="mt-8 flex items-center gap-4">
            <a
              href="https://www.facebook.com/Jaishreeequipmentdairy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg transition hover:border-blue-500 hover:text-blue-500"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.youtube.com/@Jaishreeequipmentdairy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg transition hover:border-red-500 hover:text-red-500"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* ===== QUICK LINKS ===== */}
        <nav aria-label="Footer Navigation">
          <h3 className="text-xl font-semibold text-white">
            Quick Links
          </h3>

          <ul className="mt-6 space-y-4 text-sm">
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
                name:
                  "Automatic Milk Collection System",
                href:
                  "/automatic-milk-collection-system",
              },

              {
                name: "Services",
                href: "/services",
              },

              {
                name: "Blogs",
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
                  className="group flex items-center gap-2 transition hover:text-cyan-400"
                >
                  <FaArrowRight className="text-xs opacity-60 transition group-hover:translate-x-1" />

                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* ===== PRODUCTS ===== */}
        <div>
          <h3 className="text-xl font-semibold text-white">
            Dairy Equipment Products
          </h3>

          <ul className="mt-6 space-y-4 text-sm text-slate-400">
            {[
              {
                name: "Milk Analyzer Machine",
                href: "/milk-testing-equipment",
              },

              {
                name: "Milk Testing Equipment",
                href: "/milk-testing-equipment",
              },

              {
                name:
                  "Automatic Milk Collection System",
                href:
                  "/automatic-milk-collection-system",
              },

              {
                name:
                  "Milk Cream Separator Machine",
                href: "/dairy-equipment",
              },

              {
                name:
                  "Weighing Scale Machine",
                href: "/automatic-milk-collection-system",
              },

              {
                name:
                  "Ultrasonic Milk Stirrer",
                href:
                  "/automatic-milk-collection-system",
              },

              {
                name:
                  "Dairy Farming Equipment",
                href: "/dairy-equipment",
              },

              {
                name:
                  "Dairy Automation Systems",
                href:
                  "/automatic-milk-collection-system",
              },
            ].map((item) => (
              <li
                key={item.name}
                className="flex items-center gap-2"
              >
                <span className="h-2 w-2 rounded-full bg-cyan-400" />

                <Link
                  href={item.href}
                  title={item.name}
                  aria-label={item.name}
                  className="transition hover:text-cyan-400"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ===== CONTACT INFO ===== */}
        <address className="not-italic">
          <h3 className="text-xl font-semibold text-white">
            Contact Information
          </h3>

          <div className="mt-6 space-y-6 text-sm">
            {/* Address */}
            <div className="flex gap-4">
              <div className="mt-1 text-cyan-400">
                <FaMapMarkerAlt />
              </div>

              <p className="leading-7 text-slate-400">
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
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-cyan-400" />

              <a
                href="tel:+917375082341"
                className="transition hover:text-white"
              >
                +91 73750 82341
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-cyan-400" />

              <a
                href="mailto:choudharydairy@outlook.com"
                className="transition hover:text-white"
              >
                choudharydairy@outlook.com
              </a>
            </div>
          </div>
        </address>
      </div>

      {/* ===== COPYRIGHT ===== */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-center text-sm text-slate-500 md:flex-row">
          <p>
            © 2026 Jai Shree Equipment Dairy.
            All Rights Reserved.
          </p>

          <p>
            Trusted Dairy Equipment & Milk Testing
            Machine Supplier in Rajasthan, India
          </p>
        </div>
      </div>

      {/* ===== DEVELOPER BAR ===== */}
      <div className="relative border-t border-blue-500/20 bg-blue-600/90 px-4 py-3 text-xs text-white backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 md:flex-row">
          <span>
            Built for speed, SEO & modern web
            performance
          </span>

          <Link
            href="https://developerchoudhary.vercel.app/"
            target="_blank"
            className="flex items-center gap-1 transition hover:text-blue-200"
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