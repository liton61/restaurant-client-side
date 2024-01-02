import dessert from '../../assets/dessert.jpg';

const Dessert = () => {
    return (
        <div className='lg:w-3/4 mx-auto lg:px-0 px-5 mt-10'>
            <div className="carousel w-full rounded">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={dessert} className="w-full h-[70vh]" />
                    {/* Overlay */}
                    <div className="absolute w-full h-[70vh] top-0 left-0 bg-black opacity-50"></div>
                    <div className="absolute transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <div className="max-w-md mx-auto text-center text-white">
                            <h1 className="mb-5 text-5xl font-bold">Dessert</h1>
                            <p className="mb-5">A sweet finale to any meal, tantalizing taste buds with its sugary bliss, offering a delightful treat for the senses.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dessert;