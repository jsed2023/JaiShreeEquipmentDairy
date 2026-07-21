"use client";

import ImageSlider from "@/components/imageSlider";
import { MilkAnalyzerMachines } from "@/config/products";
import { ModalData } from "@/types";
import { Button } from "@nextui-org/button";
import BuyNowModel from "@/components/buyNowModal";
import { useDisclosure } from "@nextui-org/react";
import { useState } from "react";
import { CgDetailsMore } from "react-icons/cg";
import { MdOutlineAutoAwesome } from "react-icons/md";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { notFound } from "next/navigation";
import Link from "next/link";

export default function Product({
  params,
}: {
  params: { product_name: string };
}) {

  // =========================
  // HOOKS
  // =========================

  const { isOpen, onOpen, onClose } =
    useDisclosure();

  const [modalData, setModalData] =
    useState<ModalData>({
      modalType: "BN",
      equipmentName: "",
      equipmentImage: "",
      equipmentPrice: "",
    });

  // =========================
  // PRODUCT
  // =========================

  const productName =
    params.product_name;

  const product =
    MilkAnalyzerMachines.find(
      (item) =>
        item.url.toLowerCase() ===
        productName.toLowerCase()
    );

  // =========================
  // 404
  // =========================

  if (!product) {
    notFound();
  }

  // =========================
  // NEXT / PREVIOUS PRODUCTS
  // =========================

  const currentIndex =
    MilkAnalyzerMachines.findIndex(
      (item) =>
        item.url.toLowerCase() ===
        productName.toLowerCase()
    );

  const prevProduct =
    currentIndex > 0
      ? MilkAnalyzerMachines[
          currentIndex - 1
        ]
      : null;

  const nextProduct =
    currentIndex <
    MilkAnalyzerMachines.length - 1
      ? MilkAnalyzerMachines[
          currentIndex + 1
        ]
      : null;

  // =========================
  // MODAL
  // =========================

  const handleOpen = (
    modalData: ModalData
  ) => {
    setModalData(modalData);
    onOpen();
  };

  return (

    <div className="mb-10">

      {/* ========================= */}
      {/* PRODUCT SECTION */}
      {/* ========================= */}

      <section
        key={product.id}
        className="
          flex flex-col gap-y-10
          dark:bg-[#27272a]
          bg-[rgb(244,244,245)]
          sm:p-4 py-4
          rounded-md
        "
      >

        {/* ========================= */}
        {/* TITLE */}
        {/* ========================= */}

        <div className="flex flex-col gap-y-4">

          <div
            className="
              inline-flex items-center justify-center
              gap-3 px-5 py-2.5
              rounded-full text-base font-semibold
              bg-gradient-to-r
              from-purple-500/10
              via-blue-500/10
              to-cyan-500/10
              text-purple-700
              dark:text-purple-300
              border border-purple-400/30
              backdrop-blur-sm
            "
          >

            <h1
              className="
                text-center font-bold
                underline sm:text-xl
                bg-clip-text
                text-transparent
                animate-title-gradient
              "
            >
              {product.name}
            </h1>

          </div>

          <p
            className="
              dark:text-gray-400
              text-center text-stone-700
              max-sm:px-2
            "
          >
            {product.smallDesc}
          </p>

        </div>

        {/* ========================= */}
        {/* IMAGE + FEATURES */}
        {/* ========================= */}

      <div className="grid lg:grid-cols-12 gap-8">

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

<h1 className="text-3xl font-bold">

{product.name}

</h1>

<div className="mt-3 flex flex-wrap items-center gap-4">
  {/* Price */}
  <p className="text-blue-600 text-2xl sm:text-3xl font-bold">
    {product.price ? `₹ ${product.price}` : "Get Best Price"}
  </p>

  {/* Buy Now */}
  <Button
    size="md"
    color="primary"
    variant="solid"
    onPress={() =>
      handleOpen({
        modalType: "BN",
        equipmentName: product.name,
        equipmentPrice: product.price,
      })
    }
  >
    <span className="flex items-center justify-center gap-2 font-semibold">
      <RiMoneyRupeeCircleLine className="text-xl" />
      Buy Now
    </span>
  </Button>
</div>

<p className="mt-4 text-gray-600">

{product.smallDesc}

</p>
            <h2
              className="
                font-bold underline
                tracking-widest
              "
            >
              Features:
            </h2>

            <ul className="mt-8 space-y-3">

{product.features.map(feature=>(

<li
key={feature.id}
className="flex gap-3"
>

<span className="text-green-600">

✔

</span>

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

        {/* ========================= */}
        {/* FIXED RATE */}
        {/* ========================= */}

        <p
          className="
            inline-flex items-center
            justify-center gap-3
            px-5 py-2.5
            rounded-full text-base
            font-semibold
            bg-gradient-to-r
            from-purple-500/10
            via-blue-500/10
            to-cyan-500/10
            text-purple-700
            dark:text-purple-300
            border border-purple-400/30
            backdrop-blur-sm
          "
        >

          <MdOutlineAutoAwesome
            className="
              text-xl text-purple-600
              dark:text-purple-400
              animate-pulse
            "
          />

          <span
            className="
              bg-gradient-to-r
              from-purple-600
              to-cyan-500
              bg-clip-text
              text-transparent
            "
          >
            Fixed Rate. No Bargaining.
          </span>

          <span
            className="
              bg-gradient-to-r
              from-purple-600
              to-cyan-500
              bg-clip-text
              text-transparent
            "
          >
            कीमत तय है। मोलभाव नहीं होगा।
          </span>

        </p>

<h2 className="text-2xl font-bold mt-10 mb-4">

Specifications

</h2>

<table className="w-full border">

<thead>

<tr>

<th className="border p-3">

Feature

</th>

<th className="border p-3">

Value

</th>

</tr>

</thead>

<tbody>

{product.features.map(item=>(

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
        {/* ========================= */}
        {/* DESCRIPTION */}
        {/* ========================= */}

        <div>

          <p
            className="
              dark:text-gray-400
              text-stone-700
              max-sm:px-2
            "
          >
            {product.desc}
          </p>

        </div>

        {/* ========================= */}
        {/* BUTTONS */}
        {/* ========================= */}

        <div
          className="
            w-full px-2 gap-10
            md:justify-end
            justify-center
            flex md:px-20
          "
        >

          {product.moreDetails && (

            <Button
              size="md"
              color="primary"
              onPress={() =>
                handleOpen({
                  modalType: "GMD",
                  equipmentImage:
                    product.moreDetails,
                  equipmentName:
                    product.name,
                })
              }
            >

              <span
                className="
                  w-40 flex
                  justify-center
                  items-center gap-2
                "
              >

                <CgDetailsMore
                  className="text-xl"
                />

                Technical Details

              </span>

            </Button>

          )}

          {/* BUY NOW */}

          <Button
            size="md"
            variant="solid"
            className="
              bg-white text-black
              border border-gray-300
              dark:bg-zinc-800
              dark:text-white
              dark:border-gray-600
              hover:bg-gray-100
              dark:hover:bg-zinc-700
            "
            onPress={() =>
              handleOpen({
                modalType: "BN",
                equipmentName:
                  product.name,
                equipmentPrice:
                  product.price,
              })
            }
          >

            <span
              className="
                w-40 flex
                justify-center
                items-center gap-2
              "
            >

              <RiMoneyRupeeCircleLine
                className="text-xl"
              />

              Buy Now

            </span>

          </Button>

        </div>

      </section>
      <div className="mt-10 rounded-xl bg-gradient-to-r from-blue-50 via-purple-50 to-cyan-50 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 p-6 md:p-8 border border-gray-200 dark:border-zinc-700">
      <h2 className="text-2xl font-bold mt-10 mb-4">
  Frequently Asked Questions
</h2>

<div className="space-y-6">
  <div>
    <h3 className="font-semibold text-lg">
      What is {product.name}?
    </h3>
    <p>
      {product.name} is designed to improve dairy operations by providing
      reliable performance, accurate results, and easy operation.
    </p>
  </div>

  <div>
    <h3 className="font-semibold text-lg">
      Why should I choose {product.name}?
    </h3>
    <p>
      {product.name} offers high accuracy, durable construction, low
      maintenance, and is suitable for dairy farms, milk collection centres,
      and cooperative societies.
    </p>
  </div>

  <div>
    <h3 className="font-semibold text-lg">
      Is {product.name} suitable for commercial use?
    </h3>
    <p>
      Yes, {product.name} is ideal for commercial dairy applications and can
      be used in milk collection centres, dairy plants, and private dairies.
    </p>
  </div>

  <div>
    <h3 className="font-semibold text-lg">
      Do you provide installation and support for {product.name}?
    </h3>
    <p>
      Yes, we provide installation guidance, technical support, and
      after-sales service for {product.name}.
    </p>
  </div>
</div>
</div>
      {/* ========================= */}
{/* NEXT / PREVIOUS */}
{/* ========================= */}

<div className="mt-10 w-full">
  <div className="flex w-full items-center justify-between">
    {/* Previous */}
    {prevProduct ? (
      <Link
        href={`/milk-analyzer-machines/${prevProduct.url}`}
        className="
          inline-flex items-center
          rounded-md
          bg-blue-100
          px-3 py-2
          text-sm
          font-medium
          text-blue-700
          hover:bg-blue-200
          transition-colors
        "
      >
        ← Previous
      </Link>
    ) : (
      <div />
    )}

    {/* Next */}
    {nextProduct ? (
      <Link
        href={`/milk-analyzer-machines/${nextProduct.url}`}
        className="
          inline-flex items-center
          rounded-md
          bg-purple-100
          px-3 py-2
          text-sm
          font-medium
          text-purple-700
          hover:bg-purple-200
          transition-colors
        "
      >
        Next →
      </Link>
    ) : (
      <div />
    )}
  </div>

  {/* Product Names */}
  <div className="mt-2 flex justify-between text-xs text-gray-600">
    <div className="max-w-[45%] truncate">
      {prevProduct?.name}
    </div>

    <div className="max-w-[45%] truncate text-right">
      {nextProduct?.name}
    </div>
  </div>
</div>
      {/* ========================= */}
      {/* MODAL */}
      {/* ========================= */}

      <BuyNowModel
        isModelOpen={isOpen}
        onClose={onClose}
        modalData={modalData}
      />

    </div>
  );
}
