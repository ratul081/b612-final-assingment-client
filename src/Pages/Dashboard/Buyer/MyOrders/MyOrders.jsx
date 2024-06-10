import React from "react";
import Swal from "sweetalert2";
import ItemList from "../../../../Components/ItemList/ItemList";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const MyOrders = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();

  const { data: orders = [], refetch } = useQuery({
    queryKey: ["orders", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/orders?email=${user?.email}`);
      return res.data.data;
    },
  });
  return (
    <div>
      <Helmet>
        <title>Use ME | My orders</title>
      </Helmet>
      <p className="text-center text-3xl font-semibold mb-8">Yours Orders</p>
      {orders.length == 0 ? (
        <div>No data found</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="text-xl">
              <tr>
                <th>Name</th>
                <th className="flex justify-center">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order?._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={order?.product_image} alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{order.product_name}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center items-center">
                      <div className="text-xl m-4">
                        {order?.paid ? (
                          "Paid"
                        ) : (
                          <>
                            <Link
                              className="btn bg-red-400 "
                              to="/dashboard/payment">
                              Pay
                            </Link>
                          </>
                        )}
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyOrders;
