import { Control } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CheckoutFormValues } from "@/hooks/use-checkout-form";

interface ShippingInfoProps {
  control: Control<CheckoutFormValues>;
}

export default function ShippingInfo({ control }: ShippingInfoProps) {
  return (
    <div className="mb-8">
      <h2 className="text-sm font-bold uppercase text-[#D87D4A] tracking-wide mb-4">
        Shipping Info
      </h2>
      <div className="grid gap-6">
        <FormField
          control={control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <div className="flex justify-between items-center">
                <FormLabel>Your Address</FormLabel>
                <FormMessage />
              </div>
              <FormControl>
                <Input placeholder="1137 Williams Avenue" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={control}
            name="zipCode"
            render={({ field }) => (
              <FormItem>
                <div className="flex justify-between items-center">
                  <FormLabel>ZIP Code</FormLabel>
                  <FormMessage />
                </div>
                <FormControl>
                  <Input placeholder="10001" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <div className="flex justify-between items-center">
                  <FormLabel>City</FormLabel>
                  <FormMessage />
                </div>
                <FormControl>
                  <Input placeholder="New York" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={control}
          name="country"
          render={({ field }) => (
            <FormItem className="w-1/2">
              <div className="flex justify-between items-center">
                <FormLabel>Country</FormLabel>
                <FormMessage />
              </div>
              <FormControl>
                <Input placeholder="United States" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
