import Image from "next/image";

import Link from "next/link";

import { rajasthanLocations }
from "@/lib/rajasthan-locations";

import FadeInOnScroll
from "@/components/FadeInOnScroll";

export default function LocationsPage() {

  return (

    <section className="container mx-auto px-4 py-10">

      {/* HEADER */}

      <div
        className="
          flex items-center justify-center
          rounded-full px-3 py-2.5 mb-8
          bg-gradient-to-r
          from-purple-500/10
          via-blue-500/10
          to-cyan-500/10
          border border-purple-400/30
          backdrop-blur-sm
        "
      >

        <h1
          className="
            text-2xl md:text-3xl
            font-bold text-center
            bg-clip-text text-transparent
            bg-gradient-to-r
            from-blue-600
            to-purple-600
          "
        >
          Milk Analyzer Machine Service Locations in Rajasthan
        </h1>

      </div>

      {/* IMAGE */}

      <div className="flex justify-center my-8">

        <Image
          src="https://res.cloudinary.com/dddhtbuzs/image/upload/v1767698484/Our_Service_Locations_in_Rajasthan_y9d4qn.png"
          alt="Milk Analyzer Machine and Dairy Machine Service Locations in Rajasthan"
          width={1000}
          height={300}
          priority
          sizes="(max-width: 768px) 100vw, 1000px"
          className="rounded-xl object-cover shadow-lg"
        />

      </div>

      {/* DESCRIPTION */}

      <div
        className="
          bg-gray-100 dark:bg-[#1f1f22]
          text-gray-900 dark:text-gray-50
          p-6 rounded-xl mb-12
          shadow-sm
        "
      >

        <p className="text-gray-800 leading-7">

          <strong>
            Jai Shree Equipment Dairy
          </strong>{" "}

          supplies{" "}

          <strong>
            Advance Milk Analyzer Max,
            Plus, Pro,
            Ekomilk Ultra Analyzer,
            Milk Fat Testing Machines,
            Milk Collection Units (DPU),
            Milk Cream Separator Machines (Paras),
            and Milking Machines (Vansun)
          </strong>{" "}

          across Rajasthan including
          Sri Ganganagar,
          Hanumangarh,
          Bikaner,
          Suratgarh,
          Anupgarh
          and nearby areas.

        </p>

      </div>

      {/* LOCATIONS GRID */}

      <div
        className="
          grid grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-5
          gap-6
        "
      >

        {rajasthanLocations.map(
          (location, index) => {

            const locationName =
              location.city;

            const locationSlug =
              location.slug;

            return (

              <FadeInOnScroll
                key={location.slug}
                delay={index * 40}
              >

                <Link
                  href={`/milk-analyzer-${locationSlug}`}
                  className="
                    relative group block
                    rounded-xl overflow-hidden
                    bg-gradient-to-r
                    from-blue-500/10
                    via-purple-500/10
                    to-cyan-500/10
                    border border-gray-200
                    dark:border-gray-700
                    hover:border-blue-500
                    transition-all duration-300
                    shadow-sm hover:shadow-xl
                    hover:-translate-y-1
                  "
                >

                  {/* Glow Effect */}

                  <div
                    className="
                      absolute inset-0
                      opacity-0
                      group-hover:opacity-100
                      transition duration-500
                      bg-gradient-to-r
                      from-blue-500/20
                      via-purple-500/20
                      to-cyan-500/20
                      blur-xl
                    "
                  />

                  <div className="relative p-5 text-center">

                    <h2
                      className="
                        text-lg md:text-xl
                        font-bold
                        bg-clip-text text-transparent
                        bg-gradient-to-r
                        from-blue-600
                        to-purple-600
                      "
                    >
                      {locationName}
                    </h2>

                    <p className="text-sm text-gray-600 mt-2">

                      Milk Analyzer Machine in{" "}
                      {locationName}

                    </p>

                    <div
                      className="
                        mt-4 inline-block
                        px-4 py-2 rounded-full
                        bg-blue-600
                        text-white text-sm
                        font-medium
                        group-hover:bg-purple-600
                        transition
                      "
                    >
                      View Details →
                    </div>

                  </div>

                </Link>

              </FadeInOnScroll>
            );
          }
        )}

      </div>

      {/* POPULAR LOCATIONS */}

      <div className="mt-16 text-center">

        <h2 className="text-2xl font-semibold mb-6">

          Popular Milk Analyzer Locations

        </h2>

        <div
          className="
            flex flex-wrap
            justify-center gap-4
          "
        >

          <Link
            href="/milk-analyzer-jaipur"
            className="text-blue-600 hover:underline"
          >
            Milk Analyzer Jaipur
          </Link>

          <Link
            href="/milk-analyzer-bikaner"
            className="text-blue-600 hover:underline"
          >
            Milk Analyzer Bikaner
          </Link>

          <Link
            href="/milk-analyzer-hanumangarh-junction"
            className="text-blue-600 hover:underline"
          >
            Milk Analyzer Hanumangarh
          </Link>

          <Link
            href="/milk-analyzer-suratgarh"
            className="text-blue-600 hover:underline"
          >
            Milk Analyzer Suratgarh
          </Link>

          <Link
            href="/milk-analyzer-sri-ganganagar"
            className="text-blue-600 hover:underline"
          >
            Milk Analyzer Sri Ganganagar
          </Link>

        </div>

      </div>

    </section>
  );
}