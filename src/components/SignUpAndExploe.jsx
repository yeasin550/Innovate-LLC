"use client"

import Image from "next/image";
import image1 from "../assets/Ellipse1.png";
import image2 from "../assets/Ellipse2.png";
import image3 from "../assets/Ellipse3.png";
import React, { useState } from 'react';



const cards = [
    { id: 1, title: 'Card 1', content: 'This is the first card I have been using this services for years, and they consistently exceed my expectations. The support team is fantastic!. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris', color: 'bg-gradient-to-r from-blue-500 to-purple-500' },
    { id: 2, title: 'Card 2', content: 'This is the second card. I have been using this services for years, and they consistently exceed my expectations. The support team is fantastic! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris', color: 'bg-gradient-to-r from-green-500 to-yellow-500' },
    { id: 3, title: 'Card 3', content: 'This is the third card. I have been using this services for years, and they consistently exceed my expectations. The support team is fantastic! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris', color: 'bg-gradient-to-r from-pink-500 to-red-500' },
    { id: 4, title: 'Card 4', content: 'This is the four card. I have been using this services for years, and they consistently exceed my expectations. The support team is fantastic! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris', color: 'bg-gradient-to-r from-orange-500 to-red-500' },
];

const SignUpAndExploe = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleCardClick = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };
    return (
        <div className="w-11/12 mx-auto md:p-6 mt-64">


            <div className="md:flex items-center justify-center gap-12 py-5 ">
                <div className="md:w-1/2 relative md:mb-0 mb-64">
                    <div className=" bg-orange-400 border-black rounded-xl w-64 h-64">
                         <Image
                            src=" https://img.freepik.com/free-psd/frames-mock-up-design_1297-128.jpg?w=740&t=st=1726756165~exp=1726756765~hmac=cba92ec39d8f5746d564c9db17f5ac7b49ad343f8861d1db259167f0c7325716"
                            alt="Picture of the author"
                            width={500}
                            height={500}
                            quality={100}
                            className="rounded-xl"
                        />
                    </div>
                    <div className="absolute -mt-8 ml-56 rounded-full">
                        <Image
                            src={image1}
                            alt="Picture of the author"
                            width={80}
                            height={80}
                            quality={100}
                        />
                    </div>
                    <div className="absolute md:ml-80 md:-mt-24 bg-purple-500 border-black rounded-xl w-64 md:w-56 h-56">
                        <Image
                            src=" https://img.freepik.com/free-vector/abstract-splatter-squares-background_23-2147489790.jpg?t=st=1726756150~exp=1726759750~hmac=4dd120d4a3e60de78bf944943784c1e24dc669e007021a783ebd9173a93205a1&w=740"
                            alt="Picture of the author"
                            width={500}
                            height={500}
                            quality={100}
                            className="rounded-xl"
                        />
                    </div>
                    <div className="absolute ml-[500px] mt-24 rounded-full">
                        <Image
                            src={image2}
                            alt="Picture of the author"
                            width={80}
                            height={80}
                            quality={100}
                        />
                    </div>
                    <div className="absolute md:ml-20 md:mt-24 mt-56 bg-purple-400 border-black rounded-xl  w-64 md:w-48 h-48">
                        <Image
                            src="https://img.freepik.com/free-vector/abstract-background-with-blank-photo-frame-montage-design_1048-12888.jpg?t=st=1726756960~exp=1726760560~hmac=57f82667d51f91fd934d5c2dbe806a2a7972c147786e33447bf70b239ae529df&w=740"
                            alt="Picture of the author"
                            width={500}
                            height={500}
                            quality={100}
                            className="rounded-xl"
                        />
                        
                    </div>
                    <div className="absolute ml-56 mt-64 rounded-full">
                         <Image
                            src={image3}
                            alt="Picture of the author"
                            width={80}
                            height={80}
                            quality={100}
                        />
                    </div>
                </div>
                <div className="md:w-1/2 md:pl-16 md:mt-64 mt-[500px]">
                    <p className="text-xl text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  qui officia deserunt mollit anim id est laborum..</p>
                    <button className="py-2 px-4 duration-1000 rounded-md border-2 border-purple-700 hover:bg-purple-600 hover:text-white mt-4">Explore Now</button>
                </div>

            </div>

            <div className="md:flex items-center justify-center gap-12 py-5 md:mt-72 mt-12">
                <div className="md:w-1/2">
                    <p className="text-xl text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in qui officia deserunt mollit anim id est laborum.
                    </p>
                    <button className="py-2 px-4 duration-1000 rounded-md border-2 border-purple-700 hover:bg-purple-600 hover:text-white mt-4">
                        Explore Now
                    </button>
                </div>

                {/* Second div with cards */}
                <div className="relative h-96 md:w-96 w-80 mx-auto mt-10">
                    {cards.map((card, index) => {
                        const position = index - activeIndex;
                        const isBehind = position === 1 || position === -2; // For seeing behind card

                        return (
                            <div
                                key={card.id}
                                className={`absolute top-0 left-0 w-full h-full rounded-2xl p-5 shadow-md text-white transition-transform duration-500 ease-in-out
                            ${card.color} 
                            ${index === activeIndex ? 'z-20 scale-105' : 'z-10 scale-90'}
                            ${isBehind ? 'translate-x-10 opacity-50' : 'translate-x-0 opacity-100'}
                        `}
                                onClick={handleCardClick}
                                style={{
                                    transform: `translateX(${index === activeIndex ? '0px' : '20px'})`,
                                }}
                            >
                                <h2 className="text-2xl text-center font-bold mb-4">{card.title}</h2>
                                <p className="text-justify">{card.content}</p>
                            </div>
                        );
                    })}
                </div>
           </div>
        </div>
    );
};

export default SignUpAndExploe;