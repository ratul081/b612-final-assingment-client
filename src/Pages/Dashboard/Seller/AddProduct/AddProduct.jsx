import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
const image = import.meta.env.VITE_image_upload_token;

const AddProduct = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const today = new Date();
  const imageHostingURL = `https://api.imgbb.com/1/upload?key=${image}`;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleAddProduct = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    axios
      .post(imageHostingURL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((imageUploadRes) => {
        if (imageUploadRes.data.success) {
          const imgURL = imageUploadRes.data.data.display_url;
          //console.log("🚀 ~ file: AddDoctors.jsx:26 ~ .then ~ imgURL:", imgURL);
          const {
            name,
            category,
            price,
            condition,
            description,
            location,
            phoneNumber,
          } = data;
          const productDetails = {
            product_name: name,
            product_email: user?.email,
            product_category: category,
            product_resale_price: price,
            product_image: imgURL,
            product_condition: condition,
            product_description: description,
            product_location: location,
            product_phoneNumber: phoneNumber,
            product_postdate: formatDate(today, "dd-mm-yy"),
          };
          //console.log("🚀 ~ .then ~ productDetails:", productDetails);
          axiosSecure
            .post("/add-product", productDetails)
            .then((res) => {
              //console.log(res.data);
              if (res.data.data.acknowledged) {
                Swal.fire({
                  // position: "top-end",
                  icon: "success",
                  title: "Product added",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/dashboard/my-products");
              } else {
                //console.log(res.data.data);
                toast.error(res.data.data.message);
              }
            })
            .catch((err) => console.log(err));
        }
      });
  };

  const formatDate = (date, format) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString().slice(-2);

    format = format.replace("dd", day);
    format = format.replace("mm", month);
    format = format.replace("yy", year);

    return format;
  };

  return (
    <div className="m-4">
      <p className="font-semibold text-2xl">Add product</p>
      <form
        onSubmit={handleSubmit(handleAddProduct)}
        className="space-y-6 lg:flex gap-6">
        <div className=" lg:w-[684px]">
          <div className="mt-6 border border-amber-950 rounded">
            <div className="mt-8 mx-6 mb-6">
              <p className="font-semibold text-2xl">General Information</p>
              <div className="mt-4 mb-5">
                <label className="block mb-2 font-semibold">Product Name</label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-sm rounded-lg  block w-full p-2.5 outline outline-0"
                  {...register("name", {
                    required: "Name is required",
                    maxLength: 80,
                  })}
                />
                {errors.name && (
                  <p className="text-red-600">{errors?.name?.message}</p>
                )}
              </div>
              <div className="mt-4 mb-5">
                <label className="block mb-2 font-semibold">
                  Product category
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-sm rounded-lg  block w-full p-2.5 outline outline-0"
                  {...register("category", {
                    required: "category is required",
                    maxLength: 80,
                  })}
                />
                {errors.category && (
                  <p className="text-red-600">{errors?.category?.message}</p>
                )}
              </div>
              <div className="mt-4 mb-5">
                <label className="block mb-2 font-semibold">Price</label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-sm rounded-lg  block w-full p-2.5 outline outline-0"
                  {...register("price", {
                    required: "Name is required",
                  })}
                />
                {errors.price && (
                  <p className="text-red-600">{errors?.price?.message}</p>
                )}
              </div>
              <div className="mt-4 mb-5">
                <label className="block mb-2 font-semibold">
                  Condition type
                </label>
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline outline-0 block w-full p-2.5"
                  {...register("condition", {
                    required: "Please select a condition type",
                  })}>
                  <option value="" className="cursor-not-allowed" hidden>
                    Choose a condition
                  </option>
                  <option value="Excellent">Excellent</option>
                  <option value="Good">Good</option>
                  <option value="Fair">Fair</option>
                </select>
                {errors.condition && (
                  <p className="text-red-600">{errors.condition?.message}</p>
                )}
              </div>
              <div className="mt-4 mb-5">
                <label className="block mb-2 font-semibold">
                  Year of purchase
                </label>
                <input
                  type="number"
                  className="bg-gray-50 border border-gray-300 text-sm rounded-lg  block w-full p-2.5 outline outline-0"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 font-semibold dark:text-white">
                  Description
                </label>
                <textarea
                  rows={4}
                  className="block p-2.5 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 outline outline-0"
                  {...register("description", {
                    required: "Description is required",
                  })}
                />
                {errors.description && (
                  <p className="text-red-600">{errors.description?.message}</p>
                )}
              </div>
            </div>
          </div>
          <div className="mt-6 border border-amber-950 rounded">
            <div className="mt-8 mx-6 mb-6">
              <p className="font-semibold text-2xl">Personal Information</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="mt-4 mb-5">
                  <label className="block mb-2 font-semibold">Location</label>
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-sm rounded-lg  block w-full p-2.5 outline outline-0"
                    {...register("location", {
                      required: "Location is required",
                      maxLength: 80,
                    })}
                  />
                  {errors.location && (
                    <p className="text-red-600">{errors?.location?.message}</p>
                  )}
                </div>
                <div className="mt-4 mb-5">
                  <label className="block mb-2 font-semibold">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    className="bg-gray-50 border border-gray-300 text-sm rounded-lg  block w-full p-2.5 outline outline-0"
                    {...register("phoneNumber", {
                      required: "Phone number is required",
                      maxLength: 80,
                    })}
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-600">
                      {errors.phoneNumber?.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-[440px]">
          <div className="border border-amber-950 rounded">
            <div className="mt-8 mx-6 mb-6">
              <p className="font-semibold text-2xl">Product Media</p>
              <p className="mt-6 mb-2">Product Photo</p>
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16">
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    {...register("image", {
                      required: "Please input a photo",
                    })}
                  />
                </label>
              </div>
              {errors.image && (
                <p className="text-red-600">{errors.image?.message}</p>
              )}
            </div>
          </div>
          <div className="h-52 mt-4 flex lg:place-items-end justify-center">
            <input
              type="submit"
              value="submit"
              className="btn btn-success w-60"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
