import Cover from "../../components/Cover/Cover";
import useMenu from "../../hooks/useMenu";
import Category from "./Category";


const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const drinks = menu.filter(item => item.category === 'drinks');
    return (
        <div>
            <Cover></Cover>
            <Category items={dessert} title={"dessert"}></Category>
            <Cover></Cover>
            <Category items={soup} title={"soup"}></Category>
            <Cover></Cover>
            <Category items={pizza} title={"pizza"}></Category>
            <Cover></Cover>
            <Category items={salad} title={"salad"}></Category>
            <Cover></Cover>
            <Category items={drinks} title={"drinks"}></Category>
        </div>
    );
};

export default Menu;