import img1 from '../../assets/authentication1.png';
import Cover from '../../components/Cover/Cover';

const About = () => {
    return (
        <div>
            <Cover></Cover>
            <section className="p-6 lg:w-3/4 mx-auto my-10">
                <div className="mx-auto text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Our Restaurant</h2>
                    <p className="mt-4 text-lg text-gray-500">
                        Welcome to [Restaurant Name], where we combine passion, expertise, and quality ingredients to create memorable dining experiences for our customers.
                    </p>
                </div>
            </section>
            <section className="p-6 lg:w-3/4 mx-auto my-20">
                <div className="container mx-auto flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2 lg:pr-10 mb-6 lg:mb-0">
                        <img
                            src={img1}
                            alt="Banker"
                            className="rounded-lg"
                        />
                    </div>
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl font-bold mb-4">Our Chef</h2>
                        <p className="text-xl text-gray-700 text-justify">
                            Meet our experienced chef who crafts delightful dishes with creativity and expertise.
                        </p>
                    </div>
                </div>
            </section>
            <section className="p-6 lg:w-3/4 mx-auto my-20">
                <div className="container mx-auto flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2 lg:pr-10 mb-6 lg:mb-0">
                        <h2 className="text-3xl font-bold mb-4">Our Ambiance</h2>
                        <p className="text-xl text-gray-700 text-justify">
                            Experience a cozy and inviting atmosphere designed to enhance your dining pleasure.
                        </p>
                    </div>
                    <div className="lg:w-1/2">
                        <img
                            src={img1}
                            alt="Corporate Professionals"
                            className="rounded-lg"
                        />
                    </div>
                </div>
            </section>
            <section className="p-6 lg:w-3/4 mx-auto my-20">
                <div className="container mx-auto flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2 lg:pr-10 mb-6 lg:mb-0">
                        <img
                            src={img1}
                            alt="Developer"
                            className="rounded-lg"
                        />
                    </div>
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl font-bold mb-4">Local Ingredients</h2>
                        <p className="text-xl text-gray-700 text-justify">
                            We source the freshest local ingredients to ensure the highest quality in every dish.
                        </p>
                    </div>
                </div>
            </section>
            {/* <div className="bg-gray-100">
                <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto text-center">
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">About Our Restaurant</h2>
                        <p className="mt-4 text-lg text-gray-500">
                            Welcome to [Restaurant Name], where we combine passion, expertise, and quality ingredients to create memorable dining experiences for our customers.
                        </p>
                        <div className="mt-10">
                            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                                <div className="flex flex-col items-center">
                                    <img src={img1} alt="Chef" className="rounded-full h-32 w-32 object-cover" />
                                    <h3 className="mt-4 text-lg font-medium text-gray-900">Our Chef</h3>
                                    <p className="mt-2 text-sm text-gray-500">
                                        Meet our experienced chef who crafts delightful dishes with creativity and expertise.
                                    </p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <img src={img1} alt="Restaurant Interior" className="rounded-lg h-32 w-48 object-cover" />
                                    <h3 className="mt-4 text-lg font-medium text-gray-900">Our Ambiance</h3>
                                    <p className="mt-2 text-sm text-gray-500">
                                        Experience a cozy and inviting atmosphere designed to enhance your dining pleasure.
                                    </p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <img src={img1} alt="Local Produce" className="rounded-lg h-32 w-48 object-cover" />
                                    <h3 className="mt-4 text-lg font-medium text-gray-900">Local Ingredients</h3>
                                    <p className="mt-2 text-sm text-gray-500">
                                        We source the freshest local ingredients to ensure the highest quality in every dish.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default About;