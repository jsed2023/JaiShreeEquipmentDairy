"use client";

import { Image } from "@nextui-org/react";
import { MilkAnalyzerMachines } from "@/config/products";
import Link from "next/link";
import { cld } from "@/utils/cloudinary";
import MilkAnlayzerMachinesShowcase from "@/components/MilkAnlayzerMachinesShowcase";
export default function MilkAnlayzerMachinesPage() {
  return (
    <div>
      <div
        id="milk-analyzer-machines"
        className="sm:mt-10 mt-4 flex flex-col gap-y-8 mb-10"
      >
        <section>
             <div className="bg-sky-100 dark:bg-sky-900 text-sky-900 dark:text-sky-100 py-4xl">
          <h1 className="text-center font-bold underline sm:text-4xl text-lg
             bg-clip-text text-transparent animate-title-gradient">
            Milk Analyzer Machines
          </h1></div>
          <div className="flex justify-center my-5">
                      <Image
                              src={cld("Milk_Analyzer_Machines_Dairy_Testing_Solutions.webp")}
                              isBlurred
                              alt="Milk_Analyzer_Machines_Dairy_Testing_Solutions"
                              className="flex justify-center my-5"
                              width={1000}
                              height={400}
                              id="Milk_Analyzer_Machines_Dairy_Testing_Solutions"
                              loading="lazy"
                            />
                            </div>
        </section>
<section className="flex flex-col gap-y-4 dark:bg-[#27272a] bg-[rgb(244,244,245)] rounded-md sm:px-8 px-4 py-8">
  <p className="dark:text-gray-400 text-stone-700">
    <b>Jai Shree Equipment Dairy</b> in Sri Ganganagar offers a wide range of
    advanced <b>Milk Analyzer Machines</b> and dairy testing equipment designed
    for dairy farms, milk collection centers, and dairy processing units. Our
    modern machines provide accurate and reliable milk quality analysis,
    including fat testing, SNF measurement, density testing, protein analysis,
    and adulteration detection to help maintain high-quality dairy standards.

    We supply high-performance milk analyzer machines with user-friendly
    interfaces, fast testing capabilities, and durable construction for daily
    industrial and commercial use. Whether you require an <b>Advance Milk Analyzer</b>,
    <b>Ekomilk Ultra Analyzer</b>, or complete milk testing solutions, we provide
    trusted products with sales, service, repair, calibration, and genuine
    spare parts support.

    With a strong commitment to quality, accuracy, and customer satisfaction,
    <b>Jai Shree Equipment Dairy</b> is your trusted supplier for milk analyzer
    machines and dairy equipment in Rajasthan and across India.
  </p>
</section>
        <MilkAnlayzerMachinesShowcase />
        <div className="flex flex-wrap justify-center gap-8">
          {MilkAnalyzerMachines.map((product) => {
            return (
              <Link
                href={`/milk-analyzer-machines/${product.url}`}
                key={product.id}
                className="flex flex-col w-fit h-fit gap-y-10 dark:bg-[#27272a] bg-[rgb(244,244,245)] sm:p-4 py-4 rounded-md"
              >
                <figure
                  id={product.name}
                  className="text-center font-bold underline sm:text-4xl text-lg
                  bg-clip-text text-transparent animate-title-gradient">
                  <Image
                    src={cld(product.images[0].src)}
                    isBlurred
                    alt={product.url}
                    width={400}
                    height={240}
                    className="object-contain h-[15rem] w-auto"
                    loading="lazy"
                  />
                  <figcaption className="text-center mt-5 text-base">
                    {product.name}
                  </figcaption>
                </figure>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
