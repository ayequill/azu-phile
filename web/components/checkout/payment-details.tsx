import { Control } from "react-hook-form";
import Image from "next/image";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CheckoutFormValues } from "@/hooks/use-checkout-form";

interface PaymentDetailsProps {
  control: Control<CheckoutFormValues>;
  paymentMethod: "emoney" | "cash";
}

export default function PaymentDetails({
  control,
  paymentMethod,
}: PaymentDetailsProps) {
  return (
    <div>
      <h2 className="text-sm font-bold uppercase text-[#D87D4A] tracking-wide mb-4">
        Payment Details
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <FormLabel className="text-sm font-bold">Payment Method</FormLabel>
        </div>
        <FormField
          control={control}
          name="paymentMethod"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  value={field.value}
                  className="space-y-3"
                >
                  <div className="flex items-center space-x-3 border rounded-lg p-4 hover:border-orange-500 transition-colors">
                    <RadioGroupItem value="emoney" id="emoney" />
                    <label
                      htmlFor="emoney"
                      className="text-sm font-bold cursor-pointer flex-1"
                    >
                      e-Money
                    </label>
                  </div>
                  <div className="flex items-center space-x-3 border rounded-lg p-4 hover:border-orange-500 transition-colors">
                    <RadioGroupItem value="cash" id="cash" />
                    <label
                      htmlFor="cash"
                      className="text-sm font-bold cursor-pointer flex-1"
                    >
                      Cash on Delivery
                    </label>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      {paymentMethod === "emoney" && (
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <FormField
            control={control}
            name="eMoneyNumber"
            render={({ field }) => (
              <FormItem>
                <div className="flex justify-between items-center">
                  <FormLabel>e-Money Number</FormLabel>
                  <FormMessage />
                </div>
                <FormControl>
                  <Input placeholder="238521993" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="eMoneyPIN"
            render={({ field }) => (
              <FormItem>
                <div className="flex justify-between items-center">
                  <FormLabel>e-Money PIN</FormLabel>
                  <FormMessage />
                </div>
                <FormControl>
                  <Input placeholder="6891" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
      )}

      {paymentMethod === "cash" && (
        <div className="flex items-center gap-4 mt-6 p-4 bg-gray-50 rounded-lg">
          <Image
            src="/assets/checkout/icon-cash-on-delivery.svg"
            alt="Cash on delivery"
            width={48}
            height={48}
            className="flex-shrink-0"
          />
          <p className="text-gray-600 text-sm">
            The &apos;Cash on Delivery&apos; option enables you to pay in cash
            when our delivery courier arrives at your residence. Just make sure
            your address is correct so that your order will not be cancelled.
          </p>
        </div>
      )}
    </div>
  );
}
