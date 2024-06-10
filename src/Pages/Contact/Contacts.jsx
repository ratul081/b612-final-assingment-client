import React from "react";
import { Helmet } from "react-helmet-async";

const Contacts = () => {
  return (
    <div>
      <Helmet>
        <title>Use ME | Contacts</title>
      </Helmet>
      <section className="bg-white">
        <div className="container px-6 py-6 mx-auto">
          <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3 lg:mx-24">
            <div className="flex justify-center flex-col lg:mt-20 lg:w-4/5">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="40" rx="20" fill="#DB4444" />
                    <path
                      d="M18.5542 14.24L15.1712 10.335C14.7812 9.885 14.0662 9.887 13.6132 10.341L10.8312 13.128C10.0032 13.957 9.76623 15.188 10.2452 16.175C13.1069 22.1 17.8853 26.8851 23.8062 29.755C24.7922 30.234 26.0222 29.997 26.8502 29.168L29.6582 26.355C30.1132 25.9 30.1142 25.181 29.6602 24.791L25.7402 21.426C25.3302 21.074 24.6932 21.12 24.2822 21.532L22.9182 22.898C22.8484 22.9712 22.7565 23.0194 22.6566 23.0353C22.5567 23.0512 22.4543 23.0339 22.3652 22.986C20.1357 21.7021 18.2862 19.8502 17.0052 17.619C16.9573 17.5298 16.9399 17.4272 16.9558 17.3272C16.9717 17.2271 17.02 17.135 17.0932 17.065L18.4532 15.704C18.8652 15.29 18.9102 14.65 18.5542 14.239V14.24Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="text-lg font-bold">Call to Us</p>
                </div>
                <div className="space-y-4 font-semibold">
                  <p>We are available 24/7, 7days a week,</p>
                  <p>Phone: +8801611112222</p>
                </div>
              </div>
              <div className="divider my-8"></div>
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="40" rx="20" fill="#DB4444" />
                    <path
                      d="M10 13L20 20L30 13M10 27H30V13H10V27Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <p className="text-lg font-bold">Write To Us</p>
                </div>
                <div className="space-y-4 font-semibold">
                  <p>
                    Fill out our form and we will contact you within 24 hours.
                  </p>
                  <p>Emails: customer@exclusive.com</p>
                  <p>Emails: customer@exclusive.com</p>
                </div>
              </div>
            </div>
            <div className="col-span-2 p-4 py-6 rounded-lg bg-gray-50  md:p-8">
              <form>
                <div className="-mx-2 md:items-center md:flex">
                  <div className="flex-1 px-2">
                    <label className="block mb-2 font-semibold">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="John "
                      className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div className="flex-1 px-2 mt-4 md:mt-0">
                    <label className="block mb-2 font-semibold">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block mb-2 font-semibold">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="johndoe@example.com"
                    className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="mt-4">
                  <label className="block mb-2 font-semibold">Phone</label>
                  <input
                    type="tel"
                    placeholder="johndoe@example.com"
                    className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg     focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="w-full mt-4">
                  <label className="block mb-2 font-semibold">Message</label>
                  <textarea
                    className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Message"
                    defaultValue={""}
                  />
                </div>
                <div className="flex justify-end">
                  <button className="w-1/4 px-2 md:px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
