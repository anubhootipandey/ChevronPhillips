import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import logo from "../assets/logo.svg";
import image1 from "../assets/images1.jpg";
import image2 from "../assets/images2.jpg";
import image3 from "../assets/images3.jpg";
import image4 from "../assets/images4.jpg";
import image5 from "../assets/images5.jpg";
import image6 from "../assets/images6.jpg";
import searchIcon from "../assets/search.svg";
import closeIcon from "../assets/closeIcon.svg";
import hamburgerIcon from "../assets/menu.png"; 


const Navbar = () => {
    const [hoveredItem, setHoveredItem] = useState(null);
    const [searchMode, setSearchMode] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [hoveredSubItem, setHoveredSubItem] = useState(null);
    const [expandedItems, setExpandedItems] = useState({});

    const navItems = [
        {
            title: "Who We Are",
            image: image1,
            text: "We make the petrochemical solutions found in products of all kinds — with purpose, collaboration and care.",
            option: ['Mission & Values', 'Company History', 
                {title: 'Environmental, Health, Safety & Security', subOptions: ['Product Summaries', 'Regulatory Information']}, 
                'Diversity, Equity & Inclusion', 'Community Involvement', 
                {title: 'Leadership', subOptions: 
                    ['Steven Prusak', 'Bryan Canfield', 'Darren Ercolani', 'Tim Hill', 'Justine Smith', 'Maricela Caballero', 'Elliott W.H Johnson', 'Allison Martinez', 'Kevin Ristroph']}, 
                'Financials', {title: 'Suppliers', subOptions: ['Golden Triangle Polymers LLC', 'Supplier Diversity']}],
        },
        {
            title: "What We Do",
            image: image2,
            text: "We offer a wide range of solutions essential to your products.",
            option: [{title: 'Industries', subOptions: ['Automotive', 'Energy & Chemical', 'Food & Agriculture', 'Home & Electronics', 'Medical & Pharmaceutical', 'Personal Care', 'Recreational', 'Industrial']}, 
            {title: 'Solutions', subOptions: ['Aromatics', 'Drilling Specialities', 'Normal Alpha Olefins', 'Olefins', 'Performance Pipe', 'Polyalphaolefins', 'Polyethylene', 'Speciality Chemicals']}, 
            {title: 'Licensing', subOptions: ['Overview', 'MarTECH Technology', 'Aromax Technology', 'Contact Us']}, 
            'Product Finder'],
        },
        {
            title: "Sustainability",
            image: image3,
            text: "Our sustainability strategy encompasses the concerns and issues identified by our stakeholders and we are committed to addressing these issues.",
            option: ['Our Story', 'Climate Change', 
                {title: 'Product Sustainability & Circularity', subOptions: ['Product Responsibility', 'Plastic Management']}, 
                {title: 'Social Responsibility', subOptions: ['Protect Human Rights', 'Priortize Health, Safety and Well-being', 'caring for Our Communities']}, 
                'UN SDGs', 
                {title: 'Impact & Reporting', subOptions: ['Managing Climate Risks', 'Sustainanility Report']}, 
                'Collaborations and Engagements', 'Sustainably Smart'],
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
            option: [
                {title: 'Find a Job', subOptions: ['Applicant Login', 'Create an Account']}, 
                {title: 'Working with us', subOptions: ['Benefits & Rewards', 'Safety & Sustainability', 'Career & Leadership', 'Intern & Graduate Programs', 'Women', 'Veterans']}, 
                'Job Openings', 'Europe Job Opportunities', 'Job Opportuniteiten Europa'],
        }
    ];

    const handleSearchClick = () => {
        setSearchMode(true);
    };

    const handleCloseSearch = () => {
        setSearchMode(false);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const handleItemClick = (index) => {
        setExpandedItems(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchMode && !event.target.closest('.search-input, .search-icon')) {
                setSearchMode(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [searchMode]);

    return (
        <nav className="bg-white p-6 shadow-md">
            <div className="container mx-auto flex flex-col">
                <div className="flex items-center justify-between">
                    <img src={logo} alt="logo" className="md:h-[70px] h-[60px]" />

                    {/* menu button */}
                    <img 
                        src={hamburgerIcon} 
                        alt="menu" 
                        className="h-[40px] w-[40px] ml-[10px] cursor-pointer block lg:hidden" 
                        onClick={toggleMobileMenu} 
                    />
                    
                   {/* Mobile menu */}
                   <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
                        <div className="close-button">
                            <img src={closeIcon} alt="close" className="cursor-pointer" onClick={toggleMobileMenu} />
                        </div>
                        <div className="menu-items">
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <a href="#" className="text-gray-800 text-lg font-bold" onClick={() => handleItemClick(index)}>{item.title}</a>
                                    {expandedItems[index] && (
                                        <ul className="pl-4 mt-2">
                                            {item.option.map((option, optIndex) => (
                                                typeof option === 'string' ? (
                                                    <li key={optIndex} className="py-1"><a href="#">{option}</a></li>
                                                ) : (
                                                    <li key={optIndex} className="py-1">
                                                        <a href="#" onClick={(e) => e.preventDefault()}>{option.title}</a>
                                                        <ul className="pl-4">
                                                            {option.subOptions.map((subOption, subOptIndex) => (
                                                                <li key={subOptIndex} className="py-1"><a href="#">{subOption}</a></li>
                                                            ))}
                                                        </ul>
                                                    </li>
                                                )
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                            <li><a href="#" className="text-gray-800 text-lg font-bold">Contact Us</a></li>
                            <li><a href="#" className="text-gray-800 text-lg font-bold">Locations</a></li>
                            <li><a href="#" className="text-gray-800 text-lg font-bold">Login</a></li>
                        </div>
                        <div className="search-section">
                            <input type="text" placeholder="Search ..." />
                            <button>Search</button>
                        </div>
                    </div>


                    {/* top nav */}
                    <div className="navbars hidden lg:flex flex-col">
                        <div className="top-nav flex justify-end items-center space-x-4 mb-[-10px] border-t-2 mt-[-25px]" style={{ height: '50px' }}>
                            {searchMode ? (
                                <div className="search-input relative flex items-center w-full">
                                    <input type="text" className="w-full px-4 py-2" placeholder="Search..." autoFocus />
                                    <img src={closeIcon} alt="close" className="absolute right-2 cursor-pointer" onClick={handleCloseSearch} />
                                </div>
                            ) : (
                                <>
                                    <ul className="flex space-x-4">
                                        <li><a href="#" className="text-gray-800 hover:text-gray-600">Contact Us</a></li>
                                        <li><a href="#" className="text-gray-800 hover:text-gray-600">Locations</a></li>
                                        <li><a href="#" className="text-gray-800 hover:text-gray-600">Login</a></li>
                                    </ul>
                                    <img src={searchIcon} alt="search" className="h-[50px] w-[50px] text-gray-600 px-4 border-l-2 search-icon cursor-pointer" onClick={handleSearchClick} />
                                </>
                            )}
                        </div>

                        {/* bottom nav */}
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
                                                <div className="card-modal mt-[-4px] absolute top-24 left-0 bg-white shadow-lg flex"
                                                    style={{
                                                        left: (index >= navItems.length - 5) ? 'auto' : '0',
                                                        right: (index >= navItems.length - 5) ? '0' : 'auto'
                                                    }}>
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
                                                    <div className="right-card w-full grid grid-cols-1 gap-0 relative">
                                                        {item.option.map((opt, optIndex) => (
                                                            typeof opt === 'string' ? (
                                                                <div key={optIndex} className="option-box border p-1">{opt}</div>
                                                            ) : (
                                                                <div 
                                                                    key={optIndex} 
                                                                    className="option-box border p-1 relative"
                                                                    onMouseEnter={() => setHoveredSubItem(optIndex)}
                                                                    onMouseLeave={() => setHoveredSubItem(null)}
                                                                >
                                                                    {opt.title}
                                                                    <span className="arrow">&gt;</span>
                                                                    {hoveredSubItem === optIndex && (
                                                                        <div className="sub-options absolute top-0 mt-[-1px] ml-[120px] w-[260px] p-0 bg-white shadow-lg z-10">
                                                                            {opt.subOptions.map((subOpt, subOptIndex) => (
                                                                                <div key={subOptIndex} className="option-box border p-2">{subOpt}</div>
                                                                            ))}
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            )
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
