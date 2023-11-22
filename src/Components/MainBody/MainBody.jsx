import Headroom from "react-headroom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import { Outlet, useLocation } from "react-router-dom";

const MainBody = () => {
    const location = useLocation()
    console.log(location);

    const noHeaderFooter = location.pathname.includes('login') ||location.pathname.includes('register')
    return (
        <div>
            { noHeaderFooter || <Headroom>
                <NavBar></NavBar>
            </Headroom>}
            <Outlet></Outlet>
           { noHeaderFooter|| <Footer></Footer>}
        </div>
    );
};

export default MainBody;