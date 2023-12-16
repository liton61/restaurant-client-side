import banner from '../../assets/featured.jpg';
import './MenuBanner.css';

const MenuBanner = () => {
    return (
        <div className='lg:w-3/4 mx-auto lg:px-0 md:px-5 px-5'>
            <div className='my-20 bg-image lg:px-0 md:px-5 px-5'>
                <div className='lg:flex items-center lg:w-3/4 md:w-full w-full mx-auto py-20'>
                    <div className='lg:w-1/2'>
                        <img className='rounded' src={banner} alt="" />
                    </div>
                    <div className='lg:ml-10 mt-5 lg:w-1/2'>
                        <h3 className='text-xl font-semibold'>March 20, 2023 <br />WHERE CAN I GET SOME?</h3>
                        <p className='mt-3 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi.</p>
                        <button className='btn btn-outline btn-warning mt-5'>Load More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuBanner;