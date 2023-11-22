import { Helmet } from "react-helmet";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";


const Dashboard = () => {
    const [cart] = useCart();
    const [isAdmin] = useAdmin();
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-warning">
                <ul className="menu p-4">
                    {
                        isAdmin ?
                            <>
                                <li className="mb-3 font-semibold"><NavLink to="/"><i className="fa-solid fa-home"></i>Admin Home</NavLink></li>
                                <li className="mb-3 font-semibold"><NavLink to="/dashboard/addItems"><i className="fa-solid fa-utensils"></i>Add Items</NavLink></li>
                                <li className="mb-3 font-semibold"><NavLink to="/dashboard/manageItems"><i className="fa-solid fa-list"></i>Manage Items</NavLink></li>
                                <li><NavLink to="/dashboard/manageBooking"><i className="fa-solid fa-book"></i>Manage Booking</NavLink></li>
                                <li><NavLink to="/dashboard/allUsers"><i className="fa-solid fa-users"></i>All Users</NavLink></li>
                            </>
                            :
                            <>
                                <li className="mb-3 font-semibold"><NavLink to="/"><i className="fa-solid fa-home"></i>User Home</NavLink></li>
                                <li className="mb-3 font-semibold"><NavLink to="/dashboard/reservation"><i className="fa-solid fa-calendar-days"></i>Reservation</NavLink></li>
                                <li className="mb-3 font-semibold"><NavLink to="/dashboard/payment"><i className="fa-regular fa-credit-card"></i>My Cart ({cart.length})</NavLink></li>
                                <li className="mb-3 font-semibold"><NavLink to="/dashboard/review"><i className="fa-solid fa-user-pen"></i>Add Review</NavLink></li>
                                <li className="font-semibold"><NavLink to="/dashboard/booking"><i className="fa-regular fa-rectangle-list"></i>My Booking</NavLink></li>
                            </>
                    }


                    <div className="divider"></div>
                    <li className="mb-3 font-semibold"><NavLink to="/"><i className="fa-solid fa-home"></i>Home</NavLink></li>
                    <li className="mb-3 font-semibold"><NavLink to="/dashboard/menu"><i className="fa-solid fa-bars"></i>Menu</NavLink></li>
                    <li className="mb-3 font-semibold"><NavLink to="/dashboard/contact"><i className="fa-solid fa-envelope"></i>Contact</NavLink></li>
                </ul>
            </div>
            <div className="flex-1 p-10">
                <Outlet></Outlet>
            </div>
            <Helmet>
                <title>Bistro Boss | Dashboard</title>
            </Helmet>
        </div>
    );
};

export default Dashboard;