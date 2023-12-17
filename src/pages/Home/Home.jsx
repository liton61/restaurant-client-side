import { Helmet } from "react-helmet";
import Banner from "../../components/Banner/Banner";
import Salad from "../../components/Salad/Salad";
import Slider from "../../components/Slider/Slider";
import Slider2 from "../../components/Slider2/Slider2";
import Testimonials from "../../components/Testimonials/Testimonials";
import PopularMenu from "../../components/PopularMenu/PopularMenu";



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
            <Salad></Salad>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;