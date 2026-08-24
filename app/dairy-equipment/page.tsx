"use client";

import { Image } from "@/components/Image";
import { creamSeparatorMachine } from "@/config/products";
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
        {/* Main Heading */}
        <section>
          <div className="mt-4 text-sm sm:text-base text-stone-600 dark:text-white/90 border rounded-lg p-4 max-h-100 space-y-3">
            <h1
              className="text-center font-bold underline sm:text-4xl text-lg
              bg-clip-text text-transparent animate-title-gradient"
            >
              Dairy Equipment in Sri Ganganagar, Rajasthan, India
            </h1>
          </div>

          <div className="flex justify-center my-5">
            <Image
              src={cld("Dairy_Equipment_Machine.png")}
              alt="Dairy Equipment Machine"
              className="flex justify-center my-5"
              width={1000}
              height={300}
              id="Dairy_Equipment_Machine"
              loading="lazy"
            />
          </div>
        </section>

        {/* Introduction */}
        <section className="flex flex-col gap-y-4 dark:bg-[#27272a] bg-[rgb(244,244,245)] rounded-md sm:px-8 px-4 py-8">
          <p className="dark:text-gray-400 text-stone-700 flex flex-col gap-3">
            <span>
              <b>Jai Shree Equipment Dairy</b>, a leading dairy equipment
              supplier in Sri Ganganagar, offers a comprehensive range of
              high-quality dairy equipment, including the Paras milk cream
              separator machine. They are committed to providing their
              customers with the latest technology and innovative solutions to
              improve their dairy operations.
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
              <b>Jai Shree Equipment Dairy</b> is a trusted and reliable
              partner for dairy farmers and processors in Sri Ganganagar and the
              surrounding areas. They are dedicated to providing their customers
              with the best possible products and services to help them achieve
              their business goals.
            </span>
          </p>
        </section>

        {/* Dairy Equipment Showcase */}
        <DairyEquipmentsShowcase />

        {/* Cream Separator Heading */}
        <section>
          <div
            className="mt-4 text-sm sm:text-base text-stone-600 dark:text-white/90
            border border-stone-200 dark:border-zinc-700 rounded-lg p-4
            max-h-100 space-y-3 bg-white dark:bg-zinc-900/80
            backdrop-blur shadow-sm dark:shadow-lg"
          >
            <h2
              className="text-center font-bold underline sm:text-2xl text-lg
              bg-clip-text text-transparent animate-title-gradient"
            >
              Paras Milk Cream Separator Machines
            </h2>
          </div>
        </section>

        {/* Cream Separator Description */}
        <section className="flex flex-col gap-y-4 dark:bg-[#27272a] bg-[rgb(244,244,245)] rounded-md sm:px-8 px-4 py-8">
          <p className="dark:text-gray-400 text-stone-700 flex flex-col gap-4 leading-8">
            <span>
              <b>Paras Milk Cream Separator Machines</b> from{" "}
              <b>Jai Shree Equipment Dairy</b> are designed to deliver
              efficient cream separation with high accuracy and excellent
              performance. Built using premium-quality materials, these machines
              are ideal for dairy farms, milk collection centers, and dairy
              processing units.
            </span>

            <span>
              Our cream separator machines ensure maximum cream extraction while
              maintaining the natural quality of milk. They are easy to operate,
              energy-efficient, low maintenance, and available in multiple
              capacities to meet the needs of both small and large dairy
              businesses.
            </span>

            <span>
              We proudly supply and provide after-sales support across{" "}
              <b>
                Sri Ganganagar, Hanumangarh, Bikaner, Anupgarh, Suratgarh,
                Raisinghnagar, Padampur
              </b>
              , and nearby areas. Our experienced team offers installation,
              maintenance, spare parts, and technical assistance to ensure
              smooth and reliable dairy operations.
            </span>
          </p>
        </section>

        {/* Cream Separator Products */}
        <section className="py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {creamSeparatorMachine.map((product) => (
              <Link
                href={`/dairy-equipment/${product.url}`}
                key={product.id}
                className="group overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex h-72 w-full items-center justify-center overflow-hidden bg-gray-100 p-6 dark:bg-zinc-800">
                  <Image
                    src={cld(product.images[0].src, {
                      width: 500,
                      height: 500,
                      crop: "fit",
                      quality: "auto",
                      format: "auto",
                    })}
                    alt={product.name}
                    width={500}
                    height={500}
                    loading="lazy"
                    sizes="(max-width: 640px) 220px, 260px"
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <div className="p-5">
                  <h3
                    className="text-xl font-bold text-center text-zinc-900 dark:text-white line-clamp-2
                    bg-clip-text text-transparent animate-title-gradient"
                  >
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