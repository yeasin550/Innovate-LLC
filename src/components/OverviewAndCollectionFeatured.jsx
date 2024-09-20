"use client"

import React, { useState } from 'react';
import Overview from "@/components/Overview";

const OverviewAndCollectionFeatured = () => {
    const [bigCardColor, setBigCardColor] = useState('bg-green-500');

    const sideColors = ['bg-orange-500', 'bg-purple-400', 'bg-pink-300'];
    const bottomColors = ['bg-emerald-800', 'bg-cyan-400', 'bg-purple-500', 'bg-red-500'];

    const handleColorClick = (color) => {
        setBigCardColor(color);
    };



    return (
        <div>

            <div className="relative">
                <Overview />
            </div>

            <div className="md:p-6 md:-mt-96 absolute">
                <div className="w-11/12 mx-auto md:flex items-center justify-center">
                    <div className="md:w-1/2">
                        <div className="flex">
                            {/* Big card */}
                            <div className={`md:w-80 w-72 h-80 ${bigCardColor} rounded-lg mr-4`}></div>

                            {/* Side color small cards */}
                            <div className="flex flex-col space-y-4 md:mr-8">
                                {sideColors.map((color, index) => (
                                    <button
                                        key={index}
                                        className={`md:w-24 w-20 h-24 ${color} rounded-lg`}
                                        onClick={() => handleColorClick(color)}
                                    ></button>
                                ))}
                            </div>


                        </div>

                        {/* Bottom color cards */}
                        <div className="flex space-x-4 mt-4">
                            {bottomColors.map((color, index) => (
                                <button
                                    key={index}
                                    className={`md:w-24 w-20 h-24 ${color} rounded-lg`}
                                    onClick={() => handleColorClick(color)}
                                ></button>
                            ))}
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        {/* Text content */}
                        <div className="">
                            <h2 className="md:text-5xl text-3xl font-bold mb-4 text-purple-700">Collection Featured</h2>
                            <p className="text-gray-700 text-xl">
                                Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eiusmod tet ut labore et dolore magna aliqrit in vol uptate velit esse cillum sunt in culpa
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OverviewAndCollectionFeatured;