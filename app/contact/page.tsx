"use client";

import { PiChatsDuotone } from "react-icons/pi";
import { FaEarthAmericas } from "react-icons/fa6";
import { FcCallback } from "react-icons/fc";
import { Input, Textarea, Button } from "@nextui-org/react";
import { IoMdSend } from "react-icons/io";
import { useForm } from "react-hook-form";
import { useState } from "react";
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

export default function ContactPage() {
  const { register, handleSubmit, reset } =
    useForm<ContactFormData>();

  const [sending, setSending] = useState(false);

  const handleOnSubmit = async (data: ContactFormData) => {

    if (sending) return;

    setSending(true);

    const phoneNumber = "917375082341";

    const text = encodeURIComponent(`
📩 New Contact Request
──────────────────────
👤 Name: ${data.firstName} ${data.lastName ?? ""}
📞 Mobile: ${data.mobileNumber}
📧 Email: ${data.email ?? ""}
📝 Message: ${data.query ?? ""}
`);

    window.open(
      `https://wa.me/${phoneNumber}?text=${text}`,
      "_blank"
    );

    reset();
    setSending(false);
  };

  return (
    <div id="contact" className="w-full overflow-x-hidden">

      {/* ===== Header ===== */}

      <div className="my-5 mt-4 text-sm sm:text-base text-stone-600 dark:text-white/90 border rounded-lg p-4 space-y-3">
        <h1
          className="text-center font-bold underline sm:text-4xl text-lg
          bg-clip-text text-transparent animate-title-gradient"
        >
          Contact
        </h1>
      </div>

      <section
        className="rounded-xl dark:bg-[#27272a] bg-[rgb(244,244,245)] p-4 flex flex-col gap-y-5"
      >
        <div className="mt-4 text-sm sm:text-base text-stone-600 dark:text-white/90 border rounded-lg p-4 space-y-3">
          <p className="text-center max-w-4xl mx-auto text-stone-700 dark:text-white/80">
            Get in touch with Jai Shree Equipment Dairy for milk analyzers,
            DPU milk collection units, milking machines and dairy equipment
            in Sri Ganganagar, Hanumangarh, Suratgarh, Bikaner And Nearby Areas.
          </p>
        </div>
      </section>

      <div className="flex max-md:flex-col gap-8 justify-between w-full">

        {/* =======================
            Contact Details
        ======================= */}

        <section
          className="my-5 rounded-xl dark:bg-[#27272a]
          bg-[rgb(244,244,245)] p-4 flex flex-col gap-y-5"
        >

          <div>
            <div className="flex items-center gap-2 font-bold">
              <PiChatsDuotone className="text-2xl text-stone-400" />
              <h3>Chat with Us</h3>
            </div>

            <p className="text-stone-500">
              choudharydairy@outlook.com
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 font-bold">
              <FaEarthAmericas className="text-2xl text-stone-400" />
              <h3>Visit Us</h3>
            </div>

            <p className="text-stone-500">
              Shop No:-B-42, Rohit Udhyog Market,
              <br />
              Near HP Gas Agency, Shiv Circle Road,
              <br />
              Sri Ganganagar, Rajasthan - 335001
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 font-bold">
              <FcCallback className="text-2xl" />
              <h3>Call Us</h3>
            </div>

            <p className="text-stone-500">
              +91 7375082341
            </p>
          </div>

        </section>

        {/* =======================
            Contact Form
        ======================= */}

        <section className="border rounded-xl p-7 sm:p-16 w-full">

          <h1 className="font-bold text-2xl mb-2">
            Need milk analyzer and dairy equipment?
          </h1>

          <p className="dark:text-white/60 text-stone-500 mb-6">
            Reach out to Jai Shree Equipment Dairy for inquiries
            about dairy equipment in Sri Ganganagar,
            Bikaner, Hanumangarh, and Anupgarh.
          </p>

          <form
            className="flex flex-col gap-4 sm:gap-8"
            onSubmit={handleSubmit(handleOnSubmit)}
          >

            <div className="flex gap-4 max-sm:flex-col">

              <Input
                label="First Name"
                {...register("firstName", { required: true })}
              />

              <Input
                label="Last Name"
                {...register("lastName")}
              />

            </div>

            <Input
              label="Email"
              type="email"
              {...register("email")}
            />

            <Input
              label="Mobile Number"
              type="tel"
              {...register("mobileNumber", { required: true })}
            />

            <Textarea
              label="Description"
              minRows={8}
              {...register("query")}
            />

            <Button
              type="submit"
              color="danger"
              isLoading={sending}
              endContent={<IoMdSend />}
            >
              Send via WhatsApp
            </Button>

          </form>

        </section>

      </div>

      {/* ================= Service Areas ================= */}

      <div className="mt-4 text-sm sm:text-base text-stone-600 dark:text-white/90 border rounded-lg p-4 space-y-3">

        <section
          className="rounded-xl dark:bg-[#27272a]
          bg-[rgb(244,244,245)] p-4 flex flex-col gap-y-5"
        >

          <h2 className="text-xl font-bold mb-2">
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

        <h2 className="text-xl font-bold mb-4">
          Our Location
        </h2>

        <GoogleMapIframe />

      </section>

    </div>
  );
}