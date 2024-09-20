"use client"

import { ChevronRight } from 'lucide-react';
import React, { useEffect, useState } from 'react';



const cards = [
    { color: 'bg-pink-300', title: 'Overview' },
    { color: 'bg-purple-300', title: 'Features' },
    { color: 'bg-green-200', title: 'Pricing' },
    { color: 'bg-orange-300', title: 'Humble' },
    { color: 'bg-green-200', title: 'Typing' },
];

const Overview = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, []);
    return (
        <div>
            <div className="bg-gradient-to-b from-orange-100 to-[#6BE6A8] mt-32">
                <div className="px-20">
                    <div className="relative h-[500px] ">
                        <div className="absolute inset-0 md:flex items-center justify-center gap-10">

                            <div className="md:w-1/2">
                                <h1 className="text-4xl font-bold">Overveiw</h1>
                                <p className="text-lg text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>

                            <div className="relative w-full max-w-3xl h-96 ml-12 md:-mt-56">
                                {cards.map((card, index) => {
                                    let position = index - activeIndex;
                                    if (position < 0) position += cards.length;

                                    return (
                                        <div
                                            key={index}
                                            className={`absolute top-0 left-0 w-64 h-72 ${card.color} rounded-lg shadow-lg transition-all duration-500 ease-in-out ${position === 0 ? 'z-20 scale-125' : 'z-10'
                                                } ${position === 1 ? 'translate-x-full' :
                                                    position === 2 ? 'translate-x-[200%]' : '-translate-x-full'
                                                }`}
                                            style={{
                                                transform: `translateX(${position * 100}%) scale(${position === 0 ? 1.25 : 1})`,
                                            }}
                                        >
                                            <div className="p-6">
                                                <h2 className="text-2xl font-bold mb-4">{card.title}</h2>
                                                <p className="text-sm">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                                    incididunt ut labore et dolore magna aliqua.
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <button
                            onClick={nextSlide}
                            className="absolute right-4 hover:bg-purple-700 top-1/2 transform -translate-y-1/2 bg-white  rounded-full p-2 shadow-lg z-30"
                        >
                            <ChevronRight className="w-8 h-8 text-gray-800 hover:text-white" />
                        </button>
                    </div>

                </div>
              
            </div>
           
            <div className="top-0 left-0 w-full leading-none">
                <svg className="relative block w-[150%] sm:w-[180%] md:w-[200%] lg:w-[220%] xl:w-[280%] h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#6BE6A8]"></path>
                </svg>
            </div>

        </div>

    );
};

export default Overview;