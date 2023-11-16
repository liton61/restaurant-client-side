import useMenu from "../Hooks/useMenu";
import Title from "../Title/Title";
import RecommendsCard from "./RecommendsCard";


const Recommends = () => {
    const [menu] = useMenu();
    const popularMenu = menu.filter(item => item.category === 'popular');
    return (
        <div>
            <Title
                title={'FROM OUR MENU'}
                subTitle={'Should Try'}
            ></Title>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
                {
                    popularMenu.map(item => <RecommendsCard key={item._id} item={item}></RecommendsCard>)
                }
            </div>
        </div>
    );
};

export default Recommends;