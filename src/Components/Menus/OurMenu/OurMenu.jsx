import { Helmet } from "react-helmet-async";
import Cover from "../Cover/Cover";
import menuImg from '../../../assets/menu/banner3.jpg'
import Section from "../../HomePage/Section/Section";
import MenuCategory from "../MenuCategory/MenuCategory";
import useMenu from "../../../Hooks/useMenu";
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg'

const OurMenu = () => {
    const [menu] = useMenu()

    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Our Menu</title>
            </Helmet>
            <Cover img={menuImg}
                title={"OUR MENU"}
                shorts={"Would you like to try a dish?"}></Cover>
            <Section heading={"Don't miss"}
                subHeading={"today's offer"}></Section>
            <MenuCategory items={offered}
            ></MenuCategory>

            <MenuCategory
                items={dessert}
                img={dessertImg}
                title={"dessert"}
                shorts={"Would you like to try a dish?"}
            ></MenuCategory>

            <MenuCategory
                items={pizza}
                img={pizzaImg}
                title={"pizza"}
                shorts={"Would you like to try a dish?"}
            ></MenuCategory>

            <MenuCategory
                items={salad}
                img={saladImg}
                title={"salad"}
                shorts={"Would you like to try a dish?"}>

            </MenuCategory>

            <MenuCategory
                items={soup} img={soupImg}
                title={"soup"}
                shorts={"Would you like to try a dish?"} >

            </MenuCategory>


        </div>
    );
};

export default OurMenu;