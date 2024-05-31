import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layouts/DashboardLayout";
import Main from "../Layouts/Main";
import About from "../Pages/About/About";
import Cart from "../Pages/Cart/Cart";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Contacts from "../Pages/Contact/Contacts";
import AdminDashboard from "../Pages/Dashboard/Admin/AdminDashboard";
import AllSeller from "../Pages/Dashboard/Admin/AllSeller/AllSeller";
import AllUser from "../Pages/Dashboard/Admin/AllUser/AllUser";
import ReportedItems from "../Pages/Dashboard/Admin/ReportedItems/ReportedItems";
import BuyerDashboard from "../Pages/Dashboard/Buyer/BuyerDashboard";
import MyOrders from "../Pages/Dashboard/Buyer/MyOrders/MyOrders";
// import MyWishlist from "../Pages/Dashboard/Buyer/MyWhitelist/MyWishlist";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import AddProduct from "../Pages/Dashboard/Seller/AddProduct/AddProduct";
import MyBuyers from "../Pages/Dashboard/Seller/MyBuyers/MyBuyers";
import MyProducts from "../Pages/Dashboard/Seller/MyProducts/MyProducts";
import SellerDashboard from "../Pages/Dashboard/Seller/SellerDashboard";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/Login/LogIn";
import ProductOverview from "../Pages/Product/ProductOverview";
import CategoryProducts from "../Pages/Products/Categories/CategoryProducts";
import Products from "../Pages/Products/Products";
import Register from "../Pages/Register/Register";
import AdminRoute from "./AdminRoute";
import BuyerRoute from "./BuyerRoute";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";
import Blog from "../Pages/Blog/Blog";
import Payment from "../Pages/Dashboard/Payment/Payment";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/login", element: <LogIn></LogIn> },
      { path: "/sign-up", element: <Register></Register> },
      { path: "/contact", element: <Contacts></Contacts> },
      { path: "/about", element: <About></About> },
      { path: "/blog", element: <Blog></Blog> },
      { path: "/products", element: <Products></Products> },
      {
        path: "/products/:id",
        element: <ProductOverview></ProductOverview>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_apiURL}/products/${params.id}`),
      },
      {
        path: "/category/:category",
        element: <CategoryProducts></CategoryProducts>,
        loader: ({ params }) =>
          fetch(
            `${import.meta.env.VITE_apiURL}/products-category/${
              params.category
            }`
          ),
      },
      { path: "/carts", element: <Cart></Cart> },
      { path: "/checkout", element: <CheckOut></CheckOut> },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <DashboardLayout></DashboardLayout>
          </PrivateRoute>
        ),
        children: [
          {
            path: "/dashboard",
            element: <Dashboard></Dashboard>,
          },
          // admin only routes
          {
            path: "/dashboard/adminDashboard",
            element: (
              <AdminRoute>
                <AdminDashboard></AdminDashboard>
              </AdminRoute>
            ),
          },
          {
            path: "/dashboard/all-users",
            element: (
              <AdminRoute>
                <AllUser></AllUser>
              </AdminRoute>
            ),
          },
          {
            path: "/dashboard/all-seller",
            element: (
              <AdminRoute>
                <AllSeller></AllSeller>
              </AdminRoute>
            ),
          },
          {
            path: "/dashboard/reported-items",
            element: (
              <AdminRoute>
                <ReportedItems></ReportedItems>,
              </AdminRoute>
            ),
          },
          // seller only routes
          {
            path: "/dashboard/sellerDashboard",
            element: (
              <SellerRoute>
                <SellerDashboard></SellerDashboard>,
              </SellerRoute>
            ),
          },
          {
            path: "/dashboard/add-product",
            element: (
              <SellerRoute>
                <AddProduct></AddProduct>,
              </SellerRoute>
            ),
          },
          {
            path: "/dashboard/my-buyers",
            element: (
              <SellerRoute>
                <MyBuyers></MyBuyers>
              </SellerRoute>
            ),
          },

          {
            path: "/dashboard/my-products",
            element: (
              <SellerRoute>
                <MyProducts></MyProducts>,
              </SellerRoute>
            ),
          },
          // buyer only routes
          {
            path: "/dashboard/buyerDashboard",
            element: (
              <BuyerRoute>
                <BuyerDashboard></BuyerDashboard>,
              </BuyerRoute>
            ),
          },
          // {
          //   path: "/dashboard/my-wishlist",
          //   element: (
          //     <BuyerRoute>
          //       <MyWishlist></MyWishlist>,
          //     </BuyerRoute>
          //   ),
          // },
          {
            path: "/dashboard/my-orders",
            element: (
              <BuyerRoute>
                <MyOrders></MyOrders>
              </BuyerRoute>
            ),
          },
          {
            path: "/dashboard/payment",
            element: <Payment></Payment>,
          },
        ],
      },
      { path: "*", element: <ErrorPage></ErrorPage> },
    ],
  },
]);
