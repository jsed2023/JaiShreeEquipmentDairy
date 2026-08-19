"use client";

import { Image } from "@/components/Image";
import Link from "next/link";
import { blogs } from "@/config/blogs";

const blogList = Object.values(blogs);

function createWhatsAppLink() {
  const message =
    "Hello, I want to know more about dairy equipment and milk analyzer machines.";

  return `https://wa.me/917375082341?text=${encodeURIComponent(
    message
  )}`;
}

export default function BlogPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-black">
      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          border-b
          border-gray-200
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
            absolute
            inset-0
            bg-linear-to-r
            from-cyan-200/20
            via-blue-200/20
            to-purple-200/20
            blur-3xl
          "
        />

        <div
          className="
            relative
            mx-auto
            w-full
            max-w-5xl
            px-4
            py-8

            sm:px-6
            sm:py-10

            lg:px-8
            lg:py-12
          "
        >
          {/* =================================================
              SAME VERTICAL LAYOUT ON ALL DEVICES
          ================================================= */}

          <div
            className="
              grid
              grid-cols-1
              gap-5

              sm:gap-6

              lg:gap-7
            "
          >
            {/* =================================================
                BOX 1 — COMPANY NAME
            ================================================= */}

            <div
              className="
                w-full
                rounded-3xl
                border
                border-cyan-200
                bg-white
                p-6
                text-center
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl

                sm:p-8
              "
            >
              <div className="flex items-center justify-center">
                <span
                  className="
                    inline-flex
                    max-w-full
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-cyan-300
                    bg-cyan-100
                    px-5
                    py-2.5
                    text-center
                    text-sm
                    font-medium
                    leading-5
                    text-cyan-700

                    sm:px-6
                    sm:text-base
                  "
                >
                  Jai Shree Equipment Dairy
                </span>
              </div>
            </div>

            {/* =================================================
                BOX 2 — TITLE
            ================================================= */}

            <div
              className="
                w-full
                rounded-3xl
                border
                border-blue-200
                bg-white
                p-6
                text-center
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl

                sm:p-8
              "
            >
              <h1
                className="
                  text-3xl
                  font-bold
                  leading-tight
                  tracking-tight
                  text-gray-900

                  sm:text-4xl
                "
              >
                <span className="block">
                  Dairy Industry
                </span>

                <span
                  className="
                    mt-2
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

            {/* =================================================
                BOX 3 — DESCRIPTION
            ================================================= */}

            <div
              className="
                w-full
                rounded-3xl
                border
                border-purple-200
                bg-white
                p-6
                text-center
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl

                sm:p-8
              "
            >
              <p
                className="
                  mx-auto
                  max-w-3xl
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

      {/* =====================================================
          BLOG CARDS
      ===================================================== */}

      <section
        className="
          mx-auto
          w-full
          max-w-5xl
          px-4
          py-10

          sm:px-6
          sm:py-12

          lg:px-8
          lg:py-16
        "
      >
        <div
          className="
            grid
            grid-cols-1
            gap-6

            sm:gap-7

            lg:gap-8
          "
        >
          {blogList.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              className="
                group
                flex
                h-full
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
              "
            >
              {/* =================================================
                  BLOG IMAGE
              ================================================= */}

              <div
                className="
                  relative
                  aspect-4/3
                  w-full
                  overflow-hidden
                  bg-gray-50
                "
              >
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes="100vw"
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

              {/* =================================================
                  BLOG CONTENT
              ================================================= */}

              <div
                className="
                  flex
                  flex-1
                  flex-col
                  p-5

                  sm:p-6
                "
              >
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
                      px-3
                      py-1
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

                {/* BLOG TITLE */}

                <h2
                  className="
                    mt-4
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

                {/* BLOG DESCRIPTION */}

                <p
                  className="
                    mt-3
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

                {/* READ ARTICLE */}

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
                  <span>
                    Read Full Article
                  </span>

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

      {/* =====================================================
          FLOATING WHATSAPP BUTTON
      ===================================================== */}

      <a
        href={createWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="
          fixed
          bottom-5
          right-5
          z-50

          flex
          h-16
          w-16
          items-center
          justify-center

          rounded-full
          bg-green-500
          text-white

          shadow-xl

          transition-all
          duration-300

          hover:scale-110
          hover:bg-green-600

          sm:bottom-6
          sm:right-6
          sm:h-[68px]
          sm:w-[68px]
        "
      >
        {/* WhatsApp Icon */}

        <svg
          viewBox="0 0 32 32"
          className="
            h-9
            w-9

            sm:h-10
            sm:w-10
          "
          fill="none"
          aria-hidden="true"
        >
          {/* Outer Circle */}

          <circle
            cx="16"
            cy="16"
            r="13"
            stroke="currentColor"
            strokeWidth="2.2"
          />

          {/* Phone Shape */}

          <path
            d="
              M11.6 9.8
              c.5-.5 1.3-.5 1.8.1
              l1.5 1.9
              c.4.5.4 1.2 0 1.7
              l-.8.9
              c.9 1.8 2.3 3.2 4.1 4.1
              l.9-.8
              c.5-.4 1.2-.4 1.7 0
              l1.9 1.5
              c.6.5.6 1.3.1 1.8
              l-1 1.1
              c-.7.8-1.8 1.1-2.8.8
              c-5.1-1.5-9.2-5.6-10.7-10.7
              c-.3-1 0-2.1.8-2.8
              l1.1-1Z
            "
            fill="currentColor"
          />
        </svg>
      </a>
    </main>
  );
}