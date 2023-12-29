/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";


const FoodCard = ({ item }) => {
    const { name, price, image, _id } = item;
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

    const handleAddToCart = () => {
        if (user && user.email) {
            const item = {
                foodId: _id,
                email: user.email,
                name,
                price,
                image
            }
            axiosSecure.post('/cart', item)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top",
                            icon: "success",
                            title: `${name} successfully added !`,
                            showConfirmButton: false,
                            timer: 1500
                        });

                        refetch();
                    }
                })
        }
        else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please login first !",
            });
        }
    }
    return (
        <div>
            <div className="card card-compact lg:w-80 lg:mb-5 md:w-80 mx-auto md:mb-10 bg-base-100 shadow-xl mb-10">
                <figure><img className="w-full h-60" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className="font-medium">Price : ${price}</p>
                    <div className="card-actions justify-center">
                        <button onClick={handleAddToCart} className="btn btn-neutral text-yellow-500">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;