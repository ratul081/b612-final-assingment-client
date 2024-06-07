import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";

const CheckoutFrom = () => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  // //console.log("🚀 ~ CheckoutFrom ~ transactionId:", transactionId);
  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const [cart, refetch] = useCart();
  const navigate = useNavigate();

  const totalPrice = cart.reduce(
    (total, item) => total + item.product_resale_price,
    0
  );

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          //console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      //console.log("payment error", error);
      setError(error.message);
    } else {
      // //console.log("payment method", paymentMethod);
      setError("");
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    // //console.log(paymentIntent);

    if (confirmError) {
      //console.log("confirm error");
    } else {
      //console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        //console.log("transaction id", paymentIntent.id);
        setTransactionId(paymentIntent.id);

        // now save the payment in the database
        const payment = {
          buyerName: user?.displayName,
          buyerEmail: user?.email,
          totalPrice: totalPrice,
          transactionId: paymentIntent.id,
          date: new Date(), // utc date convert. use moment js to
          cartIds: cart.map((item) => item._id),
          productIds: cart.map((item) => item.product_id),
          productName: cart.map((item) => item.product_name),
          seller_email: cart.map((item) => item.seller_email),
          status: "pending",
        };
        console.log(payment);
        const res = await axiosSecure.post("/payments", payment);
        //console.log("payment saved", res.data);
        refetch();
        // //console.log(res);
        if (res.data?.data?.insertedId) {
          Swal.fire({
            // position: "top",
            icon: "success",
            title: "Thank you for buying from us",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/dashboard/payment-history");
        }
      }
    }
  };
  return (
    <div className="font-[sans-serif] bg-white p-4">
      <div className="md:max-w-5xl max-w-xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 max-md:order-1">
            <h2 className="text-3xl font-extrabold text-gray-800">
              Make a payment
            </h2>
            <p className="text-gray-800 text-sm mt-4">
              Complete your transaction swiftly and securely with our
              easy-to-use payment process.
            </p>
            <form
              onSubmit={handleSubmit}
              className="mt-8 max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
              <div className="grid gap-4">
                <input
                  type="text"
                  placeholder="Cardholder's Name"
                  className="px-4 py-3.5 bg-gray-100 text-gray-800 w-full text-sm border rounded-md focus:border-purple-500 focus:bg-transparent outline-none"
                />
                <div className="mt-4 p-4 bg-gray-100 border rounded-md">
                  <CardElement
                    options={{
                      style: {
                        base: {
                          fontSize: "16px",
                          color: "#424770",
                          "::placeholder": {
                            color: "#aab7c4",
                          },
                          padding: "10px 12px",
                          borderRadius: "4px",
                          border: "1px solid #ced4da",
                          background: "#ffffff",
                        },
                        invalid: {
                          color: "#9e2146",
                        },
                      },
                    }}
                  />
                </div>
              </div>
              <input
                type="submit"
                value="Pay"
                className={` btn mt-4 w-full py-3.5 text-sm bg-purple-500 text-white rounded-md hover:bg-purple-600 ${
                  (!stripe || !clientSecret) && "btn-disabled"
                } tracking-wide`}
              />
              <p className="text-red-600">{error}</p>
              {transactionId && (
                <p className="text-green-600">
                  {" "}
                  Your transaction id: {transactionId}
                </p>
              )}
            </form>
          </div>
          <div className="bg-gray-100 p-6 rounded-md">
            <h2 className="text-3xl font-extrabold text-gray-800">
              ৳{totalPrice}
            </h2>
            <ul className="text-gray-800 mt-6 space-y-3">
              {cart.map((item, idx) => (
                <li key={idx} className="flex flex-wrap gap-4 text-sm">
                  {item?.product_name}
                  <span className="ml-auto font-bold">
                    ৳{item?.product_resale_price}
                  </span>
                </li>
              ))}
              <li className="flex flex-wrap gap-4 text-sm font-bold border-t-2 pt-4">
                Total <span className="ml-auto">৳{totalPrice}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutFrom;
