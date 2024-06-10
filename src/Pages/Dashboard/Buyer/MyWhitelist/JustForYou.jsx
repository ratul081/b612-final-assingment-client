import React from "react";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "react-query";

const JustForYou = () => {
  const [axiosSecure] = useAxiosSecure();
  const {
    data: adItems = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["/products-ad"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/products-ad`);
      return res.data.data;
    },
  });

  const getRandomElements = (arr, numElements) => {
    // Shuffle the array using Fisher-Yates (aka Knuth) Shuffle
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    // Return the first numElements elements from the shuffled array
    return arr.slice(0, numElements);
  };
  const adItemsShow = getRandomElements(adItems, 4);

  return (
    <div className="mt-20">
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="rounded bg-[#DB4444] h-8  p-2"> </div>
          <p>Just For You</p>
        </div>
        <div>
          <Link to="/products" className="btn px-12">
            See All
          </Link>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row mx-24 justify-around ">
        {adItemsShow &&
          adItemsShow.map((item, idx) => (
            <div key={idx} className="mt-14">
              <div className="flex justify-end">
                <p className="text-xs text-white bg-[#DB4444] rounded p-2">
                  -35%
                </p>
              </div>
              <div>
                <img
                  src={item?.product_image}
                  className="w-full object-cover h-32"
                  alt=""
                />
              </div>
              <div className="flex justify-center">
                <button className="bg-black w-full rounded-b text-white mt-4 p-2">
                  <p>Add to Cart</p>
                </button>
              </div>
              <div className="my-4 space-y-2">
                <p>{item?.product_name}</p>
                <p>
                  ৳{(parseFloat(item?.product_resale_price) * 3.5).toFixed(1)}{" "}
                  <del>৳ {item?.product_resale_price} </del>
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default JustForYou;
