import useMenu from "../Hooks/useMenu";
import List from "./List";



const Menu = () => {
    const [menu] = useMenu();
    const soup = menu.filter(item => item.category === 'soup');
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const popular = menu.filter(item => item.category === 'popular');
    const drinks = menu.filter(item => item.category === 'drinks');
    const salad = menu.filter(item => item.category === 'salad');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div className="my-20">
            <List items={soup} title={'soup'}></List>
            <List items={dessert} title={'dessert'}></List>
            <List items={pizza} title={'pizza'}></List>
            <List items={popular} title={'popular'}></List>
            <List items={drinks} title={'drinks'}></List>
            <List items={salad} title={'salad'}></List>
            <List items={offered} title={'offered'}></List>
        </div>
    );
};

export default Menu;