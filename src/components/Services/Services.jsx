

const Services = () => {
    return (
        <div className="container lg:w-3/4 mx-auto py-12 lg:px-0 md:px-5 px-5">
            <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-100 border border-black rounded-lg shadow-md p-6">
                    <i className="fas fa-utensils text-4xl text-blue-500 mb-4"></i>
                    <h2 className="text-xl font-semibold mb-2">Diverse Menu</h2>
                    <p className="text-gray-600">Enjoy a wide range of delicious dishes from various cuisines.</p>
                </div>
                <div className="bg-gray-100 border border-black rounded-lg shadow-md p-6">
                    <i className="fas fa-glass-cheers text-4xl text-blue-500 mb-4"></i>
                    <h2 className="text-xl font-semibold mb-2">Great Atmosphere</h2>
                    <p className="text-gray-600">Relax in our welcoming and cozy restaurant environment.</p>
                </div>
                <div className="bg-gray-100 border border-black rounded-lg shadow-md p-6">
                    <i className="fas fa-calendar-check text-4xl text-blue-500 mb-4"></i>
                    <h2 className="text-xl font-semibold mb-2">Reservation</h2>
                    <p className="text-gray-600">Book your table in advance to ensure a hassle-free dining experience.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;