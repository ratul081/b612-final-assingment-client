import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useSeller = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  // use axios secure with react query
  const { data: isSeller, isLoading: isSellerLoading } = useQuery({
    queryKey: ["isSeller", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/seller/${user?.email}`);
      // //console.log(res.data);
      return res.data.isSeller;
    },
  });
  return [isSeller, isSellerLoading];
};
export default useSeller;
