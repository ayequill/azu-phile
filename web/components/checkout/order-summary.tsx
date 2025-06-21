import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useCartContext } from "@/contexts/cart-context";

interface OrderSummaryProps {
  isSubmitting?: boolean;
  paymentMethod?: "emoney" | "cash";
}

export default function OrderSummary({
  isSubmitting = false,
  paymentMethod = "emoney",
}: OrderSummaryProps) {
  const { items, totalPrice } = useCartContext();

  // Calculate totals
  const shipping = 50;
  const vat = Math.round(totalPrice * 0.2);
  const grandTotal = totalPrice + shipping + vat;

  return (
    <div className="bg-white rounded-lg p-6 md:p-8 sticky top-8">
      <h2 className="text-lg font-bold uppercase tracking-wide mb-6">
        Summary
      </h2>

      {items.length > 0 ? (
        <>
          <div className="space-y-6 mb-6">
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={64}
                  height={64}
                  className="rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-sm uppercase">
                    {item.shortName}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    $ {item.price.toLocaleString()}
                  </p>
                </div>
                <span className="text-gray-600 text-sm">x{item.quantity}</span>
              </div>
            ))}
          </div>

          <div className="space-y-2 mb-6">
            <div className="flex justify-between">
              <span className="text-gray-600 uppercase text-sm">Total</span>
              <span className="font-bold">$ {totalPrice.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 uppercase text-sm">Shipping</span>
              <span className="font-bold">$ {shipping}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 uppercase text-sm">
                VAT (Included)
              </span>
              <span className="font-bold">$ {vat.toLocaleString()}</span>
            </div>
            <div className="flex justify-between pt-4 border-t">
              <span className="text-gray-600 uppercase text-sm">
                Grand Total
              </span>
              <span className="font-bold text-orange-500 text-lg">
                $ {grandTotal.toLocaleString()}
              </span>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-[#D87D4A] hover:bg-[#FBAF85] text-white cursor-pointer"
            disabled={items.length === 0 || isSubmitting}
          >
            {isSubmitting
              ? "Processing..."
              : paymentMethod === "cash"
              ? "Continue"
              : "Continue & Pay"}
          </Button>
        </>
      ) : (
        <p className="text-center text-gray-600">No items in cart</p>
      )}
    </div>
  );
}
