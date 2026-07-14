"use client";

import { Image } from "@nextui-org/react";
import { MilkTestingEquipment } from "@/config/products";
import Link from "next/link";
import { cld } from "@/utils/cloudinary";
import MilkTestingEquipmentsShowcase from "@/components/MilkTestingEquipmentsShowcase";
export default function MilkTestingEquipmentsPage() {
  return (
    <div>
      <div
        id="milk-testing-equipment"
        className="sm:mt-10 mt-4 flex flex-col gap-y-8 mb-10"
      >
        <section>
             <div className="bg-sky-100 dark:bg-sky-900 text-sky-900 dark:text-sky-100 py-4xl">
          <h1 className="text-center font-bold underline sm:text-4xl text-lg
             bg-clip-text text-transparent animate-title-gradient">
            Milk Testing & Quality Analyzes Equipments
          </h1></div>
          <div className="flex justify-center my-5">
                      <Image
                              src={cld("Milk_Testing_Equipment_Machine.png")}
                              isBlurred
                              alt="Milk_Testing_Equipment_Machine"
                              className="flex justify-center my-5"
                              width={1000}
                              height={300}
                              id="Milk_Testing_Equipment_Machine"
                              loading="lazy"
                            />
                            </div>
        </section>
        <section className="flex flex-col gap-y-4 dark:bg-[#27272a] bg-[rgb(244,244,245)] rounded-md sm:px-8 px-4 py-8">
          <p className="dark:text-gray-400 text-stone-700">
            <b>Jai Shree Equipment Dairy</b> in Sri Ganganagar offers a comprehensive
            range of milk testing equipment and machines designed to meet the
            needs of dairy farmers and processors. Our state-of-the-art
            technology ensures accurate and reliable testing of milk quality,
            helping you maintain high standards and comply with industry
            regulations. Each machine is engineered for efficiency, featuring
            user-friendly interfaces and robust construction to withstand the
            rigors of daily use. Whether you need to measure fat content,
            protein levels, our equipment provides precise results that you 
            can trust. With a commitment to quality and
            customer satisfaction, Jai Shree Equipment Dairy is your go-to
            source for all your milk testing needs, ensuring that you can
            deliver the best products to your customers.
          </p>
        </section>
        
<MilkTestingEquipmentsShowcase />

{/* PRODUCTS HEADING */}
<section>
  <div
    className="mt-4 text-sm sm:text-base text-stone-600 dark:text-white/90
    border border-stone-200 dark:border-zinc-700 rounded-lg p-4
    bg-white dark:bg-zinc-900/80 backdrop-blur shadow-sm dark:shadow-lg"
  >
    <h2
      className="text-center font-bold underline sm:text-2xl text-lg
      bg-clip-text text-transparent animate-title-gradient"
    >
      Our Milk Testing Equipment
    </h2>
  </div>
</section>

<section className="flex flex-col gap-y-4 dark:bg-[#27272a] bg-[rgb(244,244,245)] rounded-xl sm:px-8 px-4 py-8">
  <p className="dark:text-gray-400 text-stone-700 flex flex-col gap-4 leading-8">
    <span>
      <b>Jai Shree Equipment Dairy</b> offers a complete range of
      <b> Milk Testing Equipment</b> designed for dairy farms, milk collection
      centers, dairy cooperatives, and milk processing plants. Our equipment
      ensures accurate milk quality testing, helping maintain hygiene,
      transparency, and industry standards.
    </span>

    <span>
      We provide premium dairy testing instruments for measuring
      <b> Fat, SNF, Lactometer Reading (CLR), Acidity, Density, Protein,
      Added Water, and other essential milk quality parameters.</b>
      Our equipment is easy to operate, highly accurate, durable, and suitable
      for continuous commercial use.
    </span>

    <span>
      Jai Shree Equipment Dairy supplies high-quality milk testing equipment
      along with installation, calibration, repair, spare parts, and technical
      support across <b>Sri Ganganagar, Hanumangarh, Bikaner, Anupgarh,
      Suratgarh, Raisinghnagar, Padampur</b>, and nearby regions. We are
      committed to providing reliable dairy testing solutions for modern dairy
      businesses.
    </span>
  </p>
</section>

{/* PRODUCTS */}
<section className="py-8">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {MilkTestingEquipment.map((product) => (
      <Link
        href={`/milk-testing-equipment/${product.url}`}
        key={product.id}
        className="group overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
      >
        <div className="bg-gray-100 dark:bg-zinc-800 h-72 flex justify-center items-center p-6">
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

          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-3 line-clamp-3 text-center">
           {product.smallDesc}
          </p>

          <div className="mt-6 flex gap-3">
            <span className="flex-1 bg-sky-600 text-white text-center py-2 rounded-xl font-semibold hover:bg-sky-700 transition">
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
