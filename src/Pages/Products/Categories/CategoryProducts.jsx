import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

import Categories from "./Categories";
import ProductsDisplay from "../ProductsDisplay/ProductsDisplay";
import { Helmet } from "react-helmet-async";

const CategoryProducts = () => {
  const categoryProduct = useLoaderData().data;
  console.log("🚀 ~ CategoryProducts ~ categoryProduct:", categoryProduct);
  const navigate = useNavigate();
  return (
    <div className="md:mt-12 sm-8">
      <Helmet>
        <title>Use ME | Category- {categoryProduct[0]?.product_category} </title>
      </Helmet>
      <p className="md:text-3xl text-xl my-4">Here some devices you can buy</p>
      <div className="lg:grid lg:grid-cols-5 flex flex-col sm:gap-4">
        <div>
          <Categories></Categories>
          <div className="flex justify-end mt-5">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 rtl:rotate-180">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="col-span-4">
          <ProductsDisplay products={categoryProduct}></ProductsDisplay>
        </div>
      </div>
    </div>
  );
};

export default CategoryProducts;
