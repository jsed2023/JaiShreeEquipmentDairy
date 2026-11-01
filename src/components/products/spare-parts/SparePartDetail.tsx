
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

  // Price calculation
  const unitPrice = Number(
    String(product.price || "").replace(/[^\d.]/g, "")
  );

  const hasPrice =
    product.price !== undefined &&
    product.price !== null &&
    String(product.price).trim() !== "" &&
    Number.isFinite(unitPrice) &&
    unitPrice > 0;

  const qty = Number(quantity);

  const totalPrice = hasPrice && Number.isInteger(qty) && qty >= 1
    ? unitPrice * qty
    : null;

  // Indian currency formatting
  const formatPrice = (price: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(price);

  // WhatsApp form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!Number.isInteger(qty) || qty < 1) {
      alert("Please enter a valid quantity.");
      return;
    }

    if (name.trim().length < 2) {
      alert("Please enter your full name.");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(mobile)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (address.trim().length < 10) {
      alert("Please enter your complete delivery address.");
      return;
    }

    const message = `
Hello Jai Shree Equipment Dairy,

I want to enquire about the following spare part.

PRODUCT DETAILS
-------------------------
Product Name: ${product.name}
SKU: ${product.sku || "N/A"}
Category: ${product.category || "N/A"}

ORDER DETAILS
-------------------------
Quantity: ${qty}
Price Per Unit: ${
      hasPrice ? formatPrice(unitPrice) : "Please share price"
    }
Total Amount: ${
      totalPrice !== null
        ? formatPrice(totalPrice)
        : "Please share price"
    }

CUSTOMER DETAILS
-------------------------
Customer Name: ${name.trim()}
Mobile Number: ${mobile}
Delivery Address: ${address.trim()}

Please confirm product availability,
final pricing and delivery details.

Thank you.
Jai Shree Equipment Dairy
    `.trim();

    const whatsappUrl =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100">

      <div className="mx-auto max-w-7xl px-4 py-8 sm:py-12">

        {/* PRODUCT OVERVIEW */}

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

            {/* Enquiry CTA */}

            <a
              href="#enquiry-form"
              className="mt-7 inline-flex w-fit items-center justify-center rounded-xl bg-green-600 px-7 py-3 font-bold text-white shadow-md transition hover:bg-green-700"
            >
              Enquire Now
            </a>

          </div>

        </div>

        {/* PRODUCT DESCRIPTION */}

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

        {/* KEY FEATURES */}

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

        {/* TECHNICAL SPECIFICATIONS */}

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

        {/* ADDITIONAL PRODUCT INFORMATION */}

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

        {/* COMPACT ENQUIRY FORM */}

        <section
          id="enquiry-form"
          className="mt-10 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-4 shadow-md sm:p-6"
        >

          <div className="mx-auto max-w-2xl">

            {/* Form Heading */}

            <div className="mb-5 text-center">

              <span className="rounded-full bg-sky-100 px-3 py-1.5 text-xs font-semibold text-sky-700">
                Product Enquiry
              </span>

              <h2 className="mt-3 text-xl font-bold text-slate-900 sm:text-2xl">
                Submit Your Enquiry
              </h2>

              <p className="mt-2 text-sm text-slate-600">
                Enter your details to enquire about this spare part.
              </p>

            </div>

            <form onSubmit={handleSubmit} className="space-y-3">

              {/* PRODUCT NAME */}

              <div>

                <label
                  htmlFor="productName"
                  className="mb-1.5 block text-sm font-semibold text-slate-700"
                >
                  Product Name
                </label>

                <input
                  id="productName"
                  type="text"
                  value={product.name}
                  readOnly
                  className="w-full rounded-lg border border-slate-200 bg-slate-100 px-3 py-2.5 text-sm text-slate-700 outline-none"
                />

              </div>

              {/* QUANTITY AND UNIT PRICE */}

              <div className="grid grid-cols-2 gap-3">

                <div>

                  <label
                    htmlFor="quantity"
                    className="mb-1.5 block text-sm font-semibold text-slate-700"
                  >
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
                    className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                  />

                </div>

                <div>

                  <label
                    htmlFor="unitPrice"
                    className="mb-1.5 block text-sm font-semibold text-slate-700"
                  >
                    Price Per Unit
                  </label>

                  <input
                    id="unitPrice"
                    type="text"
                    readOnly
                    value={
                      hasPrice
                        ? formatPrice(unitPrice)
                        : "Contact for Price"
                    }
                    className="w-full rounded-lg border border-slate-200 bg-slate-100 px-3 py-2.5 text-sm text-slate-700"
                  />

                </div>

              </div>

              {/* AUTOMATIC TOTAL PRICE */}

              <div className="rounded-xl border border-green-200 bg-green-50 p-4">

                <div className="flex items-center justify-between gap-3">

                  <div>

                    <p className="text-sm font-semibold text-slate-700">
                      Total Amount
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      {qty >= 1 && Number.isInteger(qty) ? qty : 0} ×{" "}
                      {hasPrice
                        ? formatPrice(unitPrice)
                        : "Price unavailable"}
                    </p>

                  </div>

                  <p className="text-xl font-bold text-green-700">
                    {totalPrice !== null
                      ? formatPrice(totalPrice)
                      : "Price on Request"}
                  </p>

                </div>

                <p className="mt-2 text-xs text-slate-500">
                  Final price and availability will be confirmed on WhatsApp.
                </p>

              </div>

              {/* CUSTOMER NAME */}

              <div>

                <label
                  htmlFor="customerName"
                  className="mb-1.5 block text-sm font-semibold text-slate-700"
                >
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
                  className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                />

              </div>

              {/* MOBILE NUMBER */}

              <div>

                <label
                  htmlFor="mobile"
                  className="mb-1.5 block text-sm font-semibold text-slate-700"
                >
                  Mobile Number *
                </label>

                <input
                  id="mobile"
                  type="tel"
                  required
                  inputMode="numeric"
                  pattern="[6-9][0-9]{9}"
                  maxLength={10}
                  autoComplete="tel-national"
                  placeholder="Enter 10-digit mobile number"
                  value={mobile}
                  onChange={(e) =>
                    setMobile(
                      e.target.value.replace(/\D/g, "").slice(0, 10)
                    )
                  }
                  className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                />

              </div>

              {/* DELIVERY ADDRESS */}

              <div>

                <label
                  htmlFor="address"
                  className="mb-1.5 block text-sm font-semibold text-slate-700"
                >
                  Full Delivery Address *
                </label>

                <textarea
                  id="address"
                  required
                  minLength={10}
                  rows={3}
                  autoComplete="street-address"
                  placeholder="House number, street, city, district, state and PIN code"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full resize-y rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                />

              </div>

              {/* WHATSAPP SUBMIT */}

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-sm font-bold text-white shadow-md transition hover:bg-green-700 active:scale-[0.99]"
              >

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M20.52 3.48A11.78 11.78 0 0 0 12.13 0C5.55 0 .2 5.35.2 11.93c0 2.1.55 4.15 1.6 5.96L.1 24l6.25-1.64a11.9 11.9 0 0 0 5.78 1.47h.01c6.57 0 11.92-5.35 11.92-11.93a11.86 11.86 0 0 0-3.54-8.42ZM12.14 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.47 4.46-9.93 9.94-9.93 2.66 0 5.15 1.04 7.03 2.92a9.88 9.88 0 0 1 2.91 7.04c0 5.48-4.46 9.94-9.99 9.94Zm5.46-7.44c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.46-.89-.8-1.49-1.78-1.66-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.35Z" />
                </svg>

                Submit Enquiry on WhatsApp

              </button>

              <p className="text-center text-xs text-slate-500">
                Your enquiry details will open in WhatsApp for confirmation.
              </p>

            </form>

          </div>

        </section>

        {/* BACK TO SPARE PARTS */}

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
