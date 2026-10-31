import { spareParts } from "@/config/spareparts";

type SparePart = (typeof spareParts)[number];

interface SparePartDetailProps {
  product: SparePart;
}

export default function SparePartDetail({
  product,
}: SparePartDetailProps) {
  const whatsappUrl = `https://wa.me/917375082341?text=${encodeURIComponent(
    `Hello, I am interested in ${product.name}`
  )}`;

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:py-12">

        {/* Product Overview */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">

          {/* Product Image */}
          <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:min-h-[480px]">
            <img
              src={product.photo}
              alt={product.alt || product.name}
              title={product.name}
              className="max-h-[440px] w-full object-contain"
              loading="eager"
              fetchPriority="high"
            />
          </div>

          {/* Product Information */}
          <div className="flex flex-col justify-center">

            {product.category && (
              <span className="mb-4 inline-flex w-fit rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
                {product.category}
              </span>
            )}

            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {product.name}
            </h1>

            {product.price && (
              <p className="mt-5 text-2xl font-bold text-sky-700">
                {product.price}
              </p>
            )}

            {product.stockStatus && (
              <p className="mt-3 text-sm font-semibold text-green-700">
                {product.stockStatus}
              </p>
            )}

            <p className="mt-6 text-base leading-8 text-slate-600">
              {product.metaDescription || product.description}
            </p>

            <div className="mt-6 space-y-3 rounded-2xl border border-slate-200 bg-white p-5">

              {product.sku && (
                <p className="text-sm text-slate-600">
                  <strong className="text-slate-900">SKU:</strong>{" "}
                  {product.sku}
                </p>
              )}

              {product.warranty && (
                <p className="text-sm text-slate-600">
                  <strong className="text-slate-900">Warranty:</strong>{" "}
                  {product.warranty}
                </p>
              )}

              {product.category && (
                <p className="text-sm text-slate-600">
                  <strong className="text-slate-900">Category:</strong>{" "}
                  {product.category}
                </p>
              )}

            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-green-600 px-7 py-4 text-base font-bold text-white shadow-lg transition hover:bg-green-700 sm:w-fit"
            >
              Enquire on WhatsApp
            </a>

          </div>
        </div>

        {/* Product Description */}
        {product.description && (
          <section className="mt-14 rounded-3xl bg-white p-6 shadow-sm sm:p-9">

            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Product Description
            </h2>

            <p className="mt-5 whitespace-pre-line text-base leading-8 text-slate-600">
              {product.description}
            </p>

          </section>
        )}

        {/* Key Features */}
        {product.keyFeatures && product.keyFeatures.length > 0 && (
          <section className="mt-10 rounded-3xl bg-white p-6 shadow-sm sm:p-9">

            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Key Features
            </h2>

            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {product.keyFeatures.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 rounded-xl bg-slate-50 p-4 text-slate-700"
                >
                  <span className="mt-1 text-sky-600">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

          </section>
        )}

        {/* Technical Specifications */}
        {product.specifications &&
          Object.keys(product.specifications).length > 0 && (
            <section className="mt-10 rounded-3xl bg-white p-6 shadow-sm sm:p-9">

              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Technical Specifications
              </h2>

              <div className="mt-6 overflow-x-auto">
                <table className="w-full border-collapse text-left">
                  <tbody>
                    {Object.entries(product.specifications).map(
                      ([key, value]) => (
                        <tr
                          key={key}
                          className="border-b border-slate-200 last:border-0"
                        >
                          <th className="w-1/2 px-4 py-4 font-semibold text-slate-900">
                            {key}
                          </th>

                          <td className="px-4 py-4 text-slate-600">
                            {String(value)}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>

            </section>
          )}

        {/* Additional Product Information */}
        <section className="mt-10 rounded-3xl bg-white p-6 shadow-sm sm:p-9">

          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Additional Product Information
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">

            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Product Name</p>
              <p className="mt-1 font-semibold text-slate-900">
                {product.name}
              </p>
            </div>

            {product.sku && (
              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">SKU</p>
                <p className="mt-1 font-semibold text-slate-900">
                  {product.sku}
                </p>
              </div>
            )}

            {product.category && (
              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Category</p>
                <p className="mt-1 font-semibold text-slate-900">
                  {product.category}
                </p>
              </div>
            )}

            {product.stockStatus && (
              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Availability</p>
                <p className="mt-1 font-semibold text-slate-900">
                  {product.stockStatus}
                </p>
              </div>
            )}

            {product.warranty && (
              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Warranty</p>
                <p className="mt-1 font-semibold text-slate-900">
                  {product.warranty}
                </p>
              </div>
            )}

          </div>
        </section>

        {/* WhatsApp CTA */}
        <section className="mt-12 rounded-3xl bg-gradient-to-r from-sky-300 to-blue-300 px-6 py-12 text-center sm:px-10">

          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Need This Spare Part?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-800">
            Contact Jai Shree Equipment Dairy for genuine milk testing machine
            spare parts, product availability and technical assistance.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center justify-center rounded-xl bg-green-600 px-8 py-4 font-bold text-white transition hover:bg-green-700"
          >
            Get a Quote on WhatsApp
          </a>

        </section>

        {/* Back Link */}
        <div className="mt-10">
          <a
            href="/milk-testing-machine-spare-parts"
            className="inline-flex items-center gap-2 font-semibold text-sky-700 transition hover:text-sky-900"
          >
            ← Back to All Spare Parts
          </a>
        </div>

      </div>
    </main>
  );
}
