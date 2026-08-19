"use client";
import { Image } from "@/components/Image";
import Link from "next/link";
import { blogs } from "@/config/blogs";

const blogList = Object.values(blogs);

export default function BlogPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-black">
      {/* =========================
          HERO SECTION
      ========================= */}

      <section
        className="
          relative overflow-hidden
          border-b border-gray-200
          bg-linear-to-br
          from-cyan-50
          via-white
          to-blue-50
        "
      >
        {/* Background Glow */}

        <div
          className="
            pointer-events-none
            absolute inset-0
            bg-linear-to-r
            from-cyan-200/20
            via-blue-200/20
            to-purple-200/20
            blur-3xl
          "
        />

        <div
          className="
            relative mx-auto max-w-7xl
            px-4 py-10
            sm:px-6
            lg:px-8
            lg:py-12
          "
        >
          <div
            className="
              grid
              grid-cols-1
              gap-5
              md:grid-cols-3
              md:gap-6
              lg:gap-7
            "
          >
            {/* =========================
                BOX 1
            ========================= */}

            <div
              className="
                flex
                min-h-52
                items-center
                justify-center
                rounded-3xl
                border
                border-cyan-200
                bg-white
                p-6
                text-center
                shadow-lg
                transition
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              <span
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-cyan-300
                  bg-cyan-100
                  px-5
                  py-2
                  text-sm
                  font-medium
                  text-cyan-700
                "
              >
                Jai Shree Equipment Dairy
              </span>
            </div>

            {/* =========================
                BOX 2
            ========================= */}

            <div
              className="
                flex
                min-h-52
                items-center
                justify-center
                rounded-3xl
                border
                border-blue-200
                bg-white
                p-6
                text-center
                shadow-lg
                transition
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              <h1
                className="
                  text-3xl
                  font-bold
                  leading-tight
                  text-gray-900
                  sm:text-4xl
                "
              >
                <span className="block">
                  Dairy Industry
                </span>

                <span
                  className="
                    mt-1
                    block
                    bg-linear-to-r
                    from-cyan-600
                    via-blue-600
                    to-purple-600
                    bg-clip-text
                    text-transparent
                  "
                >
                  Blogs &amp; Insights
                </span>
              </h1>
            </div>

            {/* =========================
                BOX 3
            ========================= */}

            <div
              className="
                flex
                min-h-52
                items-center
                justify-center
                rounded-3xl
                border
                border-purple-200
                bg-white
                p-6
                text-center
                shadow-lg
                transition
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              <p
                className="
                  max-w-md
                  text-sm
                  leading-6
                  text-gray-600
                  sm:text-base
                  sm:leading-7
                "
              >
                Explore expert blogs on milk analyzer
                machines, automatic milk collection systems
                (AMCS), dairy weighing scales, cream
                separators, milk testing equipment,
                ultrasonic milk stirrers, and modern dairy
                farming solutions. Get buying guides,
                maintenance tips, and the latest dairy
                technology updates from Jai Shree Equipment
                Dairy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          BLOG CARDS
      ========================= */}

      <section
        className="
          mx-auto max-w-7xl
          px-4 py-10
          sm:px-6 sm:py-14
          lg:px-8 lg:py-16
        "
      >
        <div
          className="
            grid
            grid-cols-1
            gap-6
            sm:gap-7
            md:grid-cols-2
            md:gap-8
            lg:grid-cols-3
          "
        >
          {blogList.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              className="
                group
                flex h-full
                min-w-0
                flex-col
                overflow-hidden
                rounded-2xl
                border
                border-gray-200
                bg-white
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
                sm:rounded-3xl
                md:hover:-translate-y-2
                md:hover:shadow-2xl
              "
            >
              {/* =========================
                  IMAGE
              ========================= */}

              <div
                className="
                  relative
                  h-52
                  w-full
                  overflow-hidden
                  bg-gray-50
                  sm:h-60
                  md:h-64
                  lg:h-68
                  xl:h-72
                "
              >
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes="
                    (max-width: 640px) 100vw,
                    (max-width: 1024px) 50vw,
                    33vw
                  "
                  className="
                    object-contain
                    p-4
                    transition-transform
                    duration-700
                    group-hover:scale-105
                    sm:p-5
                  "
                />
              </div>

              {/* =========================
                  CONTENT
              ========================= */}

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                {/* CATEGORY + DATE */}

                <div
                  className="
                    flex
                    flex-wrap
                    items-center
                    justify-between
                    gap-3
                  "
                >
                  <span
                    className="
                      max-w-full
                      rounded-full
                      bg-cyan-100
                      px-3 py-1
                      text-xs
                      font-semibold
                      leading-5
                      text-cyan-700
                      sm:px-4
                    "
                  >
                    {blog.category}
                  </span>

                  <span
                    className="
                      text-xs
                      text-gray-500
                      sm:text-sm
                    "
                  >
                    {blog.date}
                  </span>
                </div>

                {/* TITLE */}

                <h2
                  className="
                    mt-4
                    line-clamp-3
                    text-xl
                    font-bold
                    leading-snug
                    text-gray-900
                    transition-colors
                    duration-300
                    group-hover:text-cyan-600
                    sm:mt-5
                    sm:text-2xl
                  "
                >
                  {blog.title}
                </h2>

                {/* DESCRIPTION */}

                <p
                  className="
                    mt-3
                    line-clamp-4
                    flex-1
                    text-sm
                    leading-6
                    text-gray-600
                    sm:mt-4
                    sm:text-base
                    sm:leading-7
                  "
                >
                  {blog.description}
                </p>

                {/* READ MORE */}

                <div
                  className="
                    mt-5
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    text-blue-600
                    sm:mt-6
                    sm:text-base
                  "
                >
                  <span>Read Full Article</span>

                  <span
                    aria-hidden="true"
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}