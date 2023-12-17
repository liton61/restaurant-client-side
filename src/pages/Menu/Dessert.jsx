import { useState } from 'react';
import useMenu from '../../hooks/useMenu';

const Dessert = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const [showAll, setShowAll] = useState(false);

    // Function to toggle showing all items
    const handleShowAll = () => {
        setShowAll(!showAll);
    };

    // Display maximum 8 items or all items if 'Show All' is clicked
    const displayItems = showAll ? dessert : dessert.slice(0, 8);

    return (
        <div>
            <div className='w-64 mx-auto my-10'>
                <h3 className='text-xl font-semibold border-y-4 text-center py-3'>Our Dessert</h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-10 lg:w-3/4 mx-auto lg:px-0 md:px-5 px-5'>
                {displayItems.map(item => (
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
            {dessert.length > 8 && !showAll && (
                <div className='flex justify-center mt-5'>
                    <button onClick={handleShowAll} className='btn btn-neutral text-yellow-500'>
                        Show All
                    </button>
                </div>
            )}
        </div>
    );
};

export default Dessert;
