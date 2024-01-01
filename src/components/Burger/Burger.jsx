import burger from '../../assets/salad-bg.jpg';

const Burger = () => {
    return (
        <div>
            <section className="p-6 lg:w-3/4 mx-auto my-20">
                <div className="container mx-auto flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2 lg:pr-10 mb-6 lg:mb-0">
                        <img
                            src={burger}
                            alt="Banker"
                            className="rounded-lg"
                        />
                    </div>
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl font-bold mb-4">Our Chef</h2>
                        <p className="text-lg text-gray-700 text-justify">
                            Meet our experienced chef who crafts delightful dishes with creativity and expertise.Chefs are culinary wizards who expertly craft mouthwatering dishes, blending creativity, skill, and a deep knowledge of ingredients and flavors to create delightful culinary experiences.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Burger;