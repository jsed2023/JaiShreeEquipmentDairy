
import { useState } from "react";
import { spareParts } from "@/config/spareparts";

type SparePart = (typeof spareParts)[number];

interface SparePartDetailProps {
  product: SparePart;
}

export default function SparePartDetail({
  product,
}: SparePartDetailProps) {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [address, setAddress] = useState("");

  const whatsappNumber = "917375082341";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const qty = Number(quantity);

    if (!Number.isInteger(qty) || qty < 1) {
      alert("Please enter a valid quantity.");
      return;
    }

    const message = `
Hello Jai Shree Equipment Dairy,

I want to enquire about the following spare part.

Product Name: ${product.name}
SKU: ${product.sku || "N/A"}
Quantity: ${qty}
Price: ${product.price || "Please share price"}
Customer Name: ${name}
Mobile Number: ${mobile}
Delivery Address: ${address}

Please share availability and confirm my order.

Thank you.
    `.trim();

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:py-12">

        {/* Product Overview */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">

          {/* Product Image */}
          <div className="flex min-h-[320px] items-center justify-center overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:min-h-[480px]">
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
                  <strong className="text-slate-900">SKU:</strong> {product.sku}
                </p>
              )}

              {product.warranty && (
                <p className="text-sm text-slate-600">
                  <strong className="text-slate-900">Warranty:</strong> {product.warranty}
                </p>
              )}

              {product.category && (
                <p className="text-sm text-slate-600">
                  <strong className="text-slate-900">Category:</strong> {product.category}
                </p>
              )}

            </div>
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
        {product.keyFeatures?.length > 0 && (
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
                        <tr key={key} className="border-b border-slate-200 last:border-0">
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
              <p className="mt-1 font-semibold text-slate-900">{product.name}</p>
            </div>

            {product.sku && (
              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">SKU</p>
                <p className="mt-1 font-semibold text-slate-900">{product.sku}</p>
              </div>
            )}

            {product.category && (
              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Category</p>
                <p className="mt-1 font-semibold text-slate-900">{product.category}</p>
              </div>
            )}

            {product.stockStatus && (
              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Availability</p>
                <p className="mt-1 font-semibold text-slate-900">{product.stockStatus}</p>
              </div>
            )}

            {product.warranty && (
              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Warranty</p>
                <p className="mt-1 font-semibold text-slate-900">{product.warranty}</p>
              </div>
            )}
          </div>
        </section>

        {/* Enquiry Form */}
        <section
          id="enquiry-form"
          className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg sm:p-10"
        >
          <div className="mx-auto max-w-3xl">

            <div className="mb-8 text-center">
              <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
                Product Enquiry
              </span>

              <h2 className="mt-5 text-2xl font-bold text-slate-900 sm:text-3xl">
                Submit Your Enquiry
              </h2>

              <p className="mt-3 text-slate-600">
                Fill in your details to enquire about this spare part.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Product Name */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Product Name
                </label>
                <input
                  type="text"
                  value={product.name}
                  readOnly
                  className="w-full rounded-xl border border-slate-200 bg-slate-100 px-4 py-3 text-slate-700 outline-none"
                />
              </div>

              {/* Quantity and Price */}
              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label htmlFor="quantity" className="mb-2 block text-sm font-semibold text-slate-700">
                    Quantity *
                  </label>
                  <input
                    id="quantity"
                    type="number"
                    min="1"
                    step="1"
                    required
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Product Price
                  </label>
                  <input
                    type="text"
                    value={product.price || "Contact for Price"}
                    readOnly
                    className="w-full rounded-xl border border-slate-200 bg-slate-100 px-4 py-3 text-slate-700 outline-none"
                  />
                </div>

              </div>

              {/* Customer Name */}
              <div>
                <label htmlFor="customerName" className="mb-2 block text-sm font-semibold text-slate-700">
                  Your Name *
                </label>
                <input
                  id="customerName"
                  type="text"
                  required
                  minLength={2}
                  autoComplete="name"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                />
              </div>

              {/* Mobile */}
              <div>
                <label htmlFor="mobile" className="mb-2 block text-sm font-semibold text-slate-700">
                  Mobile Number *
                </label>
                <input
                  id="mobile"
                  type="tel"
                  required
                  pattern="[6-9][0-9]{9}"
                  maxLength={10}
                  autoComplete="tel-national"
                  placeholder="Enter 10-digit mobile number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                />
              </div>

              {/* Address */}
              <div>
                <label htmlFor="address" className="mb-2 block text-sm font-semibold text-slate-700">
                  Full Delivery Address *
                </label>
                <textarea
                  id="address"
                  required
                  minLength={10}
                  rows={4}
                  autoComplete="street-address"
                  placeholder="House number, street, city, district, state and PIN code"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full resize-y rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-green-600 px-7 py-4 text-base font-bold text-white shadow-lg transition hover:bg-green-700"
              >
                Submit Enquiry on WhatsApp
              </button>

              <p className="text-center text-xs text-slate-500">
                Your enquiry details will open in WhatsApp for confirmation.
              </p>

            </form>
          </div>
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
