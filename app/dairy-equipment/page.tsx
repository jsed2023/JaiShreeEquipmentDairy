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
        id="dairy-equipment"
        className="sm:mt-10 mt-4 flex flex-col gap-y-8 mb-10"
      >
        <section>
          <div className="mt-4 text-sm sm:text-base text-stone-600 dark:text-white/90 border rounded-lg p-4 max-h-100 space-y-3">
          <h1 className="text-center font-bold underline sm:text-4xl text-lg
             bg-clip-text text-transparent animate-title-gradient">
            Dairy Equipment in Sri Ganganagar, Rajasthan, India 
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
    
   <section>
          <div className="mt-4 text-sm sm:text-base text-stone-600 dark:text-white/90
          border border-stone-200 dark:border-zinc-700 rounded-lg p-4 max-h-[400px] space-y-3
       bg-white dark:bg-zinc-900/80 backdrop-blur shadow-sm dark:shadow-lg">
          <h1 className="text-center font-bold underline sm:text-2xl text-lg
             bg-clip-text text-transparent animate-title-gradient">      
            Paras Milk Cream Separator Machines
          </h1></div>
        </section>
  
<section className="flex flex-col gap-y-4 dark:bg-[#27272a] bg-[rgb(244,244,245)] rounded-md sm:px-8 px-4 py-8">
  <p className="dark:text-gray-400 text-stone-700 flex flex-col gap-4 leading-8">
    <span>
      <b>Paras Milk Cream Separator Machines</b> from <b>Jai Shree Equipment Dairy</b> are
      designed to deliver efficient cream separation with high accuracy and
      excellent performance. Built using premium-quality materials, these
      machines are ideal for dairy farms, milk collection centers, and dairy
      processing units.
    </span>

    <span>
      Our cream separator machines ensure maximum cream extraction while
      maintaining the natural quality of milk. They are easy to operate,
      energy-efficient, low maintenance, and available in multiple capacities
      to meet the needs of both small and large dairy businesses.
    </span>

    <span>
      We proudly supply and provide after-sales support across
      <b> Sri Ganganagar, Hanumangarh, Bikaner, Anupgarh, Suratgarh,
      Raisinghnagar, Padampur</b>, and nearby areas. Our experienced team
      offers installation, maintenance, spare parts, and technical assistance
      to ensure smooth and reliable dairy operations.
    </span>
  </p>
</section>
<section className="py-6">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {creamSeparatorMachine.map((product) => (
      <Link
        href={`/dairy-equipment/${product.url}`}
        key={product.id}
         className="group overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
      >
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

         <div className="p-5">
          <h3 className="text-xl font-bold text-center text-zinc-900 dark:text-white line-clamp-2
        bg-clip-text text-transparent animate-title-gradient">
            {product.name}
          </h3>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-3 line-clamp-3">
            {product.smallDesc}
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
  <p className="dark:text-gray-400 text-stone-700 flex flex-col gap-4 leading-8">
    <span>
      <b>Milking Machines</b> from <b>Jai Shree Equipment Dairy</b> are
      designed to make dairy farming faster, cleaner, and more efficient.
      Our machines ensure hygienic milk collection while reducing manual
      effort and improving the overall health and comfort of dairy animals.
    </span>

    <span>
      We offer high-quality milking machines suitable for cows and buffaloes,
      available in different capacities for small farms, dairy cooperatives,
      and commercial dairy businesses. These machines are easy to operate,
      energy-efficient, durable, and built for long-lasting performance with
      minimal maintenance.
    </span>

    <span>
      Jai Shree Equipment Dairy proudly supplies premium milking machines and
      provides complete installation, maintenance, spare parts, and technical
      support across <b>Sri Ganganagar, Hanumangarh, Bikaner, Anupgarh,
      Suratgarh, Raisinghnagar, Padampur</b>, and nearby regions. Our goal is
      to help dairy farmers increase productivity while maintaining the highest
      standards of milk quality and hygiene.
    </span>
  </p>
</section>
        <section className="py-6">
  
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {milkingMachine.map((product) => (
      <Link
        href={`/dairy-equipment/${product.url}`}
        key={product.id}
        className="group overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
      >
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

        <div className="p-5">
          <h3 className="flex flex-col justify-center items-center w-fit dark:bg-[#1a1a1c] bg-[rgb(214,214,217)] p-6 pb-4 rounded-lg
                  bg-clip-text text-transparent animate-title-gradient">
            {product.name}
          </h3>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-3 line-clamp-3">
            {product.smallDesc}
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
