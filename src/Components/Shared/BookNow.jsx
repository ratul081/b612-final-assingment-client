import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const BookNow = ({ product }) => {
  // const {
  //   product_name,
  //   user_email,
  //   product_category,
  //   product_resale_price,
  //   product_image,
  //   product_condition,
  //   product_description,
  //   product_location,
  //   product_phoneNumber,
  //   product_postdate,
  // } = product;
  // const { user } = useAuth();
  // const navigate = useNavigate();
  // const location = useLocation();
  // const axiosSecure = useAxiosSecure();
  // const [ refetch] = useCart();
  // const handleAddToCart = () => {
  //   if (user && user.email) {
  //     //send cart item to the database
  //     const cartItem = {
  //       productID: _id,
  //       user_email: user.email,
  //       product_name,
  //       product_image,
  //       product_resale_price ,
  //     };
  //     axiosSecure.post("/carts", cartItem).then((res) => {
  //       console.log(res.data);
  //       if (res.data.insertedId) {
  //         Swal.fire({
  //           position: "top-end",
  //           icon: "success",
  //           title: `${name} added to your cart`,
  //           showConfirmButton: false,
  //           timer: 1500,
  //         });
  //         // refetch cart to update the cart items count
  //         refetch();
  //       }
  //     });
  //   } else {
  //     Swal.fire({
  //       title: "You are not Logged In",
  //       text: "Please login to add to the cart?",
  //       icon: "warning",
  //       showCancelButton: true,
  //       confirmButtonColor: "#3085d6",
  //       cancelButtonColor: "#d33",
  //       confirmButtonText: "Yes, login!",
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         //   send the user to the login page
  //         navigate("/login", { state: { from: location } });
  //       }
  //     });
  //   }
  // };

  return (
    <button className="btn btn-accent text-base rounded-xl">Book now</button>
  );
};

export default BookNow;
