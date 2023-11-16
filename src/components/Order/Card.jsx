/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useCart from "../Hooks/useCart";



const Card = ({ item }) => {
    const { name, price, image, recipe, _id } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [refetch] = useCart();
    const handleCart = food => {
        if (user && user.email) {
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/cart', cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top",
                            icon: "success",
                            title: `${name} added to cart !`,
                            showConfirmButton: false,
                            timer: 2000
                        });
                        refetch();
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not logged In",
                text: "Please login to add to the cart !",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login !"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } });
                }
            });
        }
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                <figure><img src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}--------${price}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-center">
                        <button onClick={handleCart} className="btn btn-primary">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;