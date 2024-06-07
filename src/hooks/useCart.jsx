import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();

  const { data: cart = [], refetch } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user?.email}`);
      return res.data.data;
    },
  });
  // console.log(cart);
  return [cart, refetch];
};

export default useCart;
