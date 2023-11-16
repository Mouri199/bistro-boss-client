import { useEffect, useState } from "react";
import Section from "../HomePage/Section/Section";
import MenuItem from "../HomePage/MenuItem/MenuItem";



const Menu = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                setMenu(data)
                // const popularItems = data.filter(item => item.category === 'popular')
                // setMenu(popularItems)
            })

    }, [])

    const sixData = menu?.slice(0, 6)

    return (
        <div>
            <div className="mb-12">
                <Section
                    subHeading={"Check it Out"}
                    heading={"From our Menu"}></Section>
            </div>
            <div className="grid lg:grid-cols-2 gap-7 mb-16 md:grid-cols-2 grid-cols-1">
                {
                    sixData.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }

            </div>
            <div className="flex justify-center">
             <button className="uppercase flex item-center btn btn-outline border-0 border-b-4  text-xl font-inter">View all menu</button>
            </div>
        </div>
    );
};

export default Menu;