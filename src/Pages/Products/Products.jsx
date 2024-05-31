import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Categories from "./Categories/Categories";
import ProductsDisplay from "./ProductsDisplay/ProductsDisplay";

const Products = () => {
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(9);
  const [count, setCount] = useState(0);
  const pages = Math.ceil(count / size);

  const [axiosSecure] = useAxiosSecure();
  const { data: products = [], refetch } = useQuery({
    queryKey: ["products-by-paginating", page, size],
    queryFn: () =>
      axiosSecure
        .get(`/products-by-paginating?page=${page}&size=${size}`)
        .then((res) => {
          setCount(res.data.data.count);
          return res.data.data.data;
        }),
  });

  useEffect(() => {
    refetch();
  }, [page, size, refetch]);

  return (
    <div className="md:mt-12 sm-8">
      <p className="md:text-3xl text-xl my-4">Here some devices you can buy</p>
      <div className="lg:grid lg:grid-cols-5 flex flex-col sm:gap-4">
        <div>
          <Categories />
        </div>
        <div className="col-span-4">
          <ProductsDisplay products={products} />
          <div className="flex justify-center my-4">
            {products.length !== 0 && (
              <>
                <nav aria-label="Page navigation example">
                  <ul className="flex items-center -space-x-px h-10 text-base">
                    <li>
                      <button
                        onClick={() => page > 0 && setPage(page - 1)}
                        disabled={page === 0}
                        className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <span className="sr-only">Previous</span>
                        <svg
                          className="w-3 h-3 rtl:rotate-180"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 6 10">
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 1 1 5l4 4"
                          />
                        </svg>
                      </button>
                    </li>
                    {[...Array(pages).keys()].map((number) => (
                      <li
                      className="grid grid-cols-2 lg:flex"
                      key={number}>
                        <button
                          onClick={() => setPage(number)}
                          className={`flex items-center justify-center px-4 h-10 leading-tight border ${
                            page === number
                              ? "text-white bg-blue-500"
                              : "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"
                          }`}>
                          {number + 1}
                        </button>
                      </li>
                    ))}
                    <li>
                      <button
                        onClick={() => page < pages - 1 && setPage(page + 1)}
                        disabled={page === pages - 1}
                        className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-s-0 border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <span className="sr-only">Next</span>
                        <svg
                          className="w-3 h-3 rtl:rotate-180"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 6 10">
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 9 4-4-4-4"
                          />
                        </svg>
                      </button>
                    </li>
                  </ul>
                </nav>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
