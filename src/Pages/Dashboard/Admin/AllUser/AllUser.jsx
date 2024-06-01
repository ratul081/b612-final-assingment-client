import React from "react";
import { useQuery } from "react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import AllUserTable from "./AllUserTable";
const AllUser = () => {
  const [axiosSecure] = useAxiosSecure();

  const {
    data: allUser = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["all-users"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/all-users`);
      return res.data.data;
    },
  });
  // //console.log("🚀 ~ AllUser ~ allUser:", allUser);
  return (
    <div>
      <p className="text-center text-3xl font-semibold mb-8">Users</p>
      {allUser.length == 0 ? (
        <div>No data found</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Account type</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {allUser.map((userData) => (
                <AllUserTable
                  key={userData?._id}
                  userData={userData}
                  refetch={refetch}></AllUserTable>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllUser;
