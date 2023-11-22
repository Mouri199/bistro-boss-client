import { Link, NavLink } from "react-router-dom";
// import img from '../../assets/others/profile.png'
import { useContext } from "react";
import { AuthProvider } from "../AuthContributor/AuthContributor";


const NavBar = () => {
    const { user, logoutUser } = useContext(AuthProvider);

    const handleLogOut = () => {
        logoutUser()
            .then(() => console.log("You logged out successfully"))
            .catch(error => console.error(error))
    }


    return (
        <div>

            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <NavLink to='/'>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/ourmenu'>Our Menu</NavLink>
                            </li>
                            <li>
                                <NavLink to='/ourshop/soup'>Our Shop</NavLink>
                            </li>
                            <li>
                                <NavLink to='/login'>Login</NavLink>
                            </li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/ourmenu'>Our Menu</NavLink>
                        </li>
                        <li>
                            <NavLink to='/ourshop/soup'>Our Shop</NavLink>
                        </li>

                        <li>
                            {
                                user ? " " : <div>
                                    <NavLink to='/login '>
                                        Login</NavLink>
                                    {/* <NavLink to='/resiter'><li >
                                        Login</li></NavLink> */}
                                </div>
                            }
                        </li>
                        <li>
                            {user ? " " : <div>

                                <NavLink to='/register'><li >
                                    Register</li></NavLink>
                            </div>
                            }
                        </li>

                      <li>
                      {
                            user ? <NavLink onClick={handleLogOut}> Log Out</NavLink> : " "
                        }
                      </li>


                    </ul>
                </div>
                <div className="flex items-center">
                    <div className="flex items-center gap-3">

                        <div>
                            {user ? <img className="h-[50px] rounded-full" src={user.photoURL} alt="" /> : " "}
                        </div>
                        <p className="text-xl dark:text-white  lg:font-bold">
                            {
                                user && <span>{user.displayName}</span>
                            }
                        </p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default NavBar;