import pizza from '../../assets/pizza-bg.jpg';

const Pizza = () => {
    return (
        <div>
            <section className="p-6 lg:w-3/4 mx-auto my-20">
                <div className="container mx-auto flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2 lg:pr-10 mb-6 lg:mb-0">
                        <h2 className="text-3xl font-bold mb-4">Our Ambiance</h2>
                        <p className="text-lg text-gray-700 text-justify">
                            It is the intangible quality that sets the tone for an experience, whether in a restaurant, a room, or any environment. Ambiance plays a vital role in influencing emotions, creating a welcoming or specific atmosphere that complements and enhances the overall experience.
                        </p>
                    </div>
                    <div className="lg:w-1/2">
                        <img
                            src={pizza}
                            alt="Corporate Professionals"
                            className="rounded-lg"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Pizza;