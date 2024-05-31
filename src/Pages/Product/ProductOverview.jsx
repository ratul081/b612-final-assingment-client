import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import BookingModal from "../../Components/Shared/BookingModal";
import useCart from "../../hooks/useCart";

const ProductOverview = () => {
  const productData = useLoaderData().data;
  const [productDetails, setProductDetails] = useState(productData);
  return (
    <div className="m-6 md:m-10 md:flex md:gap-12 justify-center">
      <div className="md:w-1/2">
        <img
          className="w-[360px] h-[220px] md:w-[480px] md:h-[480px] object-cover"
          src={productData?.product_image}
          alt=""
          srcSet=""
        />
      </div>
      <div className="md:w-1/2">
        <ProductDetails productData={productData}></ProductDetails>
      </div>
      {productDetails && (
        <BookingModal
          productDetails={productDetails}
          setProductDetails={setProductDetails}></BookingModal>
      )}
    </div>
  );
};

export default ProductOverview;
