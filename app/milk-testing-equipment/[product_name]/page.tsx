"use client";

import ImageSlider from "@/components/imageSlider";
import { MilkTestingEquipment } from "@/config/products";
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
    MilkTestingEquipment.find(
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
    MilkTestingEquipment.findIndex(
      (item) =>
        item.url.toLowerCase() ===
        productName.toLowerCase()
    );

  const prevProduct =
    currentIndex > 0
      ? MilkTestingEquipment[
          currentIndex - 1
        ]
      : null;

  const nextProduct =
    currentIndex <
    MilkTestingEquipment.length - 1
      ? MilkTestingEquipment[
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

        <div
          className="
            flex max-md:flex-wrap
            md:pl-10
            max-md:justify-center
          "
        >

          <div
            className={`md:mr-20 ${
              product.images.length > 1 &&
              "max-md:mb-10"
            }`}
          >

            <ImageSlider
              images={product.images}
            />

          </div>

          {/* FEATURES */}

          <div
            className="
              flex flex-col
              max-sm:px-2
              gap-y-2
              w-full
              justify-center
            "
          >

            <h2
              className="
                font-bold underline
                tracking-widest
              "
            >
              Features:
            </h2>

            {product.features.map(
              (feature) => (

                <div
                  key={feature.id}
                  className="flex"
                >

                  <p
                    className="
                      max-sm:text-sm
                      w-[20rem]
                      dark:text-gray-400
                      text-stone-700
                    "
                  >
                    {feature.key}
                  </p>

                  <p
                    className="
                      max-sm:text-sm
                      w-full
                      dark:text-gray-400
                      text-stone-700
                    "
                  >
                    {feature.value}
                  </p>

                </div>
              )
            )}

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

      {/* ========================= */}
      {/* NEXT / PREVIOUS */}
      {/* ========================= */}

      <div
        className="
          mt-10 flex
          justify-between
          gap-4 flex-wrap
        "
      >

        {prevProduct ? (

          <Link
            href={`/milk-testing-equipment/${prevProduct.url}`}
            className="
              bg-blue-100 text-blue-700
              px-5 py-3 rounded-xl
              hover:bg-blue-200
              transition
            "
          >
            ← Previous:
            {" "}
            {prevProduct.name}
          </Link>

        ) : (
          <div />
        )}

        {nextProduct ? (

          <Link
            href={`/milk-testing-equipment/${nextProduct.url}`}
            className="
              bg-purple-100
              text-purple-700
              px-5 py-3 rounded-xl
              hover:bg-purple-200
              transition
            "
          >
            Next:
            {" "}
            {nextProduct.name}
            {" "}
            →
          </Link>

        ) : null}

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
