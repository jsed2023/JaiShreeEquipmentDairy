import Image from "next/image";
import { notFound } from "next/navigation";

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
        <div className="mx-auto max-w-6xl px-6 py-16">
          {/* Category */}
          <div className="text-center">
            <span className="rounded-full border border-cyan-200 bg-cyan-100 px-5 py-2 text-sm font-medium text-cyan-700">
              {blog.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="mx-auto mt-8 max-w-5xl text-center text-4xl font-bold leading-tight text-gray-900 md:text-7xl">
            {blog.title}
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-gray-600">
            {blog.description}
          </p>

          {/* Blog Image */}
          <div className="relative mx-auto mt-14 flex h-[420px] w-full max-w-5xl items-center justify-center overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              priority
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg md:p-12">
          <div className="whitespace-pre-line text-lg leading-9 text-gray-700">
            {blog.content}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="text-gray-500">
              Published by Jai Shree Equipment Dairy
            </p>

            <span className="text-sm font-semibold text-blue-600">
              {blog.date}
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}