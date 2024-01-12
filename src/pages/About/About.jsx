import chef from '../../assets/chef.jpg';
import ambiance from '../../assets/ambiance.jpg';
import ingredients from '../../assets/ingredients.jpg';
import Cover from '../../components/Cover/Cover';

const About = () => {
    return (
        <div>
            <Cover></Cover>
            <section className="p-6 lg:w-3/4 mx-auto my-10">
                <div className="mx-auto text-center">
                    <h2 className="text-2xl font-extrabold text-gray-900 sm:text-4xl">About Our Restaurant</h2>
                    <p className="mt-4 text-lg text-gray-700 text-justify">
                        Welcome to Bistro Boss where we combine passion, expertise, and quality ingredients to create memorable dining experiences for our customers.It is a place where the art of cooking meets hospitality, offering diverse cuisines, ambiance, and service to cater to various tastes and occasions. Restaurants range from cozy cafes to elegant fine dining establishments, providing an array of dining experiences to satisfy cravings, celebrate special moments, or simply relish good food in good company.
                    </p>
                </div>
            </section>
            <section className="lg:w-3/4 mx-auto my-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 lg:px-0 px-5">
                    <div className="">
                        <img
                            src={chef}
                            alt=""
                            className="rounded-lg"
                        />
                    </div>
                    <div className="flex justify-center items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Our Chef</h2>
                            <p className="text-lg text-gray-700 text-justify">
                                Meet our experienced chef who crafts delightful dishes with creativity and expertise.Chefs are culinary wizards who expertly craft mouthwatering dishes, blending creativity, skill, and a deep knowledge of ingredients and flavors to create delightful culinary experiences.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="lg:w-3/4 mx-auto my-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 lg:px-0 px-5">
                    <div>
                        <img
                            src={ambiance}
                            alt=""
                            className="rounded-lg"
                        />
                    </div>
                    <div className='flex justify-center items-center'>
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Our Ambiance</h2>
                            <p className="text-lg text-gray-700 text-justify">
                                It is the intangible quality that sets the tone for an experience, whether in a restaurant, a room, or any environment. Ambiance plays a vital role in influencing emotions, creating a welcoming or specific atmosphere that complements and enhances the overall experience.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="lg:w-3/4 mx-auto my-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 lg:px-0 px-5">
                    <div>
                        <img
                            src={ingredients}
                            alt=""
                            className="rounded-lg"
                        />
                    </div>
                    <div className='flex justify-center items-center'>
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Local Ingredients</h2>
                            <p className="text-lg text-gray-700 text-justify">
                                Local ingredients are the heart of regional cuisine, sourced from nearby areas, farms, or producers. They embody the flavors of a specific region, offering freshness and distinct tastes that reflect the areas climate and culture.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;