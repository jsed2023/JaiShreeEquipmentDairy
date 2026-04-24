"use client";
import { Image } from "@nextui-org/react";
import { cld } from "@/utils/cloudinary";
import dynamic from "next/dynamic";
import Link from "next/link";
import NavButton from "@/components/NavButton";
// Lazy load heavy component (reduces unused JS)
const GalleryCarousel = dynamic(
  () => import("@/components/GalleryCarousel"),
  { ssr: false }
);
const seoContent = [
  "Jai Shree Equipment Dairy is a trusted supplier of milk analyzer machines and dairy equipment in Sri Ganganagar, Rajasthan. Established in 2020, our company provides advanced dairy machines and reliable repair services for dairy farmers and milk collection centers.",

  "Milk analyzer machines are essential for modern dairy operations because they help measure important milk parameters such as FAT, SNF, density, protein, and added water. Accurate milk testing ensures fair payment systems and improves milk quality standards.",

  "Our product range includes Advance Milk Analyzer, Advance Milk Analyzer Plus, Advance Milk Analyzer Max, Ekomilk Ultra Milk Analyzer, Milk For Data Collection Units (DPU), Milking Machines, Cream Separator Machines, Ultrasonic Milk Stirrers, and Digital Weighing Scales.",

  "These dairy machines are designed to improve efficiency, accuracy, and productivity in milk collection centers and dairy farms. With modern dairy automation solutions, milk collection operators can manage milk testing and record keeping digitally.",

  "Jai Shree Equipment Dairy proudly serves dairy farmers and dairy businesses across Sri Ganganagar, Bikaner, Hanumangarh, Anupgarh, Raisinghnagar, Suratgarh, Gharsana, Padampur, and nearby regions of Rajasthan.",

  "Whether you are starting a new dairy farm or upgrading an existing milk collection center, our dairy equipment solutions help improve milk testing accuracy, dairy automation, and operational efficiency."
];

export default function Home() {

  return (  
   <>
{/* ================= HERO BANNER ================= */}
<section
  id="hero-banner-section"
  className="flex justify-center py-4"
>
  <div className="w-[90%] md:w-[70%] max-w-5xl aspect-[3/2]">
    <Image
  src={cld("v1737653135/jai_shree_eq.jpg", {
    width: 900,
    crop: "fill",
    quality: "auto",
      // ✅ FIXED
  })}
  alt="Jai Shree Equipment Dairy Banner"
  loading="eager"
  fetchPriority="high"
  decoding="async"
  sizes="(max-width: 768px) 90vw, 70vw"
  radius="md"
  className="w-full h-full object-cover"
  removeWrapper
/>
  </div>
</section>
      <section className="bg-gray-100 dark:bg-[#1f1f22] text-gray-900 dark:text-gray-50 py-6">
        <div className="mt-4 text-sm sm:text-base text-stone-600 dark:text-white/90 border rounded-lg p-4 max-h-100 space-y-3">
    <h1
      className="font-bold text-xl md:text-2xl lg:text-2xl
        text-center bg-clip-text text-transparent animate-title-gradient">
           Milk Analyzer Machine Supplier in Rajasthan 
        </h1></div>
      <section id="hero-welcome-section" className="flex flex-col gap-6">
        <div className="mt-4 text-sm sm:text-base text-stone-600 dark:text-white/90 border rounded-lg p-4 max-h-100 space-y-3">
        <h2
      className="font-bold text-xl md:text-2xl lg:text-2xl
        text-center bg-clip-text text-transparent animate-title-gradient">
          Trusted Milk Fat Testing Machine Supplier in Sri Ganganagar Rajasthan
        </h2></div> 
        <p className="dark:text-gray-400 text-stone-700 max-sm:px-2">
  <strong>JAI SHREE EQUIPMENT DAIRY</strong>, established in{" "}
  <strong>2020</strong>, is a trusted supplier and service provider of{" "}
  <strong>dairy milk analyzer machines</strong> in Sri Ganganagar, Rajasthan.
  We specialize in providing high-quality dairy equipment and reliable repair
  services to support dairy farmers and milk collection centers.

  Our product range includes{" "}
  <strong>
    Milk Analyzer Machines, Milk Collection Units, Advance Milk Analyzer Max,
    Advance Milk Analyzer Plus, Milk Analyzer Advance, Milking Machines, Milk
    Cream Separators, and Digital Weighing Scales
  </strong>
  , designed to improve milk testing accuracy and dairy automation.

  We proudly serve dairy farmers across{" "}
  <strong>Bikaner, Hanumangarh, Anupgarh, and nearby areas of Rajasthan</strong>.
  Our commitment to quality, technical expertise, and customer satisfaction
  makes <strong>JAI SHREE EQUIPMENT DAIRY</strong> a reliable partner for
  improving efficiency and maintaining high standards in dairy production.
</p>
      </section>
      </section>
      <section 
        id="hero-equipment-repair-section"
        className="flex flex-col gap-y-4"
      >
        <div className="bg-gray-100 dark:bg-[#1f1f22] text-gray-900 dark:text-gray-50 py-2xl">  
          <div className="mt-4 text-sm sm:text-base text-stone-600 dark:text-white/90 border rounded-lg p-4 max-h-100 space-y-3">
        <h2 className="md:text-2xl dark:bg-[#27272a] bg-[rgb(244,244,245)] lg:w-6/12 w-11/12 text-center mx-auto py-1 rounded-lg text-lg font-bold mb-6
           bg-clip-text text-transparent animate-title-gradient">
          Milk Analyzers Machines Sales And Expert Repair  
        </h2></div>
        <p className="dark:text-gray-400 text-stone-700 max-sm:px-2">
          At <strong>JAI SHREE EQUIPMENT DAIRY</strong>, we supply high-quality milk analyzer machines
and provide expert repair services including PCB repair, sensor repair,
display repair, and spare parts sale. Our experienced technicians ensure
your dairy machines operate efficiently.
        </p>
        </div>
        
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                src: "v1766092196/Milk_Analyzer_PCB_Motherboard_Front.png",
                label: "Ekomilk PCB",
              },
              {
                src: "v1728902733/Ekomilk-Sensor.jpg",
                label: "Ekomilk Sensor",
              },
              {
                src: "v1728906592/Milk%20Analyzer%20Display.jpg",
                label: "Ekomilk Display",
              },
              {
                src: "v1728906816/Milk%20Analyzer%20Service.png",
                label: "Ekomilk Spare Part",
              },
            ].map((item, idx) => (
              <figure
                key={idx}
                className="flex flex-col w-full dark:bg-[#27272a] bg-gray-100 font-bold p-4 gap-2 rounded-md items-center"
              >
                <div className="w-full aspect-square flex items-center justify-cente">
                  <Image
                    src={cld(item.src, {
                      width: 240,
                      height: 240,
                      crop: "fit",
                    })}
                    alt={item.label}
                    width={240}
                    height={240}
                    removeWrapper
                    loading="lazy"
                    className="object-contain"
                  />
                </div>
                <figcaption>{item.label}</figcaption>
              </figure>
            ))}
          </div>
      </section>
      <section id="hero-our-product-section">
          <section className="bg-gray-100 dark:bg-[#1f1f22] text-gray-900 dark:text-gray-50 py-6">
            <div className="mt-4 text-sm sm:text-base text-stone-600 dark:text-white/90 border rounded-lg p-4 max-h-100 space-y-3">
        <h2 className="dark:bg-[#27272a] bg-[rgb(244,244,245)] sm:w-6/12 w-11/12 text-center mx-auto py-1 rounded-lg md:text-2xl text-lg font-bold mb-6
        bg-clip-text text-transparent animate-title-gradient">
          OUR PRODUCTS
        </h2></div>
        <p className="dark:text-gray-400 text-stone-700 max-sm:px-2">
          We are a trusted supplier of essential Milk Analyzers Machines,and 
          dairy machines servicing all your repair and maintenance needs with
          expertise. Our focus on delivering top-quality{" "}
          <strong>Milk Analyzers Machines, Milk Collection Unit (DPU), Milk Fat
            Testing Machines, Milking Machines, Cream Separators Machines </strong>
          , and more ensures the highest standards in your dairy operations.
          When your dairy farm productivity matters, rely on JAI SHREE EQUIPMENT
          DAIRY for innovative and reliable solutions.
        </p> 
         </section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
            {[
              {
                href: "/milk-testing-equipment",
                src: "v1766061561/Ekomilk-Ultra-Analyzer.jpg",
                label: "Ekomilk Ultra Analyzer",
              },
              {
                href: "/milk-testing-equipment",
                src: "v1728902682/Advance%20Milk%20Analyzer.jpg",
                label: "Advance Milk Analyzer",
              },
              {
                href: "/automatic-milk-collection-system",
                src: "v1736160426/DPU_Milk_Collection_Unit_%28DAIRY%20KHATA%29.png",
                label: "DPU Milk Collection Unit (Dairy Khata)",
              },
{
                href: "/automatic-milk-collection-system",
                src: "v1728902744/weighing-scale.jpg",
                label: "Dairy Weighing Machine 300kg",
              },
              {
                href: "/automatic-milk-collection-system",
                src: "v1766085143/KREI_Ultrasonic_Milk_Stirrer.jpg",
                label: "Ultrasonic Milk Stirrer: KREI",
              },
              {
                href: "/dairy-equipment",
                src: "v1731934091/Paras_Milk_Cream_Separator_AED_165_LHP.jpg",
                label: "Paras Milk Cream Separator",
              },
              {
                href: "/dairy-equipment",
                src: "v1731935014/Vansan_Trolly_Cow_And_Buff_milking_machine.jpg",
                label: "Vansun Milking Machine",
              },
            ].map((item, idx) => (
              <figure
                key={idx}
                className="flex flex-col w-full dark:bg-[#27272a] bg-gray-100 p-4 gap-2 rounded-md items-center"
              >
                <Link href={item.href} data-product={item.label}>
                  <div className="w-full aspect-square flex items-center justify-center">
                    <Image
                      src={cld(item.src, {
                        width: 240,
                        height: 240,
                        crop: "fit",
                      })}
                      alt={item.label}
                      width={240}
                      height={240}
                      removeWrapper
                      loading="lazy"
                      className="object-contain"
                    />
                  </div>
                </Link>
                <figcaption>{item.label}</figcaption>
              </figure>
            ))}
          </div>
          </section>
    <main >
      <GalleryCarousel />
    </main>
{/* ================= SEO CONTENT ================= */}

<section className="bg-gray-100 dark:bg-[#1f1f22] py-10">

<div className="max-w-6xl mx-auto px-4 space-y-6 text-stone-700 dark:text-gray-300">

<h2 className="text-2xl md:text-3xl font-bold text-center">
Dairy Equipment & Milk Analyzer Machines in Rajasthan
</h2>

{seoContent.map((text,index)=>(
<p key={index}>{text}</p>
))}

</div>

</section>
      <section
  id="krei-logo-strip"
  className="dark:bg-[#1f1f22] bg-[rgb(244,244,245)] py-10 ">
    
  <div className="flex flex-col items-center gap-8">
<div className="mt-4 text-sm sm:text-base text-stone-600 dark:text-white/90 border rounded-lg p-4 max-h-100 space-y-3">
    {/* Heading */}
    <h3
      className="
        font-bold
        text-xl md:text-2xl lg:text-3xl
        text-center
        bg-clip-text text-transparent
        animate-title-gradient">
      Trusted & Authorized Partner of K R Electronics Industries
    </h3></div>
    
 
    {/* Logo + Badge */}
    <div className="flex flex-col items-center gap-2">
      <div className="mt-4 text-sm sm:text-base text-stone-600 dark:text-white/90 border rounded-lg p-4 max-h-100 space-y-3">
      <Image
  src={cld("v1771343933/K_R_Electronics_Industries_Log.webp", {
    width: 200,
    height: 150,
    crop: "fit",
  })}
  alt="K R Electronics Industries Logo"
  loading="eager"
  fetchPriority="high"
  decoding="async"
  removeWrapper
  className="object-contain"
/>
    </div>
      {/* Badge */}
      <span
        className="
          text-sm md:text-base font-semibold
          px-4 py-1 rounded-full
          bg-green-600 text-white
          shadow-md  text-transparent
           animate-title-gradient
        ">
        Authorized Distributor
      </span>
    </div>
    {/* Description */}
    <div className="mt-4 text-sm sm:text-base text-stone-600 dark:text-white/90 border rounded-lg p-4 max-h-100 space-y-3">
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
    </p></div>

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

  <span className="font-medium text-sm md:text-base ">
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

  <span className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center items-center">
    Technical Support
  </span>
</div>
    </div>
  </div>
</section>

<div
  className="bg-gray-100 dark:bg-[#1f1f22] text-gray-900 dark:text-gray-50 py-6">
<div className="bg-gray-100 dark:bg-[#1f1f22] py-6">
  <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
  <NavButton href="/about" label="About" />
  <NavButton href="/contact" label="Contact" />
  <NavButton href="/gallery" label="Gallery" />
  <NavButton href="/milestones" label="Milestones" />

  <NavButton href="/services" label="Services" />
  <NavButton href="/testimonials" label="Testimonials" />
  <NavButton href="/locations" label="Locations" />
  <NavButton href="/milk-rate-chart" label="Milk Rate Chart" />

  <NavButton href="/automatic-milk-collection-system" label="AMCU" />
  <NavButton href="/dairy-equipment" label="Dairy Equipment" />
  <NavButton href="/milk-testing-equipment" label="Milk Testing Equipment" />
  <NavButton href="/categories" label="Categories" />
</div>
</div>
    </div>
    </>
  );
}
