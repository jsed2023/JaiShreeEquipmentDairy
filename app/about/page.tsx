"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { Image } from "@/components/Image";
import { cld } from "@/utils/cloudinary";
import { AuthorizedDealerSection } from "@/components/authorized-dealer-section";

import {
  aboutAndStory,
  aboutFactsheet,
  productRangeAndWhyChooseUs,
} from "@/config/about";

export default function AboutPage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div id="about" className="my-6 mb-8 flex flex-col gap-y-10">
      {/* Hero Video + About Content */}
      <section className="relative flex h-full flex-col gap-y-4 sm:gap-y-10">
        <div className="h-full lg:h-120">
          <video
            key={theme}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            controls={false}
            className="h-full w-full object-cover"
          >
            <source
              src={
                theme === "dark"
                  ? "https://res.cloudinary.com/dddhtbuzs/video/upload/v1729414860/vjpv4mrejpkw3btib071.mp4"
                  : "https://res.cloudinary.com/dddhtbuzs/video/upload/v1729414810/d7hhv3vhvqt2wukbyous.mp4"
              }
              type="video/mp4"
            />

            Your browser does not support the video tag.
          </video>
        </div>

        {/* About Us + Story */}
        <div className="flex flex-col gap-y-4 sm:gap-y-10">
          {aboutAndStory.map((item) => (
            <div key={item.id} className="flex flex-col gap-y-4">
              <h2 className="text-center text-lg font-bold">
                {item.title}
              </h2>

              <p className="text-stone-700 max-sm:text-sm dark:text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Product Range + Why Choose Us */}
        <div className="flex flex-col gap-y-8">
          {productRangeAndWhyChooseUs.map((item) => (
            <div key={item.id} className="flex flex-col gap-y-4">
              <h2 className="text-center text-lg font-bold">
                {item.title}
              </h2>

              <ul className="flex flex-col gap-y-4">
                {item.descList.map((list) => (
                  <li
                    key={list.id}
                    className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-700"
                  >
                    <span className="font-semibold">{list.title}</span>

                    <p className="mt-1 text-stone-700 max-sm:text-sm dark:text-gray-400">
                      {list.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Vision */}
        <div className="flex flex-col gap-y-4">
          <h2 className="text-center text-lg font-bold">Our Vision</h2>

          <p className="text-stone-700 max-sm:text-sm dark:text-gray-400">
            Our vision is to be the global leader in providing state-of-the-art
            dairy equipment solutions that support sustainable, efficient, and
            profitable dairy farming. We strive to contribute to the growth and
            development of the dairy industry, one farm at a time.
          </p>
        </div>
      </section>

      {/* Business Factsheet */}
      <section
        id="about-bussiness"
        className="flex flex-col gap-y-6 rounded-xl bg-[rgb(244,244,245)] p-4 dark:bg-[#27272a]"
      >
        {/* Business Intro */}
        <div className="flex flex-col gap-y-4">
          <h2 className="text-center text-lg font-bold underline">
            Year of Establishment :- 2020
          </h2>

          <p className="text-center text-stone-700 max-sm:text-sm dark:text-gray-400">
            Nature of Business :- DISTRIBUTOR ADVANCE MILK ANALYZER (PLUS &
            MAX), MILK COLLECTION UNIT (DAIRY KHATA), PARAS CREAM SEPARATOR MACHINE
          </p>
        </div>

        <div className="flex flex-col gap-y-4">
          <p className="text-stone-700 max-sm:text-sm dark:text-gray-400">
            <span className="font-bold">
              DISTRIBUTOR SERVICE IN BIKANER DIVISION :-
            </span>{" "}
            Advance Milk Analyzer Plus & Max, Lacto Scan, Ekomilk Analyzer
            Ultra Mb, Milk Collection Unit, Paras Cream Separator Machine, Weighing Machine, Milk Ultrasonic Stirrer,
            Etc. All Items for Sale and Service.
          </p>

          <p className="text-stone-700 max-sm:text-sm dark:text-gray-400">
            <span className="font-bold">Jai Shree Equipment Dairy</span>{" "}
            specializes in providing a variety of dairy equipment including
            milk analyzers, milk cream separators,and milk
            collection units.
          </p>
        </div>

        <p className="text-stone-700 max-sm:text-sm dark:text-gray-400">
          Established in 2020 and based in Sri Ganganagar, Rajasthan, the
          company is dedicated to offering reliable products and services for
          the dairy industry.
        </p>

        {/* Factsheet Title */}
        <div className="pt-2">
          <h2 className="text-center text-xl font-bold underline sm:text-2xl">
            Factsheet
          </h2>
        </div>

        {/* Factsheet Sections */}
        <div className="flex flex-col gap-y-6">
          {aboutFactsheet.map((item) => {
            const SectionIcon = item.icon;

            return (
              <div
                key={item.id}
                className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-800/50"
              >
                {/* Section Header */}
                <div className="mb-4 flex items-center gap-3 border-b border-zinc-200 pb-3 dark:border-zinc-700">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <SectionIcon className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
                  </div>

                  <h3 className="text-base font-bold sm:text-lg">
                    {item.title}
                  </h3>
                </div>

                {/* Information Rows */}
                <div className="flex flex-col">
                  {item.information.map((infoItem) => {
                    const InfoIcon = infoItem.icon;

                    return (
                      <div
                        key={infoItem.id}
                        className="flex flex-col gap-3 border-b border-zinc-100 py-3 first:pt-0 last:border-0 last:pb-0 sm:flex-row sm:items-start dark:border-zinc-700/60"
                      >
                        {/* Row Icon + Title */}
                        <div className="flex w-full shrink-0 items-center gap-3 sm:w-[18rem]">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                            <InfoIcon className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
                          </div>

                          <p className="font-semibold text-stone-900 max-sm:text-sm dark:text-gray-200">
                            {infoItem.title}
                          </p>
                        </div>

                        {/* Row Description */}
                        <p className="w-full pt-1 text-stone-700 max-sm:text-sm dark:text-gray-400 sm:pt-2">
                          {infoItem.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* MSME Registered */}
      <section className="flex flex-col items-center gap-2">
        <span className="mx-auto mb-6 w-11/12 rounded-full bg-[rgb(244,244,245)] py-2 text-center text-lg font-bold dark:bg-[#27272a] sm:w-6/12 md:text-2xl">
          MSME Registered
        </span>

        <Image
          src="https://res.cloudinary.com/dddhtbuzs/image/upload/v1728902741/msme-logo.png"
          alt="MSME Registered Business"
          width={300}
          height={120}
          sizes="300px"
          className="h-15 w-auto object-contain transition-transform duration-300 hover:scale-110"
        />
      </section>

      {/* Certificates */}
      <section id="certificates" className="mt-4">
        <h2 className="mx-auto mb-6 w-11/12 rounded-full bg-[rgb(244,244,245)] py-2 text-center text-lg font-bold dark:bg-[#27272a] sm:w-6/12 md:text-2xl">
          OUR CERTIFICATES
        </h2>

        <div className="flex flex-wrap justify-evenly gap-8">
          <Image
            src="https://res.cloudinary.com/dddhtbuzs/image/upload/v1728902807/lotw093yc0wtqrrjjkoi.jpg"
            alt="Business Certificate"
            id="san"
            width={320}
            height={448}
            sizes="(max-width: 640px) 240px, 320px"
            className="h-auto w-60 object-contain motion-safe:animate-slideInFromLeft sm:w-80"
            loading="lazy"
          />

          <Image
            src="https://res.cloudinary.com/dddhtbuzs/image/upload/v1728902819/byekcougfnmu1jtpgwwt.jpg"
            alt="MSME Certificate"
            id="msme"
            width={320}
            height={448}
            sizes="(max-width: 640px) 240px, 320px"
            className="h-auto w-60 object-contain motion-safe:animate-slideInFromRight sm:w-80"
            loading="lazy"
          />
        </div>
      </section>

      {/* K R Electronics Industries */}
      <section
        id="krei-logo-strip"
        className="rounded-xl bg-[rgb(244,244,245)] py-6 dark:bg-[#1f1f22]"
      >
        <div className="flex flex-col items-center gap-8 px-4">
          <h3 className="animate-title-gradient bg-clip-text text-center text-xl font-bold text-transparent md:text-2xl lg:text-3xl">
            Trusted & Authorized Partner of K R Electronics Industries
          </h3>

          <Image
  src={cld("v1771343933/K_R_Electronics_Industries_Log.webp", {
    width: 200,
    height: 60,
    crop: "fit",
    quality: "auto",
    format: "auto",
  })}
  alt="K R Electronics Industries Logo"
  width={200}
  height={60}
  sizes="(max-width: 640px) 160px, 200px"
  className="h-auto w-40 sm:w-50 object-contain"
  loading="lazy"
/>

          <span className="rounded-full bg-green-600 px-4 py-1 text-sm font-semibold text-white shadow-md md:text-base">
            Authorized Distributor
          </span>

          <p className="max-w-5xl px-2 text-center text-base leading-relaxed text-stone-700 dark:text-gray-300 md:text-lg lg:text-xl">
            <strong>JAI SHREE EQUIPMENT DAIRY</strong> is an{" "}
            <strong>
              Authorized Distributor of K R Electronics Industries for the
              Bikaner Division
            </strong>
            , supplying genuine products, original spare parts, and
            manufacturer-supported solutions.
          </p>

          {/* Trust Icons */}
          <div className="flex flex-wrap justify-center gap-10">
            {/* Genuine Products */}
            <div className="flex flex-col items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-12 w-12 text-green-600 transition-transform duration-300 hover:scale-110"
              >
                <path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z" />
                <path d="M9 12l2 2 4-4" />
              </svg>

              <span className="text-sm font-medium md:text-base">
                Genuine Products
              </span>
            </div>

            {/* Warranty */}
            <div className="flex flex-col items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-12 w-12 text-blue-600 transition-transform duration-300 hover:scale-110"
              >
                <circle cx="12" cy="8" r="6" />
                <path d="M9 14v8l3-2 3 2v-8" />
              </svg>

              <span className="text-sm font-medium md:text-base">
                Manufacturer Warranty
              </span>
            </div>

            {/* Technical Support */}
            <div className="flex flex-col items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-12 w-12 text-purple-600 transition-transform duration-300 hover:scale-110"
              >
                <path d="M4 12a8 8 0 0 1 16 0" />
                <rect x="3" y="12" width="4" height="6" rx="2" />
                <rect x="17" y="12" width="4" height="6" rx="2" />
                <path d="M17 19c0 1.5-1.5 3-4 3" />
              </svg>

              <span className="text-sm font-medium md:text-base">
                Technical Support
              </span>
            </div>
          </div>

          <AuthorizedDealerSection />
        </div>
      </section>
    </div>
  );
}