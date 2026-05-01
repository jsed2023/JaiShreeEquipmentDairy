import { ModalData } from "@/types";
import { FaRupeeSign } from "react-icons/fa";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Image,
} from "@nextui-org/react";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { IoMdSend } from "react-icons/io";

export default function BuyNowModal({
  isModelOpen,
  onClose,
  modalData,
}: {
  isModelOpen: boolean;
  onClose: () => void;
  modalData: ModalData;
}) {
  const { register, handleSubmit } = useForm();
  const [sending, setSending] = useState(false);

  const handleOnSubmit = async (data: FieldValues) => {
    setSending(true);

    const message = `Hello, I want to buy this item:

📌 *Product Name:* ${modalData.equipmentName}
📦 *Quantity:* ${data.quantity}

👤 *Name:* ${data.name}
📱 *Mobile:* ${data.mobileNumber}

Please contact me.`;

    const whatsappNumber = "918112294173";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");

    setSending(false);
    onClose();
  };

  return (
    <>
      {modalData.modalType === "BN" ? (
        <Modal size="3xl" isOpen={isModelOpen} onClose={onClose}>
          <ModalContent>
            <div className="py-4">
              <ModalHeader className="flex capitalize items-center gap-1">
                {modalData.equipmentName}
                <span className="flex items-center text-black-600">
                  <FaRupeeSign />
                  {modalData.equipmentPrice}
                </span>
              </ModalHeader>

              <ModalBody>
                <form
                  className="flex flex-col sm:gap-8 gap-4"
                  onSubmit={handleSubmit(handleOnSubmit)}
                >
                  <div className="flex gap-4 sm:gap-y-8 max-sm:flex-col">
                    <Input
                      label="Name"
                      type="text"
                      placeholder="Enter your name"
                      {...register("name", { required: true })}
                    />

                    <Input
                      label="Quantity"
                      type="number"
                      min={1}
                      defaultValue="1"
                      {...register("quantity")}
                    />
                  </div>

                  <Input
                    label="Mobile Number"
                    type="tel"
                    placeholder="Enter your contact number"
                    {...register("mobileNumber", { required: true })}
                  />

                  <Button
                    type="submit"
                    color="success"
                    isLoading={sending}
                    endContent={<IoMdSend />}
                  >
                    Send on WhatsApp
                  </Button>
                </form>
              </ModalBody>

              <ModalFooter>
                <p className="w-full">
                  Your enquiry will be sent via WhatsApp.
                </p>
              </ModalFooter>
            </div>
          </ModalContent>
        </Modal>
      ) : (
        <Modal size="lg" isOpen={isModelOpen} onClose={onClose}>
          <ModalContent>
            {(closeModal) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  More Details
                </ModalHeader>

                <ModalBody className="mx-auto">
                  <Image
                    src={modalData.equipmentImage}
                    alt="additional details of milk analyser"
                    className="w-auto sm:h-[30rem] h-[18rem]"
                    loading="lazy"
                  />
                </ModalBody>

                <ModalFooter>
                  <Button color="danger" variant="light" onPress={closeModal}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      )}
    </>
  );
}
