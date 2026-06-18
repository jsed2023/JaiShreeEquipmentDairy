import Image from "next/image";
import Link from "next/link";
import { spareParts } from "@/config/spareParts";

export default function SparePartsPage() {
  return (
    <section className="bg-slate-50 min-h-screen">

      {/* Hero Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-12">

          <div className="text-sm text-slate-500 mb-4">
            <Link href="/">Home</Link>
            <span className="mx-2">/</span>
            <span>Milk Testing Machine Spare Parts</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold">
            Milk Testing Machine Spare Parts
          </h1>

          <p className="mt-4 text-lg text-slate-600 max-w-3xl">
            Genuine milk analyzer spare parts including sensors,
            pumps, PCB boards, thermal printers, LCD displays,
            solenoid valves, SMPS power supplies and dairy
            equipment accessories.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full">
              Genuine Spare Parts
            </span>

            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full">
              Fast Delivery
            </span>

            <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full">
              Technical Support
            </span>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-10">

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {spareParts.map((product) => (
            <article
              key={product.id}
              className="bg-white border rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative bg-white h-72">
                <Image
                  src={product.photo}
                  alt={product.name}
                  fill
                  className="object-contain p-5"
                />
              </div>

              {/* Product Content */}
              <div className="p-6">

                <h2 className="text-2xl font-bold">
                  {product.name}
                </h2>

                <div className="mt-4 grid grid-cols-2 gap-2 text-sm">

                  <div>
                    <span className="font-semibold">SKU:</span>
                    <br />
                    {product.sku}
                  </div>

                  <div>
                    <span className="font-semibold">Category:</span>
                    <br />
                    {product.category}
                  </div>

                  <div>
                    <span className="font-semibold">Stock:</span>
                    <br />
                    <span className="text-green-600">
                      {product.stockStatus}
                    </span>
                  </div>

                  <div>
                    <span className="font-semibold">Warranty:</span>
                    <br />
                    {product.warranty}
                  </div>
                </div>

                <div className="mt-5">
                  <span className="text-3xl font-bold text-blue-600">
                    {product.price}
                  </span>
                </div>

                <p className="mt-4 text-slate-600">
                  {product.description}
                </p>

                {/* Specifications */}
                <div className="mt-6">
                  <h3 className="font-semibold text-lg mb-3">
                    Specifications
                  </h3>

                  <table className="w-full text-sm border rounded-lg overflow-hidden">
                    <tbody>
                      {Object.entries(product.specifications).map(
                        ([key, value]) => (
                          <tr key={key}>
                            <td className="border px-3 py-2 font-medium bg-slate-50">
                              {key}
                            </td>

                            <td className="border px-3 py-2">
                              {String(value)}
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>

                {/* Buttons */}
                <div className="mt-6 flex gap-3">

                  <a
                    href={`https://wa.me/91737502341?text=Hello,%20I%20am%20interested%20in%20${product.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-600 text-white text-center py-3 rounded-lg font-medium hover:bg-green-700"
                  >
                    WhatsApp
                  </a>

                  <Link
                    href={`/milk-testing-machine-spare-parts/${product.slug}`}
                    className="flex-1 border text-center py-3 rounded-lg font-medium hover:bg-slate-100"
                  >
                    Details
                  </Link>

                </div>
              </div>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
}