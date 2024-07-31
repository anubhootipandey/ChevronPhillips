import React, { useState } from 'react';
import "./Navbar.css";
import logo from "../assets/logo.svg";
import image1 from "../assets/images1.jpg";
import image2 from "../assets/images2.jpg";
import image3 from "../assets/images3.jpg";
import image4 from "../assets/images4.jpg";
import image5 from "../assets/images5.jpg";
import image6 from "../assets/images6.jpg";
import search from "../assets/search.svg";

const Navbar = () => {
    const [hoveredItem, setHoveredItem] = useState(null);

    const navItems = [
        {
            title: "Who We Are",
            image: image1,
            text: "We make the petrochemical solutions found in products of all kinds — with purpose, collaboration and care.",
            option: ['Mission & Values', 'Company History', 'Environmental, Health, Safety & Security', 'Diversity, Equity & Inclusion', 'Community Involvement', 'Leadership', 'Financials', 'Suppliers'],
        },
        {
            title: "What We Do",
            image: image2,
            text: "We offer a wide range of solutions essential to your products.",
            option: ['Industries', 'Solutions', 'Licensing', 'Product Finder'],
        },
        {
            title: "Sustainability",
            image: image3,
            text: "Our sustainability strategy encompasses the concerns and issues identified by our stakeholders and we are committed to addressing these issues.",
            option: ['Our Story', 'Climate Change', 'Product Sustainability & Circularity', 'Social Responsibility', 'UN SDGs', 'Impact & Reporting', 'Collaborations and Engagements', 'Sustainably Smart'],
        },
        {
            title: "Media & Events",
            image: image4,
            text: "The latest news, content and events about our company, initiatives, markets and products.",
            option: ['News', 'Videos', 'Events', 'Social'],
        },
        {
            title: "Resources",
            image: image5,
            text: "Our safety, technical and regulatory product information, as well as company and industry resources.",
            option: ['Safety Data Sheet(SDS)', 'Technical Data Sheets(TDS)', 'Product Summaries', 'Product Regulatory Overviews(PRO)', 'Credit Inquiry', 'Industry Glossary', 'Railcar Outage Tables', 'Terms and Conditions', 'CLM Event Sighting Codes'],
        },
        {
            title: "Careers",
            image: image6,
            text: "We’re a company with deep-rooted values, and we’re looking for people like you to join our team.",
            option: ['Find a Job', 'Working with us', 'Job Openings', 'Europe Job Opportunities', 'Job Opportuniteiten Europa'],
        }
    ];

    return (
        <nav className="bg-white p-6 shadow-md">
            <div className="container mx-auto flex flex-col">
                <div className="flex items-center justify-between">
                    <img src={logo} alt="logo" className="h-[70px]" />
                    <div className="navbars">
                        <div className="top-nav flex justify-end items-center space-x-4">
                            <ul className="flex space-x-4">
                                <li><a href="#" className="text-gray-800 hover:text-gray-600">Contact Us</a></li>
                                <li><a href="#" className="text-gray-800 hover:text-gray-600">Locations</a></li>
                                <li><a href="#" className="text-gray-800 hover:text-gray-600">Login</a></li>
                            </ul>
                            <img src={search} alt="searchIcon" className="h-4 w-4" />
                        </div>
                        <div className="mt-2 mb-[-25px] w-full">
                            <div className="flex justify-end">
                                <ul className="bottom-nav grid grid-cols-6 gap-0 w-full">
                                    {navItems.map((item, index) => (
                                        <li
                                            key={index}
                                            className="bottom-nav-item py-8 flex justify-center items-center relative"
                                            onMouseEnter={() => setHoveredItem(index)}
                                            onMouseLeave={() => setHoveredItem(null)}
                                        >
                                            <a href="#" className="text-gray-800 hover:text-gray-600">{item.title}</a>
                                            {/* dropdown model */}
                                            {hoveredItem === index && (
                                                <div className="card-modal absolute top-24 left-0 bg-white shadow-lg flex">
                                                    {/* leftcard */}
                                                    <div className="left-card w-full flex flex-col items-start">
                                                        <img src={item.image} alt={item.title} className="mb-4" />
                                                        <div className="text-white p-4">
                                                            <h4 className="text-lg font-bold">{item.title}</h4>
                                                            <p className="mt-2 text-md">{item.text}</p>
                                                        </div>
                                                        <button className='py-2 px-4 text-white m-4 border border-blue-400'>Learn more</button>
                                                    </div>
                                                    {/* rightcard */}
                                                    <div className="right-card w-full grid grid-cols-1 gap-0">
                                                        {item.option.map((opt, optIndex) => (
                                                            <div key={optIndex} className="option-box border p-1">{opt}</div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </li>
                                    ))}
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