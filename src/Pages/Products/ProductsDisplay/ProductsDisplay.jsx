import React, { useState } from "react";
import BookingModal from "../../../Components/Shared/BookingModal";
import ProductDisplayCard from "./ProductDisplayCard";

const ProductsDisplay = ({ products }) => {
  const [productDetails, setProductDetails] = useState([]);
  return (
    <div className="m-4 md:mb-4 md:mt-16 md:mx-8 grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12 place-items-center">
      {products &&
        products.map((product, idx) => (
          <ProductDisplayCard
            key={product._id}
            setProductDetails={setProductDetails}
            product={product}></ProductDisplayCard>
        ))}
      {productDetails && (
        <BookingModal
          productDetails={productDetails}
          setProductDetails={setProductDetails}></BookingModal>
      )}
    </div>
  );
};

export default ProductsDisplay;
