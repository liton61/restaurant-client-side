import Swal from "sweetalert2";
import Cover from "../../components/Cover/Cover";



const Contact = () => {
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        const menuItem = { name, email, message };
        console.log(menuItem);

        Swal.fire({
            title: "Good job !",
            text: "Your message successfully submitted !",
            icon: "success"
        });
        form.reset();
    }
    return (
        <div>
            <Cover></Cover>
            <div className="bg-gray-200">
                <div className="lg:w-3/4 mx-auto bg-gray-200 py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Contact Us</h2>
                                <p className="mt-4 text-lg text-gray-500">Have questions or want to book a table? Contact us!</p>
                            </div>
                            <div className="col-span-2">
                                <form onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Name</label>
                                            <input type="text" id="name" name="name" className="mt-2 focus:outline-none p-2 w-full rounded" placeholder="Your name" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Email</label>
                                            <input type="email" id="email" name="email" className="mt-2 focus:outline-none p-2 w-full rounded" placeholder="Your email" />
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <label className="block text-sm font-medium text-gray-700">Message</label>
                                        <textarea id="message" name="message" rows="4" className="mt-2 focus:outline-none p-2 w-full rounded" placeholder="Message here"></textarea>
                                    </div>
                                    <div className="mt-4">
                                        <button className="btn btn-success w-full font-bold">Send Message</button>
                                    </div>
                                </form>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-gray-900">Location</h3>
                                <p className="mt-2 text-sm text-gray-500">123 Restaurant Street City, State, ZIP</p>
                                <h3 className="mt-4 text-lg font-medium text-gray-900">Phone</h3>
                                <p className="mt-2 text-sm text-gray-500">+123 456 7890</p>
                                <p className="mt-2 text-sm text-gray-500">+123 456 7890</p>
                                <h3 className="mt-4 text-lg font-medium text-gray-900">Email</h3>
                                <p className="mt-2 text-sm text-gray-500">info@example.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;