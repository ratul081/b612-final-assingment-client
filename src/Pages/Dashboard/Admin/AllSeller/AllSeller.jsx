import React from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "react-query";
import { MdVerified } from "react-icons/md";
import { MdErrorOutline } from "react-icons/md";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AllSeller = () => {
  const [axiosSecure] = useAxiosSecure();

  const {
    data: allSellers = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["sellers"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/sellers`);
      return res.data.data;
    },
  });
  // //console.log(allSellers);
  const handleVerifySeller = (user) => {
    // //console.log("🚀 ~ handleVerifySeller ~ user:", user);
    axiosSecure.patch(`/users/verify/${user?._id}`).then((res) => {
      // //console.log(res.data);
      if (res.data.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          icon: "success",
          title: `${user?.name} is verified Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>Use ME | All sellers</title>
      </Helmet>
      <p className="text-center text-3xl font-semibold mb-8">Sellers</p>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th className="flex justify-center">Verify</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {allSellers.map((seller, idx) => (
              <tr key={idx}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={seller?.user_image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{seller?.user_name}</div>
                      <div className="text-sm opacity-50">
                        {seller?.user_location}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{seller?.user_email}</td>
                <td>
                  {seller?.verified ? (
                    <div className="m-1">
                      <MdVerified color="blue" size={25} />
                    </div>
                  ) : (
                    <div className="m-1">
                      <MdErrorOutline color="red" size={25} />
                    </div>
                  )}
                </td>
                <th>
                  <button
                    onClick={() => handleVerifySeller(seller)}
                    className={`btn btn-accent btn-xs ${
                      seller?.verified ? "btn-disabled" : " "
                    }`}>
                    Verify
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllSeller;
