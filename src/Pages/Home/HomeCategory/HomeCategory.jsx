import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const HomeCategory = () => {
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
  const getRandomElements = (arr, numElements) => {
    // Shuffle the array using Fisher-Yates (aka Knuth) Shuffle
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    // Return the first numElements elements from the shuffled array
    return arr.slice(0, numElements);
  };
  const categoriesShow = getRandomElements(categories, 4);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          Our Portfolio
        </h1>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2">
          {categoriesShow &&
            categoriesShow.map((category) => (
              <div
                className="flex items-end overflow-hidden bg-cover rounded-lg h-96"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80")',
                }}>
                <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                  <h2 className="mt-4 text-xl font-semibold capitalize dark:text-white">
                    <Link
                      to={`/category/${category}`}
                      className="mt-2 text-lg tracking-wider uppercase  ">
                      {category}
                    </Link>
                  </h2>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeCategory;
