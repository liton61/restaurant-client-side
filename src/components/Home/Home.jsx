import { Helmet } from "react-helmet";
import Slider from "../Header/Slider";
import Banner from "./Banner";
import OnlineOrder from "./OnlineOrder";
import MenuBanner from "./MenuBanner";
import Contact from "./Contact";
import PopularMenu from "./PopularMenu";
import Recommends from "./Recommends";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <OnlineOrder></OnlineOrder>
            <Banner></Banner>
            <PopularMenu></PopularMenu>
            <Contact></Contact>
            <Recommends></Recommends>
            <MenuBanner></MenuBanner>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
        </div>
    );
};

export default Home;