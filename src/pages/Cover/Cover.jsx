

const Cover = () => {
    return (
        <div>
            <div className="hero h-[80vh] rounded" style={{ backgroundImage: 'url(https://i.postimg.cc/J7BvVDKq/banner3.jpg)' }}>
                <div className="hero-overlay lg:w-1/2 lg:h-[50vh] md:h-[60vh] md:w-3/4 bg-opacity-50 rounded"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;