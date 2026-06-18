"use client";

import { useState } from "react";
import Image from "next/image";
import { spareParts } from "@/config/spareparts";

export default function SparePartsPage() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {spareParts.map((product) => (
        <div
          key={product.id}
          className="bg-white border rounded-xl shadow"
        >
          <Image
            src={product.photo}
            alt={product.name}
            width={500}
            height={500}
            className="w-full h-64 object-contain p-4"
          />

          <div className="p-5">
            <h2 className="text-xl font-bold">{product.name}</h2>

            <p className="text-blue-600 font-bold mt-2">
              {product.price}
            </p>

            <div className="mt-4 flex gap-2">
              <button
                onClick={() =>
                  setOpenId(
                    openId === product.id ? null : product.id
                  )
                }
                className="flex-1 border py-2 rounded-lg"
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
                  <strong>Category:</strong> {product.category}
                </p>

                <p>
                  <strong>Stock:</strong>{" "}
                  {product.stockStatus}
                </p>

                <p>
                  <strong>Warranty:</strong>{" "}
                  {product.warranty}
                </p>

                <p className="mt-3">
                  {product.description}
                </p>

                <h3 className="font-semibold mt-4">
                  Specifications
                </h3>

                <table className="w-full text-sm mt-2 border">
                  <tbody>
                    {Object.entries(
                      product.specifications
                    ).map(([key, value]) => (
                      <tr key={key}>
                        <td className="border px-2 py-2">
                          {key}
                        </td>
                        <td className="border px-2 py-2">
                          {String(value)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}