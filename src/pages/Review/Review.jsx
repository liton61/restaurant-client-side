import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";



const Review = () => {
    const axiosSecure = useAxiosSecure();
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const rating = form.rating.value;
        const details = form.details.value;

        const userReviews = { name, rating, details };
        console.log(userReviews);

        axiosSecure.post('/reviews', userReviews)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    Swal.fire({
                        title: "Good job !",
                        text: "Review successfully added !",
                        icon: "success"
                    });
                }
                form.reset();
            })
    }
    return (
        <div>
            <div className="my-14 lg:px-0 px-5">
                <div className="lg:w-3/4 mx-auto bg-gray-200 p-10 rounded">
                    <h2 className="text-2xl font-semibold mb-4">Leave a Review</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="text-gray-700 font-medium">Your Name</label>
                            <input type="text" id="name" name="name" placeholder="Your name" className="form-input mt-1 w-full rounded-md focus:outline-none p-2" />
                        </div>
                        <div className="mb-4">
                            <label className="text-gray-700 font-medium">Rating</label>
                            <select id="rating" name="rating" className="form-select mt-1 w-full rounded p-2">
                                <option value="5">⭐⭐⭐⭐⭐ (Excellent)</option>
                                <option value="4">⭐⭐⭐⭐ (Good)</option>
                                <option value="3">⭐⭐⭐ (Average)</option>
                                <option value="2">⭐⭐ (Fair)</option>
                                <option value="1">⭐ (Poor)</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="text-gray-700 font-medium">Your Review</label>
                            <textarea id="detail" name="details" rows="4" className="form-textarea mt-1 w-full rounded focus:outline-none p-2"></textarea>
                        </div>
                        <div>
                            <button className="btn btn-success font-bold w-full">Submit Review</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;