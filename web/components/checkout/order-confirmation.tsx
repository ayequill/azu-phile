import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useCartContext } from "@/contexts/cart-context";

interface OrderConfirmationProps {
  isOpen: boolean;
  onClose: () => void;
  onBackHome: () => void;
}

export default function OrderConfirmation({
  isOpen,
  onClose,
  onBackHome,
}: OrderConfirmationProps) {
  const { items, totalPrice, clearCart } = useCartContext();

  // Calculate totals
  const shipping = 50;
  const vat = Math.round(totalPrice * 0.2);
  const grandTotal = totalPrice + shipping + vat;

  const handleBackHome = () => {
    onClose();
    onBackHome();
    clearCart();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md w-full mx-4" showCloseButton={false}>
        <div className="flex flex-col items-start">
          <Image
            src="/assets/checkout/icon-order-confirmation.svg"
            alt="Order confirmed"
            width={64}
            height={64}
            className="mb-6"
          />

          <DialogHeader className="text-left mb-6">
            <DialogTitle className="text-2xl font-bold uppercase mb-4 leading-tight">
              Thank you
              <br />
              for your order
            </DialogTitle>
            <DialogDescription className="text-gray-600">
              You will receive an email confirmation shortly.
            </DialogDescription>
          </DialogHeader>

          <div className="w-full bg-gray-50 rounded-lg mb-6 overflow-hidden">
            <div className="p-4">
              {items.slice(0, 1).map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={50}
                    height={50}
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
                  <span className="text-gray-600 text-sm">
                    x{item.quantity}
                  </span>
                </div>
              ))}
              {items.length > 1 && (
                <div className="pt-4 border-t mt-4 text-center">
                  <p className="text-gray-600 text-sm font-bold">
                    and {items.length - 1} other item(s)
                  </p>
                </div>
              )}
            </div>
            <div className="bg-black text-white p-4">
              <p className="text-gray-400 text-sm uppercase mb-2">
                Grand Total
              </p>
              <p className="text-white font-bold text-lg">
                $ {grandTotal.toLocaleString()}
              </p>
            </div>
          </div>

          <Button
            onClick={handleBackHome}
            className="w-full bg-[#D87D4A] hover:bg-[#FBAF85] text-white cursor-pointer"
          >
            Back to Home
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
