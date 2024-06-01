import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AllUserTable = ({ userData, refetch }) => {
  const [axiosSecure] = useAxiosSecure();
  const {
    user_accountType,
    user_email,
    user_name,
    user_image,
    user_phoneNumber,
  } = userData;
  const handleMakeAdmin = (user) => {
    // //console.log("🚀 ~ handleMakeAdmin ~ user:", user);
    axiosSecure.patch(`/users/admin/${user?._id}`).then((res) => {
      //console.log(res.data);
      if (res.data.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          icon: "success",
          title: `${user?.name} is an Admin Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user?._id}`).then((res) => {
          if (res.data.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <tr key={userData?._id}>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={user_image} alt={user_name} />
            </div>
          </div>
          <div>
            <div className="font-bold">{user_name}</div>
            <div className="font-bold">{user_phoneNumber}</div>
          </div>
        </div>
      </td>
      <td>{user_email}</td>
      <td>{user_accountType}</td>
      <th>
        <div className="flex justify-center items-center">
          {userData.role === "admin" ? (
            <p className=" ">Admin</p>
          ) : (
            <button
              onClick={() => handleMakeAdmin(userData)}
              className="btn btn-xs bg-red-400 ">
              Make admin
            </button>
          )}
          <button onClick={() => handleDeleteUser(userData)} className="btn-lg">
            <FaTrashAlt className="text-red-600"></FaTrashAlt>
          </button>
        </div>
      </th>
    </tr>
  );
};

export default AllUserTable;
