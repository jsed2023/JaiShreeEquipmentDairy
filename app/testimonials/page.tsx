"use client";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonials } from "@/lib/testimonials";

export default function TestimonialsPage() {
  return (
    <section className="sm:mt-10 mt-4 flex flex-col gap-y-8 mb-10">
      <header className="mb-12 text-center">
        <div className="bg-sky-100 dark:bg-sky-900 text-sky-900 dark:text-sky-100 py-4xl">
        <h1 className="dark:bg-[#27272a] bg-[rgb(244,244,245)] sm:w-11/12 w-11/12 text-center mx-auto py-4 rounded-lg md:text-4xl text-lg font-bold mb-12
      bg-clip-text text-transparent animate-title-gradient">
          Customer Testimonials
        </h1>
        </div>
         <div className="bg-gray-100 dark:bg-[#1f1f22] text-gray-900 dark:text-gray-50 py-2xl"> 
        <p className="mx-auto max-w-2xl text-gray-600 sm:w-11/12 w-11/12">
          Trusted feedback from dairy farmers and processing units across
          Rajasthan who rely on Jai Shree Equipment Dairy.
        </p>
        </div>
      </header>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <TestimonialCard
            key={t.id}
            name={t.name}
            role={t.role}
            location={t.location}
            message={t.message}
            rating={t.rating}
          />
        ))}
      </div>
    </section>
  );
}
