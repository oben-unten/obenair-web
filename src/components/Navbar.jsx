import React, { useEffect, useState } from "react";
import { Link } from "gatsby";

const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);
    const [dropdownToggled, setDropdownToggled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        document.addEventListener('scroll', handleScroll);
        return () => document.removeEventListener('scroll', handleScroll);
    }, []);

    return <>
        <nav className={`${(scrolled || dropdownToggled) ? 'bg-yellow-50' : 'bg-transparent'} fixed w-full z-30 top-0 duration-300 ease-in-out`}>
            <div className="w-full px-5 lg:px-20 flex flex-wrap items-center justify-between mt-0 py-2">
                <div className="flex items-center">
                    <Link className="toggleColour no-underline hover:no-underline font-bold text-2xl lg:text-4xl font-serif" to="/">
                        Oben Air.
                    </Link>
                </div>
                <div className="block lg:hidden pr-4">
                    <button id="nav-toggle" className="flex items-center p-1 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out" onClick={() => setDropdownToggled(!dropdownToggled)}>
                        <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <div className={`${!dropdownToggled && 'hidden'} w-full flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 text-black p-4 lg:p-0 z-20`}>
                    <ul className="list-reset lg:flex justify-end flex-1 items-center">
                        <li className="mr-3">
                            <Link className="inline-block py-2 px-4 text-black" activeClassName="font-bold" to="/">Festival</Link>
                        </li>
                        <li>
                            <Link className="inline-block py-2 px-4 text-black" activeClassName="font-bold" to="/verein">Oben &amp; Unten e.V.</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <hr className="border-b border-gray-800 my-0 py-0" />
        </nav>
    </>;
};

export default Navbar;