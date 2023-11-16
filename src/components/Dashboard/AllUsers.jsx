import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Swal from "sweetalert2";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: user = [], refetch } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axiosSecure.get('/user');
            return res.data;
        }

    })

    const handleMakeAdmin = item => {
        console.log(item);
        axiosSecure.patch(`/user/admin/${item}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: `${item.name} is admin now !`,
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })
    }

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

                axiosSecure.delete(`/user/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div>
            <div className="flex justify-evenly">
                <h1 className="text-2xl font-semibold text-center">All Users</h1>
                <h1 className="text-2xl font-semibold text-center">Total Users : {user.length}</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((item, index) => <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <td>
                                        {item.name ? item.name : item.user}
                                    </td>
                                </td>

                                <td>{item.email}</td>
                                <th>
                                    {item.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(item._id)} className="btn btn-ghost text-white bg-warning"><i className="fa-solid fa-users"></i></button>}
                                </th>
                                <td>
                                    <button onClick={() => handleDelete(item._id)} className="btn btn-ghost text-red-600 text-lg"><i className="fa-solid fa-trash-can"></i></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;