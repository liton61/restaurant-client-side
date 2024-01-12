import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    });
    return (
        <div>
            <h2 className="text-center text-3xl font-semibold mt-5">
                <span>Hi, Welcome </span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h2>
            <div className="flex justify-center items-center my-10">
                <div className="stats stats-vertical lg:stats-horizontal md:stats-horizontal shadow">

                    <div className="stat place-items-center">
                        <div className="stat-title">Total Reviews</div>
                        <div className="stat-value text-secondary">{stats.review}</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title">Total Menu</div>
                        <div className="stat-value text-secondary">{stats.menu}</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title">Total Orders</div>
                        <div className="stat-value text-secondary">{stats.cart}</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-figure text-secondary">
                            <div className="avatar online">
                                <div className="w-16 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                        </div>
                        <div className="stat-title">Total Users</div>
                        <div className="stat-value text-secondary">{stats.user}</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AdminHome;