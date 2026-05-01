"use client";

import ImageSlider from "@/components/imageSlider";
import BuyNowModel from "@/components/buyNowModal";
import { automaticMilkCollectionSystem } from "@/config/products";
import { ModalData } from "@/types";
import { MdOutlineAutoAwesome } from "react-icons/md";
import { Button } from "@nextui-org/button";
import { useDisclosure } from "@nextui-org/react";
import { useState } from "react";
import { CgDetailsMore } from "react-icons/cg";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { notFound } from "next/navigation";

/* ===================== TYPES ===================== */

interface SpecsRow {
  label: React.ReactNode;
  value: React.ReactNode;
}

/* ===================== PAGE ===================== */

export default function Product({
  params,
}: {
  params: { product_name: string };
}) {
  /* ===== Hooks (MUST be first) ===== */
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [modalData, setModalData] = useState<ModalData>({
    modalType: "BN",
    equipmentName: "",
    equipmentImage: "",
    equipmentPrice: "",
  });

  /* ===== Data ===== */
  const productName = params.product_name;

  const product = automaticMilkCollectionSystem.find(
    (item) => item.url.toLowerCase() === productName.toLowerCase()
  );

  /* ===== Guard ===== */
  if (!product) {
    notFound();
  }

  /* ===== Handlers ===== */
  const handleOpen = (data: ModalData) => {
    setModalData(data);
    onOpen();
  };

  /* ===================== JSX ===================== */

  return (
    <div className="mb-10">
      <section
        key={product.id}
        className="flex flex-col gap-y-10 dark:bg-[#27272a] bg-[rgb(244,244,245)] sm:p-4 py-4 rounded-md"
      >
        {/* ===== Header ===== */}
        <div className="flex flex-col gap-y-4">
          <div className="inline-flex items-center justify-center gap-3 px-5 py-2.5 
             rounded-full text-base font-semibold
             bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10
           text-purple-700 dark:text-purple-300
             border border-purple-400/30 backdrop-blur-sm">
          <h1 className="text-center font-bold underline sm:text-xl bg-clip-text text-transparent animate-title-gradient">
            {product.name}
          </h1></div>

          <p className="dark:text-gray-400 text-center text-stone-700 max-sm:px-2">
            {product.smallDesc}
          </p>
        </div>

        {/* ===== Image + Features ===== */}
        <div className="flex max-md:flex-wrap md:pl-10 max-md:justify-center">
          <div
            className={`md:mr-20 ${
              product.images.length > 1 && "max-md:mb-10"
            }`}
          >
            <ImageSlider images={product.images} />
          </div>

          <div className="flex flex-col max-sm:px-2 gap-y-2 w-full justify-center">
            <h2 className="font-bold underline tracking-widest">Features:</h2>

            {product.features.map((feature) => (
              <div key={feature.id} className="flex">
                <p className="max-sm:text-sm w-[20rem] dark:text-gray-400 text-stone-700">
                  {feature.key}
                </p>
                <p className="max-sm:text-sm w-full dark:text-gray-400 text-stone-700">
                  {feature.value}
                </p>
              </div>
            ))}
          </div>
        </div>
           <p className="inline-flex items-center justify-center gap-3 px-5 py-2.5 
  rounded-full text-base font-semibold
  bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10
  text-purple-700 dark:text-purple-300
  border border-purple-400/30
  backdrop-blur-sm">
  
  <MdOutlineAutoAwesome className="text-xl text-purple-600 dark:text-purple-400 animate-pulse" />
  
  <span className="bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
    Fixed Rate. No Bargaining. 
  </span>
  <span className="bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
    कीमत तय है। मोलभाव नहीं होगा।
  </span>
</p>

        {/* ===== Description ===== */}
        <p className="dark:text-gray-400 text-stone-700 max-sm:px-2">
          {product.desc}
        </p>

        {/* ===== Specs Table ===== */}
        {product.specsTable && (
          <div className="px-2 md:px-10">
            <h2 className="font-bold underline tracking-widest mb-3">
              Technical Specifications
            </h2>

            <table className="w-full border border-gray-400 dark:border-gray-500">
              <tbody>
                {product.specsTable.map(
                  (row: SpecsRow, index: number) => (
                    <tr
                      key={index}
                      className="border-b border-gray-400 dark:border-gray-600"
                    >
                      <td className="p-2 w-1/3 font-semibold dark:text-gray-300 text-stone-800 bg-gray-200 dark:bg-[#333]">
                        {row.label}
                      </td>
                      <td className="p-2 dark:text-gray-300 text-stone-700">
                        {row.value}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        )}

        {/* ===== Actions ===== */}
        <div className="w-full px-2 gap-10 md:justify-end justify-center flex md:px-20">
          {product.moreDetails && (
            <Button
              size="md"
              color="primary"
              onPress={() =>
                handleOpen({
                  modalType: "GMD",
                  equipmentImage: product.moreDetails,
                  equipmentName: product.name,
                })
              }
            >
              <span className="w-40 flex justify-center items-center gap-2">
                <CgDetailsMore className="text-xl" />
                Technical Details
              </span>
            </Button>
          )}

          <Button
            size="md"
            variant="solid"
            className="bg-white text-black border border-gray-300 
             dark:bg-zinc-800 dark:text-white dark:border-gray-600
             hover:bg-gray-100 dark:hover:bg-zinc-700"
            onPress={() =>
              handleOpen({
                modalType: "BN",
                equipmentName: product.name,
                equipmentPrice: product.price,
              })
            }
          >
            <span className="w-40 flex justify-center items-center gap-2">
              <RiMoneyRupeeCircleLine className="text-xl" />
              Buy Now
            </span>
          </Button>
        </div>
      </section>
   
      {/* ===== Modal ===== */}
      <BuyNowModel
        isModelOpen={isOpen}
        onClose={onClose}
        modalData={modalData}
      />
    </div>
    
  );
}
