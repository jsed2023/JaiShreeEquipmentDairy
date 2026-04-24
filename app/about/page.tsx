"use client";
import { useTheme } from "next-themes";
import { Image } from "@nextui-org/react";
import { cld } from "@/utils/cloudinary";
import { AuthorizedDealerSection } from "@/components/authorized-dealer-section"
import { useEffect, useState } from "react";
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
  }, [theme]);

  if (!mounted) {
    return null;
  }
  return (
    <div id="about" className="flex flex-col gap-y-10 mb-8">
      <section className="relative h-full flex flex-col sm:gap-y-10 gap-y-4">
        <div className="lg:h-[30rem] h-full">
          <video
            key={theme}
            autoPlay
            muted
            loop
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
        <div className="flex flex-col gap-y-4 sm:gap-y-10">
          {aboutAndStory.map((item) => (
            <div key={item.id} className="flex flex-col gap-y-4">
              <h2 className="text-lg font-bold text-center">{item.title}</h2>
              <p className="max-sm:text-sm dark:text-gray-400 text-stone-700">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-y-4">
          {productRangeAndWhyChooseUs.map((item) => (
            <div key={item.id} className="flex flex-col gap-y-4">
              <h2 className="text-lg font-bold text-center">{item.title}</h2>
              <ul className="flex flex-col gap-y-3">
                {item.descList.map((list) => (
                  <div key={list.id}>
                    <li>{list.title}</li>
                    <p className="max-sm:text-sm pl-4 dark:text-gray-400 text-stone-700">
                      {list.desc}
                    </p>
                  </div>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-y-4">
          <h2 className="text-lg font-bold text-center">Our Vision</h2>
          <p className="max-sm:text-sm dark:text-gray-400 text-stone-700">
            Our vision is to be the global leader in providing state-of-the-art
            dairy equipment solutions that support sustainable, efficient, and
            profitable dairy farming. We strive to contribute to the growth and
            development of the dairy industry, one farm at a time.
          </p>
        </div>
      </section>
      <section
        id="about-bussiness"
        className="dark:bg-[#27272a] flex flex-col gap-y-4 p-4 rounded-md bg-[rgb(244,244,245)]"
      >
        <div className="flex flex-col gap-y-4">
          <h2 className="text-lg font-bold text-center underline">
            Year of Establishment :- 2020
          </h2>
          <p className="max-sm:text-sm text-center dark:text-gray-400 text-stone-700">
            Nature of Business :- DISTRIBUTOR ADVANCE MILK ANALYZER (PLUS & MAX), MILK
            COLLECTION UNIT (DAIRY KHATA), VANSUN MILKING MACHINE, PARAS CREAM SEPARATOR MACHINE
          </p>
        </div>
        <div className="flex flex-col gap-y-4">
          <p className="max-sm:text-sm dark:text-gray-400 text-stone-700">
            <span className="font-bold">
              DISTRIBUTOR SERVICE IN BIKANER DIVISION :-
            </span>
            Ekomilk Analyzer Ultra Mb, Advance Milk Analyzer Plus & Max, Lacto Scan, Milk
            Collection Unit, Paras Cream Separator Machine, Vansun Milking Machine, Weighing Machine, 
            Milk Ultrasonic Stirrer, Etc All Item For Sale And Service.
          </p>
          <p className="max-sm:text-sm dark:text-gray-400 text-stone-700">
            <span className="font-bold">Jai Shree Equipment Dairy</span>{" "}
            specializes in providing a variety of dairy equipment including milk
            analyzers, cream separators, milking machines, and milk collection unit.
          </p>
        </div>
        <p className="max-sm:text-sm dark:text-gray-400 text-stone-700">
          Established in 2020 and based in Sri Ganganagar, Rajasthan, the
          company is dedicated to offering reliable products and services for
          the dairy industry.
        </p>
        <p className="font-bold text-center underline mt-4">Factsheet</p>
        <div className="flex flex-col gap-y-3">
          {aboutFactsheet.map((item) => (
            <div key={item.id} className="flex flex-col gap-y-2">
              <h3 className="font-bold">{item.title}</h3>
              {item.information.map((infoItem) => (
                <div key={infoItem.id} className="flex">
                  <p className="max-sm:text-sm w-[20rem] dark:text-gray-400 text-stone-700">
                    {infoItem.title}
                  </p>
                  <p className="max-sm:text-sm w-full dark:text-gray-400 text-stone-700">
                    {infoItem.desc}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
              {/* MSME Registered */}
<div className="flex flex-col items-center gap-2">
  <span className="dark:bg-[#27272a] bg-[rgb(244,244,245)] sm:w-6/12 w-11/12 text-center mx-auto py-1 mb-6 rounded-full md:text-2xl text-lg font-bold">
    MSME Registered
  </span>
  <Image
    src="https://res.cloudinary.com/dddhtbuzs/image/upload/v1728902741/msme-logo.png"
    alt="MSME Registered Business"
    className="h-15 w-auto object-contain transition-transform duration-300 hover:scale-110"
    loading="lazy"
  />
</div>
      <section id="certificates" className="mt-4">
        <h2 className="dark:bg-[#27272a] bg-[rgb(244,244,245)] sm:w-6/12 w-11/12 text-center mx-auto py-1 mb-6 rounded-full md:text-2xl text-lg font-bold">
          OUR CERTIFICATES
        </h2>
        <div className="flex justify-evenly flex-wrap gap-y-8">
          <Image
            src="https://res.cloudinary.com/dddhtbuzs/image/upload/v1728902807/lotw093yc0wtqrrjjkoi.jpg"
            isBlurred
            alt="SAN"
            id="san"
            className="w-[20rem] h-[28rem] max-sm:h-[23rem] mr-2 max-sm:w-[15rem] motion-safe:animate-slideInFromLeft"
            loading="lazy"
          />
          <Image
            src="https://res.cloudinary.com/dddhtbuzs/image/upload/v1728902819/byekcougfnmu1jtpgwwt.jpg"
            isBlurred
            alt="msme "
            className="w-[20rem] h-[28rem] max-sm:h-[23rem] ml-2 max-sm:w-[15rem] motion-safe:animate-slideInFromRight"
            id="msme"
            loading="lazy"
          />
        </div>
      </section>
      <section
  id="krei-logo-strip"
  className="dark:bg-[#1f1f22] bg-[rgb(244,244,245)] py-3">
  <div className="flex flex-col items-center gap-8">

    {/* Heading */}
    <h3
      className="
        font-bold
        text-xl md:text-2xl lg:text-3xl
        text-center
        bg-clip-text text-transparent
        animate-title-gradient">
      Trusted & Authorized Partner of K R Electronics Industries
    </h3>

    {/* Logo + Badge */}
    <div className="flex flex-col items-center gap-3">
      <Image
        src={cld("v1771343933/K_R_Electronics_Industries_Log.webp",)}
        alt="K R Electronics Industries Logo"
        className="h-[5rem] w-auto"
        loading="lazy"
      />
 </div>
      {/* Badge */}
      <span
        className="
          text-sm md:text-base font-semibold
          px-4 py-1 rounded-full
          bg-green-600 text-white
          shadow-md text-transparent 
          animate-title-gradient
        "
      >
        Authorized Distributor
      </span>
   

    {/* Description */}
    <p
      className="
        text-base md:text-lg lg:text-xl
        dark:text-gray-300 text-stone-700
        text-center
        max-w-5xl
        px-6
        leading-relaxed
      "
    >
      <strong>JAI SHREE EQUIPMENT DAIRY</strong> is an
      <strong> Authorized Distributor of K R Electronics Industries for the Bikaner Division</strong>,
      We provide: Advanced Milk Analyzer Machines, Genuine Products with Manufacturer Warranty, Original Spare Parts, Reliable After-Sales Support.
    </p>

    {/* Trust Icons */}
    <div className="flex flex-wrap justify-center gap-8 mt-4
    bg-clip-text text-transparent animate-title-gradient">

      {/* Genuine Products */}
<div className="flex flex-col items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="h-12 w-12 text-green-600"
  >
    <path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z" />
    <path d="M9 12l2 2 4-4" />
  </svg>

  <span className="font-medium text-sm md:text-base">
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
    className="h-12 w-12 text-blue-600"
  >
    <circle cx="12" cy="8" r="6" />
    <path d="M9 14v8l3-2 3 2v-8" />
  </svg>

  <span className="font-medium text-sm md:text-base">
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
    {/* Headband */}
    <path d="M4 12a8 8 0 0 1 16 0" />

    {/* Left ear */}
    <rect x="3" y="12" width="4" height="6" rx="2" />

    {/* Right ear */}
    <rect x="17" y="12" width="4" height="6" rx="2" />

    {/* Mic */}
    <path d="M17 19c0 1.5-1.5 3-4 3" />
  </svg>

  <span className="font-medium text-sm md:text-base">
    Technical Support
  </span>
  
</div>
      <AuthorizedDealerSection/>
    </div>
    </div>
    </section>
    </div> 
    
  );
}
