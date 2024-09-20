"use client";


import React, { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';

const navItems = ['Home', 'Event', 'Contact', 'Blog'];
const cardColors = ['bg-red-500', 'bg-blue-500', 'bg-pink-400', 'bg-green-300'];

const Navbar = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <div className="md:mb-0 mb-[1150px]">
            <div className="custom-shape-divider-top-1726723757">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
            <div className="">
                <nav className="container mx-auto px-8 py-4 md:flex justify-between items-center">
                    <div className="flex space-x-6">
                        {navItems.map((item, index) => (
                            <div key={index} className="relative group">
                                <button className="text-white flex items-center space-x-1">
                                    <span>{item}</span>
                                    <ChevronDown size={16} />
                                </button>
                                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block">
                                    {/* Dropdown content */}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-white rounded-full py-2 px-4 pr-10"
                        />
                        <Search className="absolute md:right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    </div>
                </nav>
                
                <div className="container mx-auto mt-20 px-4">
                <div className=" relative">
                    <div className="absolute  left-1/2 transform -translate-x-1/2 md:flex space-x-4">
                        {cardColors.map((color, index) => (
                            <div
                                key={index}
                                className={`md:w-64 w-72 md:hover:w-80 md:hover:h-80 h-64 ${color} rounded-md transition-all duration-300 ease-in-out cursor-pointer ${hoveredCard === index ? 'scale-125 z-10' : 'scale-100'
                                    }`}
                                style={{
                                    transform: `translateX(${hoveredCard !== null && hoveredCard !== index ? (hoveredCard < index ? '20px' : '-20px') : '0px'})`,
                                }}
                                onMouseEnter={() => setHoveredCard(index)}
                                onMouseLeave={() => setHoveredCard(null)}
                            />
                        ))}
                    </div>
                </div>
                </div>
                
            </div>
        </div>

    );
};

export default Navbar;