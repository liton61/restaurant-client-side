import { useEffect, useState } from "react";
import MenuCard from "../MenuCard/MenuCard";

const Menu = () => {
    const [menu, setMenu] = useState([]);
    const [visibleItems, setVisibleItems] = useState(10);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => setMenu(data))
    }, [])

    const handleSeeMore = () => {
        setVisibleItems((prevVisibleItems) => prevVisibleItems + 10);
    };

    return (
        <div>
            <div className='w-72 mx-auto mb-10 mt-16'>
                <h3 className='text-yellow-500 italic mb-5 text-center'> ------Check it out------ </h3>
                <h1 className='text-3xl font-semibold border-y-4 py-4 text-center'>FROM OUR MENU</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                {
                    menu.slice(0, visibleItems).map(item => (
                        <MenuCard key={item._id} item={item}></MenuCard>
                    ))
                }
            </div>

            {visibleItems < menu.length && (
                <div className="text-center mt-4">
                    <button
                        className="btn btn-primary"
                        onClick={handleSeeMore}
                    >
                        See More
                    </button>
                </div>
            )}
        </div>
    );
};

export default Menu;
