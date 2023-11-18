import { Helmet } from "react-helmet-async";
import Menu from "../Menu/Menu";
import Cards from "./Card/Cards";
import Chefs from "./Chefs/Chefs";
import Contact from "./Contact/Contact";
import Featured from "./Featured/Featured";

import FoodType from "./FoodType/FoodType";
import HomeBanner from "./HomeBanner/HomeBanner";
import Testimonial from "./Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <HomeBanner></HomeBanner>
            <FoodType></FoodType>
            <Chefs></Chefs>
            <Menu></Menu>
            <Contact></Contact>
            <Cards></Cards>
            <Featured></Featured>
            <Testimonial></Testimonial>

        </div>
    );
};

export default Home;