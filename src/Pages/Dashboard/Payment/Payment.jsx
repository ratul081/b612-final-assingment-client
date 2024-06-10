import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentFrom from "./PaymentFrom";
import { Helmet } from "react-helmet-async";
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  return (
    <div>
      <Helmet>
        <title>Use ME | Payment</title>
      </Helmet>
      <Elements stripe={stripePromise}>
        <PaymentFrom></PaymentFrom>
      </Elements>
    </div>
  );
};

export default Payment;
