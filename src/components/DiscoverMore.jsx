import React from 'react';
import { ChevronDown } from 'lucide-react';

const categories = ['All Categories', 'Art', 'Celebrities', 'Gaming', 'Sport', 'Music'];

const cards = [
    { title: 'Art stuff', price: '598 TK', count: "1 of 64", gradient: 'from-purple-500 to-purple-300' },
    { title: 'ABCD', price: '777 TK', count: "1 of 12", gradient: 'from-green-500 to-green-300' },
    { title: 'EFGH', price: '58 TK', count: "1 of 43", gradient: 'from-blue-300 to-blue-100' },
    { title: 'XYZ', price: '0', count: "1 of 76", gradient: 'from-purple-500 to-purple-300' },
    { title: 'Art stuff', price: '598 TK', count: "1 of 56", gradient: 'from-orange-500 to-purple-300' },
    { title: 'IJKL', price: '777 TK', count: "1 of 35", gradient: 'from-green-500 to-red-400' },
    { title: 'MNOP', price: '58 TK', count: "1 of 78", gradient: 'from-yellow-300 to-blue-400' },
    { title: 'QRST', price: '0', count: "1 of 78", gradient: 'from-red-500 to-purple-300' },
];

const DiscoverMore = () => {
    return (
        <div className="p-4 mb-12 md:mt-32 mt-[650px] sm:p-6 bg-white w-full sm:w-11/12 mx-auto">
            <h1 className="text-2xl sm:text-2xl font-bold mb-4 text-center sm:text-left">DISCOVER MORE</h1>

            <div className="flex flex-wrap justify-between items-center mb-6 space-y-2 sm:space-y-0">
                <div className="flex flex-wrap space-x-2 justify-center sm:justify-start">
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm ${index === 0 ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <button className="flex items-center space-x-1 bg-gray-100 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm">
                    <span>All Filters</span>
                    <ChevronDown size={16} />
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {cards.map((card, index) => (
                    <div key={index} className="bg-white p-4 rounded-2xl shadow-md shadow-gray-600 hover:shadow-purple-700 overflow-hidden">
                        <div className={`h-32 sm:h-48 w-full bg-gradient-to-br rounded-xl ${card.gradient}`}></div>
                        <div className="space-y-3">
                            <div className="flex -space-x-2 mb-2">
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} className="w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-gray-300 border-2 border-white"></div>
                                ))}
                            </div>
                            <h3 className="font-semibold text-sm sm:text-base">{card.title}</h3>
                            <div className="flex justify-between">                              
                            <p className="text-xs sm:text-sm text-gray-500">{card.price}</p>
                            <p className="text-xs sm:text-sm text-gray-500">{card.count}</p>
                            </div>
                            <div className="flex justify-between mt-2">
                                <button className="px-2 sm:px-4 py-1 bg-purple-600 text-white rounded-full text-xs sm:text-sm">
                                    D5VBD
                                </button>
                                <button className="px-2 sm:px-4 py-1 bg-teal-400 text-white rounded-full text-xs sm:text-sm">
                                    D5VBD
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DiscoverMore;
