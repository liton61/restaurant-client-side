import Slider from "../Header/Slider";
import Recommends from "../Recommends/Recommends";
import Banner from "./Banner";
import Contact from "./Contact";
import Menu from "./Menu";
import MenuBanner from "./MenuBanner";
import OnlineOrder from "./OnlineOrder";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <OnlineOrder></OnlineOrder>
            <Banner></Banner>
            <Menu></Menu>
            <Contact></Contact>
            <Recommends></Recommends>
            <MenuBanner></MenuBanner>
        </div>
    );
};

export default Home;