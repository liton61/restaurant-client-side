import { Helmet } from "react-helmet";
// import Menu from "../../components/Menu/PopularMenu";
import Cover from "../../components/Cover/Cover";
import Pizza from "./Pizza";
import Dessert from "./Dessert";
import Salad from "./Salad";
import Soup from "./Soup";


const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Our Menu</title>
            </Helmet>
            <Cover></Cover>
            <Pizza></Pizza>
            <div className="lg:w-3/4 mx-auto my-20 lg:px-0 md:px-5 px-5"><Cover></Cover></div>
            <Dessert></Dessert>
            <div className="lg:w-3/4 mx-auto my-20 lg:px-0 md:px-5 px-5"><Cover></Cover></div>
            <Salad></Salad>
            <div className="lg:w-3/4 mx-auto my-20 lg:px-0 md:px-5 px-5"><Cover></Cover></div>
            <Soup></Soup>
        </div>
    );
};

export default Menu;