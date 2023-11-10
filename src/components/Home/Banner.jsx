import banner from '../../assets/home/chef-service.jpg';

const Banner = () => {
    return (
        <div className="relative">
            <img src={banner} alt="Banner" className="w-full" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white bg-black bg-opacity-30 p-10 rounded">
                <h1 className="text-4xl mb-5">Bistro Boss</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
    );
};

export default Banner;
