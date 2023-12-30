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
            <div className="lg:w-3/4 mx-auto lg:px-0 md:px-4 px-4">
                <div className="flex justify-between items-center mt-10 border">
                    <h1 className="lg:text-2xl md:text-2xl text-md font-semibold">Total Items : {cart.length}</h1>
                    <h1 className="lg:text-2xl md:text-2xl text-md font-semibold">Total Price : ${totalPrice}</h1>
                    {totalPrice > 0 ? (
                        <button className="lg:text-lg md:text-lg text-sm font-medium bg-success px-3 py-2 rounded">
                            Pay Now
                        </button>
                    ) : (
                        <button
                            className="lg:text-lg md:text-lg text-sm font-medium bg-gray-300 px-3 py-2 rounded"
                            disabled
                        >
                            Pay Now
                        </button>
                    )}
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
    );
};

export default Cart;