import React, { useState, useRef, useEffect } from 'react';
import cscdata from '../utility/csc.json';
// import { FaWhatsapp } from "react-icons/fa";
//<FaWhatsapp className='text-green-800'/>

const Csc = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [itemActive, setItemActive] = useState('All');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const sliderRef = useRef(null);

    useEffect(() => {
        console.log(cscdata);
    }, []);

    const categories = [
        "All",
        "Identity Services",
        "Driving License Services",
        "Financial Services",
        "Banking Services",
        "Educational Services",
        "Health Services",
        "Travel Services",
        "Utility Services",
        "Land and Property Services",
        "Telecom Services",
        "Pension Services",
        "Energy Services",
        "Labour Services"
    ];

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - sliderRef.current.offsetLeft);
        setScrollLeft(sliderRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Adjust scroll speed
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setItemActive(category);
    };

    const filteredServices = selectedCategory === 'All'
        ? cscdata.cscServices
        : cscdata.cscServices.filter(service => service.category === selectedCategory);

    return (
        <>
            <h1 className='text-3xl font-bold text-center mt-4'>CSC Services</h1>

            {/* Categories */}
            <div className='w-full h-auto flex justify-center gap-2'>
                <div className='xl:w-[95%] lg:w-[80%] md:w-[85%] sm:w-[90%] w-[95%] h-auto flex flex-col gap-2'>
                    <p className='font-bold pl-2'>Select Categories</p>
                    <div
                        ref={sliderRef}
                        className="w-full h-auto overflow-x-scroll flex gap-2 scrollbar-hide hidescroll p-2"
                        onMouseDown={handleMouseDown}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                    >
                        {categories.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => handleCategoryClick(item)}
                                className={`py-2 px-4 rounded-md whitespace-nowrap bg-[#BEC6A0] ${itemActive === item ? 'bg-black text-white' : ''} font-semibold cursor-pointer hover:bg-black hover:text-white`}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Filtered CSC Services */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-8 p-4">
                {filteredServices.map((service, index) => (
                    <div
                        key={index}
                        className="w-full bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
                    >
                        <div className="w-full h-full p-6 flex flex-col justify-between">
                            <div className='w-full h-auto'>
                                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                                <p className="text-gray-600 mb-4">{service.description}</p>
                                <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mb-4">
                                    {service.category}
                                </span>
                            </div>
                            <a
                                href={`https://wa.me/+917209854286?text=${encodeURIComponent(service.whatsappMessage)}`} // Replace <phone_number> with the actual phone number.
                                className="block w-full text-center bg-green-500 text-white font-semibold py-2 rounded hover:bg-green-600 transition duration-300"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Contact via WhatsApp 
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Csc;
