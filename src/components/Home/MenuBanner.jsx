import banner from '../../assets/featured.jpg';
import Title from '../Title/Title';
import './MenuBanner.css';

const MenuBanner = () => {
    return (
        <div>
            <div className='my-20 bg-image'>
                <Title
                    title={'FROM OUR MENU'}
                    subTitle={'Check it out'}
                ></Title>
                <div className='lg:flex md:flex items-center lg:w-3/4 md:w-full w-full mx-auto py-20'>
                    <div>
                        <img src={banner} alt="" />
                    </div>
                    <div className='lg:ml-10 md:ml-10 mt-5'>
                        <h3 className='text-xl font-semibold'>March 20, 2023 <br />WHERE CAN I GET SOME?</h3>
                        <p className='mt-3 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className='btn btn-outline btn-primary mt-5'>Load More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuBanner;