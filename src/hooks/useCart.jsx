import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useCart = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { refetch, data: item = [] } = useQuery({
        queryKey: ['item', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/cart?email=${user.email}`);
            return res.data;
        }
    })

    return [item, refetch]
};

export default useCart;