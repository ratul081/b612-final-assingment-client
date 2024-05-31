import React from "react";
import CheckOutFrom from "./CheckOutFrom";
import BillingInfo from "./BillingInfo";

const CheckOut = () => {
  return (
    <div>
      <div className="text-4xl my-12">Billing Details</div>
      <form className="grid grid-cols-2 align-middle gap-8">
        <CheckOutFrom></CheckOutFrom>
        <BillingInfo></BillingInfo>
      </form>
    </div>
  );
};

export default CheckOut;
