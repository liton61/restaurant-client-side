import useMenu from "../../hooks/useMenu";
import FoodCard from "../FoodCard/FoodCard";


const Offer = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'Offered')
    return (
        <div>
            <div className='w-64 mx-auto my-10'>
                <p className='text-yellow-500 text-center mb-2'>---Should Try---</p>
                <h3 className='text-xl font-semibold border-y-4 text-center py-3'>Offered Items</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-3/4 w-full mx-auto lg:px-0 md:px-0 px-5">
                {
                    offered.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default Offer;