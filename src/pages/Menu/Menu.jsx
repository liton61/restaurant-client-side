import Dessert from "../../components/Dessert/Dessert";
import Drinks from "../../components/Drinks/Drinks";
import Pizza from "../../components/Pizza/Pizza";
import Salad from "../../components/Salad/Salad";
import Soup from "../../components/Soup/Soup";
import useMenu from "../../hooks/useMenu";
import Category from "./Category";


const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'Dessert');
    const soup = menu.filter(item => item.category === 'Soup');
    const pizza = menu.filter(item => item.category === 'Pizza');
    const salad = menu.filter(item => item.category === 'Salad');
    const drinks = menu.filter(item => item.category === 'Drinks');
    return (
        <div>
            <Dessert></Dessert>
            <Category items={dessert} title={"Dessert"}></Category>
            <Soup></Soup>
            <Category items={soup} title={"Soup"}></Category>
            <Pizza></Pizza>
            <Category items={pizza} title={"Pizza"}></Category>
            <Salad></Salad>
            <Category items={salad} title={"Salad"}></Category>
            <Drinks></Drinks>
            <Category items={drinks} title={"Drinks"}></Category>
        </div>
    );
};

export default Menu;