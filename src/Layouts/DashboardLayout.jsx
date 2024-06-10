import React from "react";
import { Outlet } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import DashboardSidebar from "../Pages/Dashboard/Dashboard/DashboardSidebar";
import { Helmet } from "react-helmet-async";

const DashboardLayout = () => {
  return (
    <div className="">
      <Helmet>
        <title>Use ME | Dashboard</title>
      </Helmet>
      {/* <Header></Header> */}
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content my-12">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="absolute top-0 right-4  drawer-button lg:hidden">
            <IoMenu size={40} />
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"></label>
          <ul className="menu p-4 lg:w-72 min-h-full bg-white space-y-4 text-base-content">
            {/* Sidebar content here */}
            <DashboardSidebar></DashboardSidebar>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
