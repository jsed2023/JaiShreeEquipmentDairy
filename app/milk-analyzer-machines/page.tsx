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
        
    {/* PRODUCTS */}
      <section>
          <div className="mt-4 text-sm sm:text-base text-stone-600 dark:text-white/90
          border border-stone-200 dark:border-zinc-700 rounded-lg p-4 max-h-[400px] space-y-3
       bg-white dark:bg-zinc-900/80 backdrop-blur shadow-sm dark:shadow-lg">
          <h1 className="text-center font-bold underline sm:text-2xl text-lg
             bg-clip-text text-transparent animate-title-gradient">      
           Our Milk Analyzer Machines
          </h1></div>
        </section>
<section className="flex flex-col gap-y-4 dark:bg-[#27272a] bg-[rgb(244,244,245)] rounded-xl sm:px-8 px-4 py-8">
  <p className="dark:text-gray-400 text-stone-700 flex flex-col gap-4 leading-8">
    <span>
      <b>Jai Shree Equipment Dairy</b> offers a complete range of
      <b> Milk Analyzer Machines</b> designed for dairy farms, milk collection
      centers, dairy cooperatives, and milk processing plants. Our advanced
      analyzers provide fast, accurate, and reliable testing for milk quality,
      helping maintain the highest industry standards.
    </span>

    <span>
      Our machines accurately measure <b>Fat, SNF, Protein, Density (CLR),
      Added Water, Lactose, and Temperature</b> within seconds. Featuring
      user-friendly operation, high precision, and durable construction,
      they are ideal for daily commercial use and continuous dairy operations.
    </span>

    <span>
      Jai Shree Equipment Dairy supplies premium Milk Analyzer Machines along
      with installation, calibration, repair, spare parts, and after-sales
      support across <b>Sri Ganganagar, Hanumangarh, Bikaner, Anupgarh,
      Suratgarh, Raisinghnagar, Padampur</b>, and nearby regions. We are
      committed to delivering reliable dairy testing solutions that improve
      quality control and operational efficiency.
    </span>
  </p>
</section>
<section className="py-6">
 
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {MilkAnalyzerMachines.map((product) => (
      <Link
        href={`/milk-analyzer-machines/${product.url}`}
        key={product.id}
        className="group overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
      >
        <div className="bg-gray-100 dark:bg-zinc-800 h-72 flex justify-center items-center p-6 overflow-hidden">
          <Image
            src={cld(product.images[0].src)}
            alt={product.name}
            width={260}
            height={260}
            loading="lazy"
            className="object-contain transition duration-300 group-hover:scale-110"
          />
        </div>
 <div className="p-5">
          <h3 className="text-xl font-bold text-center text-zinc-900 dark:text-white line-clamp-2
        bg-clip-text text-transparent animate-title-gradient">
            {product.name}
          </h3>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-3 line-clamp-3">
            Advanced milk analyzer for accurate Fat, SNF, Protein, CLR,
            Water, and milk quality testing with reliable performance.
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
    </div>
  );
}
