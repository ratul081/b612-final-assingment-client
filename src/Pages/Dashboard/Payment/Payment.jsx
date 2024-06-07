import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentFrom from "./PaymentFrom";
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <PaymentFrom></PaymentFrom>
      </Elements>
    </div>
  );
};

export default Payment;
