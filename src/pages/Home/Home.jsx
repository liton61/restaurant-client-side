import { Helmet } from "react-helmet";
import Banner from "../../components/Banner/Banner";
import Slider from "../../components/Slider/Slider";
import Testimonials from "../../components/Testimonials/Testimonials";
import PopularMenu from "../../components/PopularMenu/PopularMenu";
import MenuBanner from "../../components/MenuBanner/MenuBanner";
import Chef from "../../components/Chef/Chef";
import Services from "../../components/Services/Services";
import Offer from "../../components/Offer/Offer";
import Cover from "../../components/Cover/Cover";



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Cover></Cover>
            <Slider></Slider>
            <Banner></Banner>
            <PopularMenu></PopularMenu>
            <Offer></Offer>
            <Services></Services>
            <Chef></Chef>
            <MenuBanner></MenuBanner>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;