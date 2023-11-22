import { Helmet } from "react-helmet-async";
import Cover from "../Menus/Cover/Cover";
import shopImg from '../../assets/shop/banner2.jpg';
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useState } from "react";

import 'react-tabs/style/react-tabs.css'
import useMenu from "../../Hooks/useMenu";
import OrderTab from "../HomePage/Card/OrderTab";
import { useParams } from "react-router-dom";
import { Pagination } from "swiper/modules";


const OurShop = () => {
    const categories = ["salad", "dessert", "pizza", "soup", "drinks"]

    const { category } = useParams()
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu()
    console.log(category);

    // const pageSize = 6; // Number of items per page

    // const paginateItems = (items) => {
    //     // Calculate the start and end index for pagination
    //     const startIndex = tabIndex * pageSize;
    //     const endIndex = startIndex + pageSize;
    //     return items.slice(startIndex, endIndex);
    // };

    const salad = menu.filter(item => item.category === 'salad')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soup = menu.filter(item => item.category === 'soup')
    const drinks = menu.filter(item => item.category === 'drinks')





    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Our Shop</title>
            </Helmet>
            <Cover img={shopImg}
                headLine={"OUR SHOP"}
                title={"Would you like to try a dish?"}></Cover>


            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <div className="flex justify-center hover:text-[#BB8506]">
                        <Tab>Salad</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Drinks</Tab>
                        {/* <Tab>Drinks</Tab> */}
                    </div>

                </TabList>
                <TabPanel>
                    <OrderTab items={salad} ></OrderTab>
              
                </TabPanel>

                <TabPanel>
                    <OrderTab items={dessert} ></OrderTab>
              
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza} ></OrderTab>
              
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup} ></OrderTab>
              
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks} ></OrderTab>
              
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default OurShop;