import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import axios from "axios";
const image = import.meta.env.VITE_image_upload_token;
const Register = () => {
  const { createUser, googleSignIn, updateUserProfile } = useAuth();
  const [signUpError, setSignUPError] = useState("");
  const [axiosSecure] = useAxiosSecure();
  const imageHostingURL = `https://api.imgbb.com/1/upload?key=${image}`;
  const {
    register,
    handleSubmit,
    validate,
    reset,
    getValues,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const handleSignUp = (data) => {
    console.log("🚀 ~ handleSignUp ~ data:", data);
    setSignUPError("");
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
          console.log("🚀 ~ file: AddDoctors.jsx:26 ~ .then ~ imgURL:", imgURL);
          createUser(data.email, data.password)
            .then((result) => {
              const user = result.user;
              // console.log(user);
              const userInfo = {
                displayName: data?.name,
              };
              updateUserProfile(userInfo)
                .then(() => {
                  const fromUserData = {
                    user_name: data?.name,
                    user_email: data?.email,
                    user_phoneNumber: data?.phoneNumber,
                    user_accountType: data?.accountType,
                    user_image: imgURL,
                  };
                  saveUser(fromUserData);
                  console.log(fromUserData);
                  reset();
                  Swal.fire({
                    // position: "top-end",
                    icon: "success",
                    title: "User created Successful",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                })
                .catch((error) => toast.error(error.message));
              navigate("/");
            })
            .catch((error) => {
              // console.log(error);
              setSignUPError(error.message);
              toast.error(error.message);
            });
        }
      });
  };
  const handleGoogleSignUp = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        const googleUserData = {
          user_name: user?.displayName,
          user_email: user?.email,
          user_phoneNumber: "",
          user_accountType: "buyer",
        };
        saveUser(googleUserData);
        console.log("Google", googleUserData);
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const saveUser = (userData) => {
    const user = userData;
    axiosSecure
      .post("/add-user", user)
      .then((res) => console.log(res.data))
      .catch((error) => toast.error("Failed to save user"));
  };

  return (
    <section className="bg-white my-4">
      <div className="flex justify-center min-h-screen">
        <div
          className="hidden bg-cover lg:block lg:w-2/5"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80")',
          }}></div>
        <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
          <div className="w-full">
            <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize">
              Get your free account now.
            </h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Let’s get you all set up so you can verify your personal account
              and begin setting up your profile.
            </p>
            <form onSubmit={handleSubmit(handleSignUp)}>
              <div className="mt-6">
                <h1 className="text-gray-500">Select type of account</h1>
                <div className="mt-3 md:flex md:items-center md:-mx-2">
                  {["Buyer", "Seller"].map((type) => (
                    <div key={type}>
                      <input
                        className="peer sr-only"
                        {...register("accountType")}
                        type="radio"
                        value={type}
                        id={type}
                        defaultChecked={type === "Buyer"}
                      />
                      <label
                        htmlFor={type}
                        className="flex justify-center w-full px-6 py-3 border rounded-lg md:w-auto md:mx-2 focus:outline-none border-gray-200 p-3 text-gray-600 peer-checked:bg-blue-500 peer-checked:text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d={`M${
                              type === "Buyer"
                                ? "21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                : "16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            }`}
                          />
                        </svg>
                        <span className="mx-2">{type}</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                <div>
                  <label className="block mb-2 text-sm text-gray-600">
                    First Name
                  </label>
                  <input
                    type="text"
                    {...register("name", {
                      required: "Name is required",
                    })}
                    placeholder="John"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  {errors.name && (
                    <p className="text-red-500">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label className="block mb-2 text-sm text-gray-600">
                    Last Name
                  </label>
                  <input
                    type="text"
                    {...register("lastName", {
                      required: "Please enter your last name",
                      maxLength: 100,
                    })}
                    placeholder="Snow"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm text-gray-600">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    {...register("phoneNumber", { required: true })}
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm text-gray-600">
                    Email Address
                  </label>
                  <input
                    type="email"
                    {...register("email", {
                      required: true,
                    })}
                    placeholder="johnsnow@example.com"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <label className="block mb-2 text-sm text-gray-600">
                    Password
                  </label>
                  <input
                    type="password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be 6 characters long",
                      },
                      pattern: {
                        value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                        message:
                          "Password must have uppercase, number and special characters",
                      },
                    })}
                    placeholder="Enter your password"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  {errors.password && (
                    <p className="text-red-500">{errors.password.message}</p>
                  )}
                </div>
                <div>
                  <label className="block mb-2 text-sm text-gray-600">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    {...register("confirmPassword", {
                      required: true,
                      validate: (value) =>
                        value === getValues("password") ||
                        "Passwords do not match",
                    })}
                    placeholder="Confirm your password"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-center w-full mt-6">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-44 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
                  <div className="flex flex-col items-center justify-center pb-6">
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
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  Sign Up
                </button>
                {signUpError && (
                  <p className="text-red-500 mt-2">{signUpError}</p>
                )}
                <div className="mt-6 text-center">
                  <div className="text-gray-600">
                    Or sign up with
                    <div className="m-3 space-x-3">
                      <button type="button" onClick={handleGoogleSignUp}>
                        <FaGoogle size={28} />
                      </button>
                      <button type="button">
                        <FaFacebook size={28} />
                      </button>
                      <button type="button">
                        <FaGithub size={28} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <p className="mt-6 text-sm text-center text-gray-400">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-blue-500 focus:outline-none focus:underline hover:underline">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
