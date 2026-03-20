"use client";

import { PiChatsDuotone } from "react-icons/pi";
import { FaEarthAmericas } from "react-icons/fa6";
import { FcCallback } from "react-icons/fc";
import { Input, Textarea, Button, } from "@nextui-org/react";
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
  consent: boolean;
}

export default function ContactPage() {
  const { register, handleSubmit, reset,  } =
    useForm<ContactFormData>();

  const [sending, setSending] = useState(false);

  const handleOnSubmit = async (data: ContactFormData) => {

    if (!data.consent) {
      alert("Please accept Terms & Conditions and Privacy Policy");
      return;
    }

    setSending(true);

    const phoneNumber = "918112294173";

    const text = `📩 New Contact Request
──────────────────────
👤 Name: ${data.firstName} ${data.lastName ?? ""}
📞 Mobile: ${data.mobileNumber}
📧 Email: ${data.email ?? ""}
📝 Message: ${data.query ?? ""}
`
      .replace(/ /g, "%20")
      .replace(/\n/g, "%0A");

    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");

    reset();
    setSending(false);
  };

  return (
    <div id="contact" className="w-full overflow-x-hidden">

      {/* ===== Header ===== */}

           <div className="mt-4 text-sm sm:text-base text-stone-600 dark:text-white/90 border rounded-lg p-4 max-h-100 space-y-3">
          <h1 className="text-center font-bold underline sm:text-4xl text-lg
             bg-clip-text text-transparent animate-title-gradient">
            Contact
          </h1></div>
             <section
          className="rounded-xl dark:bg-[#27272a]bg-[rgb(244,244,245)] p-4 flex flex-col gap-y-5"
        ><div className="mt-4 text-sm sm:text-base text-stone-600 dark:text-white/90 border rounded-lg p-4 max-h-100 space-y-3">
             <h2>
        <p className="text-center max-w-4xl mx-auto text-stone-700 dark:text-white/80">
          Get in touch with Jai Shree Equipment Dairy for milk analyzers, DPU milk
          collection units, milking machines and dairy equipment in Sri
          Ganganagar, Hanumangarh, Suratgarh, Bikaner And Nearby Areas.
        </p></h2></div></section>
      <div className="flex max-md:flex-col gap-8 justify-between w-full">

        {/* =======================
            Contact Details
        ======================= */}

        <section
          className="rounded-xl dark:bg-[#27272a]
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
              Shop No:-B-42, Rohit Udhyog Market,<br />
              Near HP Gas Agency, Shiv Circle Road,<br />
              Sri Ganganagar, Rajasthan - 335001
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 font-bold">
              <FcCallback className="text-2xl" />
              <h3>Call Us</h3>
            </div>
            <p className="text-stone-500">
              +91 8112294173
            </p>
          </div>
          {/* ===== Legal Text ===== */}

            <div className="mt-4 text-sm sm:text-base text-stone-600 dark:text-white/90 border rounded-lg p-4 max-h-100 space-y-3">

  <h3 className="text-lg sm:text-xl font-bold">Terms & Conditions</h3>

  <p className="leading-relaxed">
    By accessing this website and submitting the contact form, you agree to be
    bound by the Terms and Conditions of Jai Shree Equipment Dairy. The
    information provided must be accurate and complete.
  </p>

  <p className="leading-relaxed">
    Jai Shree Equipment Dairy may contact you through phone calls,
    WhatsApp messages, or emails regarding your inquiry, products,
    or services.
  </p>

  <p className="leading-relaxed">
    We reserve the right to update product details, pricing, and
    information without prior notice.
  </p>

  <h3 className="text-lg sm:text-xl font-bold mt-4">Privacy Policy</h3>

  <p className="leading-relaxed">
    We collect personal information including your name, contact
    number, email address, and message to respond to your inquiry.
  </p>

  <p className="leading-relaxed">
    Your information will not be shared with third parties unless
    required by law.
  </p>

  <p className="leading-relaxed">
    By submitting this form, you consent to the use of your data as
    outlined in this policy.
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
          <p className="dark:text-white/60 text-stone-500">
              Reach out to Jai Shree Equipment Dairy for inquiries about dairy
              equipment in Sri Ganganagar, Bikaner, Hanumangarh, and Anupgarh.
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
      
       <div className="mt-4 text-sm sm:text-base text-stone-600 dark:text-white/90 border rounded-lg p-4 max-h-100 space-y-3">
      <section
          className="rounded-xl dark:bg-[#27272a]
          bg-[rgb(244,244,245)] p-4 flex flex-col gap-y-5"
        >
        <h2 className="text-xl font-bold mb-2">Areas We Service</h2>
        <p>
          Sri Ganganagar, Hanumangarh, Suratgarh, Raisinghnagar, Padampur,
          Kesrisinghpur, Anupgarh and Bikaner, Nearby, Near Me   .
        </p>
      </section>
      </div>
            {/* =======================
            Map
      ======================= */}

      <section className="mt-10">
        <h2 className="text-xl font-bold mb-4">Our Location</h2>
        <GoogleMapIframe />
      </section>

    </div>
  );
}
