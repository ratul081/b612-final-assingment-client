import React from "react";

const BillingInfo = () => {
  return (
    <div className="mx-32 mb-12 ">
      <div className="my-8">
        {[...Array(2).keys()].map((_, idx) => (
          <div key={idx} className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <img
                src="https://www.penguin.com.bd/wp-content/uploads/2021/07/Samsung-T35F-22-Inch-Borderless-LED-Monitor-LF22T350FHMXUE-1.jpg"
                className="w-14 h-14"
                alt=""
              />
              <p>LCD Monitor</p>
            </div>
            <p>$650</p>
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        <p>Subtotal:</p>
        <p>$650</p>
      </div>
      <div className="divider"></div>
      <div className="flex justify-between">
        <p>Shipping:</p>
        <p>$650</p>
      </div>
      <div className="divider"></div>
      <div className="flex justify-between">
        <p>Total:</p>
        <p>$650</p>
      </div>
      <div className="flex flex-col">
        <div className="flex gap-4 my-8">
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-red-500"
            checked
          />
          <p>Bank</p>
        </div>
        <div className="flex gap-4">
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-red-500"
            checked
          />
          <p>Bank</p>
        </div>
      </div>
      <div className="flex my-8 gap-4">
        <input
          type="text"
          id="default-input"
          placeholder="Coupon Code"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
        <p className="bg-[#DB4444] cursor-pointer text-white font-medium rounded-md text-sm w-full py-2.5 text-center">
          Apply Coupon
        </p>
      </div>
      <input
        type="submit"
        value="Place order"
        className="bg-[#DB4444]  cursor-pointer text-white font-medium rounded-md text-sm w-48 py-2.5 text-center"
      />
    </div>
  );
};

export default BillingInfo;
