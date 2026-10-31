
import { useState } from "react";

import type { ModalData, SpecsRow } from "@/types";

import { CgDetailsMore } from "react-icons/cg";
import { MdOutlineAutoAwesome } from "react-icons/md";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";

import ImageSlider from "@/components/imageSlider";
import BuyNowModal from "@/components/buyNowModal";

import { automaticMilkCollectionSystem } from "@/config/products";

interface ProductDetailProps {
  productSlug: string;
}

export default function ProductDetail({
  productSlug,
}: ProductDetailProps) {
  const [isOpen, setIsOpen] = useState(false);

  const [modalData, setModalData] = useState<ModalData>({
    modalType: "BN",
    equipmentName: "",
    equipmentImage: "",
    equipmentPrice: "",
  });

  // Find product by URL slug
  const normalizedSlug = decodeURIComponent(productSlug).toLowerCase();

  const product = automaticMilkCollectionSystem.find(
    (item) => item.url.toLowerCase() === normalizedSlug
  );

  // Product not found
  if (!product) {
    return (
      <section className="mx-auto my-10 max-w-3xl rounded-xl border border-gray-200 p-8 text-center dark:border-zinc-700">
        <h1 className="text-2xl font-bold">
          Product Not Found
        </h1>

        <p className="mt-3 text-gray-600 dark:text-gray-400">
          Sorry, the requested product could not be found.
        </p>

        <a
          href="/automatic-milk-collection-system"
          className="mt-6 inline-flex rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
        >
          View All Products
        </a>
      </section>
    );
  }

  // Previous and next products
  const currentIndex = automaticMilkCollectionSystem.findIndex(
    (item) => item.url.toLowerCase() === product.url.toLowerCase()
  );

  const prevProduct =
    currentIndex > 0
      ? automaticMilkCollectionSystem[currentIndex - 1]
      : null;

  const nextProduct =
    currentIndex >= 0 &&
    currentIndex < automaticMilkCollectionSystem.length - 1
      ? automaticMilkCollectionSystem[currentIndex + 1]
      : null;

  // Close modal
  const onClose = () => {
    setIsOpen(false);
  };

  // Buy Now
  const handleBuyNow = () => {
    setModalData({
      modalType: "BN",
      equipmentName: product.name,
      equipmentPrice: String(product.price ?? ""),
      equipmentImage: "",
    });

    setIsOpen(true);
  };

  // Technical Details
  const handleTechnicalDetails = () => {
    if (!product.moreDetails) return;

    setModalData({
      modalType: "GMD",
      equipmentName: product.name,
      equipmentImage: product.moreDetails,
      equipmentPrice: "",
    });

    setIsOpen(true);
  };

  // Product navigation URLs
  const prevUrl = prevProduct
    ? `/automatic-milk-collection-system/${prevProduct.url}`
    : undefined;

  const nextUrl = nextProduct
    ? `/automatic-milk-collection-system/${nextProduct.url}`
    : undefined;

  return (
    <div className="mb-10">
      <section
        key={product.id}
        className="flex flex-col gap-y-10 rounded-md py-4 dark:bg-[#27272a] sm:p-4"
      >
        {/* PRODUCT HEADER */}
        <div className="flex flex-col gap-y-4">
          <div className="mx-auto inline-flex max-w-[95%] items-center justify-center rounded-full border border-purple-400/30 bg-linear-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 px-5 py-2.5 backdrop-blur-sm">
            <h1 className="animate-title-gradient bg-clip-text text-center text-lg font-bold text-transparent sm:text-xl md:text-2xl">
              {product.name}
            </h1>
          </div>

          <p className="text-center text-stone-700 dark:text-gray-400 max-sm:px-2">
            {product.smallDesc}
          </p>
        </div>

        {/* IMAGE AND FEATURES */}
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <ImageSlider
                images={product.images}
                productName={product.name}
              />
            </div>
          </div>

          <div className="lg:col-span-5">
            <h2 className="text-3xl font-bold">
              {product.name}
            </h2>

            <div className="mt-3 flex flex-wrap items-center gap-4">
              <p className="text-2xl font-bold text-blue-600 sm:text-3xl">
                {product.price
                  ? `₹ ${product.price}`
                  : "Get Best Price"}
              </p>

              <button
                type="button"
                onClick={handleBuyNow}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
              >
                <RiMoneyRupeeCircleLine className="text-xl" />
                Buy Now
              </button>
            </div>

            <p className="mt-4 text-gray-600 dark:text-gray-300">
              {product.smallDesc}
            </p>

            <h2 className="mt-6 font-bold tracking-widest underline">
              Features:
            </h2>

            <ul className="mt-8 space-y-3">
              {product.features.map((feature, index) => (
                <li
                  key={`${product.id}-feature-${feature.id}-${index}`}
                  className="flex gap-3"
                >
                  <span className="text-green-600">✔</span>

                  <div>
                    <b>{feature.key}</b> : {feature.value}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* FIXED RATE */}
        <p className="inline-flex flex-wrap items-center justify-center gap-3 rounded-full border border-purple-400/30 bg-linear-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 px-5 py-2.5 text-base font-semibold text-purple-700 backdrop-blur-sm dark:text-purple-300">
          <MdOutlineAutoAwesome className="animate-pulse text-xl text-purple-600 dark:text-purple-400" />

          <span className="bg-linear-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
            Fixed Rate. No Bargaining.
          </span>

          <span className="bg-linear-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
            कीमत तय है। मोलभाव नहीं होगा।
          </span>
        </p>

        {/* SPECIFICATIONS */}
        <div>
          <h2 className="mb-4 mt-10 text-2xl font-bold">
            Specifications
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border">
              <thead>
                <tr>
                  <th className="border p-3">Feature</th>
                  <th className="border p-3">Value</th>
                </tr>
              </thead>

              <tbody>
                {product.features.map((item, index) => (
                  <tr
                    key={`${product.id}-spec-${item.id}-${index}`}
                  >
                    <td className="border p-3">
                      {item.key}
                    </td>

                    <td className="border p-3">
                      {item.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* DESCRIPTION */}
        <p className="text-stone-700 dark:text-gray-400 max-sm:px-2">
          {product.desc}
        </p>

        {/* TECHNICAL SPECIFICATIONS */}
        {product.specsTable && product.specsTable.length > 0 && (
          <div className="px-2 md:px-10">
            <h2 className="mb-3 font-bold tracking-widest underline">
              Technical Specifications
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border border-gray-400 dark:border-gray-500">
                <tbody>
                  {product.specsTable.map(
                    (row: SpecsRow, index: number) => (
                      <tr
                        key={`${product.id}-technical-${index}`}
                        className="border-b border-gray-400 dark:border-gray-600"
                      >
                        <td className="w-1/3 bg-gray-200 p-2 font-semibold text-stone-800 dark:bg-[#333] dark:text-gray-300">
                          {row.label}
                        </td>

                        <td className="p-2 text-stone-700 dark:text-gray-300">
                          {row.value}
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ACTION BUTTONS */}
        <div className="flex w-full flex-wrap justify-center gap-4 px-2 md:justify-end md:px-20">
          {product.moreDetails && (
            <button
              type="button"
              onClick={handleTechnicalDetails}
              className="inline-flex w-48 items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
            >
              <CgDetailsMore className="text-xl" />
              Technical Details
            </button>
          )}

          <button
            type="button"
            onClick={handleBuyNow}
            className="inline-flex w-48 items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-3 font-semibold text-black transition-colors hover:bg-gray-100 dark:border-gray-600 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
          >
            <RiMoneyRupeeCircleLine className="text-xl" />
            Buy Now
          </button>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-10 rounded-xl border border-gray-200 bg-linear-to-r from-blue-50 via-purple-50 to-cyan-50 p-6 dark:border-zinc-700 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 md:p-8">
        <h2 className="mb-6 text-2xl font-bold">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold">
              What is {product.name}?
            </h3>

            <p>
              {product.name} is designed to improve dairy operations
              by providing reliable performance, accurate results,
              and easy operation.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              Why should I choose {product.name}?
            </h3>

            <p>
              {product.name} offers high accuracy, durable construction,
              low maintenance, and is suitable for dairy farms, milk
              collection centres, and cooperative societies.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              Is {product.name} suitable for commercial use?
            </h3>

            <p>
              Yes, {product.name} is ideal for commercial dairy
              applications and can be used in milk collection centres,
              dairy plants, and private dairies.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              Do you provide installation and support for {product.name}?
            </h3>

            <p>
              Yes, we provide installation guidance, technical support,
              and after-sales service for {product.name}.
            </p>
          </div>
        </div>
      </section>

      {/* PREVIOUS / NEXT */}
      <nav
        className="mt-10 w-full"
        aria-label="Product navigation"
      >
        <div className="flex w-full items-center justify-between">
          {prevProduct && prevUrl ? (
            <a
              href={prevUrl}
              className="inline-flex items-center rounded-md bg-blue-100 px-3 py-2 text-sm font-medium text-blue-700 transition-colors hover:bg-blue-200"
            >
              ← Previous
            </a>
          ) : (
            <div />
          )}

          {nextProduct && nextUrl ? (
            <a
              href={nextUrl}
              className="inline-flex items-center rounded-md bg-purple-100 px-3 py-2 text-sm font-medium text-purple-700 transition-colors hover:bg-purple-200"
            >
              Next →
            </a>
          ) : (
            <div />
          )}
        </div>

        <div className="mt-2 flex justify-between text-xs text-gray-600 dark:text-gray-400">
          <div className="max-w-[45%] truncate">
            {prevProduct?.name}
          </div>

          <div className="max-w-[45%] truncate text-right">
            {nextProduct?.name}
          </div>
        </div>
      </nav>

      {/* BUY NOW / TECHNICAL DETAILS MODAL */}
      <BuyNowModal
        isModelOpen={isOpen}
        onClose={onClose}
        modalData={modalData}
      />
    </div>
  );
}
