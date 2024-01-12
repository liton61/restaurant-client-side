import axios from "axios";


const axiosPublic = axios.create({
    baseURL: 'https://restaurant-server-side-azure.vercel.app'
})
const useAxiosSecure = () => {
    return axiosPublic;
};

export default useAxiosSecure;