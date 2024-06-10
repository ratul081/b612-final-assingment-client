import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
import { Helmet } from "react-helmet-async";

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
      <Helmet>
        <title>Use ME | Cart</title>
      </Helmet>
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
                            <Link
                              to={`/products/${cartProduct?.product_id}`}
                              className="text-2xl font-medium">
                              {cartProduct?.product_name}
                            </Link>

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
            <div className=" mx-auto px-10 py-4 bg-white rounded-lg ">
              <div className="flex flex-col items-center justify-center py-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-24 w-24 text-gray-400 mb-4">
                  <path d="M4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V15H18.4433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z"></path>
                </svg>
                <p className="text-gray-600 text-lg font-semibold mb-4">
                  Your shopping cart is empty.
                </p>
                <Link
                  to="/products"
                  className="px-6 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-colors duration-300">
                  Let's go shopping!
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Cart;
