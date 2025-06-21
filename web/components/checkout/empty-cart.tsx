import { Button } from "@/components/ui/button";
import GoBack from "@/components/common/go-back";

interface EmptyCartProps {
  onContinueShopping: () => void;
}

export default function EmptyCart({ onContinueShopping }: EmptyCartProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 pt-16 pb-24 max-w-6xl">
        <GoBack />
        <div className="mt-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
          <p className="text-gray-600 mb-8">Add some products to checkout</p>
          <Button onClick={onContinueShopping}>Continue Shopping</Button>
        </div>
      </div>
    </div>
  );
}
