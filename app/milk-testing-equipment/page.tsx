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
        <div className="flex flex-wrap justify-center gap-8">
          {MilkTestingEquipment.map((product) => {
            return (
              <Link
                href={`/milk-testing-equipment/${product.url}`}
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
