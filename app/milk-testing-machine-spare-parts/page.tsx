import Image from "next/image";
import { spareParts } from "@/config/spareParts";

export default function SparePartsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      <h1 className="text-4xl font-bold text-center mb-3">
        Milk Testing Machine Spare Parts
      </h1>

      <p className="text-center text-gray-600 mb-10">
        Genuine spare parts for milk analyzers and dairy testing equipment.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {spareParts.map((product) => (
          <div
            key={product.id}
            className="border rounded-xl bg-white shadow-md overflow-hidden"
          >
            <Image
              src={product.photo}
              alt={product.name}
              width={500}
              height={500}
              className="w-full h-64 object-contain p-4"
            />

            <div className="p-5">

              <h2 className="text-xl font-bold">
                {product.name}
              </h2>

              <div className="mt-3 space-y-1 text-sm">
                <p><strong>SKU:</strong> {product.sku}</p>
                <p><strong>Price:</strong> {product.price}</p>
                <p><strong>Category:</strong> {product.category}</p>
                <p><strong>Stock Status:</strong> {product.stockStatus}</p>
                <p><strong>Warranty:</strong> {product.warranty}</p>
              </div>

              <p className="mt-4 text-gray-600">
                {product.description}
              </p>

              <div className="mt-5">
                <h3 className="font-semibold mb-2">
                  Specifications
                </h3>

                <table className="w-full text-sm border">
                  <tbody>
                    {Object.entries(product.specifications).map(
                      ([key, value]) => (
                        <tr key={key}>
                          <td className="border px-2 py-2 font-medium">
                            {key}
                          </td>
                          <td className="border px-2 py-2">
                            {value}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>

              <a
                href="https://wa.me/919999999999"
                target="_blank"
                className="block mt-5 text-center bg-green-600 text-white py-3 rounded-lg"
              >
                Enquire Now
              </a>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
