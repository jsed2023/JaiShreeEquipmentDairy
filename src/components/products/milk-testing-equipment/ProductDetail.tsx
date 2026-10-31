
import { useState } from "react";

import ImageSlider from "@/components/imageSlider";
import BuyNowModel from "@/components/buyNowModal";

import { MilkTestingEquipment } from "@/config/products";
import type { ModalData } from "@/types";

import { CgDetailsMore } from "react-icons/cg";
import { MdOutlineAutoAwesome } from "react-icons/md";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";

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

  const productName = decodeURIComponent(productSlug)
    .trim()
    .toLowerCase();

  const product = MilkTestingEquipment.find(
    (item) => item.url.trim().toLowerCase() === productName
  );

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  if (!product) {
    return (
      <section className="my-10 rounded-md bg-[rgb(244,244,245)] p-8 text-center dark:bg-[#27272a]">
        <h1 className="text-2xl font-bold text-stone-800 dark:text-white">
          Product Not Found
        </h1>

        <p className="mt-3 text-stone-600 dark:text-gray-400">
          The requested milk testing equipment could not be found.
        </p>

        <a
          href="/milk-testing-equipment"
          className="mt-6 inline-flex rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
        >
          View All Milk Testing Equipment
        </a>
      </section>
    );
  }

  const currentIndex = MilkTestingEquipment.findIndex(
    (item) => item.url.trim().toLowerCase() === productName
  );

  const prevProduct =
    currentIndex > 0
      ? MilkTestingEquipment[currentIndex - 1]
      : null;

  const nextProduct =
    currentIndex < MilkTestingEquipment.length - 1
      ? MilkTestingEquipment[currentIndex + 1]
      : null;

  const handleOpen = (data: ModalData) => {
    setModalData(data);
    onOpen();
  };

  return (
    <div className="mb-10">
      {/* PRODUCT SECTION */}
      <section
        key={product.id}
        className="flex flex-col gap-y-10 rounded-md bg-[rgb(244,244,245)] py-4 dark:bg-[#27272a] sm:p-4"
      >
        {/* TITLE */}
        <div className="flex flex-col gap-y-4">
          <div className="inline-flex items-center justify-center gap-3 rounded-full border border-purple-400/30 bg-linear-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 px-5 py-2.5 text-base font-semibold text-purple-700 backdrop-blur-sm dark:text-purple-300">
            <h1 className="animate-title-gradient bg-clip-text text-center font-bold text-transparent underline sm:text-xl">
              {product.name}
            </h1>
          </div>

          <p className="max-sm:px-2 text-center text-stone-700 dark:text-gray-400">
            {product.smallDesc}
          </p>
        </div>

        {/* IMAGE + FEATURES */}
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <ImageSlider
                images={product.images}
                productName={product.name}
              />
            </div>
          </div>

          {/* FEATURES */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-bold">
              {product.name}
            </h2>

            <div className="mt-3 flex flex-wrap items-center gap-4">
              {/* PRICE */}
              <p className="text-2xl font-bold text-blue-600 sm:text-3xl">
                {product.price
                  ? `₹ ${product.price}`
                  : "Get Best Price"}
              </p>

              {/* BUY NOW */}
              <button
                type="button"
                onClick={() =>
                  handleOpen({
                    modalType: "BN",
                    equipmentName: product.name,
                    equipmentPrice: product.price,
                  })
                }
                className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
              >
                <span className="flex items-center justify-center gap-2">
                  <RiMoneyRupeeCircleLine className="text-xl" />
                  Buy Now
                </span>
              </button>
            </div>

            <p className="mt-4 text-gray-600 dark:text-gray-400">
              {product.smallDesc}
            </p>

            <h3 className="font-bold tracking-widest underline">
              Features:
            </h3>

            <ul className="mt-8 space-y-3">
              {product.features.map((feature) => (
                <li
                  key={feature.id}
                  className="flex gap-3"
                >
                  <span className="text-green-600">✔</span>

                  <div>
                    <b>{feature.key}</b>
                    {" : "}
                    {feature.value}
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
                {product.features.map((item) => (
                  <tr key={item.id}>
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
        <div>
          <p className="max-sm:px-2 text-stone-700 dark:text-gray-400">
            {product.desc}
          </p>
        </div>

        {/* BUTTONS */}
        <div className="flex w-full justify-center gap-4 px-2 md:justify-end md:px-20">
          {product.moreDetails && (
            <button
              type="button"
              onClick={() =>
                handleOpen({
                  modalType: "GMD",
                  equipmentImage: product.moreDetails,
                  equipmentName: product.name,
                })
              }
              className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
            >
              <span className="flex w-40 items-center justify-center gap-2">
                <CgDetailsMore className="text-xl" />
                Technical Details
              </span>
            </button>
          )}

          <button
            type="button"
            onClick={() =>
              handleOpen({
                modalType: "BN",
                equipmentName: product.name,
                equipmentPrice: product.price,
              })
            }
            className="rounded-lg border border-gray-300 bg-white px-5 py-3 font-semibold text-black transition-colors hover:bg-gray-100 dark:border-gray-600 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
          >
            <span className="flex w-40 items-center justify-center gap-2">
              <RiMoneyRupeeCircleLine className="text-xl" />
              Buy Now
            </span>
          </button>
        </div>
      </section>

      {/* FAQ */}
      <div className="mt-10 rounded-xl border border-gray-200 bg-linear-to-r from-blue-50 via-purple-50 to-cyan-50 p-6 dark:border-zinc-700 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 md:p-8">
        <h2 className="mb-4 mt-10 text-2xl font-bold">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold">
              What is {product.name}?
            </h3>
            <p>
              {product.name} is designed to improve dairy operations by
              providing reliable performance, accurate results, and easy
              operation.
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
      </div>

      {/* NEXT / PREVIOUS */}
      <div className="mt-10 w-full">
        <div className="flex w-full items-center justify-between">
          {prevProduct ? (
            <a
              href={`/milk-testing-equipment/${prevProduct.url}`}
              className="inline-flex items-center rounded-md bg-blue-100 px-3 py-2 text-sm font-medium text-blue-700 transition-colors hover:bg-blue-200"
            >
              ← Previous
            </a>
          ) : (
            <div />
          )}

          {nextProduct ? (
            <a
              href={`/milk-testing-equipment/${nextProduct.url}`}
              className="inline-flex items-center rounded-md bg-purple-100 px-3 py-2 text-sm font-medium text-purple-700 transition-colors hover:bg-purple-200"
            >
              Next →
            </a>
          ) : (
            <div />
          )}
        </div>

        {/* PRODUCT NAMES */}
        <div className="mt-2 flex justify-between text-xs text-gray-600">
          <div className="max-w-[45%] truncate">
            {prevProduct?.name}
          </div>

          <div className="max-w-[45%] truncate text-right">
            {nextProduct?.name}
          </div>
        </div>
      </div>

      {/* MODAL */}
      <BuyNowModel
        isModelOpen={isOpen}
        onClose={onClose}
        modalData={modalData}
      />
    </div>
  );
}
