import Image from "next/image";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

import { blogs } from "@/config/blogs";

type Props = {
  params: {
    blog: string;
  };
};

export default function BlogDetailsPage({
  params,
}: Props) {
  const blog =
    blogs[params.blog as keyof typeof blogs];

  if (!blog) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-gray-200 bg-gradient-to-br from-cyan-50 via-white to-blue-50">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          {/* Category */}
          <div className="text-center">
            <span className="rounded-full border border-cyan-200 bg-cyan-100 px-5 py-2 text-sm font-semibold tracking-wide text-cyan-700">
              {blog.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="mx-auto mt-8 max-w-5xl text-center text-4xl font-bold leading-tight text-gray-900 md:text-6xl lg:text-7xl">
            {blog.title}
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-gray-600 md:text-xl">
            {blog.description}
          </p>

          {/* Published Date */}
          <div className="mt-6 text-center">
            <span className="text-sm font-medium text-gray-500">
              Published on {blog.date}
            </span>
          </div>

          {/* Blog Image */}
          <div className="relative mx-auto mt-14 flex h-[260px] w-full max-w-5xl items-center justify-center overflow-hidden rounded-3xl border border-gray-200 bg-white p-4 shadow-xl md:h-[500px] md:p-6">
  <Image
    src={blog.image}
    alt={blog.alt}
    fill
    priority
    sizes="(max-width: 768px) 100vw, 1200px"
    className="object-contain"
  />
</div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-20">
        <article className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg md:p-14">
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-black">
            <ReactMarkdown>
              {blog.content}
            </ReactMarkdown>
          </div>
        </article>

        {/* CTA Section */}
        <div className="mt-14 rounded-3xl border border-cyan-200 bg-cyan-50 p-8 text-center shadow-md md:p-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Need Dairy Equipment?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-600">
            Contact Jai Shree Equipment Dairy
            for premium dairy machinery,
            milk analyzers, milking machines,
            and dairy equipment solutions.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
            <a
              href="tel:+917375082341"
              className="rounded-xl bg-cyan-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-cyan-700"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/917375082341"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-cyan-600 px-8 py-4 text-lg font-semibold text-cyan-700 transition hover:bg-cyan-100"
            >
              WhatsApp Inquiry
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-14 border-t border-gray-200 pt-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-gray-500">
              Published by Jai Shree Equipment Dairy
            </p>

            <span className="text-sm font-semibold text-cyan-700">
              {blog.date}
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}