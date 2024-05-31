import React from "react";
import { CiHeart } from "react-icons/ci";
import { TbTruckDelivery, TbTruckReturn } from "react-icons/tb";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
const ProductDetails = ({ productData }) => {
  const [axiosSecure] = useAxiosSecure();
  const {
    product_name,
    user_email,
    product_category,
    product_resale_price,
    product_image,
    product_condition,
    product_description,
    product_location,
    product_phoneNumber,
    product_postdate,
  } = productData;
  console.table(productData);

  const handleReportItem = (id) => {
    axiosSecure.patch(`/product/report/${id}`).then((res) => {
      console.log(res.data);
      if (res.data.data.modifiedCount > 0) {
        Swal.fire({
          icon: "success",
          title: "Product added to report list",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div className="lg:space-y-4 space-y-1 md:space-y-2">
      <p className="text-2xl mt-4 font-semibold">{product_name}</p>
      <p>{productData ? <span>In stock</span> : <span>out of stock</span>}</p>
      <p className="text-2xl">৳ {product_resale_price}</p>
      <p>{product_description}</p>
      <p>Condition type: {product_condition}</p>
      <p>Posted on: {product_postdate}</p>
      <p>Contact Number: {product_phoneNumber}</p>
      <div className="flex gap-6">
        <label htmlFor="booking-modal" className="btn btn-error text-white">
          Book now
        </label>
        <button
          onClick={() => handleReportItem(productData._id)}
          className={`btn btn-ghost  text-white ${
            productData?.reported && "btn-disabled"
          }`}>
          Report
        </button>
        <button>
          <CiHeart className="h-10 w-10" />
        </button>
      </div>
      <div className="border rounded">
        <div className="lg:m-6 md:m-2 m-4">
          <div className="flex gap-4">
            <div>
              <TbTruckDelivery className="h-10 w-10" />
            </div>
            <div className="font-semibold">
              <p>Free delivery</p>
              <Link className="underline text-xs">
                Enter your postal code for Delivery Availability
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:m-6 md:m-2 m-4">
          <div className="flex gap-4">
            <div>
              <TbTruckReturn className="h-10 w-10" />
            </div>
            <div className="font-semibold">
              <p>Return Delivery</p>
              <p className="text-xs">
                Free 30 Days Delivery Returns{" "}
                <Link className="underline"> Details</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
