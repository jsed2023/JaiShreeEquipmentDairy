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
      <div className="flex flex-wrap justify-center gap-8">
        {automaticMilkCollectionSystem.map((product) => {
          return (
            <Link
              href={`/automatic-milk-collection-system/${product.url}`}
              key={product.id}
              className="flex flex-col w-fit gap-y-6 dark:bg-[#27272a] bg-[rgb(244,244,245)] sm:p-4 py-4 rounded-md hover:shadow-xl transition"
            >
              <figure
                id={product.name}
                className="flex flex-col justify-center items-center dark:bg-[#1a1a1c] bg-[rgb(214,214,217)] p-6 pb-4 rounded-lg"
              >
                <Image
                  src={cld(product.images[0].src)}
                  isBlurred
                  alt={product.name}
                  width={400}
                  height={240}
                  className="object-contain h-[15rem] w-auto"
                  loading="lazy"
                />
                <figcaption className="text-center mt-2 font-semibold">
                  {product.name}
                </figcaption>
              </figure>
            </Link>
          );
        })}
      </div>

    </div>
  );
}