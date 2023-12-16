import Banner from "../../components/Banner/Banner";
import Menu from "../../components/Menu/Menu";
import MenuBanner from "../../components/MenuBanner/MenuBanner";
import Salad from "../../components/Salad/Salad";
import Slider from "../../components/Slider/Slider";
import Slider2 from "../../components/Slider2/Slider2";
import Testimonials from "../../components/Testimonials/Testimonials";



const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Slider2></Slider2>
            <Banner></Banner>
            <Menu></Menu>
            <Salad></Salad>
            <MenuBanner></MenuBanner>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;