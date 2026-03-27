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

export default function Product({
  params,
}: {
  params: { product_name: string };
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [modalData, setModalData] = useState<ModalData>({
    modalType: "BN",
    equipmentName: "",
    equipmentImage: "",
    equipmentPrice: "",
  });

  const product = MilkTestingEquipment.find(
    (item) => item.url.toLowerCase() === params.product_name.toLowerCase()
  );

  if (!product) return notFound();

  const handleOpen = (data: ModalData) => {
    setModalData(data);
    onOpen();
  };

  return (
    <div className="mb-10">
      <section className="flex flex-col gap-y-8 bg-[rgb(244,244,245)] dark:bg-[#27272a] p-4 rounded-md">

        {/* 🔥 Title */}
        <div className="text-center">
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">
            {product.name}
          </h1>

          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            {product.smallDesc}
          </p>

          {/* 💰 PRICE SECTION (NEW) */}
          <div className="mt-3 flex justify-center items-center gap-2">
            {product.offerPrice && (
              <span className="text-2xl font-bold text-green-600">
                ₹{product.offerPrice}
              </span>
            )}

            <span className="text-gray-400 line-through">
              ₹{product.price}
            </span>

            {product.discount && (
              <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded">
                {product.discount} OFF
              </span>
            )}
          </div>
        </div>

        {/* 🖼️ Image + Features */}
        <div className="flex flex-col md:flex-row gap-6 md:pl-10 justify-center">
          
          {/* Image */}
          <div className="md:mr-10">
            <ImageSlider images={product.images} />
          </div>

          {/* Features */}
          <div className="flex flex-col gap-y-2 w-full">
            <h2 className="font-bold underline tracking-widest">Features:</h2>

            {product.features.map((feature) => (
              <div key={feature.id} className="flex">
                <p className="w-[40%] text-sm text-gray-600 dark:text-gray-400">
                  {feature.key}
                </p>
                <p className="w-[60%] text-sm text-gray-800 dark:text-gray-300">
                  {feature.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 🔥 Highlights (NEW SECTION) */}
        {product.highlights && (
          <div className="px-2">
            <h2 className="font-semibold text-lg mb-2">Highlights</h2>
            <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
              {product.highlights.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* 💡 Banner */}
        <div className="flex justify-center">
          <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold
            bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10
            border border-purple-400/30">
            <MdOutlineAutoAwesome className="text-purple-600 animate-pulse" />
            Fixed Rate. No Bargaining. | कीमत तय है।
          </p>
        </div>

        {/* 📝 Description */}
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {product.desc}
        </p>

        {/* 🏭 Applications (NEW SECTION) */}
        {product.applications && (
          <div className="px-2">
            <h2 className="font-semibold text-lg mb-2">Applications</h2>
            <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
              {product.applications.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* 🛒 Buttons */}
        <div className="w-full flex gap-4 justify-center md:justify-end md:px-20">

          {product.moreDetails && (
            <Button
              color="primary"
              onPress={() =>
                handleOpen({
                  modalType: "GMD",
                  equipmentImage: product.moreDetails,
                  equipmentName: product.name,
                })
              }
            >
              <CgDetailsMore /> Technical Details
            </Button>
          )}

          <Button
            className="bg-green-600 text-white hover:bg-green-700"
            onPress={() =>
              handleOpen({
                modalType: "BN",
                equipmentName: product.name,
                equipmentPrice: String(product.offerPrice || product.price),
              })
            }
          >
            <RiMoneyRupeeCircleLine />
            Buy Now ₹{product.offerPrice || product.price}
          </Button>
        </div>
      </section>

      <BuyNowModel
        isModelOpen={isOpen}
        onClose={onClose}
        modalData={modalData}
      />
    </div>
  );
}