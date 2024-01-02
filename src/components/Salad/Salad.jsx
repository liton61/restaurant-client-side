import salad from '../../assets/banner/salad.jpg';

const Salad = () => {
    return (
        <div className='lg:w-3/4 mx-auto lg:px-0 px-5'>
            <div className="carousel w-full rounded">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={salad} className="w-full h-[70vh]" />
                    {/* Overlay */}
                    <div className="absolute w-full h-[70vh] top-0 left-0 bg-black opacity-50"></div>
                    <div className="absolute transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <div className="max-w-md mx-auto text-center text-white">
                            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Salad;