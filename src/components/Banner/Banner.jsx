import banner from '../../assets/chef-service.jpg';

const Banner = () => {
    return (
        <div>
            <img src={banner} alt="Banner" className="lg:w-3/4 mx-auto w-full lg:px-0 px-5 rounded" />
        </div>
    );
};

export default Banner;