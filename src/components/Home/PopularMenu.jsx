// import { useEffect, useState } from "react";
import PopularMenuCard from "./PopularMenuCard";
import useMenu from "../Hooks/useMenu";
import Title from "../Title/Title";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popularMenu = menu.filter(item => item.category === 'popular');
    return (
        <div>
            <Title
                title={'FROM OUR MENU'}
                subTitle={'Check it out'}
            ></Title>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-10">
                {
                    popularMenu.map(item => <PopularMenuCard key={item._id} item={item}></PopularMenuCard>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;