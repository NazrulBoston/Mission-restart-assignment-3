import { Link, NavLink } from "react-router";

import logo from "../../../assets/logo.png"
import Gradient from "../../Gradient/Gradient";
import { FaGithub } from "react-icons/fa";


const Navbar = () => {

    const navItems = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? "font-semibold" : ""   // ✅ remove default styling, keep minimal
                }
            >
                {({ isActive }) =>
                    isActive ? (
                        <Gradient>Home</Gradient>   // ✅ show gradient ONLY when active
                    ) : (
                        "Home"
                    )
                }
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/apps"
                className={({ isActive }) =>
                    isActive ? "font-semibold" : ""   // ✅ remove default styling, keep minimal
                }
            >
                {({ isActive }) =>
                    isActive ? (
                        <Gradient>Apps</Gradient>   // ✅ show gradient ONLY when active
                    ) : (
                        "Apps"
                    )
                }
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/installation"
                className={({ isActive }) =>
                    isActive ? "font-semibold" : ""   // ✅ remove default styling, keep minimal
                }
            >
                {({ isActive }) =>
                    isActive ? (
                        <Gradient>Installation</Gradient>   // ✅ show gradient ONLY when active
                    ) : (
                        "Installation"
                    )
                }
            </NavLink>
        </li>


    </>

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            navItems
                        }
                    </ul>
                </div>
                <Link to="/">
                    <div className="flex items-center gap-1 text-">

                        <img className="w-10 h-10" src={logo} alt="" />
                        <p className="font-bold"><Gradient>HERO.IO</Gradient></p>
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navItems
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <a
                    href="https://github.com/NazrulBoston"  // ✅ GitHub URL
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-white 
               bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:opacity-90 transition"
                >
                    <FaGithub />
                    Contribute
                </a>
            </div>
        </div>
    );
};

export default Navbar;