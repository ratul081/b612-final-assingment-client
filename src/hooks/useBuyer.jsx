import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useBuyer = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  // use axios secure with react query
  const { data: isBuyer, isLoading: isBuyerLoading } = useQuery({
    queryKey: ["isBuyer", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/buyer/${user?.email}`);
      // console.log(res.data);
      return res.data.isBuyer;
    },
  });
  // console.log(isBuyer);
  return [isBuyer, isBuyerLoading];
};
export default useBuyer;
