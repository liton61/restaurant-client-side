import banner from '../../assets/banner.jpg'

const Cover = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={banner} className="w-full h-[80vh]" />
                    {/* Overlay */}
                    <div className="absolute w-full h-[80vh] top-0 left-0 bg-black opacity-50"></div>
                    <div className="absolute transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <div className="max-w-md mx-auto text-center text-white">
                            <h1 className="mb-5 text-5xl font-bold">Bistro Boss</h1>
                            <p className="mb-5">Welcome to Bistro Boss where we combine passion, expertise, and quality ingredients to create memorable dining experiences for our customers.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;