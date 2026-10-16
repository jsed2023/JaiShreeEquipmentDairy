import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { spareParts } from "@/config/spareparts";

/* =========================
   STATIC RENDERING
========================= */

export const dynamic = "force-static";

/* =========================
   TYPES
========================= */

type PageProps = {
  params: Promise<{
    "spare-parts-name": string;
  }>;
};

/* =========================
   STATIC PARAMS
========================= */

export function generateStaticParams() {
  return spareParts.map((product) => ({
    "spare-parts-name": product.url,
  }));
}

/* =========================
   GET SPARE PART
========================= */

function getSparePart(url: string) {
  let normalizedUrl: string;

  try {
    normalizedUrl = decodeURIComponent(url).trim().toLowerCase();
  } catch {
    return undefined;
  }

  return spareParts.find(
    (item) => item.url.trim().toLowerCase() === normalizedUrl
  );
}

/* =========================
   WHATSAPP URL
========================= */

function getWhatsAppUrl(productName: string) {
  const message = `Hello, I am interested in ${productName}`;

  return `https://wa.me/917375082341?text=${encodeURIComponent(message)}`;
}

/* =========================
   PRODUCT DETAIL PAGE
========================= */

export default async function SparePartDetailPage({
  params,
}: PageProps) {
  const { "spare-parts-name": url } = await params;

  const product = getSparePart(url);

  if (!product) {
    notFound();
  }

  const whatsappUrl = getWhatsAppUrl(product.name);

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:py-12">
      {/* PRODUCT DETAILS */}
      <section className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        {/* PRODUCT IMAGE */}
        <div className="relative min-h-72 overflow-hidden rounded-3xl border border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-900 sm:min-h-96">
          <Image
            src={product.photo}
            alt={product.alt || product.name}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain p-6 sm:p-10"
          />
        </div>

        {/* PRODUCT INFORMATION */}
        <div className="flex flex-col justify-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-sky-600">
            {product.category}
          </p>

          <h1 className="text-3xl font-extrabold leading-tight text-zinc-900 dark:text-white sm:text-4xl">
            {product.name}
          </h1>

          <p className="mt-5 text-2xl font-bold text-sky-600 sm:text-3xl">
            {product.price}
          </p>

          {/* STOCK STATUS */}
          <div className="mt-4">
            <span className="inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-400">
              {product.stockStatus}
            </span>
          </div>

          {/* SHORT DESCRIPTION */}
          <p className="mt-6 leading-7 text-zinc-600 dark:text-zinc-300">
            {product.metaDescription}
          </p>

          {/* SKU AND WARRANTY */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-zinc-100 p-4 dark:bg-zinc-800">
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Product SKU
              </p>

              <p className="mt-1 break-all font-bold text-zinc-900 dark:text-white">
                {product.sku}
              </p>
            </div>

            <div className="rounded-xl bg-zinc-100 p-4 dark:bg-zinc-800">
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Warranty
              </p>

              <p className="mt-1 font-bold text-zinc-900 dark:text-white">
                {product.warranty}
              </p>
            </div>
          </div>

          {/* WHATSAPP ENQUIRY */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-xl bg-green-600 px-6 py-4 text-center font-bold text-white transition hover:bg-green-700"
            >
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* PRODUCT DESCRIPTION */}
      <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-700 dark:bg-zinc-900 sm:mt-16 sm:p-8">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
          Product Description
        </h2>

        <p className="mt-4 whitespace-pre-line leading-8 text-zinc-600 dark:text-zinc-300">
          {product.description}
        </p>
      </section>

      {/* KEY FEATURES */}
      {product.keyFeatures?.length > 0 && (
        <section className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-700 dark:bg-zinc-900 sm:p-8">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
            Key Features
          </h2>

          <ul className="mt-5 grid gap-4 sm:grid-cols-2">
            {product.keyFeatures.map((feature, index) => (
              <li
                key={`${product.id}-feature-${index}`}
                className="flex items-start gap-3 leading-7 text-zinc-700 dark:text-zinc-300"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 font-bold text-green-700 dark:bg-green-900/30 dark:text-green-400">
                  ✓
                </span>

                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* TECHNICAL SPECIFICATIONS */}
      {product.specifications &&
        Object.keys(product.specifications).length > 0 && (
          <section className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-700 dark:bg-zinc-900 sm:p-8">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              Technical Specifications
            </h2>

            <div className="mt-5 overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-700">
              <table className="w-full min-w-[280px] border-collapse text-sm sm:text-base">
                <tbody>
                  {Object.entries(product.specifications).map(
                    ([key, value]) => (
                      <tr
                        key={`${product.id}-${key}`}
                        className="border-b border-zinc-200 last:border-b-0 dark:border-zinc-700"
                      >
                        <th
                          scope="row"
                          className="w-2/5 bg-zinc-100 px-4 py-3 text-left font-semibold text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200"
                        >
                          {key}
                        </th>

                        <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
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
      <section className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-700 dark:bg-zinc-900 sm:p-8">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
          Additional Product Information
        </h2>

        <dl className="mt-5 divide-y divide-zinc-200 dark:divide-zinc-700">
          <div className="flex flex-wrap justify-between gap-3 py-4">
            <dt className="font-semibold text-zinc-700 dark:text-zinc-300">
              Product Name
            </dt>

            <dd className="text-right text-zinc-600 dark:text-zinc-400">
              {product.name}
            </dd>
          </div>

          <div className="flex flex-wrap justify-between gap-3 py-4">
            <dt className="font-semibold text-zinc-700 dark:text-zinc-300">
              SKU
            </dt>

            <dd className="break-all text-right text-zinc-600 dark:text-zinc-400">
              {product.sku}
            </dd>
          </div>

          <div className="flex flex-wrap justify-between gap-3 py-4">
            <dt className="font-semibold text-zinc-700 dark:text-zinc-300">
              Category
            </dt>

            <dd className="text-right text-zinc-600 dark:text-zinc-400">
              {product.category}
            </dd>
          </div>

          <div className="flex flex-wrap justify-between gap-3 py-4">
            <dt className="font-semibold text-zinc-700 dark:text-zinc-300">
              Availability
            </dt>

            <dd className="text-right text-zinc-600 dark:text-zinc-400">
              {product.stockStatus}
            </dd>
          </div>

          <div className="flex flex-wrap justify-between gap-3 py-4">
            <dt className="font-semibold text-zinc-700 dark:text-zinc-300">
              Warranty
            </dt>

            <dd className="text-right text-zinc-600 dark:text-zinc-400">
              {product.warranty}
            </dd>
          </div>
        </dl>
      </section>

      {/* FINAL CTA */}
      <section className="mt-12 rounded-3xl bg-gradient-to-r from-sky-300 to-blue-300 p-7 text-center text-black sm:mt-16 sm:p-12">
        <h2 className="text-2xl font-extrabold sm:text-4xl">
          Need This Spare Part?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-sky-50 sm:text-lg sm:leading-8">
          Contact Jai Shree Equipment Dairy for current pricing,
          availability, compatibility and delivery information.
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-block rounded-xl bg-white px-8 py-4 font-bold text-green-500 transition hover:scale-105"
        >
          Get Price on WhatsApp
        </a>
      </section>

      {/* BACK TO PRODUCTS */}
      <div className="mt-8 text-center">
        <Link
          href="/milk-testing-machine-spare-parts"
          className="font-semibold text-sky-600 hover:underline"
        >
          ← Browse All Milk Testing Machine Spare Parts
        </Link>
      </div>
    </main>
  );
}
