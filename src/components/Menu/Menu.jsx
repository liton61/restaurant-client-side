import { useEffect, useState } from "react";
import MenuCard from "./MenuCard";

const Menu = () => {
    const [menu, setMenu] = useState([]);
    const [displayCount, setDisplayCount] = useState(10);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => setMenu(data))
    }, [])

    const displayItems = menu.slice(0, displayCount);

    const showMoreItems = () => {
        if (displayCount < menu.length) {
            setDisplayCount(prevCount => prevCount + 10);
        }
    };

    return (
        <div>
            <div className='w-64 mx-auto my-10'>
                <p className='text-yellow-500 text-center mb-2'>---Check it out---</p>
                <h3 className='text-xl font-semibold border-y-4 text-center py-3'>FROM OUR MENU</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-10 lg:w-3/4 mx-auto lg:px-0 md:px-5 px-5">
                {
                    displayItems.map(item => <MenuCard key={item._id} item={item}></MenuCard>)
                }
            </div>
            {displayCount < menu.length && (
                <div className="text-center mt-5">
                    <button onClick={showMoreItems} className="btn btn-neutral text-yellow-500">
                        Show More
                    </button>
                </div>
            )}
        </div>
    );
};

export default Menu;
