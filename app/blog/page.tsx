import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/config/blogs";

const blogList = Object.values(blogs);

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero Section */}
   <section className="relative overflow-hidden border-b border-gray-200 bg-gradient-to-br from-cyan-50 via-white to-blue-50">
  <div className="absolute inset-0 bg-gradient-to-r from-cyan-200/20 via-blue-200/20 to-purple-200/20 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-6 py-20">
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      
      {/* Box 1 */}
      <div className="rounded-3xl border border-cyan-200 bg-white p-8 shadow-lg text-center">
        <span className="inline-block rounded-full border border-cyan-300 bg-cyan-100 px-5 py-2 text-sm font-medium text-cyan-700">
          Jai Shree Equipment Dairy
        </span>
      </div>

      {/* Box 2 */}
      <div className="rounded-3xl border border-blue-200 bg-white p-8 shadow-lg text-center">
        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
          <span className="text-gray-900">Dairy Industry</span>
          <span className="block bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            Blogs & Insights
          </span>
        </h1>
      </div>

      {/* Box 3 */}
      <div className="rounded-3xl border border-purple-200 bg-white p-8 shadow-lg text-center">
        <p className="text-lg leading-8 text-gray-600">
          Explore expert blogs on milk analyzer machines, automatic milk collection
  systems (AMCS), dairy weighing scales, cream separators, milk testing
  equipment, ultrasonic milk stirrers, and modern dairy farming solutions.
  Get buying guides, maintenance tips, and the latest dairy technology
  updates from Jai Shree Equipment Dairy.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* Blog Cards */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogList.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-72 w-full overflow-hidden bg-white">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain p-5 transition duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-cyan-100 px-4 py-1 text-xs font-semibold text-cyan-700">
                    {blog.category}
                  </span>

                  <span className="text-sm text-gray-500">
                    {blog.date}
                  </span>
                </div>

                <h2 className="mt-5 text-2xl font-bold leading-snug text-gray-900 transition-colors duration-300 group-hover:text-cyan-600">
                  {blog.title}
                </h2>

                <p className="mt-4 flex-1 leading-7 text-gray-600">
                  {blog.description}
                </p>

                <div className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600">
                  Read Full Article
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}