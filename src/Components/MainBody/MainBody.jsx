import Headroom from "react-headroom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";

const MainBody = () => {
    return (
        <div>
            <Headroom>
                <NavBar></NavBar>
            </Headroom>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainBody;