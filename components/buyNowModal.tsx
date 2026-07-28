"use client";

import { ModalData } from "@/types";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { FaRupeeSign } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";

import {
  Button,
  Input,
  Label,
  Modal,
  TextField,
} from "@heroui/react";

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

    const whatsappNumber = "917375082341";

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setSending(false);
    onClose();
  };

  if (modalData.modalType === "BN") {
    return (
      <Modal>
        <Modal.Backdrop
          isOpen={isModelOpen}
          onOpenChange={(isOpen) => {
            if (!isOpen) {
              onClose();
            }
          }}
        >
          <Modal.Container size="lg">
            <Modal.Dialog>
              {({ close }) => (
                <>
                  <Modal.CloseTrigger />

                  <Modal.Header>
                    <Modal.Heading>
                      <div className="flex flex-wrap items-center gap-2 capitalize">
                        <span>{modalData.equipmentName}</span>

                        <span className="flex items-center text-gray-600">
                          <FaRupeeSign />
                          {modalData.equipmentPrice}
                        </span>
                      </div>
                    </Modal.Heading>
                  </Modal.Header>

                  <Modal.Body>
                    <form
                      className="flex flex-col gap-4 sm:gap-8"
                      onSubmit={handleSubmit(async (data) => {
                        await handleOnSubmit(data);
                        close();
                      })}
                    >
                      <div className="flex gap-4 max-sm:flex-col sm:gap-y-8">
                        <TextField
                          className="w-full"
                          isRequired
                          name="name"
                        >
                          <Label>Name</Label>

                          <Input
                            type="text"
                            placeholder="Enter your name"
                            {...register("name", {
                              required: true,
                            })}
                          />
                        </TextField>

                        <TextField
                          className="w-full"
                          name="quantity"
                        >
                          <Label>Quantity</Label>

                          <Input
                            type="number"
                            min={1}
                            defaultValue="1"
                            {...register("quantity")}
                          />
                        </TextField>
                      </div>

                      <TextField
                        className="w-full"
                        isRequired
                        name="mobileNumber"
                      >
                        <Label>Mobile Number</Label>

                        <Input
                          type="tel"
                          placeholder="Enter your contact number"
                          {...register("mobileNumber", {
                            required: true,
                          })}
                        />
                      </TextField>

                      <Button
                        type="submit"
                        isPending={sending}
                      >
                        Send on WhatsApp
                        <IoMdSend />
                      </Button>
                    </form>
                  </Modal.Body>

                  <Modal.Footer>
                    <p className="w-full text-sm text-gray-600">
                      Your enquiry will be sent via WhatsApp.
                    </p>
                  </Modal.Footer>
                </>
              )}
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    );
  }

  return (
    <Modal>
      <Modal.Backdrop
        isOpen={isModelOpen}
        onOpenChange={(isOpen) => {
          if (!isOpen) {
            onClose();
          }
        }}
      >
        <Modal.Container size="lg">
          <Modal.Dialog>
            {({ close }) => (
              <>
                <Modal.CloseTrigger />

                <Modal.Header>
                  <Modal.Heading>More Details</Modal.Heading>
                </Modal.Header>

                <Modal.Body className="mx-auto">
                  <img
                    src={modalData.equipmentImage}
                    alt="Additional details of milk analyser"
                    className="h-72 w-auto rounded-xl object-contain sm:h-120"
                    loading="lazy"
                  />
                </Modal.Body>

                <Modal.Footer>
                  <Button
                    variant="secondary"
                    onPress={() => {
                      close();
                      onClose();
                    }}
                  >
                    Close
                  </Button>
                </Modal.Footer>
              </>
            )}
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}