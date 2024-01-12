import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const Cart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const axiosSecure = useAxiosSecure();
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/cart/${id}`)
                    .then(res => {
                        // console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
            }
        });
    }
    return (
        <div>
            {
                cart.length > 0 ? (
                    <div>
                        <div className="lg:w-3/4 mx-auto lg:px-0 md:px-4 px-4 mt-10">
                            <div className="flex justify-center">
                                <div className="stats stats-vertical lg:stats-horizontal md:stats-horizontal shadow">

                                    <div className="stat place-items-center">
                                        <div className="stat-title">Total Quantity</div>
                                        <div className="stat-value text-secondary">{cart.length}</div>
                                    </div>

                                    <div className="stat place-items-center">
                                        <div className="stat-title">Total Price</div>
                                        <div className="stat-value text-secondary">${totalPrice}</div>
                                    </div>

                                    <div className="stat place-items-center">
                                        <button className="btn btn-secondary font-bold">Pay Now <i className="fa-solid fa-arrow-right"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-3/4 mx-auto mt-10 lg:px-0 md:px-4 px-4">
                            <div className="overflow-x-auto">
                                <table className="table">
                                    <thead className="bg-success">
                                        <tr>
                                            <th>#</th>
                                            <th>Image</th>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cart.map((item, index) => <tr key={item._id}>
                                                <th>{index + 1}</th>
                                                <td>
                                                    <div className="flex items-center gap-3">
                                                        <div className="avatar">
                                                            <div className="rounded-full w-12 h-12">
                                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>{item.name}</td>
                                                <td>${item.price}</td>
                                                <button onClick={() => handleDelete(item._id)}><i className="fa-solid fa-trash-can text-xl text-red-600 mt-5"></i></button>
                                            </tr>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )
                    :
                    (
                        <div className="flex justify-center items-center h-screen">
                            <p className="text-3xl font-bold">No Items Available</p>
                        </div>
                    )
            }
        </div>
    );
};

export default Cart;