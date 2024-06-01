import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
const LogIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { signIn, googleSignIn } = useAuth();
  const [loginError, setLoginError] = useState("");
  const handleLogin = (data) => {
    //console.log(data);
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        // //console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // //console.log(error.message);
        setLoginError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        toast.success("Login With Google Successful");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        //console.log("From Google SignIn", error);
        toast.error(error.message.slice(10));
      });
  };

  return (
    <>
      <section className="bg-white ">
        <div className="container px-6 py-24 mx-auto lg:py-32">
          <div className="lg:flex">
            <div className="lg:w-1/2">
              <img
                className="w-auto h-7 sm:h-8"
                src="https://merakiui.com/images/logo.svg"
                alt=""
              />
              <h1 className="mt-4 text-gray-600  md:text-lg">Welcome back</h1>
              <h1 className="mt-4 text-2xl font-medium text-gray-800 capitalize lg:text-3xl ">
                login to your account
              </h1>
            </div>
            <div className="mt-8 lg:w-1/2 lg:mt-0">
              <form
                onSubmit={handleSubmit(handleLogin)}
                className="w-full lg:max-w-xl">
                <div className="relative flex items-center">
                  <span className="absolute">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mx-3 text-gray-300 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email Address is required",
                    })}
                    className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11    focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Email address"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-600">{errors.email?.message}</p>
                )}
                <div className="relative flex items-center mt-4">
                  <span className="absolute">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mx-3 text-gray-300 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </span>
                  <input
                    type="password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be 6 characters or longer",
                      },
                    })}
                    className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg    focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Password"
                  />
                </div>
                {errors.password && (
                  <p className="text-red-600">{errors.password?.message}</p>
                )}
                <div className="mt-4 md:flex md:items-center">
                  <input
                    type="submit"
                    value="Sign In"
                    className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg md:w-1/2 hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50
                    cursor-pointer
                    "
                  />

                  <Link className="inline-block mt-4 text-center text-blue-500 md:mt-0 md:mx-6 hover:underline">
                    Forgot your password?
                  </Link>
                </div>
                {loginError && (
                  <p className="text-red-600 mt-2">{loginError}</p>
                )}
              </form>
            </div>
          </div>
          <div className="lg:m-0 md:mt-2 sm:mt-2 sm:flex sm:items-center">
            <h3 className="text-blue-500 sm:w-1/2">Social networks</h3>
            <div className="mt-6 text-center">
              <div className="text-gray-600">
                Or sign up with
                <div className="m-3 space-x-3">
                  <button type="button" onClick={handleGoogleSignIn}>
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
        </div>
      </section>
    </>
  );
};

export default LogIn;
