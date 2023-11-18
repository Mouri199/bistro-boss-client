import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <div>
            <header className="navbar lg:h-24 fixed  text-white backdrop-sepia-0 bg-black/60 ">

                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-black rounded-box w-52">
                       <Link className="mr-5 hover:text-gray-900">Home</Link>
                       <Link className="mr-5 hover:text-gray-900">Contact Us</Link>
                       <Link className="mr-5 hover:text-gray-900">Dashboard</Link>
                       <Link to='/ourshop/soup' className="mr-5 hover:text-gray-900">Our Shop</Link>
                       <Link to='/ourmenu' className="mr-5 hover:text-gray-900">Our Menu</Link>
                    </ul>
                </div>
                <div className="container lg:sticky hidden mx-auto lg:flex flex-wrap lg:p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font text-white font-medium items-center lg:mb-4 md:mb-0">

                        <div className="ml-3 font-cinzel lg:text-3xl">Bistro Boss <br /><span className="lg:text-xl">R e s t a u r e n t</span></div>
                    </a>
                    <nav className="md:ml-auto  font-inter lg:flex flex-wrap items-center text-base justify-center">
                        <Link className="mr-5 hover:text-gray-900">Home</Link>
                        <Link className="mr-5 hover:text-gray-900">Contact Us</Link>
                        <Link className="mr-5 hover:text-gray-900">Dashboard</Link>
                        <Link to='/ourshop/soup' className="mr-5 hover:text-gray-900">Our Shop</Link>
                        <Link to='/ourmenu' className="mr-5 hover:text-gray-900">Our Menu</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    </nav>
                    <button className="lg:inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </header>
        </div>
    );
};

export default NavBar;