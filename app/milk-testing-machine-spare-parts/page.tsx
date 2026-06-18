"use client";

import { useState } from "react";
import Image from "next/image";
import { spareParts } from "@/config/spareparts";

export default function SparePartsPage() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">

      {/* H1 */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">
          Milk Testing Machine Spare Parts
        </h1>

        <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
          Genuine milk analyzer spare parts including pumps,
          sensors, PCB boards, LCD displays, thermal printers,
          solenoid valves and dairy equipment accessories.
        </p>
      </div>

      {/* H2 */}
      <h2 className="text-3xl font-semibold mb-8">
        Available Milk Analyzer Spare Parts
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {spareParts.map((product) => (
          <article
            key={product.id}
            className="bg-white border rounded-xl shadow hover:shadow-lg transition"
          >
            <Image
              src={product.photo}
              alt={product.name}
              width={500}
              height={500}
              className="w-full h-64 object-contain p-4"
            />

            <div className="p-5">

              {/* H3 */}
              <h3 className="text-xl font-bold">
                {product.name}
              </h3>

              <p className="text-blue-600 font-bold text-2xl mt-2">
                {product.price}
              </p>

              <div className="mt-4 flex gap-2">
                <button
                  onClick={() =>
                    setOpenId(
                      openId === product.id
                        ? null
                        : product.id
                    )
                  }
                  className="flex-1 border py-2 rounded-lg hover:bg-slate-100"
                >
                  {openId === product.id
                    ? "Hide Details"
                    : "View Details"}
                </button>
              </div>

              {openId === product.id && (
                <div className="mt-4 border-t pt-4">

                  <p>
                    <strong>SKU:</strong> {product.sku}
                  </p>

                  <p>
                    <strong>Category:</strong>{" "}
                    {product.category}
                  </p>

                  <p>
                    <strong>Stock Status:</strong>{" "}
                    {product.stockStatus}
                  </p>

                  <p>
                    <strong>Warranty:</strong>{" "}
                    {product.warranty}
                  </p>

                  <p className="mt-3 text-slate-600">
                    {product.description}
                  </p>

                  <h4 className="font-semibold mt-4 mb-2">
                    Specifications
                  </h4>

                  <table className="w-full text-sm border">
                    <tbody>
                      {Object.entries(
                        product.specifications
                      ).map(([key, value]) => (
                        <tr key={key}>
                          <td className="border px-2 py-2 font-medium bg-slate-50">
                            {key}
                          </td>

                          <td className="border px-2 py-2">
                            {String(value)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <a
                    href={`https://wa.me/917375082341?text=Hello,%20I%20am%20interested%20in%20${encodeURIComponent(
                      product.name
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-4 bg-green-600 text-white text-center py-3 rounded-lg hover:bg-green-700"
                  >
                    WhatsApp Enquiry
                  </a>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* H2 */}
      <div className="mt-16">
        <h2 className="text-3xl font-semibold mb-6">
          Why Choose Our Dairy Equipment Spare Parts
        </h2>

        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>Genuine Quality Components</li>
          <li>Fast Delivery Across India</li>
          <li>Technical Support Available</li>
          <li>Affordable Pricing</li>
          <li>Compatible With Leading Milk Analyzers</li>
        </ul>
      </div>

      {/* H2 */}
      <div className="mt-16">
        <h2 className="text-3xl font-semibold mb-6">
          Applications of Milk Testing Machine Spare Parts
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div>
            <h3 className="text-xl font-semibold">
              Dairy Farms
            </h3>
            <p className="mt-2">
              Reliable spare parts for dairy operations.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              Milk Collection Centers
            </h3>
            <p className="mt-2">
              Components for milk testing and collection.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              Dairy Processing Plants
            </h3>
            <p className="mt-2">
              Replacement parts for dairy equipment.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}