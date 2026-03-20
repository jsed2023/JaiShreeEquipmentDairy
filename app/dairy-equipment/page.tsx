"use client";

import { Image } from "@nextui-org/react";
import { creamSeparatorMachine, milkingMachine } from "@/config/products";
import Link from "next/link";
import { cld } from "@/utils/cloudinary";
import DairyEquipmentsShowcase from "@/components/DairyEquipmentsShowcase";
export default function DairyEquipmentsPage() {
  return (
    <div>
      <div
        id="automatic-milk-collection-system"
        className="sm:mt-10 mt-4 flex flex-col gap-y-8 mb-10"
      >
        <section>
          <div className="mt-4 text-sm sm:text-base text-stone-600 dark:text-white/90 border rounded-lg p-4 max-h-100 space-y-3">
          <h1 className="text-center font-bold underline sm:text-4xl text-lg
             bg-clip-text text-transparent animate-title-gradient">
            Dairy Equipments
          </h1></div> 
          <div className="flex justify-center my-5">
                      <Image
                              src={cld("Dairy_Equipment_Machine.png")}
                              isBlurred
                              alt="Dairy_Equipment_Machine"
                              className="flex justify-center my-5"
                              width={1000}
                              height={300}
                              id="Dairy_Equipment_Machine"
                              loading="lazy"
                            />
                            </div>
        </section>
        <section className="flex flex-col gap-y-4 dark:bg-[#27272a] bg-[rgb(244,244,245)] rounded-md sm:px-8 px-4 py-8">
          <p className="dark:text-gray-400 text-stone-700 flex flex-col gap-3">
            <span>
              <b>Jai Shree Equipment Dairy</b>, a leading dairy equipment
              supplier in Sri Ganganagar, offers a comprehensive range of
              high-quality dairy equipment, including the Paras milk cream
              separator machine and the Vansun milking machine. They are
              committed to providing their customers with the latest technology
              and innovative solutions to improve their dairy operations.
            </span>
            <span>
              In addition to supplying dairy equipment, Jai Shree Equipment
              Dairy also provides a wide range of after-sales services,
              including installation, commissioning, training, and maintenance.
              They have a team of experienced and knowledgeable technicians who
              are always available to assist customers with any technical issues
              or queries.
            </span>
            <span>
              <b>Jai Shree Equipment Dairy</b> is a trusted and reliable partner
              for dairy farmers and processors in Sri Ganganagar and the
              surrounding areas. They are dedicated to providing their customers
              with the best possible products and services to help them achieve
              their business goals
            </span>
          </p>
        </section>
         <DairyEquipmentsShowcase />
     <div className="mt-4 text-sm sm:text-base text-stone-600 dark:text-white/90 border rounded-lg p-4 max-h-100 space-y-3">    
        <h1 className="text-center font-bold underline sm:text-2xl text-lg
             bg-clip-text text-transparent animate-title-gradient">
            Paras Milk Cream Separator Machines
          </h1></div>
        <section className="flex flex-wrap justify-center gap-8">
          {creamSeparatorMachine.map((product) => {
            return (
              <Link
                href={`/dairy-equipment/${product.url}`}
                key={product.id}
                className="flex flex-col w-fit h-fit gap-y-10 dark:bg-[#27272a] bg-[rgb(244,244,245)] sm:p-4 py-4 rounded-md"
              >
                <figure
                  id={product.name}
                  className="flex flex-col justify-center items-center w-fit dark:bg-[#1a1a1c] bg-[rgb(214,214,217)] p-6 pb-4 rounded-lg    bg-clip-text text-transparent animate-title-gradient"
                >
                  <Image
                    src={cld(product.images[0].src)}
                    isBlurred
                    alt={product.url}
                    width={400}
                    height={240}
                    className="object-contain h-[15rem] w-auto"
                    loading="lazy"
                  />
                  <figcaption className="text-center mt-2">
                    {product.name}
                  </figcaption>
                </figure>
              </Link>
            );
          })}
        </section>
      </div>
      <div
        id="automatic-milk-collection-system"
        className="sm:mt-10 mt-4 flex flex-col gap-y-8 mb-10"
      >
        <section>
          <div className="mt-4 text-sm sm:text-base text-stone-600 dark:text-white/90
          border border-stone-200 dark:border-zinc-700 rounded-lg p-4 max-h-[400px] space-y-3
       bg-white dark:bg-zinc-900/80 backdrop-blur shadow-sm dark:shadow-lg">
          <h1 className="text-center font-bold underline sm:text-2xl text-lg
             bg-clip-text text-transparent animate-title-gradient">      
            Milking Machines
          </h1></div>
        </section>
        <section className="flex flex-col gap-y-4 dark:bg-[#27272a] bg-[rgb(244,244,245)] rounded-md sm:px-8 px-4 py-8">
          <p className="dark:text-gray-400 text-stone-700 flex flex-col gap-3">
            Jai Shree Equipment Dairy, with its presence in Sri Ganganagar,
            Hanumangarh, Bikaner, and Anupgarh, offers a comprehensive range of
            milking machines designed to optimize your dairy operations. Whether
            youre a small-scale farmer or running a large-scale dairy, we have
            the perfect solution to meet your specific needs.
          </p>
        </section>
        <section className="flex flex-wrap justify-center gap-8">
          {milkingMachine.map((product) => {
            return (
              <Link
                href={`/dairy-equipment/${product.url}`}
                key={product.id}
                className="flex flex-col w-fit h-fit gap-y-10 dark:bg-[#27272a] bg-[rgb(244,244,245)] sm:p-4 py-4 rounded-md"
              >
                <figure
                  id={product.name}
                  className="flex flex-col justify-center items-center w-fit dark:bg-[#1a1a1c] bg-[rgb(214,214,217)] p-6 pb-4 rounded-lg
                  bg-clip-text text-transparent animate-title-gradient"
                >
                  <Image
                    src={product.images[0].src}
                    isBlurred
                    alt={product.url}
                    className="w-auto h-[15rem]"
                    loading="lazy"
                  />
                  <figcaption className="text-center mt-2">
                    {product.name}
                  </figcaption>
                </figure>
              </Link>
            );
          })}
        </section>
      </div>
    </div>
  );
}
