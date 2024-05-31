import { Triangle } from 'react-loader-spinner'
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useBuyer from "../hooks/useBuyer";
const BuyerRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isBuyer, isBuyerLoading] = useBuyer();
  const location = useLocation();

  if (loading || isBuyerLoading) {
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

  if (user && isBuyer) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default BuyerRoute;
