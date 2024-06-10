import React, { useState } from "react";
import { useQuery } from "react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Pagination from "./Pagination";

const Categories = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [axiosSecure] = useAxiosSecure();
  const { data: products = [], refetch } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      axiosSecure.get("/products").then((res) => {
        return res.data.data;
      }),
  });

  const categories = [
    ...new Set(products.map((item) => item.product_category)),
  ];
  //console.log("🚀 ~ categories ~ categories:", categories);

  return (
    <>
      <Pagination
        data={categories}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        pageSize={pageSize}
        setPageSize={setPageSize}
      />
    </>
  );
};

export default Categories;
