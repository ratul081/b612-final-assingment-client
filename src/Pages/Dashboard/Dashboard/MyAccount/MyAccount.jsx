import React from "react";

const MyAccount = () => {
  return (
    <>
      <div>
        <p className="text-[#DB4444] text-xl text-center lg:text-start mx-3 mb-4">
          Update your Profile
        </p>
        <div className="w-[340px] lg:w-[870px] md:w-[550px] mx-6">
          <form>
            <div className="-mx-2 md:items-center md:flex">
              <div className="flex-1 px-2">
                <label className="block mb-2 font-semibold">First Name</label>
                <input
                  type="text"
                  placeholder="John"
                  className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="flex-1 px-2 mt-4 md:mt-0">
                <label className="block mb-2 font-semibold">Last Name</label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>
            <div className="-mx-2 mt-4 md:items-center md:flex">
              <div className="flex-1 px-2 mt-4 md:mt-0">
                <label className="block mb-2 font-semibold">Location</label>
                <input
                  type="text"
                  placeholder="Address"
                  className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="flex-1 px-2">
                <label className="block mb-2 font-semibold">Mobile</label>
                <input
                  type="telephone"
                  placeholder="+8801716623778"
                  className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <button className="px-6 py-3 mt-4 text-sm font-medium tracking-wide capitalize transition-colors duration-300 transform">
                cancel
              </button>
              <button className="lg:px-6 px-4 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default MyAccount;
