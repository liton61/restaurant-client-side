import useCart from "../../hooks/useCart";


const Cart = () => {
    const [cart] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    return (
        <div>
            <div className="lg:w-3/4 mx-auto lg:px-0 md:px-4 px-4">
                <div className="flex justify-between items-center mt-10 border">
                    <h1 className="lg:text-2xl md:text-2xl text-md font-semibold">Total Items : {cart.length}</h1>
                    <h1 className="lg:text-2xl md:text-2xl text-md font-semibold">Total Price : {totalPrice}</h1>
                    <button className="lg:text-lg md:text-lg text-sm font-medium bg-success px-3 py-2 rounded">Pay Now</button>
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
                                    <th><i className="fa-solid fa-trash-can text-xl text-red-600 cursor-pointer"></i></th>
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