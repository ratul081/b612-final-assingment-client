import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "react-query";
const ReportedItems = () => {
  const [axiosSecure] = useAxiosSecure();
  const {
    data: reportedItems = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["products-reported"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/products-reported`);
      return res.data.data;
    },
  });
  // console.log(reportedItems[0]);
  return (
    <div>
      <section>
        <div className="mx-auto lg:p-0 sm:px-6 sm:py-12">
          <div className="mx-auto">
            <header className="text-center">
              <h1 className="lg:text-3xl font-bold text-gray-900 sm:text-xl">
                Reported Items
              </h1>
            </header>
            {reportedItems !== 0 &&
              reportedItems.map((reportedItem, idx) => (
                <div key={reportedItem?._id} className="mt-8">
                  <ul className="space-y-4">
                    <li className="flex items-center gap-4">
                      <img
                        src={reportedItem.product_image}
                        alt=""
                        className="h-20 w-20 rounded object-cover"
                      />
                      <div>
                        <h3 className="text-xl text-gray-900">
                          {reportedItem.product_name}
                        </h3>
                        <dl className="mt-0.5 space-y-px text-[14px] text-gray-600">
                          <div>
                            <dt className="inline">Category: </dt>
                            <dd className="inline">
                              {reportedItem.product_category}
                            </dd>
                          </div>
                          <div>
                            <dt className="inline">Condition: </dt>
                            <dd className="inline">
                              {reportedItem.product_condition}
                            </dd>
                          </div>
                        </dl>
                      </div>
                      <div className="flex flex-1 items-center justify-end gap-2">
                        <button className="btn btn-accent transition">
                          Ignore
                        </button>
                        <button className="btn btn-error transition">
                          Ban Item
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReportedItems;
