import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const Cart = () => {
  const [cart, refetch] = useCart();
  //console.log("🚀 ~ Cart ~ cart:", cart);
  const totalPrice = cart.reduce(
    (total, item) => total + parseFloat(item.product_resale_price),
    0
  );
  const [axiosSecure] = useAxiosSecure();
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
          // //console.log(res.data);
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
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          {cart.length !== 0 ? (
            <div className="mx-auto">
              <header className="text-center">
                <h1 className="lg:text-5xl font-bold text-gray-900 sm:text-3xl">
                  Your Cart
                </h1>
              </header>
              <div className="mt-8">
                {cart &&
                  cart.map((cartProduct) => (
                    <div key={cartProduct._id} className="my-6">
                      <ul className="space-y-4">
                        <li className="flex items-center gap-4">
                          <img
                            src={cartProduct.product_image}
                            alt={cartProduct.product_name}
                            className="h-20 w-20 rounded object-cover"
                          />

                          <div>
                            <h3 className="text-2xl font-medium">
                              {cartProduct?.product_name}
                            </h3>

                            <dl className="mt-0.5 space-y-px text-[14px] text-gray-600">
                              <div>
                                <dt className="inline">Price:</dt>
                                <dd className="inline">
                                  {parseFloat(
                                    cartProduct?.product_resale_price
                                  ).toFixed(3)}
                                </dd>
                              </div>
                              <div>
                                <dt className="inline">Condition:</dt>
                                <dd className="inline">
                                  {cartProduct?.product_condition}
                                </dd>
                              </div>
                            </dl>
                          </div>
                          <div className="flex flex-1 items-center justify-end gap-2">
                            <button
                              onClick={() => handleDelete(cartProduct?._id)}
                              className="text-gray-600 transition hover:text-red-600">
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
                  ))}
                <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                  <div className="w-screen max-w-lg space-y-4">
                    <dl className="space-y-0.5 text-sm text-gray-700">
                      <div className="flex justify-between">
                        <dt>Subtotal</dt>
                        <dd>{totalPrice.toFixed(3)}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt>VAT</dt>
                        <dd>£25</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt>Discount</dt>
                        <dd>-£20</dd>
                      </div>
                      <div className="flex justify-between text-base font-medium">
                        <dt>Total</dt>
                        <dd>৳ {(totalPrice + 5).toFixed(3)}</dd>
                      </div>
                    </dl>
                    <div className="flex justify-end">
                      <span className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="-ms-1 me-1.5 h-4 w-4">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                          />
                        </svg>

                        <p className="whitespace-nowrap text-xs">
                          2 Discounts Applied
                        </p>
                      </span>
                    </div>

                    <div className="flex justify-end">
                      <Link
                        to="/dashboard/payment"
                        className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600">
                        Checkout
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>No data found</div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Cart;
