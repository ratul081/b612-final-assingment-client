import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useSeller from "../hooks/useSeller";
import { Triangle } from "react-loader-spinner";
const SellerRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isSeller, isSellerLoading] = useSeller();
  const location = useLocation();

  if (loading || isSellerLoading) {
    return (
      <Triangle
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    );
  }

  if (user && isSeller) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;
