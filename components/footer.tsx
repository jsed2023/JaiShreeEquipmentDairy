"use client";

import React from "react";
import Link from "next/link";
import { FcLike } from "react-icons/fc";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-0 mt-24">

      {/* ===== MAIN FOOTER ===== */}
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">
            Jai Shree Equipment Dairy
          </h3>
          <p className="text-sm leading-relaxed">
            Trusted dairy equipment supplier in Rajasthan providing high-quality
            dairy machinery, milk testing equipment, and AMCS systems since 2020.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/dairy-equipment" className="hover:text-white">Dairy Equipment</Link></li>
            <li><Link href="/milk-testing-equipment" className="hover:text-white">Milk Testing Equipment</Link></li>
            <li><Link href="/automatic-milk-collection-system" className="hover:text-white">AMCS System</Link></li>
          </ul>
        </div>

        {/* PRODUCTS */}
        <div>
          <h4 className="text-white font-semibold mb-3">Products</h4>
          <ul className="space-y-2 text-sm">
            <li>Milk Analyzer Machine</li>
            <li>Milk Cream Separator Machine</li>
            <li>Weighing Machine</li>
            <li>Ultrasonic Milk Stirrer</li>
            <li>Milk collection system</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-white font-semibold mb-3">Contact Us</h4>
          <ul className="space-y-2 text-sm">
            <li>📍 Rajasthan, India</li>
            <li>
              📞{" "}
              <a href="tel:+918112294173" className="hover:text-white">
                +91 81122 94173
              </a>
            </li>
            <li>
              ✉️{" "}
              <a
                href="mailto:choudharydairy@outlook.com"
                className="hover:text-white"
              >
                choudharydairy@outlook.com
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* ===== COPYRIGHT ===== */}
      <div className="border-t border-slate-700 mt-10 pt-6 text-center text-sm text-slate-400 px-4">
        <p>© 2026 Jai Shree Equipment Dairy. All Rights Reserved.</p>
        <p className="mt-1">
          Trusted Dairy Equipment Supplier in Rajasthan, India | Since 2020
        </p>
      </div>

      {/* ===== DEVELOPER BAR ===== */}
      <div className="w-full flex max-sm:flex-col max-sm:items-center gap-1 text-center justify-between px-3 py-2 bg-blue-700 text-white text-xs mt-6">
        
        <span>
          Built for performance & SEO
        </span>

        <Link
          href="https://developerchoudhary.vercel.app/"
          target="_blank"
          className="flex items-center gap-1 hover:text-blue-200 transition"
        >
          <span>Made with</span>
          <FcLike className="text-sm" />
          <span>by Developer Choudhary</span>
        </Link>

      </div>

    </footer>
  );
}