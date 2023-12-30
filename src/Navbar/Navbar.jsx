import { Link, NavLink } from "react-router-dom";
import logo from '../assets/bistro.png';
import { useContext } from "react";
import { AuthContext } from "../authentication/Provider/AuthProvider";
import useCart from "../hooks/useCart";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [item] = useCart();

    const handleSingOut = () => {
        logOut()
            .then(res => {
                console.log(res.user);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <div className="navbar bg-success">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                        </ul>
                    </div>
                    <div className="w-20 font-medium">
                        <img src={logo} alt="" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className="mx-2"><NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            Home
                        </NavLink></li>
                        <li className="mx-2 font-medium"><NavLink
                            to="/menu"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            Menu
                        </NavLink></li>
                        <li className="mx-2 font-medium"><NavLink
                            to="/order"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            Order
                        </NavLink></li>
                        <li className="mx-2 font-medium"><NavLink
                            to="/review"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            Review
                        </NavLink></li>
                        {
                            user &&
                            <li className="mx-2 font-medium"><NavLink
                                to="/dashboard/cart"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                <i className="fa-solid fa-cart-plus"></i>+{item.length}
                            </NavLink></li>
                        }
                        <li className="mx-2 font-medium"><NavLink
                            to="/dashboard"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            Dashboard
                        </NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="" src={user?.photoURL} />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <li>
                                        <a className="justify-between text-black">
                                            {user?.displayName}
                                        </a>
                                    </li>
                                    <li><a className='text-black'>{user?.email}</a></li>
                                    <li className='text-red-600'><NavLink onClick={handleSingOut}
                                        to="/login"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "active" : ""
                                        }
                                    >
                                        <i className="fa-solid fa-right-from-bracket"></i> Sing Out
                                    </NavLink></li>
                                </ul>
                            </div>
                            :
                            <Link to="/login">
                                <button className='btn btn-neutral'>Login</button>
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;