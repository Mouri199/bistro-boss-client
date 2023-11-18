import { Link } from "react-router-dom";
import MenuItem from "../../HomePage/MenuItem/MenuItem";
import Cover from "../Cover/Cover";



const MenuCategory = ({ items,title,img }) => {
    return (
        <div>
            {title && <Cover img={img} title={title}  shorts={"Would you like to try a dish?"}></Cover>}
            <div className="grid lg:grid-cols-2 gap-7 lg:mt-16 mt-10 mb-16 md:grid-cols-2 grid-cols-1">
                {
                    items?.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }

            </div>
            <div className="flex justify-center mb-10">
                <Link to={`/ourshop/${title}`}> <button className="uppercase flex item-center btn btn-outline border-0 border-b-4  text-xl font-inter">ORDER YOUR FAVOURITE FOOD</button></Link>

            </div>
        </div>
    );
};

export default MenuCategory;