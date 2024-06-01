import React from "react";
import Swal from "sweetalert2";
import ItemList from "../../../../Components/ItemList/ItemList";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useCart from "../../../../hooks/useCart";

const MyOrders = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const [cart, refetch] = useCart();

  const handleDelete = (id) => {
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
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          //console.log(res.data);
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
    <div>
      {/* <section>
        <div className="mx-auto lg:p-0 sm:px-6 sm:py-12">
          <div className="mx-auto">
            <header className="text-center">
              <h1 className="lg:text-2xl font-bold text-gray-900 sm:text-xl">
                Your Orders
              </h1>
            </header>
            <div className="mt-8">
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                    alt=""
                    className="h-20 w-20 rounded object-cover"
                  />
                  <div>
                    <h3 className="text-xl text-gray-900">Basic Tee 6-Pack</h3>
                    <dl className="mt-0.5 space-y-px text-[14px] text-gray-600">
                      <div>
                        <dt className="inline">Size:</dt>
                        <dd className="inline">XXS</dd>
                      </div>
                      <div>
                        <dt className="inline">Color:</dt>
                        <dd className="inline">White</dd>
                      </div>
                    </dl>
                  </div>
                  <div className="flex flex-1 items-center justify-end gap-2">
                    <button className="text-gray-600 transition hover:text-red-600">
                      <span className="sr-only">Remove item</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-8 w-8">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}
      <ItemList
        pageName="Orders"
        data={cart}
        handleDelete={handleDelete}></ItemList>
    </div>
  );
};

export default MyOrders;
