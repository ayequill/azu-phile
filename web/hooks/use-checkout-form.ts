import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const checkoutFormSchema = z
  .object({
    name: z
      .string()
      .min(1, { message: "Name is required" })
      .regex(/^[^<>%$#^*]*$/, { message: "Wrong format" }),
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Wrong format" }),
    phone: z
      .string()
      .min(1, { message: "Phone number is required" })
      .regex(/^[\+]?[1-9][\d]{0,15}$/, { message: "Wrong format" }),
    address: z.string().min(1, { message: "Address is required" }),
    zipCode: z
      .string()
      .min(1, { message: "ZIP Code is required" })
      .regex(/^[0-9]{5}(?:-[0-9]{4})?$/, { message: "Wrong format" }),
    city: z.string().min(1, { message: "City is required" }),
    country: z.string().min(1, { message: "Country is required" }),
    paymentMethod: z.enum(["emoney", "cash"], {
      required_error: "Please select a payment method",
    }),
    eMoneyNumber: z.string().optional(),
    eMoneyPIN: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.paymentMethod === "emoney") {
        return data.eMoneyNumber && data.eMoneyPIN;
      }
      return true;
    },
    {
      message: "e-Money details are required",
      path: ["eMoneyNumber"],
    }
  );

export type CheckoutFormValues = z.infer<typeof checkoutFormSchema>;

export const useCheckoutForm = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      zipCode: "",
      city: "",
      country: "",
      paymentMethod: "emoney",
      eMoneyNumber: "",
      eMoneyPIN: "",
    },
  });

  const paymentMethod = form.watch("paymentMethod");

  const onSubmit = (values: CheckoutFormValues) => {
    console.log("Form submitted:", values);
    setShowConfirmation(true);
  };

  const resetForm = () => {
    form.reset();
    setShowConfirmation(false);
  };

  const closeConfirmation = () => {
    setShowConfirmation(false);
  };

  return {
    form,
    paymentMethod,
    showConfirmation,
    setShowConfirmation,
    onSubmit,
    resetForm,
    closeConfirmation,
  };
};
