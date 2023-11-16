import { Helmet } from "react-helmet";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";


const Dashboard = () => {
    const [cart] = useCart();
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-warning">
                <ul className="menu p-4">
                    <li className="mb-3"><NavLink to="/"><i className="fa-solid fa-home"></i>Home</NavLink></li>
                    <li className="mb-3"><NavLink to="/dashboard/reservation"><i className="fa-solid fa-calendar-days"></i>Reservation</NavLink></li>
                    <li className="mb-3"><NavLink to="/dashboard/payment"><i className="fa-regular fa-credit-card"></i>My Cart ({cart.length}) </NavLink></li>
                    <li className="mb-3"><NavLink to="/dashboard/payment"><i className="fa-regular fa-credit-card"></i>Payment History</NavLink></li>
                    <li className="mb-3"><NavLink to="/dashboard/review"><i className="fa-solid fa-user-check"></i>Add Review</NavLink></li>
                    <li><NavLink to="/dashboard/booking"><i className="fa-regular fa-rectangle-list"></i>My Booking</NavLink></li>
                    <div className="divider"></div>
                    <li className="mb-3"><NavLink to="/"><i className="fa-solid fa-home"></i>Home</NavLink></li>
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