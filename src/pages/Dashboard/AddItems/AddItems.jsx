import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AddItems = () => {
    const axiosSecure = useAxiosSecure();
    const handleAddItem = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const category = form.category.value;
        const price = form.price.value;
        const image = form.image.value;
        const description = form.description.value;

        const menuItem = { name, category, price, image, description };
        console.log(menuItem);

        axiosSecure.post('/menu', menuItem)
            .then(res => {
                // console.log(res);
                if (res.data.insertedId) {
                    Swal.fire({
                        title: "Good job !",
                        text: `${name} successfully added !`,
                        icon: "success"
                    });
                }
                form.reset();
            })
    }
    return (
        <div>
            <div className="lg:w-3/4 mx-auto mt-5">
                <form onSubmit={handleAddItem} className="bg-base-200 rounded px-8 pt-6 pb-6 mb-3 lg:mx-0 mx-4">
                    <div className="mb-3">
                        <label className="block text-sm font-semibold mb-2">
                            Recipe Name
                        </label>
                        <input name="recipe" className="rounded w-full p-3 focus:outline-none" id="name" type="text" placeholder="Enter recipe name" />
                    </div>
                    <div className="lg:flex md:flex">
                        <div className="mb-3 w-full lg:mr-2 md:mr-2">
                            <label className="block text-sm font-semibold mb-2">
                                Category
                            </label>
                            <select name="category" defaultValue="default" className="rounded w-full p-3 focus:outline-none" id="category">
                                <option disabled value="default">Select category</option>
                                <option value="Pizza">Pizza</option>
                                <option value="Salad">Salad</option>
                                <option value="Dessert">Dessert</option>
                                <option value="Soup">Soup</option>
                                <option value="Drinks">Drinks</option>
                                <option value="Popular">Popular</option>
                                <option value="Recommended">Recommended</option>
                            </select>
                        </div>

                        <div className="mb-3 w-full lg:ml-2 md:ml-2">
                            <label className="block text-sm font-semibold mb-2">
                                Price
                            </label>
                            <input name="price" className="rounded w-full p-3 focus:outline-none" id="price" type="text" placeholder="Enter price" />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="block text-sm font-semibold mb-2">
                            Photo URL
                        </label>
                        <input name="image" className="rounded w-full p-3 focus:outline-none" id="image" type="text" placeholder="Enter photo URL" />
                    </div>
                    <div className="mb-3">
                        <label className="block text-sm font-semibold mb-2">
                            Description
                        </label>
                        <textarea name="description" className="rounded w-full h-36 p-3 focus:outline-none" id="description" placeholder="Enter description"></textarea>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-success w-full font-bold">Add Item <i className="fa-solid fa-utensils text-lg"></i></button>
                    </div>
                </form>
            </div>

        </div>

    );
};

export default AddItems;