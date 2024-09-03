import React from 'react';
// Import the specific icons you want to use from react-icons
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-4 mt-10">
      <div className="container mx-auto px-4 flex flex-col gap-4 justify-between items-center">
        {/* Footer Navigation Links */}


        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/share/ASn3SqysAFUq5Tvv/?mibextid=qi2Omg" className="text-gray-600 hover:text-gray-900"
            rel='noreferrer' target='_blank'>
            <FaFacebook size={24} />
          </a>

          <a href="https://www.instagram.com/dharmvir2578?igsh=bmNzbzZ6YWphcXh4" className="text-gray-600 hover:text-gray-900"
            rel='noreferrer' target='_blank'>
            <FaInstagram size={24} />
          </a>

        </div>

        {/* Copyright Information */}
        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} DM Digital service point. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
