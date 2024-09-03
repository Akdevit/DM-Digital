// src/AboutUs.js
import React from 'react';
import Profile from "../Images/dv.png";
import { FaFacebook,  FaInstagram } from 'react-icons/fa';


const AboutUs = () => {
    return (
        <section className="w-full h-auto flex justify-center items-center mt-8 px-4 py-6 bg-gradient-to-r from-blue-50 via-white to-blue-50 relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={Profile}
                    alt="Background"
                    className="w-full h-full object-cover opacity-20"
                />
            </div>

            {/* Content Section */}
            <div className="relative z-10 w-full max-w-5xl flex flex-col md:flex-row items-center justify-center text-center md:text-left">
                {/* Image Section */}
                <div className="w-full md:w-1/2 p-4">
                    <img
                        className="w-full max-w-md mx-auto h-auto rounded-lg "
                        src={Profile}
                        alt="About Us"
                    />
                </div>

                {/* Text Section */}
                <div className="w-full md:w-1/2 p-4">
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        We are committed to transforming the way you access government services by bringing them all online, directly to your fingertips. Our mission is to simplify every step of the process, from obtaining essential documents to accessing digital services. We strive to make it easier and more convenient for you, with a focus on efficiency and user-friendliness. Let us handle the complexities so you can enjoy a seamless approach to all your government service needs.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 mb-6 justify-center md:justify-start">
                        <a
                            href={`https://wa.me/+917209854286?text=Hi,%20I%20am%20interested%20in%20learning%20more%20about%20your%20services.%20Could%20you%20please%20provide%20more%20details?`}
                            className="bg-[#153448] text-white px-6 py-3 rounded-lg "
                            rel='noopener noreferrer'
                            target='_blank'
                        >
                            Contact Us
                        </a>
                        <div className="flex items-center gap-1 text-gray-600">
                            <a href="https://www.facebook.com/share/ASn3SqysAFUq5Tvv/?mibextid=qi2Omg" className="text-gray-600 p-2 hover:text-gray-900"
                                rel='noreferrer' target='_blank'>
                                <FaFacebook size={24} />
                            </a>

                            <a href="https://www.instagram.com/dharmvir2578?igsh=bmNzbzZ6YWphcXh4" className="text-gray-600 p-2 hover:text-gray-900"
                                rel='noreferrer' target='_blank'>
                                <FaInstagram size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
