"use client";

import { services } from "@/config/services";
import serviceAreas from "@/config/service-areas";
import { Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { cld } from "@/utils/cloudinary";
import { FaShieldAlt, FaTools, FaCheckCircle } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ServicesPage() {
  return (
    <div id="services" className="mt-4 sm:mt-10 mb-10 flex flex-col gap-y-12">

      {/* HERO */}

      <section id="dairy-equipment-services">
        <div className="bg-sky-100 dark:bg-sky-900 py-4">
          <h1 className="text-center font-bold underline sm:text-2xl text-lg bg-clip-text text-transparent animate-title-gradient">
            Dairy Machine Services – Installation, Maintenance & Repairs
          </h1>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center my-6"
        >
          <Image
            src={cld("https://res.cloudinary.com/dddhtbuzs/image/upload/v1767098596/Repairs.jpg")}
            alt="Dairy equipment repair service"
            isBlurred
            width={1200}
            height={400}
            loading="lazy"
            className="w-full max-w-5xl h-auto rounded-lg object-cover"
          />
        </motion.div>
      </section>

      {/* SERVICE TYPES */}

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="rounded-md p-4 flex flex-col gap-y-4 dark:bg-[#27272a] bg-[rgb(244,244,245)]"
      >
        {[
          ["Installation", "Professional setup of dairy equipment at your farm."],
          ["Maintenance", "Regular servicing to ensure optimal performance."],
          ["Repairs", "Quick and efficient repair services."],
        ].map(([title, desc]) => (
          <div key={title} className="flex justify-between gap-4">
            <h2 className="font-bold">{title}:</h2>
            <p className="flex-1">{desc}</p>
          </div>
        ))}
      </motion.section>

      {/* WARRANTY & GUARANTEE */}

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="rounded-md p-6 dark:bg-[#27272a] bg-[rgb(244,244,245)]"
      >
        <h2 className="text-center font-bold underline sm:text-2xl text-lg bg-clip-text text-transparent animate-title-gradient">
          Warranty & Service Guarantee
        </h2>

        <p className="text-center mt-3 mb-10">
          Reliable warranty protection and guaranteed service quality for all dairy machines.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
          {[
            { num: 1, label: "Year Guarantee", bar: 100 },
            { num: 100, label: "Quality %", bar: 100 },
            { num: 500, label: "Machines Installed", bar: 90 },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-4 rounded-md text-center transition-all hover:shadow-[0_0_20px_rgba(56,189,248,0.6)] dark:bg-[#1a1a1c] bg-[rgb(214,214,217)]"
            >
              <div className="text-3xl font-bold text-sky-600">
                <CountUp end={stat.num} duration={2} enableScrollSpy scrollSpyOnce />
                {stat.label.includes("%") ? "%" : "+"}
              </div>

              <p className="text-sm mt-1 mb-2">{stat.label}</p>

              <div className="w-full h-2 rounded-full bg-gray-300 dark:bg-gray-700">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${stat.bar}%` }}
                  transition={{ duration: 1.2 }}
                  viewport={{ once: true }}
                  className="h-full bg-sky-600 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <motion.div className="p-5 rounded-md flex gap-4 items-start dark:bg-[#1a1a1c] bg-[rgb(214,214,217)]">
            <FaShieldAlt className="text-3xl text-sky-600" />
            <div>
              <h3 className="font-semibold mb-1 bg-clip-text text-transparent animate-title-gradient">
                Machine Guarantee
              </h3>
              <p className="text-sm mb-2">
                Coverage against manufacturing defects and faults.
              </p>
              <ul className="text-sm space-y-1">
                <li className="flex gap-2 items-center">
                  <FaCheckCircle className="text-green-500" />
                  1 Year Standard Guarantee
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div className="p-5 rounded-md flex gap-4 items-start dark:bg-[#1a1a1c] bg-[rgb(214,214,217)]">
            <FaTools className="text-3xl text-sky-600" />
            <div>
              <h3 className="font-semibold mb-1 bg-clip-text text-transparent animate-title-gradient">
                Service Guarantee
              </h3>
              <p className="text-sm mb-2">
                Professional installation and repair assurance.
              </p>
              <ul className="text-sm space-y-1">
                <li className="flex gap-2 items-center">
                  <FaCheckCircle className="text-green-500" />
                  Verified installation quality
                </li>
                <li className="flex gap-2 items-center">
                  <FaCheckCircle className="text-green-500" />
                  Performance checked after service
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* SERVICE AREAS */}

      <motion.section className="rounded-md p-6 dark:bg-[#27272a] bg-[rgb(244,244,245)]">
        <h2 className="text-center font-bold underline sm:text-2xl text-lg bg-clip-text text-transparent animate-title-gradient">
          Dairy Machine Service Areas in North Rajasthan
        </h2>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {serviceAreas.map((area) => (
            <li key={area.name} className="p-4 rounded-md dark:bg-[#1a1a1c] bg-[rgb(214,214,217)]">
              <h3 className="font-semibold bg-clip-text text-transparent animate-title-gradient">
                {area.name}
              </h3>
              <p className="text-sm mt-1">{area.description}</p>
            </li>
          ))}
        </ul>
      </motion.section>

      {/* SERVICES */}

      {services.map((service) => (
        <motion.section
          key={service.id}
          className="rounded-md p-6 dark:bg-[#27272a] bg-[rgb(244,244,245)]"
        >
          <h2 className="text-center font-bold underline sm:text-xl bg-clip-text text-transparent animate-title-gradient">
            {service.name}
          </h2>

          <div className="flex flex-wrap justify-center gap-6 mt-6">
            {service.images.map((image) => (
              <figure
                key={image.id}
                className="flex flex-col items-center rounded-lg p-6 pb-4 dark:bg-[#1a1a1c] bg-[rgb(214,214,217)]"
              >
                {/* Aspect Ratio Box */}
                <div className="w-[220px] aspect-[4/3] flex items-center justify-center">
                  <Image
                    src={image.url}
                    alt={image.alt}
                    isBlurred
                    loading="lazy"
                    width={400}
                    height={300}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                <figcaption className="mt-3 text-center bg-clip-text text-transparent animate-title-gradient">
                  {image.figcaption}
                </figcaption>
              </figure>
            ))}
          </div>
        </motion.section>
      ))}
    </div>
  );
}
