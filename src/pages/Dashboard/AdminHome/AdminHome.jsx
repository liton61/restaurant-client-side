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
            <div className="flex justify-center items-center mt-10">
                <div className="stats stats-vertical lg:stats-horizontal md:stats-horizontal shadow">

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </div>
                        <div className="stat-title">Food Reviews</div>
                        <div className="stat-value text-secondary">{stats.review}</div>
                        <div className="stat-desc">21% more than last month</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <i className="fa-solid fa-utensils text-2xl"></i>
                        </div>
                        <div className="stat-title">Total Menu</div>
                        <div className="stat-value text-secondary">{stats.menu}</div>
                        <div className="stat-desc">21% more than last month</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <i className="fa-solid fa-cart-plus text-2xl"></i>
                        </div>
                        <div className="stat-title">Total Orders</div>
                        <div className="stat-value text-secondary">{stats.cart}</div>
                        <div className="stat-desc">↗︎ 400 (22%)</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <div className="avatar online">
                                <div className="w-16 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                        </div>
                        <div className="stat-title">Total Users</div>
                        <div className="stat-value text-secondary">{stats.user}</div>
                        <div className="stat-desc">↗︎ 40 (2%)</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AdminHome;