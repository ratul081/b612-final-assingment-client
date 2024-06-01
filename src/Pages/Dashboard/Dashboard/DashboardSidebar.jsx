import React from "react";
import { Link } from "react-router-dom";
import useAdmin from "../../../hooks/useAdmin";
import useSeller from "../../../hooks/useSeller";
import useBuyer from "../../../hooks/useBuyer";
const DashboardSidebar = () => {
  const [isAdmin] = useAdmin();
  const [isSeller] = useSeller();
  const [isBuyer] = useBuyer();
  return (
    <>
      <li className="mt-8">
        <Link className="text-xl font-semibold" to="/dashboard">
          Dashboard
        </Link>
      </li>

      {isAdmin && (
        <>
          <li>
            <Link className="text-xl font-semibold" to="/dashboard/all-users">
              All users
            </Link>
          </li>
          <li>
            <Link className="text-xl font-semibold" to="/dashboard/all-seller">
              All seller
            </Link>
          </li>
          <li>
            <Link
              className="text-xl font-semibold"
              to="/dashboard/reported-items">
              Reported Items
            </Link>
          </li>
        </>
      )}
      {isSeller && (
        <>
          <li>
            <Link className="text-xl font-semibold" to="/dashboard/my-products">
              My products
            </Link>
          </li>
          <li>
            <Link className="text-xl font-semibold" to="/dashboard/add-product">
              Add Product
            </Link>
          </li>
          <li>
            <Link className="text-xl font-semibold" to="/dashboard/my-buyers">
              My buyers
            </Link>
          </li>
        </>
      )}
      {isBuyer && (
        <>
          {/* <li>
            <Link className="text-xl font-semibold" to="/dashboard/my-wishlist">
              My wishlist
            </Link>
          </li> */}
          <li>
            <Link className="text-xl font-semibold" to="/dashboard/my-orders">
              My Orders
            </Link>
          </li>
        </>
      )}
      <li className="mt-8">
        <Link className="text-xl font-semibold" to="/dashboard/payment-history">
          Payment History
        </Link>
      </li>
    </>
  );
};

export default DashboardSidebar;
