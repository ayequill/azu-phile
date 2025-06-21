import { Form } from "@/components/ui/form";
import { useCheckoutForm, CheckoutFormValues } from "@/hooks/use-checkout-form";
import BillingDetails from "./billing-details";
import ShippingInfo from "./shipping-info";
import PaymentDetails from "./payment-details";
import OrderSummary from "./order-summary";

interface CheckoutFormProps {
  onSubmit?: () => void;
}

export default function CheckoutForm({ onSubmit }: CheckoutFormProps) {
  const { form, paymentMethod, onSubmit: handleSubmit } = useCheckoutForm();

  const handleFormSubmit = (values: CheckoutFormValues) => {
    handleSubmit(values);
    onSubmit?.();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleFormSubmit)}
        className="mt-8 grid lg:grid-cols-3 gap-8"
      >
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg p-6 md:p-8">
            <h1 className="text-2xl md:text-3xl font-bold uppercase mb-8">
              Checkout
            </h1>

            <BillingDetails control={form.control} />
            <ShippingInfo control={form.control} />
            <PaymentDetails
              control={form.control}
              paymentMethod={paymentMethod}
            />
          </div>
        </div>

        <div className="lg:col-span-1">
          <OrderSummary
            isSubmitting={form.formState.isSubmitting}
            paymentMethod={paymentMethod}
          />
        </div>
      </form>
    </Form>
  );
}
