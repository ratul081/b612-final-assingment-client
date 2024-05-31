import React from "react";
import MyProductCard from "./MyProductCard";
import { useQuery } from "react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";

const MyProducts = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const {
    data: myProducts = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["myProduct", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/products-email/${user?.email}`);
      return res.data.data;
    },
  });
  console.table(myProducts);

  const handleAddProductAdvertised = (id) => {
    axiosSecure.patch(`/product/ad/${id}`).then((res) => {
      console.log(res.data);
      if (res.data.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          icon: "success",
          title: "Product added to Advertised",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleDeleteProductAdvertised = (id) => {
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
        axiosSecure.delete(`/product/${id}`).then((res) => {
          console.log(res.data);
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
    <div className="m-4">
      {myProducts.length === 0 ? (
        <div> No data found</div>
      ) : (
        <>
          <p className="text-3xl font-semibold mb-8">Here are your products</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {myProducts.map((myProduct) => (
              <MyProductCard
                handleAddProductAdvertised={handleAddProductAdvertised}
                handleDeleteProductAdvertised={handleDeleteProductAdvertised}
                key={myProduct._id}
                myProduct={myProduct}></MyProductCard>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MyProducts;
