
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRupeeSign } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import type { ModalData } from "@/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface BuyNowModalProps {
  isModelOpen: boolean;
  onClose: () => void;
  modalData: ModalData;
}

interface BuyFormValues {
  name: string;
  quantity: number;
  mobileNumber: string;
}

export default function BuyNowModal({
  isModelOpen,
  onClose,
  modalData,
}: BuyNowModalProps) {
  const [sending, setSending] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BuyFormValues>({
    defaultValues: {
      name: "",
      quantity: 1,
      mobileNumber: "",
    },
  });

  const handleOnSubmit = (data: BuyFormValues) => {
  const message = `Hello, I want to buy this item:

Product Name: ${modalData.equipmentName}
Quantity: ${data.quantity}
Name: ${data.name}
Mobile: ${data.mobileNumber}

Please contact me.`;

  const whatsappUrl =
    `https://wa.me/917375082341?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, "_blank", "noopener,noreferrer");

  reset();
  onClose();
};
  return (
    <Dialog
      open={isModelOpen}
      onOpenChange={(open) => {
        if (!open) {
          onClose();
        }
      }}
    >
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">

        {modalData.modalType === "BN" ? (
          <>
            <DialogHeader>
              <DialogTitle className="flex flex-wrap items-center gap-2 capitalize">
                <span>{modalData.equipmentName}</span>

                <span className="flex items-center text-gray-600">
                  <FaRupeeSign />
                  {modalData.equipmentPrice}
                </span>
              </DialogTitle>

              <DialogDescription>
                Fill in your details to enquire about this product.
              </DialogDescription>
            </DialogHeader>

            <form
              onSubmit={handleSubmit(handleOnSubmit)}
              className="flex flex-col gap-5"
            >
              {/* Name and Quantity */}
              <div className="flex gap-4 max-sm:flex-col">

                <div className="w-full space-y-2">
                  <Label htmlFor="name">
                    Name <span className="text-red-500">*</span>
                  </Label>

                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    {...register("name", {
                      required: "Please enter your name",
                    })}
                  />

                  {errors.name && (
                    <p className="text-sm text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="w-full space-y-2">
                  <Label htmlFor="quantity">Quantity</Label>

                  <Input
                    id="quantity"
                    type="number"
                    min={1}
                    {...register("quantity", {
                      valueAsNumber: true,
                      min: {
                        value: 1,
                        message: "Minimum quantity is 1",
                      },
                    })}
                  />

                  {errors.quantity && (
                    <p className="text-sm text-red-500">
                      {errors.quantity.message}
                    </p>
                  )}
                </div>

              </div>

              {/* Mobile Number */}
              <div className="space-y-2">
                <Label htmlFor="mobileNumber">
                  Mobile Number <span className="text-red-500">*</span>
                </Label>

                <Input
                  id="mobileNumber"
                  type="tel"
                  inputMode="tel"
                  placeholder="Enter your contact number"
                  {...register("mobileNumber", {
                    required: "Please enter your mobile number",
                    pattern: {
                      value: /^[0-9+\s()-]{10,16}$/,
                      message: "Please enter a valid mobile number",
                    },
                  })}
                />

                {errors.mobileNumber && (
                  <p className="text-sm text-red-500">
                    {errors.mobileNumber.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <Button
                type="submit"
                disabled={sending}
                className="w-full"
              >
                {sending ? "Opening WhatsApp..." : "Send on WhatsApp"}
                <IoMdSend className="ml-2 h-4 w-4" />
              </Button>
            </form>

            <DialogFooter>
              <p className="w-full text-sm text-muted-foreground">
                Your enquiry will be sent via WhatsApp.
              </p>
            </DialogFooter>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>More Details</DialogTitle>
              <DialogDescription>
                Additional product information.
              </DialogDescription>
            </DialogHeader>

            <div className="flex justify-center">
              <img
                src={modalData.equipmentImage}
                alt="Additional details of milk analyser"
                className="h-72 w-auto rounded-xl object-contain sm:h-96"
                loading="lazy"
              />
            </div>

            <DialogFooter>
              <Button
                type="button"
                variant="secondary"
                onClick={onClose}
              >
                Close
              </Button>
            </DialogFooter>
          </>
        )}

      </DialogContent>
    </Dialog>
  );
}
