import useMenu from "../../hooks/useMenu";
import Category from '../../pages/Menu/Category';


const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'Popular')
    return (
        <div>
            <div className='w-64 mx-auto my-10'>
                <p className='text-yellow-500 text-center mb-2'>---Check it out---</p>
                <h3 className='text-xl font-semibold border-y-4 text-center py-3'>POPULAR MENU</h3>
            </div>
            <Category items={popular} title={"Popular"}></Category>
        </div>
    );
};

export default PopularMenu;