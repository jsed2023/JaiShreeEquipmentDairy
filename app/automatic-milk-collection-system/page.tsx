"use client";

import { Image } from "@nextui-org/react";
import { automaticMilkCollectionSystem } from "@/config/products";
import Link from "next/link";
import AMCSShowcase from "@/components/AMCSShowcase";
import { cld } from "@/utils/cloudinary";

export default function AutomaticMilkCollectionSystemPage() {
  return (
    <div className="sm:mt-10 mt-4 flex flex-col gap-y-10 mb-10">

      {/* HERO */}
      <section className="text-center">
        <div className="bg-sky-100 dark:bg-sky-900 text-sky-900 dark:text-sky-100 py-8 rounded-lg">
          <h1 className="font-bold sm:text-4xl text-xl">
            AMCS – Automatic Milk Collection System
          </h1>
        </div>

        <div className="flex justify-center my-6">
          <Image
            src={cld("Automatic_Milk_Collection_System.jpg")}
            isBlurred
            alt="Automatic Milk Collection System"
            width={1000}
            height={300}
            loading="lazy"
            className="rounded-lg"
          />
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="dark:bg-[#27272a] bg-[rgb(244,244,245)] rounded-xl sm:px-8 px-4 py-8">
        <p className="dark:text-gray-400 text-stone-700 leading-relaxed">
          Upgrade your dairy farm with the Automatic Milk Collection System (AMCS) from
          Jai Shree Equipment Dairy. Serving farmers in Sri Ganganagar, Bikaner,
          Hanumangarh, and Anupgarh, our AMCS ensures hygienic milk collection,
          accurate measurement, and reduced labor costs.
        </p>
      </section>

      {/* FEATURES */}
      <section className="bg-[rgb(244,244,245)] dark:bg-[#27272a] p-8 rounded-xl">
        <h2 className="text-center font-bold underline sm:text-2xl text-lg mb-8">
          Automatic Milk Collection System Features
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 border border-zinc-200 dark:border-zinc-700">
            <h3 className="font-bold text-lg mb-2">⚡ Instant Milk Analysis</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">
              Integrates with Ultrasonic Milk Analyzers (Ekomilk Ultra, Advance Milk Analyzer)
              to test Fat, SNF, Water content and Density (CLR) in less than 60 seconds.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 border border-zinc-200 dark:border-zinc-700">
            <h3 className="font-bold text-lg mb-2">📊 Data Processing Unit</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">
              Centralized Dairy Khata system that captures milk weight and quality data automatically.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 border border-zinc-200 dark:border-zinc-700">
            <h3 className="font-bold text-lg mb-2">⚖️ Electronic Weighing</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">
              Connects with digital weighing scales (60kg–200kg capacity) for instant milk quantity recording.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 border border-zinc-200 dark:border-zinc-700">
            <h3 className="font-bold text-lg mb-2">🖨️ Instant Slip Printing</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">
              Prints receipt instantly showing milk weight, fat %, SNF %, and payment details.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-lg md:col-span-2 border border-zinc-200 dark:border-zinc-700">
            <h3 className="font-bold text-lg mb-2">📍 Service Areas</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">
              Sri Ganganagar, Bikaner, Hanumangarh, Anupgarh, Raisinghnagar,
              Suratgarh, Padampur and Pilibanga.
            </p>
          </div>

        </div>
      </section>

      {/* SHOWCASE */}
      <AMCSShowcase />

    {/* PRODUCTS */}
  <section>
          <div className="mt-4 text-sm sm:text-base text-stone-600 dark:text-white/90
          border border-stone-200 dark:border-zinc-700 rounded-lg p-4 max-h-[400px] space-y-3
       bg-white dark:bg-zinc-900/80 backdrop-blur shadow-sm dark:shadow-lg">
          <h1 className="text-center font-bold underline sm:text-2xl text-lg
             bg-clip-text text-transparent animate-title-gradient">      
            Our AMCS Products
          </h1></div>
        </section>
<section className="flex flex-col gap-y-4 dark:bg-[#27272a] bg-[rgb(244,244,245)] rounded-md sm:px-8 px-4 py-8">
  <p className="dark:text-gray-400 text-stone-700 flex flex-col gap-4 leading-8">
    <span>
      <b>Automatic Milk Collection System (AMCS)</b> by <b>Jai Shree Equipment Dairy</b>
      is an advanced solution designed to simplify and automate the milk
      collection process for dairy farms, milk collection centers, and dairy
      cooperative societies. It ensures fast, accurate, and transparent milk
      procurement while minimizing manual errors.
    </span>

    <span>
      Our AMCS integrates digital weighing scales, milk analyzers, billing
      software, and thermal printers into a single system. It instantly
      measures milk quantity, fat percentage, SNF, density (CLR), and generates
      detailed payment receipts, making milk collection faster, more reliable,
      and completely computerized.
    </span>

    <span>
      Jai Shree Equipment Dairy provides complete installation, training,
      maintenance, spare parts, and technical support for Automatic Milk
      Collection Systems across <b>Sri Ganganagar, Hanumangarh, Bikaner,
      Anupgarh, Suratgarh, Raisinghnagar, Padampur</b>, and nearby regions.
      Our AMCS solutions help dairy businesses improve efficiency, maintain
      transparency, and deliver accurate records for every milk collection.
    </span>
  </p>
</section>

<section className="py-6">
 
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {automaticMilkCollectionSystem.map((product) => (
      <Link
        href={`/automatic-milk-collection-system/${product.url}`}
        key={product.id}
        className="group overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
      >
        {/* Image */}
        <div className="bg-gray-100 dark:bg-zinc-800 p-6 flex justify-center items-center h-72 overflow-hidden">
          <Image
            src={cld(product.images[0].src)}
            alt={product.name}
            width={260}
            height={260}
            loading="lazy"
            className="object-contain transition duration-300 group-hover:scale-110"
          />
        </div>

        {/* Content */}
         <div className="p-5">
          <h3 className="text-xl font-bold text-center text-zinc-900 dark:text-white line-clamp-2
        bg-clip-text text-transparent animate-title-gradient">
            {product.name}
          </h3>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-3 line-clamp-3">
            High-quality Automatic Milk Collection System designed for
            accurate milk testing, weighing, billing and reliable dairy
            operations.
          </p>

          <div className="mt-6 flex gap-3">
            <span className="flex-1 bg-sky-600 text-white text-center py-2 rounded-xl font-semibold group-hover:bg-sky-700 transition">
              View Details
            </span>

            <span className="flex-1 border border-sky-600 text-sky-600 text-center py-2 rounded-xl font-semibold hover:bg-sky-600 hover:text-white transition">
              Enquire
            </span>
          </div>
        </div>
      </Link>
    ))}
  </div>
</section>
    </div>
  );
}