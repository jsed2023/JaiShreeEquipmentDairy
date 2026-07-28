"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@heroui/react";

import { PiChatsDuotone } from "react-icons/pi";
import { FaEarthAmericas } from "react-icons/fa6";
import { FcCallback } from "react-icons/fc";
import { IoMdSend } from "react-icons/io";

import GoogleMapIframe from "@/components/GoogleMapIframe";

/* =======================
   Form Types
======================= */

interface ContactFormData {
  firstName: string;
  lastName?: string;
  email?: string;
  mobileNumber: string;
  query?: string;
}

/* =======================
   Page
======================= */

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const [sending, setSending] = useState(false);

  /* =======================
     Submit
  ======================= */

  const handleOnSubmit = async (
    data: ContactFormData
  ) => {
    if (sending) return;

    setSending(true);

    const phoneNumber = "917375082341";

    const text = encodeURIComponent(`
New Contact Request
──────────────────────
Name: ${data.firstName} ${data.lastName ?? ""}
Mobile: ${data.mobileNumber}
Email: ${data.email ?? ""}
Message: ${data.query ?? ""}
`);

    window.open(
      `https://wa.me/${phoneNumber}?text=${text}`,
      "_blank",
      "noopener,noreferrer"
    );

    reset();
    setSending(false);
  };

  /* =======================
     Input Classes
  ======================= */

  const inputClasses = `
    w-full
    rounded-xl
    border
    border-gray-300
    bg-white
    px-4
    py-3
    text-sm
    text-gray-900
    outline-none
    transition
    placeholder:text-gray-400
    focus:border-blue-500
    focus:ring-2
    focus:ring-blue-500/20
    dark:border-zinc-600
    dark:bg-zinc-800
    dark:text-white
    dark:placeholder:text-gray-500
    dark:focus:border-blue-400
  `;

  return (
    <div
      id="contact"
      className="w-full overflow-x-hidden"
    >
      {/* =======================
          Header
      ======================= */}

      <div className="my-5 mt-4 space-y-3 rounded-lg border p-4 text-sm text-stone-600 sm:text-base dark:border-zinc-700 dark:text-white/90">
        <h1
          className="
            bg-linear-to-r
            from-purple-600
            via-blue-600
            to-cyan-500
            bg-clip-text
            text-center
            text-lg
            font-bold
            text-transparent
            underline
            sm:text-4xl
          "
        >
          Contact
        </h1>
      </div>

      {/* =======================
          Intro
      ======================= */}

      <section
        className="
          flex flex-col gap-y-5
          rounded-xl
          bg-[rgb(244,244,245)]
          p-4
          dark:bg-[#27272a]
        "
      >
        <div className="mt-4 space-y-3 rounded-lg border p-4 text-sm text-stone-600 sm:text-base dark:border-zinc-700 dark:text-white/90">
          <p className="mx-auto max-w-4xl text-center text-stone-700 dark:text-white/80">
            Get in touch with Jai Shree Equipment Dairy for
            milk analyzers, DPU milk collection units,
            milking machines and dairy equipment in Sri
            Ganganagar, Hanumangarh, Suratgarh, Bikaner and
            nearby areas.
          </p>
        </div>
      </section>

      {/* =======================
          Main Content
      ======================= */}

      <div className="flex w-full justify-between gap-8 max-md:flex-col">
        {/* =======================
            Contact Details
        ======================= */}

        <section
          className="
            my-5
            flex
            flex-col
            gap-y-5
            rounded-xl
            bg-[rgb(244,244,245)]
            p-4
            dark:bg-[#27272a]
            md:min-w-72
          "
        >
          {/* Email */}

          <div>
            <div className="flex items-center gap-2 font-bold">
              <PiChatsDuotone className="text-2xl text-stone-400" />

              <h2>Chat with Us</h2>
            </div>

            <a
              href="mailto:choudharydairy@outlook.com"
              className="
                break-all
                text-stone-500
                transition
                hover:text-blue-600
                dark:text-gray-400
                dark:hover:text-blue-400
              "
            >
              choudharydairy@outlook.com
            </a>
          </div>

          {/* Address */}

          <div>
            <div className="flex items-center gap-2 font-bold">
              <FaEarthAmericas className="text-2xl text-stone-400" />

              <h2>Visit Us</h2>
            </div>

            <address className="text-stone-500 not-italic dark:text-gray-400">
              Shop No:-B-42, Rohit Udhyog Market,
              <br />
              Near HP Gas Agency, Shiv Circle Road,
              <br />
              Sri Ganganagar, Rajasthan - 335001
            </address>
          </div>

          {/* Phone */}

          <div>
            <div className="flex items-center gap-2 font-bold">
              <FcCallback className="text-2xl" />

              <h2>Call Us</h2>
            </div>

            <a
              href="tel:+917375082341"
              className="
                text-stone-500
                transition
                hover:text-blue-600
                dark:text-gray-400
                dark:hover:text-blue-400
              "
            >
              +91 7375082341
            </a>
          </div>
        </section>

        {/* =======================
            Contact Form
        ======================= */}

        <section className="w-full rounded-xl border p-7 sm:p-10 md:p-12 lg:p-16 dark:border-zinc-700">
          <h2 className="mb-2 text-2xl font-bold">
            Need milk analyzer and dairy equipment?
          </h2>

          <p className="mb-6 text-stone-500 dark:text-white/60">
            Reach out to Jai Shree Equipment Dairy for
            inquiries about dairy equipment in Sri
            Ganganagar, Bikaner, Hanumangarh, and Anupgarh.
          </p>

          <form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit(handleOnSubmit)}
          >
            {/* Name */}

            <div className="flex gap-4 max-sm:flex-col">
              <div className="w-full">
                <label
                  htmlFor="firstName"
                  className="mb-1.5 block text-sm font-semibold"
                >
                  First Name
                  <span className="ml-1 text-red-500">
                    *
                  </span>
                </label>

                <input
                  id="firstName"
                  type="text"
                  placeholder="Enter first name"
                  autoComplete="given-name"
                  className={inputClasses}
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                />

                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              <div className="w-full">
                <label
                  htmlFor="lastName"
                  className="mb-1.5 block text-sm font-semibold"
                >
                  Last Name
                </label>

                <input
                  id="lastName"
                  type="text"
                  placeholder="Enter last name"
                  autoComplete="family-name"
                  className={inputClasses}
                  {...register("lastName")}
                />
              </div>
            </div>

            {/* Email */}

            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-semibold"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                placeholder="Enter email address"
                autoComplete="email"
                className={inputClasses}
                {...register("email")}
              />
            </div>

            {/* Mobile */}

            <div>
              <label
                htmlFor="mobileNumber"
                className="mb-1.5 block text-sm font-semibold"
              >
                Mobile Number
                <span className="ml-1 text-red-500">
                  *
                </span>
              </label>

              <input
                id="mobileNumber"
                type="tel"
                inputMode="tel"
                placeholder="Enter mobile number"
                autoComplete="tel"
                className={inputClasses}
                {...register("mobileNumber", {
                  required: "Mobile number is required",
                })}
              />

              {errors.mobileNumber && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.mobileNumber.message}
                </p>
              )}
            </div>

            {/* Message */}

            <div>
              <label
                htmlFor="query"
                className="mb-1.5 block text-sm font-semibold"
              >
                Description
              </label>

              <textarea
                id="query"
                rows={7}
                placeholder="Tell us which dairy equipment you need..."
                className={`${inputClasses} resize-y`}
                {...register("query")}
              />
            </div>

            {/* Submit */}

            <Button
              type="submit"
              variant="danger"
              isDisabled={sending}
              className="w-full sm:w-fit"
            >
              <span className="flex items-center justify-center gap-2 font-semibold">
                <IoMdSend className="text-lg" />

                {sending
                  ? "Opening WhatsApp..."
                  : "Send via WhatsApp"}
              </span>
            </Button>
          </form>
        </section>
      </div>

      {/* =======================
          Service Areas
      ======================= */}

      <div className="mt-4 space-y-3 rounded-lg border p-4 text-sm text-stone-600 sm:text-base dark:border-zinc-700 dark:text-white/90">
        <section
          className="
            flex
            flex-col
            gap-y-5
            rounded-xl
            bg-[rgb(244,244,245)]
            p-4
            dark:bg-[#27272a]
          "
        >
          <h2 className="mb-2 text-xl font-bold">
            Areas We Service
          </h2>

          <p>
            Sri Ganganagar, Hanumangarh, Suratgarh,
            Raisinghnagar, Padampur, Kesrisinghpur,
            Anupgarh and Bikaner.
          </p>
        </section>
      </div>

      {/* =======================
          Map
      ======================= */}

      <section className="mt-10">
        <h2 className="mb-4 text-xl font-bold">
          Our Location
        </h2>

        <GoogleMapIframe />
      </section>
    </div>
  );
}