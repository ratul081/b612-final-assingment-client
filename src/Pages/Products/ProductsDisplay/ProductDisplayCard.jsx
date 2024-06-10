import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const ProductDisplayCard = ({ product, setProductDetails }) => {
  const { user } = useAuth();
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
  } = product;
  return (
    <div className="card card-compact w-80 md:w-96">
      <figure>
        <img
          className="md:h-64 h-52 aspect-auto		 md:w-60 object-cover"
          src={product_image}
          alt={product_name}
        />
      </figure>
      <div className="card-body mx-2">
        <div>
          <p className="font-bold text-2xl">{product_name}</p>
          <p className="font-bold text-xl">
            ৳<span>{product_resale_price}</span>
          </p>
        </div>
        <div className="flex justify-between">
          <Link
            to={`/products/${product?._id}`}
            className="inline-flex btn items-center px-3 font-medium text-center text-white bg-blue-700 rounded-lg">
            See more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
          {user && (
            <label
              htmlFor="booking-modal"
              onClick={() => setProductDetails(product)}
              className="btn btn-accent text-white">
              Book now
            </label>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDisplayCard;
