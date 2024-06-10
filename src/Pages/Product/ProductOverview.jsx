import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import BookingModal from "../../Components/Shared/BookingModal";
import useCart from "../../hooks/useCart";
import { Helmet } from "react-helmet-async";

const ProductOverview = () => {
  const productData = useLoaderData().data;
  const [productDetails, setProductDetails] = useState([]);
  return (
    <div className="m-6 md:m-10 md:flex md:gap-12 justify-center">
      <Helmet>
        <title>Use ME | {productData?.product_name}</title>
      </Helmet>
      <div className="md:w-1/2">
        <img
          className="w-[360px] h-[220px] md:w-[480px] md:h-[480px] object-cover"
          src={productData?.product_image}
          alt=""
          srcSet=""
        />
      </div>
      <div className="md:w-1/2">
        <ProductDetails
          productData={productData}
          setProductDetails={setProductDetails}></ProductDetails>
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
