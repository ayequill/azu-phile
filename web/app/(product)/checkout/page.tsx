"use client";

import { useCartContext } from "@/contexts/cart-context";
import { useCheckoutForm } from "@/hooks/use-checkout-form";
import GoBack from "@/components/common/go-back";
import CheckoutForm from "@/components/checkout/checkout-form";
import EmptyCart from "@/components/checkout/empty-cart";
import OrderConfirmation from "@/components/checkout/order-confirmation";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { items } = useCartContext();
  const { showConfirmation, setShowConfirmation, closeConfirmation } =
    useCheckoutForm();
  const router = useRouter();
  const handleContinueShopping = () => {
    router.push("/", { scroll: false });
  };

  const handleBackHome = () => {
    router.push("/", { scroll: false });
  };

  const handleFormSubmit = () => {
    setShowConfirmation(true);
  };

  if (items.length === 0) {
    return <EmptyCart onContinueShopping={handleContinueShopping} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 pt-16 pb-24 max-w-6xl">
        <GoBack />
        <CheckoutForm onSubmit={handleFormSubmit} />
      </div>

      <OrderConfirmation
        isOpen={showConfirmation}
        onClose={closeConfirmation}
        onBackHome={handleBackHome}
      />
    </div>
  );
}
