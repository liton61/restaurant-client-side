import chef from '../../assets/chef.jpg';
import chef2 from '../../assets/chef2.jpg';
import chef3 from '../../assets/chef3.jpg';

const Chef = () => {
    return (
        <div className="container lg:w-3/4 mx-auto py-12 lg:px-0 md:px-5 px-5">
            <h1 className="text-3xl font-bold text-center mb-8">Our Chefs</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-100 border border-yellow-600 rounded-lg p-5">
                    <img src={chef} alt="Chef 1" className="w-full h-48 object-cover rounded mb-4" />
                    <h2 className="text-xl font-semibold">Chef John Doe</h2>
                    <p className="text-gray-600">Specialty: Italian Cuisine</p>
                    <p className="text-gray-600">Experience: Over 15 years</p>
                    <p className="text-gray-600">Featured Dish: Spaghetti Carbonara</p>
                </div>
                <div className="bg-gray-100 border border-yellow-600 rounded-lg p-5">
                    <img src={chef2} alt="Chef 2" className="w-full h-48 object-cover rounded mb-4" />
                    <h2 className="text-xl font-semibold">Chef Jane Smith</h2>
                    <p className="text-gray-600">Specialty: French Pastries</p>
                    <p className="text-gray-600">Experience: Over 10 years</p>
                    <p className="text-gray-600">Featured Dish: Crème Brûlée</p>
                </div>
                <div className="bg-gray-100 border border-yellow-600 rounded-lg p-5">
                    <img src={chef3} alt="Chef 3" className="w-full h-48 object-cover rounded mb-4" />
                    <h2 className="text-xl font-semibold">Chef Alex Johnson</h2>
                    <p className="text-gray-600">Specialty: Japanese Cuisine</p>
                    <p className="text-gray-600">Experience: Over 20 years</p>
                    <p className="text-gray-600">Featured Dish: Sushi Omakase</p>
                </div>
            </div>
        </div>
    );
};

export default Chef;