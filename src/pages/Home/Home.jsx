import { Helmet } from "react-helmet";
import Banner from "../../components/Banner/Banner";
import Recommended from "../../components/Recommended/Recommended";
import Slider from "../../components/Slider/Slider";
import Slider2 from "../../components/Slider2/Slider2";
import Testimonials from "../../components/Testimonials/Testimonials";
import PopularMenu from "../../components/PopularMenu/PopularMenu";
import MenuBanner from "../../components/MenuBanner/MenuBanner";
import Chef from "../../components/Chef/Chef";
import Services from "../../components/Services/Services";
import Burger from "../../components/Burger/Burger";
import Pizza from "../../components/Pizza/Pizza";
import Offer from "../../components/Offer/Offer";



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Slider></Slider>
            <Slider2></Slider2>
            <Banner></Banner>
            <PopularMenu></PopularMenu>
            <Offer></Offer>
            <Services></Services>
            <Burger></Burger>
            <Pizza></Pizza>
            <Recommended></Recommended>
            <Chef></Chef>
            <MenuBanner></MenuBanner>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;