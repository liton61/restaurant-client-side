import useMenu from '../../hooks/useMenu';

const Dessert = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');

    return (
        <div>
            <div className='w-64 mx-auto my-10'>
                <h3 className='text-xl font-semibold border-y-4 text-center py-3'>Our Dessert</h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-10 lg:w-3/4 mx-auto lg:px-0 md:px-5 px-5'>
                {dessert.map(item => (
                    <div key={item._id}>
                        <div className='flex items-center'>
                            <img className='w-20 h-20 rounded-full' src={item.image} alt='' />
                            <div className='ml-5'>
                                <h3 className='font-medium'>
                                    {item.name} ----------{' '}
                                    <span className='text-yellow-500 font-medium'>${item.price}</span>
                                </h3>
                                <p className='text-justify'>{item.recipe}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex justify-center mt-5'>
                <button className='btn btn-neutral text-yellow-500'>
                    Order Now
                </button>
            </div>
        </div>
    );
};

export default Dessert;
