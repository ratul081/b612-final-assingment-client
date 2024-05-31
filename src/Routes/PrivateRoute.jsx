import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import { Triangle } from "react-loader-spinner";
import Loading from "../Components/Shared/Loading";
const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
