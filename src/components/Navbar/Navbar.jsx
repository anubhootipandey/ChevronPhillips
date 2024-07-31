import React from 'react';
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="bg-white p-6 shadow-md">
            <div className="container mx-auto flex flex-col">
                <div className="flex items-center justify-between">
                    <img src="https://www.cpchem.com/themes/custom/cpchem/logo.svg" alt="logo" className="h-[70px]" />
                    <div className="navbars">
                    <div className="flex justify-end items-center space-x-4">
                        <ul className="flex space-x-4">
                            <li><a href="#" className="text-gray-800 hover:text-gray-600">Contact Us</a></li>
                            <li><a href="#" className="text-gray-800 hover:text-gray-600">Locations</a></li>
                            <li><a href="#" className="text-gray-800 hover:text-gray-600">Login</a></li>
                        </ul>
                        <img src="https://www.cpchem.com/themes/custom/cpchem/dist/images/icon-input-search-gray.svg" alt="searchIcon" className="h-4 w-4" />
                    </div>
                    <div className=" mt-2 mb-[-25px] w-full">
                    <div className="flex justify-end">
                        <ul className="bottom-nav grid grid-cols-6 gap-0 w-full">
                            <li className="bottom-nav-item py-8 flex justify-center items-center"><a href="#" className="text-gray-800 hover:text-gray-600">Who We Are</a></li>
                            <li className="bottom-nav-item py-8 flex justify-center items-center"><a href="#" className="text-gray-800 hover:text-gray-600">What We Do</a></li>
                            <li className="bottom-nav-item py-8 flex justify-center items-center"><a href="#" className="text-gray-800 hover:text-gray-600">Sustainability</a></li>
                            <li className="bottom-nav-item py-8 flex justify-center items-center"><a href="#" className="text-gray-800 hover:text-gray-600">Media & Events</a></li>
                            <li className="bottom-nav-item py-8 flex justify-center items-center"><a href="#" className="text-gray-800 hover:text-gray-600">Resources</a></li>
                            <li className="bottom-nav-item py-8 flex justify-center items-center"><a href="#" className="text-gray-800 hover:text-gray-600">Careers</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
