import Cover from "../../components/Cover/Cover";
import useMenu from "../../hooks/useMenu";
import Category from "./Category";


const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'Dessert');
    const soup = menu.filter(item => item.category === 'Soup');
    const pizza = menu.filter(item => item.category === 'Pizza');
    const salad = menu.filter(item => item.category === 'Salad');
    const drinks = menu.filter(item => item.category === 'Drinks');
    const popular = menu.filter(item => item.category === 'Popular');
    return (
        <div>
            <Cover></Cover>
            <Category items={dessert} title={"Dessert"}></Category>
            <Cover></Cover>
            <Category items={soup} title={"Soup"}></Category>
            <Cover></Cover>
            <Category items={pizza} title={"Pizza"}></Category>
            <Cover></Cover>
            <Category items={salad} title={"Salad"}></Category>
            <Cover></Cover>
            <Category items={drinks} title={"Drinks"}></Category>
            <Cover></Cover>
            <Category items={popular} title={"Popular"}></Category>
        </div>
    );
};

export default Menu;