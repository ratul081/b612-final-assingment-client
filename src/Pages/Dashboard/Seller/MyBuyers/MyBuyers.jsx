import React from "react";
import { Helmet } from "react-helmet-async";
import { useQuery } from "react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const MyBuyers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();

  const { data: buyerInfo = [], refetch } = useQuery({
    queryKey: ["buyerInfo", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/orders-seller?email=${user?.email}`);
      return res.data.data;
    },
  });
  console.log(buyerInfo);
  return (
    <div>
      <Helmet>
        <title>Use ME | My Buyers</title>
      </Helmet>
      <p className="text-center text-3xl font-semibold mb-8">Buyers</p>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Product</th>
              <th>Transaction Id</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {buyerInfo.map((buyer, idx) => (
              <tr key={idx}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{buyer?.buyer_name}</div>
                      <div className="text-sm opacity-50">
                        {buyer?.buyer_email}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{buyer?.product_name}</td>
                <td>{buyer?.transactionId}</td>
                <td>{buyer?.paid ? "Paid" : "Pending"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBuyers;
