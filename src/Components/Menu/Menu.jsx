import { useEffect, useState } from "react";
import Section from "../HomePage/Section/Section";
import MenuItem from "../HomePage/MenuItem/MenuItem";
import useMenu from "../../Hooks/useMenu";




const Menu = () => {
    const [menu] =useMenu()
    const popular = menu.filter(item => item.category === 'popular')

    return (
        <div>
            <div className="mb-12">
                <Section
                    subHeading={"Check it Out"}
                    heading={"From our Menu"}></Section>
            </div>
            <div className="grid lg:grid-cols-2 gap-7 mb-16 md:grid-cols-2 grid-cols-1">
                {
                    popular?.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }

            </div>
            <div className="flex justify-center mb-10">
             <button className="uppercase flex item-center btn btn-outline border-0 border-b-4  text-xl font-inter">View all menu</button>
            </div>
        </div>
    );
};

export default Menu;